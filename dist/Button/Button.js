'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CtaButton = require('./CtaButton');

var _CtaButton2 = _interopRequireDefault(_CtaButton);

var _JobCardButton = require('./JobCardButton');

var _JobCardButton2 = _interopRequireDefault(_JobCardButton);

var _SecondaryButton = require('./SecondaryButton');

var _SecondaryButton2 = _interopRequireDefault(_SecondaryButton);

var _DefaultButton = require('./DefaultButton');

var _DefaultButton2 = _interopRequireDefault(_DefaultButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(props) {
	var variant = props.variant;


	return _react2.default.createElement(
		_react.Fragment,
		null,
		variant === 'default' && _react2.default.createElement(
			_DefaultButton2.default,
			{ onClick: props.onClick },
			props.children
		),
		variant === 'cta' && _react2.default.createElement(
			_CtaButton2.default,
			{ onClick: props.onClick },
			props.children
		),
		variant === 'job' && _react2.default.createElement(
			_JobCardButton2.default,
			{ onClick: props.onClick },
			props.children
		),
		variant === "secondary" && _react2.default.createElement(
			_SecondaryButton2.default,
			{ onClick: props.onClick },
			props.children
		),
		variant === "nostyle" && _react2.default.createElement(
			'button',
			null,
			'no style button'
		)
	);
};

exports.default = Button;