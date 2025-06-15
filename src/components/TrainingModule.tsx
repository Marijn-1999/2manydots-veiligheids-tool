
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { X } from "lucide-react";

interface Question {
  id: number;
  question: string;
  description?: string;
  options: {
    text: string;
    correct: boolean;
  }[];
}

interface TrainingModuleProps {
  onClose: () => void;
}

const TrainingModule = ({ onClose }: TrainingModuleProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [isChecked, setIsChecked] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "Wat moet je doen bij een (mogelijke) datalek?",
      options: [
        { text: "Zelf oplossen en stilhouden", correct: false },
        { text: "Meteen melden bij je security officer", correct: true },
        { text: "Wachten tot iemand anders het meldt", correct: false },
        { text: "De klanten alvast waarschuwen", correct: false }
      ]
    },
    {
      id: 2,
      question: "Wie heeft gelijk?",
      description: "Eén van deze drie collega's heeft het bij het juiste eind. Kies wie een situatie beschrijft die je moet melden als mogelijke datalek.",
      options: [
        { text: "'Ik kreeg per ongeluk een bestand met persoonsgegevens van een andere afdeling. Maar ach, ik heb het gewoon verwijderd, dus geen probleem toch?'", correct: false },
        { text: "'Mijn wachtwoord is verlopen, maar zolang niemand mijn computer gebruikt, is dat geen ramp.'", correct: false },
        { text: "'De printer op kantoor gaf me ineens een vertrouwelijk document van een collega. Ik wist niet wat ik ermee moest, dus ik heb het gewoon op zijn bureau gelegd.'", correct: true }
      ]
    },
    {
      id: 3,
      question: "Wat is GEEN incident dat je moet melden?",
      options: [
        { text: "Een verkeerde e-mail met persoonsgegevens", correct: false },
        { text: "Een vergeten schermvergrendeling", correct: true },
        { text: "Een foutieve factuur zonder persoonsgegevens", correct: false },
        { text: "Een kwijtgeraakte USB-stick", correct: false }
      ]
    },
    {
      id: 4,
      question: "Wat is een voorbeeld van een datalek?",
      options: [
        { text: "Een geprinte lijst met klantgegevens blijft in de trein liggen", correct: true },
        { text: "Je vergeet een vergadering in te plannen", correct: false },
        { text: "Je laptop laadt niet meer op", correct: false },
        { text: "Je ontvangt een phishingmail", correct: false }
      ]
    },
    {
      id: 5,
      question: "Welke van de volgende stellingen is waar?",
      description: "Een medewerker stuurt per ongeluk klantgegevens naar een collega die die informatie niet mag zien. De data blijft intern, maar is toch verkeerd gedeeld.",
      options: [
        { text: "Datalekken moeten alleen worden gemeld aan de klant", correct: false },
        { text: "Ook interne fouten kunnen een datalek veroorzaken", correct: true },
        { text: "Datalekken zijn alleen strafbaar als er opzet in het spel is", correct: false },
        { text: "Interne e-mails met foutieve bijlagen zijn geen datalekken", correct: false }
      ]
    }
  ];

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleAnswerSelect = (value: string) => {
    if (!showResult) {
      setSelectedAnswer(value);
    }
  };

  const handleCheck = () => {
    if (!selectedAnswer) return;

    const selectedIndex = parseInt(selectedAnswer);
    const correct = currentQuestion.options[selectedIndex].correct;
    
    setIsCorrect(correct);
    setIsChecked(true);
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer("");
      setIsChecked(false);
      setShowResult(false);
    } else {
      // Training completed
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-100 z-50 flex flex-col">
      {/* Header with progress and close button */}
      <div className="flex items-center justify-between p-6 bg-white">
        <div className="text-pink-500 text-2xl font-bold">2manydots</div>
        <div className="flex items-center gap-4 flex-1 max-w-md mx-auto">
          <Progress value={progress} className="flex-1" />
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="w-24" /> {/* Spacer for centering */}
      </div>

      {/* Question content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-4xl w-full">
          {/* Question card */}
          <div className="bg-purple-800 text-white rounded-lg p-6 mb-8 text-center">
            <h2 className="text-xl font-semibold text-pink-400 mb-2">
              {currentQuestion.question}
            </h2>
            {currentQuestion.description && (
              <p className="text-gray-200 text-sm">
                {currentQuestion.description}
              </p>
            )}
          </div>

          {/* Answer options */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <RadioGroup 
              value={selectedAnswer} 
              onValueChange={handleAnswerSelect}
              className="contents"
            >
              {currentQuestion.options.map((option, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-lg p-4 shadow-sm border cursor-pointer transition-colors ${
                    showResult
                      ? option.correct
                        ? "border-green-500 bg-green-50"
                        : selectedAnswer === index.toString() && !option.correct
                        ? "border-red-500 bg-red-50"
                        : "border-gray-200"
                      : selectedAnswer === index.toString()
                      ? "border-pink-500 bg-pink-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <RadioGroupItem 
                      value={index.toString()} 
                      id={`option-${index}`}
                      className={
                        showResult
                          ? option.correct
                            ? "border-green-500 text-green-500"
                            : selectedAnswer === index.toString() && !option.correct
                            ? "border-red-500 text-red-500"
                            : ""
                          : ""
                      }
                      disabled={showResult}
                    />
                    <Label 
                      htmlFor={`option-${index}`} 
                      className="flex-1 text-sm leading-relaxed cursor-pointer"
                    >
                      {option.text}
                    </Label>
                  </div>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Control button */}
          <div className="text-center">
            {!isChecked ? (
              <Button
                onClick={handleCheck}
                disabled={!selectedAnswer}
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-2 rounded-lg font-medium"
              >
                Controleer
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-2 rounded-lg font-medium"
              >
                {currentQuestionIndex < questions.length - 1 ? "Verder" : "Afronden"}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Decorative curved line */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        <path
          d="M 0 400 Q 200 300 400 400 T 800 400 T 1200 400"
          stroke="#e91e63"
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />
      </svg>
    </div>
  );
};

export default TrainingModule;
