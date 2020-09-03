import React, { useState } from "react";
import { useQuery } from "react-query";
import DisplayNumber from "./DisplayNumberComponent";
import { ReactQueryDevtools } from "react-query-devtools";

// in here fetchNumbers function
// first argument is the key and the second argument is the number that is being set into the counter value in the AutomaticDisplayComponent,

// in the useQuery hook, we can pass multiple arguments to the function fetchNumbers function that is the second argument to useQuery by passing an array in the first argument

const fetchNumbers = async (key, numberDetails) => {
  console.log(numberDetails);
  const resp = await fetch(`http://numbersapi.com/${numberDetails}/math?json`);
  return resp.json();
};

function ReactQueryComponent(props) {
  const [maxTenNumberDetails, setMaxTenNumberDetails] = useState([]);
  const { data, status } = useQuery(["numbers", props.number], fetchNumbers);
  //   console.log(data);

  return (
    <div>
      <div>
        {/* {props.number} */}
        {status === "error" && <div> Error fetching data </div>}

        {status === "Loading" && (
          <div>
            <div className="ui segment">
              <div className="ui active transition visible dimmer">
                <div className="content">
                  <div className="ui loader"></div>
                </div>
              </div>
              <img
                src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png"
                class="ui image"
              />
            </div>
          </div>
        )}

        {status === "success" && (
          <div>
            <DisplayNumber currentValue={data.text} />
            {/* {setMaxTenNumberDetails((storedDetailArray) =>
              storedDetailArray.concat(data.text)
            )} */}
            <div>
              {/* {maxTenNumberDetails.map((item) => {
                <div>{item.text}</div>;
              })} */}
            </div>
          </div>
        )}
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default ReactQueryComponent;
