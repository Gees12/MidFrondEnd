import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
