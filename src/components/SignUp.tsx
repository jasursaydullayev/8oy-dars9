import { FormEvent, useState } from "react";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebaseApp";

function SignUp() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });

  const handleChange = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const { email, password } = values;

    if (email == "") {
      alert("Provide eail");
      return;
    }
    if (password !== values.confirmPass) {
      alert("Password should be match");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        console.log(user);
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div>
      <h3>Sign Up</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={handleChange}
          name="email"
          placeholder="Your email"
        />
        <br />
        <br />
        <label htmlFor="pass">Password</label>
        <br />
        <input
          name="password"
          onChange={handleChange}
          type="password"
          id="pass"
        />
        <br />
        <br />
        <label htmlFor="pass2">Confirn Password</label>
        <br />
        <input
          name="confirmPass"
          onChange={handleChange}
          type="password"
          id="pass2"
        />
        <br />
        <br />
        <button>Sign up</button>
      </form>
    </div>
  );
}

export default SignUp;
