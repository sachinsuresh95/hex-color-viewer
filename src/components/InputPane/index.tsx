import { FC, useContext, useEffect, useState } from "react";
import { Input } from "baseui/input";
import { Button } from "baseui/button";
import { styled } from "baseui";
import { StoreContext } from "../../Store/StoreProvider";

const HexRegExp: RegExp = /^([0-9A-F]{3}){1,2}$/i;

const InputContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "50vw",
  height: "100vh",
});

const StyledForm = styled("form", {
  display: "flex",
});

const InputPane: FC = () => {
  const { hexValue, setHexValue } = useContext(StoreContext);
  const [value, setValue] = useState<string>(hexValue);
  const [isCodeValid, setIsCodeValid] = useState<boolean>(true);

  useEffect(() => {
    setIsCodeValid(HexRegExp.test(value));
  }, [value]);

  return (
    <InputContainer>
      <h3>Enter hex value (eg: AABBCC)</h3>
      <StyledForm
        onSubmit={(e) => {
          e.preventDefault();
          setHexValue(value);
        }}
      >
        <Input
          placeholder="Enter hex code"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          overrides={{
            Root: {
              style: (props) => ({
                border: isCodeValid
                  ? `${props.$isFocused ? "3px solid black" : "none"}`
                  : "3px solid red",
              }),
            },
          }}
        />
        <Button disabled={!isCodeValid} type="submit">
          Save
        </Button>
      </StyledForm>
      <ErrorMessage error={!isCodeValid} />
    </InputContainer>
  );
};

const ErrorMessage: FC<{ error: boolean }> = ({ error }) => {
  return (
    <div
      className="error-msg"
      style={{ color: "red", marginTop: "12px", height: "1rem" }}
    >
      {error ? "Please enter valid HEX value" : "  "}
    </div>
  );
};

export default InputPane;
