import Image from "next/image";

function Avatar({ width, height }) {
  const AvatarImg = "https://avatars.githubusercontent.com/u/50423368?v=4";

  return (
    <>
      <Image
        className="object-contain rounded-full"
        src={AvatarImg}
        alt="avatart"
        width={width}
        height={height}
      />
    </>
  );
}

export default Avatar;
