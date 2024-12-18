import styled from "@emotion/styled";


export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  background-color: wheat;
  flex: 1;
  width: 100%;
  min-height: 100px;
  max-height: fit-content;
  border-radius:4px;
`;

export const MessageTitle = styled.p`
  font-size: 16px;
`;

export const MessageInfo = styled.p`
  font-size: 16px;
`;