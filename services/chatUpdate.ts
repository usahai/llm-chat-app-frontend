import { CHAT_DIRECTION, ChatHistory, ChatUpdate } from "@/types/chats";

export function chatUpdate({ userId, message }: ChatUpdate): ChatHistory {
  const resp: ChatHistory = {
    id: crypto.randomUUID(),
    direction: CHAT_DIRECTION.TO,
    isDeleted: false,
    message: message,
    timestamp: new Date().getTime(),
    userId: userId
  }

  return resp
}