import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Buisinesscard } from "./components/BuisinessCard";

const user = {
  name: "Prasad",
  description: "Software Engineer",
  interests: ["Open Source", "MERN"],
  social_media: [
    {
      image: "/vite.svg",
      url: "linkinurl",
    },
    {
      image: "/light.svg",
      url: "otherurl",
    },
  ],
};

function App() {
  const [counter, setCounter] = useState(0);
  const [buttonText, setButtonText] = useState(true);
  const numberCount = useMemo(() => expensiveFunction(counter), [counter]);
  //const numberCount = expensiveFunction(counter);
  function expensiveFunction(num) {
    //let num = 0;
    for (let i = 0; i <= 1000000000; i++) {
      num += 1;
    }
    return num;
  }

  return (
    <>
      <button onClick={() => setCounter(counter + 1)}>Click</button>
      <h4>Current Number is : {counter}</h4>
      <h5>Number count : {numberCount}</h5>
      <button
        onClick={() => {
          setButtonText(!buttonText);
        }}
      >
        {buttonText ? "Polo" : "Vento"}
      </button>
    </>
  );
}
// <Buisinesscard
// name={user.name}
// description={user.description}
// interests={user.interests}
// social_media={user.social_media}
// />;
export default App;
