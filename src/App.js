import "./app.scss";
import Slide1 from "./components/slide1/Slide1.jsx";
import Slide2 from "./components/slide2/Slide2.jsx";
import Slide3 from "./components/slide3/Slide3.jsx";
import Slide4 from "./components/slide4/Slide4.jsx";
import Slide5 from "./components/slide5/Slide5.jsx";
import Slide6 from "./components/slide6/Slide6.jsx";

function App() {
  return (
    <div className="app">
      <div className="sections">
        <Slide1 />
        <Slide2 />
        <Slide3 />
        <Slide4 />
        <Slide5 />
        <Slide6 />
      </div>
    </div>
  );
}

export default App;
