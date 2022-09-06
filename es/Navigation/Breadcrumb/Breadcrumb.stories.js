import React from 'react';
import { Breadcrumb } from './Breadcrumb';
export default {
  title: 'Navigation/Breadcrumb',
  component: Breadcrumb
};

var Template = function Template() {
  return /*#__PURE__*/React.createElement(Breadcrumb, null, /*#__PURE__*/React.createElement(Breadcrumb.Item, null, /*#__PURE__*/React.createElement("a", {
    href: "/home"
  }, "Home")), /*#__PURE__*/React.createElement(Breadcrumb.Item, null, /*#__PURE__*/React.createElement("a", {
    href: "/jobs"
  }, "Jobs")), /*#__PURE__*/React.createElement(Breadcrumb.Item, {
    active: true
  }, /*#__PURE__*/React.createElement("a", {
    href: "/software-engineer"
  }, "Software Engineer")));
};

export var Default = Template.bind({});
export var BreadcrumbWithFirstItemActive = function BreadcrumbWithFirstItemActive() {
  return /*#__PURE__*/React.createElement(Breadcrumb, null, /*#__PURE__*/React.createElement(Breadcrumb.Item, {
    active: true
  }, /*#__PURE__*/React.createElement("a", {
    href: "/home"
  }, "Home")), /*#__PURE__*/React.createElement(Breadcrumb.Item, null, /*#__PURE__*/React.createElement("a", {
    href: "/jobs"
  }, "Jobs")), /*#__PURE__*/React.createElement(Breadcrumb.Item, null, /*#__PURE__*/React.createElement("a", {
    href: "/software-engineer"
  }, "Software Engineer")));
};
export var BreadcrumbWithNoItemActive = function BreadcrumbWithNoItemActive() {
  return /*#__PURE__*/React.createElement(Breadcrumb, null, /*#__PURE__*/React.createElement(Breadcrumb.Item, null, /*#__PURE__*/React.createElement("a", {
    href: "/home"
  }, "Home")), /*#__PURE__*/React.createElement(Breadcrumb.Item, null, /*#__PURE__*/React.createElement("a", {
    href: "/jobs"
  }, "Jobs")), /*#__PURE__*/React.createElement(Breadcrumb.Item, null, /*#__PURE__*/React.createElement("a", {
    href: "/software-engineer"
  }, "Software Engineer")));
};