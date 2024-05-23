import React from "react";
import { Footer } from "@/components/reusable/Footer";
import { UserAppbar } from "@/components/reusable/UserAppbar";

export default function Layout({ children }) {
  return (
    <div>
      <UserAppbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
