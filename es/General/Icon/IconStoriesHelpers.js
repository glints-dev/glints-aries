import { sampleSize } from 'lodash';
import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '../../Input/TextField';
import { BaseContainer } from '../../Layout/GlintsContainer/GlintsContainer';
import { Greyscale } from '../../Utils/Colors';
import * as AllIcons from './components';
var IconsList = styled.div.withConfig({
  displayName: "IconStoriesHelpers__IconsList",
  componentId: "sc-1f4h4ya-0"
})(["display:flex;flex-wrap:wrap;font-size:20px;align-items:flex-start;"]);
var IconsSample = styled.div.withConfig({
  displayName: "IconStoriesHelpers__IconsSample",
  componentId: "sc-1f4h4ya-1"
})(["flex-basis:220px;margin-right:1em;margin-top:1em;display:flex;flex-direction:", ";", ""], function (_ref) {
  var direction = _ref.direction;
  return direction;
}, function (_ref2) {
  var direction = _ref2.direction;
  return direction === 'column' && 'align-items: center';
});
var IconName = styled.code.withConfig({
  displayName: "IconStoriesHelpers__IconName",
  componentId: "sc-1f4h4ya-2"
})(["", " font-size:12px;color:", ";"], function (_ref3) {
  var direction = _ref3.direction;
  return direction === 'row' ? 'margin-left: 8px;' : 'margin-top: 8px;';
}, Greyscale.grey);
export var IconSampler = function IconSampler() {
  var icons = sampleSize(AllIcons, 4);
  return /*#__PURE__*/React.createElement(IconsList, null, Object.values(icons).filter(function (Icon) {
    return typeof Icon === 'function';
  }).map(function (Icon) {
    return /*#__PURE__*/React.createElement(IconsSample, {
      key: Icon.name,
      direction: "column"
    }, /*#__PURE__*/React.createElement(Icon, {
      width: "32px",
      height: "32px"
    }), /*#__PURE__*/React.createElement(IconName, {
      direction: "column"
    }, Icon.name));
  }));
};
export var IconGallery = function IconGallery() {
  var _useState = useState(''),
      query = _useState[0],
      setQuery = _useState[1];

  return /*#__PURE__*/React.createElement(BaseContainer, null, /*#__PURE__*/React.createElement(TextField, {
    value: query,
    label: "Filter Icons",
    onChange: function onChange(e) {
      return setQuery(e.target.value);
    },
    small: true,
    tabindex: 1
  }), /*#__PURE__*/React.createElement(IconsList, null, Object.values(AllIcons).filter(function (Icon) {
    return typeof Icon === 'function';
  }).filter(function (Icon) {
    return query === '' || Icon.name.toLowerCase().includes(query.toLowerCase());
  }).sort().map(function (Icon) {
    return /*#__PURE__*/React.createElement(IconsSample, {
      key: Icon.name,
      direction: "row"
    }, /*#__PURE__*/React.createElement(Icon, {
      width: "16px",
      height: "16px"
    }), /*#__PURE__*/React.createElement(IconName, {
      direction: "row"
    }, Icon.name));
  })));
};