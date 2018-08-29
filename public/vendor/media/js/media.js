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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Config_MediaConfig__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_MessageService__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_ActionsService__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Services_ContextMenuService__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Views_MediaList__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Views_MediaDetails__ = __webpack_require__(10);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }









var MediaService = function () {
    function MediaService() {
        _classCallCheck(this, MediaService);

        this.MediaList = new __WEBPACK_IMPORTED_MODULE_5__Views_MediaList__["a" /* MediaList */]();
        this.MediaDetails = new __WEBPACK_IMPORTED_MODULE_6__Views_MediaDetails__["a" /* MediaDetails */]();
        this.breadcrumbTemplate = $('#rv_media_breadcrumb_item').html();
    }

    _createClass(MediaService, [{
        key: 'getMedia',
        value: function getMedia() {
            var reload = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            var is_popup = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var load_more_file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            if (typeof RV_MEDIA_CONFIG.pagination != 'undefined') {
                if (RV_MEDIA_CONFIG.pagination.in_process_get_media) {
                    return;
                } else {
                    RV_MEDIA_CONFIG.pagination.in_process_get_media = true;
                }
            }

            var _self = this;

            _self.getFileDetails({
                icon: 'fa fa-picture-o',
                nothing_selected: ''
            });

            var params = __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getRequestParams();

            if (params.view_in === 'recent') {
                params.recent_items = __WEBPACK_IMPORTED_MODULE_0__Config_MediaConfig__["b" /* RecentItems */];
            }

            if (is_popup === true) {
                params.is_popup = true;
            } else {
                params.is_popup = undefined;
            }

            params.onSelectFiles = undefined;

            if (typeof params.search != 'undefined' && params.search != '' && typeof params.selected_file_id != 'undefined') {
                params.selected_file_id = undefined;
            }

            params.load_more_file = load_more_file;
            if (typeof RV_MEDIA_CONFIG.pagination != 'undefined') {
                params.paged = RV_MEDIA_CONFIG.pagination.paged;
                params.posts_per_page = RV_MEDIA_CONFIG.pagination.posts_per_page;
            }
            $.ajax({
                url: RV_MEDIA_URL.get_media,
                type: 'GET',
                data: params,
                dataType: 'json',
                beforeSend: function beforeSend() {
                    __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].showAjaxLoading();
                },
                success: function success(res) {
                    _self.MediaList.renderData(res.data, reload, load_more_file);
                    _self.fetchQuota();
                    _self.renderBreadcrumbs(res.data.breadcrumbs);
                    MediaService.refreshFilter();
                    __WEBPACK_IMPORTED_MODULE_3__Services_ActionsService__["a" /* ActionsService */].renderActions();

                    if (typeof RV_MEDIA_CONFIG.pagination != 'undefined') {
                        if (typeof RV_MEDIA_CONFIG.pagination.paged != 'undefined') {
                            RV_MEDIA_CONFIG.pagination.paged += 1;
                        }

                        if (typeof RV_MEDIA_CONFIG.pagination.in_process_get_media != 'undefined') {
                            RV_MEDIA_CONFIG.pagination.in_process_get_media = false;
                        }

                        if (typeof RV_MEDIA_CONFIG.pagination.posts_per_page != 'undefined' && res.data.files.length < RV_MEDIA_CONFIG.pagination.posts_per_page && typeof RV_MEDIA_CONFIG.pagination.has_more != 'undefined') {
                            RV_MEDIA_CONFIG.pagination.has_more = false;
                        }
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
        key: 'getFileDetails',
        value: function getFileDetails(data) {
            this.MediaDetails.renderData(data);
        }
    }, {
        key: 'fetchQuota',
        value: function fetchQuota() {
            $.ajax({
                url: RV_MEDIA_URL.get_quota,
                type: 'GET',
                dataType: 'json',
                beforeSend: function beforeSend() {},
                success: function success(res) {
                    var data = res.data;

                    $('.rv-media-aside-bottom .used-analytics span').html(data.used + ' / ' + data.quota);
                    $('.rv-media-aside-bottom .progress-bar').css({
                        width: data.percent + '%'
                    });
                },
                error: function error(data) {
                    __WEBPACK_IMPORTED_MODULE_2__Services_MessageService__["a" /* MessageService */].handleError(data);
                }
            });
        }
    }, {
        key: 'renderBreadcrumbs',
        value: function renderBreadcrumbs(breadcrumbItems) {
            var _self = this;
            var $breadcrumbContainer = $('.rv-media-breadcrumb .breadcrumb');
            $breadcrumbContainer.find('li').remove();

            _.each(breadcrumbItems, function (value, index) {
                var template = _self.breadcrumbTemplate;
                template = template.replace(/__name__/gi, value.name || '').replace(/__icon__/gi, value.icon ? '<i class="' + value.icon + '"></i>' : '').replace(/__folderId__/gi, value.id || 0);
                $breadcrumbContainer.append($(template));
            });
            $('.rv-media-container').attr('data-breadcrumb-count', _.size(breadcrumbItems));
        }
    }], [{
        key: 'refreshFilter',
        value: function refreshFilter() {
            var $rvMediaContainer = $('.rv-media-container');
            var view_in = __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getRequestParams().view_in;
            if (view_in !== 'all_media' && __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getRequestParams().folder_id == 0) {
                $('.rv-media-actions .btn:not([data-type="refresh"]):not(label)').addClass('disabled');
                $rvMediaContainer.attr('data-allow-upload', 'false');
            } else {
                $('.rv-media-actions .btn:not([data-type="refresh"]):not(label)').removeClass('disabled');
                $rvMediaContainer.attr('data-allow-upload', 'true');
            }

            $('.rv-media-actions .btn.js-rv-media-change-filter-group').removeClass('disabled');

            var $empty_trash_btn = $('.rv-media-actions .btn[data-action="empty_trash"]');
            if (view_in === 'trash') {
                $empty_trash_btn.removeClass('hidden').removeClass('disabled');
                if (!_.size(__WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getItems())) {
                    $empty_trash_btn.addClass('hidden').addClass('disabled');
                }
            } else {
                $empty_trash_btn.addClass('hidden');
            }

            __WEBPACK_IMPORTED_MODULE_4__Services_ContextMenuService__["a" /* ContextMenuService */].destroyContext();
            __WEBPACK_IMPORTED_MODULE_4__Services_ContextMenuService__["a" /* ContextMenuService */].initContext();

            $rvMediaContainer.attr('data-view-in', view_in);
        }
    }]);

    return MediaService;
}();

/***/ }),
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Helpers_Helpers__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_ActionsService__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var MediaList = function () {
    function MediaList() {
        _classCallCheck(this, MediaList);

        this.group = {};
        this.group.list = $('#rv_media_items_list').html();
        this.group.tiles = $('#rv_media_items_tiles').html();

        this.item = {};
        this.item.list = $('#rv_media_items_list_element').html();
        this.item.tiles = $('#rv_media_items_tiles_element').html();

        this.$groupContainer = $('.rv-media-items');
    }

    _createClass(MediaList, [{
        key: 'renderData',
        value: function renderData(data) {
            var reload = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            var load_more_file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

            var _self = this;
            var MediaConfig = __WEBPACK_IMPORTED_MODULE_0__Helpers_Helpers__["a" /* Helpers */].getConfigs();
            var template = _self.group[__WEBPACK_IMPORTED_MODULE_0__Helpers_Helpers__["a" /* Helpers */].getRequestParams().view_type];

            var view_in = __WEBPACK_IMPORTED_MODULE_0__Helpers_Helpers__["a" /* Helpers */].getRequestParams().view_in;

            if (!_.includes(['all_media', 'public', 'trash', 'favorites', 'recent'], view_in)) {
                view_in = 'all_media';
            }

            template = template.replace(/__noItemIcon__/gi, RV_MEDIA_CONFIG.translations.no_item[view_in].icon || '').replace(/__noItemTitle__/gi, RV_MEDIA_CONFIG.translations.no_item[view_in].title || '').replace(/__noItemMessage__/gi, RV_MEDIA_CONFIG.translations.no_item[view_in].message || '');

            var $result = $(template);
            var $itemsWrapper = $result.find('ul');

            if (load_more_file && this.$groupContainer.find('.rv-media-grid ul').length > 0) {
                $itemsWrapper = this.$groupContainer.find('.rv-media-grid ul');
            }

            if (_.size(data.folders) > 0 || _.size(data.files) > 0 || load_more_file) {
                $('.rv-media-items').addClass('has-items');
            } else {
                $('.rv-media-items').removeClass('has-items');
            }

            _.forEach(data.folders, function (value, index) {
                var item = _self.item[__WEBPACK_IMPORTED_MODULE_0__Helpers_Helpers__["a" /* Helpers */].getRequestParams().view_type];
                item = item.replace(/__type__/gi, 'folder').replace(/__id__/gi, value.id).replace(/__name__/gi, value.name || '').replace(/__size__/gi, '').replace(/__date__/gi, value.created_at || '').replace(/__thumb__/gi, '<i class="fa fa-folder-o"></i>');
                var $item = $(item);
                _.forEach(value, function (val, index) {
                    $item.data(index, val);
                });
                $item.data('is_folder', true);
                $item.data('icon', MediaConfig.icons.folder);
                $itemsWrapper.append($item);
            });

            _.forEach(data.files, function (value) {
                var item = _self.item[__WEBPACK_IMPORTED_MODULE_0__Helpers_Helpers__["a" /* Helpers */].getRequestParams().view_type];
                item = item.replace(/__type__/gi, 'file').replace(/__id__/gi, value.id).replace(/__name__/gi, value.name || '').replace(/__size__/gi, value.size || '').replace(/__date__/gi, value.created_at || '');
                if (__WEBPACK_IMPORTED_MODULE_0__Helpers_Helpers__["a" /* Helpers */].getRequestParams().view_type === 'list') {
                    item = item.replace(/__thumb__/gi, '<i class="' + value.icon + '"></i>');
                } else {
                    switch (value.mime_type) {
                        case 'youtube':
                            item = item.replace(/__thumb__/gi, '<img src="' + value.options.thumb + '" alt="' + value.name + '">');
                            break;
                        default:
                            item = item.replace(/__thumb__/gi, value.thumb ? '<img src="' + value.thumb + '" alt="' + value.name + '">' : '<i class="' + value.icon + '"></i>');
                            break;
                    }
                }
                var $item = $(item);
                $item.data('is_folder', false);
                _.forEach(value, function (val, index) {
                    $item.data(index, val);
                });
                $itemsWrapper.append($item);
            });
            if (reload !== false) {
                _self.$groupContainer.empty();
            }

            if (load_more_file && this.$groupContainer.find('.rv-media-grid ul').length > 0) {} else {
                _self.$groupContainer.append($result);
            }
            _self.$groupContainer.find('.loading-wrapper').remove();
            __WEBPACK_IMPORTED_MODULE_1__Services_ActionsService__["a" /* ActionsService */].handleDropdown();

            //trigger event click for file selected
            $('.js-media-list-title[data-id=' + data.selected_file_id + ']').trigger('click');
        }
    }]);

    return MediaList;
}();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(9);
module.exports = __webpack_require__(16);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__App_Config_MediaConfig__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__App_Services_MediaService__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App_Services_MessageService__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__App_Services_FolderService__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__App_Services_UploadService__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__App_Services_ActionsService__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__App_Externals_ExternalServices__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__integrate__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }











var MediaManagement = function () {
    function MediaManagement() {
        _classCallCheck(this, MediaManagement);

        this.MediaService = new __WEBPACK_IMPORTED_MODULE_2__App_Services_MediaService__["a" /* MediaService */]();
        this.UploadService = new __WEBPACK_IMPORTED_MODULE_5__App_Services_UploadService__["a" /* UploadService */]();
        this.FolderService = new __WEBPACK_IMPORTED_MODULE_4__App_Services_FolderService__["a" /* FolderService */]();

        new __WEBPACK_IMPORTED_MODULE_7__App_Externals_ExternalServices__["a" /* ExternalServices */]();

        this.$body = $('body');
    }

    _createClass(MediaManagement, [{
        key: 'init',
        value: function init() {
            __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].resetPagination();
            this.setupLayout();

            this.handleMediaList();
            this.changeViewType();
            this.changeFilter();
            this.search();
            this.handleActions();

            this.UploadService.init();

            this.handleModals();
            this.scrollGetMore();
        }
    }, {
        key: 'setupLayout',
        value: function setupLayout() {
            /**
             * Sidebar
             */
            var $current_filter = $('.js-rv-media-change-filter[data-type="filter"][data-value="' + __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].getRequestParams().filter + '"]');

            $current_filter.closest('li').addClass('active').closest('.dropdown').find('.js-rv-media-filter-current').html('(' + $current_filter.html() + ')');

            var $current_view_in = $('.js-rv-media-change-filter[data-type="view_in"][data-value="' + __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].getRequestParams().view_in + '"]');

            $current_view_in.closest('li').addClass('active').closest('.dropdown').find('.js-rv-media-filter-current').html('(' + $current_view_in.html() + ')');

            if (__WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].isUseInModal()) {
                $('.rv-media-footer').removeClass('hidden');
            }

            /**
             * Sort
             */
            $('.js-rv-media-change-filter[data-type="sort_by"][data-value="' + __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].getRequestParams().sort_by + '"]').closest('li').addClass('active');

            /**
             * Details pane
             */
            var $mediaDetailsCheckbox = $('#media_details_collapse');
            $mediaDetailsCheckbox.prop('checked', __WEBPACK_IMPORTED_MODULE_0__App_Config_MediaConfig__["a" /* MediaConfig */].hide_details_pane || false);
            setTimeout(function () {
                $('.rv-media-details').removeClass('hidden');
            }, 300);
            $mediaDetailsCheckbox.on('change', function (event) {
                event.preventDefault();
                __WEBPACK_IMPORTED_MODULE_0__App_Config_MediaConfig__["a" /* MediaConfig */].hide_details_pane = $(this).is(':checked');
                __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].storeConfig();
            });

            $(document).on('click', 'button[data-dismiss-modal]', function () {
                var modal = $(this).data('dismiss-modal');
                $(modal).modal('hide');
            });
        }
    }, {
        key: 'handleMediaList',
        value: function handleMediaList() {
            var _self = this;

            /*Ctrl key in Windows*/
            var ctrl_key = false;

            /*Command key in MAC*/
            var meta_key = false;

            /*Shift key*/
            var shift_key = false;

            $(document).on('keyup keydown', function (e) {
                /*User hold ctrl key*/
                ctrl_key = e.ctrlKey;
                /*User hold command key*/
                meta_key = e.metaKey;
                /*User hold shift key*/
                shift_key = e.shiftKey;
            });

            _self.$body.on('click', '.js-media-list-title', function (event) {
                event.preventDefault();
                var $current = $(this);

                if (shift_key) {
                    var firstItem = _.first(__WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].getSelectedItems());
                    if (firstItem) {
                        var firstIndex = firstItem.index_key;
                        var currentIndex = $current.index();
                        $('.rv-media-items li').each(function (index) {
                            if (index > firstIndex && index <= currentIndex) {
                                $(this).find('input[type=checkbox]').prop('checked', true);
                            }
                        });
                    }
                } else {
                    if (!ctrl_key && !meta_key) {
                        $current.closest('.rv-media-items').find('input[type=checkbox]').prop('checked', false);
                    }
                }

                var $lineCheckBox = $current.find('input[type=checkbox]');
                $lineCheckBox.prop('checked', true);
                __WEBPACK_IMPORTED_MODULE_6__App_Services_ActionsService__["a" /* ActionsService */].handleDropdown();

                _self.MediaService.getFileDetails($current.data());
            }).on('dblclick', '.js-media-list-title', function (event) {
                event.preventDefault();

                var data = $(this).data();
                if (data.is_folder === true) {
                    __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].resetPagination();
                    _self.FolderService.changeFolder(data.id);
                } else {
                    if (!__WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].isUseInModal()) {
                        __WEBPACK_IMPORTED_MODULE_6__App_Services_ActionsService__["a" /* ActionsService */].handlePreview();
                    } else if (__WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].getConfigs().request_params.view_in !== 'trash') {
                        var selectedFiles = __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].getSelectedFiles();
                        if (_.size(selectedFiles) > 0) {
                            __WEBPACK_IMPORTED_MODULE_8__integrate__["EditorService"].editorSelectFile(selectedFiles);
                        }
                    }
                }
            }).on('dblclick', '.js-up-one-level', function (event) {
                event.preventDefault();
                var count = $('.rv-media-breadcrumb .breadcrumb li').length;
                $('.rv-media-breadcrumb .breadcrumb li:nth-child(' + (count - 1) + ') a').trigger('click');
            }).on('contextmenu', '.js-context-menu', function (e) {
                if (!$(this).find('input[type=checkbox]').is(':checked')) {
                    $(this).trigger('click');
                }
            }).on('click contextmenu', '.rv-media-items', function (e) {
                if (!_.size(e.target.closest('.js-context-menu'))) {
                    $('.rv-media-items input[type="checkbox"]').prop('checked', false);
                    $('.rv-dropdown-actions').addClass('disabled');
                    _self.MediaService.getFileDetails({
                        icon: 'fa fa-picture-o',
                        nothing_selected: ''
                    });
                }
            });
        }
    }, {
        key: 'changeViewType',
        value: function changeViewType() {
            var _self = this;
            _self.$body.on('click', '.js-rv-media-change-view-type .btn', function (event) {
                event.preventDefault();
                var $current = $(this);
                if ($current.hasClass('active')) {
                    return;
                }
                $current.closest('.js-rv-media-change-view-type').find('.btn').removeClass('active');
                $current.addClass('active');

                __WEBPACK_IMPORTED_MODULE_0__App_Config_MediaConfig__["a" /* MediaConfig */].request_params.view_type = $current.data('type');

                if ($current.data('type') === 'trash') {
                    $(document).find('.js-insert-to-editor').prop('disabled', true);
                } else {
                    $(document).find('.js-insert-to-editor').prop('disabled', false);
                }

                __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].storeConfig();

                if (typeof RV_MEDIA_CONFIG.pagination != 'undefined') {
                    if (typeof RV_MEDIA_CONFIG.pagination.paged != 'undefined') {
                        RV_MEDIA_CONFIG.pagination.paged = 1;
                    }
                }

                _self.MediaService.getMedia(true, false);
            });
            $('.js-rv-media-change-view-type .btn[data-type="' + __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].getRequestParams().view_type + '"]').trigger('click');

            this.bindIntegrateModalEvents();
        }
    }, {
        key: 'changeFilter',
        value: function changeFilter() {
            var _self = this;
            _self.$body.on('click', '.js-rv-media-change-filter', function (event) {
                event.preventDefault();
                if (!__WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].isOnAjaxLoading()) {
                    var $current = $(this);
                    var $parent = $current.closest('ul');
                    var data = $current.data();

                    __WEBPACK_IMPORTED_MODULE_0__App_Config_MediaConfig__["a" /* MediaConfig */].request_params[data.type] = data.value;

                    if (data.type === 'view_in') {
                        __WEBPACK_IMPORTED_MODULE_0__App_Config_MediaConfig__["a" /* MediaConfig */].request_params.folder_id = 0;
                        if (data.value === 'trash') {
                            $(document).find('.js-insert-to-editor').prop('disabled', true);
                        } else {
                            $(document).find('.js-insert-to-editor').prop('disabled', false);
                        }
                    }

                    $current.closest('.dropdown').find('.js-rv-media-filter-current').html('(' + $current.html() + ')');

                    __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].storeConfig();
                    __WEBPACK_IMPORTED_MODULE_2__App_Services_MediaService__["a" /* MediaService */].refreshFilter();

                    __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].resetPagination();
                    _self.MediaService.getMedia(true);

                    $parent.find('> li').removeClass('active');
                    $current.closest('li').addClass('active');
                }
            });
        }
    }, {
        key: 'search',
        value: function search() {
            var _self = this;
            $('.input-search-wrapper input[type="text"]').val(__WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].getRequestParams().search || '');
            _self.$body.on('submit', '.input-search-wrapper', function (event) {
                event.preventDefault();
                __WEBPACK_IMPORTED_MODULE_0__App_Config_MediaConfig__["a" /* MediaConfig */].request_params.search = $(this).find('input[type="text"]').val();

                __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].storeConfig();
                __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].resetPagination();
                _self.MediaService.getMedia(true);
            });
        }
    }, {
        key: 'handleActions',
        value: function handleActions() {
            var _self = this;

            _self.$body.on('click', '.rv-media-actions .js-change-action[data-type="refresh"]', function (event) {
                event.preventDefault();

                __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].resetPagination();

                var ele_options = typeof window.rvMedia.$el !== 'undefined' ? window.rvMedia.$el.data('rv-media') : undefined;
                if (typeof ele_options !== 'undefined' && ele_options.length > 0 && typeof ele_options[0].selected_file_id !== 'undefined') {
                    _self.MediaService.getMedia(true, true);
                } else _self.MediaService.getMedia(true, false);
            }).on('click', '.rv-media-items li.no-items', function (event) {
                event.preventDefault();
                $('.rv-media-header .rv-media-top-header .rv-media-actions .js-dropzone-upload').trigger('click');
            }).on('submit', '.form-add-folder', function (event) {
                event.preventDefault();
                var $input = $(this).find('input[type=text]');
                var folderName = $input.val();
                _self.FolderService.create(folderName);
                $input.val('');
            }).on('click', '.js-change-folder', function (event) {
                event.preventDefault();
                var folderId = $(this).data('folder');
                __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].resetPagination();
                _self.FolderService.changeFolder(folderId);
            }).on('click', '.js-files-action', function (event) {
                event.preventDefault();
                __WEBPACK_IMPORTED_MODULE_6__App_Services_ActionsService__["a" /* ActionsService */].handleGlobalAction($(this).data('action'), function (res) {
                    __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].resetPagination();
                    _self.MediaService.getMedia(true);
                });
            });
        }
    }, {
        key: 'handleModals',
        value: function handleModals() {
            var _self = this;
            /*Rename files*/
            _self.$body.on('show.bs.modal', '#modal_rename_items', function (event) {
                __WEBPACK_IMPORTED_MODULE_6__App_Services_ActionsService__["a" /* ActionsService */].renderRenameItems();
            });
            _self.$body.on('submit', '#modal_rename_items .form-rename', function (event) {
                event.preventDefault();
                var items = [];
                var $form = $(this);

                $('#modal_rename_items .form-control').each(function () {
                    var $current = $(this);
                    var data = $current.closest('.form-group').data();
                    data.name = $current.val();
                    items.push(data);
                });

                __WEBPACK_IMPORTED_MODULE_6__App_Services_ActionsService__["a" /* ActionsService */].processAction({
                    action: $form.data('action'),
                    selected: items
                }, function (res) {
                    if (!res.error) {
                        $form.closest('.modal').modal('hide');
                        _self.MediaService.getMedia(true);
                    } else {
                        $('#modal_rename_items .form-group').each(function () {
                            var $current = $(this);
                            if (_.includes(res.data, $current.data('id'))) {
                                $current.addClass('has-error');
                            } else {
                                $current.removeClass('has-error');
                            }
                        });
                    }
                });
            });

            /*Delete files*/
            _self.$body.on('submit', '.form-delete-items', function (event) {
                event.preventDefault();
                var items = [];
                var $form = $(this);

                _.each(__WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].getSelectedItems(), function (value) {
                    items.push({
                        id: value.id,
                        is_folder: value.is_folder
                    });
                });

                __WEBPACK_IMPORTED_MODULE_6__App_Services_ActionsService__["a" /* ActionsService */].processAction({
                    action: $form.data('action'),
                    selected: items
                }, function (res) {
                    $form.closest('.modal').modal('hide');
                    if (!res.error) {
                        _self.MediaService.getMedia(true);
                    }
                });
            });

            /*Empty trash*/
            _self.$body.on('submit', '#modal_empty_trash .rv-form', function (event) {
                event.preventDefault();
                var $form = $(this);

                __WEBPACK_IMPORTED_MODULE_6__App_Services_ActionsService__["a" /* ActionsService */].processAction({
                    action: $form.data('action')
                }, function (res) {
                    $form.closest('.modal').modal('hide');
                    _self.MediaService.getMedia(true);
                });
            });

            if (__WEBPACK_IMPORTED_MODULE_0__App_Config_MediaConfig__["a" /* MediaConfig */].request_params.view_in === 'trash') {
                $(document).find('.js-insert-to-editor').prop('disabled', true);
            } else {
                $(document).find('.js-insert-to-editor').prop('disabled', false);
            }

            this.bindIntegrateModalEvents();
        }
    }, {
        key: 'checkFileTypeSelect',
        value: function checkFileTypeSelect(selectedFiles) {
            if (typeof window.rvMedia.$el !== 'undefined') {
                var firstItem = _.first(selectedFiles);
                var ele_options = window.rvMedia.$el.data('rv-media');
                if (typeof ele_options !== 'undefined' && typeof ele_options[0] !== 'undefined' && typeof ele_options[0].file_type !== 'undefined' && firstItem !== 'undefined' && firstItem.type !== 'undefined') {
                    if (!ele_options[0].file_type.match(firstItem.type)) {
                        return false;
                    } else {
                        if (typeof ele_options[0].ext_allowed !== 'undefined' && $.isArray(ele_options[0].ext_allowed)) {
                            if ($.inArray(firstItem.mime_type, ele_options[0].ext_allowed) == -1) {
                                return false;
                            }
                        }
                    }
                }
            }
            return true;
        }
    }, {
        key: 'bindIntegrateModalEvents',
        value: function bindIntegrateModalEvents() {
            var $main_modal = $('#rv_media_modal');
            var _self = this;
            $main_modal.off('click', '.js-insert-to-editor').on('click', '.js-insert-to-editor', function (event) {
                event.preventDefault();
                var selectedFiles = __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].getSelectedFiles();
                if (_.size(selectedFiles) > 0) {
                    window.rvMedia.options.onSelectFiles(selectedFiles, window.rvMedia.$el);
                    if (_self.checkFileTypeSelect(selectedFiles)) {
                        $main_modal.find('.close').trigger('click');
                    }
                }
            });

            $main_modal.off('dblclick', '.js-media-list-title').on('dblclick', '.js-media-list-title', function (event) {
                event.preventDefault();
                if (__WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].getConfigs().request_params.view_in !== 'trash') {
                    var selectedFiles = __WEBPACK_IMPORTED_MODULE_1__App_Helpers_Helpers__["a" /* Helpers */].getSelectedFiles();
                    if (_.size(selectedFiles) > 0) {
                        window.rvMedia.options.onSelectFiles(selectedFiles, window.rvMedia.$el);
                        if (_self.checkFileTypeSelect(selectedFiles)) {
                            $main_modal.find('.close').trigger('click');
                        }
                    }
                } else {
                    __WEBPACK_IMPORTED_MODULE_6__App_Services_ActionsService__["a" /* ActionsService */].handlePreview();
                }
            });
        }
    }, {
        key: 'scrollGetMore',


        //scroll get more media
        value: function scrollGetMore() {
            var _self = this;
            $('.rv-media-main .rv-media-items').bind('DOMMouseScroll mousewheel', function (e) {
                if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
                    var $load_more = false;
                    if ($(this).closest('.media-modal').length > 0) {
                        $load_more = $(this).scrollTop() + $(this).innerHeight() / 2 >= $(this)[0].scrollHeight - 450;
                    } else {
                        $load_more = $(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight - 150;
                    }

                    if ($load_more) {
                        if (typeof RV_MEDIA_CONFIG.pagination != 'undefined' && RV_MEDIA_CONFIG.pagination.has_more) {
                            _self.MediaService.getMedia(false, false, true);
                        } else {
                            return;
                        }
                    }
                }
            });
        }
    }], [{
        key: 'setupSecurity',
        value: function setupSecurity() {
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
        }
    }]);

    return MediaManagement;
}();

$(document).ready(function () {
    window.rvMedia = window.rvMedia || {};

    MediaManagement.setupSecurity();
    new MediaManagement().init();
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaDetails; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Helpers_Helpers__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var MediaDetails = function () {
    function MediaDetails() {
        _classCallCheck(this, MediaDetails);

        this.$detailsWrapper = $('.rv-media-main .rv-media-details');

        this.descriptionItemTemplate = '<div class="rv-media-name"><p>__title__</p>__url__</div>';

        this.onlyFields = ['name', 'full_url', 'size', 'mime_type', 'created_at', 'updated_at', 'nothing_selected'];

        this.externalTypes = ['youtube', 'vimeo', 'metacafe', 'dailymotion', 'vine', 'instagram'];
    }

    _createClass(MediaDetails, [{
        key: 'renderData',
        value: function renderData(data) {
            var _self = this;
            var thumb = data.type === 'image' ? '<img src="' + data.full_url + '" alt="' + data.name + '">' : data.mime_type === 'youtube' ? '<img src="' + data.options.thumb + '" alt="' + data.name + '">' : '<i class="' + data.icon + '"></i>';
            var description = '';
            var useClipboard = false;
            _.forEach(data, function (val, index) {
                if (_.includes(_self.onlyFields, index)) {
                    if (!_.includes(_self.externalTypes, data.type) || _.includes(_self.externalTypes, data.type) && !_.includes(['size', 'mime_type'], index)) {
                        description += _self.descriptionItemTemplate.replace(/__title__/gi, RV_MEDIA_CONFIG.translations[index]).replace(/__url__/gi, val ? index === 'full_url' ? '<div class="input-group"><input id="file_details_url" type="text" value="' + val + '" class="form-control"><span class="input-group-btn"><button class="btn btn-default js-btn-copy-to-clipboard" type="button" data-clipboard-target="#file_details_url" title="Copied"><img class="clippy" src="' + __WEBPACK_IMPORTED_MODULE_0__Helpers_Helpers__["a" /* Helpers */].asset('/vendor/media/images/clippy.svg') + '" width="13" alt="Copy to clipboard"></button></span></div>' : '<span title="' + val + '">' + val + '</span>' : '');
                        if (index === 'full_url') {
                            useClipboard = true;
                        }
                    }
                }
            });
            _self.$detailsWrapper.find('.rv-media-thumbnail').html(thumb);
            _self.$detailsWrapper.find('.rv-media-description').html(description);
            if (useClipboard) {
                var clipboard = new Clipboard('.js-btn-copy-to-clipboard');
                $('.js-btn-copy-to-clipboard').tooltip().on('mouseenter', function () {
                    $(this).tooltip('hide');
                }).on('mouseleave', function () {
                    $(this).tooltip('hide');
                });
            }
        }
    }]);

    return MediaDetails;
}();

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FolderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Views_MediaList__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Config_MediaConfig__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MediaService__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_MessageService__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Helpers_Helpers__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var FolderService = function () {
    function FolderService() {
        _classCallCheck(this, FolderService);

        this.MediaList = new __WEBPACK_IMPORTED_MODULE_0__Views_MediaList__["a" /* MediaList */]();
        this.MediaService = new __WEBPACK_IMPORTED_MODULE_2__MediaService__["a" /* MediaService */]();

        $('body').on('shown.bs.modal', '#modal_add_folder', function () {
            $(this).find('.form-add-folder input[type=text]').focus();
        });
    }

    _createClass(FolderService, [{
        key: 'create',
        value: function create(folderName) {
            var _self = this;
            $.ajax({
                url: RV_MEDIA_URL.create_folder,
                type: 'POST',
                data: {
                    parent_id: __WEBPACK_IMPORTED_MODULE_4__Helpers_Helpers__["a" /* Helpers */].getRequestParams().folder_id,
                    name: folderName
                },
                dataType: 'json',
                beforeSend: function beforeSend() {
                    __WEBPACK_IMPORTED_MODULE_4__Helpers_Helpers__["a" /* Helpers */].showAjaxLoading();
                },
                success: function success(res) {
                    if (res.error) {
                        __WEBPACK_IMPORTED_MODULE_3__Services_MessageService__["a" /* MessageService */].showMessage('error', res.message, RV_MEDIA_CONFIG.translations.message.error_header);
                    } else {
                        __WEBPACK_IMPORTED_MODULE_3__Services_MessageService__["a" /* MessageService */].showMessage('success', res.message, RV_MEDIA_CONFIG.translations.message.success_header);
                        __WEBPACK_IMPORTED_MODULE_4__Helpers_Helpers__["a" /* Helpers */].resetPagination();
                        _self.MediaService.getMedia(true);
                        FolderService.closeModal();
                    }
                },
                complete: function complete(data) {
                    __WEBPACK_IMPORTED_MODULE_4__Helpers_Helpers__["a" /* Helpers */].hideAjaxLoading();
                },
                error: function error(data) {
                    __WEBPACK_IMPORTED_MODULE_3__Services_MessageService__["a" /* MessageService */].handleError(data);
                }
            });
        }
    }, {
        key: 'changeFolder',
        value: function changeFolder(folderId) {
            __WEBPACK_IMPORTED_MODULE_1__Config_MediaConfig__["a" /* MediaConfig */].request_params.folder_id = folderId;
            __WEBPACK_IMPORTED_MODULE_4__Helpers_Helpers__["a" /* Helpers */].storeConfig();
            this.MediaService.getMedia(true);
        }
    }], [{
        key: 'closeModal',
        value: function closeModal() {
            $('#modal_add_folder').modal('hide');
        }
    }]);

    return FolderService;
}();

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Services_MediaService__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var UploadService = function () {
    function UploadService() {
        _classCallCheck(this, UploadService);

        this.$body = $('body');

        this.dropZone = null;

        this.uploadUrl = RV_MEDIA_URL.upload_file;

        this.uploadProgressBox = $('.rv-upload-progress');

        this.uploadProgressContainer = $('.rv-upload-progress .rv-upload-progress-table');

        this.uploadProgressTemplate = $('#rv_media_upload_progress_item').html();

        this.totalQueued = 1;

        this.MediaService = new __WEBPACK_IMPORTED_MODULE_0__Services_MediaService__["a" /* MediaService */]();

        this.totalError = 0;
    }

    _createClass(UploadService, [{
        key: 'init',
        value: function init() {
            if (_.includes(RV_MEDIA_CONFIG.permissions, 'files.create') && $('.rv-media-items').length > 0) {
                this.setupDropZone();
            }
            this.handleEvents();
        }
    }, {
        key: 'setupDropZone',
        value: function setupDropZone() {
            var _self = this;
            _self.dropZone = new Dropzone(document.querySelector('.rv-media-items'), {
                url: _self.uploadUrl,
                thumbnailWidth: false,
                thumbnailHeight: false,
                parallelUploads: 1,
                autoQueue: true,
                clickable: '.js-dropzone-upload',
                previewTemplate: false,
                previewsContainer: false,
                uploadMultiple: true,
                sending: function sending(file, xhr, formData) {
                    formData.append('_token', $('meta[name="csrf-token"]').attr('content'));
                    formData.append('folder_id', __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getRequestParams().folder_id);
                    formData.append('view_in', __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].getRequestParams().view_in);
                }
            });

            _self.dropZone.on('addedfile', function (file) {
                file.index = _self.totalQueued;
                _self.totalQueued++;
            });

            _self.dropZone.on('sending', function (file) {
                _self.initProgress(file.name, file.size);
            });

            _self.dropZone.on('success', function (file) {});

            _self.dropZone.on('complete', function (file) {
                _self.changeProgressStatus(file);
            });

            _self.dropZone.on('queuecomplete', function () {
                __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].resetPagination();
                _self.MediaService.getMedia(true);
                if (_self.totalError === 0) {
                    setTimeout(function () {
                        $('.rv-upload-progress .close-pane').trigger('click');
                    }, 5000);
                }
            });
        }
    }, {
        key: 'handleEvents',
        value: function handleEvents() {
            var _self = this;
            /**
             * Close upload progress pane
             */
            _self.$body.on('click', '.rv-upload-progress .close-pane', function (event) {
                event.preventDefault();
                $('.rv-upload-progress').addClass('hide-the-pane');
                _self.totalError = 0;
                setTimeout(function () {
                    $('.rv-upload-progress li').remove();
                    _self.totalQueued = 1;
                }, 300);
            });
        }
    }, {
        key: 'initProgress',
        value: function initProgress($fileName, $fileSize) {
            var template = this.uploadProgressTemplate.replace(/__fileName__/gi, $fileName).replace(/__fileSize__/gi, UploadService.formatFileSize($fileSize)).replace(/__status__/gi, 'warning').replace(/__message__/gi, 'Uploading');
            this.uploadProgressContainer.append(template);
            this.uploadProgressBox.removeClass('hide-the-pane');
            this.uploadProgressBox.find('.panel-body').animate({ scrollTop: this.uploadProgressContainer.height() }, 150);
        }
    }, {
        key: 'changeProgressStatus',
        value: function changeProgressStatus(file) {
            var _self = this;
            var $progressLine = _self.uploadProgressContainer.find('li:nth-child(' + file.index + ')');
            var $label = $progressLine.find('.label');
            $label.removeClass('label-success label-danger label-warning');

            var response = __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].jsonDecode(file.xhr.responseText || '', {});

            _self.totalError = _self.totalError + (response.error === true || file.status === 'error' ? 1 : 0);

            $label.addClass(response.error === true || file.status === 'error' ? 'label-danger' : 'label-success');
            $label.html(response.error === true || file.status === 'error' ? 'Error' : 'Uploaded');
            if (file.status === 'error') {
                if (file.xhr.status === 422) {
                    var error_html = '';
                    $.each(response, function (key, item) {
                        error_html += '<span class="text-danger">' + item + '</span><br>';
                    });
                    $progressLine.find('.file-error').html(error_html);
                } else if (file.xhr.status === 500) {
                    $progressLine.find('.file-error').html('<span class="text-danger">' + file.xhr.statusText + '</span>');
                }
            } else if (response.error) {
                $progressLine.find('.file-error').html('<span class="text-danger">' + response.message + '</span>');
            } else {
                __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].addToRecent(response.data.id);
                __WEBPACK_IMPORTED_MODULE_1__Helpers_Helpers__["a" /* Helpers */].setSelectedFile(response.data.id);
            }
        }
    }], [{
        key: 'formatFileSize',
        value: function formatFileSize(bytes) {
            var si = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var thresh = si ? 1000 : 1024;
            if (Math.abs(bytes) < thresh) {
                return bytes + ' B';
            }
            var units = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
            var u = -1;
            do {
                bytes /= thresh;
                ++u;
            } while (Math.abs(bytes) >= thresh && u < units.length - 1);
            return bytes.toFixed(1) + ' ' + units[u];
        }
    }]);

    return UploadService;
}();

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExternalServices; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Youtube__ = __webpack_require__(14);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var ExternalServices = function ExternalServices() {
    _classCallCheck(this, ExternalServices);

    new __WEBPACK_IMPORTED_MODULE_0__Youtube__["a" /* Youtube */]();
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Youtube; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Helpers_Helpers__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Config_ExternalServiceConfig__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_MediaService__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Services_MessageService__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var Youtube = function () {
    function Youtube() {
        _classCallCheck(this, Youtube);

        this.MediaService = new __WEBPACK_IMPORTED_MODULE_2__Services_MediaService__["a" /* MediaService */]();

        this.$body = $('body');

        this.$modal = $('#modal_add_from_youtube');

        var _self = this;

        this.setMessage(RV_MEDIA_CONFIG.translations.add_from.youtube.original_msg);

        this.$modal.on('hidden.bs.modal', function () {
            _self.setMessage(RV_MEDIA_CONFIG.translations.add_from.youtube.original_msg);
        });

        this.$body.on('click', '#modal_add_from_youtube .rv-btn-add-youtube-url', function (event) {
            event.preventDefault();

            _self.checkYouTubeVideo($(this).closest('#modal_add_from_youtube').find('.rv-youtube-url'));
        });
    }

    _createClass(Youtube, [{
        key: 'setMessage',
        value: function setMessage(msg) {
            this.$modal.find('.modal-notice').html(msg);
        }
    }, {
        key: 'checkYouTubeVideo',
        value: function checkYouTubeVideo($input) {
            var _self = this;
            if (!Youtube.validateYouTubeLink($input.val()) || !__WEBPACK_IMPORTED_MODULE_1__Config_ExternalServiceConfig__["a" /* ExternalServiceConfig */].youtube.api_key) {
                if (__WEBPACK_IMPORTED_MODULE_1__Config_ExternalServiceConfig__["a" /* ExternalServiceConfig */].youtube.api_key) {
                    _self.setMessage(RV_MEDIA_CONFIG.translations.add_from.youtube.invalid_url_msg);
                } else {
                    _self.setMessage(RV_MEDIA_CONFIG.translations.add_from.youtube.no_api_key_msg);
                }
            } else {
                var youtubeId = Youtube.getYouTubeId($input.val());
                var requestUrl = 'https://www.googleapis.com/youtube/v3/videos?id=' + youtubeId;
                var isPlaylist = _self.$modal.find('.custom-checkbox input[type="checkbox"]').is(':checked');

                if (isPlaylist) {
                    youtubeId = Youtube.getYoutubePlaylistId($input.val());
                    requestUrl = 'https://www.googleapis.com/youtube/v3/playlistItems?playlistId=' + youtubeId;
                }

                $.ajax({
                    url: requestUrl + '&key=' + __WEBPACK_IMPORTED_MODULE_1__Config_ExternalServiceConfig__["a" /* ExternalServiceConfig */].youtube.api_key + '&part=snippet',
                    type: "GET",
                    success: function success(data) {
                        if (isPlaylist) {
                            playlistVideoCallback(data, $input.val());
                        } else {
                            singleVideoCallback(data, $input.val());
                        }
                    },
                    error: function error(data) {
                        _self.setMessage(RV_MEDIA_CONFIG.translations.add_from.youtube.error_msg);
                    }
                });
            }

            function singleVideoCallback(data, url) {
                $.ajax({
                    url: RV_MEDIA_URL.add_external_service,
                    type: "POST",
                    dataType: 'json',
                    data: {
                        type: 'youtube',
                        name: data.items[0].snippet.title,
                        folder_id: __WEBPACK_IMPORTED_MODULE_0__Helpers_Helpers__["a" /* Helpers */].getRequestParams().folder_id,
                        url: url,
                        options: {
                            thumb: 'https://img.youtube.com/vi/' + data.items[0].id + '/maxresdefault.jpg'
                        }
                    },
                    success: function success(res) {
                        if (res.error) {
                            __WEBPACK_IMPORTED_MODULE_3__Services_MessageService__["a" /* MessageService */].showMessage('error', res.message, RV_MEDIA_CONFIG.translations.message.error_header);
                        } else {
                            __WEBPACK_IMPORTED_MODULE_3__Services_MessageService__["a" /* MessageService */].showMessage('success', res.message, RV_MEDIA_CONFIG.translations.message.success_header);
                            _self.MediaService.getMedia(true);
                        }
                    },
                    error: function error(data) {
                        __WEBPACK_IMPORTED_MODULE_3__Services_MessageService__["a" /* MessageService */].handleError(data);
                    }
                });
                _self.$modal.modal('hide');
            }

            function playlistVideoCallback(data, url) {
                _self.$modal.modal('hide');
            }
        }
    }], [{
        key: 'validateYouTubeLink',
        value: function validateYouTubeLink(url) {
            var p = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?(?=.*v=((\w|-){11}))(?:\S+)?$/;
            return url.match(p) ? RegExp.$1 : false;
        }
    }, {
        key: 'getYouTubeId',
        value: function getYouTubeId(url) {
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            var match = url.match(regExp);
            if (match && match[2].length === 11) {
                return match[2];
            }
            return null;
        }
    }, {
        key: 'getYoutubePlaylistId',
        value: function getYoutubePlaylistId(url) {
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?list=|\&list=)([^#\&\?]*).*/;
            var match = url.match(regExp);
            if (match) {
                return match[2];
            }
            return null;
        }
    }]);

    return Youtube;
}();

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExternalServiceConfig; });
var ExternalServiceConfig = {
    youtube: {
        api_key: "AIzaSyCV4fmfdgsValGNR3sc-0W3cbpEZ8uOd60"
    }
};



/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjg0MjJjYzZmYTJhN2MwODUzZDUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9BcHAvSGVscGVycy9IZWxwZXJzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvQXBwL0NvbmZpZy9NZWRpYUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0FwcC9TZXJ2aWNlcy9NZXNzYWdlU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0FwcC9TZXJ2aWNlcy9BY3Rpb25zU2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0FwcC9TZXJ2aWNlcy9NZWRpYVNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9BcHAvU2VydmljZXMvQ29udGV4dE1lbnVTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvaW50ZWdyYXRlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvQXBwL1ZpZXdzL01lZGlhTGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21lZGlhLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvQXBwL1ZpZXdzL01lZGlhRGV0YWlscy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0FwcC9TZXJ2aWNlcy9Gb2xkZXJTZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvQXBwL1NlcnZpY2VzL1VwbG9hZFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9BcHAvRXh0ZXJuYWxzL0V4dGVybmFsU2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9BcHAvRXh0ZXJuYWxzL1lvdXR1YmUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9BcHAvQ29uZmlnL0V4dGVybmFsU2VydmljZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL3Nhc3MvbWVkaWEuc2Nzcz8wODljIl0sIm5hbWVzIjpbIkhlbHBlcnMiLCJwYXJhbU5hbWUiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInJlUGFyYW0iLCJSZWdFeHAiLCJtYXRjaCIsImxlbmd0aCIsInN1YnN0cmluZyIsImJhc2VVcmwiLCJSVl9NRURJQV9VUkwiLCJiYXNlX3VybCIsInN1YnN0ciIsIiRlbGVtZW50IiwiJCIsImFkZENsYXNzIiwiYXBwZW5kIiwiaHRtbCIsInJlbW92ZUNsYXNzIiwiZmluZCIsInJlbW92ZSIsImhhc0NsYXNzIiwib2JqZWN0IiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb25TdHJpbmciLCJkZWZhdWx0VmFsdWUiLCJyZXN1bHQiLCJwYXJzZUpTT04iLCJlcnIiLCJydk1lZGlhIiwib3B0aW9ucyIsIm9wZW5faW4iLCJleHRlbmQiLCJNZWRpYUNvbmZpZyIsInJlcXVlc3RfcGFyYW1zIiwiJGZpbGVfaWQiLCJzZWxlY3RlZF9maWxlX2lkIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImpzb25FbmNvZGUiLCJpZCIsIkFycmF5IiwiXyIsImVhY2giLCJ2YWx1ZSIsIlJlY2VudEl0ZW1zIiwicHVzaCIsIml0ZW1zIiwiJGJveCIsImRhdGEiLCJpbmRleF9rZXkiLCJpbmRleCIsInNlbGVjdGVkIiwiY2xvc2VzdCIsImdldFVybFBhcmFtIiwiUlZfTUVESUFfQ09ORklHIiwicGFnaW5hdGlvbiIsInBhZ2VkIiwicG9zdHNfcGVyX3BhZ2UiLCJpbl9wcm9jZXNzX2dldF9tZWRpYSIsImhhc19tb3JlIiwiZ2V0SXRlbSIsImRlZmF1bHRDb25maWciLCJhcHBfa2V5Iiwidmlld190eXBlIiwiZmlsdGVyIiwidmlld19pbiIsInNvcnRfYnkiLCJmb2xkZXJfaWQiLCJoaWRlX2RldGFpbHNfcGFuZSIsImljb25zIiwiZm9sZGVyIiwiYWN0aW9uc19saXN0IiwiYmFzaWMiLCJpY29uIiwibmFtZSIsImFjdGlvbiIsIm9yZGVyIiwiY2xhc3MiLCJmaWxlIiwidXNlciIsIm90aGVyIiwiZGVuaWVkX2Rvd25sb2FkIiwiTWVzc2FnZVNlcnZpY2UiLCJ0eXBlIiwibWVzc2FnZSIsIm1lc3NhZ2VIZWFkZXIiLCJ0b2FzdHIiLCJjbG9zZUJ1dHRvbiIsInByb2dyZXNzQmFyIiwicG9zaXRpb25DbGFzcyIsIm9uY2xpY2siLCJzaG93RHVyYXRpb24iLCJoaWRlRHVyYXRpb24iLCJ0aW1lT3V0IiwiZXh0ZW5kZWRUaW1lT3V0Iiwic2hvd0Vhc2luZyIsImhpZGVFYXNpbmciLCJzaG93TWV0aG9kIiwiaGlkZU1ldGhvZCIsInJlc3BvbnNlSlNPTiIsInNob3dNZXNzYWdlIiwidHJhbnNsYXRpb25zIiwiZXJyb3JfaGVhZGVyIiwiZWwiLCJrZXkiLCJpdGVtIiwic3RhdHVzVGV4dCIsIkFjdGlvbnNTZXJ2aWNlIiwic2l6ZSIsImdldFNlbGVjdGVkSXRlbXMiLCJyZW5kZXJBY3Rpb25zIiwiZ2V0U2VsZWN0ZWRGaWxlcyIsImluY2x1ZGVzIiwic3JjIiwiZmFuY3lib3giLCJvcGVuIiwic3RvcmVSZWNlbnRJdGVtcyIsImhhbmRsZUdsb2JhbEFjdGlvbiIsImxpbmtzIiwiaXNFbXB0eSIsImZ1bGxfdXJsIiwiJGNsaXBib2FyZFRlbXAiLCJDbGlwYm9hcmQiLCJ0ZXh0IiwidHJpZ2dlciIsImNsaXBib2FyZCIsInN1Y2Nlc3MiLCJzdWNjZXNzX2hlYWRlciIsImNhbGxiYWNrIiwiaXNfZm9sZGVyIiwibW9kYWwiLCJoYW5kbGVDb3B5TGluayIsImhhbmRsZVByZXZpZXciLCJkb3dubG9hZExpbmsiLCJkb3dubG9hZCIsImNvdW50IiwiZ2V0Q29uZmlncyIsIm1pbWVfdHlwZSIsImVycm9yIiwicHJvY2Vzc0FjdGlvbiIsImFqYXgiLCJnbG9iYWxfYWN0aW9ucyIsImRhdGFUeXBlIiwiYmVmb3JlU2VuZCIsInNob3dBamF4TG9hZGluZyIsInJlcyIsInJlc2V0UGFnaW5hdGlvbiIsImNvbXBsZXRlIiwiaGlkZUFqYXhMb2FkaW5nIiwiaGFuZGxlRXJyb3IiLCJWSUVXIiwiJGl0ZW1zV3JhcHBlciIsImVtcHR5IiwicmVwbGFjZSIsIiRpdGVtIiwiaGFzRm9sZGVyU2VsZWN0ZWQiLCJnZXRTZWxlY3RlZEZvbGRlciIsIkFDVElPTl9URU1QTEFURSIsImluaXRpYWxpemVkX2l0ZW0iLCIkZHJvcGRvd25BY3Rpb25zIiwiYWN0aW9uc0xpc3QiLCJyZWplY3QiLCJwZXJtaXNzaW9ucyIsInNlbGVjdGVkRmlsZXMiLCJjYW5fcHJldmlldyIsImlzX2JyZWFrIiwiZ2V0UmVxdWVzdFBhcmFtcyIsInRlbXBsYXRlIiwiTWVkaWFTZXJ2aWNlIiwiTWVkaWFMaXN0IiwiTWVkaWFEZXRhaWxzIiwiYnJlYWRjcnVtYlRlbXBsYXRlIiwicmVsb2FkIiwiaXNfcG9wdXAiLCJsb2FkX21vcmVfZmlsZSIsIl9zZWxmIiwiZ2V0RmlsZURldGFpbHMiLCJub3RoaW5nX3NlbGVjdGVkIiwicGFyYW1zIiwicmVjZW50X2l0ZW1zIiwidW5kZWZpbmVkIiwib25TZWxlY3RGaWxlcyIsImdldF9tZWRpYSIsInJlbmRlckRhdGEiLCJmZXRjaFF1b3RhIiwicmVuZGVyQnJlYWRjcnVtYnMiLCJicmVhZGNydW1icyIsInJlZnJlc2hGaWx0ZXIiLCJmaWxlcyIsImdldF9xdW90YSIsInVzZWQiLCJxdW90YSIsImNzcyIsIndpZHRoIiwicGVyY2VudCIsImJyZWFkY3J1bWJJdGVtcyIsIiRicmVhZGNydW1iQ29udGFpbmVyIiwiYXR0ciIsIiRydk1lZGlhQ29udGFpbmVyIiwiJGVtcHR5X3RyYXNoX2J0biIsImdldEl0ZW1zIiwiQ29udGV4dE1lbnVTZXJ2aWNlIiwiZGVzdHJveUNvbnRleHQiLCJpbml0Q29udGV4dCIsImpRdWVyeSIsImNvbnRleHRNZW51Iiwic2VsZWN0b3IiLCJidWlsZCIsImV2ZW50IiwiX2ZpbGVDb250ZXh0TWVudSIsIl9mb2xkZXJDb250ZXh0TWVudSIsInByZXZpZXciLCJvcHQiLCIkaXRlbUVsZW1lbnQiLCJpdGVtS2V5IiwiYWN0aW9uR3JvdXAiLCJleGNlcHQiLCJyZW5hbWUiLCJkZWxldGUiLCJyZXN0b3JlIiwiY29weV9saW5rIiwibWFrZV9jb3B5IiwidHJhc2giLCJmYXZvcml0ZSIsInJlbW92ZV9mYXZvcml0ZSIsIkVkaXRvclNlcnZpY2UiLCJpc19ja2VkaXRvciIsIm9wZW5lciIsImZpcnN0SXRlbSIsImZpcnN0IiwiQ0tFRElUT1IiLCJ0b29scyIsImNhbGxGdW5jdGlvbiIsImNsb3NlIiwiJGJvZHkiLCJkZWZhdWx0T3B0aW9ucyIsIm11bHRpcGxlIiwiJGVsIiwiY2xpY2tDYWxsYmFjayIsInByZXZlbnREZWZhdWx0IiwiJGN1cnJlbnQiLCJzdG9yZUNvbmZpZyIsImVsZV9vcHRpb25zIiwibG9hZCIsInBvcHVwIiwiYWxlcnQiLCJkb2N1bWVudCIsIm9uIiwiUnZNZWRpYVN0YW5kQWxvbmUiLCJvZmYiLCJlZGl0b3JTZWxlY3RGaWxlIiwiZm4iLCIkc2VsZWN0b3IiLCJwcm9wIiwiZ3JvdXAiLCJsaXN0IiwidGlsZXMiLCIkZ3JvdXBDb250YWluZXIiLCJub19pdGVtIiwidGl0bGUiLCIkcmVzdWx0IiwiZm9sZGVycyIsImZvckVhY2giLCJjcmVhdGVkX2F0IiwidmFsIiwidGh1bWIiLCJoYW5kbGVEcm9wZG93biIsIk1lZGlhTWFuYWdlbWVudCIsIlVwbG9hZFNlcnZpY2UiLCJGb2xkZXJTZXJ2aWNlIiwic2V0dXBMYXlvdXQiLCJoYW5kbGVNZWRpYUxpc3QiLCJjaGFuZ2VWaWV3VHlwZSIsImNoYW5nZUZpbHRlciIsImhhbmRsZUFjdGlvbnMiLCJpbml0IiwiaGFuZGxlTW9kYWxzIiwic2Nyb2xsR2V0TW9yZSIsIiRjdXJyZW50X2ZpbHRlciIsIiRjdXJyZW50X3ZpZXdfaW4iLCJpc1VzZUluTW9kYWwiLCIkbWVkaWFEZXRhaWxzQ2hlY2tib3giLCJzZXRUaW1lb3V0IiwiaXMiLCJjdHJsX2tleSIsIm1ldGFfa2V5Iiwic2hpZnRfa2V5IiwiZSIsImN0cmxLZXkiLCJtZXRhS2V5Iiwic2hpZnRLZXkiLCJmaXJzdEluZGV4IiwiY3VycmVudEluZGV4IiwiJGxpbmVDaGVja0JveCIsImNoYW5nZUZvbGRlciIsInRhcmdldCIsImdldE1lZGlhIiwiYmluZEludGVncmF0ZU1vZGFsRXZlbnRzIiwiaXNPbkFqYXhMb2FkaW5nIiwiJHBhcmVudCIsIiRpbnB1dCIsImZvbGRlck5hbWUiLCJjcmVhdGUiLCJmb2xkZXJJZCIsInJlbmRlclJlbmFtZUl0ZW1zIiwiJGZvcm0iLCJmaWxlX3R5cGUiLCJleHRfYWxsb3dlZCIsImlzQXJyYXkiLCJpbkFycmF5IiwiJG1haW5fbW9kYWwiLCJjaGVja0ZpbGVUeXBlU2VsZWN0IiwiYmluZCIsIm9yaWdpbmFsRXZlbnQiLCJkZXRhaWwiLCJ3aGVlbERlbHRhIiwiJGxvYWRfbW9yZSIsInNjcm9sbFRvcCIsImlubmVySGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0IiwiYWpheFNldHVwIiwiaGVhZGVycyIsInJlYWR5Iiwic2V0dXBTZWN1cml0eSIsIiRkZXRhaWxzV3JhcHBlciIsImRlc2NyaXB0aW9uSXRlbVRlbXBsYXRlIiwib25seUZpZWxkcyIsImV4dGVybmFsVHlwZXMiLCJkZXNjcmlwdGlvbiIsInVzZUNsaXBib2FyZCIsImFzc2V0IiwidG9vbHRpcCIsImZvY3VzIiwiY3JlYXRlX2ZvbGRlciIsInBhcmVudF9pZCIsImNsb3NlTW9kYWwiLCJkcm9wWm9uZSIsInVwbG9hZFVybCIsInVwbG9hZF9maWxlIiwidXBsb2FkUHJvZ3Jlc3NCb3giLCJ1cGxvYWRQcm9ncmVzc0NvbnRhaW5lciIsInVwbG9hZFByb2dyZXNzVGVtcGxhdGUiLCJ0b3RhbFF1ZXVlZCIsInRvdGFsRXJyb3IiLCJzZXR1cERyb3Bab25lIiwiaGFuZGxlRXZlbnRzIiwiRHJvcHpvbmUiLCJxdWVyeVNlbGVjdG9yIiwidGh1bWJuYWlsV2lkdGgiLCJ0aHVtYm5haWxIZWlnaHQiLCJwYXJhbGxlbFVwbG9hZHMiLCJhdXRvUXVldWUiLCJjbGlja2FibGUiLCJwcmV2aWV3VGVtcGxhdGUiLCJwcmV2aWV3c0NvbnRhaW5lciIsInVwbG9hZE11bHRpcGxlIiwic2VuZGluZyIsInhociIsImZvcm1EYXRhIiwiaW5pdFByb2dyZXNzIiwiY2hhbmdlUHJvZ3Jlc3NTdGF0dXMiLCIkZmlsZU5hbWUiLCIkZmlsZVNpemUiLCJmb3JtYXRGaWxlU2l6ZSIsImFuaW1hdGUiLCJoZWlnaHQiLCIkcHJvZ3Jlc3NMaW5lIiwiJGxhYmVsIiwicmVzcG9uc2UiLCJqc29uRGVjb2RlIiwicmVzcG9uc2VUZXh0Iiwic3RhdHVzIiwiZXJyb3JfaHRtbCIsImFkZFRvUmVjZW50Iiwic2V0U2VsZWN0ZWRGaWxlIiwiYnl0ZXMiLCJzaSIsInRocmVzaCIsIk1hdGgiLCJhYnMiLCJ1bml0cyIsInUiLCJ0b0ZpeGVkIiwiRXh0ZXJuYWxTZXJ2aWNlcyIsIllvdXR1YmUiLCIkbW9kYWwiLCJzZXRNZXNzYWdlIiwiYWRkX2Zyb20iLCJ5b3V0dWJlIiwib3JpZ2luYWxfbXNnIiwiY2hlY2tZb3VUdWJlVmlkZW8iLCJtc2ciLCJ2YWxpZGF0ZVlvdVR1YmVMaW5rIiwiRXh0ZXJuYWxTZXJ2aWNlQ29uZmlnIiwiYXBpX2tleSIsImludmFsaWRfdXJsX21zZyIsIm5vX2FwaV9rZXlfbXNnIiwieW91dHViZUlkIiwiZ2V0WW91VHViZUlkIiwicmVxdWVzdFVybCIsImlzUGxheWxpc3QiLCJnZXRZb3V0dWJlUGxheWxpc3RJZCIsInBsYXlsaXN0VmlkZW9DYWxsYmFjayIsInNpbmdsZVZpZGVvQ2FsbGJhY2siLCJlcnJvcl9tc2ciLCJhZGRfZXh0ZXJuYWxfc2VydmljZSIsInNuaXBwZXQiLCJwIiwiJDEiLCJyZWdFeHAiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNIO0FBQ0o7QUFwSEw7QUFBQTtBQUFBLDRDQXVCK0JwSSxHQXZCL0IsRUF1Qm9DO0FBQzVCLGdCQUFJeVosSUFBSSwrRUFBUjtBQUNBLG1CQUFRelosSUFBSU0sS0FBSixDQUFVbVosQ0FBVixDQUFELEdBQWlCcFosT0FBT3FaLEVBQXhCLEdBQTZCLEtBQXBDO0FBQ0g7QUExQkw7QUFBQTtBQUFBLHFDQTRCd0IxWixHQTVCeEIsRUE0QjZCO0FBQ3JCLGdCQUFJMlosU0FBUyxpRUFBYjtBQUNBLGdCQUFJclosUUFBUU4sSUFBSU0sS0FBSixDQUFVcVosTUFBVixDQUFaO0FBQ0EsZ0JBQUlyWixTQUFTQSxNQUFNLENBQU4sRUFBU0MsTUFBVCxLQUFvQixFQUFqQyxFQUFxQztBQUNqQyx1QkFBT0QsTUFBTSxDQUFOLENBQVA7QUFDSDtBQUNELG1CQUFPLElBQVA7QUFDSDtBQW5DTDtBQUFBO0FBQUEsNkNBcUNnQ04sR0FyQ2hDLEVBcUNxQztBQUM3QixnQkFBSTJaLFNBQVMsdUVBQWI7QUFDQSxnQkFBSXJaLFFBQVFOLElBQUlNLEtBQUosQ0FBVXFaLE1BQVYsQ0FBWjtBQUNBLGdCQUFJclosS0FBSixFQUFXO0FBQ1AsdUJBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQ0g7QUFDRCxtQkFBTyxJQUFQO0FBQ0g7QUE1Q0w7O0FBQUE7QUFBQSxJOzs7Ozs7O0FDTEE7QUFBQSxJQUFJcVksd0JBQXdCO0FBQ3hCTCxhQUFTO0FBQ0xNLGlCQUFTO0FBREo7QUFEZSxDQUE1Qjs7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiIvanMvbWVkaWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA4KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyODQyMmNjNmZhMmE3YzA4NTNkNSIsImltcG9ydCB7TWVkaWFDb25maWcsIFJlY2VudEl0ZW1zfSBmcm9tICcuLi9Db25maWcvTWVkaWFDb25maWcnO1xuXG5leHBvcnQgY2xhc3MgSGVscGVycyB7XG4gICAgc3RhdGljIGdldFVybFBhcmFtKHBhcmFtTmFtZSwgdXJsID0gbnVsbCkge1xuICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgdXJsID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVQYXJhbSA9IG5ldyBSZWdFeHAoJyg/OltcXD8mXXwmKScgKyBwYXJhbU5hbWUgKyAnPShbXiZdKyknLCAnaScpO1xuICAgICAgICBsZXQgbWF0Y2ggPSB1cmwubWF0Y2gocmVQYXJhbSk7XG4gICAgICAgIHJldHVybiAobWF0Y2ggJiYgbWF0Y2gubGVuZ3RoID4gMSkgPyBtYXRjaFsxXSA6IG51bGw7XG4gICAgfVxuXG4gICAgc3RhdGljIGFzc2V0KHVybCkge1xuICAgICAgICBpZiAodXJsLnN1YnN0cmluZygwLCAyKSA9PT0gJy8vJyB8fCB1cmwuc3Vic3RyaW5nKDAsIDcpID09PSAnaHR0cDovLycgfHwgdXJsLnN1YnN0cmluZygwLCA4KSA9PT0gJ2h0dHBzOi8vJykge1xuICAgICAgICAgICAgcmV0dXJuIHVybDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBiYXNlVXJsID0gUlZfTUVESUFfVVJMLmJhc2VfdXJsLnN1YnN0cigtMSwgMSkgIT09ICcvJyA/IFJWX01FRElBX1VSTC5iYXNlX3VybCArICcvJyA6IFJWX01FRElBX1VSTC5iYXNlX3VybDtcblxuICAgICAgICBpZiAodXJsLnN1YnN0cmluZygwLCAxKSA9PT0gJy8nKSB7XG4gICAgICAgICAgICByZXR1cm4gYmFzZVVybCArIHVybC5zdWJzdHJpbmcoMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhc2VVcmwgKyB1cmw7XG4gICAgfVxuXG4gICAgc3RhdGljIHNob3dBamF4TG9hZGluZygkZWxlbWVudCA9ICQoJy5ydi1tZWRpYS1tYWluJykpIHtcbiAgICAgICAgJGVsZW1lbnRcbiAgICAgICAgICAgIC5hZGRDbGFzcygnb24tbG9hZGluZycpXG4gICAgICAgICAgICAuYXBwZW5kKCQoJyNydl9tZWRpYV9sb2FkaW5nJykuaHRtbCgpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaGlkZUFqYXhMb2FkaW5nKCRlbGVtZW50ID0gJCgnLnJ2LW1lZGlhLW1haW4nKSkge1xuICAgICAgICAkZWxlbWVudFxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdvbi1sb2FkaW5nJylcbiAgICAgICAgICAgIC5maW5kKCcubG9hZGluZy13cmFwcGVyJykucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGlzT25BamF4TG9hZGluZygkZWxlbWVudCA9ICQoJy5ydi1tZWRpYS1pdGVtcycpKSB7XG4gICAgICAgIHJldHVybiAkZWxlbWVudC5oYXNDbGFzcygnb24tbG9hZGluZycpO1xuICAgIH1cblxuICAgIHN0YXRpYyBqc29uRW5jb2RlKG9iamVjdCkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcbiAgICAgICAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBvYmplY3QgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmplY3QpO1xuICAgIH07XG5cbiAgICBzdGF0aWMganNvbkRlY29kZShqc29uU3RyaW5nLCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgIGlmICghanNvblN0cmluZykge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIGpzb25TdHJpbmcgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAkLnBhcnNlSlNPTihqc29uU3RyaW5nKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGpzb25TdHJpbmc7XG4gICAgfTtcblxuICAgIHN0YXRpYyBnZXRSZXF1ZXN0UGFyYW1zKCkge1xuICAgICAgICBpZiAod2luZG93LnJ2TWVkaWEub3B0aW9ucyAmJiB3aW5kb3cucnZNZWRpYS5vcHRpb25zLm9wZW5faW4gPT09ICdtb2RhbCcpIHtcbiAgICAgICAgICAgIHJldHVybiAkLmV4dGVuZCh0cnVlLCBNZWRpYUNvbmZpZy5yZXF1ZXN0X3BhcmFtcywgd2luZG93LnJ2TWVkaWEub3B0aW9ucyB8fCB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1lZGlhQ29uZmlnLnJlcXVlc3RfcGFyYW1zO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXRTZWxlY3RlZEZpbGUoJGZpbGVfaWQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cucnZNZWRpYS5vcHRpb25zICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgd2luZG93LnJ2TWVkaWEub3B0aW9ucy5zZWxlY3RlZF9maWxlX2lkID0gJGZpbGVfaWQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBNZWRpYUNvbmZpZy5yZXF1ZXN0X3BhcmFtcy5zZWxlY3RlZF9maWxlX2lkID0gJGZpbGVfaWQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0Q29uZmlncygpIHtcbiAgICAgICAgcmV0dXJuIE1lZGlhQ29uZmlnO1xuICAgIH1cblxuICAgIHN0YXRpYyBzdG9yZUNvbmZpZygpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ01lZGlhQ29uZmlnJywgSGVscGVycy5qc29uRW5jb2RlKE1lZGlhQ29uZmlnKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHN0b3JlUmVjZW50SXRlbXMoKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdSZWNlbnRJdGVtcycsIEhlbHBlcnMuanNvbkVuY29kZShSZWNlbnRJdGVtcykpO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRUb1JlY2VudChpZCkge1xuICAgICAgICBpZiAoaWQgaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgICAgICAgXy5lYWNoKGlkLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBSZWNlbnRJdGVtcy5wdXNoKHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgUmVjZW50SXRlbXMucHVzaChpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0SXRlbXMoKSB7XG4gICAgICAgIGxldCBpdGVtcyA9IFtdO1xuICAgICAgICAkKCcuanMtbWVkaWEtbGlzdC10aXRsZScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0ICRib3ggPSAkKHRoaXMpO1xuICAgICAgICAgICAgbGV0IGRhdGEgPSAkYm94LmRhdGEoKSB8fCB7fTtcbiAgICAgICAgICAgIGRhdGEuaW5kZXhfa2V5ID0gJGJveC5pbmRleCgpO1xuICAgICAgICAgICAgaXRlbXMucHVzaChkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBpdGVtcztcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0U2VsZWN0ZWRJdGVtcygpIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkID0gW107XG4gICAgICAgICQoJy5qcy1tZWRpYS1saXN0LXRpdGxlIGlucHV0W3R5cGU9Y2hlY2tib3hdOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxldCAkYm94ID0gJCh0aGlzKS5jbG9zZXN0KCcuanMtbWVkaWEtbGlzdC10aXRsZScpO1xuICAgICAgICAgICAgbGV0IGRhdGEgPSAkYm94LmRhdGEoKSB8fCB7fTtcbiAgICAgICAgICAgIGRhdGEuaW5kZXhfa2V5ID0gJGJveC5pbmRleCgpO1xuICAgICAgICAgICAgc2VsZWN0ZWQucHVzaChkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzZWxlY3RlZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0U2VsZWN0ZWRGaWxlcygpIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkID0gW107XG4gICAgICAgICQoJy5qcy1tZWRpYS1saXN0LXRpdGxlW2RhdGEtY29udGV4dD1maWxlXSBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgJGJveCA9ICQodGhpcykuY2xvc2VzdCgnLmpzLW1lZGlhLWxpc3QtdGl0bGUnKTtcbiAgICAgICAgICAgIGxldCBkYXRhID0gJGJveC5kYXRhKCkgfHwge307XG4gICAgICAgICAgICBkYXRhLmluZGV4X2tleSA9ICRib3guaW5kZXgoKTtcbiAgICAgICAgICAgIHNlbGVjdGVkLnB1c2goZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc2VsZWN0ZWQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldFNlbGVjdGVkRm9sZGVyKCkge1xuICAgICAgICBsZXQgc2VsZWN0ZWQgPSBbXTtcbiAgICAgICAgJCgnLmpzLW1lZGlhLWxpc3QtdGl0bGVbZGF0YS1jb250ZXh0PWZvbGRlcl0gaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0ICRib3ggPSAkKHRoaXMpLmNsb3Nlc3QoJy5qcy1tZWRpYS1saXN0LXRpdGxlJyk7XG4gICAgICAgICAgICBsZXQgZGF0YSA9ICRib3guZGF0YSgpIHx8IHt9O1xuICAgICAgICAgICAgZGF0YS5pbmRleF9rZXkgPSAkYm94LmluZGV4KCk7XG4gICAgICAgICAgICBzZWxlY3RlZC5wdXNoKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHNlbGVjdGVkO1xuICAgIH1cblxuICAgIHN0YXRpYyBpc1VzZUluTW9kYWwoKSB7XG4gICAgICAgIHJldHVybiBIZWxwZXJzLmdldFVybFBhcmFtKCdtZWRpYS1hY3Rpb24nKSA9PT0gJ3NlbGVjdC1maWxlcycgfHwgKHdpbmRvdy5ydk1lZGlhICYmIHdpbmRvdy5ydk1lZGlhLm9wdGlvbnMgJiYgd2luZG93LnJ2TWVkaWEub3B0aW9ucy5vcGVuX2luID09PSAnbW9kYWwnKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVzZXRQYWdpbmF0aW9uKCkge1xuICAgICAgICBSVl9NRURJQV9DT05GSUcucGFnaW5hdGlvbiA9IHtwYWdlZDogMSwgcG9zdHNfcGVyX3BhZ2U6IDQwLCBpbl9wcm9jZXNzX2dldF9tZWRpYTogZmFsc2UsIGhhc19tb3JlOiB0cnVlfTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0FwcC9IZWxwZXJzL0hlbHBlcnMuanMiLCJsZXQgTWVkaWFDb25maWcgPSAkLnBhcnNlSlNPTihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnTWVkaWFDb25maWcnKSkgfHwge307XG5cbmxldCBkZWZhdWx0Q29uZmlnID0ge1xuICAgIGFwcF9rZXk6ICc0ODNhMHh5enl0ejEyNDJjMGQ1MjA0MjZlOGJhMzY2YzUzMGMzZDlkYWJjJyxcbiAgICByZXF1ZXN0X3BhcmFtczoge1xuICAgICAgICB2aWV3X3R5cGU6ICd0aWxlcycsXG4gICAgICAgIGZpbHRlcjogJ2V2ZXJ5dGhpbmcnLFxuICAgICAgICB2aWV3X2luOiAnYWxsX21lZGlhJyxcbiAgICAgICAgc2VhcmNoOiAnJyxcbiAgICAgICAgc29ydF9ieTogJ2NyZWF0ZWRfYXQtZGVzYycsXG4gICAgICAgIGZvbGRlcl9pZDogMCxcbiAgICB9LFxuICAgIGhpZGVfZGV0YWlsc19wYW5lOiBmYWxzZSxcbiAgICBpY29uczoge1xuICAgICAgICBmb2xkZXI6ICdmYSBmYS1mb2xkZXItbycsXG4gICAgfSxcbiAgICBhY3Rpb25zX2xpc3Q6IHtcbiAgICAgICAgYmFzaWM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZmEgZmEtZXllJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnUHJldmlldycsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAncHJldmlldycsXG4gICAgICAgICAgICAgICAgb3JkZXI6IDAsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdydi1hY3Rpb24tcHJldmlldycsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBmaWxlOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2ZhIGZhLWxpbmsnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdDb3B5IGxpbmsnLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2NvcHlfbGluaycsXG4gICAgICAgICAgICAgICAgb3JkZXI6IDAsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdydi1hY3Rpb24tY29weS1saW5rJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2ZhIGZhLXBlbmNpbCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1JlbmFtZScsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAncmVuYW1lJyxcbiAgICAgICAgICAgICAgICBvcmRlcjogMSxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3J2LWFjdGlvbi1yZW5hbWUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZmEgZmEtY29weScsXG4gICAgICAgICAgICAgICAgbmFtZTogJ01ha2UgYSBjb3B5JyxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdtYWtlX2NvcHknLFxuICAgICAgICAgICAgICAgIG9yZGVyOiAyLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncnYtYWN0aW9uLW1ha2UtY29weScsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICB1c2VyOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2ZhIGZhLXN0YXInLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdGYXZvcml0ZScsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnZmF2b3JpdGUnLFxuICAgICAgICAgICAgICAgIG9yZGVyOiAyLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncnYtYWN0aW9uLWZhdm9yaXRlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWNvbjogJ2ZhIGZhLXN0YXItbycsXG4gICAgICAgICAgICAgICAgbmFtZTogJ1JlbW92ZSBmYXZvcml0ZScsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAncmVtb3ZlX2Zhdm9yaXRlJyxcbiAgICAgICAgICAgICAgICBvcmRlcjogMyxcbiAgICAgICAgICAgICAgICBjbGFzczogJ3J2LWFjdGlvbi1mYXZvcml0ZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBvdGhlcjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGljb246ICdmYSBmYS1kb3dubG9hZCcsXG4gICAgICAgICAgICAgICAgbmFtZTogJ0Rvd25sb2FkJyxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdkb3dubG9hZCcsXG4gICAgICAgICAgICAgICAgb3JkZXI6IDAsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdydi1hY3Rpb24tZG93bmxvYWQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZmEgZmEtdHJhc2gnLFxuICAgICAgICAgICAgICAgIG5hbWU6ICdNb3ZlIHRvIHRyYXNoJyxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICd0cmFzaCcsXG4gICAgICAgICAgICAgICAgb3JkZXI6IDEsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdydi1hY3Rpb24tdHJhc2gnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpY29uOiAnZmEgZmEtZXJhc2VyJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnRGVsZXRlIHBlcm1hbmVudGx5JyxcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdkZWxldGUnLFxuICAgICAgICAgICAgICAgIG9yZGVyOiAyLFxuICAgICAgICAgICAgICAgIGNsYXNzOiAncnYtYWN0aW9uLWRlbGV0ZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGljb246ICdmYSBmYS11bmRvJyxcbiAgICAgICAgICAgICAgICBuYW1lOiAnUmVzdG9yZScsXG4gICAgICAgICAgICAgICAgYWN0aW9uOiAncmVzdG9yZScsXG4gICAgICAgICAgICAgICAgb3JkZXI6IDMsXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdydi1hY3Rpb24tcmVzdG9yZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAgZGVuaWVkX2Rvd25sb2FkOiBbXG4gICAgICAgICd5b3V0dWJlJyxcbiAgICBdLFxufTtcblxuaWYgKCFNZWRpYUNvbmZpZy5hcHBfa2V5IHx8IE1lZGlhQ29uZmlnLmFwcF9rZXkgIT09IGRlZmF1bHRDb25maWcuYXBwX2tleSkge1xuICAgIE1lZGlhQ29uZmlnID0gZGVmYXVsdENvbmZpZztcbn1cblxubGV0IFJlY2VudEl0ZW1zID0gJC5wYXJzZUpTT04obG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1JlY2VudEl0ZW1zJykpIHx8IFtdO1xuXG5leHBvcnQge01lZGlhQ29uZmlnLCBSZWNlbnRJdGVtc307XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0FwcC9Db25maWcvTWVkaWFDb25maWcuanMiLCJleHBvcnQgY2xhc3MgTWVzc2FnZVNlcnZpY2Uge1xuICAgIHN0YXRpYyBzaG93TWVzc2FnZSh0eXBlLCBtZXNzYWdlLCBtZXNzYWdlSGVhZGVyKSB7XG4gICAgICAgIHRvYXN0ci5vcHRpb25zID0ge1xuICAgICAgICAgICAgY2xvc2VCdXR0b246IHRydWUsXG4gICAgICAgICAgICBwcm9ncmVzc0JhcjogdHJ1ZSxcbiAgICAgICAgICAgIHBvc2l0aW9uQ2xhc3M6ICd0b2FzdC1ib3R0b20tcmlnaHQnLFxuICAgICAgICAgICAgb25jbGljazogbnVsbCxcbiAgICAgICAgICAgIHNob3dEdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICAgIGhpZGVEdXJhdGlvbjogMTAwMCxcbiAgICAgICAgICAgIHRpbWVPdXQ6IDEwMDAwLFxuICAgICAgICAgICAgZXh0ZW5kZWRUaW1lT3V0OiAxMDAwLFxuICAgICAgICAgICAgc2hvd0Vhc2luZzogJ3N3aW5nJyxcbiAgICAgICAgICAgIGhpZGVFYXNpbmc6ICdsaW5lYXInLFxuICAgICAgICAgICAgc2hvd01ldGhvZDogJ2ZhZGVJbicsXG4gICAgICAgICAgICBoaWRlTWV0aG9kOiAnZmFkZU91dCdcbiAgICAgICAgfTtcbiAgICAgICAgdG9hc3RyW3R5cGVdKG1lc3NhZ2UsIG1lc3NhZ2VIZWFkZXIpO1xuICAgIH1cblxuICAgIHN0YXRpYyBoYW5kbGVFcnJvcihkYXRhKSB7XG4gICAgICAgIGlmICh0eXBlb2YgKGRhdGEucmVzcG9uc2VKU09OKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKGRhdGEucmVzcG9uc2VKU09OLm1lc3NhZ2UpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3dNZXNzYWdlKCdlcnJvcicsIGRhdGEucmVzcG9uc2VKU09OLm1lc3NhZ2UsIFJWX01FRElBX0NPTkZJRy50cmFuc2xhdGlvbnMubWVzc2FnZS5lcnJvcl9oZWFkZXIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkLmVhY2goZGF0YS5yZXNwb25zZUpTT04sIGZ1bmN0aW9uIChpbmRleCwgZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgJC5lYWNoKGVsLCBmdW5jdGlvbiAoa2V5LCBpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93TWVzc2FnZSgnZXJyb3InLCBpdGVtLCBSVl9NRURJQV9DT05GSUcudHJhbnNsYXRpb25zLm1lc3NhZ2UuZXJyb3JfaGVhZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93TWVzc2FnZSgnZXJyb3InLCBkYXRhLnN0YXR1c1RleHQsIFJWX01FRElBX0NPTkZJRy50cmFuc2xhdGlvbnMubWVzc2FnZS5lcnJvcl9oZWFkZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvQXBwL1NlcnZpY2VzL01lc3NhZ2VTZXJ2aWNlLmpzIiwiaW1wb3J0IHtSZWNlbnRJdGVtc30gZnJvbSAnLi4vQ29uZmlnL01lZGlhQ29uZmlnJztcbmltcG9ydCB7SGVscGVyc30gZnJvbSAnLi4vSGVscGVycy9IZWxwZXJzJztcbmltcG9ydCB7TWVzc2FnZVNlcnZpY2V9IGZyb20gJy4uL1NlcnZpY2VzL01lc3NhZ2VTZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIEFjdGlvbnNTZXJ2aWNlIHtcbiAgICBzdGF0aWMgaGFuZGxlRHJvcGRvd24oKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZCA9IF8uc2l6ZShIZWxwZXJzLmdldFNlbGVjdGVkSXRlbXMoKSk7XG5cbiAgICAgICAgQWN0aW9uc1NlcnZpY2UucmVuZGVyQWN0aW9ucygpO1xuXG4gICAgICAgIGlmIChzZWxlY3RlZCA+IDApIHtcbiAgICAgICAgICAgICQoJy5ydi1kcm9wZG93bi1hY3Rpb25zJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCcucnYtZHJvcGRvd24tYWN0aW9ucycpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGhhbmRsZVByZXZpZXcoKSB7XG4gICAgICAgIGxldCBzZWxlY3RlZCA9IFtdO1xuXG4gICAgICAgIF8uZWFjaChIZWxwZXJzLmdldFNlbGVjdGVkRmlsZXMoKSwgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKF8uaW5jbHVkZXMoWydpbWFnZScsICd5b3V0dWJlJywgJ3BkZicsICd0ZXh0JywgJ3ZpZGVvJ10sIHZhbHVlLnR5cGUpKSB7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHNyYzogdmFsdWUudXJsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgUmVjZW50SXRlbXMucHVzaCh2YWx1ZS5pZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChfLnNpemUoc2VsZWN0ZWQpID4gMCkge1xuICAgICAgICAgICAgJC5mYW5jeWJveC5vcGVuKHNlbGVjdGVkKTtcbiAgICAgICAgICAgIEhlbHBlcnMuc3RvcmVSZWNlbnRJdGVtcygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVHbG9iYWxBY3Rpb24oJ2Rvd25sb2FkJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgaGFuZGxlQ29weUxpbmsoKSB7XG4gICAgICAgIGxldCBsaW5rcyA9ICcnO1xuICAgICAgICBfLmVhY2goSGVscGVycy5nZXRTZWxlY3RlZEZpbGVzKCksIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmICghXy5pc0VtcHR5KGxpbmtzKSkge1xuICAgICAgICAgICAgICAgIGxpbmtzICs9ICdcXG4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGlua3MgKz0gdmFsdWUuZnVsbF91cmw7XG4gICAgICAgIH0pO1xuICAgICAgICBsZXQgJGNsaXBib2FyZFRlbXAgPSAkKCcuanMtcnYtY2xpcGJvYXJkLXRlbXAnKTtcbiAgICAgICAgJGNsaXBib2FyZFRlbXAuZGF0YSgnY2xpcGJvYXJkLXRleHQnLCBsaW5rcyk7XG4gICAgICAgIG5ldyBDbGlwYm9hcmQoJy5qcy1ydi1jbGlwYm9hcmQtdGVtcCcsIHtcbiAgICAgICAgICAgIHRleHQ6IGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpbmtzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvd01lc3NhZ2UoJ3N1Y2Nlc3MnLCBSVl9NRURJQV9DT05GSUcudHJhbnNsYXRpb25zLmNsaXBib2FyZC5zdWNjZXNzLCBSVl9NRURJQV9DT05GSUcudHJhbnNsYXRpb25zLm1lc3NhZ2Uuc3VjY2Vzc19oZWFkZXIpO1xuICAgICAgICAkY2xpcGJvYXJkVGVtcC50cmlnZ2VyKCdjbGljaycpO1xuICAgIH1cblxuICAgIHN0YXRpYyBoYW5kbGVHbG9iYWxBY3Rpb24odHlwZSwgY2FsbGJhY2spIHtcbiAgICAgICAgbGV0IHNlbGVjdGVkID0gW107XG4gICAgICAgIF8uZWFjaChIZWxwZXJzLmdldFNlbGVjdGVkSXRlbXMoKSwgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgc2VsZWN0ZWQucHVzaCh7XG4gICAgICAgICAgICAgICAgaXNfZm9sZGVyOiB2YWx1ZS5pc19mb2xkZXIsXG4gICAgICAgICAgICAgICAgaWQ6IHZhbHVlLmlkLFxuICAgICAgICAgICAgICAgIGZ1bGxfdXJsOiB2YWx1ZS5mdWxsX3VybFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSAncmVuYW1lJzpcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWxfcmVuYW1lX2l0ZW1zJykubW9kYWwoJ3Nob3cnKS5maW5kKCdmb3JtLnJ2LWZvcm0nKS5kYXRhKCdhY3Rpb24nLCB0eXBlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NvcHlfbGluayc6XG4gICAgICAgICAgICAgICAgQWN0aW9uc1NlcnZpY2UuaGFuZGxlQ29weUxpbmsoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3ByZXZpZXcnOlxuICAgICAgICAgICAgICAgIEFjdGlvbnNTZXJ2aWNlLmhhbmRsZVByZXZpZXcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3RyYXNoJzpcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWxfdHJhc2hfaXRlbXMnKS5tb2RhbCgnc2hvdycpLmZpbmQoJ2Zvcm0ucnYtZm9ybScpLmRhdGEoJ2FjdGlvbicsIHR5cGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZGVsZXRlJzpcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWxfZGVsZXRlX2l0ZW1zJykubW9kYWwoJ3Nob3cnKS5maW5kKCdmb3JtLnJ2LWZvcm0nKS5kYXRhKCdhY3Rpb24nLCB0eXBlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VtcHR5X3RyYXNoJzpcbiAgICAgICAgICAgICAgICAkKCcjbW9kYWxfZW1wdHlfdHJhc2gnKS5tb2RhbCgnc2hvdycpLmZpbmQoJ2Zvcm0ucnYtZm9ybScpLmRhdGEoJ2FjdGlvbicsIHR5cGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnZG93bmxvYWQnOlxuICAgICAgICAgICAgICAgIGxldCBkb3dubG9hZExpbmsgPSBSVl9NRURJQV9VUkwuZG93bmxvYWQ7XG4gICAgICAgICAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgICAgICAgICBfLmVhY2goSGVscGVycy5nZXRTZWxlY3RlZEl0ZW1zKCksIGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfLmluY2x1ZGVzKEhlbHBlcnMuZ2V0Q29uZmlncygpLmRlbmllZF9kb3dubG9hZCwgdmFsdWUubWltZV90eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRMaW5rICs9IChjb3VudCA9PT0gMCA/ICc/JyA6ICcmJykgKyAnc2VsZWN0ZWRbJyArIGNvdW50ICsgJ11baXNfZm9sZGVyXT0nICsgdmFsdWUuaXNfZm9sZGVyICsgJyZzZWxlY3RlZFsnICsgY291bnQgKyAnXVtpZF09JyArIHZhbHVlLmlkO1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChkb3dubG9hZExpbmsgIT09IFJWX01FRElBX1VSTC5kb3dubG9hZCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cub3Blbihkb3dubG9hZExpbmssICdfYmxhbmsnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBNZXNzYWdlU2VydmljZS5zaG93TWVzc2FnZSgnZXJyb3InLCBSVl9NRURJQV9DT05GSUcudHJhbnNsYXRpb25zLmRvd25sb2FkLmVycm9yLCBSVl9NRURJQV9DT05GSUcudHJhbnNsYXRpb25zLm1lc3NhZ2UuZXJyb3JfaGVhZGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIEFjdGlvbnNTZXJ2aWNlLnByb2Nlc3NBY3Rpb24oe1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogdHlwZVxuICAgICAgICAgICAgICAgIH0sIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBwcm9jZXNzQWN0aW9uKGRhdGEsIGNhbGxiYWNrID0gbnVsbCkge1xuICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgdXJsOiBSVl9NRURJQV9VUkwuZ2xvYmFsX2FjdGlvbnMsXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbiAgICAgICAgICAgIGJlZm9yZVNlbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBIZWxwZXJzLnNob3dBamF4TG9hZGluZygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICBIZWxwZXJzLnJlc2V0UGFnaW5hdGlvbigpO1xuICAgICAgICAgICAgICAgIGlmICghcmVzLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3dNZXNzYWdlKCdzdWNjZXNzJywgcmVzLm1lc3NhZ2UsIFJWX01FRElBX0NPTkZJRy50cmFuc2xhdGlvbnMubWVzc2FnZS5zdWNjZXNzX2hlYWRlcik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvd01lc3NhZ2UoJ2Vycm9yJywgcmVzLm1lc3NhZ2UsIFJWX01FRElBX0NPTkZJRy50cmFuc2xhdGlvbnMubWVzc2FnZS5lcnJvcl9oZWFkZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgSGVscGVycy5oaWRlQWpheExvYWRpbmcoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBNZXNzYWdlU2VydmljZS5oYW5kbGVFcnJvcihkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbmRlclJlbmFtZUl0ZW1zKCkge1xuICAgICAgICBsZXQgVklFVyA9ICQoJyNydl9tZWRpYV9yZW5hbWVfaXRlbScpLmh0bWwoKTtcbiAgICAgICAgbGV0ICRpdGVtc1dyYXBwZXIgPSAkKCcjbW9kYWxfcmVuYW1lX2l0ZW1zIC5yZW5hbWUtaXRlbXMnKS5lbXB0eSgpO1xuXG4gICAgICAgIF8uZWFjaChIZWxwZXJzLmdldFNlbGVjdGVkSXRlbXMoKSwgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBWSUVXXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL19faWNvbl9fL2dpLCB2YWx1ZS5pY29uIHx8ICdmYSBmYS1maWxlLW8nKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9fX3BsYWNlaG9sZGVyX18vZ2ksICdJbnB1dCBmaWxlIG5hbWUnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9fX3ZhbHVlX18vZ2ksIHZhbHVlLm5hbWUpXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICBsZXQgJGl0ZW0gPSAkKGl0ZW0pO1xuICAgICAgICAgICAgJGl0ZW0uZGF0YSgnaWQnLCB2YWx1ZS5pZCk7XG4gICAgICAgICAgICAkaXRlbS5kYXRhKCdpc19mb2xkZXInLCB2YWx1ZS5pc19mb2xkZXIpO1xuICAgICAgICAgICAgJGl0ZW0uZGF0YSgnbmFtZScsIHZhbHVlLm5hbWUpO1xuICAgICAgICAgICAgJGl0ZW1zV3JhcHBlci5hcHBlbmQoJGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVuZGVyQWN0aW9ucygpIHtcbiAgICAgICAgbGV0IGhhc0ZvbGRlclNlbGVjdGVkID0gSGVscGVycy5nZXRTZWxlY3RlZEZvbGRlcigpLmxlbmd0aCA+IDA7XG5cbiAgICAgICAgbGV0IEFDVElPTl9URU1QTEFURSA9ICQoJyNydl9hY3Rpb25faXRlbScpLmh0bWwoKTtcbiAgICAgICAgbGV0IGluaXRpYWxpemVkX2l0ZW0gPSAwO1xuICAgICAgICBsZXQgJGRyb3Bkb3duQWN0aW9ucyA9ICQoJy5ydi1kcm9wZG93bi1hY3Rpb25zIC5kcm9wZG93bi1tZW51Jyk7XG4gICAgICAgICRkcm9wZG93bkFjdGlvbnMuZW1wdHkoKTtcblxuICAgICAgICBsZXQgYWN0aW9uc0xpc3QgPSAkLmV4dGVuZCh7fSwgdHJ1ZSwgSGVscGVycy5nZXRDb25maWdzKCkuYWN0aW9uc19saXN0KTtcblxuICAgICAgICBpZiAoaGFzRm9sZGVyU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGFjdGlvbnNMaXN0LmJhc2ljID0gXy5yZWplY3QoYWN0aW9uc0xpc3QuYmFzaWMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uYWN0aW9uID09PSAncHJldmlldyc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGFjdGlvbnNMaXN0LmZpbGUgPSBfLnJlamVjdChhY3Rpb25zTGlzdC5maWxlLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmFjdGlvbiA9PT0gJ2NvcHlfbGluayc7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCFfLmluY2x1ZGVzKFJWX01FRElBX0NPTkZJRy5wZXJtaXNzaW9ucywgJ2ZvbGRlcnMuY3JlYXRlJykpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zTGlzdC5maWxlID0gXy5yZWplY3QoYWN0aW9uc0xpc3QuZmlsZSwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0uYWN0aW9uID09PSAnbWFrZV9jb3B5JztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFfLmluY2x1ZGVzKFJWX01FRElBX0NPTkZJRy5wZXJtaXNzaW9ucywgJ2ZvbGRlcnMuZWRpdCcpKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uc0xpc3QuZmlsZSA9IF8ucmVqZWN0KGFjdGlvbnNMaXN0LmZpbGUsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfLmluY2x1ZGVzKFsncmVuYW1lJ10sIGl0ZW0uYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGFjdGlvbnNMaXN0LnVzZXIgPSBfLnJlamVjdChhY3Rpb25zTGlzdC51c2VyLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXy5pbmNsdWRlcyhbJ3JlbmFtZSddLCBpdGVtLmFjdGlvbik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghXy5pbmNsdWRlcyhSVl9NRURJQV9DT05GSUcucGVybWlzc2lvbnMsICdmb2xkZXJzLnRyYXNoJykpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zTGlzdC5vdGhlciA9IF8ucmVqZWN0KGFjdGlvbnNMaXN0Lm90aGVyLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXy5pbmNsdWRlcyhbJ3RyYXNoJywgJ3Jlc3RvcmUnXSwgaXRlbS5hY3Rpb24pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIV8uaW5jbHVkZXMoUlZfTUVESUFfQ09ORklHLnBlcm1pc3Npb25zLCAnZm9sZGVycy5kZWxldGUnKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbnNMaXN0Lm90aGVyID0gXy5yZWplY3QoYWN0aW9uc0xpc3Qub3RoZXIsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfLmluY2x1ZGVzKFsnZGVsZXRlJ10sIGl0ZW0uYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFfLmluY2x1ZGVzKFJWX01FRElBX0NPTkZJRy5wZXJtaXNzaW9ucywgJ2ZvbGRlcnMuZmF2b3JpdGUnKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbnNMaXN0Lm90aGVyID0gXy5yZWplY3QoYWN0aW9uc0xpc3Qub3RoZXIsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfLmluY2x1ZGVzKFsnZmF2b3JpdGUnLCAncmVtb3ZlX2Zhdm9yaXRlJ10sIGl0ZW0uYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzZWxlY3RlZEZpbGVzID0gSGVscGVycy5nZXRTZWxlY3RlZEZpbGVzKCk7XG5cbiAgICAgICAgbGV0IGNhbl9wcmV2aWV3ID0gZmFsc2U7XG4gICAgICAgIF8uZWFjaChzZWxlY3RlZEZpbGVzLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChfLmluY2x1ZGVzKFsnaW1hZ2UnLCAneW91dHViZScsICdwZGYnLCAndGV4dCcsICd2aWRlbyddLCB2YWx1ZS50eXBlKSkge1xuICAgICAgICAgICAgICAgIGNhbl9wcmV2aWV3ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFjYW5fcHJldmlldykge1xuICAgICAgICAgICAgYWN0aW9uc0xpc3QuYmFzaWMgPSBfLnJlamVjdChhY3Rpb25zTGlzdC5iYXNpYywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5hY3Rpb24gPT09ICdwcmV2aWV3JztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkRmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKCFfLmluY2x1ZGVzKFJWX01FRElBX0NPTkZJRy5wZXJtaXNzaW9ucywgJ2ZpbGVzLmNyZWF0ZScpKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uc0xpc3QuZmlsZSA9IF8ucmVqZWN0KGFjdGlvbnNMaXN0LmZpbGUsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLmFjdGlvbiA9PT0gJ21ha2VfY29weSc7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghXy5pbmNsdWRlcyhSVl9NRURJQV9DT05GSUcucGVybWlzc2lvbnMsICdmaWxlcy5lZGl0JykpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zTGlzdC5maWxlID0gXy5yZWplY3QoYWN0aW9uc0xpc3QuZmlsZSwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF8uaW5jbHVkZXMoWydyZW5hbWUnXSwgaXRlbS5hY3Rpb24pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIV8uaW5jbHVkZXMoUlZfTUVESUFfQ09ORklHLnBlcm1pc3Npb25zLCAnZmlsZXMudHJhc2gnKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbnNMaXN0Lm90aGVyID0gXy5yZWplY3QoYWN0aW9uc0xpc3Qub3RoZXIsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfLmluY2x1ZGVzKFsndHJhc2gnLCAncmVzdG9yZSddLCBpdGVtLmFjdGlvbik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghXy5pbmNsdWRlcyhSVl9NRURJQV9DT05GSUcucGVybWlzc2lvbnMsICdmaWxlcy5kZWxldGUnKSkge1xuICAgICAgICAgICAgICAgIGFjdGlvbnNMaXN0Lm90aGVyID0gXy5yZWplY3QoYWN0aW9uc0xpc3Qub3RoZXIsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfLmluY2x1ZGVzKFsnZGVsZXRlJ10sIGl0ZW0uYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFfLmluY2x1ZGVzKFJWX01FRElBX0NPTkZJRy5wZXJtaXNzaW9ucywgJ2ZpbGVzLmZhdm9yaXRlJykpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb25zTGlzdC5vdGhlciA9IF8ucmVqZWN0KGFjdGlvbnNMaXN0Lm90aGVyLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXy5pbmNsdWRlcyhbJ2Zhdm9yaXRlJywgJ3JlbW92ZV9mYXZvcml0ZSddLCBpdGVtLmFjdGlvbik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBfLmVhY2goYWN0aW9uc0xpc3QsIGZ1bmN0aW9uIChhY3Rpb24sIGtleSkge1xuICAgICAgICAgICAgXy5lYWNoKGFjdGlvbiwgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgbGV0IGlzX2JyZWFrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChIZWxwZXJzLmdldFJlcXVlc3RQYXJhbXMoKS52aWV3X2luKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FsbF9tZWRpYSc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5pbmNsdWRlcyhbJ3JlbW92ZV9mYXZvcml0ZScsICdkZWxldGUnLCAncmVzdG9yZSddLCBpdGVtLmFjdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19icmVhayA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAncmVjZW50JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLmluY2x1ZGVzKFsncmVtb3ZlX2Zhdm9yaXRlJywgJ2RlbGV0ZScsICdyZXN0b3JlJywgJ21ha2VfY29weSddLCBpdGVtLmFjdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19icmVhayA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZmF2b3JpdGVzJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLmluY2x1ZGVzKFsnZmF2b3JpdGUnLCAnZGVsZXRlJywgJ3Jlc3RvcmUnLCAnbWFrZV9jb3B5J10sIGl0ZW0uYWN0aW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzX2JyZWFrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd0cmFzaCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIV8uaW5jbHVkZXMoWydwcmV2aWV3JywgJ2RlbGV0ZScsICdyZXN0b3JlJywgJ3JlbmFtZScsICdkb3dubG9hZCddLCBpdGVtLmFjdGlvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc19icmVhayA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFpc19icmVhaykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcGxhdGUgPSBBQ1RJT05fVEVNUExBVEVcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9fX2FjdGlvbl9fL2dpLCBpdGVtLmFjdGlvbiB8fCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9fX2ljb25fXy9naSwgaXRlbS5pY29uIHx8ICcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL19fbmFtZV9fL2dpLCBSVl9NRURJQV9DT05GSUcudHJhbnNsYXRpb25zLmFjdGlvbnNfbGlzdFtrZXldW2l0ZW0uYWN0aW9uXSB8fCBpdGVtLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWluZGV4ICYmIGluaXRpYWxpemVkX2l0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlID0gJzxsaSByb2xlPVwic2VwYXJhdG9yXCIgY2xhc3M9XCJkaXZpZGVyXCI+PC9saT4nICsgdGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJGRyb3Bkb3duQWN0aW9ucy5hcHBlbmQodGVtcGxhdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaW5pdGlhbGl6ZWRfaXRlbSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0FwcC9TZXJ2aWNlcy9BY3Rpb25zU2VydmljZS5qcyIsImltcG9ydCB7UmVjZW50SXRlbXN9IGZyb20gJy4uL0NvbmZpZy9NZWRpYUNvbmZpZyc7XG5pbXBvcnQge0hlbHBlcnN9IGZyb20gJy4uL0hlbHBlcnMvSGVscGVycyc7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi9TZXJ2aWNlcy9NZXNzYWdlU2VydmljZSc7XG5pbXBvcnQge0FjdGlvbnNTZXJ2aWNlfSBmcm9tICcuLi9TZXJ2aWNlcy9BY3Rpb25zU2VydmljZSc7XG5pbXBvcnQge0NvbnRleHRNZW51U2VydmljZX0gZnJvbSAnLi4vU2VydmljZXMvQ29udGV4dE1lbnVTZXJ2aWNlJztcbmltcG9ydCB7TWVkaWFMaXN0fSBmcm9tICcuLi9WaWV3cy9NZWRpYUxpc3QnO1xuaW1wb3J0IHtNZWRpYURldGFpbHN9IGZyb20gJy4uL1ZpZXdzL01lZGlhRGV0YWlscyc7XG5cbmV4cG9ydCBjbGFzcyBNZWRpYVNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLk1lZGlhTGlzdCA9IG5ldyBNZWRpYUxpc3QoKTtcbiAgICAgICAgdGhpcy5NZWRpYURldGFpbHMgPSBuZXcgTWVkaWFEZXRhaWxzKCk7XG4gICAgICAgIHRoaXMuYnJlYWRjcnVtYlRlbXBsYXRlID0gJCgnI3J2X21lZGlhX2JyZWFkY3J1bWJfaXRlbScpLmh0bWwoKTtcbiAgICB9XG5cbiAgICBnZXRNZWRpYShyZWxvYWQgPSBmYWxzZSwgaXNfcG9wdXAgPSBmYWxzZSwgbG9hZF9tb3JlX2ZpbGUgPSBmYWxzZSkge1xuICAgICAgICBpZiAodHlwZW9mIFJWX01FRElBX0NPTkZJRy5wYWdpbmF0aW9uICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAoUlZfTUVESUFfQ09ORklHLnBhZ2luYXRpb24uaW5fcHJvY2Vzc19nZXRfbWVkaWEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFJWX01FRElBX0NPTkZJRy5wYWdpbmF0aW9uLmluX3Byb2Nlc3NfZ2V0X21lZGlhID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBfc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgX3NlbGYuZ2V0RmlsZURldGFpbHMoe1xuICAgICAgICAgICAgaWNvbjogJ2ZhIGZhLXBpY3R1cmUtbycsXG4gICAgICAgICAgICBub3RoaW5nX3NlbGVjdGVkOiAnJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHBhcmFtcyA9IEhlbHBlcnMuZ2V0UmVxdWVzdFBhcmFtcygpO1xuXG4gICAgICAgIGlmIChwYXJhbXMudmlld19pbiA9PT0gJ3JlY2VudCcpIHtcbiAgICAgICAgICAgIHBhcmFtcy5yZWNlbnRfaXRlbXMgPSBSZWNlbnRJdGVtcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc19wb3B1cCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcGFyYW1zLmlzX3BvcHVwID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhcmFtcy5pc19wb3B1cCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmFtcy5vblNlbGVjdEZpbGVzID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmICh0eXBlb2YgcGFyYW1zLnNlYXJjaCAhPSAndW5kZWZpbmVkJyAmJiBwYXJhbXMuc2VhcmNoICE9ICcnICYmIHR5cGVvZiBwYXJhbXMuc2VsZWN0ZWRfZmlsZV9pZCAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcGFyYW1zLnNlbGVjdGVkX2ZpbGVfaWQgPSB1bmRlZmluZWRcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcmFtcy5sb2FkX21vcmVfZmlsZSA9IGxvYWRfbW9yZV9maWxlO1xuICAgICAgICBpZiAodHlwZW9mIFJWX01FRElBX0NPTkZJRy5wYWdpbmF0aW9uICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBwYXJhbXMucGFnZWQgPSBSVl9NRURJQV9DT05GSUcucGFnaW5hdGlvbi5wYWdlZDtcbiAgICAgICAgICAgIHBhcmFtcy5wb3N0c19wZXJfcGFnZSA9IFJWX01FRElBX0NPTkZJRy5wYWdpbmF0aW9uLnBvc3RzX3Blcl9wYWdlO1xuICAgICAgICB9XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFJWX01FRElBX1VSTC5nZXRfbWVkaWEsXG4gICAgICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgICAgIGRhdGE6IHBhcmFtcyxcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgSGVscGVycy5zaG93QWpheExvYWRpbmcoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgX3NlbGYuTWVkaWFMaXN0LnJlbmRlckRhdGEocmVzLmRhdGEsIHJlbG9hZCwgbG9hZF9tb3JlX2ZpbGUpO1xuICAgICAgICAgICAgICAgIF9zZWxmLmZldGNoUXVvdGEoKTtcbiAgICAgICAgICAgICAgICBfc2VsZi5yZW5kZXJCcmVhZGNydW1icyhyZXMuZGF0YS5icmVhZGNydW1icyk7XG4gICAgICAgICAgICAgICAgTWVkaWFTZXJ2aWNlLnJlZnJlc2hGaWx0ZXIoKTtcbiAgICAgICAgICAgICAgICBBY3Rpb25zU2VydmljZS5yZW5kZXJBY3Rpb25zKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIFJWX01FRElBX0NPTkZJRy5wYWdpbmF0aW9uICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgUlZfTUVESUFfQ09ORklHLnBhZ2luYXRpb24ucGFnZWQgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFJWX01FRElBX0NPTkZJRy5wYWdpbmF0aW9uLnBhZ2VkICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIFJWX01FRElBX0NPTkZJRy5wYWdpbmF0aW9uLmluX3Byb2Nlc3NfZ2V0X21lZGlhICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBSVl9NRURJQV9DT05GSUcucGFnaW5hdGlvbi5pbl9wcm9jZXNzX2dldF9tZWRpYSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBSVl9NRURJQV9DT05GSUcucGFnaW5hdGlvbi5wb3N0c19wZXJfcGFnZSAhPSAndW5kZWZpbmVkJyAmJiByZXMuZGF0YS5maWxlcy5sZW5ndGggPCBSVl9NRURJQV9DT05GSUcucGFnaW5hdGlvbi5wb3N0c19wZXJfcGFnZSAmJiB0eXBlb2YgUlZfTUVESUFfQ09ORklHLnBhZ2luYXRpb24uaGFzX21vcmUgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFJWX01FRElBX0NPTkZJRy5wYWdpbmF0aW9uLmhhc19tb3JlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgSGVscGVycy5oaWRlQWpheExvYWRpbmcoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBNZXNzYWdlU2VydmljZS5oYW5kbGVFcnJvcihkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0RmlsZURldGFpbHMoZGF0YSkge1xuICAgICAgICB0aGlzLk1lZGlhRGV0YWlscy5yZW5kZXJEYXRhKGRhdGEpO1xuICAgIH1cblxuICAgIGZldGNoUXVvdGEoKSB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFJWX01FRElBX1VSTC5nZXRfcXVvdGEsXG4gICAgICAgICAgICB0eXBlOiAnR0VUJyxcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgICAgICBiZWZvcmVTZW5kOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcblxuICAgICAgICAgICAgICAgICQoJy5ydi1tZWRpYS1hc2lkZS1ib3R0b20gLnVzZWQtYW5hbHl0aWNzIHNwYW4nKS5odG1sKGRhdGEudXNlZCArICcgLyAnICsgZGF0YS5xdW90YSk7XG4gICAgICAgICAgICAgICAgJCgnLnJ2LW1lZGlhLWFzaWRlLWJvdHRvbSAucHJvZ3Jlc3MtYmFyJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGRhdGEucGVyY2VudCArICclJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBNZXNzYWdlU2VydmljZS5oYW5kbGVFcnJvcihkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyQnJlYWRjcnVtYnMoYnJlYWRjcnVtYkl0ZW1zKSB7XG4gICAgICAgIGxldCBfc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCAkYnJlYWRjcnVtYkNvbnRhaW5lciA9ICQoJy5ydi1tZWRpYS1icmVhZGNydW1iIC5icmVhZGNydW1iJyk7XG4gICAgICAgICRicmVhZGNydW1iQ29udGFpbmVyLmZpbmQoJ2xpJykucmVtb3ZlKCk7XG5cbiAgICAgICAgXy5lYWNoKGJyZWFkY3J1bWJJdGVtcywgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgbGV0IHRlbXBsYXRlID0gX3NlbGYuYnJlYWRjcnVtYlRlbXBsYXRlO1xuICAgICAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9fX25hbWVfXy9naSwgdmFsdWUubmFtZSB8fCAnJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvX19pY29uX18vZ2ksIHZhbHVlLmljb24gPyAnPGkgY2xhc3M9XCInICsgdmFsdWUuaWNvbiArICdcIj48L2k+JyA6ICcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9fX2ZvbGRlcklkX18vZ2ksIHZhbHVlLmlkIHx8IDApO1xuICAgICAgICAgICAgJGJyZWFkY3J1bWJDb250YWluZXIuYXBwZW5kKCQodGVtcGxhdGUpKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoJy5ydi1tZWRpYS1jb250YWluZXInKS5hdHRyKCdkYXRhLWJyZWFkY3J1bWItY291bnQnLCBfLnNpemUoYnJlYWRjcnVtYkl0ZW1zKSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlZnJlc2hGaWx0ZXIoKSB7XG4gICAgICAgIGxldCAkcnZNZWRpYUNvbnRhaW5lciA9ICQoJy5ydi1tZWRpYS1jb250YWluZXInKTtcbiAgICAgICAgbGV0IHZpZXdfaW4gPSBIZWxwZXJzLmdldFJlcXVlc3RQYXJhbXMoKS52aWV3X2luO1xuICAgICAgICBpZiAodmlld19pbiAhPT0gJ2FsbF9tZWRpYScgJiYgSGVscGVycy5nZXRSZXF1ZXN0UGFyYW1zKCkuZm9sZGVyX2lkID09IDApIHtcbiAgICAgICAgICAgICQoJy5ydi1tZWRpYS1hY3Rpb25zIC5idG46bm90KFtkYXRhLXR5cGU9XCJyZWZyZXNoXCJdKTpub3QobGFiZWwpJykuYWRkQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAkcnZNZWRpYUNvbnRhaW5lci5hdHRyKCdkYXRhLWFsbG93LXVwbG9hZCcsICdmYWxzZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLnJ2LW1lZGlhLWFjdGlvbnMgLmJ0bjpub3QoW2RhdGEtdHlwZT1cInJlZnJlc2hcIl0pOm5vdChsYWJlbCknKS5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICRydk1lZGlhQ29udGFpbmVyLmF0dHIoJ2RhdGEtYWxsb3ctdXBsb2FkJywgJ3RydWUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgICQoJy5ydi1tZWRpYS1hY3Rpb25zIC5idG4uanMtcnYtbWVkaWEtY2hhbmdlLWZpbHRlci1ncm91cCcpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuXG4gICAgICAgIGxldCAkZW1wdHlfdHJhc2hfYnRuID0gJCgnLnJ2LW1lZGlhLWFjdGlvbnMgLmJ0bltkYXRhLWFjdGlvbj1cImVtcHR5X3RyYXNoXCJdJyk7XG4gICAgICAgIGlmICh2aWV3X2luID09PSAndHJhc2gnKSB7XG4gICAgICAgICAgICAkZW1wdHlfdHJhc2hfYnRuLnJlbW92ZUNsYXNzKCdoaWRkZW4nKS5yZW1vdmVDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIGlmICghXy5zaXplKEhlbHBlcnMuZ2V0SXRlbXMoKSkpIHtcbiAgICAgICAgICAgICAgICAkZW1wdHlfdHJhc2hfYnRuLmFkZENsYXNzKCdoaWRkZW4nKS5hZGRDbGFzcygnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICRlbXB0eV90cmFzaF9idG4uYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICB9XG5cbiAgICAgICAgQ29udGV4dE1lbnVTZXJ2aWNlLmRlc3Ryb3lDb250ZXh0KCk7XG4gICAgICAgIENvbnRleHRNZW51U2VydmljZS5pbml0Q29udGV4dCgpO1xuXG4gICAgICAgICRydk1lZGlhQ29udGFpbmVyLmF0dHIoJ2RhdGEtdmlldy1pbicsIHZpZXdfaW4pO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0FwcC9TZXJ2aWNlcy9NZWRpYVNlcnZpY2UuanMiLCJpbXBvcnQge0FjdGlvbnNTZXJ2aWNlfSBmcm9tICcuL0FjdGlvbnNTZXJ2aWNlJztcbmltcG9ydCB7SGVscGVyc30gZnJvbSAnLi4vSGVscGVycy9IZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIENvbnRleHRNZW51U2VydmljZSB7XG4gICAgc3RhdGljIGluaXRDb250ZXh0KCkge1xuICAgICAgICBpZiAoalF1ZXJ5KCkuY29udGV4dE1lbnUpIHtcbiAgICAgICAgICAgICQuY29udGV4dE1lbnUoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLmpzLWNvbnRleHQtbWVudVtkYXRhLWNvbnRleHQ9XCJmaWxlXCJdJyxcbiAgICAgICAgICAgICAgICBidWlsZDogZnVuY3Rpb24gKCRlbGVtZW50LCBldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IENvbnRleHRNZW51U2VydmljZS5fZmlsZUNvbnRleHRNZW51KCksXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkLmNvbnRleHRNZW51KHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy5qcy1jb250ZXh0LW1lbnVbZGF0YS1jb250ZXh0PVwiZm9sZGVyXCJdJyxcbiAgICAgICAgICAgICAgICBidWlsZDogZnVuY3Rpb24gKCRlbGVtZW50LCBldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IENvbnRleHRNZW51U2VydmljZS5fZm9sZGVyQ29udGV4dE1lbnUoKSxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgX2ZpbGVDb250ZXh0TWVudSgpIHtcbiAgICAgICAgbGV0IGl0ZW1zID0ge1xuICAgICAgICAgICAgcHJldmlldzoge1xuICAgICAgICAgICAgICAgIG5hbWU6ICdQcmV2aWV3JyxcbiAgICAgICAgICAgICAgICBpY29uOiBmdW5jdGlvbiAob3B0LCAkaXRlbUVsZW1lbnQsIGl0ZW1LZXksIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgJGl0ZW1FbGVtZW50Lmh0bWwoJzxpIGNsYXNzPVwiZmEgZmEtZXllXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiAnICsgaXRlbS5uYW1lKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2NvbnRleHQtbWVudS1pY29uLXVwZGF0ZWQnO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChrZXksIG9wdCkge1xuICAgICAgICAgICAgICAgICAgICBBY3Rpb25zU2VydmljZS5oYW5kbGVQcmV2aWV3KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcblxuICAgICAgICBfLmVhY2goSGVscGVycy5nZXRDb25maWdzKCkuYWN0aW9uc19saXN0LCBmdW5jdGlvbiAoYWN0aW9uR3JvdXAsIGtleSkge1xuICAgICAgICAgICAgXy5lYWNoKGFjdGlvbkdyb3VwLCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpdGVtc1t2YWx1ZS5hY3Rpb25dID0ge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiB2YWx1ZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBmdW5jdGlvbiAob3B0LCAkaXRlbUVsZW1lbnQsIGl0ZW1LZXksIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRpdGVtRWxlbWVudC5odG1sKCc8aSBjbGFzcz1cIicgKyB2YWx1ZS5pY29uICsgJ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gJyArIChSVl9NRURJQV9DT05GSUcudHJhbnNsYXRpb25zLmFjdGlvbnNfbGlzdFtrZXldW3ZhbHVlLmFjdGlvbl0gfHwgaXRlbS5uYW1lKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnY29udGV4dC1tZW51LWljb24tdXBkYXRlZCc7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoa2V5LCBvcHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5qcy1maWxlcy1hY3Rpb25bZGF0YS1hY3Rpb249XCInICsgdmFsdWUuYWN0aW9uICsgJ1wiXScpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGV4Y2VwdCA9IFtdO1xuXG4gICAgICAgIHN3aXRjaCAoSGVscGVycy5nZXRSZXF1ZXN0UGFyYW1zKCkudmlld19pbikge1xuICAgICAgICAgICAgY2FzZSAnYWxsX21lZGlhJzpcbiAgICAgICAgICAgICAgICBleGNlcHQgPSBbJ3JlbW92ZV9mYXZvcml0ZScsICdkZWxldGUnLCAncmVzdG9yZSddO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncmVjZW50JzpcbiAgICAgICAgICAgICAgICBleGNlcHQgPSBbJ3JlbW92ZV9mYXZvcml0ZScsICdkZWxldGUnLCAncmVzdG9yZScsICdtYWtlX2NvcHknXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2Zhdm9yaXRlcyc6XG4gICAgICAgICAgICAgICAgZXhjZXB0ID0gWydmYXZvcml0ZScsICdkZWxldGUnLCAncmVzdG9yZScsICdtYWtlX2NvcHknXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3RyYXNoJzpcbiAgICAgICAgICAgICAgICBpdGVtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldzogaXRlbXMucHJldmlldyxcbiAgICAgICAgICAgICAgICAgICAgcmVuYW1lOiBpdGVtcy5yZW5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRvd25sb2FkOiBpdGVtcy5kb3dubG9hZCxcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlOiBpdGVtcy5kZWxldGUsXG4gICAgICAgICAgICAgICAgICAgIHJlc3RvcmU6IGl0ZW1zLnJlc3RvcmUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIF8uZWFjaChleGNlcHQsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaXRlbXNbdmFsdWVdID0gdW5kZWZpbmVkO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgaGFzRm9sZGVyU2VsZWN0ZWQgPSBIZWxwZXJzLmdldFNlbGVjdGVkRm9sZGVyKCkubGVuZ3RoID4gMDtcblxuICAgICAgICBpZiAoaGFzRm9sZGVyU2VsZWN0ZWQpIHtcbiAgICAgICAgICAgIGl0ZW1zLnByZXZpZXcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpdGVtcy5jb3B5X2xpbmsgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIGlmICghXy5pbmNsdWRlcyhSVl9NRURJQV9DT05GSUcucGVybWlzc2lvbnMsICdmb2xkZXJzLmNyZWF0ZScpKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMubWFrZV9jb3B5ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIV8uaW5jbHVkZXMoUlZfTUVESUFfQ09ORklHLnBlcm1pc3Npb25zLCAnZm9sZGVycy5lZGl0JykpIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5yZW5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghXy5pbmNsdWRlcyhSVl9NRURJQV9DT05GSUcucGVybWlzc2lvbnMsICdmb2xkZXJzLnRyYXNoJykpIHtcbiAgICAgICAgICAgICAgICBpdGVtcy50cmFzaCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBpdGVtcy5yZXN0b3JlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIV8uaW5jbHVkZXMoUlZfTUVESUFfQ09ORklHLnBlcm1pc3Npb25zLCAnZm9sZGVycy5kZWxldGUnKSkge1xuICAgICAgICAgICAgICAgIGl0ZW1zLmRlbGV0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFfLmluY2x1ZGVzKFJWX01FRElBX0NPTkZJRy5wZXJtaXNzaW9ucywgJ2ZvbGRlcnMuZmF2b3JpdGUnKSkge1xuICAgICAgICAgICAgICAgIGl0ZW1zLmZhdm9yaXRlID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGl0ZW1zLnJlbW92ZV9mYXZvcml0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzZWxlY3RlZEZpbGVzID0gSGVscGVycy5nZXRTZWxlY3RlZEZpbGVzKCk7XG5cbiAgICAgICAgaWYgKHNlbGVjdGVkRmlsZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKCFfLmluY2x1ZGVzKFJWX01FRElBX0NPTkZJRy5wZXJtaXNzaW9ucywgJ2ZpbGVzLmNyZWF0ZScpKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMubWFrZV9jb3B5ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIV8uaW5jbHVkZXMoUlZfTUVESUFfQ09ORklHLnBlcm1pc3Npb25zLCAnZmlsZXMuZWRpdCcpKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMucmVuYW1lID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIV8uaW5jbHVkZXMoUlZfTUVESUFfQ09ORklHLnBlcm1pc3Npb25zLCAnZmlsZXMudHJhc2gnKSkge1xuICAgICAgICAgICAgICAgIGl0ZW1zLnRyYXNoID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGl0ZW1zLnJlc3RvcmUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghXy5pbmNsdWRlcyhSVl9NRURJQV9DT05GSUcucGVybWlzc2lvbnMsICdmaWxlcy5kZWxldGUnKSkge1xuICAgICAgICAgICAgICAgIGl0ZW1zLmRlbGV0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFfLmluY2x1ZGVzKFJWX01FRElBX0NPTkZJRy5wZXJtaXNzaW9ucywgJ2ZpbGVzLmZhdm9yaXRlJykpIHtcbiAgICAgICAgICAgICAgICBpdGVtcy5mYXZvcml0ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBpdGVtcy5yZW1vdmVfZmF2b3JpdGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2FuX3ByZXZpZXcgPSBmYWxzZTtcbiAgICAgICAgXy5lYWNoKHNlbGVjdGVkRmlsZXMsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKF8uaW5jbHVkZXMoWydpbWFnZScsICd5b3V0dWJlJywgJ3BkZicsICd0ZXh0JywgJ3ZpZGVvJ10sIHZhbHVlLnR5cGUpKSB7XG4gICAgICAgICAgICAgICAgY2FuX3ByZXZpZXcgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIWNhbl9wcmV2aWV3KSB7XG4gICAgICAgICAgICBpdGVtcy5wcmV2aWV3ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGl0ZW1zO1xuICAgIH1cblxuICAgIHN0YXRpYyBfZm9sZGVyQ29udGV4dE1lbnUoKSB7XG4gICAgICAgIGxldCBpdGVtcyA9IENvbnRleHRNZW51U2VydmljZS5fZmlsZUNvbnRleHRNZW51KCk7XG5cbiAgICAgICAgaXRlbXMucHJldmlldyA9IHVuZGVmaW5lZDtcbiAgICAgICAgaXRlbXMuY29weV9saW5rID0gdW5kZWZpbmVkO1xuXG4gICAgICAgIHJldHVybiBpdGVtcztcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVzdHJveUNvbnRleHQoKSB7XG4gICAgICAgIGlmIChqUXVlcnkoKS5jb250ZXh0TWVudSkge1xuICAgICAgICAgICAgJC5jb250ZXh0TWVudSgnZGVzdHJveScpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9BcHAvU2VydmljZXMvQ29udGV4dE1lbnVTZXJ2aWNlLmpzIiwiaW1wb3J0IHtIZWxwZXJzfSBmcm9tICcuL0FwcC9IZWxwZXJzL0hlbHBlcnMnO1xuaW1wb3J0IHtNZWRpYUNvbmZpZ30gZnJvbSAnLi9BcHAvQ29uZmlnL01lZGlhQ29uZmlnJztcbmltcG9ydCB7Q29udGV4dE1lbnVTZXJ2aWNlfSBmcm9tIFwiLi9BcHAvU2VydmljZXMvQ29udGV4dE1lbnVTZXJ2aWNlXCI7XG5cbmV4cG9ydCBjbGFzcyBFZGl0b3JTZXJ2aWNlIHtcbiAgICBzdGF0aWMgZWRpdG9yU2VsZWN0RmlsZShzZWxlY3RlZEZpbGVzKSB7XG5cbiAgICAgICAgbGV0IGlzX2NrZWRpdG9yID0gSGVscGVycy5nZXRVcmxQYXJhbSgnQ0tFZGl0b3InKSB8fCBIZWxwZXJzLmdldFVybFBhcmFtKCdDS0VkaXRvckZ1bmNOdW0nKTtcblxuICAgICAgICBpZiAod2luZG93Lm9wZW5lciAmJiBpc19ja2VkaXRvcikge1xuICAgICAgICAgICAgbGV0IGZpcnN0SXRlbSA9IF8uZmlyc3Qoc2VsZWN0ZWRGaWxlcyk7XG5cbiAgICAgICAgICAgIHdpbmRvdy5vcGVuZXIuQ0tFRElUT1IudG9vbHMuY2FsbEZ1bmN0aW9uKEhlbHBlcnMuZ2V0VXJsUGFyYW0oJ0NLRWRpdG9yRnVuY051bScpLCBmaXJzdEl0ZW0udXJsKTtcblxuICAgICAgICAgICAgaWYgKHdpbmRvdy5vcGVuZXIpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIE5vIFdZU0lXWUcgZWRpdG9yIGZvdW5kLCB1c2UgY3VzdG9tIG1ldGhvZC5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgcnZNZWRpYSB7XG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3IsIG9wdGlvbnMpIHtcbiAgICAgICAgd2luZG93LnJ2TWVkaWEgPSB3aW5kb3cucnZNZWRpYSB8fCB7fTtcblxuICAgICAgICBsZXQgJGJvZHkgPSAkKCdib2R5Jyk7XG5cbiAgICAgICAgbGV0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgbXVsdGlwbGU6IHRydWUsXG4gICAgICAgICAgICB0eXBlOiAnKicsXG4gICAgICAgICAgICBvblNlbGVjdEZpbGVzOiBmdW5jdGlvbiAoZmlsZXMsICRlbCkge1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgb3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcblxuICAgICAgICBsZXQgY2xpY2tDYWxsYmFjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxldCAkY3VycmVudCA9ICQodGhpcyk7XG4gICAgICAgICAgICAkKCcjcnZfbWVkaWFfbW9kYWwnKS5tb2RhbCgpO1xuXG4gICAgICAgICAgICB3aW5kb3cucnZNZWRpYS5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgICAgIHdpbmRvdy5ydk1lZGlhLm9wdGlvbnMub3Blbl9pbiA9ICdtb2RhbCc7XG5cbiAgICAgICAgICAgIHdpbmRvdy5ydk1lZGlhLiRlbCA9ICRjdXJyZW50O1xuXG4gICAgICAgICAgICBNZWRpYUNvbmZpZy5yZXF1ZXN0X3BhcmFtcy5maWx0ZXIgPSAnZXZlcnl0aGluZyc7XG4gICAgICAgICAgICBIZWxwZXJzLnN0b3JlQ29uZmlnKCk7XG5cbiAgICAgICAgICAgIENvbnRleHRNZW51U2VydmljZS5kZXN0cm95Q29udGV4dCgpO1xuICAgICAgICAgICAgQ29udGV4dE1lbnVTZXJ2aWNlLmluaXRDb250ZXh0KCk7XG5cbiAgICAgICAgICAgIGxldCBlbGVfb3B0aW9ucyA9IHdpbmRvdy5ydk1lZGlhLiRlbC5kYXRhKCdydi1tZWRpYScpO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBlbGVfb3B0aW9ucyAhPT0gJ3VuZGVmaW5lZCcgJiYgZWxlX29wdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGVsZV9vcHRpb25zID0gZWxlX29wdGlvbnNbMF07XG4gICAgICAgICAgICAgICAgd2luZG93LnJ2TWVkaWEub3B0aW9ucyA9ICQuZXh0ZW5kKHRydWUsIHdpbmRvdy5ydk1lZGlhLm9wdGlvbnMsIGVsZV9vcHRpb25zIHx8IHt9KTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVsZV9vcHRpb25zLnNlbGVjdGVkX2ZpbGVfaWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5ydk1lZGlhLm9wdGlvbnMuaXNfcG9wdXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdy5ydk1lZGlhLm9wdGlvbnMuaXNfcG9wdXAgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5ydk1lZGlhLm9wdGlvbnMuaXNfcG9wdXAgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJCgnI3J2X21lZGlhX2JvZHkgLnJ2LW1lZGlhLWNvbnRhaW5lcicpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICQoJyNydl9tZWRpYV9ib2R5JykubG9hZChSVl9NRURJQV9VUkwucG9wdXAsIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGVydChkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICQoJyNydl9tZWRpYV9ib2R5JylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnbWVkaWEtbW9kYWwtbG9hZGluZycpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2xvc2VzdCgnLm1vZGFsLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnYmItbG9hZGluZycpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5maW5kKCcucnYtbWVkaWEtY29udGFpbmVyIC5qcy1jaGFuZ2UtYWN0aW9uW2RhdGEtdHlwZT1yZWZyZXNoXScpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICRib2R5Lm9uKCdjbGljaycsIHNlbGVjdG9yLCBjbGlja0NhbGxiYWNrKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNlbGVjdG9yLm9uKCdjbGljaycsIGNsaWNrQ2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxufVxuXG53aW5kb3cuUnZNZWRpYVN0YW5kQWxvbmUgPSBydk1lZGlhO1xuXG4kKCcuanMtaW5zZXJ0LXRvLWVkaXRvcicpLm9mZignY2xpY2snKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBzZWxlY3RlZEZpbGVzID0gSGVscGVycy5nZXRTZWxlY3RlZEZpbGVzKCk7XG4gICAgaWYgKF8uc2l6ZShzZWxlY3RlZEZpbGVzKSA+IDApIHtcbiAgICAgICAgRWRpdG9yU2VydmljZS5lZGl0b3JTZWxlY3RGaWxlKHNlbGVjdGVkRmlsZXMpO1xuICAgIH1cbn0pO1xuXG4kLmZuLnJ2TWVkaWEgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIGxldCAkc2VsZWN0b3IgPSAkKHRoaXMpO1xuXG4gICAgTWVkaWFDb25maWcucmVxdWVzdF9wYXJhbXMuZmlsdGVyID0gJ2V2ZXJ5dGhpbmcnO1xuICAgIGlmIChNZWRpYUNvbmZpZy5yZXF1ZXN0X3BhcmFtcy52aWV3X2luID09PSAndHJhc2gnKSB7XG4gICAgICAgICQoZG9jdW1lbnQpLmZpbmQoJy5qcy1pbnNlcnQtdG8tZWRpdG9yJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKGRvY3VtZW50KS5maW5kKCcuanMtaW5zZXJ0LXRvLWVkaXRvcicpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgIH1cbiAgICBIZWxwZXJzLnN0b3JlQ29uZmlnKCk7XG5cbiAgICBuZXcgcnZNZWRpYSgkc2VsZWN0b3IsIG9wdGlvbnMpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvaW50ZWdyYXRlLmpzIiwiaW1wb3J0IHtIZWxwZXJzfSBmcm9tICcuLi9IZWxwZXJzL0hlbHBlcnMnO1xuaW1wb3J0IHtBY3Rpb25zU2VydmljZX0gZnJvbSAnLi4vU2VydmljZXMvQWN0aW9uc1NlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgTWVkaWFMaXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ncm91cCA9IHt9O1xuICAgICAgICB0aGlzLmdyb3VwLmxpc3QgPSAkKCcjcnZfbWVkaWFfaXRlbXNfbGlzdCcpLmh0bWwoKTtcbiAgICAgICAgdGhpcy5ncm91cC50aWxlcyA9ICQoJyNydl9tZWRpYV9pdGVtc190aWxlcycpLmh0bWwoKTtcblxuICAgICAgICB0aGlzLml0ZW0gPSB7fTtcbiAgICAgICAgdGhpcy5pdGVtLmxpc3QgPSAkKCcjcnZfbWVkaWFfaXRlbXNfbGlzdF9lbGVtZW50JykuaHRtbCgpO1xuICAgICAgICB0aGlzLml0ZW0udGlsZXMgPSAkKCcjcnZfbWVkaWFfaXRlbXNfdGlsZXNfZWxlbWVudCcpLmh0bWwoKTtcblxuICAgICAgICB0aGlzLiRncm91cENvbnRhaW5lciA9ICQoJy5ydi1tZWRpYS1pdGVtcycpO1xuICAgIH1cblxuXG4gICAgcmVuZGVyRGF0YShkYXRhLCByZWxvYWQgPSBmYWxzZSwgbG9hZF9tb3JlX2ZpbGUgPSBmYWxzZSkge1xuICAgICAgICBsZXQgX3NlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgTWVkaWFDb25maWcgPSBIZWxwZXJzLmdldENvbmZpZ3MoKTtcbiAgICAgICAgbGV0IHRlbXBsYXRlID0gX3NlbGYuZ3JvdXBbSGVscGVycy5nZXRSZXF1ZXN0UGFyYW1zKCkudmlld190eXBlXTtcblxuICAgICAgICBsZXQgdmlld19pbiA9IEhlbHBlcnMuZ2V0UmVxdWVzdFBhcmFtcygpLnZpZXdfaW47XG5cbiAgICAgICAgaWYgKCFfLmluY2x1ZGVzKFsnYWxsX21lZGlhJywgJ3B1YmxpYycsICd0cmFzaCcsICdmYXZvcml0ZXMnLCAncmVjZW50J10sIHZpZXdfaW4pKSB7XG4gICAgICAgICAgICB2aWV3X2luID0gJ2FsbF9tZWRpYSc7XG4gICAgICAgIH1cblxuICAgICAgICB0ZW1wbGF0ZSA9IHRlbXBsYXRlXG4gICAgICAgICAgICAucmVwbGFjZSgvX19ub0l0ZW1JY29uX18vZ2ksIFJWX01FRElBX0NPTkZJRy50cmFuc2xhdGlvbnMubm9faXRlbVt2aWV3X2luXS5pY29uIHx8ICcnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL19fbm9JdGVtVGl0bGVfXy9naSwgUlZfTUVESUFfQ09ORklHLnRyYW5zbGF0aW9ucy5ub19pdGVtW3ZpZXdfaW5dLnRpdGxlIHx8ICcnKVxuICAgICAgICAgICAgLnJlcGxhY2UoL19fbm9JdGVtTWVzc2FnZV9fL2dpLCBSVl9NRURJQV9DT05GSUcudHJhbnNsYXRpb25zLm5vX2l0ZW1bdmlld19pbl0ubWVzc2FnZSB8fCAnJyk7XG5cbiAgICAgICAgbGV0ICRyZXN1bHQgPSAkKHRlbXBsYXRlKTtcbiAgICAgICAgbGV0ICRpdGVtc1dyYXBwZXIgPSAkcmVzdWx0LmZpbmQoJ3VsJyk7XG5cbiAgICAgICAgaWYgKGxvYWRfbW9yZV9maWxlICYmIHRoaXMuJGdyb3VwQ29udGFpbmVyLmZpbmQoJy5ydi1tZWRpYS1ncmlkIHVsJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgJGl0ZW1zV3JhcHBlciA9IHRoaXMuJGdyb3VwQ29udGFpbmVyLmZpbmQoJy5ydi1tZWRpYS1ncmlkIHVsJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoKF8uc2l6ZShkYXRhLmZvbGRlcnMpID4gMCB8fCBfLnNpemUoZGF0YS5maWxlcykgPiAwKSB8fCBsb2FkX21vcmVfZmlsZSkge1xuICAgICAgICAgICAgJCgnLnJ2LW1lZGlhLWl0ZW1zJykuYWRkQ2xhc3MoJ2hhcy1pdGVtcycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLnJ2LW1lZGlhLWl0ZW1zJykucmVtb3ZlQ2xhc3MoJ2hhcy1pdGVtcycpO1xuICAgICAgICB9XG5cbiAgICAgICAgXy5mb3JFYWNoKGRhdGEuZm9sZGVycywgZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSBfc2VsZi5pdGVtW0hlbHBlcnMuZ2V0UmVxdWVzdFBhcmFtcygpLnZpZXdfdHlwZV07XG4gICAgICAgICAgICBpdGVtID0gaXRlbVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9fX3R5cGVfXy9naSwgJ2ZvbGRlcicpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL19faWRfXy9naSwgdmFsdWUuaWQpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL19fbmFtZV9fL2dpLCB2YWx1ZS5uYW1lIHx8ICcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9fX3NpemVfXy9naSwgJycpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL19fZGF0ZV9fL2dpLCB2YWx1ZS5jcmVhdGVkX2F0IHx8ICcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9fX3RodW1iX18vZ2ksICc8aSBjbGFzcz1cImZhIGZhLWZvbGRlci1vXCI+PC9pPicpO1xuICAgICAgICAgICAgbGV0ICRpdGVtID0gJChpdGVtKTtcbiAgICAgICAgICAgIF8uZm9yRWFjaCh2YWx1ZSwgZnVuY3Rpb24gKHZhbCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAkaXRlbS5kYXRhKGluZGV4LCB2YWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkaXRlbS5kYXRhKCdpc19mb2xkZXInLCB0cnVlKTtcbiAgICAgICAgICAgICRpdGVtLmRhdGEoJ2ljb24nLCBNZWRpYUNvbmZpZy5pY29ucy5mb2xkZXIpO1xuICAgICAgICAgICAgJGl0ZW1zV3JhcHBlci5hcHBlbmQoJGl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBfLmZvckVhY2goZGF0YS5maWxlcywgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IF9zZWxmLml0ZW1bSGVscGVycy5nZXRSZXF1ZXN0UGFyYW1zKCkudmlld190eXBlXTtcbiAgICAgICAgICAgIGl0ZW0gPSBpdGVtXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL19fdHlwZV9fL2dpLCAnZmlsZScpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL19faWRfXy9naSwgdmFsdWUuaWQpXG4gICAgICAgICAgICAgICAgLnJlcGxhY2UoL19fbmFtZV9fL2dpLCB2YWx1ZS5uYW1lIHx8ICcnKVxuICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9fX3NpemVfXy9naSwgdmFsdWUuc2l6ZSB8fCAnJylcbiAgICAgICAgICAgICAgICAucmVwbGFjZSgvX19kYXRlX18vZ2ksIHZhbHVlLmNyZWF0ZWRfYXQgfHwgJycpO1xuICAgICAgICAgICAgaWYgKEhlbHBlcnMuZ2V0UmVxdWVzdFBhcmFtcygpLnZpZXdfdHlwZSA9PT0gJ2xpc3QnKSB7XG4gICAgICAgICAgICAgICAgaXRlbSA9IGl0ZW1cbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL19fdGh1bWJfXy9naSwgJzxpIGNsYXNzPVwiJyArIHZhbHVlLmljb24gKyAnXCI+PC9pPicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHZhbHVlLm1pbWVfdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd5b3V0dWJlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL19fdGh1bWJfXy9naSwgJzxpbWcgc3JjPVwiJyArIHZhbHVlLm9wdGlvbnMudGh1bWIgKyAnXCIgYWx0PVwiJyArIHZhbHVlLm5hbWUgKyAnXCI+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBpdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL19fdGh1bWJfXy9naSwgdmFsdWUudGh1bWIgPyAnPGltZyBzcmM9XCInICsgdmFsdWUudGh1bWIgKyAnXCIgYWx0PVwiJyArIHZhbHVlLm5hbWUgKyAnXCI+JyA6ICc8aSBjbGFzcz1cIicgKyB2YWx1ZS5pY29uICsgJ1wiPjwvaT4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCAkaXRlbSA9ICQoaXRlbSk7XG4gICAgICAgICAgICAkaXRlbS5kYXRhKCdpc19mb2xkZXInLCBmYWxzZSk7XG4gICAgICAgICAgICBfLmZvckVhY2godmFsdWUsIGZ1bmN0aW9uICh2YWwsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgJGl0ZW0uZGF0YShpbmRleCwgdmFsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJGl0ZW1zV3JhcHBlci5hcHBlbmQoJGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlbG9hZCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF9zZWxmLiRncm91cENvbnRhaW5lci5lbXB0eSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxvYWRfbW9yZV9maWxlICYmIHRoaXMuJGdyb3VwQ29udGFpbmVyLmZpbmQoJy5ydi1tZWRpYS1ncmlkIHVsJykubGVuZ3RoID4gMCkge1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfc2VsZi4kZ3JvdXBDb250YWluZXIuYXBwZW5kKCRyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIF9zZWxmLiRncm91cENvbnRhaW5lci5maW5kKCcubG9hZGluZy13cmFwcGVyJykucmVtb3ZlKCk7XG4gICAgICAgIEFjdGlvbnNTZXJ2aWNlLmhhbmRsZURyb3Bkb3duKCk7XG5cbiAgICAgICAgLy90cmlnZ2VyIGV2ZW50IGNsaWNrIGZvciBmaWxlIHNlbGVjdGVkXG4gICAgICAgICQoJy5qcy1tZWRpYS1saXN0LXRpdGxlW2RhdGEtaWQ9JyArIGRhdGEuc2VsZWN0ZWRfZmlsZV9pZCArICddJykudHJpZ2dlcignY2xpY2snKTtcbiAgICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0FwcC9WaWV3cy9NZWRpYUxpc3QuanMiLCJpbXBvcnQge01lZGlhQ29uZmlnfSBmcm9tICcuL0FwcC9Db25maWcvTWVkaWFDb25maWcnO1xuaW1wb3J0IHtIZWxwZXJzfSBmcm9tICcuL0FwcC9IZWxwZXJzL0hlbHBlcnMnO1xuaW1wb3J0IHtNZWRpYVNlcnZpY2V9IGZyb20gJy4vQXBwL1NlcnZpY2VzL01lZGlhU2VydmljZSc7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuL0FwcC9TZXJ2aWNlcy9NZXNzYWdlU2VydmljZSc7XG5pbXBvcnQge0ZvbGRlclNlcnZpY2V9IGZyb20gJy4vQXBwL1NlcnZpY2VzL0ZvbGRlclNlcnZpY2UnO1xuaW1wb3J0IHtVcGxvYWRTZXJ2aWNlfSBmcm9tICcuL0FwcC9TZXJ2aWNlcy9VcGxvYWRTZXJ2aWNlJztcbmltcG9ydCB7QWN0aW9uc1NlcnZpY2V9IGZyb20gJy4vQXBwL1NlcnZpY2VzL0FjdGlvbnNTZXJ2aWNlJztcbmltcG9ydCB7RXh0ZXJuYWxTZXJ2aWNlc30gZnJvbSAnLi9BcHAvRXh0ZXJuYWxzL0V4dGVybmFsU2VydmljZXMnO1xuaW1wb3J0IHtFZGl0b3JTZXJ2aWNlfSBmcm9tICcuL2ludGVncmF0ZSc7XG5cbmNsYXNzIE1lZGlhTWFuYWdlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuTWVkaWFTZXJ2aWNlID0gbmV3IE1lZGlhU2VydmljZSgpO1xuICAgICAgICB0aGlzLlVwbG9hZFNlcnZpY2UgPSBuZXcgVXBsb2FkU2VydmljZSgpO1xuICAgICAgICB0aGlzLkZvbGRlclNlcnZpY2UgPSBuZXcgRm9sZGVyU2VydmljZSgpO1xuXG4gICAgICAgIG5ldyBFeHRlcm5hbFNlcnZpY2VzKCk7XG5cbiAgICAgICAgdGhpcy4kYm9keSA9ICQoJ2JvZHknKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBIZWxwZXJzLnJlc2V0UGFnaW5hdGlvbigpO1xuICAgICAgICB0aGlzLnNldHVwTGF5b3V0KCk7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVNZWRpYUxpc3QoKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VWaWV3VHlwZSgpO1xuICAgICAgICB0aGlzLmNoYW5nZUZpbHRlcigpO1xuICAgICAgICB0aGlzLnNlYXJjaCgpO1xuICAgICAgICB0aGlzLmhhbmRsZUFjdGlvbnMoKTtcblxuICAgICAgICB0aGlzLlVwbG9hZFNlcnZpY2UuaW5pdCgpO1xuXG4gICAgICAgIHRoaXMuaGFuZGxlTW9kYWxzKCk7XG4gICAgICAgIHRoaXMuc2Nyb2xsR2V0TW9yZSgpO1xuICAgIH1cblxuICAgIHNldHVwTGF5b3V0KCkge1xuICAgICAgICAvKipcbiAgICAgICAgICogU2lkZWJhclxuICAgICAgICAgKi9cbiAgICAgICAgbGV0ICRjdXJyZW50X2ZpbHRlciA9ICQoJy5qcy1ydi1tZWRpYS1jaGFuZ2UtZmlsdGVyW2RhdGEtdHlwZT1cImZpbHRlclwiXVtkYXRhLXZhbHVlPVwiJyArIEhlbHBlcnMuZ2V0UmVxdWVzdFBhcmFtcygpLmZpbHRlciArICdcIl0nKTtcblxuICAgICAgICAkY3VycmVudF9maWx0ZXIuY2xvc2VzdCgnbGknKVxuICAgICAgICAgICAgLmFkZENsYXNzKCdhY3RpdmUnKVxuICAgICAgICAgICAgLmNsb3Nlc3QoJy5kcm9wZG93bicpLmZpbmQoJy5qcy1ydi1tZWRpYS1maWx0ZXItY3VycmVudCcpLmh0bWwoJygnICsgJGN1cnJlbnRfZmlsdGVyLmh0bWwoKSArICcpJyk7XG5cbiAgICAgICAgbGV0ICRjdXJyZW50X3ZpZXdfaW4gPSAkKCcuanMtcnYtbWVkaWEtY2hhbmdlLWZpbHRlcltkYXRhLXR5cGU9XCJ2aWV3X2luXCJdW2RhdGEtdmFsdWU9XCInICsgSGVscGVycy5nZXRSZXF1ZXN0UGFyYW1zKCkudmlld19pbiArICdcIl0nKTtcblxuICAgICAgICAkY3VycmVudF92aWV3X2luLmNsb3Nlc3QoJ2xpJylcbiAgICAgICAgICAgIC5hZGRDbGFzcygnYWN0aXZlJylcbiAgICAgICAgICAgIC5jbG9zZXN0KCcuZHJvcGRvd24nKS5maW5kKCcuanMtcnYtbWVkaWEtZmlsdGVyLWN1cnJlbnQnKS5odG1sKCcoJyArICRjdXJyZW50X3ZpZXdfaW4uaHRtbCgpICsgJyknKTtcblxuICAgICAgICBpZiAoSGVscGVycy5pc1VzZUluTW9kYWwoKSkge1xuICAgICAgICAgICAgJCgnLnJ2LW1lZGlhLWZvb3RlcicpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTb3J0XG4gICAgICAgICAqL1xuICAgICAgICAkKCcuanMtcnYtbWVkaWEtY2hhbmdlLWZpbHRlcltkYXRhLXR5cGU9XCJzb3J0X2J5XCJdW2RhdGEtdmFsdWU9XCInICsgSGVscGVycy5nZXRSZXF1ZXN0UGFyYW1zKCkuc29ydF9ieSArICdcIl0nKVxuICAgICAgICAgICAgLmNsb3Nlc3QoJ2xpJylcbiAgICAgICAgICAgIC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERldGFpbHMgcGFuZVxuICAgICAgICAgKi9cbiAgICAgICAgbGV0ICRtZWRpYURldGFpbHNDaGVja2JveCA9ICQoJyNtZWRpYV9kZXRhaWxzX2NvbGxhcHNlJyk7XG4gICAgICAgICRtZWRpYURldGFpbHNDaGVja2JveC5wcm9wKCdjaGVja2VkJywgTWVkaWFDb25maWcuaGlkZV9kZXRhaWxzX3BhbmUgfHwgZmFsc2UpO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICQoJy5ydi1tZWRpYS1kZXRhaWxzJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICB9LCAzMDApO1xuICAgICAgICAkbWVkaWFEZXRhaWxzQ2hlY2tib3gub24oJ2NoYW5nZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIE1lZGlhQ29uZmlnLmhpZGVfZGV0YWlsc19wYW5lID0gJCh0aGlzKS5pcygnOmNoZWNrZWQnKTtcbiAgICAgICAgICAgIEhlbHBlcnMuc3RvcmVDb25maWcoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2NsaWNrJywgJ2J1dHRvbltkYXRhLWRpc21pc3MtbW9kYWxdJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGV0IG1vZGFsID0gJCh0aGlzKS5kYXRhKCdkaXNtaXNzLW1vZGFsJyk7XG4gICAgICAgICAgICAkKG1vZGFsKS5tb2RhbCgnaGlkZScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVNZWRpYUxpc3QoKSB7XG4gICAgICAgIGxldCBfc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgLypDdHJsIGtleSBpbiBXaW5kb3dzKi9cbiAgICAgICAgbGV0IGN0cmxfa2V5ID0gZmFsc2U7XG5cbiAgICAgICAgLypDb21tYW5kIGtleSBpbiBNQUMqL1xuICAgICAgICBsZXQgbWV0YV9rZXkgPSBmYWxzZTtcblxuICAgICAgICAvKlNoaWZ0IGtleSovXG4gICAgICAgIGxldCBzaGlmdF9rZXkgPSBmYWxzZTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbigna2V5dXAga2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvKlVzZXIgaG9sZCBjdHJsIGtleSovXG4gICAgICAgICAgICBjdHJsX2tleSA9IGUuY3RybEtleTtcbiAgICAgICAgICAgIC8qVXNlciBob2xkIGNvbW1hbmQga2V5Ki9cbiAgICAgICAgICAgIG1ldGFfa2V5ID0gZS5tZXRhS2V5O1xuICAgICAgICAgICAgLypVc2VyIGhvbGQgc2hpZnQga2V5Ki9cbiAgICAgICAgICAgIHNoaWZ0X2tleSA9IGUuc2hpZnRLZXk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF9zZWxmLiRib2R5XG4gICAgICAgICAgICAub24oJ2NsaWNrJywgJy5qcy1tZWRpYS1saXN0LXRpdGxlJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBsZXQgJGN1cnJlbnQgPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNoaWZ0X2tleSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZmlyc3RJdGVtID0gXy5maXJzdChIZWxwZXJzLmdldFNlbGVjdGVkSXRlbXMoKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmaXJzdEluZGV4ID0gZmlyc3RJdGVtLmluZGV4X2tleTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50SW5kZXggPSAkY3VycmVudC5pbmRleCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnJ2LW1lZGlhLWl0ZW1zIGxpJykuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPiBmaXJzdEluZGV4ICYmIGluZGV4IDw9IGN1cnJlbnRJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJykucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdHJsX2tleSAmJiAhbWV0YV9rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRjdXJyZW50LmNsb3Nlc3QoJy5ydi1tZWRpYS1pdGVtcycpLmZpbmQoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCAkbGluZUNoZWNrQm94ID0gJGN1cnJlbnQuZmluZCgnaW5wdXRbdHlwZT1jaGVja2JveF0nKTtcbiAgICAgICAgICAgICAgICAkbGluZUNoZWNrQm94LnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBBY3Rpb25zU2VydmljZS5oYW5kbGVEcm9wZG93bigpO1xuXG4gICAgICAgICAgICAgICAgX3NlbGYuTWVkaWFTZXJ2aWNlLmdldEZpbGVEZXRhaWxzKCRjdXJyZW50LmRhdGEoKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdkYmxjbGljaycsICcuanMtbWVkaWEtbGlzdC10aXRsZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9ICQodGhpcykuZGF0YSgpO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmlzX2ZvbGRlciA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBIZWxwZXJzLnJlc2V0UGFnaW5hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBfc2VsZi5Gb2xkZXJTZXJ2aWNlLmNoYW5nZUZvbGRlcihkYXRhLmlkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIUhlbHBlcnMuaXNVc2VJbk1vZGFsKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIEFjdGlvbnNTZXJ2aWNlLmhhbmRsZVByZXZpZXcoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChIZWxwZXJzLmdldENvbmZpZ3MoKS5yZXF1ZXN0X3BhcmFtcy52aWV3X2luICE9PSAndHJhc2gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRGaWxlcyA9IEhlbHBlcnMuZ2V0U2VsZWN0ZWRGaWxlcygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF8uc2l6ZShzZWxlY3RlZEZpbGVzKSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0b3JTZXJ2aWNlLmVkaXRvclNlbGVjdEZpbGUoc2VsZWN0ZWRGaWxlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdkYmxjbGljaycsICcuanMtdXAtb25lLWxldmVsJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBsZXQgY291bnQgPSAkKCcucnYtbWVkaWEtYnJlYWRjcnVtYiAuYnJlYWRjcnVtYiBsaScpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAkKCcucnYtbWVkaWEtYnJlYWRjcnVtYiAuYnJlYWRjcnVtYiBsaTpudGgtY2hpbGQoJyArIChjb3VudCAtIDEpICsgJykgYScpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdjb250ZXh0bWVudScsICcuanMtY29udGV4dC1tZW51JywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoISQodGhpcykuZmluZCgnaW5wdXRbdHlwZT1jaGVja2JveF0nKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbignY2xpY2sgY29udGV4dG1lbnUnLCAnLnJ2LW1lZGlhLWl0ZW1zJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoIV8uc2l6ZShlLnRhcmdldC5jbG9zZXN0KCcuanMtY29udGV4dC1tZW51JykpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5ydi1tZWRpYS1pdGVtcyBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAkKCcucnYtZHJvcGRvd24tYWN0aW9ucycpLmFkZENsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgICAgICBfc2VsZi5NZWRpYVNlcnZpY2UuZ2V0RmlsZURldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZhIGZhLXBpY3R1cmUtbycsXG4gICAgICAgICAgICAgICAgICAgICAgICBub3RoaW5nX3NlbGVjdGVkOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgO1xuICAgIH1cblxuICAgIGNoYW5nZVZpZXdUeXBlKCkge1xuICAgICAgICBsZXQgX3NlbGYgPSB0aGlzO1xuICAgICAgICBfc2VsZi4kYm9keS5vbignY2xpY2snLCAnLmpzLXJ2LW1lZGlhLWNoYW5nZS12aWV3LXR5cGUgLmJ0bicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxldCAkY3VycmVudCA9ICQodGhpcyk7XG4gICAgICAgICAgICBpZiAoJGN1cnJlbnQuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJGN1cnJlbnQuY2xvc2VzdCgnLmpzLXJ2LW1lZGlhLWNoYW5nZS12aWV3LXR5cGUnKS5maW5kKCcuYnRuJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJGN1cnJlbnQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuXG4gICAgICAgICAgICBNZWRpYUNvbmZpZy5yZXF1ZXN0X3BhcmFtcy52aWV3X3R5cGUgPSAkY3VycmVudC5kYXRhKCd0eXBlJyk7XG5cbiAgICAgICAgICAgIGlmICgkY3VycmVudC5kYXRhKCd0eXBlJykgPT09ICd0cmFzaCcpIHtcbiAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5maW5kKCcuanMtaW5zZXJ0LXRvLWVkaXRvcicpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoZG9jdW1lbnQpLmZpbmQoJy5qcy1pbnNlcnQtdG8tZWRpdG9yJykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEhlbHBlcnMuc3RvcmVDb25maWcoKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBSVl9NRURJQV9DT05GSUcucGFnaW5hdGlvbiAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgUlZfTUVESUFfQ09ORklHLnBhZ2luYXRpb24ucGFnZWQgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgUlZfTUVESUFfQ09ORklHLnBhZ2luYXRpb24ucGFnZWQgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgX3NlbGYuTWVkaWFTZXJ2aWNlLmdldE1lZGlhKHRydWUsIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQoJy5qcy1ydi1tZWRpYS1jaGFuZ2Utdmlldy10eXBlIC5idG5bZGF0YS10eXBlPVwiJyArIEhlbHBlcnMuZ2V0UmVxdWVzdFBhcmFtcygpLnZpZXdfdHlwZSArICdcIl0nKS50cmlnZ2VyKCdjbGljaycpO1xuXG4gICAgICAgIHRoaXMuYmluZEludGVncmF0ZU1vZGFsRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgY2hhbmdlRmlsdGVyKCkge1xuICAgICAgICBsZXQgX3NlbGYgPSB0aGlzO1xuICAgICAgICBfc2VsZi4kYm9keS5vbignY2xpY2snLCAnLmpzLXJ2LW1lZGlhLWNoYW5nZS1maWx0ZXInLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoIUhlbHBlcnMuaXNPbkFqYXhMb2FkaW5nKCkpIHtcbiAgICAgICAgICAgICAgICBsZXQgJGN1cnJlbnQgPSAkKHRoaXMpO1xuICAgICAgICAgICAgICAgIGxldCAkcGFyZW50ID0gJGN1cnJlbnQuY2xvc2VzdCgndWwnKTtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9ICRjdXJyZW50LmRhdGEoKTtcblxuICAgICAgICAgICAgICAgIE1lZGlhQ29uZmlnLnJlcXVlc3RfcGFyYW1zW2RhdGEudHlwZV0gPSBkYXRhLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gJ3ZpZXdfaW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIE1lZGlhQ29uZmlnLnJlcXVlc3RfcGFyYW1zLmZvbGRlcl9pZCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnZhbHVlID09PSAndHJhc2gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5maW5kKCcuanMtaW5zZXJ0LXRvLWVkaXRvcicpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKGRvY3VtZW50KS5maW5kKCcuanMtaW5zZXJ0LXRvLWVkaXRvcicpLnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJGN1cnJlbnQuY2xvc2VzdCgnLmRyb3Bkb3duJykuZmluZCgnLmpzLXJ2LW1lZGlhLWZpbHRlci1jdXJyZW50JykuaHRtbCgnKCcgKyAkY3VycmVudC5odG1sKCkgKyAnKScpO1xuXG4gICAgICAgICAgICAgICAgSGVscGVycy5zdG9yZUNvbmZpZygpO1xuICAgICAgICAgICAgICAgIE1lZGlhU2VydmljZS5yZWZyZXNoRmlsdGVyKCk7XG5cbiAgICAgICAgICAgICAgICBIZWxwZXJzLnJlc2V0UGFnaW5hdGlvbigpO1xuICAgICAgICAgICAgICAgIF9zZWxmLk1lZGlhU2VydmljZS5nZXRNZWRpYSh0cnVlKTtcblxuICAgICAgICAgICAgICAgICRwYXJlbnQuZmluZCgnPiBsaScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkY3VycmVudC5jbG9zZXN0KCdsaScpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2VhcmNoKCkge1xuICAgICAgICBsZXQgX3NlbGYgPSB0aGlzO1xuICAgICAgICAkKCcuaW5wdXQtc2VhcmNoLXdyYXBwZXIgaW5wdXRbdHlwZT1cInRleHRcIl0nKS52YWwoSGVscGVycy5nZXRSZXF1ZXN0UGFyYW1zKCkuc2VhcmNoIHx8ICcnKTtcbiAgICAgICAgX3NlbGYuJGJvZHkub24oJ3N1Ym1pdCcsICcuaW5wdXQtc2VhcmNoLXdyYXBwZXInLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBNZWRpYUNvbmZpZy5yZXF1ZXN0X3BhcmFtcy5zZWFyY2ggPSAkKHRoaXMpLmZpbmQoJ2lucHV0W3R5cGU9XCJ0ZXh0XCJdJykudmFsKCk7XG5cbiAgICAgICAgICAgIEhlbHBlcnMuc3RvcmVDb25maWcoKTtcbiAgICAgICAgICAgIEhlbHBlcnMucmVzZXRQYWdpbmF0aW9uKCk7XG4gICAgICAgICAgICBfc2VsZi5NZWRpYVNlcnZpY2UuZ2V0TWVkaWEodHJ1ZSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgaGFuZGxlQWN0aW9ucygpIHtcbiAgICAgICAgbGV0IF9zZWxmID0gdGhpcztcblxuICAgICAgICBfc2VsZi4kYm9keVxuICAgICAgICAgICAgLm9uKCdjbGljaycsICcucnYtbWVkaWEtYWN0aW9ucyAuanMtY2hhbmdlLWFjdGlvbltkYXRhLXR5cGU9XCJyZWZyZXNoXCJdJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIEhlbHBlcnMucmVzZXRQYWdpbmF0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICBsZXQgZWxlX29wdGlvbnMgPSB0eXBlb2Ygd2luZG93LnJ2TWVkaWEuJGVsICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5ydk1lZGlhLiRlbC5kYXRhKCdydi1tZWRpYScpIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlX29wdGlvbnMgIT09ICd1bmRlZmluZWQnICYmIGVsZV9vcHRpb25zLmxlbmd0aCA+IDAgJiYgdHlwZW9mIGVsZV9vcHRpb25zWzBdLnNlbGVjdGVkX2ZpbGVfaWQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIF9zZWxmLk1lZGlhU2VydmljZS5nZXRNZWRpYSh0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICAgICAgX3NlbGYuTWVkaWFTZXJ2aWNlLmdldE1lZGlhKHRydWUsIGZhbHNlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgJy5ydi1tZWRpYS1pdGVtcyBsaS5uby1pdGVtcycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgJCgnLnJ2LW1lZGlhLWhlYWRlciAucnYtbWVkaWEtdG9wLWhlYWRlciAucnYtbWVkaWEtYWN0aW9ucyAuanMtZHJvcHpvbmUtdXBsb2FkJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ3N1Ym1pdCcsICcuZm9ybS1hZGQtZm9sZGVyJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBsZXQgJGlucHV0ID0gJCh0aGlzKS5maW5kKCdpbnB1dFt0eXBlPXRleHRdJyk7XG4gICAgICAgICAgICAgICAgbGV0IGZvbGRlck5hbWUgPSAkaW5wdXQudmFsKCk7XG4gICAgICAgICAgICAgICAgX3NlbGYuRm9sZGVyU2VydmljZS5jcmVhdGUoZm9sZGVyTmFtZSk7XG4gICAgICAgICAgICAgICAgJGlucHV0LnZhbCgnJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm9uKCdjbGljaycsICcuanMtY2hhbmdlLWZvbGRlcicsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbGV0IGZvbGRlcklkID0gJCh0aGlzKS5kYXRhKCdmb2xkZXInKTtcbiAgICAgICAgICAgICAgICBIZWxwZXJzLnJlc2V0UGFnaW5hdGlvbigpO1xuICAgICAgICAgICAgICAgIF9zZWxmLkZvbGRlclNlcnZpY2UuY2hhbmdlRm9sZGVyKGZvbGRlcklkKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAub24oJ2NsaWNrJywgJy5qcy1maWxlcy1hY3Rpb24nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIEFjdGlvbnNTZXJ2aWNlLmhhbmRsZUdsb2JhbEFjdGlvbigkKHRoaXMpLmRhdGEoJ2FjdGlvbicpLCBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIEhlbHBlcnMucmVzZXRQYWdpbmF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIF9zZWxmLk1lZGlhU2VydmljZS5nZXRNZWRpYSh0cnVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIDtcbiAgICB9XG5cbiAgICBoYW5kbGVNb2RhbHMoKSB7XG4gICAgICAgIGxldCBfc2VsZiA9IHRoaXM7XG4gICAgICAgIC8qUmVuYW1lIGZpbGVzKi9cbiAgICAgICAgX3NlbGYuJGJvZHkub24oJ3Nob3cuYnMubW9kYWwnLCAnI21vZGFsX3JlbmFtZV9pdGVtcycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgQWN0aW9uc1NlcnZpY2UucmVuZGVyUmVuYW1lSXRlbXMoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIF9zZWxmLiRib2R5Lm9uKCdzdWJtaXQnLCAnI21vZGFsX3JlbmFtZV9pdGVtcyAuZm9ybS1yZW5hbWUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsZXQgaXRlbXMgPSBbXTtcbiAgICAgICAgICAgIGxldCAkZm9ybSA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgICQoJyNtb2RhbF9yZW5hbWVfaXRlbXMgLmZvcm0tY29udHJvbCcpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGxldCAkY3VycmVudCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSAkY3VycmVudC5jbG9zZXN0KCcuZm9ybS1ncm91cCcpLmRhdGEoKTtcbiAgICAgICAgICAgICAgICBkYXRhLm5hbWUgPSAkY3VycmVudC52YWwoKTtcbiAgICAgICAgICAgICAgICBpdGVtcy5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIEFjdGlvbnNTZXJ2aWNlLnByb2Nlc3NBY3Rpb24oe1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJGZvcm0uZGF0YSgnYWN0aW9uJyksXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGl0ZW1zXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgJGZvcm0uY2xvc2VzdCgnLm1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgX3NlbGYuTWVkaWFTZXJ2aWNlLmdldE1lZGlhKHRydWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoJyNtb2RhbF9yZW5hbWVfaXRlbXMgLmZvcm0tZ3JvdXAnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCAkY3VycmVudCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5pbmNsdWRlcyhyZXMuZGF0YSwgJGN1cnJlbnQuZGF0YSgnaWQnKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkY3VycmVudC5hZGRDbGFzcygnaGFzLWVycm9yJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRjdXJyZW50LnJlbW92ZUNsYXNzKCdoYXMtZXJyb3InKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qRGVsZXRlIGZpbGVzKi9cbiAgICAgICAgX3NlbGYuJGJvZHkub24oJ3N1Ym1pdCcsICcuZm9ybS1kZWxldGUtaXRlbXMnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsZXQgaXRlbXMgPSBbXTtcbiAgICAgICAgICAgIGxldCAkZm9ybSA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgIF8uZWFjaChIZWxwZXJzLmdldFNlbGVjdGVkSXRlbXMoKSwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB2YWx1ZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgaXNfZm9sZGVyOiB2YWx1ZS5pc19mb2xkZXIsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBBY3Rpb25zU2VydmljZS5wcm9jZXNzQWN0aW9uKHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICRmb3JtLmRhdGEoJ2FjdGlvbicpLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBpdGVtc1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgICRmb3JtLmNsb3Nlc3QoJy5tb2RhbCcpLm1vZGFsKCdoaWRlJyk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgX3NlbGYuTWVkaWFTZXJ2aWNlLmdldE1lZGlhKHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvKkVtcHR5IHRyYXNoKi9cbiAgICAgICAgX3NlbGYuJGJvZHkub24oJ3N1Ym1pdCcsICcjbW9kYWxfZW1wdHlfdHJhc2ggLnJ2LWZvcm0nLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsZXQgJGZvcm0gPSAkKHRoaXMpO1xuXG4gICAgICAgICAgICBBY3Rpb25zU2VydmljZS5wcm9jZXNzQWN0aW9uKHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICRmb3JtLmRhdGEoJ2FjdGlvbicpXG4gICAgICAgICAgICB9LCBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgJGZvcm0uY2xvc2VzdCgnLm1vZGFsJykubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgICAgICAgICBfc2VsZi5NZWRpYVNlcnZpY2UuZ2V0TWVkaWEodHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKE1lZGlhQ29uZmlnLnJlcXVlc3RfcGFyYW1zLnZpZXdfaW4gPT09ICd0cmFzaCcpIHtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmZpbmQoJy5qcy1pbnNlcnQtdG8tZWRpdG9yJykucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoZG9jdW1lbnQpLmZpbmQoJy5qcy1pbnNlcnQtdG8tZWRpdG9yJykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmJpbmRJbnRlZ3JhdGVNb2RhbEV2ZW50cygpO1xuICAgIH1cblxuICAgIGNoZWNrRmlsZVR5cGVTZWxlY3Qoc2VsZWN0ZWRGaWxlcykge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5ydk1lZGlhLiRlbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGxldCBmaXJzdEl0ZW0gPSBfLmZpcnN0KHNlbGVjdGVkRmlsZXMpO1xuICAgICAgICAgICAgbGV0IGVsZV9vcHRpb25zID0gd2luZG93LnJ2TWVkaWEuJGVsLmRhdGEoJ3J2LW1lZGlhJyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGVsZV9vcHRpb25zICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZWxlX29wdGlvbnNbMF0gIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBlbGVfb3B0aW9uc1swXS5maWxlX3R5cGUgIT09ICd1bmRlZmluZWQnICYmIGZpcnN0SXRlbSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICAmJiBmaXJzdEl0ZW0udHlwZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWVsZV9vcHRpb25zWzBdLmZpbGVfdHlwZS5tYXRjaChmaXJzdEl0ZW0udHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZWxlX29wdGlvbnNbMF0uZXh0X2FsbG93ZWQgIT09ICd1bmRlZmluZWQnICYmICQuaXNBcnJheShlbGVfb3B0aW9uc1swXS5leHRfYWxsb3dlZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkLmluQXJyYXkoZmlyc3RJdGVtLm1pbWVfdHlwZSwgZWxlX29wdGlvbnNbMF0uZXh0X2FsbG93ZWQpID09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGJpbmRJbnRlZ3JhdGVNb2RhbEV2ZW50cygpIHtcbiAgICAgICAgbGV0ICRtYWluX21vZGFsID0gJCgnI3J2X21lZGlhX21vZGFsJyk7XG4gICAgICAgIGxldCBfc2VsZiA9IHRoaXM7XG4gICAgICAgICRtYWluX21vZGFsLm9mZignY2xpY2snLCAnLmpzLWluc2VydC10by1lZGl0b3InKS5vbignY2xpY2snLCAnLmpzLWluc2VydC10by1lZGl0b3InLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRGaWxlcyA9IEhlbHBlcnMuZ2V0U2VsZWN0ZWRGaWxlcygpO1xuICAgICAgICAgICAgaWYgKF8uc2l6ZShzZWxlY3RlZEZpbGVzKSA+IDApIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cucnZNZWRpYS5vcHRpb25zLm9uU2VsZWN0RmlsZXMoc2VsZWN0ZWRGaWxlcywgd2luZG93LnJ2TWVkaWEuJGVsKTtcbiAgICAgICAgICAgICAgICBpZiAoX3NlbGYuY2hlY2tGaWxlVHlwZVNlbGVjdChzZWxlY3RlZEZpbGVzKSkge1xuICAgICAgICAgICAgICAgICAgICAkbWFpbl9tb2RhbC5maW5kKCcuY2xvc2UnKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJG1haW5fbW9kYWwub2ZmKCdkYmxjbGljaycsICcuanMtbWVkaWEtbGlzdC10aXRsZScpLm9uKCdkYmxjbGljaycsICcuanMtbWVkaWEtbGlzdC10aXRsZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChIZWxwZXJzLmdldENvbmZpZ3MoKS5yZXF1ZXN0X3BhcmFtcy52aWV3X2luICE9PSAndHJhc2gnKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlbGVjdGVkRmlsZXMgPSBIZWxwZXJzLmdldFNlbGVjdGVkRmlsZXMoKTtcbiAgICAgICAgICAgICAgICBpZiAoXy5zaXplKHNlbGVjdGVkRmlsZXMpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cucnZNZWRpYS5vcHRpb25zLm9uU2VsZWN0RmlsZXMoc2VsZWN0ZWRGaWxlcywgd2luZG93LnJ2TWVkaWEuJGVsKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9zZWxmLmNoZWNrRmlsZVR5cGVTZWxlY3Qoc2VsZWN0ZWRGaWxlcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRtYWluX21vZGFsLmZpbmQoJy5jbG9zZScpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIEFjdGlvbnNTZXJ2aWNlLmhhbmRsZVByZXZpZXcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldHVwU2VjdXJpdHkoKSB7XG4gICAgICAgICQuYWpheFNldHVwKHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnWC1DU1JGLVRPS0VOJzogJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8vc2Nyb2xsIGdldCBtb3JlIG1lZGlhXG4gICAgc2Nyb2xsR2V0TW9yZSgpIHtcbiAgICAgICAgbGV0IF9zZWxmID0gdGhpcztcbiAgICAgICAgJCgnLnJ2LW1lZGlhLW1haW4gLnJ2LW1lZGlhLWl0ZW1zJykuYmluZCgnRE9NTW91c2VTY3JvbGwgbW91c2V3aGVlbCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoZS5vcmlnaW5hbEV2ZW50LmRldGFpbCA+IDAgfHwgZS5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGEgPCAwKSB7XG4gICAgICAgICAgICAgICAgbGV0ICRsb2FkX21vcmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5jbG9zZXN0KCcubWVkaWEtbW9kYWwnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2FkX21vcmUgPSAkKHRoaXMpLnNjcm9sbFRvcCgpICsgJCh0aGlzKS5pbm5lckhlaWdodCgpIC8gMiA+PSAkKHRoaXMpWzBdLnNjcm9sbEhlaWdodCAtIDQ1MFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2FkX21vcmUgPSAkKHRoaXMpLnNjcm9sbFRvcCgpICsgJCh0aGlzKS5pbm5lckhlaWdodCgpID49ICQodGhpcylbMF0uc2Nyb2xsSGVpZ2h0IC0gMTUwXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCRsb2FkX21vcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBSVl9NRURJQV9DT05GSUcucGFnaW5hdGlvbiAhPSAndW5kZWZpbmVkJyAmJiBSVl9NRURJQV9DT05GSUcucGFnaW5hdGlvbi5oYXNfbW9yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGYuTWVkaWFTZXJ2aWNlLmdldE1lZGlhKGZhbHNlLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgIHdpbmRvdy5ydk1lZGlhID0gd2luZG93LnJ2TWVkaWEgfHwge307XG5cbiAgICBNZWRpYU1hbmFnZW1lbnQuc2V0dXBTZWN1cml0eSgpO1xuICAgIG5ldyBNZWRpYU1hbmFnZW1lbnQoKS5pbml0KCk7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL21lZGlhLmpzIiwiaW1wb3J0IHtIZWxwZXJzfSBmcm9tICcuLi9IZWxwZXJzL0hlbHBlcnMnO1xuXG5leHBvcnQgY2xhc3MgTWVkaWFEZXRhaWxzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4kZGV0YWlsc1dyYXBwZXIgPSAkKCcucnYtbWVkaWEtbWFpbiAucnYtbWVkaWEtZGV0YWlscycpO1xuXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb25JdGVtVGVtcGxhdGUgPSAnPGRpdiBjbGFzcz1cInJ2LW1lZGlhLW5hbWVcIj48cD5fX3RpdGxlX188L3A+X191cmxfXzwvZGl2Pic7XG5cbiAgICAgICAgdGhpcy5vbmx5RmllbGRzID0gW1xuICAgICAgICAgICAgJ25hbWUnLFxuICAgICAgICAgICAgJ2Z1bGxfdXJsJyxcbiAgICAgICAgICAgICdzaXplJyxcbiAgICAgICAgICAgICdtaW1lX3R5cGUnLFxuICAgICAgICAgICAgJ2NyZWF0ZWRfYXQnLFxuICAgICAgICAgICAgJ3VwZGF0ZWRfYXQnLFxuICAgICAgICAgICAgJ25vdGhpbmdfc2VsZWN0ZWQnLFxuICAgICAgICBdO1xuXG4gICAgICAgIHRoaXMuZXh0ZXJuYWxUeXBlcyA9IFtcbiAgICAgICAgICAgICd5b3V0dWJlJyxcbiAgICAgICAgICAgICd2aW1lbycsXG4gICAgICAgICAgICAnbWV0YWNhZmUnLFxuICAgICAgICAgICAgJ2RhaWx5bW90aW9uJyxcbiAgICAgICAgICAgICd2aW5lJyxcbiAgICAgICAgICAgICdpbnN0YWdyYW0nLFxuICAgICAgICBdO1xuICAgIH1cblxuICAgIHJlbmRlckRhdGEoZGF0YSkge1xuICAgICAgICBsZXQgX3NlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgdGh1bWIgPSBkYXRhLnR5cGUgPT09ICdpbWFnZScgPyAnPGltZyBzcmM9XCInICsgZGF0YS5mdWxsX3VybCArICdcIiBhbHQ9XCInICsgZGF0YS5uYW1lICsgJ1wiPicgOiBkYXRhLm1pbWVfdHlwZSA9PT0gJ3lvdXR1YmUnID8gJzxpbWcgc3JjPVwiJyArIGRhdGEub3B0aW9ucy50aHVtYiArICdcIiBhbHQ9XCInICsgZGF0YS5uYW1lICsgJ1wiPicgOiAnPGkgY2xhc3M9XCInICsgZGF0YS5pY29uICsgJ1wiPjwvaT4nO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb24gPSAnJztcbiAgICAgICAgbGV0IHVzZUNsaXBib2FyZCA9IGZhbHNlO1xuICAgICAgICBfLmZvckVhY2goZGF0YSwgZnVuY3Rpb24gKHZhbCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChfLmluY2x1ZGVzKF9zZWxmLm9ubHlGaWVsZHMsIGluZGV4KSkge1xuICAgICAgICAgICAgICAgIGlmICgoIV8uaW5jbHVkZXMoX3NlbGYuZXh0ZXJuYWxUeXBlcywgZGF0YS50eXBlKSkgfHwgKF8uaW5jbHVkZXMoX3NlbGYuZXh0ZXJuYWxUeXBlcywgZGF0YS50eXBlKSAmJiAhXy5pbmNsdWRlcyhbJ3NpemUnLCAnbWltZV90eXBlJ10sIGluZGV4KSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24gKz0gX3NlbGYuZGVzY3JpcHRpb25JdGVtVGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9fX3RpdGxlX18vZ2ksIFJWX01FRElBX0NPTkZJRy50cmFuc2xhdGlvbnNbaW5kZXhdKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL19fdXJsX18vZ2ksIHZhbCA/IGluZGV4ID09PSAnZnVsbF91cmwnID8gJzxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cFwiPjxpbnB1dCBpZD1cImZpbGVfZGV0YWlsc191cmxcIiB0eXBlPVwidGV4dFwiIHZhbHVlPVwiJyArIHZhbCArICdcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiPjxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtYnRuXCI+PGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCBqcy1idG4tY29weS10by1jbGlwYm9hcmRcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS1jbGlwYm9hcmQtdGFyZ2V0PVwiI2ZpbGVfZGV0YWlsc191cmxcIiB0aXRsZT1cIkNvcGllZFwiPjxpbWcgY2xhc3M9XCJjbGlwcHlcIiBzcmM9XCInICsgSGVscGVycy5hc3NldCgnL3ZlbmRvci9tZWRpYS9pbWFnZXMvY2xpcHB5LnN2ZycpICsgJ1wiIHdpZHRoPVwiMTNcIiBhbHQ9XCJDb3B5IHRvIGNsaXBib2FyZFwiPjwvYnV0dG9uPjwvc3Bhbj48L2Rpdj4nIDogJzxzcGFuIHRpdGxlPVwiJyArIHZhbCArICdcIj4nICsgdmFsICsgJzwvc3Bhbj4nIDogJycpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09ICdmdWxsX3VybCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZUNsaXBib2FyZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBfc2VsZi4kZGV0YWlsc1dyYXBwZXIuZmluZCgnLnJ2LW1lZGlhLXRodW1ibmFpbCcpLmh0bWwodGh1bWIpO1xuICAgICAgICBfc2VsZi4kZGV0YWlsc1dyYXBwZXIuZmluZCgnLnJ2LW1lZGlhLWRlc2NyaXB0aW9uJykuaHRtbChkZXNjcmlwdGlvbik7XG4gICAgICAgIGlmICh1c2VDbGlwYm9hcmQpIHtcbiAgICAgICAgICAgIGxldCBjbGlwYm9hcmQgPSBuZXcgQ2xpcGJvYXJkKCcuanMtYnRuLWNvcHktdG8tY2xpcGJvYXJkJyk7XG4gICAgICAgICAgICAkKCcuanMtYnRuLWNvcHktdG8tY2xpcGJvYXJkJykudG9vbHRpcCgpXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24gKCkgeyAkKHRoaXMpLnRvb2x0aXAoJ2hpZGUnKTsgfSlcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbiAoKSB7ICQodGhpcykudG9vbHRpcCgnaGlkZScpOyB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvQXBwL1ZpZXdzL01lZGlhRGV0YWlscy5qcyIsImltcG9ydCB7TWVkaWFMaXN0fSBmcm9tICcuLi9WaWV3cy9NZWRpYUxpc3QnO1xuaW1wb3J0IHtNZWRpYUNvbmZpZ30gZnJvbSAnLi4vQ29uZmlnL01lZGlhQ29uZmlnJztcbmltcG9ydCB7TWVkaWFTZXJ2aWNlfSBmcm9tICcuL01lZGlhU2VydmljZSc7XG5pbXBvcnQge01lc3NhZ2VTZXJ2aWNlfSBmcm9tICcuLi9TZXJ2aWNlcy9NZXNzYWdlU2VydmljZSc7XG5pbXBvcnQge0hlbHBlcnN9IGZyb20gJy4uL0hlbHBlcnMvSGVscGVycyc7XG5cbmV4cG9ydCBjbGFzcyBGb2xkZXJTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5NZWRpYUxpc3QgPSBuZXcgTWVkaWFMaXN0KCk7XG4gICAgICAgIHRoaXMuTWVkaWFTZXJ2aWNlID0gbmV3IE1lZGlhU2VydmljZSgpO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignc2hvd24uYnMubW9kYWwnLCAnI21vZGFsX2FkZF9mb2xkZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmZpbmQoJy5mb3JtLWFkZC1mb2xkZXIgaW5wdXRbdHlwZT10ZXh0XScpLmZvY3VzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZShmb2xkZXJOYW1lKSB7XG4gICAgICAgIGxldCBfc2VsZiA9IHRoaXM7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6IFJWX01FRElBX1VSTC5jcmVhdGVfZm9sZGVyLFxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHBhcmVudF9pZDogSGVscGVycy5nZXRSZXF1ZXN0UGFyYW1zKCkuZm9sZGVyX2lkLFxuICAgICAgICAgICAgICAgIG5hbWU6IGZvbGRlck5hbWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgYmVmb3JlU2VuZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIEhlbHBlcnMuc2hvd0FqYXhMb2FkaW5nKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvd01lc3NhZ2UoJ2Vycm9yJywgcmVzLm1lc3NhZ2UsIFJWX01FRElBX0NPTkZJRy50cmFuc2xhdGlvbnMubWVzc2FnZS5lcnJvcl9oZWFkZXIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLnNob3dNZXNzYWdlKCdzdWNjZXNzJywgcmVzLm1lc3NhZ2UsIFJWX01FRElBX0NPTkZJRy50cmFuc2xhdGlvbnMubWVzc2FnZS5zdWNjZXNzX2hlYWRlcik7XG4gICAgICAgICAgICAgICAgICAgIEhlbHBlcnMucmVzZXRQYWdpbmF0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIF9zZWxmLk1lZGlhU2VydmljZS5nZXRNZWRpYSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgRm9sZGVyU2VydmljZS5jbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIEhlbHBlcnMuaGlkZUFqYXhMb2FkaW5nKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgTWVzc2FnZVNlcnZpY2UuaGFuZGxlRXJyb3IoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoYW5nZUZvbGRlcihmb2xkZXJJZCkge1xuICAgICAgICBNZWRpYUNvbmZpZy5yZXF1ZXN0X3BhcmFtcy5mb2xkZXJfaWQgPSBmb2xkZXJJZDtcbiAgICAgICAgSGVscGVycy5zdG9yZUNvbmZpZygpO1xuICAgICAgICB0aGlzLk1lZGlhU2VydmljZS5nZXRNZWRpYSh0cnVlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xvc2VNb2RhbCgpIHtcbiAgICAgICAgJCgnI21vZGFsX2FkZF9mb2xkZXInKS5tb2RhbCgnaGlkZScpO1xuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvQXBwL1NlcnZpY2VzL0ZvbGRlclNlcnZpY2UuanMiLCJpbXBvcnQge01lZGlhU2VydmljZX0gZnJvbSAnLi4vU2VydmljZXMvTWVkaWFTZXJ2aWNlJztcbmltcG9ydCB7SGVscGVyc30gZnJvbSAnLi4vSGVscGVycy9IZWxwZXJzJztcblxuZXhwb3J0IGNsYXNzIFVwbG9hZFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiRib2R5ID0gJCgnYm9keScpO1xuXG4gICAgICAgIHRoaXMuZHJvcFpvbmUgPSBudWxsO1xuXG4gICAgICAgIHRoaXMudXBsb2FkVXJsID0gUlZfTUVESUFfVVJMLnVwbG9hZF9maWxlO1xuXG4gICAgICAgIHRoaXMudXBsb2FkUHJvZ3Jlc3NCb3ggPSAkKCcucnYtdXBsb2FkLXByb2dyZXNzJyk7XG5cbiAgICAgICAgdGhpcy51cGxvYWRQcm9ncmVzc0NvbnRhaW5lciA9ICQoJy5ydi11cGxvYWQtcHJvZ3Jlc3MgLnJ2LXVwbG9hZC1wcm9ncmVzcy10YWJsZScpO1xuXG4gICAgICAgIHRoaXMudXBsb2FkUHJvZ3Jlc3NUZW1wbGF0ZSA9ICQoJyNydl9tZWRpYV91cGxvYWRfcHJvZ3Jlc3NfaXRlbScpLmh0bWwoKTtcblxuICAgICAgICB0aGlzLnRvdGFsUXVldWVkID0gMTtcblxuICAgICAgICB0aGlzLk1lZGlhU2VydmljZSA9IG5ldyBNZWRpYVNlcnZpY2UoKTtcblxuICAgICAgICB0aGlzLnRvdGFsRXJyb3IgPSAwO1xuICAgIH1cblxuICAgIGluaXQoKSB7XG4gICAgICAgIGlmIChfLmluY2x1ZGVzKFJWX01FRElBX0NPTkZJRy5wZXJtaXNzaW9ucywgJ2ZpbGVzLmNyZWF0ZScpICYmICQoJy5ydi1tZWRpYS1pdGVtcycpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dXBEcm9wWm9uZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaGFuZGxlRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgc2V0dXBEcm9wWm9uZSgpIHtcbiAgICAgICAgbGV0IF9zZWxmID0gdGhpcztcbiAgICAgICAgX3NlbGYuZHJvcFpvbmUgPSBuZXcgRHJvcHpvbmUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJ2LW1lZGlhLWl0ZW1zJyksIHtcbiAgICAgICAgICAgIHVybDogX3NlbGYudXBsb2FkVXJsLFxuICAgICAgICAgICAgdGh1bWJuYWlsV2lkdGg6IGZhbHNlLFxuICAgICAgICAgICAgdGh1bWJuYWlsSGVpZ2h0OiBmYWxzZSxcbiAgICAgICAgICAgIHBhcmFsbGVsVXBsb2FkczogMSxcbiAgICAgICAgICAgIGF1dG9RdWV1ZTogdHJ1ZSxcbiAgICAgICAgICAgIGNsaWNrYWJsZTogJy5qcy1kcm9wem9uZS11cGxvYWQnLFxuICAgICAgICAgICAgcHJldmlld1RlbXBsYXRlOiBmYWxzZSxcbiAgICAgICAgICAgIHByZXZpZXdzQ29udGFpbmVyOiBmYWxzZSxcbiAgICAgICAgICAgIHVwbG9hZE11bHRpcGxlOiB0cnVlLFxuICAgICAgICAgICAgc2VuZGluZzogZnVuY3Rpb24gKGZpbGUsIHhociwgZm9ybURhdGEpIHtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ190b2tlbicsICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50JykpO1xuICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZm9sZGVyX2lkJywgSGVscGVycy5nZXRSZXF1ZXN0UGFyYW1zKCkuZm9sZGVyX2lkKTtcbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3ZpZXdfaW4nLCBIZWxwZXJzLmdldFJlcXVlc3RQYXJhbXMoKS52aWV3X2luKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF9zZWxmLmRyb3Bab25lLm9uKCdhZGRlZGZpbGUnLCBmaWxlID0+IHtcbiAgICAgICAgICAgIGZpbGUuaW5kZXggPSBfc2VsZi50b3RhbFF1ZXVlZDtcbiAgICAgICAgICAgIF9zZWxmLnRvdGFsUXVldWVkKys7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF9zZWxmLmRyb3Bab25lLm9uKCdzZW5kaW5nJywgZmlsZSA9PiB7XG4gICAgICAgICAgICBfc2VsZi5pbml0UHJvZ3Jlc3MoZmlsZS5uYW1lLCBmaWxlLnNpemUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBfc2VsZi5kcm9wWm9uZS5vbignc3VjY2VzcycsIGZpbGUgPT4ge1xuXG4gICAgICAgIH0pO1xuXG4gICAgICAgIF9zZWxmLmRyb3Bab25lLm9uKCdjb21wbGV0ZScsIGZpbGUgPT4ge1xuICAgICAgICAgICAgX3NlbGYuY2hhbmdlUHJvZ3Jlc3NTdGF0dXMoZmlsZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIF9zZWxmLmRyb3Bab25lLm9uKCdxdWV1ZWNvbXBsZXRlJywgKCkgPT4ge1xuICAgICAgICAgICAgSGVscGVycy5yZXNldFBhZ2luYXRpb24oKTtcbiAgICAgICAgICAgIF9zZWxmLk1lZGlhU2VydmljZS5nZXRNZWRpYSh0cnVlKTtcbiAgICAgICAgICAgIGlmIChfc2VsZi50b3RhbEVycm9yID09PSAwKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5ydi11cGxvYWQtcHJvZ3Jlc3MgLmNsb3NlLXBhbmUnKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgICAgIH0sIDUwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVFdmVudHMoKSB7XG4gICAgICAgIGxldCBfc2VsZiA9IHRoaXM7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDbG9zZSB1cGxvYWQgcHJvZ3Jlc3MgcGFuZVxuICAgICAgICAgKi9cbiAgICAgICAgX3NlbGYuJGJvZHkub24oJ2NsaWNrJywgJy5ydi11cGxvYWQtcHJvZ3Jlc3MgLmNsb3NlLXBhbmUnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkKCcucnYtdXBsb2FkLXByb2dyZXNzJykuYWRkQ2xhc3MoJ2hpZGUtdGhlLXBhbmUnKTtcbiAgICAgICAgICAgIF9zZWxmLnRvdGFsRXJyb3IgPSAwO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgJCgnLnJ2LXVwbG9hZC1wcm9ncmVzcyBsaScpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIF9zZWxmLnRvdGFsUXVldWVkID0gMTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGluaXRQcm9ncmVzcygkZmlsZU5hbWUsICRmaWxlU2l6ZSkge1xuICAgICAgICBsZXQgdGVtcGxhdGUgPSB0aGlzLnVwbG9hZFByb2dyZXNzVGVtcGxhdGVcbiAgICAgICAgICAgIC5yZXBsYWNlKC9fX2ZpbGVOYW1lX18vZ2ksICRmaWxlTmFtZSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9fX2ZpbGVTaXplX18vZ2ksIFVwbG9hZFNlcnZpY2UuZm9ybWF0RmlsZVNpemUoJGZpbGVTaXplKSlcbiAgICAgICAgICAgIC5yZXBsYWNlKC9fX3N0YXR1c19fL2dpLCAnd2FybmluZycpXG4gICAgICAgICAgICAucmVwbGFjZSgvX19tZXNzYWdlX18vZ2ksICdVcGxvYWRpbmcnKVxuICAgICAgICA7XG4gICAgICAgIHRoaXMudXBsb2FkUHJvZ3Jlc3NDb250YWluZXIuYXBwZW5kKHRlbXBsYXRlKTtcbiAgICAgICAgdGhpcy51cGxvYWRQcm9ncmVzc0JveC5yZW1vdmVDbGFzcygnaGlkZS10aGUtcGFuZScpO1xuICAgICAgICB0aGlzLnVwbG9hZFByb2dyZXNzQm94LmZpbmQoJy5wYW5lbC1ib2R5JylcbiAgICAgICAgICAgIC5hbmltYXRlKHtzY3JvbGxUb3A6IHRoaXMudXBsb2FkUHJvZ3Jlc3NDb250YWluZXIuaGVpZ2h0KCl9LCAxNTApO1xuICAgIH1cblxuICAgIGNoYW5nZVByb2dyZXNzU3RhdHVzKGZpbGUpIHtcbiAgICAgICAgbGV0IF9zZWxmID0gdGhpcztcbiAgICAgICAgbGV0ICRwcm9ncmVzc0xpbmUgPSBfc2VsZi51cGxvYWRQcm9ncmVzc0NvbnRhaW5lci5maW5kKCdsaTpudGgtY2hpbGQoJyArIChmaWxlLmluZGV4KSArICcpJyk7XG4gICAgICAgIGxldCAkbGFiZWwgPSAkcHJvZ3Jlc3NMaW5lLmZpbmQoJy5sYWJlbCcpO1xuICAgICAgICAkbGFiZWwucmVtb3ZlQ2xhc3MoJ2xhYmVsLXN1Y2Nlc3MgbGFiZWwtZGFuZ2VyIGxhYmVsLXdhcm5pbmcnKTtcblxuICAgICAgICBsZXQgcmVzcG9uc2UgPSBIZWxwZXJzLmpzb25EZWNvZGUoZmlsZS54aHIucmVzcG9uc2VUZXh0IHx8ICcnLCB7fSk7XG5cbiAgICAgICAgX3NlbGYudG90YWxFcnJvciA9IF9zZWxmLnRvdGFsRXJyb3IgKyAocmVzcG9uc2UuZXJyb3IgPT09IHRydWUgfHwgZmlsZS5zdGF0dXMgPT09ICdlcnJvcicgPyAxIDogMCk7XG5cbiAgICAgICAgJGxhYmVsLmFkZENsYXNzKHJlc3BvbnNlLmVycm9yID09PSB0cnVlIHx8IGZpbGUuc3RhdHVzID09PSAnZXJyb3InID8gJ2xhYmVsLWRhbmdlcicgOiAnbGFiZWwtc3VjY2VzcycpO1xuICAgICAgICAkbGFiZWwuaHRtbChyZXNwb25zZS5lcnJvciA9PT0gdHJ1ZSB8fCBmaWxlLnN0YXR1cyA9PT0gJ2Vycm9yJyA/ICdFcnJvcicgOiAnVXBsb2FkZWQnKTtcbiAgICAgICAgaWYgKGZpbGUuc3RhdHVzID09PSAnZXJyb3InKSB7XG4gICAgICAgICAgICBpZiAoZmlsZS54aHIuc3RhdHVzID09PSA0MjIpIHtcbiAgICAgICAgICAgICAgICBsZXQgZXJyb3JfaHRtbCA9ICcnO1xuICAgICAgICAgICAgICAgICQuZWFjaChyZXNwb25zZSwgZnVuY3Rpb24gKGtleSwgaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcl9odG1sICs9ICc8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+JyArIGl0ZW0gKyAnPC9zcGFuPjxicj4nO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICRwcm9ncmVzc0xpbmUuZmluZCgnLmZpbGUtZXJyb3InKS5odG1sKGVycm9yX2h0bWwpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChmaWxlLnhoci5zdGF0dXMgPT09IDUwMCkge1xuICAgICAgICAgICAgICAgICRwcm9ncmVzc0xpbmUuZmluZCgnLmZpbGUtZXJyb3InKS5odG1sKCc8c3BhbiBjbGFzcz1cInRleHQtZGFuZ2VyXCI+JyArIGZpbGUueGhyLnN0YXR1c1RleHQgKyAnPC9zcGFuPicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLmVycm9yKSB7XG4gICAgICAgICAgICAkcHJvZ3Jlc3NMaW5lLmZpbmQoJy5maWxlLWVycm9yJykuaHRtbCgnPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPicgKyByZXNwb25zZS5tZXNzYWdlICsgJzwvc3Bhbj4nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEhlbHBlcnMuYWRkVG9SZWNlbnQocmVzcG9uc2UuZGF0YS5pZCk7XG4gICAgICAgICAgICBIZWxwZXJzLnNldFNlbGVjdGVkRmlsZShyZXNwb25zZS5kYXRhLmlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBmb3JtYXRGaWxlU2l6ZShieXRlcywgc2kgPSBmYWxzZSkge1xuICAgICAgICBsZXQgdGhyZXNoID0gc2kgPyAxMDAwIDogMTAyNDtcbiAgICAgICAgaWYgKE1hdGguYWJzKGJ5dGVzKSA8IHRocmVzaCkge1xuICAgICAgICAgICAgcmV0dXJuIGJ5dGVzICsgJyBCJztcbiAgICAgICAgfVxuICAgICAgICBsZXQgdW5pdHMgPSBbJ0tCJywgJ01CJywgJ0dCJywgJ1RCJywgJ1BCJywgJ0VCJywgJ1pCJywgJ1lCJ107XG4gICAgICAgIGxldCB1ID0gLTE7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGJ5dGVzIC89IHRocmVzaDtcbiAgICAgICAgICAgICsrdTtcbiAgICAgICAgfSB3aGlsZSAoTWF0aC5hYnMoYnl0ZXMpID49IHRocmVzaCAmJiB1IDwgdW5pdHMubGVuZ3RoIC0gMSk7XG4gICAgICAgIHJldHVybiBieXRlcy50b0ZpeGVkKDEpICsgJyAnICsgdW5pdHNbdV07XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9BcHAvU2VydmljZXMvVXBsb2FkU2VydmljZS5qcyIsImltcG9ydCB7WW91dHViZX0gZnJvbSAnLi9Zb3V0dWJlJztcblxuZXhwb3J0IGNsYXNzIEV4dGVybmFsU2VydmljZXMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBuZXcgWW91dHViZSgpO1xuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0FwcC9FeHRlcm5hbHMvRXh0ZXJuYWxTZXJ2aWNlcy5qcyIsImltcG9ydCB7SGVscGVyc30gZnJvbSAnLi4vSGVscGVycy9IZWxwZXJzJztcbmltcG9ydCB7RXh0ZXJuYWxTZXJ2aWNlQ29uZmlnfSBmcm9tICcuLi9Db25maWcvRXh0ZXJuYWxTZXJ2aWNlQ29uZmlnJztcbmltcG9ydCB7TWVkaWFTZXJ2aWNlfSBmcm9tICcuLi9TZXJ2aWNlcy9NZWRpYVNlcnZpY2UnO1xuaW1wb3J0IHtNZXNzYWdlU2VydmljZX0gZnJvbSAnLi4vU2VydmljZXMvTWVzc2FnZVNlcnZpY2UnO1xuXG5leHBvcnQgY2xhc3MgWW91dHViZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuTWVkaWFTZXJ2aWNlID0gbmV3IE1lZGlhU2VydmljZSgpO1xuXG4gICAgICAgIHRoaXMuJGJvZHkgPSAkKCdib2R5Jyk7XG5cbiAgICAgICAgdGhpcy4kbW9kYWwgPSAkKCcjbW9kYWxfYWRkX2Zyb21feW91dHViZScpO1xuXG4gICAgICAgIGxldCBfc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5zZXRNZXNzYWdlKFJWX01FRElBX0NPTkZJRy50cmFuc2xhdGlvbnMuYWRkX2Zyb20ueW91dHViZS5vcmlnaW5hbF9tc2cpO1xuXG4gICAgICAgIHRoaXMuJG1vZGFsLm9uKCdoaWRkZW4uYnMubW9kYWwnLCAoKSA9PiB7XG4gICAgICAgICAgICBfc2VsZi5zZXRNZXNzYWdlKFJWX01FRElBX0NPTkZJRy50cmFuc2xhdGlvbnMuYWRkX2Zyb20ueW91dHViZS5vcmlnaW5hbF9tc2cpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRib2R5Lm9uKCdjbGljaycsICcjbW9kYWxfYWRkX2Zyb21feW91dHViZSAucnYtYnRuLWFkZC15b3V0dWJlLXVybCcsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgX3NlbGYuY2hlY2tZb3VUdWJlVmlkZW8oJCh0aGlzKS5jbG9zZXN0KCcjbW9kYWxfYWRkX2Zyb21feW91dHViZScpLmZpbmQoJy5ydi15b3V0dWJlLXVybCcpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhdGljIHZhbGlkYXRlWW91VHViZUxpbmsodXJsKSB7XG4gICAgICAgIGxldCBwID0gL14oPzpodHRwcz86XFwvXFwvKT8oPzp3d3dcXC4pP3lvdXR1YmVcXC5jb21cXC93YXRjaFxcPyg/PS4qdj0oKFxcd3wtKXsxMX0pKSg/OlxcUyspPyQvO1xuICAgICAgICByZXR1cm4gKHVybC5tYXRjaChwKSkgPyBSZWdFeHAuJDEgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0WW91VHViZUlkKHVybCkge1xuICAgICAgICBsZXQgcmVnRXhwID0gL14uKih5b3V0dS5iZVxcL3x2XFwvfHVcXC9cXHdcXC98ZW1iZWRcXC98d2F0Y2hcXD92PXxcXCZ2PSkoW14jXFwmXFw/XSopLiovO1xuICAgICAgICBsZXQgbWF0Y2ggPSB1cmwubWF0Y2gocmVnRXhwKTtcbiAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoWzJdLmxlbmd0aCA9PT0gMTEpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaFsyXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0WW91dHViZVBsYXlsaXN0SWQodXJsKSB7XG4gICAgICAgIGxldCByZWdFeHAgPSAvXi4qKHlvdXR1LmJlXFwvfHZcXC98dVxcL1xcd1xcL3xlbWJlZFxcL3x3YXRjaFxcP2xpc3Q9fFxcJmxpc3Q9KShbXiNcXCZcXD9dKikuKi87XG4gICAgICAgIGxldCBtYXRjaCA9IHVybC5tYXRjaChyZWdFeHApO1xuICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXRjaFsyXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBzZXRNZXNzYWdlKG1zZykge1xuICAgICAgICB0aGlzLiRtb2RhbC5maW5kKCcubW9kYWwtbm90aWNlJykuaHRtbChtc2cpO1xuICAgIH1cblxuICAgIGNoZWNrWW91VHViZVZpZGVvKCRpbnB1dCkge1xuICAgICAgICBsZXQgX3NlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoIVlvdXR1YmUudmFsaWRhdGVZb3VUdWJlTGluaygkaW5wdXQudmFsKCkpIHx8ICFFeHRlcm5hbFNlcnZpY2VDb25maWcueW91dHViZS5hcGlfa2V5KSB7XG4gICAgICAgICAgICBpZiAoRXh0ZXJuYWxTZXJ2aWNlQ29uZmlnLnlvdXR1YmUuYXBpX2tleSkge1xuICAgICAgICAgICAgICAgIF9zZWxmLnNldE1lc3NhZ2UoUlZfTUVESUFfQ09ORklHLnRyYW5zbGF0aW9ucy5hZGRfZnJvbS55b3V0dWJlLmludmFsaWRfdXJsX21zZyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF9zZWxmLnNldE1lc3NhZ2UoUlZfTUVESUFfQ09ORklHLnRyYW5zbGF0aW9ucy5hZGRfZnJvbS55b3V0dWJlLm5vX2FwaV9rZXlfbXNnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB5b3V0dWJlSWQgPSBZb3V0dWJlLmdldFlvdVR1YmVJZCgkaW5wdXQudmFsKCkpO1xuICAgICAgICAgICAgbGV0IHJlcXVlc3RVcmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My92aWRlb3M/aWQ9JyArIHlvdXR1YmVJZDtcbiAgICAgICAgICAgIGxldCBpc1BsYXlsaXN0ID0gX3NlbGYuJG1vZGFsLmZpbmQoJy5jdXN0b20tY2hlY2tib3ggaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuaXMoJzpjaGVja2VkJyk7XG5cbiAgICAgICAgICAgIGlmIChpc1BsYXlsaXN0KSB7XG4gICAgICAgICAgICAgICAgeW91dHViZUlkID0gWW91dHViZS5nZXRZb3V0dWJlUGxheWxpc3RJZCgkaW5wdXQudmFsKCkpO1xuICAgICAgICAgICAgICAgIHJlcXVlc3RVcmwgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20veW91dHViZS92My9wbGF5bGlzdEl0ZW1zP3BsYXlsaXN0SWQ9JyArIHlvdXR1YmVJZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IHJlcXVlc3RVcmwgKyAnJmtleT0nICsgRXh0ZXJuYWxTZXJ2aWNlQ29uZmlnLnlvdXR1YmUuYXBpX2tleSArICcmcGFydD1zbmlwcGV0JyxcbiAgICAgICAgICAgICAgICB0eXBlOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1BsYXlsaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5bGlzdFZpZGVvQ2FsbGJhY2soZGF0YSwgJGlucHV0LnZhbCgpKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpbmdsZVZpZGVvQ2FsbGJhY2soZGF0YSwgJGlucHV0LnZhbCgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIF9zZWxmLnNldE1lc3NhZ2UoUlZfTUVESUFfQ09ORklHLnRyYW5zbGF0aW9ucy5hZGRfZnJvbS55b3V0dWJlLmVycm9yX21zZyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzaW5nbGVWaWRlb0NhbGxiYWNrKGRhdGEsIHVybCkge1xuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6IFJWX01FRElBX1VSTC5hZGRfZXh0ZXJuYWxfc2VydmljZSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ2pzb24nLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3lvdXR1YmUnLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBkYXRhLml0ZW1zWzBdLnNuaXBwZXQudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGZvbGRlcl9pZDogSGVscGVycy5nZXRSZXF1ZXN0UGFyYW1zKCkuZm9sZGVyX2lkLFxuICAgICAgICAgICAgICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWI6ICdodHRwczovL2ltZy55b3V0dWJlLmNvbS92aS8nICsgZGF0YS5pdGVtc1swXS5pZCArICcvbWF4cmVzZGVmYXVsdC5qcGcnXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5lcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvd01lc3NhZ2UoJ2Vycm9yJywgcmVzLm1lc3NhZ2UsIFJWX01FRElBX0NPTkZJRy50cmFuc2xhdGlvbnMubWVzc2FnZS5lcnJvcl9oZWFkZXIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgTWVzc2FnZVNlcnZpY2Uuc2hvd01lc3NhZ2UoJ3N1Y2Nlc3MnLCByZXMubWVzc2FnZSwgUlZfTUVESUFfQ09ORklHLnRyYW5zbGF0aW9ucy5tZXNzYWdlLnN1Y2Nlc3NfaGVhZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9zZWxmLk1lZGlhU2VydmljZS5nZXRNZWRpYSh0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIE1lc3NhZ2VTZXJ2aWNlLmhhbmRsZUVycm9yKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgX3NlbGYuJG1vZGFsLm1vZGFsKCdoaWRlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBwbGF5bGlzdFZpZGVvQ2FsbGJhY2soZGF0YSwgdXJsKSB7XG4gICAgICAgICAgICBfc2VsZi4kbW9kYWwubW9kYWwoJ2hpZGUnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvQXBwL0V4dGVybmFscy9Zb3V0dWJlLmpzIiwibGV0IEV4dGVybmFsU2VydmljZUNvbmZpZyA9IHtcbiAgICB5b3V0dWJlOiB7XG4gICAgICAgIGFwaV9rZXk6IFwiQUl6YVN5Q1Y0Zm1mZGdzVmFsR05SM3NjLTBXM2NicEVaOHVPZDYwXCJcbiAgICB9XG59O1xuXG5leHBvcnQge0V4dGVybmFsU2VydmljZUNvbmZpZ307XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL0FwcC9Db25maWcvRXh0ZXJuYWxTZXJ2aWNlQ29uZmlnLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvc2Fzcy9tZWRpYS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9