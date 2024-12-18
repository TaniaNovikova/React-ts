import styled from "@emotion/styled";

export const BlogManagementWrapper = styled.form`
  display: flex;
  flex-direction: column;
  flex:1;
  gap: 20px;
  min-height: 300px;
  max-height: fit-content;
  width: 900px;
  padding: 20px;
  background-color: wheat;
  border: 2px solid black;
  border-radius: 8px;
`;



export const BlogManagementTextArea = styled.textarea`
  min-height: 100px;
  max-height: fit-content;
  width: 100%;
  border: 2px solid brown;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 18px;
  resize: none;
  color: rgb(109, 66, 66);
  outline: none;
  padding: 10px;
`;

export const TextareaWrapper = styled.div`
display:flex;
flex-direction: column;
gap: 5px
`
export const StyledLabel = styled.label`
font-size: 18 px;
font-weight: bold;
`