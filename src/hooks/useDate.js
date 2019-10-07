import { useState } from "react";

const useDate = unixTimestamp => {
  var date = new Date(unixTimestamp * 1000);
  var moment = require("moment");
  const [convertedTimestamp, setConvertedTimestamp] = useState(
    moment(date).format("dddd, MMMM Do YYYY, h:mm a") + " (PST)"
  );

  const updateConvertedTimestamp = timestamp => {
    setConvertedTimestamp(
      moment(timestamp).format("dddd, MMMM Do YYYY, h:mm a") + " (PST)"
    );
  };

  return { convertedTimestamp, updateConvertedTimestamp };
};

export default useDate;
