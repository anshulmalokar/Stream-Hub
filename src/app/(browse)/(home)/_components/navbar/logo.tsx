import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
const fonts = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

import React from "react";

type Props = {};

export const Logo = (props: Props) => {
  return (
    <>
        <Link href={"/"} className="flex gap-2 items-center">
          <div className=" lg:rounded-full p-1 rounded-full bg-white">
            <Image src={"/spooky.svg"} alt="streamapp" height={30} width={30} />
          </div>
          <div className="hidden lg:flex lg:flex-col lg:text-white">
            <div className="text-lg font-bold">Stream Hub</div>
            <div className="text-sm text-slate-400">Let's Play</div>
          </div>
        </Link>
    </>
  );
};
