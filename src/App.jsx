import Advantages from "./components/Advantages";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <main className="h-screen bg-black bg-fixed">
      <section className="h-full w-full overflow-auto rounded-[50px] bg-white">
        <NavBar />
        <Hero />
        <Features />
        <Advantages />
        <Testimonials />
        <Faq />
        <Footer />
      </section>
    </main>
  );
}

export default App;
