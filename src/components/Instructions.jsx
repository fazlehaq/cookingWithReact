import React from "react";
import { v4 } from "uuid";

function Instructions({ instructions }) {
  return (
    <>
      <ol className=" indent">
        {instructions.map((instruction) => {
          return <li key={v4()}>{instruction}</li>;
        })}
      </ol>
    </>
  );
}

export default Instructions;
