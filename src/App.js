import "./App.css";
import { Content } from "./components/Content";
import { Navigation } from "./components/Navigation";
import { SideBar } from "./components/SideBar";
function App() {
  return (
    <div className="App">
      <div className="grid gap-0 grid-rows-2 grid-cols-4 ">
        <div className=" col-span-full row-start-1 row-end-3 mb-2 h-fit">
          <Navigation />
        </div>
        <div className="col-span-1  ">
          <SideBar />
        </div>
        <div className="col-span-3">
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
