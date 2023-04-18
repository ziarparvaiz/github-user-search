import Link from "next/link";

function UserCardFooter({ email, hireable }) {
  if (hireable) {
    return (
      <div className="border-t-[1px] border-gray-400 pt-4">
        <span className="inline-flex justify-center items-center h-[35px] border-[1px] border-primary bg-primary-900 text-primary text-[16px] font-semibold rounded-full cursor-pointer px-5">
          Hireable
        </span>
        <p className="mt-3 pl-3">
          If you want to collabrate please{" "}
          <Link
            className="font-medium border-b-[1px] border-primary-200"
            href={`mailto:${email}`}
          >
            Contact me
          </Link>
          .
        </p>
      </div>
    );
  } else {
    return null;
  }
}

export default UserCardFooter;
