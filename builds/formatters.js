!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((r.indicative=r.indicative||{},r.indicative.formatters={}))}(this,function(r){"use strict";function e(){this.errors=[]}function t(){this.errors=[]}e.prototype.addError=function(r,e,t,o){var i=r;r instanceof Error&&(t="ENGINE_EXCEPTION",i=r.message),this.errors.push({message:i,field:e,validation:t})},e.prototype.toJSON=function(){return this.errors.length?this.errors:null},t.prototype.addError=function(r,e,t,o){var i=r;r instanceof Error&&(t="ENGINE_EXCEPTION",i=r.message),this.errors.push({title:t,detail:i,source:{pointer:e}})},t.prototype.toJSON=function(){return this.errors.length?{errors:this.errors}:null},r.Vanilla=e,r.JsonApi=t,Object.defineProperty(r,"__esModule",{value:!0})});
