import PageHeading from "@/components/page-heading";
import RegisterForm from "./register-form";

export default function RegisterContainer({
  eventName,
}: {
  eventName: string;
}) {
  return (
    <div className="register-container">
      <PageHeading
        text="Register"
        height="40vh"
        heightMed="40vh"
        heightSmall="40vh"
        fontSize="8rem"
        fontSizeMed="6rem"
        fontSizeSmall="20vw"
      />
      <div className="form-body">
        <RegisterForm eventName={eventName} />
      </div>
    </div>
  );
}
