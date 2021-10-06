import { useState } from "react";
import { StudentData } from "./StudentData";
import StudentList from "./StudentList";

function Student() {
  const [student, setstudent] = useState(StudentData);
  //   --- New states for update
  const [newName, setNewName] = useState("");
  const [roll, setRoll] = useState("");
  const [addClass, setAddClass] = useState("");
  //   const [errMsg, setErrMsg] = useState("");

  //   if (newName != "" && roll != "" && addClass != "") {
  const ctaHandler = () => {
    let objStudent = {
      studName: newName,
      roll,
      studClass: addClass,
    };
    console.log("data :  ", objStudent);
    setstudent([...student, objStudent]);
    setNewName(" ");
    setRoll(" ");
    setAddClass(" ");
  };
  //   } else {
  //     setErrMsg("Some values are missing");
  //   }

  //   start return
  return (
    <div style={{ padding: "25px" }}>
      <div>
        <input
          placeholder="Enter Name"
          value={newName}
          type="text"
          name="name"
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          placeholder="Enter Roll No"
          value={roll}
          type="text"
          onChange={(e) => setRoll(e.target.value)}
        />
        <input
          placeholder="Enter Class Name"
          value={addClass}
          type="text"
          onChange={(e) => setAddClass(e.target.value)}
        />
        <button onClick={ctaHandler}>Submit Form</button>

        {/* <p style={{ backgroundColor: "red" }}>{errMsg}</p> */}
      </div>
      <br />
      <hr />
      <table>
        <tr>
          <th>No </th>
          <th>Name</th>
          <th>Roll #</th>
          <th>Class</th>
        </tr>
        {student.map((item, index) => {
          return <StudentList index={index} students={item} />;
        })}
      </table>
    </div>
  );
}
export default Student;
