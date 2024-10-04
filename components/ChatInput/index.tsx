"use client";

import type { MouseEvent, ReactNode } from "react";
import { ActionIcon, TextInput } from "@mantine/core";
import { CircleChevronRight } from "lucide-react";

function SubmitChatInput(): ReactNode {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function handleSubmit(event: MouseEvent<HTMLButtonElement>) {
    window.alert("submitted!");
  }

  return (
    <ActionIcon
      onClick={handleSubmit}
      variant="light"
      className="flex hover:cursor-pointer"
    >
      <CircleChevronRight color="white" />
    </ActionIcon>
  );
}

function ChatInput() {
  return (
    <>
      <TextInput
        classNames={{
          root: "text-black",
          input: "w-full px-3 py-1 rounded-sm",
          wrapper: "flex items-center gap-2 mt-2",
        }}
        placeholder="Enter search params"
        rightSection={<SubmitChatInput />}
      />
    </>
  );
}

export default ChatInput;
