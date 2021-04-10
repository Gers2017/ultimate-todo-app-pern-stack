import React from "react";

export default function TableItem({ children }) {
  return (
    <div className="grid grid-cols-3 justify-items-center items-center text-gray-600 border-b border-gray-400 px-3 py-6">
      {children}
    </div>
  );
}
