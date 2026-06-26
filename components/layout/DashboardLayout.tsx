import Header from "./Header";
import Sidebar from "./Sidebar";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="h-screen bg-zinc-950 text-white">

      <Header />

      <div className="flex h-[calc(100vh-64px)]">

        <Sidebar />

        {children}

      </div>

    </div>
  );
}