import { useState } from "react";
import { useRouter } from "next/router";
import Container from "./layout/Container";
import Card from "./ui/Card";
import { FiSearch } from "react-icons/fi";
import Button from "./ui/Button";

function Search() {
  const [username, setUsername] = useState("");
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/user/${username}`);
  };

  return (
    <Container className="md:max-w-[900px]">
      <form onSubmit={handleSubmit}>
        <Card className="flex items-center h-[70px]">
          <FiSearch className="h-[30px] w-[30px] text-primary" />
          <input
            className="text-[18px] w-full mx-[20px] h-full bg-transparent outline-none"
            type="search"
            placeholder="Search Github username..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button
            className="!rounded-[15px] !text-[16px]"
            type="submit"
            color="primary"
          >
            Search
          </Button>
        </Card>
      </form>
    </Container>
  );
}

export default Search;
