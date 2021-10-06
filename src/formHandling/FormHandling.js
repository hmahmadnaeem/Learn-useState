import React from "react";
import { useState } from "react";

// start main function
function FormHandling() {
  // Start student list

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const subMitBtn = () => {
    let stuObj = {
      name: name,
      password: password,
    };
    console.log("date from object ", stuObj);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          onChange={(ev) => setName(ev.target.value)}
          placeholder="Enter Name"
          name="name"
        />
        <p>{name}</p>
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          password="password"
          onChange={(pass) => setPassword(pass.target.value)}
        />
        <p>Your password is : {password}</p>
      </div>
      <div>
        <button onClick={subMitBtn}>Submit Form</button>
      </div>
      {/* end main fun */}
    </div>
  );
}
export default FormHandling;
