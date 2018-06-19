'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ButtonStyle = require('./../Style/ButtonStyle');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CTAButton = function CTAButton(props) {
	return _react2.default.createElement(
		_ButtonStyle.CTAContainer,
		null,
		_react2.default.createElement(
			_ButtonStyle.CTABtn,
			{ onClick: props.onClick },
			props.children
		)
	);
};

exports.default = CTAButton;