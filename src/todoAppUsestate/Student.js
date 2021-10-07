import { useState } from "react";
import { StudentData } from "./StudentData";
import StudentList from "./StudentList";

function Student() {
  const [student, setstudent] = useState(StudentData);
  //   --- New states for update
  const [id, setId] = useState("");
  const [newName, setNewName] = useState("");
  const [roll, setRoll] = useState("");
  const [addClass, setAddClass] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [flag, setFlag] = useState(false);

  const dltHandler = (id) => {
    // console.log("deleted is : ", studName);

    let delStudent = student.filter((students) => {
      if (students.id !== id) {
        return students;
      }
    });
    console.log("del Stu ", delStudent);

    setstudent([...delStudent]);
  };
  const updateHandler = (students) => {
    console.log("updateed herer ...", students);

    setNewName(students.id);
    setNewName(students.studName);
    setNewName(students.roll);
    setNewName(students.studClass);
    setFlag(true);
  };
  const ctaHandler = () => {
    setErrMessage("");
    if (newName != "" && roll != "" && addClass != "") {
      let objStudent = {
        id,
        studName: newName,
        roll,
        studClass: addClass,
      };
      console.log("data :  ", objStudent);
      setstudent([objStudent, ...student]);
      setId("");
      setNewName("");
      setRoll("");
      setAddClass("");
    } else {
      setErrMessage("Some input fields are empty ... !");
    }
  };
  const ctaUpdateHandler = () => {};
  //   start return
  return (
    <div style={{ padding: "25px" }}>
      <div>
        <input
          placeholder="id"
          value={id}
          type="value"
          name="name"
          onChange={(e) => setId(e.target.value)}
        />
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
        {flag ? (
          <button onClick={updateHandler}>Click to update</button>
        ) : (
          <button onClick={ctaUpdateHandler}>Submit Form</button>
        )}
        <div>
          <button onClick={ctaHandler}>Submit Form</button>
        </div>
        <p style={{ backgroundColor: "red", fontSize: "30px", color: "#fff" }}>
          {errMessage}
        </p>
      </div>
      <br />
      <hr />
      <table>
        <tr>
          <th>No </th>
          <th>ID #</th>

          <th>Name</th>
          <th>Roll #</th>
          <th>Class</th>
        </tr>
        {student.map((item, index) => {
          return (
            <StudentList
              index={index}
              students={item}
              dltHandler={dltHandler}
              updateHandler={updateHandler}
            />
          );
        })}
      </table>
    </div>
  );
}
export default Student;
