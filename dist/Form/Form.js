'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormStyle = require('./../../src/Style/FormStyle');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextField = function (_Component) {
  (0, _inherits3.default)(TextField, _Component);

  function TextField() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TextField);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TextField.__proto__ || Object.getPrototypeOf(TextField)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      floating: false
    }, _this.handleFocusChange = function (e) {
      _this.setState({
        floating: e.target.value.length > 0 ? true : false
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TextField, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          label = _props.label,
          sizeContainer = _props.sizeContainer,
          status = _props.status,
          disabled = _props.disabled;


      return _react2.default.createElement(
        _FormStyle.TextFieldContainer,
        { size: sizeContainer },
        _react2.default.createElement(_FormStyle.TextFieldInput, { type: 'text',
          status: status,
          disabled: disabled,
          onBlur: this.handleFocusChange,
          floating: this.state.floating }),
        _react2.default.createElement(
          _FormStyle.TextFieldLabel,
          { floating: this.state.floating },
          label
        ),
        _react2.default.createElement(_FormStyle.Icon, { status: status, size: '14px' })
      );
    }
  }]);
  return TextField;
}(_react.Component);

exports.default = TextField;