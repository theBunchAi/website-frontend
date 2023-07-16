import RegisterForm from "./register-form";
import PageHeading from "@/components/page-heading";

export default function RegisterContainer({
  eventName,
}: {
  eventName: string;
}) {
  return (
    <div className="register-container">
      <PageHeading text="Register" height="40vh" fontSize="8rem" />
      <div className="form-body">
        <RegisterForm eventName={eventName} />
      </div>
    </div>
  );
}
