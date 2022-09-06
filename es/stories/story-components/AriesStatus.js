import React, { useEffect, useState } from 'react';
var QUERY = 'SELECT * WHERE K<>"Removing" ORDER BY I DESC';
export var AriesStatus = function AriesStatus() {
  var _useState = useState(''),
      data = _useState[0],
      setData = _useState[1];

  useEffect(function fetchStatusFromGoogleSheets() {
    fetch("https://docs.google.com/spreadsheets/u/0/d/1O9WY_x9MmzRIbskPE-2_TsKgOz3N7C61iEqcx6zWln8/gviz/tq?tqx=out:html&tq=" + encodeURIComponent(QUERY)).then(function (res) {
      return res.text();
    }).then(function (result) {
      setData(result);
    }, function (error) {
      console.error(error);
    });
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: data
    }
  });
};