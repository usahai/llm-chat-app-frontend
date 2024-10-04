"use client";

import { ChatContextProps } from "@/types/chats";
import { createContext, ReactNode, useState } from "react";

const ChatContext = createContext<ChatContextProps | null>(null);

function ChatContextProvider({ children }: { children: ReactNode }) {
  const [selectedChat, setSelectedChat] = useState<string | undefined>();

  function handleSelectChat(id: string) {
    setSelectedChat(id);
  }

  function handleClearChat() {
    setSelectedChat(undefined);
  }

  return (
    <ChatContext.Provider
      value={{ selectedChat, handleSelectChat, handleClearChat }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export default ChatContextProvider;
export { ChatContext };
