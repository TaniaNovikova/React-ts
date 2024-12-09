// import "./styles.css";
import { RemoveButton } from "./styles";
import { ButtonProps } from "./types";

function RemoveButtonComponent({ onClick }: ButtonProps) {

  return (
    <>
      <RemoveButton onClick={onClick}>X</RemoveButton>
    </>
  );
}

export default RemoveButtonComponent;
