"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('next/constants'),
    PHASE_EXPORT = _require.PHASE_EXPORT;

var copy = require('recursive-copy');

function withPublicFolderPlugin() {
  var nextConfig = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var composePlugins = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var nextComposePlugins = composePlugins.nextComposePlugins;

  var nextConfigMethod = function nextConfigMethod(phase, args) {
    var orginalConfig = nextConfig;

    if (typeof nextConfig === 'function') {
      orginalConfig = nextConfig(phase, args);
    }

    var newConfig = _objectSpread({}, orginalConfig);

    if (phase === PHASE_EXPORT) {
      Object.assign(newConfig, {
        exportPathMap: function () {
          var _exportPathMap = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee(defaultPathMap) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return copy('./public', './out');

                  case 2:
                    return _context.abrupt("return", defaultPathMap);

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function exportPathMap(_x) {
            return _exportPathMap.apply(this, arguments);
          }

          return exportPathMap;
        }()
      });
    }

    return newConfig;
  };

  var phase = composePlugins.phase;
  return nextComposePlugins ? nextConfigMethod(phase) : nextConfigMethod;
}

module.exports = {
  withPublicFolderPlugin: withPublicFolderPlugin
};