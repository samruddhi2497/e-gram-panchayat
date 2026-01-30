// import { BrowserRouter } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/AppFooter";
// import AppRoutes from "./routes/AppRoutes";


// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />      
//       <AppRoutes />
//       <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter, useLocation } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/AppFooter";

function LayoutWrapper() {
  const location = useLocation();

  // Show only on Welcome page
  const showHeaderFooter = location.pathname === "/";

  return (
    <>
      {showHeaderFooter && <Navbar />}
      
      <AppRoutes />

      {showHeaderFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <LayoutWrapper />
    </BrowserRouter>
  );
}

export default App;
