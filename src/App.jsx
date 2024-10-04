import AdvancedStatistics from "./components/AdvancedStatistics";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import ShortLink from "./components/ShortLink";
import { ShortlyProvider } from "./contexts/ShortlyProvider";

function App() {
  return (
    <div>
      <ShortlyProvider>
      <Navigation />
      <Hero />
      <ShortLink />
      </ShortlyProvider>
      <AdvancedStatistics />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
