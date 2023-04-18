import Link from "next/link";
import { SiVercel } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import Button from "../ui/Button";

function Header() {
  return (
    <div className="flex justify-between items-center py-2 px-9 border-b-[1px] border-gray-400">
      <Link
        className="flex items-center gap-3 text-[20px] font-semibold"
        href="/"
      >
        <SiVercel />
        <span>DevFinder</span>
      </Link>
      <div className="flex items-center gap-4">
        <Button
          className="!text-gray-500 hover:!text-white transition duration-300 ease-in-out"
          href="/docs"
        >
          Docs
        </Button>
        <Button
          border="border"
          className="!border-dark-300 !text-gray-500 hover:!text-white hover:!border-white transition duration-300 ease-in-out"
          href="/github"
        >
          <AiFillGithub />
          <span>GitHub</span>
        </Button>
      </div>
    </div>
  );
}

export default Header;
