// import "./styles.css";
import { RemoveButton } from "./styles";
import { ButtonProps } from "./types";

function RemoveAllButton({ onClick }: ButtonProps) {

  return (
    <>
      <RemoveButton onClick={onClick}>DELETE ALL</RemoveButton>
    </>
  );
}

export default RemoveAllButton;
