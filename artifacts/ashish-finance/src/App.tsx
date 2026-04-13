import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import FloatingWidgets from "@/components/layout/floating-widgets";

import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import License from "@/pages/license";
import Contact from "@/pages/contact";
import PrivacyPolicy from "@/pages/privacy";
import Terms from "@/pages/terms";

const queryClient = new QueryClient();

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/license" component={License} />
          <Route path="/contact" component={Contact} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
          <Route path="/terms" component={Terms} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <FloatingWidgets />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
