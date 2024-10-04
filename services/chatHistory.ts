import chats from "@/constants/mockData/chats.json";
import { CHAT_DIRECTION } from "@/types/chats";

function getChatHistory(id: string) {
  return !id ? [] : chats.filter(chat => chat.userId === id).map(item => ({
    ...item,
    direction: Math.random() < 0.5 ? CHAT_DIRECTION.TO : CHAT_DIRECTION.FROM
  }))
}

export default getChatHistory;
