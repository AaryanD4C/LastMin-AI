import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Bot, Send, BookOpen, User, MessageCircle } from "lucide-react";
import Header from "@/components/Header";

const AITutor = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hello! I\'m your AI Tutor. I can help you with personalized tutoring sessions, create study plans, and guide you through complex topics. How can I assist your learning today?'
    }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add user message
    const newUserMessage = { type: 'user', content: message };
    setMessages(prev => [...prev, newUserMessage]);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        type: 'bot',
        content: 'I understand you want to learn about that topic. Let me create a personalized learning path for you. This is a demo response - in the full version, I would provide detailed tutoring based on your uploaded materials.'
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-cosmic pt-16 sm:pt-20">
      <Header />
      
      <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              AI Tutor
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your personal AI tutor for structured learning and guided study sessions
            </p>
          </div>

          {/* Chat Interface */}
          <Card className="bg-card/95 backdrop-blur-md border-2 border-white/10 shadow-2xl shadow-primary/25">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Bot className="h-5 w-5" />
                AI Tutor Session
                <span className="ml-auto text-sm bg-green-500 text-white px-2 py-1 rounded-full">
                  Active
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Chat Messages */}
              <div className="bg-gray-900/50 rounded-lg p-4 mb-6 max-h-96 overflow-y-auto">
                {messages.map((msg, index) => (
                  <div key={index} className={`flex gap-3 mb-4 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {msg.type === 'bot' && (
                      <div className="bg-purple-600 p-2 rounded-full">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                    )}
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      msg.type === 'user' 
                        ? 'bg-purple-600 text-white' 
                        : 'bg-gray-700 text-white'
                    }`}>
                      {msg.content}
                    </div>
                    {msg.type === 'user' && (
                      <div className="bg-blue-600 p-2 rounded-full">
                        <User className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask your AI tutor for help..."
                    className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 pr-12 h-12"
                  />
                </div>
                <Button
                  onClick={handleSendMessage}
                  disabled={!message.trim()}
                  className="bg-purple-600 hover:bg-purple-700 text-white h-12 px-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Tutoring Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="bg-card/95 backdrop-blur-md border-2 border-white/10 text-center">
              <CardContent className="pt-6">
                <BookOpen className="h-12 w-12 text-blue-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Study Plans</h3>
                <p className="text-gray-400 text-sm">
                  Personalized learning paths based on your goals
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/95 backdrop-blur-md border-2 border-white/10 text-center">
              <CardContent className="pt-6">
                <MessageCircle className="h-12 w-12 text-green-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Interactive Sessions</h3>
                <p className="text-gray-400 text-sm">
                  Real-time Q&A and guided problem solving
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/95 backdrop-blur-md border-2 border-white/10 text-center">
              <CardContent className="pt-6">
                <Bot className="h-12 w-12 text-purple-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">AI Guidance</h3>
                <p className="text-gray-400 text-sm">
                  Adaptive tutoring that adjusts to your pace
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AITutor;
