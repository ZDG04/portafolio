import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Education from "@/components/Education"
import Experience from "@/components/Experience";
import Hobbies from "@/components/Hobbies";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-5">
        <Hero />
        <Projects />
        <About />
        <Education />
        <Experience />
        <Certificates />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
