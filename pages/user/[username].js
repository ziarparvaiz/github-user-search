import Layout from "@/components/layout";
import Container from "@/components/layout/Container";
import UserCard from "@/components/UserCard";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/userData";

const _GITHUBTOKEN = process.env.GITHUB_TOKEN;
const _GITHUBAPIURL = process.env.GITHUB_API_URL;

function user({ userData, error }) {
  const dispatch = useDispatch()
  if (error) {
    return <p>{error}</p>;
  }

  if (!userData) {
    return <p>Loading...</p>;
  }

  dispatch(setUser(userData))

  return (
    <Layout>
      <Container className="md:max-w-[900px]">
        <UserCard
          avatar={userData.avatar_url}
          username={userData.login}
          fullName={userData.name}
          githubProfileURL={userData.html_url}
          twitter={userData.twitter_username}
          org={userData.company}
          email={userData.email}
          blog={userData.blog}
          bio={userData.bio}
          location={userData.location}
          createdAT={userData.created_at}
          following={userData.following}
          followers={userData.followers}
          repos={userData.public_repos}
          gists={userData.public_gists}
          hireable={userData.hireable}
        />
      </Container>
    </Layout>
  );
}

export default user;

export async function getServerSideProps({ params }) {
  const { username } = params;

  try {
    const res = await fetch(
      `${_GITHUBAPIURL}/users/${username.toLowerCase()}`,
      {
        headers: {
          Authorization: `token ${_GITHUBTOKEN}`,
        },
      }
    );
    if (res.status === 404) {
      return {
        props: {
          error: "User not found",
          userData: null,
        },
      };
    } else {
      const userData = await res.json();
      return {
        props: {
          error: null,
          userData,
        },
      };
    }
  } catch (error) {
    console.error(error);
    return {
      props: {
        error: "Error fetching user data",
        userData: null,
      },
    };
  }
}
