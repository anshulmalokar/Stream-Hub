"use client";
import React from "react";
import { useSideBar } from "@/store/use-sidebar";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";
import SideBar from ".";
export default function Container({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { collasped, onContract, onExpand } = useSideBar();
  const matches = useMediaQuery("(min-width: 1024px)");
  useEffect(() => {
    if(matches){
      onContract();
    }else{
      onExpand();
    }
  },[matches,onContract,onExpand]);
  return (
    <>
      <div className={
        cn("flex-1",
          collasped ? "ml-[70px] ": "ml-60"
        )
      }>
            {children}
      </div>
    </>
  );
}
