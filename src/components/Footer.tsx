import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div style={{ color: '#3F4427' }} className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 flex items-center justify-between">
      <Link href="/" className="font-bold text-xl">inspiraCook</Link>
      <p>© ALL RIGHTS RESERVED.</p>
    </div>
  );
};

export default Footer;
