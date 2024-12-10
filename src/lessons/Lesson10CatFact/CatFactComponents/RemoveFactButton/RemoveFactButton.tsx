import { RemoveButton } from "./styles";
import { ButtonProps } from "./types";
 

function RemoveFactButton({ onClick }: ButtonProps) {

  return (
    <>
      <RemoveButton onClick={onClick}>X</RemoveButton>
    </>
  );
}

export default RemoveFactButton;
