import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FetchData(props) {
  const [dataFetched, setDataFetched] = useState([]);
  const [individualNumberDetail, setIndividualNumberDetail] = useState("");
  const number = props.displayNumberDetails;
  const URL = `http://numbersapi.com/${number}/math`;

  useEffect(() => {
    const fetchedData = async () => {
      const result = await axios(URL);
      setDataFetched((storedDetailArray) => {
        return storedDetailArray.concat(result.data);
      });
      setIndividualNumberDetail((storeIndividualNumber) => {
        return (storeIndividualNumber = result.data);
      });
      console.log(individualNumberDetail);
    };
    fetchedData();
  }, [props.displayNumberDetails]);

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
        </ul>
      </div>
    </div>
  );
}
