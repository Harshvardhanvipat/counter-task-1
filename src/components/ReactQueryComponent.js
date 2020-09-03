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

  const { data, status } = useQuery(["numbers", props.number], fetchNumbers, {
    staleTime: 0,
    // onSuccess: () => {
    //   setMaxTenNumberDetails((storedDetailArray) =>
    //     storedDetailArray.concat(data.text)
    //   );
    // },
  });
  console.log(data);

  return (
    <div>
      <div>
        {props.number}
        {status === "error" && <div> Error fetching data </div>}

        {status === "Loading" && <div> Loading data... </div>}

        {status === "success" && (
          <div>
            <DisplayNumber currentValue={data.text} />
          </div>
        )}
      </div>
      Test react query div
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default ReactQueryComponent;
