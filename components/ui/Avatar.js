import Image from "next/image";

function Avatar({ src, width, height }) {
  return (
    <>
      <Image
        className="object-contain rounded-full"
        src={src}
        alt="avatart"
        width={width}
        height={height}
      />
    </>
  );
}

export default Avatar;
