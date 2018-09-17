ace.define('ace/theme/capsula-js',['require','exports','module','ace/lib/dom'], function(acequire, exports, module) {
  exports.isDark = true;
  exports.cssClass = 'ace-capsula-js';
  exports.cssText = "\
  \
.ace-capsula-js .ace_gutter {\
  background: #3F3F3F;\
  color: #767676\
}\
.ace-capsula-js .ace_print-margin {\
  width: 1px;\
  background: #353030\
}\
.ace-capsula-js {\
  background-color: #3F3F3F;\
  color: #DEDEDE\
}\
.ace-capsula-js .ace_cursor {\
  color: #A7A7A7\
}\
.ace-capsula-js .ace_marker-layer .ace_selection {\
  background: rgba(221, 240, 255, 0.20)\
}\
.ace-capsula-js.ace_multiselect .ace_selection.ace_start {\
  box-shadow: 0 0 3px 0px #2C2828;\
}\
.ace-capsula-js .ace_marker-layer .ace_step {\
  background: rgb(102, 82, 0)\
}\
.ace-capsula-js .ace_marker-layer .ace_bracket {\
  margin: -1px 0 0 -1px;\
  border: 1px solid rgba(255, 255, 255, 0.25)\
}\
.ace-capsula-js .ace_marker-layer .ace_active-line {\
  background: rgba(255, 255, 255, 0.031)\
}\
.ace-capsula-js .ace_gutter-active-line {\
  background-color: rgba(255, 255, 255, 0.031)\
}\
.ace-capsula-js .ace_marker-layer .ace_selected-word {\
  border: 1px solid rgba(221, 240, 255, 0.20)\
}\
.ace-capsula-js .ace_invisible {\
  color: rgba(255, 255, 255, 0.25)\
}\
.ace-capsula-js .ace_keyword,\
.ace-capsula-js .ace_meta {\
  color: #757aD8\
}\
.ace-capsula-js .ace_constant,\
.ace-capsula-js .ace_constant.ace_character,\
.ace-capsula-js .ace_constant.ace_character.ace_escape,\
.ace-capsula-js .ace_constant.ace_other {\
  color: #DEDEDE\
}\
.ace-capsula-js .ace_keyword.ace_operator {\
  color: #797878\
}\
.ace-capsula-js .ace_constant.ace_character {\
  color: #AFA472\
}\
.ace-capsula-js .ace_constant.ace_language {\
  color: #DEDEDE\
}\
.ace-capsula-js .ace_constant.ace_numeric {\
  color: #CCCCCC\
}\
.ace-capsula-js .ace_invalid,\
.ace-capsula-js .ace_invalid.ace_illegal {\
  color: #F8F8F8;\
  background-color: rgba(86, 45, 86, 0.75)\
}\
.ace-capsula-js .ace_invalid.ace_deprecated {\
  text-decoration: underline;\
  font-style: italic;\
  color: #D2A8A1\
}\
.ace-capsula-js .ace_fold {\
  background-color: #757aD8;\
  border-color: #8F938F\
}\
.ace-capsula-js .ace_support.ace_function {\
  color: #AEB2F8\
}\
.ace-capsula-js .ace_string {\
  color: #DEDEDE\
}\
.ace-capsula-js .ace_string.ace_regexp {\
  color: #E9C062\
}\
.ace-capsula-js .ace_comment {\
  color: #A6C6FF\
}\
.ace-capsula-js .ace_variable {\
  color: #57D7FF\
}\
.ace-capsula-js .ace_variable.ace_language {\
  color: #DEDEDE\
}\
.ace-capsula-js .ace_xml-pe {\
  color: #494949\
}\
.ace-capsula-js .ace_indent-guide {\
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYIiPj/8PAARgAh2NTMh8AAAAAElFTkSuQmCC) right repeat-y\
}";
  const dom = acequire('../lib/dom');
  dom.importCssString(exports.cssText, exports.cssClass);
});
