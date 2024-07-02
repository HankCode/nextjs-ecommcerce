import React from "react";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
