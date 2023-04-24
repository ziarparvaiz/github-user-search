import Layout from "@/components/layout";
import { Button } from "@/components/ui/Button";

function NotFound() {
  return (
    <Layout title="404 Error - Tubeufy" description="eeeeeee">
      <main className="h-screen flex justify-center items-center px-6">
        <div className="text-center">
          <p className="text-base font-semibold text-white-300">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            {/* <Button href="/" color="danger">
              Go Back Home
            </Button> */}
            <Button variant="destructive">Go Back Home</Button>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default NotFound;
