import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 150px;
  max-height: fit-content;
  flex: 1;
  padding: 20px;
  background-color: rgb(255, 255, 255, 0.4);
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  gap: 8px;
`;

export const CardTitle = styled.p`
  font-size: 20px;
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;
