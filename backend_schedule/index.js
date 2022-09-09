const express = require("express");
var cron = require("node-cron");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(cors());
const { google } = require("googleapis");
const auth = new google.auth.GoogleAuth({
  keyFile: "./keys.json",
  scopes: "https://www.googleapis.com/auth/spreadsheets",
});

// ,'26/02','27/02','28/02','01/03','02/03','03/03','04/03','05/03','06/03'
const Dates = [
  "9/09/2022",
  "10/09/2022",
  "11/09/2022",
  "12/09/2022",
  "13/09/2022",
  "14/09/2022",
  "15/09/2022",
  "16/09/2022",
  "17/09/2022",
  "18/09/2022",
];

var schC = {},
  schT = {},
  schS = {};
cron.schedule("*/30 * * * * *", () => {
  schCf();
  schTf();
  schSf();
});

async function schCf() {
  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1AHfjJsfNoC3J77XuiEmsSz6YWwVPtn-6sEPBfVNMFE8";

  const getRows = await googleSheets.spreadsheets.values.batchGet({
    auth,
    spreadsheetId,
    ranges: Dates,
  });
  for (var k = 0; k < Dates.length; k++) {
    var Date = Dates[k];

    var arr = getRows.data.valueRanges[k].values;

    var keys = arr[0];
    //vacate keys from main array
    var newArr = arr.slice(1, arr.length);
    var formatted = [],
      data = newArr,
      cols = keys,
      l = cols.length;
    for (var i = 0; i < data.length; i++) {
      var d = data[i],
        o = {};
      for (var j = 0; j < l; j++) o[cols[j]] = d[j];
      formatted.push(o);
    }
    schC[Date] = formatted;
  }
}

app.get("/schedule/culti", async (req, res) => {
  res.send(schC);
});
console.log("culty", schC);

async function schTf() {
  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: "v4", auth: client });

  const spreadsheetId = "1MEB3kZmJOt13pNlNy6XbXkYNI7myVwh19xr_TcToVN4";

  const getRows = await googleSheets.spreadsheets.values.batchGet({
    auth,
    spreadsheetId,
    ranges: Dates,
  });
  for (var k = 0; k < Dates.length; k++) {
    var Date = Dates[k];

    var arr = getRows.data.valueRanges[k].values;

    var keys = arr[0];
    //vacate keys from main array
    var newArr = arr.slice(1, arr.length);
    var formatted = [],
      data = newArr,
      cols = keys,
      l = cols.length;
    for (var i = 0; i < data.length; i++) {
      var d = data[i],
        o = {};
      for (var j = 0; j < l; j++) o[cols[j]] = d[j];
      formatted.push(o);
    }
    schT[Date] = formatted;
  }
}

app.get("/schedule/techy", async (req, res) => {
  res.send(schT);
});
console.log("techy", schT);

async function schSf() {
  const client = await auth.getClient();
  const googleSheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = "1MHIcOiyPURwGIbkXBULRNpflzIt_tOSoLro3efL9yuw";

  const getRows = await googleSheets.spreadsheets.values.batchGet({
    auth,
    spreadsheetId,
    ranges: Dates,
  });
  for (var k = 0; k < Dates.length; k++) {
    var Date = Dates[k];

    var arr = getRows.data.valueRanges[k].values;

    var keys = arr[0];
    //vacate keys from main array
    var newArr = arr.slice(1, arr.length);
    var formatted = [],
      data = newArr,
      cols = keys,
      l = cols.length;
    for (var i = 0; i < data.length; i++) {
      var d = data[i],
        o = {};
      for (var j = 0; j < l; j++) o[cols[j]] = d[j];
      formatted.push(o);
    }
    schS[Date] = formatted;
  }
}

app.get("/schedule/sports", async (req, res) => {
  res.send(schS);
});
console.log("sports", schS);

app.listen(8080);
