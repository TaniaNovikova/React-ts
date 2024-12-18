import { ChangeEvent, useState, createContext } from "react";

import Button from "components/Button/Button";
import Card from "../Card/Card";

import { BlogManagementWrapper, BlogManagementTextArea, TextareaWrapper } from "./styles";

export const BlogManagementContext = createContext<string>("");

function BlogManagement() {
  const [searchTextareaValue, setSearchTextareaValue] = useState("");
  const [message, setMessage] = useState<string>("");

  const onChangeTextarea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setSearchTextareaValue(event.target.value);
  };
  console.log(searchTextareaValue);

  const postMessage = () => {
    setMessage(searchTextareaValue);
  };

  return (
    <BlogManagementContext.Provider value={message}>
      <BlogManagementWrapper>
        <TextareaWrapper>
        <label htmlFor="message-textarea">Message</label>
        <BlogManagementTextArea
          id="message-textarea"
          name="message-textarea"
          placeholder="Enter your message"
          onChange={onChangeTextarea}
        />
        </TextareaWrapper>
        <Button name="Post" onClick={postMessage} />

        <Card />
      </BlogManagementWrapper>
    </BlogManagementContext.Provider>
  );
}
export default BlogManagement;
