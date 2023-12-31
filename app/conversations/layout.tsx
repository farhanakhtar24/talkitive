import { Metadata } from "next";
import getConversations from "../actions/getConversations";
import SideBar from "../components/SideBar/SideBar";
import ConversationsList from "./components/ConversationsList";

export const metadata: Metadata = {
  title: "Conversations || Talkitive",
  description: "Conversations page of Talkitive chat app",
};

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
