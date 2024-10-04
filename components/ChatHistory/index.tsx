"use client";

import { ChatContext } from "@/contexts/chat";
import useChatHistory from "@/hooks/useChatHistory";
import { ChatContextProps } from "@/types/chats";
import { useContext, useEffect } from "react";
import ChatBubble from "./ChatBubble";

function ChatHistory() {
  const { selectedChat } = useContext(ChatContext) as ChatContextProps;
  const { data, refetch } = useChatHistory(selectedChat ?? "");

  useEffect(() => {
    refetch();
  }, [selectedChat, refetch]);

  return (
    <>
      {!selectedChat ? (
        <div className="h-full flex justify-center items-center text-3xl text-gray-300/80">
          Please select a chat
        </div>
      ) : (
        !!data &&
        data?.length === 0 && (
          <div className="h-full flex justify-center items-center text-3xl text-gray-300/80 text-center">
            Please type something
            <br />
            to begin a chat
          </div>
        )
      )}
      {!!data && data?.length > 0 && (
        <div id="chatHistory" className="flex flex-col-reverse gap-2">
          {data?.map((rec) => (
            <ChatBubble key={rec.id} data={rec} />
          ))}
        </div>
      )}
    </>
  );
}

export default ChatHistory;
