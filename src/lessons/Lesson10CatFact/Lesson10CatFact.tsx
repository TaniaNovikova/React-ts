import { ReactNode, useEffect, useState } from "react";
import axios from "axios";

import {
  ButtonWrapper,
  ErrorMessageDiv,
  FactAndRemoveFactButtonWrapperDiv,
  FactCard,
  Facts,
  GetFactButton,
  RunningTextParagraph,
  StyledBoxForAnimationtDiv,
  StyledDivBlock,
  StyledHeaderDiv,
  StyledUl,
} from "./styles";
import { v4 } from "uuid";
import CatFactLiComponent from "./CatFactComponents/CatFactLiComponent/CatFactLiComponent";
import SpinnerMoon from "./CatFactComponents/SpinnerMoon/SpinnerMoon";
import { CatFactObj } from "./types";
import RemoveAllButton from "./CatFactComponents/RemoveAllButton/RemoveAllButton";
import RemoveFactButton from "./CatFactComponents/RemoveFactButton/RemoveFactButton";

function Lesson10CatFact() {
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [factsObj, setFactsObj] = useState<CatFactObj[]>([]);

  const RANDOM_FACT_URL: string = "https://catfact.ninja/fact";

  const getCatFact = async () => {
    setError("");
    try {
      setIsLoading(true);
      const response = await axios.get(RANDOM_FACT_URL);
      const newFactObj = {
        catFact: response.data.fact,
        id: v4(),
      };
      setFactsObj([...factsObj, newFactObj]);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const onGetMoreInfoClick = () => {
    getCatFact();
  };

  const onRemoveFact = (id: string) => {
    setFactsObj(factsObj.filter((factsObjItem) => factsObjItem.id !== id));
  };

  const onRemoveAllFacts = () => {
    setFactsObj([]);
  };

  const liMap = factsObj.map(
    (factsObjItem): ReactNode => (
      <FactAndRemoveFactButtonWrapperDiv key={factsObjItem.id}>
        <RemoveFactButton onClick={() => onRemoveFact(factsObjItem.id)} />
        <CatFactLiComponent
          catFact={factsObjItem.catFact}
          id={factsObjItem.id}
        />
      </FactAndRemoveFactButtonWrapperDiv>
    )
  );

  const renderFacts: boolean = factsObj.length || error ? true : false;

  useEffect(() => {
    setFactsObj(factsObj);
  }, [factsObj]);

  return (
    <FactCard>
      <StyledHeaderDiv>
        <ButtonWrapper>
          {isLoading && <SpinnerMoon />}
          {!isLoading && (
            <GetFactButton type="submit" onClick={onGetMoreInfoClick}>
              GET MORE INFO
            </GetFactButton>
          )}
        </ButtonWrapper>
        <StyledDivBlock>
          <StyledBoxForAnimationtDiv>
            <RunningTextParagraph>
              Cats see six times better in the dark and at night than humans.
              Get more info about cats.
            </RunningTextParagraph>
          </StyledBoxForAnimationtDiv>
        </StyledDivBlock>
      </StyledHeaderDiv>
      {renderFacts && (
        <Facts>
          <RemoveAllButton onClick={onRemoveAllFacts} />
          {error && <ErrorMessageDiv>{error}</ErrorMessageDiv>}
          <StyledUl>{liMap}</StyledUl>
        </Facts>
      )}
    </FactCard>
  );
}

export default Lesson10CatFact;