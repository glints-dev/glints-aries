'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ButtonStyle = require('./../Style/ButtonStyle');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrimaryButton = function PrimaryButton(props) {
	return _react2.default.createElement(
		_ButtonStyle.PrimaryContainer,
		null,
		_react2.default.createElement(
			_ButtonStyle.PrimaryBtn,
			{ theme: props.theme, onClick: props.onClick },
			props.children
		)
	);
};

exports.default = PrimaryButton;