import Hero from "./_pages/hero";
import Work from "./_pages/work";
import Solutions from "./_pages/solutions";
import Customer from "./_pages/customers";
import Contact from "./_pages/contact";
import Footer from "./_pages/footer";
import Navbar from "./_components/navbar";

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
