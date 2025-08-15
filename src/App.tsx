import {
  AboutUs,
  Advantages,
  ContactInfo,
  ContactUs,
  Footer,
  Header,
  Hero,
  Offers,
  ServiceArea,
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
        <ServiceArea />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
