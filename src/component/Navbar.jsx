"use client"
import React from "react";
import NavLink from "./NavLink";
import { signOut, useSession } from "@/lib/auth-client";
import Link from "next/link";
import { Button } from "@heroui/react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {

    const {data,isPending} = useSession()
    
    console.log(data)

    if(isPending){
        return <span className="loading loading-spinner text-warning h-10 w-10"></span>
    }

    const user = data?.user

  return (
    <div>
      <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
        <header className="flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <p className="font-bold">ACME</p>
          </div>

          <NavLink></NavLink>

          <div className="flex items-center gap-3">
              <ThemeToggle></ThemeToggle>
              {
                user ? <>
                  <Button variant="danger" onClick={() => signOut()}>Sign Out</Button>
                </> : <>
                  <Link href={'/auth/login'}><Button>Sign In</Button></Link>
                </>
              }
          </div>
          
        </header>
      </nav>
    </div>
  );
};

export default Navbar;
