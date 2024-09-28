"use client";
import { useSideBar } from "@/store/use-sidebar";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "usehooks-ts";

type Props = {};

export default function Wrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { collasped, onContract, onExpand } = useSideBar();
  if (collasped) {
    console.log(
      "Inside the Wrapper Component now the collapse is true and the sidebar should",
      "Now the width of the sidebar will be lesser"
    );
  } else {
    console.log(
      "Inside the Wrapper Component now the collapse is false and the sidebar should",
      "Now the width of the sidebar will be more"
    );
  }
  return (
    <aside
      className={cn(
        "fixed left-0 flex flex-col bg-slate-900 w-60 h-full border-r border-r-slate-900 z-50",
        collasped && "w-[70px]"
      )}
    >
      {children}
    </aside>
  );
}
