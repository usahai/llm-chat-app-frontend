import type { ChatUser } from "@/types/chatUser";
import { millisToReadableDate } from "@/utils/date";
import { Button } from "@mantine/core";

interface ChatUserProps {
  data: Omit<ChatUser, "id">;
}

function ChatUser({ data: { name, timestamp } }: ChatUserProps) {
  return (
    <Button className="p-4 block font-normal bg-gray-500 border-b border-b-black w-full text-start hover:bg-gray-600">
      <p>{name}</p>
      <span className="text-xs italic">{millisToReadableDate(timestamp)}</span>
    </Button>
  );
}

export default ChatUser;
