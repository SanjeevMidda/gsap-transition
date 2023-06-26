import { useRef } from "react";
import "./index.css";
import { gsap } from "gsap";

function App() {
  let one = useRef();
  let two = useRef();
  let three = useRef();

  let tl = gsap.timeline({ repeat: 1, repeatDelay: 1 });
  tl.fromTo(one.current, { x: 100, duration: 1 });
  tl.fromTo(two.current, { x: 200, duration: 1 });
  tl.fromTo(three.current, { x: 300, duration: 1 });

  return (
    <div className="App">
      <h1 id="one" ref={one}>
        ONE
      </h1>
      <h1 id="two" ref={two}>
        TWO
      </h1>
      <h1 id="three" ref={three}>
        THREE
      </h1>
    </div>
  );
}

export default App;
