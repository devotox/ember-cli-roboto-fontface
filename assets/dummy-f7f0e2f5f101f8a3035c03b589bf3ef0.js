"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,o,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var n=Ember.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:t.default});(0,o.default)(n,a.default.modulePrefix)
var i=n
e.default=i}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}
e.default=o}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,t){function o(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var o
if("undefined"!=typeof window)o=window
else if("undefined"!=typeof global)o=global
else{if("undefined"==typeof self)return
o=self}var a,n=t.default.exportApplicationGlobal
a="string"==typeof n?n:Ember.String.classify(t.default.modulePrefix),o[a]||(o[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete o[a]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=o,e.default=void 0
var a={name:"export-application-global",initialize:o}
e.default=a}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=t.default
e.default=o}),define("dummy/router",["exports","dummy/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var o=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
o.map(function(){})
var a=o
e.default=a}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0
var t=Ember.HTMLBars.template({id:"X7EpZcp0",block:'{"symbols":[],"statements":[[7,"h2"],[11,"id","title"],[9],[0,"Ember CLI Roboto Fontface"],[10],[0,"\\n\\n"],[7,"p"],[9],[0,"This page shows the import of Roboto Fontface"],[10],[0,"\\n"],[7,"p"],[9],[0,"The CSS has been added to  dist/assets/vendor-5dace9e01e78ee6aa536236333b99c18.css"],[10],[0,"\\n"],[7,"p"],[9],[0,"The Fonts have been added to dist/fonts/roboto/"],[10]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})
e.default=t}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),o={default:JSON.parse(decodeURIComponent(t))}
return Object.defineProperty(o,"__esModule",{value:!0}),o}catch(a){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({})
