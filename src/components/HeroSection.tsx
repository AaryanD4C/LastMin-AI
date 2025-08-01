import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Brain, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  const handleStartStudying = () => {
    navigate('/signup');
  };

  const handleSeeHowItWorks = () => {
    navigate('/signup');
  };

  return (
    <section className="bg-black h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 h-full flex items-center">
        <div className="max-w-5xl mx-auto text-center w-full -mt-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-900/30 text-purple-300 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8 border border-purple-800/30">
            <Zap className="h-3 w-3 sm:h-4 sm:w-4" />
            AI-Powered Study Revolution
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-2">
            Last-Minute Study,
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent block">
              Maximum Results
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Upload your syllabus and get AI-generated notes, personalized quizzes, and instant doubt solving. 
            Perfect for students who need to maximize their study efficiency.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center mb-6 sm:mb-8 px-4">
            <Button variant="hero" size="sm" className="w-full sm:w-auto min-w-40 bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2" onClick={handleStartStudying}>
              Start Studying Now
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="w-full sm:w-auto min-w-40 border-2 border-gray-600 bg-gray-900/50 hover:bg-gray-800/50 text-gray-200 text-sm px-4 py-2" onClick={handleSeeHowItWorks}>
              See How It Works
            </Button>
          </div>

          {/* Feature Icons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 px-4">
            <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-700/60 hover:bg-gray-900/80 transition-all duration-300 shadow-lg text-center">
              <div className="bg-purple-900/50 p-2 rounded-lg w-fit mx-auto mb-2">
                <FileText className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
              </div>
              <h3 className="font-semibold text-white mb-1 text-xs sm:text-sm">Upload & Generate</h3>
              <p className="text-gray-400 text-xs">
                Upload any syllabus format and get instant AI-generated study notes
              </p>
            </div>

            <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-700/60 hover:bg-gray-900/80 transition-all duration-300 shadow-lg text-center">
              <div className="bg-blue-900/50 p-2 rounded-lg w-fit mx-auto mb-2">
                <Brain className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
              </div>
              <h3 className="font-semibold text-white mb-1 text-xs sm:text-sm">Smart Quizzing</h3>
              <p className="text-gray-400 text-xs">
                Personalized MCQs and flashcards based on your study material
              </p>
            </div>

            <div className="bg-gray-900/60 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-700/60 hover:bg-gray-900/80 transition-all duration-300 shadow-lg text-center">
              <div className="bg-yellow-900/50 p-2 rounded-lg w-fit mx-auto mb-2">
                <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400" />
              </div>
              <h3 className="font-semibold text-white mb-1 text-xs sm:text-sm">Instant Doubts</h3>
              <p className="text-gray-400 text-xs">
                AI chatbot ready to solve your doubts 24/7 with contextual answers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;