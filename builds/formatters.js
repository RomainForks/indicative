!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e.indicative=e.indicative||{},e.indicative.formatters={}))}(this,function(e){"use strict";function t(){this.errors=[]}function r(){this.errors=[]}t.prototype.addError=function(e,t,r){var o=e;e instanceof Error&&(r="ENGINE_EXCEPTION",o=e.message),this.errors.push({message:o,field:t,validation:r})},t.prototype.toJSON=function(){return this.errors},r.prototype.addError=function(e,t,r){var o=e;e instanceof Error&&(r="ENGINE_EXCEPTION",o=e.message),this.errors.push({title:r,detail:o,source:{pointer:t}})},r.prototype.toJSON=function(){return this.errors},e.Vanilla=t,e.JsonApi=r,Object.defineProperty(e,"__esModule",{value:!0})});