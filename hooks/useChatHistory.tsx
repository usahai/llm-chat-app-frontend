import getChatHistory from "@/services/chatHistory";
import { ChatHistory } from "@/types/chats";
import { useQuery } from "@tanstack/react-query";

function useChatHistory(id: string) {
  const query = useQuery<unknown, unknown, ChatHistory[]>({
    queryKey: ["cafes", id],
    queryFn: async () => await getChatHistory(id),
    placeholderData: [],
    enabled: !!id,
  });

  return query;
}

export default useChatHistory;
