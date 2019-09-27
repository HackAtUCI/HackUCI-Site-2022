import { useState } from "react";

const useDate = timestamp => {
  var moment = require("moment");
  const [convertedTimestamp, setConvertedTimestamp] = useState(
    moment(timestamp).format("dddd, MMMM Do YYYY, h:mm a") + " (PST)"
  );

  return convertedTimestamp;
};

export default useDate;
