import RegisterContainer from "@/modules/register/register-container";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();
  const eventName = (router.query?.event as string) ?? "";
  if (eventName === "") {
    return <span>Error</span>;
  }
  return (
    <section id="register">
      <RegisterContainer eventName={eventName} />
    </section>
  );
}
