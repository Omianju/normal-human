import Link from "next/link";

// import { LatestPost } from "~/app/_components/post";
import { Button } from "~/components/ui/button";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  return (
    <div>
      <Button>Hello </Button>
    </div>
  );
}
