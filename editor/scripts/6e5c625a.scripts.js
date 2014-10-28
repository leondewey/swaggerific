"use strict";function removeVendorExtensions(a){if(!angular.isObject(a))return a;var b={};return Object.keys(a).forEach(function(c){"x-"!==c.toLowerCase().substring(0,2)&&(b[c]=removeVendorExtensions(a[c]))}),b}function load(a){var b,c;if(!angular.isString(a))throw new Error("load function only accepts a string");try{JSON.parse(a)}catch(d){b=d}if(!b)return jsyaml.dump(JSON.parse(a));try{jsyaml.load(a)}catch(d){c=d}if(!c)return a;throw new Error("load function called with an invalid string")}window.PhonicsApp=angular.module("PhonicsApp",["ngCookies","ngResource","ngSanitize","ui.router","ui.ace","ui.bootstrap","ngStorage","ngSanitize","jsonFormatter","hc.marked","ui.layout","mohsen1.json-schema-view"]),ace.define("ace/theme/atom_dark",["require","exports","module","ace/lib/dom"],function(a,b){b.isDark=!0,b.cssClass="ace-atom-dark",b.cssText=".ace-atom-dark {font-size:16px} .ace-atom-dark .ace_gutter {background: #1a1a1a;color: #868989}.ace-atom-dark .ace_print-margin {width: 1px;background: #1a1a1a}.ace-atom-dark {background-color: #1d1f21;color: #A8FF60}.ace-atom-dark .ace_cursor {color: white}.ace-atom-dark .ace_marker-layer .ace_selection {background: #444444}.ace-atom-dark.ace_multiselect .ace_selection.ace_start {box-shadow: 0 0 3px 0px #000000;border-radius: 2px}.ace-atom-dark .ace_marker-layer .ace_step {background: rgb(102, 82, 0)}.ace-atom-dark .ace_marker-layer .ace_bracket {margin: -1px 0 0 -1px;border: 1px solid #888888}.ace-atom-dark .ace_marker-layer .ace_highlight {border: 1px solid rgb(110, 119, 0);border-bottom: 0;box-shadow: inset 0 -1px rgb(110, 119, 0);margin: -1px 0 0 -1px;background: rgba(255, 235, 0, 0.1);}.ace-atom-dark .ace_marker-layer .ace_active-line {background: #2A2A2A}.ace-atom-dark .ace_gutter-active-line {background-color: #2A2A2A}.ace-atom-dark .ace_stack {background-color: rgb(66, 90, 44)}.ace-atom-dark .ace_marker-layer .ace_selected-word {border: 1px solid #888888}.ace-atom-dark .ace_invisible {color: #343434}.ace-atom-dark .ace_keyword,.ace-atom-dark .ace_meta,.ace-atom-dark .ace_storage,.ace-atom-dark .ace_storage.ace_type,.ace-atom-dark .ace_support.ace_type {color: #96CBFE}.ace-atom-dark .ace_keyword.ace_operator {color: #70C0B1}.ace-atom-dark .ace_constant.ace_character,.ace-atom-dark .ace_constant.ace_language,.ace-atom-dark .ace_constant.ace_numeric,.ace-atom-dark .ace_keyword.ace_other.ace_unit,.ace-atom-dark .ace_support.ace_constant,.ace-atom-dark .ace_variable.ace_parameter {color: #fe73fd}.ace-atom-dark .ace_constant.ace_other {color: #EEEEEE}.ace-atom-dark .ace_invalid {color: #CED2CF;background-color: #DF5F5F}.ace-atom-dark .ace_invalid.ace_deprecated {color: #CED2CF;background-color: #B798BF}.ace-atom-dark .ace_fold {background-color: #7AA6DA;border-color: #DEDEDE}.ace-atom-dark .ace_entity.ace_name.ace_function,.ace-atom-dark .ace_support.ace_function,.ace-atom-dark .ace_variable {color: #7AA6DA}.ace-atom-dark .ace_support.ace_class,.ace-atom-dark .ace_support.ace_type {color: #E7C547}.ace-atom-dark .ace_heading,.ace-atom-dark .ace_markup.ace_heading,.ace-atom-dark .ace_string {color: #B9CA4A}.ace-atom-dark .ace_entity.ace_name.ace_tag,.ace-atom-dark .ace_entity.ace_other.ace_attribute-name,.ace-atom-dark .ace_meta.ace_tag,.ace-atom-dark .ace_string.ace_regexp,.ace-atom-dark .ace_variable {color: #96CBFE}.ace-atom-dark .ace_comment {color: #7a7a7a}.ace-atom-dark .ace_c9searchresults.ace_keyword {color: #C2C280;}.ace-atom-dark .ace_indent-guide {background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAEklEQVQImWNgYGBgYFBXV/8PAAJoAXX4kT2EAAAAAElFTkSuQmCC) right repeat-y}";var c=a("../lib/dom");c.importCssString(b.cssText,b.cssClass)}),PhonicsApp.config(["$provide",function(a){a.constant("snippets",[{name:"swagger",trigger:"sw",path:[],content:['swagger: "2.0"',"${1}"].join("\n")},{name:"info",trigger:"info",path:[],content:["info:","  version: ${1:0.0.0}","  title: ${2:title}","  description: ${3:description}","  termsOfService: ${4:terms}","  contact:","    name: ${5}","    url: ${6}","    email: ${7}","  license:","    name: ${8:MIT}","    url: ${9:http://opensource.org/licenses/MIT}","${10}"].join("\n")},{name:"paths",trigger:"pa",path:[],content:["paths:","  ${1}"].join("\n")},{name:"definitions",trigger:"def",path:[],content:["definitions:","  ${1}"].join("\n")},{name:"path",trigger:"path",path:["paths"],content:["/${1}:","  ${2}"].join("\n")},{name:"operation",trigger:"op",path:["paths","*"],content:["${1:operationName}:","  summary: ${2}","  description: ${2}","  responses:","    ${3:response}","  parameters:","    ${4:parameter}","  tags: ${5:[]}","${6}"].join("\n")},{name:"parameter",trigger:"param",path:["paths","*","*"],content:["- name: ${1:parameter_name}","  in: ${2:in}","  description: ${3:description}","  schema:","    ${4:schema}","${5}"].join("\n")},{name:"response",trigger:"resp",path:["paths","*","*"],content:["${1:code}:","  description: ${2}","  schema: ${3}","${4}"].join("\n")},{name:"model",trigger:"mod|def",path:["definitions"],content:["${1:ModelName}:","  properties:","    ${2}"]}])}]),function(a,b,c,d,e,f,g){a.GoogleAnalyticsObject=e,a[e]=a[e]||function(){(a[e].q=a[e].q||[]).push(arguments)},a[e].l=1*new Date,f=b.createElement(c),g=b.getElementsByTagName(c)[0],f.async=1,f.src=d,g.parentNode.insertBefore(f,g)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("require","linker"),ga("linker:autoLink",["wordnik.github.io","apigee.github.io","swagger.wordnik.com","editor.swagger.wordnik.com","swagger.io"]),ga("create","UA-51231036-1","auto",{allowLinker:!0}),ga("send","pageview"),_.templateSettings={interpolate:/\{(.+?)\}/g},PhonicsApp.controller("MainCtrl",["$rootScope","$stateParams","$location","Editor","Storage","FileLoader","BackendHealthCheck","defaults",function(a,b,c,d,e,f,g,h){function i(){e.load("yaml").then(function(a){var g;b.import?(g=b.import,c.search("import",null)):a||(g=h.examplesFolder+h.exampleFiles[0]),g&&f.loadFromUrl(g).then(function(a){a&&(e.save("yaml",a),d.setValue(a))})})}a.$on("$stateChangeStart",d.initializeEditor),g.startChecking(),a.$on("$stateChangeStart",i),a.isPreviewMode="edit"!==b.mode,$("body").addClass(h.brandingCssClass),i()}]),PhonicsApp.controller("HeaderCtrl",["$scope","Editor","Storage","Builder","FileLoader","ASTManager","Codegen","$modal","$stateParams","$state","defaults","strings",function(a,b,c,d,e,f,g,h,i,j,k,l){function m(a){h.open({templateUrl:"templates/code-gen-error-modal.html",controller:"GeneralModal",size:"large",resolve:{data:function(){return a.data}}})}function n(){var b="text/plain";c.load("yaml").then(function(c){var d=jsyaml.load(c);d.info.version&&(d.info.version=String(d.info.version)),d.swagger&&(d.swagger=2===d.swagger?"2.0":String(d.swagger)),d=JSON.stringify(d,null,4);var e=new Blob([d],{type:b});a.jsonDownloadHref=window.URL.createObjectURL(e),a.jsonDownloadUrl=[b,"swagger.json",a.jsonDownloadHref].join(":");var f=new Blob([c],{type:b});a.yamlDownloadHref=window.URL.createObjectURL(f),a.yamlDownloadUrl=[b,"swagger.yaml",a.yamlDownloadHref].join(":")})}function o(){}a.breadcrumbs=i.path?[{active:!0,name:i.path}]:[],c.addChangeListener("progress",function(b){a.status=l.stausMessages[b],a.statusClass=null,b>0&&(a.statusClass="success"),0>b&&(a.statusClass="error")}),c.load("intro").then(function(b){b||k.disableNewUserIntro||(a.showAbout=!0,c.save("intro",!0))}),a.disableCodeGen=k.disableCodeGen,g.getServers().then(function(b){a.servers=b}),g.getClients().then(function(b){a.clinets=b}),a.getServer=function(a){g.getServer(a).then(o,m)},a.getClient=function(a){g.getClient(a).then(o,m)},a.showFileMenu=function(){return!k.disableFileMenu},a.showHeaderBranding=function(){return k.headerBranding},a.newProject=function(a){e.loadFromUrl("spec-files/guide.yaml").then(function(d){d=a?"":d,c.save("yaml",d),b.setValue(d),f.refresh(),j.go("home",{mode:"edit"})})},a.assignDownloadHrefs=function(){n(a,c)},a.openImportFile=function(){h.open({templateUrl:"templates/file-import.html",controller:"FileImportCtrl",size:"large"})},a.openImportUrl=function(){h.open({templateUrl:"templates/url-import.html",controller:"UrlImportCtrl",size:"large"})},a.toggleAboutEditor=function(b){a.showAbout=b},a.openExamples=function(){h.open({templateUrl:"templates/open-examples.html",controller:"OpenExamplesCtrl",size:"large"})}}]),PhonicsApp.controller("FileImportCtrl",["$scope","$modalInstance","FileLoader","$localStorage","Storage","Editor","ASTManager",function(a,b,c,d,e,f,g){var h;a.fileChanged=function(a){h=c.load(a)},a.ok=function(){angular.isString(h)&&(f.setValue(h),e.save("yaml",h),g.refresh()),b.close()},a.isInvalidFile=function(){return null===h},a.isFileSelected=function(){return!!h},a.cancel=b.close}]),PhonicsApp.controller("EditorCtrl",["$scope","Editor","Builder","Storage","ASTManager",function(a,b,c,d,e){function f(){var a=b.getValue();d.save("yaml",a),e.refresh()}var g=_.debounce(f,1e3);a.aceLoaded=b.aceLoaded,a.aceChanged=function(){d.save("progress",0),g()},b.ready(function(){d.load("yaml").then(function(a){b.setValue(a),f()})})}]),PhonicsApp.controller("PreviewCtrl",["Storage","Builder","ASTManager","Sorter","Editor","BackendHealthCheck","FocusedPath","$scope","$rootScope",function(a,b,c,d,e,f,g,h,i){function j(a){c.refresh(a),(f.isHealthy()||i.isPreviewMode)&&b.buildDocs(a).then(k,k)}function k(b){h.specs=d.sort(b.specs),h.error=null,a.save("progress",1),i.isPreviewMode||e.clearAnnotation(),b.error&&(b.error.yamlError&&!i.isPreviewMode&&e.annotateYAMLErrors(b.error.yamlError),h.error=b.error,a.save("progress",-1))}a.addChangeListener("yaml",j),i.isPreviewMode&&a.load("yaml").then(j),c.onFoldStatusChanged(function(){_.defer(function(){h.$apply()})}),h.isCollapsed=c.isFolded,h.isAllFolded=c.isAllFolded,h.toggle=function(a){c.toggleFold(a,e)},h.toggleAll=function(a){c.setFoldAll(a,!0,e)},h.focusEdit=function(a,b,d){if(!i.isPreviewMode){var f=c.lineForPath(b);d=d||0,a.stopPropagation(),e.gotoLine(f-d)}},h.isInFocus=function(a){return g.isInFocus(a)},h.getEditPath=function(a){return"#/paths?path="+window.encodeURIComponent(a)},h.responseCodeClassFor=function(a){var b="default";switch(Math.floor(+a/100)){case 2:b="green";break;case 5:b="red";break;case 4:b="yellow";break;case 3:b="blue"}return b},h.isVendorExtension=function(a){return"x-"===a.substring(0,2).toLowerCase()}}]),PhonicsApp.controller("GeneralModal",["$scope","$modalInstance","data",function(a,b,c){a.ok=b.close,a.cancel=b.close,a.data=c}]),PhonicsApp.controller("UrlImportCtrl",["$scope","$modalInstance","FileLoader","$localStorage","Storage","Editor","ASTManager",function(a,b,c,d,e,f,g){var h;a.url=null,a.fetch=function(b){angular.isString("string")&&b.indexOf("http")>-1&&c.loadFromUrl(b).then(function(b){h=b,a.canImport=!0},function(b){a.error=b,a.canImport=!1})},a.ok=function(){angular.isString(h)&&(e.save("yaml",h),f.setValue(h),g.refresh()),b.close()},a.cancel=b.close}]),PhonicsApp.controller("ErrorPresenterCtrl",["$scope",function(a){function b(a){return a.map(function(a){return[a.message,"at "+a.path.join(" ▹ ")].join("\n")}).join("\n\n")}a.docsMode=!1,a.getError=function(){var b=a.$parent.error;return b&&b.emptyDocsError&&!a.docsMode?null:b},a.getType=function(){var b=a.getError();return b.swaggerError&&b.swaggerError.errors.length?"Swagger Error":b.swaggerError&&!b.swaggerError.errors.length?"Swagger Warning":b.yamlError?"YAML Syntax Error":b.resolveError?"Resolve Error":b.emptyDocsError?"Empty Document Error":"Unknown Error"},a.getDescription=function(){var c=a.getError();if(c.emptyDocsError)return c.emptyDocsError.message;if(c.swaggerError){if(c.swaggerError.errors.length)return b(c.swaggerError.errors);if(c.swaggerError.warnings.length)return b(c.swaggerError.warnings)}return c.yamlError?c.yamlError.message.replace("JS-YAML: ","").replace(/./,function(a){return a.toUpperCase()}):c.resolveError?c.resolveError:c},a.getErrorLevel=function(){var b=a.getError();return b.swaggerError&&!b.swaggerError.errors.length?"warning":"error"},a.getLineNumber=function(){var b=a.getError();return b&&b.yamlError?b.yamlError.mark.line:-1},a.showLineJumpLink=function(){return-1!==a.getLineNumber()}}]),PhonicsApp.controller("OpenExamplesCtrl",["FileLoader","Builder","Storage","Editor","ASTManager","defaults","$scope","$modalInstance",function(a,b,c,d,e,f,g,h){g.files=f.exampleFiles,g.selectedFile=f.exampleFiles[0],g.open=function(b){a.loadFromUrl("spec-files/"+b).then(function(a){c.save("yaml",a),d.setValue(a),e.refresh(),h.close()},h.close)},g.cancel=h.close}]),PhonicsApp.directive("onReadFile",["$parse",function(a){return{restrict:"A",scope:!1,link:function(b,c,d){var e=a(d.onReadFile);c.on("change",function(a){var c=new FileReader;c.onload=function(a){b.$apply(function(){e(b,{$fileContent:a.target.result})})},c.readAsText((a.srcElement||a.target).files[0])})}}}]),PhonicsApp.directive("path",function(){return{restrict:"E",replace:!0,templateUrl:"templates/path.html",scope:!1}}),PhonicsApp.directive("operation",["defaults",function(a){return{restrict:"E",replace:!0,templateUrl:"templates/operation.html",scope:!1,link:function(b){b.isTryOpen=!1,b.enableTryIt=a.enableTryIt,b.toggleTry=function(){b.isTryOpen=!b.isTryOpen}}}}]),PhonicsApp.directive("schemaModel",["$parse",function(a){return{templateUrl:"templates/schema-model.html",restrict:"E",replace:!0,scope:{schema:"="},link:function(b,c,d){b.mode="model",b.json=removeVendorExtensions(a(d.schema)(b.$parent))}}}]),PhonicsApp.directive("stopEvent",function(){return{restrict:"A",link:function(a,b){b.bind("click",function(a){a.stopPropagation()})}}}),PhonicsApp.directive("scrollIntoViewWhen",function(){return{restrict:"A",link:function(a,b,c){a.$watch(c.scrollIntoViewWhen,function(a){a&&b.scrollIntoView(100)})}}}),PhonicsApp.directive("collapseWhen",function(){var a=200;return{restrict:"A",link:function(b,c,d){function e(){setTimeout(function(){c.removeAttr("style")},a)}var f=null;if(d.collapseWhen){var g=c.clone();g.removeAttr("style"),g.appendTo("body"),f=g.height(),g.remove()}b.$watch(d.collapseWhen,function(a){a?(f=c.height(),c.height(f),c.height(0),c.addClass("c-w-collapsed"),e()):(c.height(f),c.removeClass("c-w-collapsed"),e())})}}}),PhonicsApp.config(["$provide",function(a){a.constant("defaults",{codegen:{servers:"http://generator.wordnik.com/online/api/gen/servers",clients:"http://generator.wordnik.com/online/api/gen/clients",server:"http://generator.wordnik.com/online/api/gen/servers/{language}",client:"http://generator.wordnik.com/online/api/gen/clients/{language}"},disableCodeGen:!0,examplesFolder:"/swag/",exampleFiles:["meta"],backendEndpoint:"/swag/",useBackendForStorage:!0,backendHelathCheckTimeout:15e3,useYamlBackend:!1,disableFileMenu:!1,headerBranding:!1,enableTryIt:!1,brandingCssClass:"",schemaUrl:"/swag/"})}]),PhonicsApp.config(["$provide",function(a){a.constant("strings",{stausMessages:{"-2":"Unsaved Changes. Check your server connection","-1":"Error!",0:"Working...",1:"All changes saved."}})}]),PhonicsApp.filter("getResourceName",function(){return function(a){return a.resourcePath.replace(/\//g,"")}}),PhonicsApp.directive("tryOperation",function(){return{templateUrl:"templates/try-operation.html",restrict:"E",replace:!0,scope:{operation:"="},link:function(a){function b(){var b={};return a.hasParams&&a.$parent.operation.parameters.filter(function(c){"header"===c.in&&a.paramModels[c.name]&&(b[c.name]=a.paramModels[c.name])}),b}function c(){return a.$parent.operation.consumes?a.$parent.operation.consumes:f.consumes}function d(){var b=window.location.protocol,c=f.host||window.location.host,d=f.basePath||"",e=a.$parent.$parent.pathName,g=_.template(e),h=a.hasParams?a.$parent.operation.parameters:[],i=h.reduce(function(b,c){return"path"===c.in&&(b[c.name]=a.paramModels[c.name]),b},{}),j=h.reduce(function(b,c){return"query"===c.in&&a.paramModels[c.name]&&(b[c.name]=a.paramModels[c.name]),b},{}),k=$.param(j);return b+"//"+c+d+g(i)+(k?"?"+k:"")}function e(){a.response=null,a.xhrInProgress=!0,a.failed=!1,$.ajax({url:a.generateUrl(),type:a.$parent.operationName,headers:_.extend({"Content-Type":a.contentType},b())}).fail(function(){a.failed=!0}).always(function(b){if(!b)return a.responseText="",a.xhrInProgress=!1,void a.$digest();var c;try{c=JSON.stringify(JSON.parse(b.responseText),null,2)}catch(d){c=b.responseText}a.responseText=angular.isString(c)&&0===c.indexOf("<?xml")?$("<div/>").text(c).html():c,a.response=b,a.xhrInProgress=!1,a.$digest()})}var f=a.$parent.$parent.$parent.$parent.specs;a.httpProtorcol="HTTP/1.1",a.paramModels={},a.hasParams=Array.isArray(a.$parent.operation.parameters),a.hasBody=a.hasParams&&a.$parent.operation.parameters.some(function(a){return"body"===a.in}),a.generateUrl=d,a.makeCall=e,a.getContentTypeHeaders=c,a.xhrInProgress=!1,a.getHeaderParams=b}}}),PhonicsApp.service("Sorter",function(){function a(a){var d=[];return angular.isObject(a)?(d=Object.keys(a).map(function(d){if(d.toLowerCase().substring(0,2)!==c){var e={operationName:d,responses:b(a[d].responses)};return a[d]=_.omit(a[d],"responses"),_.extend(e,a[d]),e}}),_.compact(d)):d}function b(a){var b=[];return angular.isObject(a)?(b=Object.keys(a).map(function(b){if(b.toLowerCase().substring(0,2)!==c){var d=_.extend({responseCode:b},a[b]);return d}}),_.compact(b)):b}var c="x-";this.sort=function(b){if(b&&b.paths){var d=Object.keys(b.paths).map(function(d){return d.toLowerCase().substring(0,2)!==c?{pathName:d,operations:a(b.paths[d])}:void 0});b.paths=_.compact(d)}return b}}),PhonicsApp.service("Autocomplete",["snippets","ASTManager",function(a,b){function c(a,b){if(!Array.isArray(a)||!Array.isArray(b))return!1;if(a.length!==b.length)return!1;for(var c=0;c<a.length;c++)if(a[c]!==b[c])return!1;return!0}function d(a){b.refresh(f.getValue());var d=b.pathForPosition(a.row);return d||1!==a.column||(d=[]),function(a){return c(d,a.path)}}function e(a){return a.score=1e3,a}var f=null,g=["get","post","delete","options","put","headers","swagger","info","host","basePath","schemes","consumes","produces","paths","definitions","parameters","responses","security","securityDefinitions","tags","externalDocs","title","version","description","termsOfService","contact","license","name","url","email","name","url","description","url","tags","summary","description","externalDocs","operationId","produces","consumes","parameters","responses","schemes","deprecated","security","$ref","get","put","post","delete","options","head","patch","parameters","description","schema","headers","examples","type","format","items","collectionFormat","default","maximum","exclusiveMaximum","minimum","exclusiveMinimum","maxLength","minLength","pattern","maxItems","minItems","uniqueItems","enum","multipleOf","description","description","name","in","required","schema","required","in","description","name","type","format","items","collectionFormat","default","maximum","exclusiveMaximum","minimum","exclusiveMinimum","maxLength","minLength","pattern","maxItems","minItems","uniqueItems","enum","multipleOf","required","in","description","name","type","format","items","collectionFormat","default","maximum","exclusiveMaximum","minimum","exclusiveMinimum","maxLength","minLength","pattern","maxItems","minItems","uniqueItems","enum","multipleOf","required","in","description","name","type","format","items","collectionFormat","default","maximum","exclusiveMaximum","minimum","exclusiveMinimum","maxLength","minLength","pattern","maxItems","minItems","uniqueItems","enum","multipleOf","required","in","description","name","type","format","items","collectionFormat","default","maximum","exclusiveMaximum","minimum","exclusiveMinimum","maxLength","minLength","pattern","maxItems","minItems","uniqueItems","enum","multipleOf","format","title","description","default","multipleOf","maximum","exclusiveMaximum","minimum","exclusiveMinimum","maxLength","minLength","pattern","maxItems","minItems","uniqueItems","maxProperties","minProperties","required","enum","type","items","allOf","properties","discriminator","readOnly","xml","externalDocs","example","type","format","items","collectionFormat","default","maximum","exclusiveMaximum","minimum","exclusiveMinimum","maxLength","minLength","pattern","maxItems","minItems","uniqueItems","enum","multipleOf","name","namespace","prefix","attribute","wrapped","name","description","externalDocs","type","description","type","name","in","description","type","flow","scopes","authorizationUrl","description","type","flow","scopes","tokenUrl","description","type","flow","scopes","tokenUrl","description","type","flow","scopes","authorizationUrl","tokenUrl","description"];g=g.map(function(a){return{name:a,value:a,score:200,meta:"keyword"}});var h={getCompletions:function(b,c,f,h,i){b.completer.autoSelect=!0;var j=a.filter(d(f)).map(function(a){return{caption:a.name,snippet:a.content,meta:"snippet"}}).map(e),k=g.concat(j);i(null,k)}};this.init=function(a){f=a,f.completers=[h]}}]),PhonicsApp.service("FileLoader",["$http",function(a){this.loadFromUrl=function(b){return a.get(b).then(function(a){return load(a.data)})},this.load=load}]),PhonicsApp.service("Editor",["Autocomplete","ASTManager",function(a,b){function c(a){a&&a.mark&&a.reason&&s.getSession().setAnnotations([{row:a.mark.line,column:a.mark.column,text:a.reason,type:"error"}])}function d(){s.getSession().clearAnnotations()}function e(c){window.e=s=c,ace.config.set("basePath","bower_components/ace-builds/src-noconflict"),a.init(c),s.setOptions({fontFamily:"Source Code Pro",enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0}),b.refresh(s.getValue()),n(b.onFoldChanged),t.forEach(function(a){a(v)}),t=[];var d=s.getSession();d.on("changeFold",f),g(d)}function f(){var a=arguments;u.forEach(function(b){b.apply(s,a)})}function g(a){a.setTabSize(2)}function h(a){angular.isString(a)&&s&&s.getSession().setValue(a),angular.isObject(a)&&h(jsyaml.dump(angular.copy(a)))}function i(){return s?s.getSession().getValue():void 0}function j(){s.resize()}function k(a){angular.isFunction(a)&&t.push(a)}function l(){var a=s.getSession(),b=null;return a.foldAll(),b=a.unfold(),Array.isArray(b)?b:[]}function m(a){return s.session.getLine(a)}function n(a){u.push(a)}function o(a,b){s&&s.getSession().foldAll(a,b)}function p(a){s&&s.getSession().unfold(a,100)}function q(a){s.gotoLine(a)}function r(){return s?s.getCursorPosition().row:null}var s=null,t=[],u=[],v=this;this.getValue=i,this.setValue=h,this.aceLoaded=e,this.resize=j,this.ready=k,this.annotateYAMLErrors=c,this.clearAnnotation=d,this.getAllFolds=l,this.getLine=m,this.onFoldChanged=n,this.addFold=o,this.removeFold=p,this.gotoLine=q,this.lineInFocus=r}]),PhonicsApp.service("Builder",["Resolver","$q",function(a,b){function c(c){var d,e=b.defer();if(!c)return e.reject({specs:null,error:{emptyDocsError:{message:"Empty Document"}}}),e.promise;try{d=f(c)}catch(g){return e.reject({error:{yamlError:g},specs:null}),e.promise}if(d&&d.definitions)for(var h in d.definitions)_.isEmpty(d.definitions[h].title)&&(d.definitions[h].title=h);return a.resolve(d).then(function(a){var c={specs:a},e=b.defer(),f=SwaggerTools.specs.v2.validate(d);return f?(c.error={swaggerError:f},e.reject(c)):e.resolve(c),e.promise},function(a){return{error:{resolveError:a.data,raw:a},specs:d}})}function d(a,b,c){var d,e=null;try{d=f(a)}catch(g){e={yamlError:g}}return e||(c.paths[b]=d[b]),{specs:c,error:e}}function e(a,b){return _.pick(a.paths,b)}var f=_.memoize(jsyaml.load);this.buildDocs=c,this.updatePath=d,this.getPath=e}]),PhonicsApp.service("ASTManager",function(){function a(a){try{j=yaml.compose(a)}catch(c){return}b()}function b(){k.forEach(function(a){a()})}function c(a,b){var d;if(b=b||j,!b)return b;if(!Array.isArray(a))throw new Error("Need path to find the node in the AST");if(!a.length)return b;if(d=a.shift(),b.tag===h)for(var e=0;e<b.value.length;e++){var f=b.value[e];if(f[0].value===d)return c(a,f[1])}else if(b.tag===i)return d=parseInt(d,10),b=b.value[d],c(a,b);return b}function d(a,b){var c;if(a=a||j,!angular.isObject(a)||!a.value)return a;if(a.start_mark.line===b)return a;for(var e=0;e<a.value.length;e++)if(a.tag===h?c=d(a.value[e][1],b):a.tag===i&&(c=d(a.value[e],b)),c)return c;return null}function e(a){var b=c(a);return b?b.start_mark.line:null}function f(a){function b(d,e){if(e.start_mark.line===a)c=d;else for(var f=0;f<e.value.length;f++)e.tag===h?b(d.concat(e.value[f][0].value),e.value[f][1]):e.tag===i&&b(d.concat(f),e.value[f])}var c=null;return a?(b([],j),c||(a--,b([],j)),c):[]}function g(a,b,c){c="undefined"==typeof c?b.folded:!c,c?(a.removeFold(b.start_mark.line),b.folded=!1):(a.addFold(b.start_mark.line-1,b.end_mark.line-1),b.folded=!0)}var h="tag:yaml.org,2002:map",i="tag:yaml.org,2002:seq",j={},k=[];this.onFoldChanged=function(a){var c=a.data.start.row+1,e="remove"!==a.action,f=d(j,c);f&&(f.folded=e),b()},this.toggleFold=function(a,d){var e=c(a,j);e&&e.start_mark&&(g(d,e),b())},this.setFoldAll=function(a,d,e){for(var f,k=c(a,j),l=0;l<k.value.length;l++)k.tag===h?f=k.value[l][1]:k.tag===i&&(f=k.value[l]),g(e,f,d);b()},this.isFolded=function(a){var b=c(a,j);return angular.isObject(b)&&!!b.folded},this.isAllFolded=function(a){var b,d=c(a);if(!d||!Array.isArray(d.value))return!1;for(var e=0;e<d.value.length;e++)if(d.tag===h?b=d.value[e][1]:d.tag===i&&(b=d.value[e]),!b.folded)return!1;return!0},this.onFoldStatusChanged=function(a){k.push(a)},this.refresh=a,this.lineForPath=e,this.pathForPosition=f}),PhonicsApp.service("Resolver",["$q","$http",function(a,b){function c(b,f){var g=a.defer();if(f||(f=b),Array.isArray(b))return a.all(b.map(function(a){return c(a,f)}));if(!angular.isObject(b))return g.resolve(b),g.promise;if(angular.isString(b.$ref)){if(e[b.$ref]){var h=e[b.$ref];return g.resolve(h),g.promises}return d(b.$ref,f).then(function(a){return e[b.$ref]=a,c(a,f)})}var i=[];return Object.keys(b).forEach(function(a){i.push(c(b[a],f))}),a.all(i).then(function(a){var c={};return Object.keys(b).forEach(function(b,d){c[b]=a[d]}),c})}function d(c,d){var e=a.defer();if(f[c])return e.resolve(f[c]),e.promise;if(/^http(s?):\/\//.test(c))return b.get(c).then(function(a){f[c]=a.data,e.resolve(a.data)}),e.promise;0!==c.indexOf("#/")&&(c="#/definitions/"+c);for(var g,h=c.substring(2).split("/"),i=d;h.length;)g=h.shift(),i[g]||e.reject({data:"Can not lookup "+g+" in "+angular.toJson(i)}),i=i[g];return f[c]=i,e.resolve(i),e.promise}var e={},f={};this.resolve=c}]),PhonicsApp.service("BackendHealthCheck",["$http","$interval","defaults","Storage",function(a,b,c,d){var e=!0;this.startChecking=function(){b(function(){a.get(window.location.href).then(function(){e=!0},function(){e=!1,d.save("progress",-2)})},c.backendHelathCheckTimeout)},this.isHealthy=function(){return e}}]),PhonicsApp.service("Codegen",["$http","defaults","Storage",function(a,b,c){function d(a){angular.isObject(a)&&a.code&&(window.location=a.data.code)}this.getServers=function(){return a.get(b.codegen.servers).then(function(a){return a.data})},this.getClients=function(){return a.get(b.codegen.clients).then(function(a){return a.data})},this.getServer=function(e){var f=_.template(b.codegen.server)({language:e});return c.load("yaml").then(function(b){var c=jsyaml.load(b);return a.post(f,{swagger:c}).then(d)})},this.getClient=function(e){var f=_.template(b.codegen.client)({language:e});return c.load("yaml").then(function(b){var c=jsyaml.load(b);return a.post(f,{swagger:c}).then(d)})}}]),PhonicsApp.service("FocusedPath",["ASTManager","Editor",function(a,b){this.isInFocus=function(c){var d=b.lineInFocus(),e=a.pathForPosition(d);return Array.isArray(e)&&_.isEqual(c,e.slice(0,c.length))}}]),PhonicsApp.service("Storage",["LocalStorage","Backend","defaults",function(a,b,c){return c.useBackendForStorage?b:a}]),PhonicsApp.service("LocalStorage",["$localStorage","$q",function(a,b){var c="SwaggerEditorCache",d=Object.create(null),e=this;a[c]=a[c]||Object.create(null),this.save=function(b,e){null!==e&&(Array.isArray(d[b])&&d[b].forEach(function(a){a(e)}),_.debounce(function(){window.requestAnimationFrame(function(){a[c][b]=e})},100)())},this.reset=function(){Object.keys(a[c]).forEach(function(a){e.save(a,"")})},this.load=function(d){var e=b.defer();return e.resolve(d?a[c][d]:a[c]),e.promise},this.addChangeListener=function(a,b){angular.isFunction(b)&&(d[a]||(d[a]=[]),d[a].push(b))}}]),PhonicsApp.service("Backend",["$http","$q","defaults","Builder",function(a,b,c,d){function e(b){var e=d.buildDocs(b,{resolve:!0});e.error||a.put(c.backendEndpoint,b)}function f(){}var g=Object.create(null),h=Object.create(null),i=_.throttle(e,200,{leading:!1,trailing:!0});this.save=function(a,b){h[a]=b,Array.isArray(g[a])&&g[a].forEach(function(a){a(b)}),c.useYamlBackend&&"yaml"===a&&b?i(b):"specs"===a&&b&&i(h[a])},this.reset=f,this.load=function(d){if("yaml"!==d){var e=b.defer();return d?e.resolve(h[d]):e.reject(),e.promise}return a.get(c.backendEndpoint).then(function(a){return c.useYamlBackend?(h.yaml=a.data,h.yaml):a.data})},this.addChangeListener=function(a,b){angular.isFunction(b)&&(g[a]||(g[a]=[]),g[a].push(b))}}]),PhonicsApp.config(["$compileProvider","$stateProvider","$urlRouterProvider",function(a,b,c){c.otherwise("/"),b.state("home",{url:"/{mode}?import",views:{"":{templateUrl:function(a){return"edit"===a.mode?"views/main.html":"views/main-preview.html"},controller:"MainCtrl"},"header@home":{templateUrl:"views/header/header.html",controller:"HeaderCtrl"},"editor@home":{templateUrl:"views/editor/editor.html",controller:"EditorCtrl"},"preview@home":{templateUrl:"views/preview/preview.html",controller:"PreviewCtrl"}}}),a.aHrefSanitizationWhitelist(".")}]),function(a){a.fn.scrollIntoView=function(b,c,d){function e(b,c){void 0===c?a.isFunction(f.complete)&&f.complete.call(b):f.smooth?a(b).stop().animate({scrollTop:c},f):(b.scrollTop=c,a.isFunction(f.complete)&&f.complete.call(b))}var f=a.extend({},a.fn.scrollIntoView.defaults);"object"==a.type(b)?a.extend(f,b):"number"==a.type(b)?a.extend(f,{duration:b,easing:c,complete:d}):0==b&&(f.smooth=!1);var g=1/0,h=0;1==this.size()?null==(g=this.get(0).offsetTop)||(h=g+this.get(0).offsetHeight):this.each(function(a,b){b.offsetTop<g?g=b.offsetTop:b.offsetTop+b.offsetHeight>h?h=b.offsetTop+b.offsetHeight:null}),h-=g;for(var i=this.commonAncestor().get(0),j=a(window).height();i;){var k=i.scrollTop,l=i.clientHeight;if(l>j&&(l=j),0==l&&"BODY"==i.tagName&&(l=j),i.scrollTop!=(null==(i.scrollTop+=1)||i.scrollTop)&&null!=(i.scrollTop-=1)||i.scrollTop!=(null==(i.scrollTop-=1)||i.scrollTop)&&null!=(i.scrollTop+=1))return void(k>=g?e(i,g):g+h>k+l?e(i,g+h-l):e(i,void 0));i=i.parentNode}return this},a.fn.scrollIntoView.defaults={smooth:!0,duration:null,easing:a.easing&&a.easing.easeOutExpo?"easeOutExpo":null,complete:a.noop(),step:null,specialEasing:{}},a.fn.isOutOfView=function(a){var b=!0;return this.each(function(){var c=this.parentNode,d=c.scrollTop,e=c.clientHeight,f=this.offsetTop,g=this.offsetHeight;(a?f>d+e:f+g>d+e)||(a?d>f+g:d>f)||(b=!1)}),b},a.fn.commonAncestor=function(){var b=[],c=1/0;a(this).each(function(){var d=a(this).parents();b.push(d),c=Math.min(c,d.length)});for(var d=0;d<b.length;d++)b[d]=b[d].slice(b[d].length-c);for(var d=0;d<b[0].length;d++){var e=!0;for(var f in b)if(b[f][d]!=b[0][d]){e=!1;break}if(e)return a(b[0][d])}return a([])}}(jQuery);