import { ValuesOf } from "@/utils/valueOf";

export interface ChatUser {
  id: string;
  name: string;
  timestamp: number;
}

export const CHAT_DIRECTION = {
  TO: "to",
  FROM: "from"
} as const
export type ChatDirection = ValuesOf<typeof CHAT_DIRECTION>

export interface ChatHistory {
  id: string;
  userId: string;
  message: string;
  timestamp: number;
  isDeleted: boolean;
  direction: ChatDirection
}

export interface ChatContextProps {
  selectedChat?: string;
  handleSelectChat: (id: string) => void;
  handleClearChat: () => void;
}

