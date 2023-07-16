import Image from "next/image";

export default function RegisterForm({ eventName }: { eventName: string }) {
  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log("works");
  };
  return (
    <div className="form-container">
      <div className="img-container form-img-container">
        <Image
          src="/assets/images/form.jpg"
          alt="3D Swirl"
          fill
          priority
          sizes="100%"
          className="form-img"
        />
      </div>
      <form id="reg-form" onSubmit={submitHandler}>
        <h2 className="form-heading">Fill in appropriately</h2>
        <label htmlFor="name" className="label-text">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          id="name"
        ></input>
        <label htmlFor="mail" className="label-text">
          Mail Address
        </label>
        <input
          type="text"
          name="mail"
          placeholder="Your mail"
          id="mail"
        ></input>
        <label htmlFor="number" className="label-text">
          Phone Number
        </label>
        <input
          type="number"
          name="phone number"
          placeholder="Your number"
          id="number"
        ></input>
        <label htmlFor="" className="checkbox">
          <input type="checkbox" />
          <span>I agree to share all my details</span>
        </label>
        <button type="submit" className="reg-btn">
          Register
        </button>
      </form>
    </div>
  );
}
