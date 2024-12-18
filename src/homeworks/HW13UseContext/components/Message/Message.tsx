import { useContext } from "react";

import { MessageWrapper, MessageInfo} from "./styles";
import { BlogManagementContext } from "../BlogManagement/BlogManagement";

function Message() {
  const message = useContext<string>(BlogManagementContext);

  return (
    <MessageWrapper>
      <MessageInfo>{message}</MessageInfo>
    </MessageWrapper>
  );
}
export default Message;
