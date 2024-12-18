import styled from "@emotion/styled"

export const BlogManagementTextArea = styled.textarea`
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
`;

export const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const StyledLabel = styled.label`
  font-size: 18 px;
  font-weight: bold;
`;