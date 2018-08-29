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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ }),

/***/ 18:
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* ========================================================================
 * AddMedia.js v1.0
 * Requires Botble Media
 * ======================================================================== */

+function ($) {
    'use strict';

    /**
     * @param element
     * @param options
     * @constructor
     */

    var AddMedia = function AddMedia(element, options) {
        this.options = options;
        $(element).rvMedia({
            multiple: true,
            onSelectFiles: function onSelectFiles(files, $el) {
                if (typeof files !== 'undefined') {
                    switch ($el.data('editor')) {
                        case 'summernote':
                            handleInsertImagesForSummerNote($el, files);
                            break;
                        case 'wysihtml5':
                            var editor = $(options.target).data('wysihtml5').editor;
                            handleInsertImagesForWysihtml5Editor(editor, files);
                            break;
                        case 'ckeditor':
                            handleForCkeditor($el, files);
                            break;
                        case 'tinymce':
                            handleForTinyMce(files);
                            break;
                    }
                }
            }
        });
    };

    AddMedia.VERSION = '1.1.0';

    /**
     * Insert images to summernote editor
     * @param $el
     * @param files
     */
    function handleInsertImagesForSummerNote($el, files) {
        if (files.length === 0) {
            return;
        }

        var instance = $el.data('target');
        for (var i = 0; i < files.length; i++) {
            if (files[i].type === 'youtube' || files[i].type === 'video') {
                var link = files[i].full_url;
                link = link.replace('watch?v=', 'embed/');
                $(instance).summernote('pasteHTML', '<iframe width="420" height="315" src="' + link + '" frameborder="0" allowfullscreen></iframe>');
            } else if (files[i].type === 'image') {
                $(instance).summernote('insertImage', files[i].full_url, files[i].basename);
            } else {
                $(instance).summernote('pasteHTML', '<a href="' + files[i].full_url + '">' + files[i].full_url + '</a>');
            }
        }
    }

    /**
     * Insert images to Wysihtml5 editor
     * @param editor
     * @param files
     */
    function handleInsertImagesForWysihtml5Editor(editor, files) {
        if (files.length === 0) {
            return;
        }

        // insert images for the wysihtml5 editor
        var s = '';
        for (var i = 0; i < files.length; i++) {
            if (files[i].type === 'youtube' || files[i].type === 'video') {
                var link = files[i].full_url;
                link = link.replace('watch?v=', 'embed/');
                s += '<iframe width="420" height="315" src="' + link + '" frameborder="0" allowfullscreen></iframe>';
            } else if (files[i].type === 'image') {
                s += '<img src="' + files[i].full_url + '">';
            } else {
                s += '<a href="' + files[i].full_url + '">' + files[i].full_url + '</a>';
            }
        }

        if (editor.getValue().length > 0) {
            var length = editor.getValue();
            editor.composer.commands.exec('insertHTML', s);
            if (editor.getValue() === length) {
                editor.setValue(editor.getValue() + s);
            }
        } else {
            editor.setValue(editor.getValue() + s);
        }
    }

    /**
     * @param $el
     * @param files
     */
    function handleForCkeditor($el, files) {
        $.each(files, function (index, file) {
            var link = file.full_url;
            var instance = $el.data('target').replace('#', '');
            if (file.type === 'youtube' || file.type === 'video') {
                link = link.replace('watch?v=', 'embed/');
                CKEDITOR.instances[instance].insertHtml('<iframe width="420" height="315" src="' + link + '" frameborder="0" allowfullscreen></iframe>');
            } else if (file.type === 'image') {
                CKEDITOR.instances[instance].insertHtml('<img src="' + link + '" alt="' + file.name + '" />');
            } else {
                CKEDITOR.instances[instance].insertHtml('<a href="' + link + '">' + file.name + '</a>');
            }
        });
    }

    /**
     * @param files
     */
    function handleForTinyMce(files) {
        $.each(files, function (index, file) {
            var link = file.url;
            var html = '';
            if (file.type === 'youtube' || file.type === 'video') {
                link = link.replace('watch?v=', 'embed/');
                html = '<iframe width="420" height="315" src="' + link + '" frameborder="0" allowfullscreen></iframe>';
            } else if (file.type === 'image') {
                html = '<img src="' + link + '" alt="' + file.name + '" />';
            } else {
                html = '<a href="' + link + '">' + file.name + '</a>';
            }
            tinymce.activeEditor.execCommand('mceInsertContent', false, html);
        });
    }

    /**
     * @param option
     */
    function callAction(option) {
        return this.each(function () {
            var $this = $(this);
            var data = $this.data('bs.media');
            var options = $.extend({}, $this.data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) === 'object' && option);
            if (!data) $this.data('bs.media', data = new AddMedia(this, options));
        });
    }

    $.fn.addMedia = callAction;
    $.fn.addMedia.Constructor = AddMedia;

    $(window).on('load', function () {
        $('[data-type="rv-media"]').each(function () {
            var $addMedia = $(this);
            callAction.call($addMedia, $addMedia.data());
        });
    });
}(jQuery);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjg0MjJjYzZmYTJhN2MwODUzZDUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9qcXVlcnkuYWRkTWVkaWEuanMiXSwibmFtZXMiOlsiJCIsIkFkZE1lZGlhIiwiZWxlbWVudCIsIm9wdGlvbnMiLCJydk1lZGlhIiwibXVsdGlwbGUiLCJvblNlbGVjdEZpbGVzIiwiZmlsZXMiLCIkZWwiLCJkYXRhIiwiaGFuZGxlSW5zZXJ0SW1hZ2VzRm9yU3VtbWVyTm90ZSIsImVkaXRvciIsInRhcmdldCIsImhhbmRsZUluc2VydEltYWdlc0Zvcld5c2lodG1sNUVkaXRvciIsImhhbmRsZUZvckNrZWRpdG9yIiwiaGFuZGxlRm9yVGlueU1jZSIsIlZFUlNJT04iLCJsZW5ndGgiLCJpbnN0YW5jZSIsImkiLCJ0eXBlIiwibGluayIsImZ1bGxfdXJsIiwicmVwbGFjZSIsInN1bW1lcm5vdGUiLCJiYXNlbmFtZSIsInMiLCJnZXRWYWx1ZSIsImNvbXBvc2VyIiwiY29tbWFuZHMiLCJleGVjIiwic2V0VmFsdWUiLCJlYWNoIiwiaW5kZXgiLCJmaWxlIiwiQ0tFRElUT1IiLCJpbnN0YW5jZXMiLCJpbnNlcnRIdG1sIiwibmFtZSIsInVybCIsImh0bWwiLCJ0aW55bWNlIiwiYWN0aXZlRWRpdG9yIiwiZXhlY0NvbW1hbmQiLCJjYWxsQWN0aW9uIiwib3B0aW9uIiwiJHRoaXMiLCJleHRlbmQiLCJmbiIsImFkZE1lZGlhIiwiQ29uc3RydWN0b3IiLCJ3aW5kb3ciLCJvbiIsIiRhZGRNZWRpYSIsImNhbGwiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFD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QUFkLEdBQTRCakQsUUFBNUI7O0FBRUFELE1BQUVtRCxNQUFGLEVBQVVDLEVBQVYsQ0FBYSxNQUFiLEVBQXFCLFlBQVk7QUFDN0JwRCxVQUFFLHdCQUFGLEVBQTRCZ0MsSUFBNUIsQ0FBaUMsWUFBWTtBQUN6QyxnQkFBSXFCLFlBQVlyRCxFQUFFLElBQUYsQ0FBaEI7QUFDQTRDLHVCQUFXVSxJQUFYLENBQWdCRCxTQUFoQixFQUEyQkEsVUFBVTVDLElBQVYsRUFBM0I7QUFDSCxTQUhEO0FBSUgsS0FMRDtBQU9ILENBM0pBLENBMkpDOEMsTUEzSkQsQ0FBRCxDIiwiZmlsZSI6Ii9qcy9qcXVlcnkuYWRkTWVkaWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxNyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMjg0MjJjYzZmYTJhN2MwODUzZDUiLCIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEFkZE1lZGlhLmpzIHYxLjBcbiAqIFJlcXVpcmVzIEJvdGJsZSBNZWRpYVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbitmdW5jdGlvbiAoJCkge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBlbGVtZW50XG4gICAgICogQHBhcmFtIG9wdGlvbnNcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICB2YXIgQWRkTWVkaWEgPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICAkKGVsZW1lbnQpLnJ2TWVkaWEoe1xuICAgICAgICAgICAgbXVsdGlwbGU6IHRydWUsXG4gICAgICAgICAgICBvblNlbGVjdEZpbGVzOiBmdW5jdGlvbiAoZmlsZXMsICRlbCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZmlsZXMgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoJGVsLmRhdGEoJ2VkaXRvcicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdzdW1tZXJub3RlJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVJbnNlcnRJbWFnZXNGb3JTdW1tZXJOb3RlKCRlbCwgZmlsZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnd3lzaWh0bWw1JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWRpdG9yID0gJChvcHRpb25zLnRhcmdldCkuZGF0YSgnd3lzaWh0bWw1JykuZWRpdG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUluc2VydEltYWdlc0Zvcld5c2lodG1sNUVkaXRvcihlZGl0b3IsIGZpbGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NrZWRpdG9yJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVGb3JDa2VkaXRvcigkZWwsIGZpbGVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RpbnltY2UnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZUZvclRpbnlNY2UoZmlsZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgQWRkTWVkaWEuVkVSU0lPTiA9ICcxLjEuMCc7XG5cbiAgICAvKipcbiAgICAgKiBJbnNlcnQgaW1hZ2VzIHRvIHN1bW1lcm5vdGUgZWRpdG9yXG4gICAgICogQHBhcmFtICRlbFxuICAgICAqIEBwYXJhbSBmaWxlc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIGhhbmRsZUluc2VydEltYWdlc0ZvclN1bW1lck5vdGUoJGVsLCBmaWxlcykge1xuICAgICAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaW5zdGFuY2UgPSAkZWwuZGF0YSgndGFyZ2V0Jyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChmaWxlc1tpXS50eXBlID09PSAneW91dHViZScgfHwgZmlsZXNbaV0udHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgICAgIHZhciBsaW5rID0gZmlsZXNbaV0uZnVsbF91cmw7XG4gICAgICAgICAgICAgICAgbGluayA9IGxpbmsucmVwbGFjZSgnd2F0Y2g/dj0nLCAnZW1iZWQvJyk7XG4gICAgICAgICAgICAgICAgJChpbnN0YW5jZSkuc3VtbWVybm90ZSgncGFzdGVIVE1MJywgJzxpZnJhbWUgd2lkdGg9XCI0MjBcIiBoZWlnaHQ9XCIzMTVcIiBzcmM9XCInICsgbGluayArICdcIiBmcmFtZWJvcmRlcj1cIjBcIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZpbGVzW2ldLnR5cGUgPT09ICdpbWFnZScpIHtcbiAgICAgICAgICAgICAgICAkKGluc3RhbmNlKS5zdW1tZXJub3RlKCdpbnNlcnRJbWFnZScsIGZpbGVzW2ldLmZ1bGxfdXJsLCBmaWxlc1tpXS5iYXNlbmFtZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoaW5zdGFuY2UpLnN1bW1lcm5vdGUoJ3Bhc3RlSFRNTCcsICc8YSBocmVmPVwiJyArIGZpbGVzW2ldLmZ1bGxfdXJsICsgJ1wiPicgKyBmaWxlc1tpXS5mdWxsX3VybCArICc8L2E+Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbnNlcnQgaW1hZ2VzIHRvIFd5c2lodG1sNSBlZGl0b3JcbiAgICAgKiBAcGFyYW0gZWRpdG9yXG4gICAgICogQHBhcmFtIGZpbGVzXG4gICAgICovXG4gICAgZnVuY3Rpb24gaGFuZGxlSW5zZXJ0SW1hZ2VzRm9yV3lzaWh0bWw1RWRpdG9yKGVkaXRvciwgZmlsZXMpIHtcbiAgICAgICAgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaW5zZXJ0IGltYWdlcyBmb3IgdGhlIHd5c2lodG1sNSBlZGl0b3JcbiAgICAgICAgbGV0IHMgPSAnJztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGZpbGVzW2ldLnR5cGUgPT09ICd5b3V0dWJlJyB8fCBmaWxlc1tpXS50eXBlID09PSAndmlkZW8nKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxpbmsgPSBmaWxlc1tpXS5mdWxsX3VybDtcbiAgICAgICAgICAgICAgICBsaW5rID0gbGluay5yZXBsYWNlKCd3YXRjaD92PScsICdlbWJlZC8nKTtcbiAgICAgICAgICAgICAgICBzICs9ICc8aWZyYW1lIHdpZHRoPVwiNDIwXCIgaGVpZ2h0PVwiMzE1XCIgc3JjPVwiJyArIGxpbmsgKyAnXCIgZnJhbWVib3JkZXI9XCIwXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPic7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZpbGVzW2ldLnR5cGUgPT09ICdpbWFnZScpIHtcbiAgICAgICAgICAgICAgICBzICs9ICc8aW1nIHNyYz1cIicgKyBmaWxlc1tpXS5mdWxsX3VybCArICdcIj4nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzICs9ICc8YSBocmVmPVwiJyArIGZpbGVzW2ldLmZ1bGxfdXJsICsgJ1wiPicgKyBmaWxlc1tpXS5mdWxsX3VybCArICc8L2E+JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlZGl0b3IuZ2V0VmFsdWUoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgbGVuZ3RoID0gZWRpdG9yLmdldFZhbHVlKCk7XG4gICAgICAgICAgICBlZGl0b3IuY29tcG9zZXIuY29tbWFuZHMuZXhlYygnaW5zZXJ0SFRNTCcsIHMpO1xuICAgICAgICAgICAgaWYgKGVkaXRvci5nZXRWYWx1ZSgpID09PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBlZGl0b3Iuc2V0VmFsdWUoZWRpdG9yLmdldFZhbHVlKCkgKyBzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVkaXRvci5zZXRWYWx1ZShlZGl0b3IuZ2V0VmFsdWUoKSArIHMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtICRlbFxuICAgICAqIEBwYXJhbSBmaWxlc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIGhhbmRsZUZvckNrZWRpdG9yKCRlbCwgZmlsZXMpIHtcbiAgICAgICAgJC5lYWNoKGZpbGVzLCBmdW5jdGlvbiAoaW5kZXgsIGZpbGUpIHtcbiAgICAgICAgICAgIHZhciBsaW5rID0gZmlsZS5mdWxsX3VybDtcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9ICRlbC5kYXRhKCd0YXJnZXQnKS5yZXBsYWNlKCcjJywgJycpO1xuICAgICAgICAgICAgaWYgKGZpbGUudHlwZSA9PT0gJ3lvdXR1YmUnIHx8IGZpbGUudHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgICAgIGxpbmsgPSBsaW5rLnJlcGxhY2UoJ3dhdGNoP3Y9JywgJ2VtYmVkLycpO1xuICAgICAgICAgICAgICAgIENLRURJVE9SLmluc3RhbmNlc1tpbnN0YW5jZV0uaW5zZXJ0SHRtbCgnPGlmcmFtZSB3aWR0aD1cIjQyMFwiIGhlaWdodD1cIjMxNVwiIHNyYz1cIicgKyBsaW5rICsgJ1wiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZmlsZS50eXBlID09PSAnaW1hZ2UnKSB7XG4gICAgICAgICAgICAgICAgQ0tFRElUT1IuaW5zdGFuY2VzW2luc3RhbmNlXS5pbnNlcnRIdG1sKCc8aW1nIHNyYz1cIicgKyBsaW5rICsgJ1wiIGFsdD1cIicgKyBmaWxlLm5hbWUgKyAnXCIgLz4nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgQ0tFRElUT1IuaW5zdGFuY2VzW2luc3RhbmNlXS5pbnNlcnRIdG1sKCc8YSBocmVmPVwiJyArIGxpbmsgKyAnXCI+JyArIGZpbGUubmFtZSArICc8L2E+Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBmaWxlc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIGhhbmRsZUZvclRpbnlNY2UoZmlsZXMpIHtcbiAgICAgICAgJC5lYWNoKGZpbGVzLCBmdW5jdGlvbiAoaW5kZXgsIGZpbGUpIHtcbiAgICAgICAgICAgIHZhciBsaW5rID0gZmlsZS51cmw7XG4gICAgICAgICAgICB2YXIgaHRtbCA9ICcnO1xuICAgICAgICAgICAgaWYgKGZpbGUudHlwZSA9PT0gJ3lvdXR1YmUnIHx8IGZpbGUudHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgICAgIGxpbmsgPSBsaW5rLnJlcGxhY2UoJ3dhdGNoP3Y9JywgJ2VtYmVkLycpO1xuICAgICAgICAgICAgICAgIGh0bWwgPSAnPGlmcmFtZSB3aWR0aD1cIjQyMFwiIGhlaWdodD1cIjMxNVwiIHNyYz1cIicgKyBsaW5rICsgJ1wiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4nO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChmaWxlLnR5cGUgPT09ICdpbWFnZScpIHtcbiAgICAgICAgICAgICAgICBodG1sID0gJzxpbWcgc3JjPVwiJyArIGxpbmsgKyAnXCIgYWx0PVwiJyArIGZpbGUubmFtZSArICdcIiAvPic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGh0bWwgPSAnPGEgaHJlZj1cIicgKyBsaW5rICsgJ1wiPicgKyBmaWxlLm5hbWUgKyAnPC9hPic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aW55bWNlLmFjdGl2ZUVkaXRvci5leGVjQ29tbWFuZCgnbWNlSW5zZXJ0Q29udGVudCcsIGZhbHNlLCBodG1sKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIG9wdGlvblxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGNhbGxBY3Rpb24ob3B0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTtcbiAgICAgICAgICAgIHZhciBkYXRhID0gJHRoaXMuZGF0YSgnYnMubWVkaWEnKTtcbiAgICAgICAgICAgIHZhciBvcHRpb25zID0gJC5leHRlbmQoe30sICR0aGlzLmRhdGEoKSwgdHlwZW9mIG9wdGlvbiA9PT0gJ29iamVjdCcgJiYgb3B0aW9uKTtcbiAgICAgICAgICAgIGlmICghZGF0YSkgJHRoaXMuZGF0YSgnYnMubWVkaWEnLCAoZGF0YSA9IG5ldyBBZGRNZWRpYSh0aGlzLCBvcHRpb25zKSkpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgJC5mbi5hZGRNZWRpYSA9IGNhbGxBY3Rpb247XG4gICAgJC5mbi5hZGRNZWRpYS5Db25zdHJ1Y3RvciA9IEFkZE1lZGlhO1xuXG4gICAgJCh3aW5kb3cpLm9uKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCdbZGF0YS10eXBlPVwicnYtbWVkaWFcIl0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciAkYWRkTWVkaWEgPSAkKHRoaXMpO1xuICAgICAgICAgICAgY2FsbEFjdGlvbi5jYWxsKCRhZGRNZWRpYSwgJGFkZE1lZGlhLmRhdGEoKSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG59KGpRdWVyeSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2pxdWVyeS5hZGRNZWRpYS5qcyJdLCJzb3VyY2VSb290IjoiIn0=