import { FC, useContext } from "react";
import { StoreContext } from "../../Store/StoreProvider";

const OutputPane: FC = () => {
  const { hexValue } = useContext(StoreContext);
  return (
    <div
      style={{
        backgroundColor: `#${hexValue}`,
        height: "100vh",
        width: "50vw",
        transition: "background-color 0.3s linear",
      }}
      data-testid="outputdiv"
    />
  );
};

export default OutputPane;
