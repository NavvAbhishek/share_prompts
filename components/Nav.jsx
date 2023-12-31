"use client";

import Image from "next/image";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="PromptUniverse Logo"
          width={30}
          height={30}
          className="object-contain"
        />
      </Link>
    </nav>
  );
};

export default Nav;
