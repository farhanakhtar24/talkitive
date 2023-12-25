import React from "react";
import DesktopSidebar from "./DesktopSidebar";

type Props = {
  children: React.ReactNode;
};

const SideBar = async ({ children }: Props) => {
  return (
    <div className="h-full">
      <DesktopSidebar />
      <main className="h-full lg:pl-20">{children}</main>
    </div>
  );
};

export default SideBar;
