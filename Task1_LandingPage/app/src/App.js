import Header from "./Header";
import Hero from "./Hero";
import Info from "./Info";

function App() {
  return (
    <div className="bg-no-repeat bg-right xl:bg-[url('../public/images/bg.png')]">
      <Header />
      <Hero />
      <Info />
    </div>
  );
}

export default App;
