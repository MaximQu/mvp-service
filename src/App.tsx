import {
  AboutUs,
  Advantages,
  ContactInfo,
  ContactUs,
  Footer,
  Header,
  Hero,
  Offers,
} from "./components";

function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <main>
        <Hero />
        <Offers />
        <ContactInfo />
        <AboutUs />
        <Advantages />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
