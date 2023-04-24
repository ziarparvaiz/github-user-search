import Link from "next/link";
import { Badge } from "../ui/Badge";

function UserCardFooter({ email, hireable }) {
  if (hireable) {
    return (
      <div className="border-t-[1px] border-gray-400 pt-4">
        <Badge className="font-semibold">Hireable</Badge>
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
