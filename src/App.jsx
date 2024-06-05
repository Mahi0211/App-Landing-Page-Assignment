import Advantages from "./components/Advantages";
import Features from "./components/Features";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <main className="h-screen bg-black bg-fixed">
      <section className="h-full w-full overflow-auto rounded-[50px] bg-white">
        <NavBar />
        <Hero />
        <Features />
        <Advantages />
      </section>
    </main>
  );
}

export default App;
