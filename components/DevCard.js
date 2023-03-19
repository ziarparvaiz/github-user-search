import Container from "./layout/Container";
import Search from "./Search";
import User from "./User";

function DevCard() {
  return (
    <Container className="md:max-w-[900px]">
      <div className="flex flex-col gap-7">
        <Search />
        <User />
      </div>
    </Container>
  );
}

export default DevCard;
