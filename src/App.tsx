import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import LanguageProvider from "@/i18n/LanguageProvider";
import Labs from "./pages/Labs.tsx";
import Ios from "./pages/Ios.tsx";
import NotFound from "./pages/NotFound.tsx";
import Pricing from "./pages/Pricing.tsx";
import Privacy from "./pages/Privacy.tsx";
import PrivacyFr from "./pages/PrivacyFr.tsx";
import Refund from "./pages/Refund.tsx";
import Terms from "./pages/Terms.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Home — B2B offering for clinical laboratories */}
            <Route path="/" element={<Labs />} />
            {/* Kept so "/labs" stays usable in outreach material */}
            <Route path="/labs" element={<Navigate to="/" replace />} />
            {/* Consumer iOS app landing */}
            <Route path="/ios" element={<Ios />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/privacy/fr" element={<PrivacyFr />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/pricing" element={<Pricing />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
