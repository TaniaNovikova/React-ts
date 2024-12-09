import styled from "@emotion/styled";
import backgroundCatImage from "assets/kot-na-dereve1.jpg";
import backgrButtonMoonImage from "assets/moon2.jpg";
import backgrMoonImage from "assets/moon1.jpg";

export const FactCard = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  height: fit-content;
  overflow-y: hidden;
  overflow-x: hidden;
  /* border: 4px solid red; */
  background: url(${backgroundCatImage});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const StyledHeaderDiv = styled.div`
  display: flex;
  flex-direction: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 250px;
  /* border: 3px solid #fff; */
  color: #fff;
  padding: 0 30px;
`;

export const StyledDivBlock = styled.div`
  /* border: 1px solid #fff; */
  overflow: hidden;
  padding: 15px;
`;

//блок для анимации
export const StyledBoxForAnimationtDiv = styled.div`
  /* animation: running-text 25s linear infinite ; */
  animation: running-text 25s linear forwards;

  /* animation-fill-mode: forwards; */

  @keyframes running-text {
    0% {
      transform: translate(100%);
    }
    100% {
      transform: translate(-100%);
    }
  }
`;
export const RunningTextParagraph = styled.p`
  display: inline-block; //чтобы сработал паддинг
  padding: 15px;
  color: #fff;
  text-shadow: 0px 0px 8px #fff;
  text-align: center;
  font-size: 25px;
`;

export const Facts = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0;
  max-height: 768px;
  /* border: 2px solid green; */
`;
export const ErrorMessageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font: 20px bold #222;
  min-width: 400px;
  width: fit-content;
  min-height: 200px;
  height: fit-content;
  background-color: orangered;
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: left;
  padding: 30px;
  width: 650px;
  line-height: 25px;
  font-size: 18px;
  font-weight: bold;
  color: rgb(43, 41, 41);
  height: fit-content;
  max-height: 700px;
  overflow-y: auto;
  overflow-x: hidden;
  /* border: 2px solid red; */
`;
export const FactAndRemoveFactButtonWrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 650px;
  height: fit-content;
  background-color: #fbfef9d1;
  color: rgb(43, 41, 41);
  padding: 0 30px;
  /* border: 3px solid; */
  box-shadow: 0 4px 8px lightgray;
`;

export const ButtonWrapper = styled.div`
  width: 150px;
  height: 150px;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: rgb(43, 41, 41);
  box-shadow: 0 4px 8px lightgray;
  cursor: pointer;
  background: url(${backgrMoonImage});
`;

export const GetFactButton = styled.button`
  width: 150px;
  height: 150px;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #fff;
  text-shadow: 0 2px 4px black;
  font-weight: bold;
  box-shadow: 0 4px 8px lightgray;
  cursor: pointer;
  background: url(${backgrButtonMoonImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5px;
`;
