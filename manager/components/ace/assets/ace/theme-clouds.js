define("ace/theme/clouds",["require","exports","module","ace/lib/dom"],function(a,b,c){b.isDark=!1,b.cssClass="ace-clouds",b.cssText="\n.ace-clouds .ace_editor {\n  border: 2px solid rgb(159, 159, 159);\n}\n\n.ace-clouds .ace_editor.ace_focus {\n  border: 2px solid #327fbd;\n}\n\n.ace-clouds .ace_gutter {\n  background: #ebebeb;\n  color: #333;\n}\n\n.ace-clouds .ace_print_margin {\n  width: 1px;\n  background: #e8e8e8;\n}\n\n.ace-clouds .ace_scroller {\n  background-color: #FFFFFF;\n}\n\n.ace-clouds .ace_text-layer {\n  color: #000000;\n}\n\n.ace-clouds .ace_cursor {\n  border-left: 2px solid #000000;\n}\n\n.ace-clouds .ace_cursor.ace_overwrite {\n  border-left: 0px;\n  border-bottom: 1px solid #000000;\n}\n\n.ace-clouds .ace_marker-layer .ace_selection {\n  background: #BDD5FC;\n}\n\n.ace-clouds.multiselect .ace_selection.start {\n  box-shadow: 0 0 3px 0px #FFFFFF;\n  border-radius: 2px;\n}\n\n.ace-clouds .ace_marker-layer .ace_step {\n  background: rgb(255, 255, 0);\n}\n\n.ace-clouds .ace_marker-layer .ace_bracket {\n  margin: -1px 0 0 -1px;\n  border: 1px solid #BFBFBF;\n}\n\n.ace-clouds .ace_marker-layer .ace_active_line {\n  background: #FFFBD1;\n}\n\n.ace-clouds .ace_gutter_active_line {\n  background-color : #dcdcdc;\n}\n\n.ace-clouds .ace_marker-layer .ace_selected_word {\n  border: 1px solid #BDD5FC;\n}\n\n.ace-clouds .ace_invisible {\n  color: #BFBFBF;\n}\n\n.ace-clouds .ace_keyword, .ace-clouds .ace_meta {\n  color:#AF956F;\n}\n\n.ace-clouds .ace_keyword.ace_operator {\n  color:#484848;\n}\n\n.ace-clouds .ace_constant.ace_language {\n  color:#39946A;\n}\n\n.ace-clouds .ace_constant.ace_numeric {\n  color:#46A609;\n}\n\n.ace-clouds .ace_invalid {\n  background-color:#FF002A;\n}\n\n.ace-clouds .ace_fold {\n    background-color: #AF956F;\n    border-color: #000000;\n}\n\n.ace-clouds .ace_support.ace_function {\n  color:#C52727;\n}\n\n.ace-clouds .ace_storage {\n  color:#C52727;\n}\n\n.ace-clouds .ace_string {\n  color:#5D90CD;\n}\n\n.ace-clouds .ace_comment {\n  color:#BCC8BA;\n}\n\n.ace-clouds .ace_entity.ace_other.ace_attribute-name {\n  color:#606060;\n}\n\n.ace-clouds .ace_markup.ace_underline {\n    text-decoration:underline;\n}";var d=a("../lib/dom");d.importCssString(b.cssText,b.cssClass)})