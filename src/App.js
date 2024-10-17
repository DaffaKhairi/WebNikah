import "./App.css";
import Couple from "./Couple";
import Home from "./Home";
import Button from "./ButtonToggle";
import Location from "./Location";



function App() {
  function scrollToTarget ({ id }) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="w-full h-96">
      <div className="fixed w-full">
        <header className="h-full w-full bg-white  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 px-8 py-4">
          <div className="flex flex-row gap-3 justify-center">
          <Button name="Home" onClick={() => scrollToTarget({ id: 'Home' })} />
          <Button name="Couple" onClick={() => scrollToTarget({ id: 'Couple' })} />
          <Button name="Location" onClick={() => scrollToTarget({ id: 'Location' })} />
          <Button name="Event" onClick={() => scrollToTarget({ id: 'Event' })} />
          </div>
        </header>
      </div>
      <body>
        <Home Id={"Home"}/>
        <Couple Id={"Couple"} />
        <Location Id={"Location"}/>
      </body>
    </div>
  );
}

export default App;
