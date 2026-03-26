
import "./App.css";
import ToDo from "./todo";
import Actor from "./actor";
import Singer from "./singer";

function App() {
  const time = 50;
  const actors = ["Bapparaj", "Omar sany", "Jasim"];
  const singers=[
    {id:1, name:'Dr.Mahfuz',age:60},
    {id:2, name:'Tahsan',age:57},
    {id:3, name:'James',age:66},
  ]
  return (
    <>
      <h1>React core concept</h1>
      {actors.map((actor,index) => (
        <Actor key={index} acto={actor}></Actor>
      ))}
      {
        singers.map(singer=><Singer key= {singer.id} name={singer}></Singer>)
      }

      <ToDo task="learn React" isDone={true} time={time}></ToDo>
      <ToDo task="Revised Js" isDone={false}></ToDo>
      <ToDo task="Take a Shower" isDone={false} ></ToDo>
      <Student></Student>
      <Person></Person>
      <Developer name="aslam" tech="js"></Developer>
      <Developer name="rafi" tech="python"></Developer>
      <Salami event="roja eid" quantity={50}></Salami>
    </>
  );
}

function Person() {
  const age = 22;
  const name = "aslam";

  const personStyle = {
    color: "red",
    textAlign: "left",
  };
  return (
    <p style={personStyle}>
      i am a person: {name} {age}
    </p>
  );
}

function Student() {
  return (
    <div className="student">
      <p>Name:</p>
      <p>Dept:</p>
    </div>
  );
}
function Developer(props) {
  return (
    <div
      style={{
        color: "green",
        border: "2px solid blue",
        margin: "5px",
      }}
    >
      <h3>Developer: {props.name}</h3>
      <p>technology: {props.tech}</p>
    </div>
  );
}

function Salami({ event, quantity}) {
  return (
    <div className="student">
      <h3>salami for:{event}</h3>
      <p>Amount:{quantity} </p>
    </div>
  );
}

export default App;
