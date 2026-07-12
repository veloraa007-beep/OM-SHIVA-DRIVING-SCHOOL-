"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, ArrowRight, RotateCcw, Trophy } from "lucide-react";
import { trafficSigns, TrafficSign } from "@/data/traffic-signs";
import * as Icons from "lucide-react";

const QUIZ_LENGTH = 5;

export function PracticeQuiz() {
  const [quizSigns, setQuizSigns] = useState<TrafficSign[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [options, setOptions] = useState<string[]>([]);
  const [hasStarted, setHasStarted] = useState(false);

  // Initialize a new quiz session
  const startQuiz = () => {
    // Shuffle and pick top N
    const shuffled = [...trafficSigns].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, QUIZ_LENGTH);
    setQuizSigns(selected);
    setCurrentIndex(0);
    setScore(0);
    setIsFinished(false);
    setSelectedAnswer(null);
    setHasStarted(true);
    generateOptions(selected[0]);
  };

  // Generate 4 options for the current sign
  const generateOptions = (correctSign: TrafficSign) => {
    const wrongOptions = trafficSigns
      .filter(s => s.id !== correctSign.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map(s => s.name);
    
    const allOptions = [...wrongOptions, correctSign.name].sort(() => 0.5 - Math.random());
    setOptions(allOptions);
  };

  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return; // Prevent multiple clicks
    
    setSelectedAnswer(answer);
    if (answer === quizSigns[currentIndex].name) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < QUIZ_LENGTH - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setSelectedAnswer(null);
      generateOptions(quizSigns[nextIndex]);
    } else {
      setIsFinished(true);
    }
  };

  // Initial State
  if (!hasStarted) {
    return (
      <div className="bg-primary rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/40 via-primary to-primary" />
        <div className="relative z-10">
          <Trophy className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Learner's Test Practice Quiz</h2>
          <p className="text-blue-100 max-w-xl mx-auto mb-8 text-lg">
            Test your knowledge of mandatory, warning, and informatory signs. Pass the official RTO written test with confidence!
          </p>
          <button 
            onClick={startQuiz}
            className="bg-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent/90 transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            Start Quiz (5 Questions)
          </button>
        </div>
      </div>
    );
  }

  // Finished State
  if (isFinished) {
    const percentage = (score / QUIZ_LENGTH) * 100;
    const isPassing = percentage >= 60; // Usually 60% is passing in RTO

    return (
      <div className="bg-white rounded-[2.5rem] p-12 text-center shadow-xl border border-slate-100">
        <div className="mb-8">
          {isPassing ? (
            <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12" />
            </div>
          ) : (
            <div className="w-24 h-24 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <XCircle className="w-12 h-12" />
            </div>
          )}
          <h2 className="text-3xl font-heading font-bold text-primary mb-2">
            {isPassing ? "Great Job! You Passed." : "Keep Practicing!"}
          </h2>
          <p className="text-slate-500 text-lg">You scored <span className="font-bold text-primary">{score} out of {QUIZ_LENGTH}</span> ({percentage}%)</p>
        </div>

        <button 
          onClick={startQuiz}
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors"
        >
          <RotateCcw className="w-5 h-5" /> Retake Quiz
        </button>
      </div>
    );
  }

  const currentSign = quizSigns[currentIndex];
  // @ts-ignore
  const IconComponent = Icons[currentSign.iconName] || Icons.AlertCircle;

  return (
    <div className="bg-white rounded-[2.5rem] p-6 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden">
      {/* Progress Bar */}
      <div className="absolute top-0 left-0 w-full h-2 bg-slate-100">
        <div 
          className="h-full bg-accent transition-all duration-500 ease-out" 
          style={{ width: `${((currentIndex) / QUIZ_LENGTH) * 100}%` }}
        />
      </div>

      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Visual / Image Side */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center">
          <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-8 w-full text-center">
            Question {currentIndex + 1} of {QUIZ_LENGTH}
          </p>
          <div className="w-48 h-48 bg-slate-50 rounded-3xl border-2 border-slate-200 flex items-center justify-center shadow-inner mb-6 relative">
            <IconComponent className="w-20 h-20 text-slate-800" strokeWidth={2} />
          </div>
          <p className="text-slate-500 font-medium">What does this sign mean?</p>
        </div>

        {/* Options Side */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <AnimatePresence mode="popLayout">
            {options.map((option, idx) => {
              const isCorrect = option === currentSign.name;
              const isSelected = selectedAnswer === option;
              
              let stateClasses = "bg-white border-slate-200 hover:border-accent hover:bg-blue-50 text-slate-700";
              
              if (selectedAnswer) {
                if (isCorrect) {
                  stateClasses = "bg-green-50 border-green-500 text-green-700 font-bold";
                } else if (isSelected) {
                  stateClasses = "bg-red-50 border-red-500 text-red-700";
                } else {
                  stateClasses = "bg-slate-50 border-slate-100 text-slate-400 opacity-50";
                }
              }

              return (
                <motion.button
                  key={option}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  disabled={!!selectedAnswer}
                  onClick={() => handleAnswer(option)}
                  className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 flex items-center justify-between group ${stateClasses}`}
                >
                  <span className="text-lg">{option}</span>
                  {selectedAnswer && isCorrect && <CheckCircle2 className="w-6 h-6 text-green-500" />}
                  {selectedAnswer && isSelected && !isCorrect && <XCircle className="w-6 h-6 text-red-500" />}
                </motion.button>
              );
            })}
          </AnimatePresence>

          {selectedAnswer && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 flex justify-end"
            >
              <button 
                onClick={handleNext}
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-primary/90 transition-colors shadow-lg"
              >
                {currentIndex < QUIZ_LENGTH - 1 ? "Next Question" : "View Results"} <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
