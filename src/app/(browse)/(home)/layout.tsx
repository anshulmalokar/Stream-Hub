import React from "react";
import NavBar from "./_components/navbar";

type Props = {};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex flex-col h-full">
        <NavBar />
        {children}
      </div>
    </>
  );
}
