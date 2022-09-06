import styled, { css } from 'styled-components';
import { PrimaryColor, SecondaryColor, Greyscale } from '../../Utils/Colors';

var getStateColor = function getStateColor(_ref, checked) {
  var disabled = _ref.disabled,
      error = _ref.error,
      border = _ref.border,
      theme = _ref.theme;

  if (disabled) {
    return Greyscale.lightgrey;
  } else if (error) {
    return PrimaryColor.glintsred;
  } else if (theme === 'white') {
    return Greyscale.white;
  } else if (!checked) {
    return Greyscale.grey;
  } else if (border) {
    return SecondaryColor.actionblue;
  } else {
    return SecondaryColor.darkgreen;
  }
};

var showSolidCircleStyle = css(["&:after{opacity:1;transform:scale(1,1);}"]);
export var RadioIcon = styled.span.withConfig({
  displayName: "RadioButtonStyle__RadioIcon",
  componentId: "sc-1dmv219-0"
})(["display:inline-flex;align-items:center;justify-content:center;height:", ";width:", ";margin-right:10px;border-radius:50%;border-style:solid;border-width:2px;border-color:", ";&:after{content:'';display:inline-block;height:", ";width:", ";border-radius:50%;opacity:0;transform:scale(0,0);transition:all 0.2s cubic-bezier(0.64,0.57,0.67,1.53);background-color:", ";}"], function (_ref2) {
  var size = _ref2.size;
  return size === 'regular' ? '18px' : '15px';
}, function (_ref3) {
  var size = _ref3.size;
  return size === 'regular' ? '18px' : '15px';
}, function (props) {
  return getStateColor(props, false);
}, function (_ref4) {
  var size = _ref4.size;
  return size === 'regular' ? '8px' : '7px';
}, function (_ref5) {
  var size = _ref5.size;
  return size === 'regular' ? '8px' : '7px';
}, function (props) {
  return getStateColor(props, true);
});
export var RadioLabel = styled.span.withConfig({
  displayName: "RadioButtonStyle__RadioLabel",
  componentId: "sc-1dmv219-1"
})(["font-size:", ";outline:none;color:", ";"], function (_ref6) {
  var size = _ref6.size;
  return size === 'regular' ? '16px' : '14px';
}, function (_ref7) {
  var disabled = _ref7.disabled,
      theme = _ref7.theme;

  if (disabled) {
    return Greyscale.lightgrey;
  } else if (theme === 'white') {
    return Greyscale.white;
  } else {
    return Greyscale.black;
  }
});
export var Border = styled.span.withConfig({
  displayName: "RadioButtonStyle__Border",
  componentId: "sc-1dmv219-2"
})(["display:flex;align-items:center;padding:15px 10px;border-style:solid;border-width:1px;border-radius:2px;border-color:", ";", ";"], function (_ref8) {
  var disabled = _ref8.disabled;
  return disabled ? Greyscale.lightgrey : '#aaa';
}, function (_ref9) {
  var disabled = _ref9.disabled,
      error = _ref9.error;

  if (disabled) {
    return null;
  } else if (error) {
    return css(["background-color:rgba(236,39,43,0.1);border-color:", ";", "{border-color:", ";}"], PrimaryColor.glintsred, RadioIcon, Greyscale.grey);
  }

  return css(["&:hover{background-color:rgba(1,126,183,0.1);border-color:", ";}"], SecondaryColor.actionblue);
});
export var RadioContainer = styled.label.withConfig({
  displayName: "RadioButtonStyle__RadioContainer",
  componentId: "sc-1dmv219-3"
})(["position:relative;display:inline-flex;align-items:center;cursor:", ";user-select:none;text-align:left;input{display:none;&:checked + ", "{", " border-color:", ";}&:checked + ", "{background-color:transparent;border-color:", ";", "{", " border-color:", ";}}}&:focus{outline:none;}", ""], function (_ref10) {
  var disabled = _ref10.disabled;
  return disabled ? 'not-allowed' : 'pointer';
}, RadioIcon, showSolidCircleStyle, function (props) {
  return getStateColor(props, true);
}, Border, function (props) {
  return getStateColor(props, true);
}, RadioIcon, showSolidCircleStyle, function (props) {
  return getStateColor(props, true);
}, function (_ref11) {
  var disabled = _ref11.disabled,
      error = _ref11.error,
      border = _ref11.border;

  if (!disabled && !error && !border) {
    return css(["&:hover{", "{border-color:", ";}}"], RadioIcon, SecondaryColor.darkgreen);
  }
});