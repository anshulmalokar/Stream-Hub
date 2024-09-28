import React, { use } from "react";
import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Clapperboard } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
type Props = {};

const Actions = async (props: Props) => {
  const user = await currentUser();
  if (!user) {
    return (
      <>
        <Button variant={"primary"} size={"sm"}>
          <SignInButton />
        </Button>
      </>
    );
  }
  return (
    <div className="flex justify-end gap-5">
      <Link href={user === null ? "/" : `/u/${user.username}`}>
        <div className="flex gap-3">
          <Clapperboard />
          <span className="hidden lg:block">Dashboard</span>
        </div>
      </Link>
      <UserButton afterSwitchSessionUrl="/"/>
    </div>
  );
};

export default Actions;
