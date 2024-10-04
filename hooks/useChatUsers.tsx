import getChatUsers from "@/services/chatUsers";
import { ChatUser } from "@/types/chatUser";
import { useQuery } from "@tanstack/react-query";

function useChatUsers() {
  const query = useQuery<unknown, unknown, ChatUser[]>({
    queryKey: ["chatUsers"],
    queryFn: () => getChatUsers(),
    placeholderData: [],
  });

  return query;
}

export default useChatUsers;
