"use strict";

exports.__esModule = true;
exports.canWarn = void 0;
var canWarn = typeof console !== 'undefined' && process.env.NODE_ENV === 'development';
exports.canWarn = canWarn;