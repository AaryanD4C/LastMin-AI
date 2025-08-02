import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Clock, Trophy, RotateCcw, Play } from "lucide-react";
import Header from "@/components/Header";

const Quiz = () => {
  const quizModes = [
    {
      id: 'quick',
      title: 'Quick Quiz',
      description: '5 questions • 5 minutes',
      icon: Target,
      buttonText: 'Start Now',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'practice',
      title: 'Practice Mode',
      description: '15 questions • No time limit',
      icon: Clock,
      buttonText: 'Practice',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'challenge',
      title: 'Challenge Mode',
      description: '30 questions • 20 minutes',
      icon: Trophy,
      buttonText: 'Challenge',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const handleStartQuiz = (mode: string) => {
    // Here you would typically navigate to the actual quiz interface
    console.log(`Starting ${mode} mode`);
  };

  const handleStartFlashcards = () => {
    // Navigate to flashcard mode
    console.log('Starting flashcards');
  };

  return (
    <div className="min-h-screen bg-gradient-cosmic pt-16 sm:pt-20">
      <Header />
      
      <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Quiz & Revision Mode
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Test your knowledge with AI-generated questions based on your syllabus
            </p>
          </div>

          {/* Quiz Modes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {quizModes.map((mode) => {
              const Icon = mode.icon;
              return (
                <motion.div
                  key={mode.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * quizModes.indexOf(mode) }}
                >
                  <Card className="bg-card/95 backdrop-blur-md border-2 border-white/10 shadow-2xl shadow-primary/25 hover:border-purple-500/50 transition-all duration-300 h-full">
                    <CardContent className="p-8 text-center h-full flex flex-col">
                      <div className={`bg-gradient-to-r ${mode.color} p-4 rounded-2xl mb-6 mx-auto w-fit`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {mode.title}
                      </h3>
                      
                      <p className="text-gray-300 mb-6 flex-1">
                        {mode.description}
                      </p>
                      
                      <Button
                        onClick={() => handleStartQuiz(mode.id)}
                        className={`w-full bg-gradient-to-r ${mode.color} hover:opacity-90 shadow-lg shadow-primary/30 h-12 rounded-lg font-semibold text-white flex items-center justify-center gap-2`}
                      >
                        <Play className="h-4 w-4" />
                        {mode.buttonText}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Flashcard Review Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-card/95 backdrop-blur-md border-2 border-white/10 shadow-2xl shadow-primary/25">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-3 rounded-xl">
                    <RotateCcw className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-white mb-2">
                      Flashcard Review
                    </h2>
                    <p className="text-gray-300">
                      Review key concepts with interactive flashcards
                    </p>
                  </div>
                  <Button
                    onClick={handleStartFlashcards}
                    variant="outline"
                    className="border-2 border-orange-500 bg-orange-500/10 hover:bg-orange-500/20 text-orange-300 hover:text-orange-200 backdrop-blur-sm px-8 py-3 rounded-lg font-semibold"
                  >
                    Start Flashcards
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-12"
          >
            <div className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50">
              <h3 className="text-lg font-semibold text-white mb-2">
                🎯 Personalized Learning Experience
              </h3>
              <p className="text-gray-300">
                All questions are generated based on your uploaded syllabus content. 
                The more you practice, the better our AI understands your learning needs.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Quiz;
