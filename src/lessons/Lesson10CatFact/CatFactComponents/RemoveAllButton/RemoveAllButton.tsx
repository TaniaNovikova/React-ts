// import "./styles.css";
import { RemoveButton } from "./styles";
import { ButtonProps } from "./types";

function RemoveAllButton({ onClick }: ButtonProps) {

  return (
    <>
      <RemoveButton onClick={onClick}>Delete all facts</RemoveButton>
    </>
  );
}

export default RemoveAllButton;
