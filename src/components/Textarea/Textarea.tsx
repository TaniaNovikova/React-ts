import { BlogManagementTextArea, StyledLabel, TextareaWrapper } from "./styles";
import { TextareaProps } from "./types";

function Textarea ({id, name, placeholder, onChange, label}:TextareaProps){
    return( <TextareaWrapper>
            <StyledLabel htmlFor="message-textarea">{label}</StyledLabel>
            <BlogManagementTextArea
              id={id}
              name={name}
              placeholder={placeholder}
              onChange={onChange}            />
            </TextareaWrapper>)
}

export default Textarea;