'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DefaultButton = require('./DefaultButton');

var _DefaultButton2 = _interopRequireDefault(_DefaultButton);

var _PrimaryButton = require('./PrimaryButton');

var _PrimaryButton2 = _interopRequireDefault(_PrimaryButton);

var _SecondaryButton = require('./SecondaryButton');

var _SecondaryButton2 = _interopRequireDefault(_SecondaryButton);

var _GhostButton = require('./GhostButton');

var _GhostButton2 = _interopRequireDefault(_GhostButton);

var _LinkButton = require('./LinkButton');

var _LinkButton2 = _interopRequireDefault(_LinkButton);

var _StyleConfig = require('../Utils/StyleConfig');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
	var variant = props.variant,
	    theme = props.theme;

	return _react2.default.createElement(
		_react.Fragment,
		null,
		variant === '' + _StyleConfig.Variant.DEFAULT ? _react2.default.createElement(
			_DefaultButton2.default,
			{ onClick: props.onClick },
			props.children
		) : variant === '' + _StyleConfig.Variant.PRIMARY ? _react2.default.createElement(
			_PrimaryButton2.default,
			{ theme: theme, onClick: props.onClick },
			props.children
		) : variant === '' + _StyleConfig.Variant.SECONDARY ? _react2.default.createElement(
			_SecondaryButton2.default,
			{ onClick: props.onClick },
			props.children
		) : variant === '' + _StyleConfig.Variant.GHOST ? _react2.default.createElement(
			_GhostButton2.default,
			{ theme: theme, onClick: props.onClick },
			props.children
		) : variant === '' + _StyleConfig.Variant.LINK ? _react2.default.createElement(
			_LinkButton2.default,
			{ theme: theme, onClick: props.onClick },
			props.children
		) : null
	);
};

exports.default = Button;