function StudentList({ students, index }) {
  return (
    <tr>
      <td>{index}</td>
      <td>{students.studName}</td>
      <td>{students.roll}</td>
      <td>{students.studClass}</td>
    </tr>
  );
}
export default StudentList;
