define("ace/theme/twilight",["require","exports","module","ace/lib/dom"],function(a,b,c){b.isDark=!0,b.cssClass="ace-twilight",b.cssText="\n.ace-twilight .ace_editor {\n  border: 2px solid rgb(159, 159, 159);\n}\n\n.ace-twilight .ace_editor.ace_focus {\n  border: 2px solid #327fbd;\n}\n\n.ace-twilight .ace_gutter {\n  background: #232323;\n  color: #F8F8F8;\n}\n\n.ace-twilight .ace_print_margin {\n  width: 1px;\n  background: #232323;\n}\n\n.ace-twilight .ace_scroller {\n  background-color: #141414;\n}\n\n.ace-twilight .ace_text-layer {\n  color: #F8F8F8;\n}\n\n.ace-twilight .ace_cursor {\n  border-left: 2px solid #A7A7A7;\n}\n\n.ace-twilight .ace_cursor.ace_overwrite {\n  border-left: 0px;\n  border-bottom: 1px solid #A7A7A7;\n}\n\n.ace-twilight .ace_marker-layer .ace_selection {\n  background: rgba(221, 240, 255, 0.20);\n}\n\n.ace-twilight.multiselect .ace_selection.start {\n  box-shadow: 0 0 3px 0px #141414;\n  border-radius: 2px;\n}\n\n.ace-twilight .ace_marker-layer .ace_step {\n  background: rgb(102, 82, 0);\n}\n\n.ace-twilight .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid rgba(255, 255, 255, 0.25);\n}\n\n.ace-twilight .ace_marker-layer .ace_active_line {\n  background: rgba(255, 255, 255, 0.031);\n}\n\n.ace-twilight .ace_gutter_active_line {\n  background-color: rgba(255, 255, 255, 0.031);\n}\n\n.ace-twilight .ace_marker-layer .ace_selected_word {\n  border: 1px solid rgba(221, 240, 255, 0.20);\n}\n\n.ace-twilight .ace_invisible {\n  color: rgba(255, 255, 255, 0.25);\n}\n\n.ace-twilight .ace_keyword, .ace-twilight .ace_meta {\n  color:#CDA869;\n}\n\n.ace-twilight .ace_constant, .ace-twilight .ace_constant.ace_other {\n  color:#CF6A4C;\n}\n\n.ace-twilight .ace_constant.ace_character,  {\n  color:#CF6A4C;\n}\n\n.ace-twilight .ace_constant.ace_character.ace_escape,  {\n  color:#CF6A4C;\n}\n\n.ace-twilight .ace_invalid.ace_illegal {\n  color:#F8F8F8;\nbackground-color:rgba(86, 45, 86, 0.75);\n}\n\n.ace-twilight .ace_invalid.ace_deprecated {\n  text-decoration:underline;\nfont-style:italic;\ncolor:#D2A8A1;\n}\n\n.ace-twilight .ace_support {\n  color:#9B859D;\n}\n\n.ace-twilight .ace_support.ace_constant {\n  color:#CF6A4C;\n}\n\n.ace-twilight .ace_fold {\n    background-color: #AC885B;\n    border-color: #F8F8F8;\n}\n\n.ace-twilight .ace_support.ace_function {\n  color:#DAD085;\n}\n\n.ace-twilight .ace_storage {\n  color:#F9EE98;\n}\n\n.ace-twilight .ace_variable {\n  color:#AC885B;\n}\n\n.ace-twilight .ace_string {\n  color:#8F9D6A;\n}\n\n.ace-twilight .ace_string.ace_regexp {\n  color:#E9C062;\n}\n\n.ace-twilight .ace_comment {\n  font-style:italic;\ncolor:#5F5A60;\n}\n\n.ace-twilight .ace_variable {\n  color:#7587A6;\n}\n\n.ace-twilight .ace_xml_pe {\n  color:#494949;\n}\n\n.ace-twilight .ace_meta.ace_tag {\n  color:#AC885B;\n}\n\n.ace-twilight .ace_entity.ace_name.ace_function {\n  color:#AC885B;\n}\n\n.ace-twilight .ace_markup.ace_underline {\n    text-decoration:underline;\n}\n\n.ace-twilight .ace_markup.ace_heading {\n  color:#CF6A4C;\n}\n\n.ace-twilight .ace_markup.ace_list {\n  color:#F9EE98;\n}";var d=a("../lib/dom");d.importCssString(b.cssText,b.cssClass)})