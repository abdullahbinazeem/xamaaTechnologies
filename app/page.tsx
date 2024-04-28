import Hero from "./(developments)/developments/_pages/hero";
import Work from "./(developments)/developments/_pages/work";
import Solutions from "./(developments)/developments/_pages/solutions";
import Customer from "./(developments)/developments/_pages/customers";
import Contact from "./(developments)/developments/_pages/contact";
import Footer from "./(developments)/developments/_pages/footer";
import Navbar from "./(developments)/developments/_components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="overflow-hidden">
        <Hero />
        <div className="bg-[#F5F5F5]">
          {/* <Companies /> */}
          <Work />
          <Solutions />
          <Customer />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
