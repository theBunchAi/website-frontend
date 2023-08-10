import Head from "next/head";
import { useRouter } from "next/router";
import RegisterForm from "@/modules/register/register-form";
import RegisterHeroBanner from "@/modules/register/register-hero-banner";

export default function Register() {
  const router = useRouter();
  const eventName = (router.query?.event as string) ?? "";
  if (eventName === "") {
    return <span>Error</span>;
  }
  return (
    <section id="register" aria-label="Bunch Ai | Register">
      <Head>
        <title>The Bunch Ai | Register</title>
        <meta
          name="description"
          content="TheBunch.ai aims to bring like-minded people together for exceptional social experiences,\
          forming friendships and creating memories."
        />
      </Head>
      <RegisterHeroBanner />
      <RegisterForm eventName={eventName} />
    </section>
  );
}
