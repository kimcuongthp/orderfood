/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helpers; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Config_MediaConfig__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Helpers = function () {
    function Helpers() {
        _classCallCheck(this, Helpers);
    }

    _createClass(Helpers, null, [{
        key: 'getUrlParam',
        value: function getUrlParam(paramName) {
            var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            if (!url) {
                url = window.location.search;
            }
            var reParam = new RegExp('(?:[\?&]|&)' + paramName + '=([^&]+)', 'i');
            var match = url.match(reParam);
            return match && match.length > 1 ? match[1] : null;
        }
    }, {
        key: 'asset',
        value: function asset(url) {
            if (url.substring(0, 2) === '//' || url.substring(0, 7) === 'http://' || url.substring(0, 8) === 'https://') {
                return url;
            }

            var baseUrl = RV_MEDIA_URL.base_url.substr(-1, 1) !== '/' ? RV_MEDIA_URL.base_url + '/' : RV_MEDIA_URL.base_url;

            if (url.substring(0, 1) === '/') {
                return baseUrl + url.substring(1);
            }
            return baseUrl + url;
        }
    }, {
        key: 'showAjaxLoading',
        value: function showAjaxLoading() {
            var $element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('.rv-media-main');

            $element.addClass('on-loading').append($('#rv_media_loading').html());
        }
    }, {
        key: 'hideAjaxLoading',
        value: function hideAjaxLoading() {
            var $element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('.rv-media-main');

            $element.removeClass('on-loading').find('.loading-wrapper').remove();
        }
    }, {
        key: 'isOnAjaxLoading',
        value: function isOnAjaxLoading() {
            var $element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : $('.rv-media-items');

            return $element.hasClass('on-loading');
        }
    }, {
        key: 'jsonEncode',
        value: function jsonEncode(object) {
            "use strict";

            if (typeof object === 'undefined') {
                object = null;
            }
            return JSON.stringify(object);
        }
    }, {
        key: 'jsonDecode',
        value: function jsonDecode(jsonString, defaultValue) {
            "use strict";

            if (!jsonString) {
                return defaultValue;
            }
            if (typeof jsonString === 'string') {
                var result = void 0;
                try {
                    result = $.parseJSON(jsonString);
                } catch (err) {
                    result = defaultValue;
                }
                return result;
            }
            return jsonString;
        }
    }, {
        key: 'getRequestParams',
        value: function getRequestParams() {
            if (window.rvMedia.options && window.rvMedia.options.open_in === 'modal') {
                return $.extend(true, __WEBPACK_IMPORTED_MODULE_0__Config_MediaConfig__["a" /* MediaConfig */].request_params, window.rvMedia.options || {});
            }
            return __WEBPACK_IMPORTED_MODULE_0__Config_MediaConfig__["a" /* MediaConfig */].request_params;
        }
    }, {
        key: 'setSelectedFile',
        value: function setSelectedFile($file_id) {
            if (typeof window.rvMedia.options !== 'undefined') {
                window.rvMedia.options.selected_file_id = $file_id;
            } else {
                __WEBPACK_IMPORTED_MODULE_0__Config_MediaConfig__["a" /* MediaConfig */].request_params.selected_file_id = $file_id;
            }
        }
    }, {
        key: 'getConfigs',
        value: function getConfigs() {
            return __WEBPACK_IMPORTED_MODULE_0__Config_MediaConfig__["a" /* MediaConfig */];
        }
    }, {
        key: 'storeConfig',
        value: function storeConfig() {
            localStorage.setItem('MediaConfig', Helpers.jsonEncode(__WEBPACK_IMPORTED_MODULE_0__Config_MediaConfig__["a" /* MediaConfig */]));
        }
    }, {
        key: 'storeRecentItems',
        value: function storeRecentItems() {
            localStorage.setItem('RecentItems', Helpers.jsonEncode(__WEBPACK_IMPORTED_MODULE_0__Config_MediaConfig__["b" /* RecentItems */]));
        }
    }, {
        key: 'addToRecent',
        value: function addToRecent(id) {
            if (id instanceof Array) {
                _.each(id, function (value) {
                    __WEBPACK_IMPORTED_MODULE_0__Config_MediaConfig__["b" /* RecentItems */].push(value);
                });
            } else {
                __WEBPACK_IMPORTED_MODULE_0__Config_MediaConfig__["b" /* RecentItems */].push(id);
            }
        }
    }, {
        key: 'getItems',
        value: function getItems() {
            var items = [];
            $('.js-media-list-title').each(function () {
                var $box = $(this);
                var data = $box.data() || {};
                data.index_key = $box.index();
                items.push(data);
            });
            return items;
        }
    }, {
        key: 'getSelectedItems',
        value: function getSelectedItems() {
            var selected = [];
            $('.js-media-list-title input[type=checkbox]:checked').each(function () {
                var $box = $(this).closest('.js-media-list-title');
                var data = $box.data() || {};
                data.index_key = $box.index();
                selected.push(data);
            });
            return selected;
        }
    }, {
        key: 'getSelectedFiles',
        value: function getSelectedFiles() {
            var selected = [];
            $('.js-media-list-title[data-context=file] input[type=checkbox]:checked').each(function () {
                var $box = $(this).closest('.js-media-list-title');
                var data = $box.data() || {};
                data.index_key = $box.index();
                selected.push(data);
            });
            return selected;
        }
    }, {
        key: 'getSelectedFolder',
        value: function getSelectedFolder() {
            var selected = [];
            $('.js-media-list-title[data-context=folder] input[type=checkbox]:checked').each(function () {
                var $box = $(this).closest('.js-media-list-title');
                var data = $box.data() || {};
                data.index_key = $box.index();
                selected.push(data);
            });
            return selected;
        }
    }, {
        key: 'isUseInModal',
        value: function isUseInModal() {
            return Helpers.getUrlParam('media-action') === 'select-files' || window.rvMedia && window.rvMedia.options && window.rvMedia.options.open_in === 'modal';
        }
    }, {
        key: 'resetPagination',
        value: function resetPagination() {
            RV_MEDIA_CONFIG.pagination = { paged: 1, posts_per_page: 40, in_process_get_media: false, has_more: true };
        }
    }]);

    return Helpers;
}();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RecentItems; });
var MediaConfig = $.parseJSON(localStorage.getItem('MediaConfig')) || {};

var defaultConfig = {
    app_key: '483a0xyzytz1242c0d520426e8ba366c530c3d9dabc',
    request_params: {
        view_type: 'tiles',
        filter: 'everything',
        view_in: 'all_media',
        search: '',
        sort_by: 'created_at-desc',
        folder_id: 0
    },
    hide_details_pane: false,
    icons: {
        folder: 'fa fa-folder-o'
    },
    actions_list: {
        basic: [{
            icon: 'fa fa-eye',
            name: 'Preview',
            action: 'preview',
            order: 0,
            class: 'rv-action-preview'
        }],
        file: [{
            icon: 'fa fa-link',
            name: 'Copy link',
            action: 'copy_link',
            order: 0,
            class: 'rv-action-copy-link'
        }, {
            icon: 'fa fa-pencil',
            name: 'Rename',
            action: 'rename',
            order: 1,
            class: 'rv-action-rename'
        }, {
            icon: 'fa fa-copy',
            name: 'Make a copy',
            action: 'make_copy',
            order: 2,
            class: 'rv-action-make-copy'
        }],
        user: [{
            icon: 'fa fa-star',
            name: 'Favorite',
            action: 'favorite',
            order: 2,
            class: 'rv-action-favorite'
        }, {
            icon: 'fa fa-star-o',
            name: 'Remove favorite',
            action: 'remove_favorite',
            order: 3,
            class: 'rv-action-favorite'
        }],
        other: [{
            icon: 'fa fa-download',
            name: 'Download',
            action: 'download',
            order: 0,
            class: 'rv-action-download'
        }, {
            icon: 'fa fa-trash',
            name: 'Move to trash',
            action: 'trash',
            order: 1,
            class: 'rv-action-trash'
        }, {
            icon: 'fa fa-eraser',
            name: 'Delete permanently',
            action: 'delete',
            order: 2,
            class: 'rv-action-delete'
        }, {
            icon: 'fa fa-undo',
            name: 'Restore',
            action: 'restore',
            order: 3,
            class: 'rv-action-restore'
        }]
    },
    denied_download: ['youtube']
};

if (!MediaConfig.app_key || MediaConfig.app_key !== defaultConfig.app_key) {
    MediaConfig = defaultConfig;
}

var RecentItems = $.parseJSON(localStorage.getItem('RecentItems')) || [];



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MessageService = function () {
    function MessageService() {
        _classCallCheck(this, MessageService);
    }

    _createClass(MessageService, null, [{
        key: 'showMessage',
        value: function showMessage(type, message, messageHeader) {
            toastr.options = {
                closeButton: true,
                progressBar: true,
                positionClass: 'toast-bottom-right',
                onclick: null,
                showDuration: 1000,
                hideDuration: 1000,
                timeOut: 10000,
                extendedTimeOut: 1000,
                showEasing: 'swing',
                hideEasing: 'linear',
                showMethod: 'fadeIn',
                hideMethod: 'fadeOut'
            };
            toastr[type](message, messageHeader);
        }
    }, {
        key: 'handleError',
        value: function handleError(data) {
            if (typeof data.responseJSON !== 'undefined') {
                if (typeof data.responseJSON.message !== 'undefined') {
                    MessageService.showMessage('error', data.responseJSON.message, RV_MEDIA_CONFIG.translations.message.error_header);
                } else {
                    $.each(data.responseJSON, function (index, el) {
                        $.each(el, function (key, item) {
                            MessageService.showMessage('error', item, RV_MEDIA_CONFIG.translations.message.error_header);
                        });
                    });
                }
            } else {
                MessageService.showMessage('error', data.statusText, RV_MEDIA_CONFIG.translations.message.error_header);
            }
        }
    }]);

    return MessageService;
}();

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Config_MediaConfig__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_MessageService__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var ActionsService = function () {
    function ActionsService() {
        _classCallCheck(this, ActionsService);
    }

    _createClass(ActionsService, null, [{
        key: 'handleDropdown',
        value: function handleDropdown() {
            var selected = _.size(__WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getSelectedItems());

            ActionsService.renderActions();

            if (selected > 0) {
                $('.rv-dropdown-actions').removeClass('disabled');
            } else {
                $('.rv-dropdown-actions').addClass('disabled');
            }
        }
    }, {
        key: 'handlePreview',
        value: function handlePreview() {
            var selected = [];

            _.each(__WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getSelectedFiles(), function (value, index) {
                if (_.includes(['image', 'youtube', 'pdf', 'text', 'video'], value.type)) {
                    selected.push({
                        src: value.url
                    });
                    __WEBPACK_IMPORTED_MODULE_0__Config_MediaConfig__["b" /* RecentItems */].push(value.id);
                }
            });

            if (_.size(selected) > 0) {
                $.fancybox.open(selected);
                __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].storeRecentItems();
            } else {
                this.handleGlobalAction('download');
            }
        }
    }, {
        key: 'handleCopyLink',
        value: function handleCopyLink() {
            var links = '';
            _.each(__WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getSelectedFiles(), function (value, index) {
                if (!_.isEmpty(links)) {
                    links += '\n';
                }
                links += value.full_url;
            });
            var $clipboardTemp = $('.js-rv-clipboard-temp');
            $clipboardTemp.data('clipboard-text', links);
            new Clipboard('.js-rv-clipboard-temp', {
                text: function text(trigger) {
                    return links;
                }
            });
            __WEBPACK_IMPORTED_MODULE_2__Services_MessageService__["a" /* MessageService */].showMessage('success', RV_MEDIA_CONFIG.translations.clipboard.success, RV_MEDIA_CONFIG.translations.message.success_header);
            $clipboardTemp.trigger('click');
        }
    }, {
        key: 'handleGlobalAction',
        value: function handleGlobalAction(type, callback) {
            var selected = [];
            _.each(__WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getSelectedItems(), function (value, index) {
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
                    var downloadLink = RV_MEDIA_URL.download;
                    var count = 0;
                    _.each(__WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getSelectedItems(), function (value, index) {
                        if (!_.includes(__WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getConfigs().denied_download, value.mime_type)) {
                            downloadLink += (count === 0 ? '?' : '&') + 'selected[' + count + '][is_folder]=' + value.is_folder + '&selected[' + count + '][id]=' + value.id;
                            count++;
                        }
                    });
                    if (downloadLink !== RV_MEDIA_URL.download) {
                        window.open(downloadLink, '_blank');
                    } else {
                        __WEBPACK_IMPORTED_MODULE_2__Services_MessageService__["a" /* MessageService */].showMessage('error', RV_MEDIA_CONFIG.translations.download.error, RV_MEDIA_CONFIG.translations.message.error_header);
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
    }, {
        key: 'processAction',
        value: function processAction(data) {
            var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            $.ajax({
                url: RV_MEDIA_URL.global_actions,
                type: 'POST',
                data: data,
                dataType: 'json',
                beforeSend: function beforeSend() {
                    __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].showAjaxLoading();
                },
                success: function success(res) {
                    __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].resetPagination();
                    if (!res.error) {
                        __WEBPACK_IMPORTED_MODULE_2__Services_MessageService__["a" /* MessageService */].showMessage('success', res.message, RV_MEDIA_CONFIG.translations.message.success_header);
                    } else {
                        __WEBPACK_IMPORTED_MODULE_2__Services_MessageService__["a" /* MessageService */].showMessage('error', res.message, RV_MEDIA_CONFIG.translations.message.error_header);
                    }
                    if (callback) {
                        callback(res);
                    }
                },
                complete: function complete(data) {
                    __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].hideAjaxLoading();
                },
                error: function error(data) {
                    __WEBPACK_IMPORTED_MODULE_2__Services_MessageService__["a" /* MessageService */].handleError(data);
                }
            });
        }
    }, {
        key: 'renderRenameItems',
        value: function renderRenameItems() {
            var VIEW = $('#rv_media_rename_item').html();
            var $itemsWrapper = $('#modal_rename_items .rename-items').empty();

            _.each(__WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getSelectedItems(), function (value, index) {
                var item = VIEW.replace(/__icon__/gi, value.icon || 'fa fa-file-o').replace(/__placeholder__/gi, 'Input file name').replace(/__value__/gi, value.name);
                var $item = $(item);
                $item.data('id', value.id);
                $item.data('is_folder', value.is_folder);
                $item.data('name', value.name);
                $itemsWrapper.append($item);
            });
        }
    }, {
        key: 'renderActions',
        value: function renderActions() {
            var hasFolderSelected = __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getSelectedFolder().length > 0;

            var ACTION_TEMPLATE = $('#rv_action_item').html();
            var initialized_item = 0;
            var $dropdownActions = $('.rv-dropdown-actions .dropdown-menu');
            $dropdownActions.empty();

            var actionsList = $.extend({}, true, __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getConfigs().actions_list);

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

            var selectedFiles = __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getSelectedFiles();

            var can_preview = false;
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
                    var is_break = false;
                    switch (__WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getRequestParams().view_in) {
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
                        var template = ACTION_TEMPLATE.replace(/__action__/gi, item.action || '').replace(/__icon__/gi, item.icon || '').replace(/__name__/gi, RV_MEDIA_CONFIG.translations.actions_list[key][item.action] || item.name);
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
    }]);

    return ActionsService;
}();

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextMenuService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ActionsService__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var ContextMenuService = function () {
    function ContextMenuService() {
        _classCallCheck(this, ContextMenuService);
    }

    _createClass(ContextMenuService, null, [{
        key: 'initContext',
        value: function initContext() {
            if (jQuery().contextMenu) {
                $.contextMenu({
                    selector: '.js-context-menu[data-context="file"]',
                    build: function build($element, event) {
                        return {
                            items: ContextMenuService._fileContextMenu()
                        };
                    }
                });

                $.contextMenu({
                    selector: '.js-context-menu[data-context="folder"]',
                    build: function build($element, event) {
                        return {
                            items: ContextMenuService._folderContextMenu()
                        };
                    }
                });
            }
        }
    }, {
        key: '_fileContextMenu',
        value: function _fileContextMenu() {
            var items = {
                preview: {
                    name: 'Preview',
                    icon: function icon(opt, $itemElement, itemKey, item) {
                        $itemElement.html('<i class="fa fa-eye" aria-hidden="true"></i> ' + item.name);

                        return 'context-menu-icon-updated';
                    },
                    callback: function callback(key, opt) {
                        __WEBPACK_IMPORTED_MODULE_0__ActionsService__["a" /* ActionsService */].handlePreview();
                    }
                }
            };

            _.each(__WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getConfigs().actions_list, function (actionGroup, key) {
                _.each(actionGroup, function (value) {
                    items[value.action] = {
                        name: value.name,
                        icon: function icon(opt, $itemElement, itemKey, item) {
                            $itemElement.html('<i class="' + value.icon + '" aria-hidden="true"></i> ' + (RV_MEDIA_CONFIG.translations.actions_list[key][value.action] || item.name));

                            return 'context-menu-icon-updated';
                        },
                        callback: function callback(key, opt) {
                            $('.js-files-action[data-action="' + value.action + '"]').trigger('click');
                        }
                    };
                });
            });

            var except = [];

            switch (__WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getRequestParams().view_in) {
                case 'all_media':
                    except = ['remove_favorite', 'delete', 'restore'];
                    break;
                case 'recent':
                    except = ['remove_favorite', 'delete', 'restore', 'make_copy'];
                    break;
                case 'favorites':
                    except = ['favorite', 'delete', 'restore', 'make_copy'];
                    break;
                case 'trash':
                    items = {
                        preview: items.preview,
                        rename: items.rename,
                        download: items.download,
                        delete: items.delete,
                        restore: items.restore
                    };
                    break;
            }

            _.each(except, function (value) {
                items[value] = undefined;
            });

            var hasFolderSelected = __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getSelectedFolder().length > 0;

            if (hasFolderSelected) {
                items.preview = undefined;
                items.copy_link = undefined;

                if (!_.includes(RV_MEDIA_CONFIG.permissions, 'folders.create')) {
                    items.make_copy = undefined;
                }

                if (!_.includes(RV_MEDIA_CONFIG.permissions, 'folders.edit')) {
                    items.rename = undefined;
                }

                if (!_.includes(RV_MEDIA_CONFIG.permissions, 'folders.trash')) {
                    items.trash = undefined;
                    items.restore = undefined;
                }

                if (!_.includes(RV_MEDIA_CONFIG.permissions, 'folders.delete')) {
                    items.delete = undefined;
                }

                if (!_.includes(RV_MEDIA_CONFIG.permissions, 'folders.favorite')) {
                    items.favorite = undefined;
                    items.remove_favorite = undefined;
                }
            }

            var selectedFiles = __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getSelectedFiles();

            if (selectedFiles.length > 0) {
                if (!_.includes(RV_MEDIA_CONFIG.permissions, 'files.create')) {
                    items.make_copy = undefined;
                }

                if (!_.includes(RV_MEDIA_CONFIG.permissions, 'files.edit')) {
                    items.rename = undefined;
                }

                if (!_.includes(RV_MEDIA_CONFIG.permissions, 'files.trash')) {
                    items.trash = undefined;
                    items.restore = undefined;
                }

                if (!_.includes(RV_MEDIA_CONFIG.permissions, 'files.delete')) {
                    items.delete = undefined;
                }

                if (!_.includes(RV_MEDIA_CONFIG.permissions, 'files.favorite')) {
                    items.favorite = undefined;
                    items.remove_favorite = undefined;
                }
            }

            var can_preview = false;
            _.each(selectedFiles, function (value) {
                if (_.includes(['image', 'youtube', 'pdf', 'text', 'video'], value.type)) {
                    can_preview = true;
                }
            });

            if (!can_preview) {
                items.preview = undefined;
            }

            return items;
        }
    }, {
        key: '_folderContextMenu',
        value: function _folderContextMenu() {
            var items = ContextMenuService._fileContextMenu();

            items.preview = undefined;
            items.copy_link = undefined;

            return items;
        }
    }, {
        key: 'destroyContext',
        value: function destroyContext() {
            if (jQuery().contextMenu) {
                $.contextMenu('destroy');
            }
        }
    }]);

    return ContextMenuService;
}();

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorService", function() { return EditorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App_Helpers_Helpers__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_Config_MediaConfig__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App_Services_ContextMenuService__ = __webpack_require__(5);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var EditorService = function () {
    function EditorService() {
        _classCallCheck(this, EditorService);
    }

    _createClass(EditorService, null, [{
        key: 'editorSelectFile',
        value: function editorSelectFile(selectedFiles) {

            var is_ckeditor = __WEBPACK_IMPORTED_MODULE_0__App_Helpers_Helpers__["a" /* Helpers */].getUrlParam('CKEditor') || __WEBPACK_IMPORTED_MODULE_0__App_Helpers_Helpers__["a" /* Helpers */].getUrlParam('CKEditorFuncNum');

            if (window.opener && is_ckeditor) {
                var firstItem = _.first(selectedFiles);

                window.opener.CKEDITOR.tools.callFunction(__WEBPACK_IMPORTED_MODULE_0__App_Helpers_Helpers__["a" /* Helpers */].getUrlParam('CKEditorFuncNum'), firstItem.url);

                if (window.opener) {
                    window.close();
                }
            } else {
                // No WYSIWYG editor found, use custom method.
            }
        }
    }]);

    return EditorService;
}();

var rvMedia = function rvMedia(selector, options) {
    _classCallCheck(this, rvMedia);

    window.rvMedia = window.rvMedia || {};

    var $body = $('body');

    var defaultOptions = {
        multiple: true,
        type: '*',
        onSelectFiles: function onSelectFiles(files, $el) {}
    };

    options = $.extend(true, defaultOptions, options);

    var clickCallback = function clickCallback(event) {
        event.preventDefault();
        var $current = $(this);
        $('#rv_media_modal').modal();

        window.rvMedia.options = options;
        window.rvMedia.options.open_in = 'modal';

        window.rvMedia.$el = $current;

        __WEBPACK_IMPORTED_MODULE_1__App_Config_MediaConfig__["a" /* MediaConfig */].request_params.filter = 'everything';
        __WEBPACK_IMPORTED_MODULE_0__App_Helpers_Helpers__["a" /* Helpers */].storeConfig();

        __WEBPACK_IMPORTED_MODULE_2__App_Services_ContextMenuService__["a" /* ContextMenuService */].destroyContext();
        __WEBPACK_IMPORTED_MODULE_2__App_Services_ContextMenuService__["a" /* ContextMenuService */].initContext();

        var ele_options = window.rvMedia.$el.data('rv-media');
        if (typeof ele_options !== 'undefined' && ele_options.length > 0) {
            ele_options = ele_options[0];
            window.rvMedia.options = $.extend(true, window.rvMedia.options, ele_options || {});
            if (typeof ele_options.selected_file_id !== 'undefined') {
                window.rvMedia.options.is_popup = true;
            } else if (typeof window.rvMedia.options.is_popup !== 'undefined') {
                window.rvMedia.options.is_popup = undefined;
            }
        }

        if ($('#rv_media_body .rv-media-container').length === 0) {
            $('#rv_media_body').load(RV_MEDIA_URL.popup, function (data) {
                if (data.error) {
                    alert(data.message);
                }
                $('#rv_media_body').removeClass('media-modal-loading').closest('.modal-content').removeClass('bb-loading');
            });
        } else {
            $(document).find('.rv-media-container .js-change-action[data-type=refresh]').trigger('click');
        }
    };

    if (typeof selector === 'string') {
        $body.on('click', selector, clickCallback);
    } else {
        selector.on('click', clickCallback);
    }
};

window.RvMediaStandAlone = rvMedia;

$('.js-insert-to-editor').off('click').on('click', function (event) {
    event.preventDefault();
    var selectedFiles = __WEBPACK_IMPORTED_MODULE_0__App_Helpers_Helpers__["a" /* Helpers */].getSelectedFiles();
    if (_.size(selectedFiles) > 0) {
        EditorService.editorSelectFile(selectedFiles);
    }
});

$.fn.rvMedia = function (options) {
    var $selector = $(this);

    __WEBPACK_IMPORTED_MODULE_1__App_Config_MediaConfig__["a" /* MediaConfig */].request_params.filter = 'everything';
    if (__WEBPACK_IMPORTED_MODULE_1__App_Config_MediaConfig__["a" /* MediaConfig */].request_params.view_in === 'trash') {
        $(document).find('.js-insert-to-editor').prop('disabled', true);
    } else {
        $(document).find('.js-insert-to-editor').prop('disabled', false);
    }
    __WEBPACK_IMPORTED_MODULE_0__App_Helpers_Helpers__["a" /* Helpers */].storeConfig();

    new rvMedia($selector, options);
};

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjg0MjJjYzZmYTJhN2MwODUzZDUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9BcHAvSGVscGVycy9IZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvQXBwL0NvbmZpZy9NZWRpYUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0FwcC9TZXJ2aWNlcy9NZXNzYWdlU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0FwcC9TZXJ2aWNlcy9BY3Rpb25zU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0FwcC9TZXJ2aWNlcy9Db250ZXh0TWVudVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9pbnRlZ3JhdGUuanMiXSwibmFtZXMiOlsiSGVscGVycyIsInBhcmFtTmFtZSIsInVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVQYXJhbSIsIlJlZ0V4cCIsIm1hdGNoIiwibGVuZ3RoIiwic3Vic3RyaW5nIiwiYmFzZVVybCIsIlJWX01FRElBX1VSTCIsImJhc2VfdXJsIiwic3Vic3RyIiwiJGVsZW1lbnQiLCIkIiwiYWRkQ2xhc3MiLCJhcHBlbmQiLCJodG1sIiwicmVtb3ZlQ2xhc3MiLCJmaW5kIiwicmVtb3ZlIiwiaGFzQ2xhc3MiLCJvYmplY3QiLCJKU09OIiwic3RyaW5naWZ5IiwianNvblN0cmluZyIsImRlZmF1bHRWYWx1ZSIsInJlc3VsdCIsInBhcnNlSlNPTiIsImVyciIsInJ2TWVkaWEiLCJvcHRpb25zIiwib3Blbl9pbiIsImV4dGVuZCIsIk1lZGlhQ29uZmlnIiwicmVxdWVzdF9wYXJhbXMiLCIkZmlsZV9pZCIsInNlbGVjdGVkX2ZpbGVfaWQiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwianNvbkVuY29kZSIsImlkIiwiQXJyYXkiLCJfIiwiZWFjaCIsInZhbHVlIiwiUmVjZW50SXRlbXMiLCJwdXNoIiwiaXRlbXMiLCIkYm94IiwiZGF0YSIsImluZGV4X2tleSIsImluZGV4Iiwic2VsZWN0ZWQiLCJjbG9zZXN0IiwiZ2V0VXJsUGFyYW0iLCJSVl9NRURJQV9DT05GSUciLCJwYWdpbmF0aW9uIiwicGFnZWQiLCJwb3N0c19wZXJfcGFnZSIsImluX3Byb2Nlc3NfZ2V0X21lZGlhIiwiaGFzX21vcmUiLCJnZXRJdGVtIiwiZGVmYXVsdENvbmZpZyIsImFwcF9rZXkiLCJ2aWV3X3R5cGUiLCJmaWx0ZXIiLCJ2aWV3X2luIiwic29ydF9ieSIsImZvbGRlcl9pZCIsImhpZGVfZGV0YWlsc19wYW5lIiwiaWNvbnMiLCJmb2xkZXIiLCJhY3Rpb25zX2xpc3QiLCJiYXNpYyIsImljb24iLCJuYW1lIiwiYWN0aW9uIiwib3JkZXIiLCJjbGFzcyIsImZpbGUiLCJ1c2VyIiwib3RoZXIiLCJkZW5pZWRfZG93bmxvYWQiLCJNZXNzYWdlU2VydmljZSIsInR5cGUiLCJtZXNzYWdlIiwibWVzc2FnZUhlYWRlciIsInRvYXN0ciIsImNsb3NlQnV0dG9uIiwicHJvZ3Jlc3NCYXIiLCJwb3NpdGlvbkNsYXNzIiwib25jbGljayIsInNob3dEdXJhdGlvbiIsImhpZGVEdXJhdGlvbiIsInRpbWVPdXQiLCJleHRlbmRlZFRpbWVPdXQiLCJzaG93RWFzaW5nIiwiaGlkZUVhc2luZyIsInNob3dNZXRob2QiLCJoaWRlTWV0aG9kIiwicmVzcG9uc2VKU09OIiwic2hvd01lc3NhZ2UiLCJ0cmFuc2xhdGlvbnMiLCJlcnJvcl9oZWFkZXIiLCJlbCIsImtleSIsIml0ZW0iLCJzdGF0dXNUZXh0IiwiQWN0aW9uc1NlcnZpY2UiLCJzaXplIiwiZ2V0U2VsZWN0ZWRJdGVtcyIsInJlbmRlckFjdGlvbnMiLCJnZXRTZWxlY3RlZEZpbGVzIiwiaW5jbHVkZXMiLCJzcmMiLCJmYW5jeWJveCIsIm9wZW4iLCJzdG9yZVJlY2VudEl0ZW1zIiwiaGFuZGxlR2xvYmFsQWN0aW9uIiwibGlua3MiLCJpc0VtcHR5IiwiZnVsbF91cmwiLCIkY2xpcGJvYXJkVGVtcCIsIkNsaXBib2FyZCIsInRleHQiLCJ0cmlnZ2VyIiwiY2xpcGJvYXJkIiwic3VjY2VzcyIsInN1Y2Nlc3NfaGVhZGVyIiwiY2FsbGJhY2siLCJpc19mb2xkZXIiLCJtb2RhbCIsImhhbmRsZUNvcHlMaW5rIiwiaGFuZGxlUHJldmlldyIsImRvd25sb2FkTGluayIsImRvd25sb2FkIiwiY291bnQiLCJnZXRDb25maWdzIiwibWltZV90eXBlIiwiZXJyb3IiLCJwcm9jZXNzQWN0aW9uIiwiYWpheCIsImdsb2JhbF9hY3Rpb25zIiwiZGF0YVR5cGUiLCJiZWZvcmVTZW5kIiwic2hvd0FqYXhMb2FkaW5nIiwicmVzIiwicmVzZXRQYWdpbmF0aW9uIiwiY29tcGxldGUiLCJoaWRlQWpheExvYWRpbmciLCJoYW5kbGVFcnJvciIsIlZJRVciLCIkaXRlbXNXcmFwcGVyIiwiZW1wdHkiLCJyZXBsYWNlIiwiJGl0ZW0iLCJoYXNGb2xkZXJTZWxlY3RlZCIsImdldFNlbGVjdGVkRm9sZGVyIiwiQUNUSU9OX1RFTVBMQVRFIiwiaW5pdGlhbGl6ZWRfaXRlbSIsIiRkcm9wZG93bkFjdGlvbnMiLCJhY3Rpb25zTGlzdCIsInJlamVjdCIsInBlcm1pc3Npb25zIiwic2VsZWN0ZWRGaWxlcyIsImNhbl9wcmV2aWV3IiwiaXNfYnJlYWsiLCJnZXRSZXF1ZXN0UGFyYW1zIiwidGVtcGxhdGUiLCJDb250ZXh0TWVudVNlcnZpY2UiLCJqUXVlcnkiLCJjb250ZXh0TWVudSIsInNlbGVjdG9yIiwiYnVpbGQiLCJldmVudCIsIl9maWxlQ29udGV4dE1lbnUiLCJfZm9sZGVyQ29udGV4dE1lbnUiLCJwcmV2aWV3Iiwib3B0IiwiJGl0ZW1FbGVtZW50IiwiaXRlbUtleSIsImFjdGlvbkdyb3VwIiwiZXhjZXB0IiwicmVuYW1lIiwiZGVsZXRlIiwicmVzdG9yZSIsInVuZGVmaW5lZCIsImNvcHlfbGluayIsIm1ha2VfY29weSIsInRyYXNoIiwiZmF2b3JpdGUiLCJyZW1vdmVfZmF2b3JpdGUiLCJFZGl0b3JTZXJ2aWNlIiwiaXNfY2tlZGl0b3IiLCJvcGVuZXIiLCJmaXJzdEl0ZW0iLCJmaXJzdCIsIkNLRURJVE9SIiwidG9vbHMiLCJjYWxsRnVuY3Rpb24iLCJjbG9zZSIsIiRib2R5IiwiZGVmYXVsdE9wdGlvbnMiLCJtdWx0aXBsZSIsIm9uU2VsZWN0RmlsZXMiLCJmaWxlcyIsIiRlbCIsImNsaWNrQ2FsbGJhY2siLCJwcmV2ZW50RGVmYXVsdCIsIiRjdXJyZW50Iiwic3RvcmVDb25maWciLCJkZXN0cm95Q29udGV4dCIsImluaXRDb250ZXh0IiwiZWxlX29wdGlvbnMiLCJpc19wb3B1cCIsImxvYWQiLCJwb3B1cCIsImFsZXJ0IiwiZG9jdW1lbnQiLCJvbiIsIlJ2TWVkaWFTdGFuZEFsb25lIiwib2ZmIiwiZWRpdG9yU2VsZWN0RmlsZSIsImZuIiwiJHNlbGVjdG9yIiwicHJvcCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdEQTs7QUFFQSxJQUFhQSxPQUFiO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSxvQ0FDdUJDLFNBRHZCLEVBQzhDO0FBQUEsZ0JBQVpDLEdBQVksdUVBQU4sSUFBTTs7QUFDdEMsZ0JBQUksQ0FBQ0EsR0FBTCxF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LFVBQVVDLE9BQVYsRUFBbUI7QUFDOUIsUUFBSWtNLFlBQVluTixFQUFFLElBQUYsQ0FBaEI7O0FBRUFvQixJQUFBLDRFQUFBQSxDQUFZQyxjQUFaLENBQTJCK0IsTUFBM0IsR0FBb0MsWUFBcEM7QUFDQSxRQUFJLDRFQUFBaEMsQ0FBWUMsY0FBWixDQUEyQmdDLE9BQTNCLEtBQXVDLE9BQTNDLEVBQW9EO0FBQ2hEckQsVUFBRTZNLFFBQUYsRUFBWXhNLElBQVosQ0FBaUIsc0JBQWpCLEVBQXlDK00sSUFBekMsQ0FBOEMsVUFBOUMsRUFBMEQsSUFBMUQ7QUFDSCxLQUZELE1BRU87QUFDSHBOLFVBQUU2TSxRQUFGLEVBQVl4TSxJQUFaLENBQWlCLHNCQUFqQixFQUF5QytNLElBQXpDLENBQThDLFVBQTlDLEVBQTBELEtBQTFEO0FBQ0g7QUFDRHBPLElBQUEscUVBQUFBLENBQVFxTixXQUFSOztBQUVBLFFBQUlyTCxPQUFKLENBQVltTSxTQUFaLEVBQXVCbE0sT0FBdkI7QUFDSCxDQVpELEMiLCJmaWxlIjoiL2pzL2ludGVncmF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDE5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyODQyMmNjNmZhMmE3YzA4NTNkNSIsImltcG9ydCB7TWVkaWFDb25maWcsIFJlY2VudEl0ZW1zfSBmcm9tICcuLi9Db25maWcvTWVkaWFDb25maWcnO1xuXG5leHBvcnQgY2xhc3MgSGVscGVycyB7XG4gICAgc3RhdGljIGdldFVybFBhcmFtKHBhcmFtTmFtZSwgdXJsID0gbnVsbCkge1xuICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgdXJsID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVQYXJhbSA9IG5ldyBSZWdFeHAoJyg/OltcXD8mXXwmKScgKyBwYXJhbU5hbWUgKyAnPShbXiZdKyknLCAnaScpO1xuICAgICAgICBsZXQgbWF0Y2ggPSB1cmwubWF0Y2gocmVQYXJhbSk7XG4gICAgICAgIHJldHVybiAobWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID4gMSkgPyBtYXRjaFsxXSA6IG51bGw7XG4gICAgfVxuXG4gICAgc3RhdGljIGFzc2V0KHVybCkge1xuICAgICAgICBpZiAodXJsLnN1YnN0cmluZygwLCAyKSA9PT0gJy8vJyB8fCB1cmwuc3Vic3RyaW5nKDAsIDcpID09PSAnaHR0cDovLycgfHwgdXJsLnN1YnN0cmluZygwLCA4KSA9PT0gJ2h0dHBzOi8vJykge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBiYXNlVXJsID0gUlZfTUVESUFfVVJMLmJhc2VfdXJsLnN1YnN0cigtMSwgMSkgIT09ICcvJyA/IFJWX01FRElBX1VSTC5iYXNlX3VybCArICcvJyA6IFJWX01FRElBX1VSTC5iYXNlX3VybDtcblxuICAgICAgICBpZiAodXJsLnN1YnN0cmluZygwLCAxKSA9PT0gJy8nKSB7XG4gICAgICAgICAgICByZXR1cm4gYmFzZVVybCArIHVybC5zdWJzdHJpbmcoMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhc2VVcmwgKyB1cmw7XG4gICAgfVxuXG4gICAgc3RhdGljIHNob3dBamF4TG9hZGluZygkZWxlbWVudCA9ICQoJy5ydi1tZWRpYS1tYWluJykpIHtcbiAgICAgICAgJGVsZW1lbnRcbiAgICAgICAgICAgIC5hZGRDbGFzcygnb24tbG9hZGluZycpXG4gICAgICAgICAgICAuYXBwZW5kKCQoJyNydl9tZWRpYV9sb2FkaW5nJykuaHRtbCgpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaGlkZUFqYXhMb2FkaW5nKCRlbGVtZW50ID0gJCgnLnJ2LW1lZGlhLW1haW4nKSkge1xuICAgICAgICAkZWxlbWVudFxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdvbi1sb2FkaW5nJylcbiAgICAgICAgICAgIC5maW5kKCcubG9hZGluZy13cmFwcGVyJykucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzT25BamF4TG9hZGluZygkZWxlbWVudCA9ICQoJy5ydi1tZWRpYS1pdGVtcycpKSB7XG4gICAgICAgIHJldHVybiAkZWxlbWVudC5oYXNDbGFzcygnb24tbG9hZGluZycpO1xuICAgIH1cblxuICAgIHN0YXRpYyBqc29uRW5jb2RlKG9iamVjdCkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBvYmplY3QgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmplY3QpO1xuICAgIH07XG5cbiAgICBzdGF0aWMganNvbkRlY29kZShqc29uU3RyaW5nLCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGlmICghanNvblN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGpzb25TdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAkLnBhcnNlSlNPTihqc29uU3RyaW5nKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGpzb25TdHJpbmc7XG4gICAgfTtcblxuICAgIHN0YXRpYyBnZXRSZXF1ZXN0UGFyYW1zKCkge1xuICAgICAgICBpZiAod2luZG93LnJ2TWVkaWEub3B0aW9ucyAmJiB3aW5kb3cucnZNZWRpYS5vcHRpb25zLm9wZW5faW4gPT09ICdtb2RhbCcpIHtcbiAgICAgICAgICAgIHJldHVybiAkLmV4dGVuZCh0cnVlLCBNZWRpYUNvbmZpZy5yZXF1ZXN0X3BhcmFtcywgd2luZG93LnJ2TWVkaWEub3B0aW9ucyB8fCB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1lZGlhQ29uZmlnLnJlcXVlc3RfcGFyYW1zO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXRTZWxlY3RlZEZpbGUoJGZpbGVfaWQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cucnZNZWRpYS5vcHRpb25zICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgd2luZG93LnJ2TWVkaWEub3B0aW9ucy5zZWxlY3RlZF9maWxlX2lkID0gJGZpbGVfaWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBNZWRpYUNvbmZpZy5yZXF1ZXN0X3BhcmFtcy5zZWxlY3RlZF9maWxlX2lkID0gJGZpbGVfaWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlncygpIHtcbiAgICAgICAgcmV0dXJuIE1lZGlhQ29uZmlnO1xuICAgIH1cblxuICAgIHN0YXRpYyBzdG9yZUNvbmZpZygpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ01lZGlhQ29uZmlnJywgSGVscGVycy5qc29uRW5jb2RlKE1lZGlhQ29uZmlnKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHN0b3JlUmVjZW50SXRlbXMoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdSZWNlbnRJdGVtcycsIEhlbHBlcnMuanNvbkVuY29kZShSZWNlbnRJdGVtcykpO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRUb1JlY2VudChpZCkge1xuICAgICAgICBpZiAoaWQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgXy5lYWNoKGlkLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBSZWNlbnRJdGVtcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgUmVjZW50SXRlbXMucHVzaChpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0SXRlbXMoKSB7XG4gICAgICAgIGxldCBpdGVtcyA9IFtdO1xuICAgICAgICAkKCcuanMtbWVkaWEtbGlzdC10aXRsZScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0ICRib3ggPSAkKHRoaXMpO1xuICAgICAgICAgICAgbGV0IGRhdGEgPSAkYm94LmRhdGEoKSB8fCB7fTtcbiAgICAgICAgICAgIGRhdGEuaW5kZXhfa2V5ID0gJGJveC5pbmRleCgpO1xuICAgICAgICAgICAgaXRlbXMucHVzaChkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBpdGVtcztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0U2VsZWN0ZWRJdGVtcygpIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkID0gW107XG4gICAgICAgICQoJy5qcy1tZWRpYS1saXN0LXRpdGxlIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCAkYm94ID0gJCh0aGlzKS5jbG9zZXN0KCcuanMtbWVkaWEtbGlzdC10aXRsZScpO1xuICAgICAgICAgICAgbGV0IGRhdGEgPSAkYm94LmRhdGEoKSB8fCB7fTtcbiAgICAgICAgICAgIGRhdGEuaW5kZXhfa2V5ID0gJGJveC5pbmRleCgpO1xuICAgICAgICAgICAgc2VsZWN0ZWQucHVzaChkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzZWxlY3RlZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0U2VsZWN0ZWRGaWxlcygpIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkID0gW107XG4gICAgICAgICQoJy5qcy1tZWRpYS1saXN0LXRpdGxlW2RhdGEtY29udGV4dD1maWxlXSBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgJGJveCA9ICQodGhpcykuY2xvc2VzdCgnLmpzLW1lZGlhLWxpc3QtdGl0bGUnKTtcbiAgICAgICAgICAgIGxldCBkYXRhID0gJGJveC5kYXRhKCkgfHwge307XG4gICAgICAgICAgICBkYXRhLmluZGV4X2tleSA9ICRib3guaW5kZXgoKTtcbiAgICAgICAgICAgIHNlbGVjdGVkLnB1c2goZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFNlbGVjdGVkRm9sZGVyKCkge1xuICAgICAgICBsZXQgc2VsZWN0ZWQgPSBbXTtcbiAgICAgICAgJCgnLmpzLW1lZGlhLWxpc3QtdGl0bGVbZGF0YS1jb250ZXh0PWZvbGRlcl0gaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0ICRib3ggPSAkKHRoaXMpLmNsb3Nlc3QoJy5qcy1tZWRpYS1saXN0LXRpdGxlJyk7XG4gICAgICAgICAgICBsZXQgZGF0YSA9ICRib3guZGF0YSgpIHx8IHt9O1xuICAgICAgICAgICAgZGF0YS5pbmRleF9rZXkgPSAkYm94LmluZGV4KCk7XG4gICAgICAgICAgICBzZWxlY3RlZC5wdXNoKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc1VzZUluTW9kYWwoKSB7XG4gICAgICAgIHJldHVybiBIZWxwZXJzLmdldFVybFBhcmFtKCdtZWRpYS1hY3Rpb24nKSA9PT0gJ3NlbGVjdC1maWxlcycgfHwgKHdpbmRvdy5ydk1lZGlhICYmIHdpbmRvdy5ydk1lZGlhLm9wdGlvbnMgJiYgd2luZG93LnJ2TWVkaWEub3B0aW9ucy5vcGVuX2luID09PSAnbW9kYWwnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVzZXRQYWdpbmF0aW9uKCkge1xuICAgICAgICBSVl9NRURJQV9DT05GSUcucGFnaW5hdGlvbiA9IHtwYWdlZDogMSwgcG9zdHNfcGVyX3BhZ2U6IDQwLCBpbl9wcm9jZXNzX2dldF9tZWRpYTogZmFsc2UsIGhhc19tb3JlOiB0cnVlfTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0FwcC9IZWxwZXJzL0hlbHBlcnMuanMiLCJsZXQgTWVkaWFDb25maWcgPSAkLnBhcnNlSlNPTihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnTWVkaWFDb25maWcnKSkgfHwge307XG5cbmxldCBkZWZhdWx0Q29uZmlnID0ge1xuICAgIGFwcF9rZXk6ICc0ODNhMHh5enl0ejEyNDJjMGQ1MjA0MjZlOGJhMzY2YzUzMGMzZDlkYWJjJyxcbiAgICByZXF1ZXN0X3BhcmFtczoge1xuICAgICAgICB2aWV3X3R5cGU6ICd0aWxlcycsXG4gICAgICAgIGZpbHRlcjogJ2V2ZXJ5dGhpbmcnLFxuICAgICAgICB2aWV3X2luOiAnYWxsX21lZGlhJyxcbiAgICAgICAgc2VhcmNoOiAnJyxcbiAgICAgICAgc29ydF9ieTogJ2NyZWF0ZWRfYXQtZGVzYycsXG4gICAgICAgIGZvbGRlcl9pZDogMCxcbiAgICB9LFxuICAgIGhpZGVfZGV0YWlsc19wYW5lOiBmYWxzZSxcbiAgICBpY29uczoge1xuICAgICAgICBmb2xkZXI6ICdmYSBmYS1mb2xkZXItbycsXG4gICAgfSxcbiAgICBhY3Rpb25zX2xpc3Q6IHtcbiAgICAgICAgYmFzaWM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZmEgZmEtZXllJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnUHJldmlldycsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAncHJldmlldycsXG4gICAgICAgICAgICAgICAgb3JkZXI6IDAsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdydi1hY3Rpb24tcHJldmlldycsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBmaWxlOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2ZhIGZhLWxpbmsnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdDb3B5IGxpbmsnLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2NvcHlfbGluaycsXG4gICAgICAgICAgICAgICAgb3JkZXI6IDAsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdydi1hY3Rpb24tY29weS1saW5rJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2ZhIGZhLXBlbmNpbCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1JlbmFtZScsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAncmVuYW1lJyxcbiAgICAgICAgICAgICAgICBvcmRlcjogMSxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3J2LWFjdGlvbi1yZW5hbWUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZmEgZmEtY29weScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ01ha2UgYSBjb3B5JyxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdtYWtlX2NvcHknLFxuICAgICAgICAgICAgICAgIG9yZGVyOiAyLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncnYtYWN0aW9uLW1ha2UtY29weScsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICB1c2VyOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2ZhIGZhLXN0YXInLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdGYXZvcml0ZScsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnZmF2b3JpdGUnLFxuICAgICAgICAgICAgICAgIG9yZGVyOiAyLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncnYtYWN0aW9uLWZhdm9yaXRlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2ZhIGZhLXN0YXItbycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1JlbW92ZSBmYXZvcml0ZScsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAncmVtb3ZlX2Zhdm9yaXRlJyxcbiAgICAgICAgICAgICAgICBvcmRlcjogMyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3J2LWFjdGlvbi1mYXZvcml0ZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBvdGhlcjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGljb246ICdmYSBmYS1kb3dubG9hZCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0Rvd25sb2FkJyxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdkb3dubG9hZCcsXG4gICAgICAgICAgICAgICAgb3JkZXI6IDAsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdydi1hY3Rpb24tZG93bmxvYWQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZmEgZmEtdHJhc2gnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdNb3ZlIHRvIHRyYXNoJyxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICd0cmFzaCcsXG4gICAgICAgICAgICAgICAgb3JkZXI6IDEsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdydi1hY3Rpb24tdHJhc2gnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZmEgZmEtZXJhc2VyJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnRGVsZXRlIHBlcm1hbmVudGx5JyxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdkZWxldGUnLFxuICAgICAgICAgICAgICAgIG9yZGVyOiAyLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncnYtYWN0aW9uLWRlbGV0ZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGljb246ICdmYSBmYS11bmRvJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnUmVzdG9yZScsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAncmVzdG9yZScsXG4gICAgICAgICAgICAgICAgb3JkZXI6IDMsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdydi1hY3Rpb24tcmVzdG9yZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgZGVuaWVkX2Rvd25sb2FkOiBbXG4gICAgICAgICd5b3V0dWJlJyxcbiAgICBdLFxufTtcblxuaWYgKCFNZWRpYUNvbmZpZy5hcHBfa2V5IHx8IE1lZGlhQ29uZmlnLmFwcF9rZXkgIT09IGRlZmF1bHRDb25maWcuYXBwX2tleSkge1xuICAgIE1lZGlhQ29uZmlnID0gZGVmYXVsdENvbmZpZztcbn1cblxubGV0IFJlY2VudEl0ZW1zID0gJC5wYXJzZUpTT04obG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1JlY2VudEl0ZW1zJykpIHx8IFtdO1xuXG5leHBvcnQge01lZGlhQ29uZmlnLCBSZWNlbnRJdGVtc307XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0FwcC9Db25maWcvTWVkaWFDb25maWcuanMiLCJleHBvcnQgY2xhc3MgTWVzc2FnZVNlcnZpY2Uge1xuICAgIHN0YXRpYyBzaG93TWVzc2FnZSh0eXBlLCBtZXNzYWdlLCBtZXNzYWdlSGVhZGVyKSB7XG4gICAgICAgIHRvYXN0ci5vcHRpb25zID0ge1xuICAgICAgICAgICAgY2xvc2VCdXR0b246IHRydWUsXG4gICAgICAgICAgICBwcm9ncmVzc0JhcjogdHJ1ZSxcbiAgICAgICAgICAgIHBvc2l0aW9uQ2xhc3M6ICd0b2FzdC1ib3R0b20tcmlnaHQnLFxuICAgICAgICAgICAgb25jbGljazogbnVsbCxcbiAgICAgICAgICAgIHNob3dEdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICAgIGhpZGVEdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICAgIHRpbWVPdXQ6IDEwMDAwLFxuICAgICAgICAgICAgZXh0ZW5kZWRUaW1lT3V0OiAxMDAwLFxuICAgICAgICAgICAgc2hvd0Vhc2luZzogJ3N3aW5nJyxcbiAgICAgICAgICAgIGhpZGVFYXNpbmc6ICdsaW5lYXInLFxuICAgICAgICAgICAgc2hvd01ldGhvZDogJ2ZhZGVJbicsXG4gICAgICAgICAgICBoaWRlTWV0aG9kOiAnZmFkZU91dCdcbiAgICAgICAgfTtcbiAgICAgICAgdG9hc3RyW3R5cGVdKG1lc3NhZ2UsIG1lc3NhZ2VIZWFkZXIpO1xuICAgIH1cblxuICAgIHN0YXRpYyBoYW5kbGVFcnJvcihkYXRhKSB7XG4gICAgICAgIGlmICh0eXBlb2YgKGRhdGEucmVzcG9uc2VKU09OKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKGRhdGEucmVzcG9uc2VKU09OLm1lc3NhZ2UpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3dNZXNzYWdlKCdlcnJvcicsIGRhdGEucmVzcG9uc2VKU09OLm1lc3NhZ2UsIFJWX01FRElBX0NPTkZJRy50cmFuc2xhdGlvbnMubWVzc2FnZS5lcnJvcl9oZWFkZXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkLmVhY2goZGF0YS5yZXNwb25zZUpTT04sIGZ1bmN0aW9uIChpbmRleCwgZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGVsLCBmdW5jdGlvbiAoa2V5LCBpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93TWVzc2FnZSgnZXJyb3InLCBpdGVtLCBSVl9NRURJQV9DT05GSUcudHJhbnNsYXRpb25zLm1lc3NhZ2UuZXJyb3JfaGVhZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93TWVzc2FnZSgnZXJyb3InLCBkYXRhLnN0YXR1c1RleHQsIFJWX01FRElBX0NPTkZJRy50cmFuc2xhdGlvbnMubWVzc2FnZS5lcnJvcl9oZWFkZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvQXBwL1NlcnZpY2VzL01lc3NhZ2VTZXJ2aWNlLmpzIiwiaW1wb3J0IHtSZWNlbnRJdGVtc30gZnJvbSAnLi4vQ29uZmlnL01lZGlhQ29uZmlnJztcbmltcG9ydCB7SGVscGVyc30gZnJvbSAnLi4vSGVscGVycy9IZWxwZXJzJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uL1NlcnZpY2VzL01lc3NhZ2VTZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIEFjdGlvbnNTZXJ2aWNlIHtcbiAgICBzdGF0aWMgaGFuZGxlRHJvcGRvd24oKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZCA9IF8uc2l6ZShIZWxwZXJzLmdldFNlbGVjdGVkSXRlbXMoKSk7XG5cbiAgICAgICAgQWN0aW9uc1NlcnZpY2UucmVuZGVyQWN0aW9ucygpO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZCA+IDApIHtcbiAgICAgICAgICAgICQoJy5ydi1kcm9wZG93bi1hY3Rpb25zJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcucnYtZHJvcGRvd24tYWN0aW9ucycpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGhhbmRsZVByZXZpZXcoKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZCA9IFtdO1xuXG4gICAgICAgIF8uZWFjaChIZWxwZXJzLmdldFNlbGVjdGVkRmlsZXMoKSwgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKF8uaW5jbHVkZXMoWydpbWFnZScsICd5b3V0dWJlJywgJ3BkZicsICd0ZXh0JywgJ3ZpZGVvJ10sIHZhbHVlLnR5cGUpKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHNyYzogdmFsdWUudXJsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgUmVjZW50SXRlbXMucHVzaCh2YWx1ZS5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChfLnNpemUoc2VsZWN0ZWQpID4gMCkge1xuICAgICAgICAgICAgJC5mYW5jeWJveC5vcGVuKHNlbGVjdGVkKTtcbiAgICAgICAgICAgIEhlbHBlcnMuc3RvcmVSZWNlbnRJdGVtcygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVHbG9iYWxBY3Rpb24oJ2Rvd25sb2FkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgaGFuZGxlQ29weUxpbmsoKSB7XG4gICAgICAgIGxldCBsaW5rcyA9ICcnO1xuICAgICAgICBfLmVhY2goSGVscGVycy5nZXRTZWxlY3RlZEZpbGVzKCksIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmICghXy5pc0VtcHR5KGxpbmtzKSkge1xuICAgICAgICAgICAgICAgIGxpbmtzICs9ICdcXG4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGlua3MgKz0gdmFsdWUuZnVsbF91cmw7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgJGNsaXBib2FyZFRlbXAgPSAkKCcuanMtcnYtY2xpcGJvYXJkLXRlbXAnKTtcbiAgICAgICAgJGNsaXBib2FyZFRlbXAuZGF0YSgnY2xpcGJvYXJkLXRleHQnLCBsaW5rcyk7XG4gICAgICAgIG5ldyBDbGlwYm9hcmQoJy5qcy1ydi1jbGlwYm9hcmQtdGVtcCcsIHtcbiAgICAgICAgICAgIHRleHQ6IGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpbmtzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvd01lc3NhZ2UoJ3N1Y2Nlc3MnLCBSVl9NRURJQV9DT05GSUcudHJhbnNsYXRpb25zLmNsaXBib2FyZC5zdWNjZXNzLCBSVl9NRURJQV9DT05GSUcudHJhbnNsYXRpb25zLm1lc3NhZ2Uuc3VjY2Vzc19oZWFkZXIpO1xuICAgICAgICAkY2xpcGJvYXJkVGVtcC50cmlnZ2VyKCdjbGljaycpO1xuICAgIH1cblxuICAgIHN0YXRpYyBoYW5kbGVHbG9iYWxBY3Rpb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkID0gW107XG4gICAgICAgIF8uZWFjaChIZWxwZXJzLmdldFNlbGVjdGVkSXRlbXMoKSwgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgc2VsZWN0ZWQucHVzaCh7XG4gICAgICAgICAgICAgICAgaXNfZm9sZGVyOiB2YWx1ZS5pc19mb2xkZXIsXG4gICAgICAgICAgICAgICAgaWQ6IHZhbHVlLmlkLFxuICAgICAgICAgICAgICAgIGZ1bGxfdXJsOiB2YWx1ZS5mdWxsX3VybFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAncmVuYW1lJzpcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWxfcmVuYW1lX2l0ZW1zJykubW9kYWwoJ3Nob3cnKS5maW5kKCdmb3JtLnJ2LWZvcm0nKS5kYXRhKCdhY3Rpb24nLCB0eXBlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NvcHlfbGluayc6XG4gICAgICAgICAgICAgICAgQWN0aW9uc1NlcnZpY2UuaGFuZGxlQ29weUxpbmsoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3ByZXZpZXcnOlxuICAgICAgICAgICAgICAgIEFjdGlvbnNTZXJ2aWNlLmhhbmRsZVByZXZpZXcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3RyYXNoJzpcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWxfdHJhc2hfaXRlbXMnKS5tb2RhbCgnc2hvdycpLmZpbmQoJ2Zvcm0ucnYtZm9ybScpLmRhdGEoJ2FjdGlvbicsIHR5cGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWxfZGVsZXRlX2l0ZW1zJykubW9kYWwoJ3Nob3cnKS5maW5kKCdmb3JtLnJ2LWZvcm0nKS5kYXRhKCdhY3Rpb24nLCB0eXBlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VtcHR5X3RyYXNoJzpcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWxfZW1wdHlfdHJhc2gnKS5tb2RhbCgnc2hvdycpLmZpbmQoJ2Zvcm0ucnYtZm9ybScpLmRhdGEoJ2FjdGlvbicsIHR5cGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZG93bmxvYWQnOlxuICAgICAgICAgICAgICAgIGxldCBkb3dubG9hZExpbmsgPSBSVl9NRURJQV9VUkwuZG93bmxvYWQ7XG4gICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICBfLmVhY2goSGVscGVycy5nZXRTZWxlY3RlZEl0ZW1zKCksIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfLmluY2x1ZGVzKEhlbHBlcnMuZ2V0Q29uZmlncygpLmRlbmllZF9kb3dubG9hZCwgdmFsdWUubWltZV90eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRMaW5rICs9IChjb3VudCA9PT0gMCA/ICc/JyA6ICcmJykgKyAnc2VsZWN0ZWRbJyArIGNvdW50ICsgJ11baXNfZm9sZGVyXT0nICsgdmFsdWUuaXNfZm9sZGVyICsgJyZzZWxlY3RlZFsnICsgY291bnQgKyAnXVtpZF09JyArIHZhbHVlLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChkb3dubG9hZExpbmsgIT09IFJWX01FRElBX1VSTC5kb3dubG9hZCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub3Blbihkb3dubG9hZExpbmssICdfYmxhbmsnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93TWVzc2FnZSgnZXJyb3InLCBSVl9NRURJQV9DT05GSUcudHJhbnNsYXRpb25zLmRvd25sb2FkLmVycm9yLCBSVl9NRURJQV9DT05GSUcudHJhbnNsYXRpb25zLm1lc3NhZ2UuZXJyb3JfaGVhZGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIEFjdGlvbnNTZXJ2aWNlLnByb2Nlc3NBY3Rpb24oe1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogdHlwZVxuICAgICAgICAgICAgICAgIH0sIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBwcm9jZXNzQWN0aW9uKGRhdGEsIGNhbGxiYWNrID0gbnVsbCkge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBSVl9NRURJQV9VUkwuZ2xvYmFsX2FjdGlvbnMsXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBIZWxwZXJzLnNob3dBamF4TG9hZGluZygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBIZWxwZXJzLnJlc2V0UGFnaW5hdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmICghcmVzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3dNZXNzYWdlKCdzdWNjZXNzJywgcmVzLm1lc3NhZ2UsIFJWX01FRElBX0NPTkZJRy50cmFuc2xhdGlvbnMubWVzc2FnZS5zdWNjZXNzX2hlYWRlcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvd01lc3NhZ2UoJ2Vycm9yJywgcmVzLm1lc3NhZ2UsIFJWX01FRElBX0NPTkZJRy50cmFuc2xhdGlvbnMubWVzc2FnZS5lcnJvcl9oZWFkZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgSGVscGVycy5oaWRlQWpheExvYWRpbmcoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBNZXNzYWdlU2VydmljZS5oYW5kbGVFcnJvcihkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbmRlclJlbmFtZUl0ZW1zKCkge1xuICAgICAgICBsZXQgVklFVyA9ICQoJyNydl9tZWRpYV9yZW5hbWVfaXRlbScpLmh0bWwoKTtcbiAgICAgICAgbGV0ICRpdGVtc1dyYXBwZXIgPSAkKCcjbW9kYWxfcmVuYW1lX2l0ZW1zIC5yZW5hbWUtaXRlbXMnKS5lbXB0eSgpO1xuXG4gICAgICAgIF8uZWFjaChIZWxwZXJzLmdldFNlbGVjdGVkSXRlbXMoKSwgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBWSUVXXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL19faWNvbl9fL2dpLCB2YWx1ZS5pY29uIHx8ICdmYSBmYS1maWxlLW8nKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9fX3BsYWNlaG9sZGVyX18vZ2ksICdJbnB1dCBmaWxlIG5hbWUnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9fX3ZhbHVlX18vZ2ksIHZhbHVlLm5hbWUpXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBsZXQgJGl0ZW0gPSAkKGl0ZW0pO1xuICAgICAgICAgICAgJGl0ZW0uZGF0YSgnaWQnLCB2YWx1ZS5pZCk7XG4gICAgICAgICAgICAkaXRlbS5kYXRhKCdpc19mb2xkZXInLCB2YWx1ZS5pc19mb2xkZXIpO1xuICAgICAgICAgICAgJGl0ZW0uZGF0YSgnbmFtZScsIHZhbHVlLm5hbWUpO1xuICAgICAgICAgICAgJGl0ZW1zV3JhcHBlci5hcHBlbmQoJGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVuZGVyQWN0aW9ucygpIHtcbiAgICAgICAgbGV0IGhhc0ZvbGRlclNlbGVjdGVkID0gSGVscGVycy5nZXRTZWxlY3RlZEZvbGRlcigpLmxlbmd0aCA+IDA7XG5cbiAgICAgICAgbGV0IEFDVElPTl9URU1QTEFURSA9ICQoJyNydl9hY3Rpb25faXRlbScpLmh0bWwoKTtcbiAgICAgICAgbGV0IGluaXRpYWxpemVkX2l0ZW0gPSAwO1xuICAgICAgICBsZXQgJGRyb3Bkb3duQWN0aW9ucyA9ICQoJy5ydi1kcm9wZG93bi1hY3Rpb25zIC5kcm9wZG93bi1tZW51Jyk7XG4gICAgICAgICRkcm9wZG93bkFjdGlvbnMuZW1wdHkoKTtcblxuICAgICAgICBsZXQgYWN0aW9uc0xpc3QgPSAkLmV4dGVuZCh7fSwgdHJ1ZSwgSGVscGVycy5nZXRDb25maWdzKCkuYWN0aW9uc19saXN0KTtcblxuICAgICAgICBpZiAoaGFzRm9sZGVyU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGFjdGlvbnNMaXN0LmJhc2ljID0gXy5yZWplY3QoYWN0aW9uc0xpc3QuYmFzaWMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uYWN0aW9uID09PSAncHJldmlldyc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFjdGlvbnNMaXN0LmZpbGUgPSBfLnJlamVjdChhY3Rpb25zTGlzdC5maWxlLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmFjdGlvbiA9PT0gJ2NvcHlfbGluayc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFfLmluY2x1ZGVzKFJWX01FRElBX0NPTkZJRy5wZXJtaXNzaW9ucywgJ2ZvbGRlcnMuY3JlYXRlJykpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zTGlzdC5maWxlID0gXy5yZWplY3QoYWN0aW9uc0xpc3QuZmlsZSwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uYWN0aW9uID09PSAnbWFrZV9jb3B5JztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFfLmluY2x1ZGVzKFJWX01FRElBX0NPTkZJRy5wZXJtaXNzaW9ucywgJ2ZvbGRlcnMuZWRpdCcpKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uc0xpc3QuZmlsZSA9IF8ucmVqZWN0KGFjdGlvbnNMaXN0LmZpbGUsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfLmluY2x1ZGVzKFsncmVuYW1lJ10sIGl0ZW0uYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGFjdGlvbnNMaXN0LnVzZXIgPSBfLnJlamVjdChhY3Rpb25zTGlzdC51c2VyLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXy5pbmNsdWRlcyhbJ3JlbmFtZSddLCBpdGVtLmFjdGlvbik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghXy5pbmNsdWRlcyhSVl9NRURJQV9DT05GSUcucGVybWlzc2lvbnMsICdmb2xkZXJzLnRyYXNoJykpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zTGlzdC5vdGhlciA9IF8ucmVqZWN0KGFjdGlvbnNMaXN0Lm90aGVyLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXy5pbmNsdWRlcyhbJ3RyYXNoJywgJ3Jlc3RvcmUnXSwgaXRlbS5hY3Rpb24pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIV8uaW5jbHVkZXMoUlZfTUVESUFfQ09ORklHLnBlcm1pc3Npb25zLCAnZm9sZGVycy5kZWxldGUnKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbnNMaXN0Lm90aGVyID0gXy5yZWplY3QoYWN0aW9uc0xpc3Qub3RoZXIsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfLmluY2x1ZGVzKFsnZGVsZXRlJ10sIGl0ZW0uYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFfLmluY2x1ZGVzKFJWX01FRElBX0NPTkZJRy5wZXJtaXNzaW9ucywgJ2ZvbGRlcnMuZmF2b3JpdGUnKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbnNMaXN0Lm90aGVyID0gXy5yZWplY3QoYWN0aW9uc0xpc3Qub3RoZXIsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfLmluY2x1ZGVzKFsnZmF2b3JpdGUnLCAncmVtb3ZlX2Zhdm9yaXRlJ10sIGl0ZW0uYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzZWxlY3RlZEZpbGVzID0gSGVscGVycy5nZXRTZWxlY3RlZEZpbGVzKCk7XG5cbiAgICAgICAgbGV0IGNhbl9wcmV2aWV3ID0gZmFsc2U7XG4gICAgICAgIF8uZWFjaChzZWxlY3RlZEZpbGVzLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChfLmluY2x1ZGVzKFsnaW1hZ2UnLCAneW91dHViZScsICdwZGYnLCAndGV4dCcsICd2aWRlbyddLCB2YWx1ZS50eXBlKSkge1xuICAgICAgICAgICAgICAgIGNhbl9wcmV2aWV3ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFjYW5fcHJldmlldykge1xuICAgICAgICAgICAgYWN0aW9uc0xpc3QuYmFzaWMgPSBfLnJlamVjdChhY3Rpb25zTGlzdC5iYXNpYywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5hY3Rpb24gPT09ICdwcmV2aWV3JztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkRmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKCFfLmluY2x1ZGVzKFJWX01FRElBX0NPTkZJRy5wZXJtaXNzaW9ucywgJ2ZpbGVzLmNyZWF0ZScpKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uc0xpc3QuZmlsZSA9IF8ucmVqZWN0KGFjdGlvbnNMaXN0LmZpbGUsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmFjdGlvbiA9PT0gJ21ha2VfY29weSc7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghXy5pbmNsdWRlcyhSVl9NRURJQV9DT05GSUcucGVybWlzc2lvbnMsICdmaWxlcy5lZGl0JykpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zTGlzdC5maWxlID0gXy5yZWplY3QoYWN0aW9uc0xpc3QuZmlsZSwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF8uaW5jbHVkZXMoWydyZW5hbWUnXSwgaXRlbS5hY3Rpb24pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIV8uaW5jbHVkZXMoUlZfTUVESUFfQ09ORklHLnBlcm1pc3Npb25zLCAnZmlsZXMudHJhc2gnKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbnNMaXN0Lm90aGVyID0gXy5yZWplY3QoYWN0aW9uc0xpc3Qub3RoZXIsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfLmluY2x1ZGVzKFsndHJhc2gnLCAncmVzdG9yZSddLCBpdGVtLmFjdGlvbik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghXy5pbmNsdWRlcyhSVl9NRURJQV9DT05GSUcucGVybWlzc2lvbnMsICdmaWxlcy5kZWxldGUnKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbnNMaXN0Lm90aGVyID0gXy5yZWplY3QoYWN0aW9uc0xpc3Qub3RoZXIsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfLmluY2x1ZGVzKFsnZGVsZXRlJ10sIGl0ZW0uYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFfLmluY2x1ZGVzKFJWX01FRElBX0NPTkZJRy5wZXJtaXNzaW9ucywgJ2ZpbGVzLmZhdm9yaXRlJykpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zTGlzdC5vdGhlciA9IF8ucmVqZWN0KGFjdGlvbnNMaXN0Lm90aGVyLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXy5pbmNsdWRlcyhbJ2Zhdm9yaXRlJywgJ3JlbW92ZV9mYXZvcml0ZSddLCBpdGVtLmFjdGlvbik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLmVhY2goYWN0aW9uc0xpc3QsIGZ1bmN0aW9uIChhY3Rpb24sIGtleSkge1xuICAgICAgICAgICAgXy5lYWNoKGFjdGlvbiwgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgbGV0IGlzX2JyZWFrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChIZWxwZXJzLmdldFJlcXVlc3RQYXJhbXMoKS52aWV3X2luKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FsbF9tZWRpYSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5pbmNsdWRlcyhbJ3JlbW92ZV9mYXZvcml0ZScsICdkZWxldGUnLCAncmVzdG9yZSddLCBpdGVtLmFjdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19icmVhayA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVjZW50JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLmluY2x1ZGVzKFsncmVtb3ZlX2Zhdm9yaXRlJywgJ2RlbGV0ZScsICdyZXN0b3JlJywgJ21ha2VfY29weSddLCBpdGVtLmFjdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19icmVhayA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZmF2b3JpdGVzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLmluY2x1ZGVzKFsnZmF2b3JpdGUnLCAnZGVsZXRlJywgJ3Jlc3RvcmUnLCAnbWFrZV9jb3B5J10sIGl0ZW0uYWN0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2JyZWFrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd0cmFzaCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIV8uaW5jbHVkZXMoWydwcmV2aWV3JywgJ2RlbGV0ZScsICdyZXN0b3JlJywgJ3JlbmFtZScsICdkb3dubG9hZCddLCBpdGVtLmFjdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19icmVhayA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFpc19icmVhaykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcGxhdGUgPSBBQ1RJT05fVEVNUExBVEVcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9fX2FjdGlvbl9fL2dpLCBpdGVtLmFjdGlvbiB8fCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9fX2ljb25fXy9naSwgaXRlbS5pY29uIHx8ICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL19fbmFtZV9fL2dpLCBSVl9NRURJQV9DT05GSUcudHJhbnNsYXRpb25zLmFjdGlvbnNfbGlzdFtrZXldW2l0ZW0uYWN0aW9uXSB8fCBpdGVtLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWluZGV4ICYmIGluaXRpYWxpemVkX2l0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlID0gJzxsaSByb2xlPVwic2VwYXJhdG9yXCIgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT4nICsgdGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJGRyb3Bkb3duQWN0aW9ucy5hcHBlbmQodGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZWRfaXRlbSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0FwcC9TZXJ2aWNlcy9BY3Rpb25zU2VydmljZS5qcyIsImltcG9ydCB7QWN0aW9uc1NlcnZpY2V9IGZyb20gJy4vQWN0aW9uc1NlcnZpY2UnO1xuaW1wb3J0IHtIZWxwZXJzfSBmcm9tICcuLi9IZWxwZXJzL0hlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgQ29udGV4dE1lbnVTZXJ2aWNlIHtcbiAgICBzdGF0aWMgaW5pdENvbnRleHQoKSB7XG4gICAgICAgIGlmIChqUXVlcnkoKS5jb250ZXh0TWVudSkge1xuICAgICAgICAgICAgJC5jb250ZXh0TWVudSh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcuanMtY29udGV4dC1tZW51W2RhdGEtY29udGV4dD1cImZpbGVcIl0nLFxuICAgICAgICAgICAgICAgIGJ1aWxkOiBmdW5jdGlvbiAoJGVsZW1lbnQsIGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogQ29udGV4dE1lbnVTZXJ2aWNlLl9maWxlQ29udGV4dE1lbnUoKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQuY29udGV4dE1lbnUoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLmpzLWNvbnRleHQtbWVudVtkYXRhLWNvbnRleHQ9XCJmb2xkZXJcIl0nLFxuICAgICAgICAgICAgICAgIGJ1aWxkOiBmdW5jdGlvbiAoJGVsZW1lbnQsIGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtczogQ29udGV4dE1lbnVTZXJ2aWNlLl9mb2xkZXJDb250ZXh0TWVudSgpLFxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBfZmlsZUNvbnRleHRNZW51KCkge1xuICAgICAgICBsZXQgaXRlbXMgPSB7XG4gICAgICAgICAgICBwcmV2aWV3OiB7XG4gICAgICAgICAgICAgICAgbmFtZTogJ1ByZXZpZXcnLFxuICAgICAgICAgICAgICAgIGljb246IGZ1bmN0aW9uIChvcHQsICRpdGVtRWxlbWVudCwgaXRlbUtleSwgaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAkaXRlbUVsZW1lbnQuaHRtbCgnPGkgY2xhc3M9XCJmYSBmYS1leWVcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+ICcgKyBpdGVtLm5hbWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnY29udGV4dC1tZW51LWljb24tdXBkYXRlZCc7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKGtleSwgb3B0KSB7XG4gICAgICAgICAgICAgICAgICAgIEFjdGlvbnNTZXJ2aWNlLmhhbmRsZVByZXZpZXcoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIF8uZWFjaChIZWxwZXJzLmdldENvbmZpZ3MoKS5hY3Rpb25zX2xpc3QsIGZ1bmN0aW9uIChhY3Rpb25Hcm91cCwga2V5KSB7XG4gICAgICAgICAgICBfLmVhY2goYWN0aW9uR3JvdXAsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGl0ZW1zW3ZhbHVlLmFjdGlvbl0gPSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHZhbHVlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGljb246IGZ1bmN0aW9uIChvcHQsICRpdGVtRWxlbWVudCwgaXRlbUtleSwgaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGl0ZW1FbGVtZW50Lmh0bWwoJzxpIGNsYXNzPVwiJyArIHZhbHVlLmljb24gKyAnXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiAnICsgKFJWX01FRElBX0NPTkZJRy50cmFuc2xhdGlvbnMuYWN0aW9uc19saXN0W2tleV1bdmFsdWUuYWN0aW9uXSB8fCBpdGVtLm5hbWUpKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdjb250ZXh0LW1lbnUtaWNvbi11cGRhdGVkJztcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChrZXksIG9wdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLmpzLWZpbGVzLWFjdGlvbltkYXRhLWFjdGlvbj1cIicgKyB2YWx1ZS5hY3Rpb24gKyAnXCJdJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgZXhjZXB0ID0gW107XG5cbiAgICAgICAgc3dpdGNoIChIZWxwZXJzLmdldFJlcXVlc3RQYXJhbXMoKS52aWV3X2luKSB7XG4gICAgICAgICAgICBjYXNlICdhbGxfbWVkaWEnOlxuICAgICAgICAgICAgICAgIGV4Y2VwdCA9IFsncmVtb3ZlX2Zhdm9yaXRlJywgJ2RlbGV0ZScsICdyZXN0b3JlJ107XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyZWNlbnQnOlxuICAgICAgICAgICAgICAgIGV4Y2VwdCA9IFsncmVtb3ZlX2Zhdm9yaXRlJywgJ2RlbGV0ZScsICdyZXN0b3JlJywgJ21ha2VfY29weSddO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZmF2b3JpdGVzJzpcbiAgICAgICAgICAgICAgICBleGNlcHQgPSBbJ2Zhdm9yaXRlJywgJ2RlbGV0ZScsICdyZXN0b3JlJywgJ21ha2VfY29weSddO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndHJhc2gnOlxuICAgICAgICAgICAgICAgIGl0ZW1zID0ge1xuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3OiBpdGVtcy5wcmV2aWV3LFxuICAgICAgICAgICAgICAgICAgICByZW5hbWU6IGl0ZW1zLnJlbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZG93bmxvYWQ6IGl0ZW1zLmRvd25sb2FkLFxuICAgICAgICAgICAgICAgICAgICBkZWxldGU6IGl0ZW1zLmRlbGV0ZSxcbiAgICAgICAgICAgICAgICAgICAgcmVzdG9yZTogaXRlbXMucmVzdG9yZSxcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5lYWNoKGV4Y2VwdCwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpdGVtc1t2YWx1ZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCBoYXNGb2xkZXJTZWxlY3RlZCA9IEhlbHBlcnMuZ2V0U2VsZWN0ZWRGb2xkZXIoKS5sZW5ndGggPiAwO1xuXG4gICAgICAgIGlmIChoYXNGb2xkZXJTZWxlY3RlZCkge1xuICAgICAgICAgICAgaXRlbXMucHJldmlldyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGl0ZW1zLmNvcHlfbGluayA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgICAgaWYgKCFfLmluY2x1ZGVzKFJWX01FRElBX0NPTkZJRy5wZXJtaXNzaW9ucywgJ2ZvbGRlcnMuY3JlYXRlJykpIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5tYWtlX2NvcHkgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghXy5pbmNsdWRlcyhSVl9NRURJQV9DT05GSUcucGVybWlzc2lvbnMsICdmb2xkZXJzLmVkaXQnKSkge1xuICAgICAgICAgICAgICAgIGl0ZW1zLnJlbmFtZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFfLmluY2x1ZGVzKFJWX01FRElBX0NPTkZJRy5wZXJtaXNzaW9ucywgJ2ZvbGRlcnMudHJhc2gnKSkge1xuICAgICAgICAgICAgICAgIGl0ZW1zLnRyYXNoID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGl0ZW1zLnJlc3RvcmUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghXy5pbmNsdWRlcyhSVl9NRURJQV9DT05GSUcucGVybWlzc2lvbnMsICdmb2xkZXJzLmRlbGV0ZScpKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMuZGVsZXRlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIV8uaW5jbHVkZXMoUlZfTUVESUFfQ09ORklHLnBlcm1pc3Npb25zLCAnZm9sZGVycy5mYXZvcml0ZScpKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMuZmF2b3JpdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgaXRlbXMucmVtb3ZlX2Zhdm9yaXRlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHNlbGVjdGVkRmlsZXMgPSBIZWxwZXJzLmdldFNlbGVjdGVkRmlsZXMoKTtcblxuICAgICAgICBpZiAoc2VsZWN0ZWRGaWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAoIV8uaW5jbHVkZXMoUlZfTUVESUFfQ09ORklHLnBlcm1pc3Npb25zLCAnZmlsZXMuY3JlYXRlJykpIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5tYWtlX2NvcHkgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghXy5pbmNsdWRlcyhSVl9NRURJQV9DT05GSUcucGVybWlzc2lvbnMsICdmaWxlcy5lZGl0JykpIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5yZW5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghXy5pbmNsdWRlcyhSVl9NRURJQV9DT05GSUcucGVybWlzc2lvbnMsICdmaWxlcy50cmFzaCcpKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMudHJhc2ggPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgaXRlbXMucmVzdG9yZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFfLmluY2x1ZGVzKFJWX01FRElBX0NPTkZJRy5wZXJtaXNzaW9ucywgJ2ZpbGVzLmRlbGV0ZScpKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMuZGVsZXRlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIV8uaW5jbHVkZXMoUlZfTUVESUFfQ09ORklHLnBlcm1pc3Npb25zLCAnZmlsZXMuZmF2b3JpdGUnKSkge1xuICAgICAgICAgICAgICAgIGl0ZW1zLmZhdm9yaXRlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGl0ZW1zLnJlbW92ZV9mYXZvcml0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjYW5fcHJldmlldyA9IGZhbHNlO1xuICAgICAgICBfLmVhY2goc2VsZWN0ZWRGaWxlcywgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoXy5pbmNsdWRlcyhbJ2ltYWdlJywgJ3lvdXR1YmUnLCAncGRmJywgJ3RleHQnLCAndmlkZW8nXSwgdmFsdWUudHlwZSkpIHtcbiAgICAgICAgICAgICAgICBjYW5fcHJldmlldyA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghY2FuX3ByZXZpZXcpIHtcbiAgICAgICAgICAgIGl0ZW1zLnByZXZpZXcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaXRlbXM7XG4gICAgfVxuXG4gICAgc3RhdGljIF9mb2xkZXJDb250ZXh0TWVudSgpIHtcbiAgICAgICAgbGV0IGl0ZW1zID0gQ29udGV4dE1lbnVTZXJ2aWNlLl9maWxlQ29udGV4dE1lbnUoKTtcblxuICAgICAgICBpdGVtcy5wcmV2aWV3ID0gdW5kZWZpbmVkO1xuICAgICAgICBpdGVtcy5jb3B5X2xpbmsgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH1cblxuICAgIHN0YXRpYyBkZXN0cm95Q29udGV4dCgpIHtcbiAgICAgICAgaWYgKGpRdWVyeSgpLmNvbnRleHRNZW51KSB7XG4gICAgICAgICAgICAkLmNvbnRleHRNZW51KCdkZXN0cm95Jyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0FwcC9TZXJ2aWNlcy9Db250ZXh0TWVudVNlcnZpY2UuanMiLCJpbXBvcnQge0hlbHBlcnN9IGZyb20gJy4vQXBwL0hlbHBlcnMvSGVscGVycyc7XG5pbXBvcnQge01lZGlhQ29uZmlnfSBmcm9tICcuL0FwcC9Db25maWcvTWVkaWFDb25maWcnO1xuaW1wb3J0IHtDb250ZXh0TWVudVNlcnZpY2V9IGZyb20gXCIuL0FwcC9TZXJ2aWNlcy9Db250ZXh0TWVudVNlcnZpY2VcIjtcblxuZXhwb3J0IGNsYXNzIEVkaXRvclNlcnZpY2Uge1xuICAgIHN0YXRpYyBlZGl0b3JTZWxlY3RGaWxlKHNlbGVjdGVkRmlsZXMpIHtcblxuICAgICAgICBsZXQgaXNfY2tlZGl0b3IgPSBIZWxwZXJzLmdldFVybFBhcmFtKCdDS0VkaXRvcicpIHx8IEhlbHBlcnMuZ2V0VXJsUGFyYW0oJ0NLRWRpdG9yRnVuY051bScpO1xuXG4gICAgICAgIGlmICh3aW5kb3cub3BlbmVyICYmIGlzX2NrZWRpdG9yKSB7XG4gICAgICAgICAgICBsZXQgZmlyc3RJdGVtID0gXy5maXJzdChzZWxlY3RlZEZpbGVzKTtcblxuICAgICAgICAgICAgd2luZG93Lm9wZW5lci5DS0VESVRPUi50b29scy5jYWxsRnVuY3Rpb24oSGVscGVycy5nZXRVcmxQYXJhbSgnQ0tFZGl0b3JGdW5jTnVtJyksIGZpcnN0SXRlbS51cmwpO1xuXG4gICAgICAgICAgICBpZiAod2luZG93Lm9wZW5lcikge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTm8gV1lTSVdZRyBlZGl0b3IgZm91bmQsIHVzZSBjdXN0b20gbWV0aG9kLlxuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBydk1lZGlhIHtcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3Rvciwgb3B0aW9ucykge1xuICAgICAgICB3aW5kb3cucnZNZWRpYSA9IHdpbmRvdy5ydk1lZGlhIHx8IHt9O1xuXG4gICAgICAgIGxldCAkYm9keSA9ICQoJ2JvZHknKTtcblxuICAgICAgICBsZXQgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtdWx0aXBsZTogdHJ1ZSxcbiAgICAgICAgICAgIHR5cGU6ICcqJyxcbiAgICAgICAgICAgIG9uU2VsZWN0RmlsZXM6IGZ1bmN0aW9uIChmaWxlcywgJGVsKSB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBvcHRpb25zID0gJC5leHRlbmQodHJ1ZSwgZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuXG4gICAgICAgIGxldCBjbGlja0NhbGxiYWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0ICRjdXJyZW50ID0gJCh0aGlzKTtcbiAgICAgICAgICAgICQoJyNydl9tZWRpYV9tb2RhbCcpLm1vZGFsKCk7XG5cbiAgICAgICAgICAgIHdpbmRvdy5ydk1lZGlhLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICAgICAgd2luZG93LnJ2TWVkaWEub3B0aW9ucy5vcGVuX2luID0gJ21vZGFsJztcblxuICAgICAgICAgICAgd2luZG93LnJ2TWVkaWEuJGVsID0gJGN1cnJlbnQ7XG5cbiAgICAgICAgICAgIE1lZGlhQ29uZmlnLnJlcXVlc3RfcGFyYW1zLmZpbHRlciA9ICdldmVyeXRoaW5nJztcbiAgICAgICAgICAgIEhlbHBlcnMuc3RvcmVDb25maWcoKTtcblxuICAgICAgICAgICAgQ29udGV4dE1lbnVTZXJ2aWNlLmRlc3Ryb3lDb250ZXh0KCk7XG4gICAgICAgICAgICBDb250ZXh0TWVudVNlcnZpY2UuaW5pdENvbnRleHQoKTtcblxuICAgICAgICAgICAgbGV0IGVsZV9vcHRpb25zID0gd2luZG93LnJ2TWVkaWEuJGVsLmRhdGEoJ3J2LW1lZGlhJyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVsZV9vcHRpb25zICE9PSAndW5kZWZpbmVkJyAmJiBlbGVfb3B0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZWxlX29wdGlvbnMgPSBlbGVfb3B0aW9uc1swXTtcbiAgICAgICAgICAgICAgICB3aW5kb3cucnZNZWRpYS5vcHRpb25zID0gJC5leHRlbmQodHJ1ZSwgd2luZG93LnJ2TWVkaWEub3B0aW9ucywgZWxlX29wdGlvbnMgfHwge30pO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlX29wdGlvbnMuc2VsZWN0ZWRfZmlsZV9pZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJ2TWVkaWEub3B0aW9ucy5pc19wb3B1cCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygd2luZG93LnJ2TWVkaWEub3B0aW9ucy5pc19wb3B1cCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJ2TWVkaWEub3B0aW9ucy5pc19wb3B1cCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkKCcjcnZfbWVkaWFfYm9keSAucnYtbWVkaWEtY29udGFpbmVyJykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgJCgnI3J2X21lZGlhX2JvZHknKS5sb2FkKFJWX01FRElBX1VSTC5wb3B1cCwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJCgnI3J2X21lZGlhX2JvZHknKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdtZWRpYS1tb2RhbC1sb2FkaW5nJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jbG9zZXN0KCcubW9kYWwtY29udGVudCcpLnJlbW92ZUNsYXNzKCdiYi1sb2FkaW5nJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLmZpbmQoJy5ydi1tZWRpYS1jb250YWluZXIgLmpzLWNoYW5nZS1hY3Rpb25bZGF0YS10eXBlPXJlZnJlc2hdJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgJGJvZHkub24oJ2NsaWNrJywgc2VsZWN0b3IsIGNsaWNrQ2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2VsZWN0b3Iub24oJ2NsaWNrJywgY2xpY2tDYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbndpbmRvdy5Sdk1lZGlhU3RhbmRBbG9uZSA9IHJ2TWVkaWE7XG5cbiQoJy5qcy1pbnNlcnQtdG8tZWRpdG9yJykub2ZmKCdjbGljaycpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHNlbGVjdGVkRmlsZXMgPSBIZWxwZXJzLmdldFNlbGVjdGVkRmlsZXMoKTtcbiAgICBpZiAoXy5zaXplKHNlbGVjdGVkRmlsZXMpID4gMCkge1xuICAgICAgICBFZGl0b3JTZXJ2aWNlLmVkaXRvclNlbGVjdEZpbGUoc2VsZWN0ZWRGaWxlcyk7XG4gICAgfVxufSk7XG5cbiQuZm4ucnZNZWRpYSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgbGV0ICRzZWxlY3RvciA9ICQodGhpcyk7XG5cbiAgICBNZWRpYUNvbmZpZy5yZXF1ZXN0X3BhcmFtcy5maWx0ZXIgPSAnZXZlcnl0aGluZyc7XG4gICAgaWYgKE1lZGlhQ29uZmlnLnJlcXVlc3RfcGFyYW1zLnZpZXdfaW4gPT09ICd0cmFzaCcpIHtcbiAgICAgICAgJChkb2N1bWVudCkuZmluZCgnLmpzLWluc2VydC10by1lZGl0b3InKS5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICQoZG9jdW1lbnQpLmZpbmQoJy5qcy1pbnNlcnQtdG8tZWRpdG9yJykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgfVxuICAgIEhlbHBlcnMuc3RvcmVDb25maWcoKTtcblxuICAgIG5ldyBydk1lZGlhKCRzZWxlY3Rvciwgb3B0aW9ucyk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9pbnRlZ3JhdGUuanMiXSwic291cmNlUm9vdCI6IiJ9