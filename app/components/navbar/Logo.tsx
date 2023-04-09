"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      height="100"
      width="100"
      alt="logo"
      className="hidden md:block cursor-pointer"
      src="/images/logo.png"
    />
  );
};

export default Logo;
