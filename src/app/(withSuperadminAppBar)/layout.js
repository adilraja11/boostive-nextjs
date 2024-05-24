import { SidebarContent } from "@/components/reusable/SidebarContent";
import { SuperadminAppbar } from "@/components/reusable/SuperadminAppbar";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <SuperadminAppbar />
        <div className="my-6 mx-4">{children}</div>
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <SidebarContent />
      </div>
    </div>
  );
}
