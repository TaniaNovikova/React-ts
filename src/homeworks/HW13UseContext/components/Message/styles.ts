import styled from "@emotion/styled";


export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  background-color: wheat;
  height: 100px;
  width: 100%;
  border: 1px inset;
  border-radius: 4px;
  background-color: rgb(255, 255, 255, 0.9);
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.2);
  font-size: 18px;
  resize: none;
  outline: none;
  padding: 10px;
  overflow-y: auto;
  border-radius:4px;
`;



export const MessageInfo = styled.p`
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
`;