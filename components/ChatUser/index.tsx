import { ChatContext } from "@/contexts/chat";
import type { ChatContextProps, ChatUser } from "@/types/chats";
import { cn } from "@/utils/cn";
import { millisToReadableDate } from "@/utils/date";
import { Card } from "@mantine/core";
import { MouseEvent, useContext } from "react";
import Preferences from "./Preferences";

interface ChatUserProps {
  data: ChatUser;
}

function ChatUser({ data: { id, name, timestamp } }: ChatUserProps) {
  const { selectedChat, handleSelectChat } = useContext(
    ChatContext
  ) as ChatContextProps;

  function handleSelection(event: MouseEvent<HTMLDivElement>) {
    handleSelectChat(event.currentTarget.id);
  }

  return (
    <Card
      className={cn(
        "p-4 flex font-normal bg-gray-500 border-b border-b-black w-full text-start hover:bg-gray-600 cursor-pointer",
        {
          ["bg-gray-700"]: id === selectedChat,
        }
      )}
      id={id}
      component="div"
      onClick={handleSelection}
    >
      <div className="w-5/6 font-medium text-white">
        <p className="text-lg">{name}</p>
        <span className="text-xs italic">
          {millisToReadableDate(timestamp)}
        </span>
      </div>
      <div className="w-1/6 flex items-center">
        <Preferences id={id} />
      </div>
    </Card>
  );
}

export default ChatUser;
