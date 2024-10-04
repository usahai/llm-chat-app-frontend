import { CHAT_DIRECTION, ChatHistory } from "@/types/chats";
import { cn } from "@/utils/cn";

function ChatBubble({ data }: { data: ChatHistory }) {
  return (
    <div
      className={cn("w-full flex", {
        ["justify-end"]: data.direction === CHAT_DIRECTION.FROM,
        ["justify-start"]: data.direction === CHAT_DIRECTION.TO,
      })}
    >
      <div
        className={cn("w-fit bg-blue-500 text-white flex rounded-md p-2", {
          ["bg-gray-500"]: data.direction === CHAT_DIRECTION.TO,
        })}
      >
        {data.message}
      </div>
    </div>
  );
}

export default ChatBubble;
