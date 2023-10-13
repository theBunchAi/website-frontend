import Head from "next/head";
import TheProjectContainer from "@/modules/the-project/project-container";

export default function thebucketlistproject() {
  return (
    <section className="the-bucketlist-project" id="the-bucketlist-project">
      <Head>
        <title>The Bunch Ai | The Bucketlist Project</title>
        <meta
          name="description"
          content="TheBunch.ai aims to bring like-minded people together for exceptional social experiences,\
          forming friendships and creating memories."
        />
      </Head>
      <TheProjectContainer />
    </section>
  );
}
