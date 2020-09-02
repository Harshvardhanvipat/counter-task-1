import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FetchData(props) {
  const [dataFetched, setDataFetched] = useState([]);
  const [individualNumberDetail, setIndividualNumberDetail] = useState("");
  const number = props.displayNumberDetails;
  const URL = `http://numbersapi.com/${number}/math`;

  useEffect(() => {
    const fetchedData = async () => {
      const resp = await axios
        .get(URL)
        .then((resp) => {
          setDataFetched((storedDetailArray) =>
            storedDetailArray.concat(resp.data)
          );
          // why do we need a return here ??
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchedData();
  }, [props.displayNumberDetails]);

  return (
    <div className="ui container">
      <div>
        <NumberComponent
          key={props.displayNumberDetails}
          number={props.displayNumberDetails}
        />
      </div>
      <div className="description"></div>

      <div className="ui container">
        <div>
          <h2 className="ui center aligned icon header automatic-controls">
            <i className="circular history icon"></i>
            App History
          </h2>
        </div>
        <ul>
          {dataFetched.map((item) => (
            <div key={item} className="ui inverted segment">
              {item}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

// fetch data here
// display the current number

function NumberComponent(props) {
  const URL = `http://numbersapi.com/${props.number}/math`;
  const [individualNumberDetail, setIndividualNumberDetail] = useState(
    "Loading"
  );

  useEffect(() => {
    const fetchedData = async () => {
      const resp = await axios
        .get(URL)
        .then((resp) => {
          setIndividualNumberDetail((storeIndividualNumber) => {
            return (storeIndividualNumber = resp.data);
          });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchedData();
  }, [props.number]);

  return (
    <div>
      <h2 className="ui center aligned icon header automatic-controls">
        <i className="circular icon">{props.number}</i>
        Number Details
      </h2>
      <h2 className="ui center aligned icon header automatic-controls">
        {individualNumberDetail}
      </h2>
    </div>
  );
}
