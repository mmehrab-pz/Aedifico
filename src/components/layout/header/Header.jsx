'use client'
import React from "react";
import LoginBtn from "./LoginBtn";
import DarkLightModeBtn from "./DarkLightModeBtn";
import Navbar from "./Navbar";
import SignUpBtn from "./SignUpBtn";
import { useUserStore } from "@/store/userStore";
import { AvatarDropdown } from "./AvatarDropdown";

export default function Header() {
    const user = useUserStore((state) => state.user);
  const hydrated = useUserStore((state) => state.hydrated);

  if (!hydrated) return null;
  return (
    <header className="w-[60%] h-15 flex justify-between items-center mx-auto relative z-10">
      <div>
        <h2 className="capitalize text-white text-2xl">aedifico</h2>
      </div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <div className="flex">
        {user ? (
          <AvatarDropdown />
        ) : (
          <div className="flex gap-1">
          <LoginBtn></LoginBtn>
          <SignUpBtn></SignUpBtn>
        </div>
        )}
        {/* <div className="flex gap-1">
          <LoginBtn></LoginBtn>
          <SignUpBtn></SignUpBtn>
        </div> */}
      </div>
    </header>
  );
}
