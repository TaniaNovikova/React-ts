import { CatFactLiProps } from "./data";
import { StyledFactLi } from "./styles";

function CatFactLiComponent({ catFact, id }: CatFactLiProps) {
  return (
    <StyledFactLi>
      <div id={id}>{catFact}</div>
    </StyledFactLi>
  );
}
export default CatFactLiComponent;
