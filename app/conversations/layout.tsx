import getConversations from "../actions/getConversations";
import SideBar from "../components/SideBar/SideBar";
import ConversationsList from "./components/ConversationsList";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const conversations = await getConversations();

  return (
    <SideBar>
      <div className="h-full">
        <ConversationsList initialItems={conversations} />
        {children}
      </div>
    </SideBar>
  );
}
