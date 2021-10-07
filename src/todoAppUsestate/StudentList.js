function StudentList({ students, index, dltHandler, updateHandler }) {
  // const dltHandler = () => {};
  return (
    <tr>
      <td>{index}</td>
      <td>{students.id}</td>
      <td>{students.studName}</td>
      <td>{students.roll}</td>
      <td>{students.studClass}</td>
      <td>
        <button onClick={() => dltHandler(students.id)}>Delete-Row</button>
        <button onClick={() => updateHandler(students)}>Udate Data</button>
      </td>
    </tr>
  );
}
export default StudentList;
