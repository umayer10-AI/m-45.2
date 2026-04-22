"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = () => {

    const p = usePathname()

    return (
        <ul className="flex items-center gap-4">
            <li>
              <Link href="/" className={p==='/'? "btn btn-accent btn-outline" : "btn"}>Home</Link>
            </li>
            <li>
              <Link href="/about" className={p==='/about'? "btn btn-accent btn-outline" : "btn"}>About</Link>
            </li>
            
          </ul>
    );
};

export default NavLink;