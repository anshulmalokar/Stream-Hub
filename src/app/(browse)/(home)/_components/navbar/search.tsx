"use client";
import React from "react";
import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import queryString from 'query-string';
import { X } from "lucide-react";

type Props = {};

export default function Search({}: Props) {
  const router = useRouter();
  const [value,setValue] = useState('');

  const onClear = () => {
    setValue('');
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const url = queryString.stringifyUrl({
      url: '/search',
      query:{
        term: value
      }
    },{
      skipEmptyString: true
    });
    router.push(url);
  }
  return (
    <form className="flex items-center gap-1 w-80" onSubmit={onSubmit}>
      <Input
        height={10}
        width={40}
        onChange={(e) => {setValue(e.target.value)}}
        value={value}
        className="bg-white text-black
        rounded-lg
        focus-visible:ring-0 focus-visible:ring-offset-0
        focus-visible:ring-transparent
        focus:ring-0
        focus:ring-transparent"
      />
      {
        value !== '' && <>
            <X className = "absolute top-5 right-16 text-muted-foreground" onClick={onClear}/>
        </>
      }
      <Button size={"sm"} className="bg-transparent hover:bg-transparent">
        <SearchIcon size={20} className="border-l-0 text-white cursor-pointer opacity-50 transition" />
      </Button>
    </form>
  );
}