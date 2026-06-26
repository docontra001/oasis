"use client";

import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="h-screen bg-zinc-950 text-white">

      <Header />

      <div className="flex h-[calc(100vh-80px)]">

       <Sidebar
  collapsed={collapsed}
  setCollapsed={setCollapsed}
/>

        <main className="flex-1 relative">


          {children}

        </main>

      </div>

    </div>
  );
}