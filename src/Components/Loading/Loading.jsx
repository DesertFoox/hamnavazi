import { useState } from "react";
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
`;

const Loading = ({ loading }) => {
  let [color, setColor] = useState("#C79C69");

  return (
    <div className="flex justify-center items-center">
      <DotLoader
        color={color}
        loading={loading}
        css={override}
        width={500}
        height={10}
      />
    </div>
  );
};

export default Loading;
