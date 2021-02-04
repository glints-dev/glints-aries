import https from 'https';

const URL =
  'https://docs.google.com/spreadsheets/u/0/d/1O9WY_x9MmzRIbskPE-2_TsKgOz3N7C61iEqcx6zWln8/gviz/tq';
const QUERY = 'SELECT B,C WHERE K<>"Removing"';
const NAME_INDEX = 0;
const EXPORTS_INDEX = 1;

const get = (url: string) =>
  new Promise<string>(resolve => {
    https.get(url, res => {
      res.setEncoding('utf8');
      let body = '';
      res.on('data', data => {
        body += data;
      });
      res.on('end', () => {
        // body = JSON.parse(body);
        resolve(body);
      });
    });
  });

const parseResponse = response => {
  const dataLine = response.split('\n')[1];
  const pattern = /{.*}/;
  const rawData = pattern.exec(dataLine)[0];
  const data = JSON.parse(rawData);
  return data;
};

const extractUnitsAndExports = table => {
  const rows = table.table.rows;
  const result = rows.reduce(
    (acc, row) => ({ ...acc, [row.c[NAME_INDEX].v]: row.c[EXPORTS_INDEX].v }),
    {}
  );
  return result;
};

export const fetchUnits = async () => {
  const response = await get(
    `${URL}?tqx=out:json&tq=${encodeURIComponent(QUERY)}`
  );
  const table = parseResponse(response);
  const unitsAndExports = extractUnitsAndExports(table);
  return unitsAndExports;
};
