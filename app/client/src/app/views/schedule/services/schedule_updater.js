import axios from "axios";

// this feed requires https on the client
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

const axios_config = {
  headers: { "X-Requested-With": "XMLHttpRequest" }
};

const getScheduleUpdates = () => {
  const request = axios.get(DATA_URL, axios_config).then(response => {
    // console.log(response.data.entry.content.$t);
    return JSON.parse(extractCell(response.data));
  });
  request.catch(error => {
    console.log("Error occured while fetching schedule data:", error);
  });
  return request;
};

export default getScheduleUpdates;
