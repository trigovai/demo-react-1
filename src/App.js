import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Services from "./components/Services/Services";
import Destinations from "./components/Destinations/Destinations";
import Booking from "./components/Booking/Booking";
import Testimonials from "./components/Testimonials/Testimonials";
import Partners from "./components/Partners/Partners";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <>
        <Navbar />
        <Header />
        <Services />
        <Destinations />
        <Booking />
        <Testimonials />
        <Partners />
        <Subscribe />
        <Footer />
      </>
  );
}

export default App;
