"use client";

import { useEffect, useState } from "react";
import { ReactNode } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);

  useEffect(() => {
    const verificarTela = () => {
      const ehMobile = window.innerWidth < 768;

      setMobile(ehMobile);

      if (!ehMobile) {
        setMenuAberto(false);
      }
    };

    verificarTela();

    window.addEventListener("resize", verificarTela);

    return () =>
      window.removeEventListener("resize", verificarTela);
  }, []);

  return (
    <div className="h-screen bg-zinc-950 text-white flex flex-col">

      <Header
        mobile={mobile}
        onMenuClick={() => setMenuAberto(true)}
      />

      <div className="flex flex-1 overflow-hidden">

        {!mobile && (
          <Sidebar
            collapsed={collapsed}
            setCollapsed={setCollapsed}
          />
        )}

        {mobile && (
          <>
            <div
              className={`fixed inset-0 bg-black/60 z-40 transition-opacity ${
                menuAberto
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
              onClick={() => setMenuAberto(false)}
            />

            <div
              className={`fixed top-0 left-0 h-full z-50 transition-transform duration-300 ${
                menuAberto
                  ? "translate-x-0"
                  : "-translate-x-full"
              }`}
            >
              <Sidebar
                collapsed={false}
                setCollapsed={() => {}}
              />
            </div>
          </>
        )}

        <main className="flex-1 overflow-y-auto">
          {children}
        </main>

      </div>

    </div>
  );
}