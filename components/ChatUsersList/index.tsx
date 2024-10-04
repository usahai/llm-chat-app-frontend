"use client";

import useChatUsers from "@/hooks/useChatUsers";
import ChatUser from "../ChatUser";

function ChatUsersList() {
  const { data: chatUsers } = useChatUsers();

  return (
    <>
      <p className="p-4 font-bold text-xl">Chats</p>
      <hr className="bg-slate-600" />
      <div className="overflow-y-auto">
        {chatUsers?.map((item) => (
          <ChatUser data={item} key={item.id} />
        ))}
      </div>
    </>
  );
}

export default ChatUsersList;
