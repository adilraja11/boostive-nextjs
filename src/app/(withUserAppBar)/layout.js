import React from "react";
import { Appbar } from "@/components/reusable/Appbar";
import { Footer } from "@/components/reusable/Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Appbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
