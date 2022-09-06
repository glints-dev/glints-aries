"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.Default = exports.BreadcrumbWithNoItemActive = exports.BreadcrumbWithFirstItemActive = void 0;

var _react = _interopRequireDefault(require("react"));

var _Breadcrumb = require("./Breadcrumb");

var _default = {
  title: 'Navigation/Breadcrumb',
  component: _Breadcrumb.Breadcrumb
};
exports["default"] = _default;

var Template = function Template() {
  return /*#__PURE__*/_react["default"].createElement(_Breadcrumb.Breadcrumb, null, /*#__PURE__*/_react["default"].createElement(_Breadcrumb.Breadcrumb.Item, null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/home"
  }, "Home")), /*#__PURE__*/_react["default"].createElement(_Breadcrumb.Breadcrumb.Item, null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/jobs"
  }, "Jobs")), /*#__PURE__*/_react["default"].createElement(_Breadcrumb.Breadcrumb.Item, {
    active: true
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/software-engineer"
  }, "Software Engineer")));
};

var Default = Template.bind({});
exports.Default = Default;

var BreadcrumbWithFirstItemActive = function BreadcrumbWithFirstItemActive() {
  return /*#__PURE__*/_react["default"].createElement(_Breadcrumb.Breadcrumb, null, /*#__PURE__*/_react["default"].createElement(_Breadcrumb.Breadcrumb.Item, {
    active: true
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/home"
  }, "Home")), /*#__PURE__*/_react["default"].createElement(_Breadcrumb.Breadcrumb.Item, null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/jobs"
  }, "Jobs")), /*#__PURE__*/_react["default"].createElement(_Breadcrumb.Breadcrumb.Item, null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/software-engineer"
  }, "Software Engineer")));
};

exports.BreadcrumbWithFirstItemActive = BreadcrumbWithFirstItemActive;

var BreadcrumbWithNoItemActive = function BreadcrumbWithNoItemActive() {
  return /*#__PURE__*/_react["default"].createElement(_Breadcrumb.Breadcrumb, null, /*#__PURE__*/_react["default"].createElement(_Breadcrumb.Breadcrumb.Item, null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/home"
  }, "Home")), /*#__PURE__*/_react["default"].createElement(_Breadcrumb.Breadcrumb.Item, null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/jobs"
  }, "Jobs")), /*#__PURE__*/_react["default"].createElement(_Breadcrumb.Breadcrumb.Item, null, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/software-engineer"
  }, "Software Engineer")));
};

exports.BreadcrumbWithNoItemActive = BreadcrumbWithNoItemActive;