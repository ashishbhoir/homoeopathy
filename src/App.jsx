import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MeetDoctor from "./components/MeetDoctor";
import Conditions from "./components/Conditions";
import Approach from "./components/Approach";
import ClinicalOutcomes from "./components/ClinicalOutcomes";
import GoogleReviews from "./components/GoogleReviews";
import Testimonials from "./components/Testimonials";
import CarePlans from "./components/CarePlans";
import ClinicalHighlights from "./components/ClinicalHighlights";
import VisitUs from "./components/VisitUs";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MeetDoctor />
        <Conditions />
        <Approach />
        <ClinicalOutcomes />
        <GoogleReviews />
        <Testimonials />
        <CarePlans />
        <ClinicalHighlights />
        <VisitUs />
      </main>
      <Footer />
    </>
  );
}

export default App;
