import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Loader } from "@/components/Loader";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Syllabus from "./pages/Syllabus";
import AskAI from "./pages/AskAI";
import Quiz from "./pages/Quiz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true); // Re-enabled loading screen
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // This effect simulates a loading process like the example
    if (!isLoading) return;

    let animationFrameId;
    const startTime = Date.now();
    const duration = 3500; // 3.5 seconds for the character-by-character animation

    const updateProgress = () => {
      const elapsedTime = Date.now() - startTime;
      const newProgress = Math.min(Math.round((elapsedTime / duration) * 100), 100);
      setProgress(newProgress);

      if (elapsedTime < duration) {
        animationFrameId = requestAnimationFrame(updateProgress);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isLoading]);

  const handleLoadingFinished = () => {
    setIsLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <style>{`body { background: #0a0a0a; }`}</style>
          <AnimatePresence mode="wait">
            {isLoading ? (
              <Loader key="loader" progress={progress} onFinished={handleLoadingFinished} />
            ) : (
              <div key="content">
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/syllabus" element={<Syllabus />} />
                    <Route path="/ask-ai" element={<AskAI />} />
                    <Route path="/quiz" element={<Quiz />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </BrowserRouter>
              </div>
            )}
          </AnimatePresence>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
