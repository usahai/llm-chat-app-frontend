"use client";

import { FormEvent, useContext } from "react";
import { TextInput } from "@mantine/core";
import { ChatContext } from "@/contexts/chat";
import { ChatContextProps } from "@/types/chats";
import { cn } from "@/utils/cn";
import { CHAT } from "@/constants/form";
import useChatInputMutation from "@/hooks/useChatInputMutation";

function ChatInput() {
  const { selectedChat } = useContext(ChatContext) as ChatContextProps;
  const { mutateAsync } = useChatInputMutation({
    onSuccess: (data) => {
      console.log("[CI] response:", data);
    },
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Add input to chat history
    const userInput = new FormData(event.currentTarget)
      .get(CHAT.USER_INPUT)
      ?.toString();

    if (!!userInput && userInput.length > 0 && !!selectedChat) {
      mutateAsync({ message: userInput, userId: selectedChat });
    }

    // Reset form
    const form = event.target as HTMLFormElement;
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className={cn({ ["hidden"]: !selectedChat })}>
      <TextInput
        name="textInput"
        autoComplete="off"
        classNames={{
          root: "text-black",
          input: "w-full px-3 py-1 rounded-sm",
          wrapper: "flex items-center gap-2 mt-2",
        }}
        placeholder="Enter search params"
      />
    </form>
  );
}

export default ChatInput;
