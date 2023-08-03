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
      <RegisterHeroBanner />
      <RegisterForm eventName={eventName} />
    </section>
  );
}
