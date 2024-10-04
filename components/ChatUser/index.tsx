import type { ChatUser } from "@/types/chatUser";
import { millisToReadableDate } from "@/utils/date";
import { ActionIcon, Button } from "@mantine/core";
import { Settings } from "lucide-react";
import Link from "next/link";

interface ChatUserProps {
  data: ChatUser;
}

function ChatUser({ data: { id, name, timestamp } }: ChatUserProps) {
  return (
    <Button
      classNames={{
        inner: "w-full",
        label: "flex",
        root: "p-4 flex font-normal bg-gray-500 border-b border-b-black w-full text-start hover:bg-gray-600",
      }}
    >
      <div className="w-5/6">
        <p>{name}</p>
        <span className="text-xs italic">
          {millisToReadableDate(timestamp)}
        </span>
      </div>
      <div className="w-1/6 flex items-center">
        <ActionIcon id={id} className="rounded-full p-2 hover:bg-slate-700">
          <Link href={id}>
            <Settings />
          </Link>
        </ActionIcon>
      </div>
    </Button>
  );
}

export default ChatUser;
