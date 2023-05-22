// File log.js
// from https://gist.github.com/kamleshchandnani/07c63f3d728672d91f97b69bbf700eed#file-umd-example-js
(function (global, factory) {
    if (typeof define === "function" && define.amd) {
      define(["exports"], factory);//////
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {////
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.log = mod.exports;
    }
  })(this, function (exports) {
    "use strict";
  
    function log() {
      console.log("Example of UMD module system");
    }
    // expose log to other modules
    exports.log = log;
  });