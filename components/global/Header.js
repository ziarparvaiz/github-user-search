import Link from "next/link";
import { SiVercel } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { Button } from "../ui/Button";

function Header() {
  return (
    <div className="flex justify-between items-center py-2 px-9 border-b-[1px] border-border">
      <Link
        className="flex items-center gap-3 text-[20px] font-semibold"
        href="/"
      >
        <SiVercel />
        <span>DevFinder</span>
      </Link>
      <div className="flex items-center gap-4">
        <Link href="/">
          <Button className="text-[16px]" variant="link">
            Docs
          </Button>
        </Link>
        <Link href="/">
          <Button
            className="flex items-center gap-3 text-[16px]"
            variant="link"
          >
            <AiFillGithub className="w-[20px] h-[20px]" /> GitHub
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
