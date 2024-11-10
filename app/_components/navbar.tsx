"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between px-8 py-5 border-b border-solid">
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" alt="Finance AI" width={173} height={39} />
        <Link
          href={"/"}
          className={
            pathname === "/"
              ? "text-primary font-bold"
              : "text-muted-foreground"
          }
        >
          {" "}
          Dashboard{" "}
        </Link>
        <Link
          href={"/transactions"}
          className={
            pathname === "/transactions"
              ? "text-primary font-bold"
              : "text-muted-foreground"
          }
        >
          {" "}
          Transações{" "}
        </Link>
        <Link
          href={"/subscription"}
          className={
            pathname === "/subscription"
              ? "text-primary font-bold"
              : "text-muted-foreground"
          }
        >
          {" "}
          Assinatura{" "}
        </Link>
      </div>

      <UserButton showName />
    </nav>
  );
};

export default Navbar;