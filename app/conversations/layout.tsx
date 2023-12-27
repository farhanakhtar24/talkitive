import SideBar from "../components/SideBar/SideBar";

export default async function ConversationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SideBar>
      <div className="h-full">{children}</div>
    </SideBar>
  );
}
