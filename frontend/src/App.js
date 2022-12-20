import "./App.css";
import Discover from "./components/Discover";
import Groups from "./components/Groups";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <div className="flex">
      {/* Friends + Groups */}
      <Groups />
      {/* Discover */}
      <Discover />
      {/* Main Content */}
      <MainComponent />
      {/* Hero */}
      {/* Featured */}
      <div className="w-full h-screen bg-[#363940]"></div>
    </div>
  );
}
export default App;
