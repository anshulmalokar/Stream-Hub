import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const fonts = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

import React from "react";

type Props = {};

export const Logo = (props: Props) => {
  return (
    <>
      <div className="flex flex-col items-center space-y-1">
        <div className="bg-white rounded-full">
        <Image src={"/spooky.svg"} alt="streamapp" height={100} width={100} />
        </div>
        <div className="space-y-1">
             <p className={
                cn("text-xl font-semibold",fonts.className)
             }>
                Stream Hub
             </p>
             <p className={
                cn("text-sm text-muted-foreground",fonts.className)
             }>
                Let's Play
             </p>
        </div>
      </div>
    </>
  );
};
