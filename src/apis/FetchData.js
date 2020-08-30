import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FetchData(props) {
  const [dataFetched, setDataFetched] = useState([]);
  //   console.log(props);
  const URL = "http://numbersapi.com/1000/math";
  // we need to fetch the data from the API
  useEffect(() => {
    const fetchedData = async () => {
      //   const currentNumber = props.displayNumberDetails;
      const result = await axios(URL);
      //   console.log(result);
      setDataFetched(result.data);
      console.log(dataFetched);
    };
    fetchedData();
  }, [props.displayNumberDetails, dataFetched]);

  return (
    <div>
      <ul>test</ul>
    </div>
  );
}
