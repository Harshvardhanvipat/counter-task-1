import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FetchData(props) {
  const [dataFetched, setDataFetched] = useState([]);
  const [individualNumberDetail, setIndividualNumberDetail] = useState("");
  const number = props.displayNumberDetails;
  const URL = `http://numbersapi.com/${number}/math`;
  // we need to fetch the data from the API
  useEffect(() => {
    const fetchedData = async () => {
      const result = await axios(URL);
      setDataFetched((storedDetailArray) => {
        // console.log(result.data);
        return storedDetailArray.concat(result.data);
      });
      setIndividualNumberDetail((storeIndividualNumber) => {
        return (storeIndividualNumber = result.data);
      });
      console.log(individualNumberDetail);
    };
    fetchedData();
  }, [props.displayNumberDetails, individualNumberDetail, URL]);

  return (
    <div className="ui container">
      <div>
        <h2 className="ui center aligned icon header automatic-controls">
          <i className="circular numbered list icon"></i>
          Number Details
        </h2>
      </div>
      <div className="meta">{props.displayNumberDetails}</div>
      <div className="ui raised segment">{individualNumberDetail}</div>
      <div className="description"></div>

      {/* <div style={{ marginLeft: "20px" }}> {individualNumberDetail} </div> */}
      <div className="ui container">
        <div>
          <h2 className="ui center aligned icon header automatic-controls">
            <i className="circular history icon"></i>
            App History
          </h2>
        </div>
        <ul>
          {dataFetched.map((item, index) => (
            <div key={index} className="ui inverted segment">
              {item}
            </div>
          ))}

          {/* {dataFetched.map((item, index) => (
            <li key={index}>{item}</li>
          ))} */}
        </ul>
      </div>
    </div>
  );
}
