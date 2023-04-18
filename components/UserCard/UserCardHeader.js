import { HiOutlineMail, HiOutlineLink } from "react-icons/hi";
import { GrTwitter } from "react-icons/gr";
import Link from "next/link";
import Avatar from "../ui/Avatar";

function UserCardHeader({
  avatar,
  username,
  fullName,
  githubProfileURL,
  twitter,
  blog,
  email,
  org,
}) {

  return (
    <div className="flex justify-between items-start">
      <div className="flex gap-5 items-center">
        <Avatar
          src={avatar}
          alt={username}
          width={120}
          height={120}
        />
        <div className="flex flex-col">
          <h4 className="text-[33px] font-bold">{fullName}</h4>
          <Link
            href={githubProfileURL}
            className="text-[18px] font-medium text-gray"
          >
            @{username}
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-3">
        {org && (
          <span className="text-[17px] font-semibold border-b-[1px] border-primary">
            {org}
          </span>
        )}
        {twitter && (
          <Link
            className="flex justify-center items-center bg-dark-900 rounded-md h-[35px] w-[35px]"
            href={`https://twitter.com/${twitter}`}
          >
            <GrTwitter className="h-[20px] w-[20px]" />
          </Link>
        )}
        {blog && (
          <Link
            className="flex justify-center items-center bg-dark-900 rounded-md h-[35px] w-[35px]"
            href={blog}
          >
            <HiOutlineLink className="h-[20px] w-[20px]" />
          </Link>
        )}
        {email && (
          <Link
            className="flex justify-center items-center bg-dark-900 rounded-md h-[35px] w-[35px]"
            href={`mailto:${email}`}
          >
            <HiOutlineMail className="h-[20px] w-[20px]" />
          </Link>
        )}
      </div>
    </div>
  );
}

export default UserCardHeader;
