import React from "react";
import { useRoutes } from "hookrouter";
import { Sidebar } from "./pages/shared/sidebar";
import { createRoutes } from "./app.routing";

export function App() {
  let route = useRoutes(createRoutes());

  return (
    <div className="min-h-screen flex  bg-gray-100">
      <Sidebar />
      <div className="p-10 w-full">{route}</div>
    </div>
  );
}
