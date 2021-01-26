import React, { useEffect, useState } from 'react';

const QUERY = 'SELECT * WHERE K<>"Removing" ORDER BY I DESC';

export const AriesStatus = () => {
  const [data, setData] = useState('');
  useEffect(function fetchStatusFromGoogleSheets() {
    fetch(
      `https://docs.google.com/spreadsheets/u/0/d/1O9WY_x9MmzRIbskPE-2_TsKgOz3N7C61iEqcx6zWln8/gviz/tq?tqx=out:html&tq=${encodeURIComponent(
        QUERY
      )}`
    )
      .then(res => res.text())
      .then(
        result => {
          setData(result);
        },
        error => {
          console.error(error);
        }
      );
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: data }}></div>;
};
