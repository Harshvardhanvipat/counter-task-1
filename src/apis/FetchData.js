import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FetchData(props) {
  const [dataFetched, setDataFetched] = useState([]);
  //   console.log(props);
  const test = props.displayNumberDetails;
  const URL = "http://numbersapi.com/" + test + "/math";
  // we need to fetch the data from the API
  useEffect(() => {
    const fetchedData = async () => {
      const result = await axios(URL);
      setDataFetched(dataFetched.concat(result.data));
    };
    fetchedData();
  }, [props.displayNumberDetails]);

  return (
    <div>
      <ul>
        {dataFetched.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
