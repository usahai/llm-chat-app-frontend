import ChatInput from "@/components/ChatInput";
import ChatHistory from "@/components/ChatHistory";
import ChatUsersList from "@/components/ChatUsersList";
import ChatContextProvider from "@/contexts/chat";

function Home() {
  return (
    <ChatContextProvider>
      <div
        id="appRoot"
        className="min-h-screen flex justify-center items-center"
      >
        <div className="w-1/5 border-white border-2 rounded-l-md">
          <div id="box" className="h-[calc(100vh-3rem)] w-full flex flex-col">
            <ChatUsersList />
          </div>
        </div>
        <div id="chat" className="w-4/5 border-white border-2 rounded-r-md">
          <div className="h-[calc(100vh-3rem)] w-full flex flex-col-reverse p-2">
            <ChatInput />
            <ChatHistory />
          </div>
        </div>
      </div>
    </ChatContextProvider>
  );
}

export default Home;
