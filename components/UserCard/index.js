import { HiOutlineDownload } from "react-icons/hi";
import Card from "../ui/Card";
import UserCardHeader from "./UserCardHeader";
import UserCardBody from "./UserCardBody";
import UserCardFooter from "./UserCardFooter";
import fileDownload from "js-file-download";
import domtoimage from "dom-to-image";
import { Button } from "../ui/Button";

function UserCard({
  avatar,
  username,
  fullName,
  githubProfileURL,
  twitter,
  org,
  email,
  blog,
  bio,
  location,
  createdAT,
  following,
  followers,
  repos,
  gists,
  hireable,
}) {
  const handleDownload = () => {
    const node = document.getElementById("user-card");
    domtoimage.toBlob(node).then((blob) => {
      fileDownload(blob, `${username}.png`);
    });
  };

  return (
    <>
      <Card id="user-card" className="flex flex-col gap-6">
        <UserCardHeader
          avatar={avatar}
          username={username}
          fullName={fullName}
          githubProfileURL={githubProfileURL}
          twitter={twitter}
          org={org}
          email={email}
          blog={blog}
        />
        <UserCardBody
          bio={bio}
          location={location}
          blog={blog}
          createdAT={createdAT}
          following={following}
          followers={followers}
          repos={repos}
          gists={gists}
        />
        <UserCardFooter hireable={hireable} email={email} />
      </Card>
      <Button
        className="flex items-center gap-2 !text-[14px] !h-[30px] mt-2"
        variant="primary"
        onClick={handleDownload}
      >
        <HiOutlineDownload /> Download PNG
      </Button>
    </>
  );
}

export default UserCard;
