import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Work from "./pages/Work";
import Services from "./pages/Services";
import Process from "./pages/Process";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WebsiteDevelopment from "./pages/WebsiteDevelopment";
import UIUXDesign from "./pages/UIUXDesign";
import Branding from "./pages/Branding";
import CustomWebApps from "./pages/CustomWebApps";
import MaintenanceSupport from "./pages/MaintenanceSupport";
import Founders from "./pages/Founders";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/work" element={<Work />} />
        <Route path="/services" element={<Services />} />
        <Route path="/process" element={<Process />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/website-development" element={<WebsiteDevelopment />} />
        <Route path="/ui-ux-design" element={<UIUXDesign />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/custom-web-apps" element={<CustomWebApps />} />
        <Route path="/maintenance-support" element={<MaintenanceSupport />} />
        <Route path="/founders" element={<Founders />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnimatedRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
