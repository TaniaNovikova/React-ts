import { useContext } from "react";

import { MessageWrapper, MessageInfo, MessageTitle } from "./styles";
import { BlogManagementContext } from "../BlogManagement/BlogManagement";

function Message() {
  const message = useContext<string>(BlogManagementContext);

  return (
    <MessageWrapper>
      <MessageTitle>Message: </MessageTitle>
      <MessageInfo>{message}</MessageInfo>
    </MessageWrapper>
  );
}
export default Message;
