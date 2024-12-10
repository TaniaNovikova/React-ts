import styled from "@emotion/styled";
import backgrMoonImage from "assets/moon1.jpg";

export const SpinnerMoonStyled = styled.div`
  width: 150px;
  height: 150px;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px lightgray;
  background: url(${backgrMoonImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  animation: spin 2s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
