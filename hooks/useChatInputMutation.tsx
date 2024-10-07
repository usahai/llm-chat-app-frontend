"use client";

import { chatUpdate } from "@/services/chatUpdate";
import { ChatUpdate } from "@/types/chats";
import { useMutation, UseMutationOptions } from "@tanstack/react-query";

function useChatInputMutation(
  options?: Omit<UseMutationOptions<unknown, unknown, ChatUpdate>, "mutationFn">
) {
  const mutation = useMutation({
    mutationFn: async ({ userId, message }: ChatUpdate) =>
      await chatUpdate({ userId, message }),
    ...options,
  });

  return mutation;
}

export default useChatInputMutation;
