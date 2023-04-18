import dayjs from "dayjs";
import { MdLocationOn } from "react-icons/md";
import { HiOutlineLink } from "react-icons/hi";
import { FaRegCalendarAlt } from "react-icons/fa";

function UserCardBody({
  bio,
  location,
  blog,
  createdAT,
  followers,
  following,
  repos,
  gists,
}) {
  const formattedDate = dayjs(createdAT).format("MMMM YYYY");

  return (
    <div className="flex flex-col">
      <p className="text-[18px] px-4">{bio}</p>
      <div className="flex flex-col gap-2 bg-dark rounded-lg p-4 mt-3 font-semibold text-[16px]">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <MdLocationOn className="cursor-pointer" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <HiOutlineLink />
            <span className="text-primary">{blog}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaRegCalendarAlt className="cursor-pointer" />
            <span>Joined {formattedDate}</span>
          </div>
        </div>
        <div className="flex items-center gap-5 ">
          <span className="cursor-pointer">Followers - {followers}</span>
          <span className="cursor-pointer">Following - {following}</span>
          <span className="cursor-pointer">Repos - {repos}</span>
          <span className="cursor-pointer">Gists - {gists}</span>
        </div>
      </div>
    </div>
  );
}

export default UserCardBody;
