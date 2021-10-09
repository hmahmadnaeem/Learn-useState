import logo from "./logo.svg";
import "./App.css";

// import files
import UseStatePractice from "./useStatePractice/UseStatePractice";
import Routing from "./routing/Routing";

// start app function

function App() {
  return (
    <div style={{ backgroundColor: "#cacaca", height: "100vh" }}>
      <Routing />
      {/* <UseStatePractice /> */}
    </div>
  );
}

export default App;
