import "./styles/global.css";

import { Habit } from "./components/Habit";

function App() {
  return (
    <>
      <Habit completed={1} />
      <Habit completed={10} />
      <Habit completed={100} />
      <Habit completed={1000} />
      <Habit completed={102} />
    </>
  );
}

export default App;
