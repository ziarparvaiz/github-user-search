import Card from "./ui/Card";
import { FiSearch } from "react-icons/fi";
import Button from "./ui/Button";

function Search() {
  return (
    <Card className="flex items-center h-[70px]">
      <FiSearch className="h-[30px] w-[30px] text-primary" />
      <input
        className="text-[18px] w-full mx-[20px] h-full bg-transparent outline-none"
        type="search"
        placeholder="Search Github username..."
      />
      <Button
        className="!rounded-[15px] !text-[16px]"
        type="submit"
        color="primary"
      >
        Search
      </Button>
    </Card>
  );
}

export default Search;
