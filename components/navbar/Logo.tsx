import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import logo from "@/app/assets/images/logo.svg";

function Logo() {
  return (
    <Button
      size="icon"
      asChild
      variant={"outline"}
      className="border-none shadow-none"
    >
      <Link href="/">
        <Image src={logo} alt="main-logo" />
      </Link>
    </Button>
  );
}
export default Logo;
