import axios_global from "axios";

// access control headers for Google API do not allow 'x-access-token'
const axios = axios_global.create();
delete axios.defaults.headers.common["access-token"];

const FEED_URL = "https://spreadsheets.google.com/feeds/cells/";
const SPREADSHEET_KEY = "1zqFvnz32yXvwPVmnynXSKrVKos2PzcnzHvprBA9ouuk";
const WORKSHEET = "3";
const QUERY = "public/values/";
const CELL = "R3C4";
const FORMAT = "alt=json";

const DATA_URL =
  FEED_URL +
  SPREADSHEET_KEY +
  "/" +
  WORKSHEET +
  "/" +
  QUERY +
  CELL +
  "?" +
  FORMAT;

const extractCell = data => data.entry.content.$t;

const getScheduleUpdates = () => {
  const request = axios.get(DATA_URL).then(response => {
    // console.log(response.data.entry.content.$t);
    return JSON.parse(extractCell(response.data));
  });
  request.catch(error => {
    console.log("Error occured while fetching schedule data:", error);
  });
  return request;
};

export default getScheduleUpdates;
