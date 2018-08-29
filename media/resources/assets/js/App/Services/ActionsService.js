import {RecentItems} from '../Config/MediaConfig';
import {Helpers} from '../Helpers/Helpers';
import {MessageService} from '../Services/MessageService';

export class ActionsService {
    static handleDropdown() {
        let selected = _.size(Helpers.getSelectedItems());

        ActionsService.renderActions();

        if (selected > 0) {
            $('.rv-dropdown-actions').removeClass('disabled');
        } else {
            $('.rv-dropdown-actions').addClass('disabled');
        }
    }

    static handlePreview() {
        let selected = [];

        _.each(Helpers.getSelectedFiles(), function (value, index) {
            if (_.includes(['image', 'youtube', 'pdf', 'text', 'video'], value.type)) {
                selected.push({
                    src: value.url
                });
                RecentItems.push(value.id);
            }
        });

        if (_.size(selected) > 0) {
            $.fancybox.open(selected);
            Helpers.storeRecentItems();
        } else {
            this.handleGlobalAction('download');
        }
    }

    static handleCopyLink() {
        let links = '';
        _.each(Helpers.getSelectedFiles(), function (value, index) {
            if (!_.isEmpty(links)) {
                links += '\n';
            }
            links += value.full_url;
        });
        let $clipboardTemp = $('.js-rv-clipboard-temp');
        $clipboardTemp.data('clipboard-text', links);
        new Clipboard('.js-rv-clipboard-temp', {
            text: function (trigger) {
                return links;
            }
        });
        MessageService.showMessage('success', RV_MEDIA_CONFIG.translations.clipboard.success, RV_MEDIA_CONFIG.translations.message.success_header);
        $clipboardTemp.trigger('click');
    }

    static handleGlobalAction(type, callback) {
        let selected = [];
        _.each(Helpers.getSelectedItems(), function (value, index) {
            selected.push({
                is_folder: value.is_folder,
                id: value.id,
                full_url: value.full_url
            });
        });

        switch (type) {
            case 'rename':
                $('#modal_rename_items').modal('show').find('form.rv-form').data('action', type);
                break;
            case 'copy_link':
                ActionsService.handleCopyLink();
                break;
            case 'preview':
                ActionsService.handlePreview();
                break;
            case 'trash':
                $('#modal_trash_items').modal('show').find('form.rv-form').data('action', type);
                break;
            case 'delete':
                $('#modal_delete_items').modal('show').find('form.rv-form').data('action', type);
                break;
            case 'empty_trash':
                $('#modal_empty_trash').modal('show').find('form.rv-form').data('action', type);
                break;
            case 'download':
                let downloadLink = RV_MEDIA_URL.download;
                let count = 0;
                _.each(Helpers.getSelectedItems(), function (value, index) {
                    if (!_.includes(Helpers.getConfigs().denied_download, value.mime_type)) {
                        downloadLink += (count === 0 ? '?' : '&') + 'selected[' + count + '][is_folder]=' + value.is_folder + '&selected[' + count + '][id]=' + value.id;
                        count++;
                    }
                });
                if (downloadLink !== RV_MEDIA_URL.download) {
                    window.open(downloadLink, '_blank');
                } else {
                    MessageService.showMessage('error', RV_MEDIA_CONFIG.translations.download.error, RV_MEDIA_CONFIG.translations.message.error_header);
                }
                break;
            default:
                ActionsService.processAction({
                    selected: selected,
                    action: type
                }, callback);
                break;
        }
    }

    static processAction(data, callback = null) {
        $.ajax({
            url: RV_MEDIA_URL.global_actions,
            type: 'POST',
            data: data,
            dataType: 'json',
            beforeSend: function () {
                Helpers.showAjaxLoading();
            },
            success: function (res) {
                Helpers.resetPagination();
                if (!res.error) {
                    MessageService.showMessage('success', res.message, RV_MEDIA_CONFIG.translations.message.success_header);
                } else {
                    MessageService.showMessage('error', res.message, RV_MEDIA_CONFIG.translations.message.error_header);
                }
                if (callback) {
                    callback(res);
                }
            },
            complete: function (data) {
                Helpers.hideAjaxLoading();
            },
            error: function (data) {
                MessageService.handleError(data);
            }
        });
    }

    static renderRenameItems() {
        let VIEW = $('#rv_media_rename_item').html();
        let $itemsWrapper = $('#modal_rename_items .rename-items').empty();

        _.each(Helpers.getSelectedItems(), function (value, index) {
            let item = VIEW
                .replace(/__icon__/gi, value.icon || 'fa fa-file-o')
                .replace(/__placeholder__/gi, 'Input file name')
                .replace(/__value__/gi, value.name)
            ;
            let $item = $(item);
            $item.data('id', value.id);
            $item.data('is_folder', value.is_folder);
            $item.data('name', value.name);
            $itemsWrapper.append($item);
        });
    }

    static renderActions() {
        let hasFolderSelected = Helpers.getSelectedFolder().length > 0;

        let ACTION_TEMPLATE = $('#rv_action_item').html();
        let initialized_item = 0;
        let $dropdownActions = $('.rv-dropdown-actions .dropdown-menu');
        $dropdownActions.empty();

        let actionsList = $.extend({}, true, Helpers.getConfigs().actions_list);

        if (hasFolderSelected) {
            actionsList.basic = _.reject(actionsList.basic, function (item) {
                return item.action === 'preview';
            });
            actionsList.file = _.reject(actionsList.file, function (item) {
                return item.action === 'copy_link';
            });

            if (!_.includes(RV_MEDIA_CONFIG.permissions, 'folders.create')) {
                actionsList.file = _.reject(actionsList.file, function (item) {
                    return item.action === 'make_copy';
                });
            }

            if (!_.includes(RV_MEDIA_CONFIG.permissions, 'folders.edit')) {
                actionsList.file = _.reject(actionsList.file, function (item) {
                    return _.includes(['rename'], item.action);
                });

                actionsList.user = _.reject(actionsList.user, function (item) {
                    return _.includes(['rename'], item.action);
                });
            }

            if (!_.includes(RV_MEDIA_CONFIG.permissions, 'folders.trash')) {
                actionsList.other = _.reject(actionsList.other, function (item) {
                    return _.includes(['trash', 'restore'], item.action);
                });
            }

            if (!_.includes(RV_MEDIA_CONFIG.permissions, 'folders.delete')) {
                actionsList.other = _.reject(actionsList.other, function (item) {
                    return _.includes(['delete'], item.action);
                });
            }

            if (!_.includes(RV_MEDIA_CONFIG.permissions, 'folders.favorite')) {
                actionsList.other = _.reject(actionsList.other, function (item) {
                    return _.includes(['favorite', 'remove_favorite'], item.action);
                });
            }
        }

        let selectedFiles = Helpers.getSelectedFiles();

        let can_preview = false;
        _.each(selectedFiles, function (value) {
            if (_.includes(['image', 'youtube', 'pdf', 'text', 'video'], value.type)) {
                can_preview = true;
            }
        });

        if (!can_preview) {
            actionsList.basic = _.reject(actionsList.basic, function (item) {
                return item.action === 'preview';
            });
        }

        if (selectedFiles.length > 0) {
            if (!_.includes(RV_MEDIA_CONFIG.permissions, 'files.create')) {
                actionsList.file = _.reject(actionsList.file, function (item) {
                    return item.action === 'make_copy';
                });
            }

            if (!_.includes(RV_MEDIA_CONFIG.permissions, 'files.edit')) {
                actionsList.file = _.reject(actionsList.file, function (item) {
                    return _.includes(['rename'], item.action);
                });
            }

            if (!_.includes(RV_MEDIA_CONFIG.permissions, 'files.trash')) {
                actionsList.other = _.reject(actionsList.other, function (item) {
                    return _.includes(['trash', 'restore'], item.action);
                });
            }

            if (!_.includes(RV_MEDIA_CONFIG.permissions, 'files.delete')) {
                actionsList.other = _.reject(actionsList.other, function (item) {
                    return _.includes(['delete'], item.action);
                });
            }

            if (!_.includes(RV_MEDIA_CONFIG.permissions, 'files.favorite')) {
                actionsList.other = _.reject(actionsList.other, function (item) {
                    return _.includes(['favorite', 'remove_favorite'], item.action);
                });
            }
        }

        _.each(actionsList, function (action, key) {
            _.each(action, function (item, index) {
                let is_break = false;
                switch (Helpers.getRequestParams().view_in) {
                    case 'all_media':
                        if (_.includes(['remove_favorite', 'delete', 'restore'], item.action)) {
                            is_break = true;
                        }
                        break;
                    case 'recent':
                        if (_.includes(['remove_favorite', 'delete', 'restore', 'make_copy'], item.action)) {
                            is_break = true;
                        }
                        break;
                    case 'favorites':
                        if (_.includes(['favorite', 'delete', 'restore', 'make_copy'], item.action)) {
                            is_break = true;
                        }
                        break;
                    case 'trash':
                        if (!_.includes(['preview', 'delete', 'restore', 'rename', 'download'], item.action)) {
                            is_break = true;
                        }
                        break;
                }
                if (!is_break) {
                    let template = ACTION_TEMPLATE
                        .replace(/__action__/gi, item.action || '')
                        .replace(/__icon__/gi, item.icon || '')
                        .replace(/__name__/gi, RV_MEDIA_CONFIG.translations.actions_list[key][item.action] || item.name);
                    if (!index && initialized_item) {
                        template = '<li role="separator" class="divider"></li>' + template;
                    }
                    $dropdownActions.append(template);
                }
            });
            if (action.length > 0) {
                initialized_item++;
            }
        });
    }
}
