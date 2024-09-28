import React from "react";
import NavBar from "./_components/navbar";
import SideBar from "./_components/sidebar";
import Container from "./_components/sidebar/Container";

type Props = {};

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavBar />
      <SideBar/>
      <Container>
        {children}
      </Container>
    </>
  );
}
