'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

interface Question {
  id: number;
  question: string;
  options: string[];
}

interface ServiceRecommendation {
  service: string;
  description: string;
  price: string;
  icon: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "¿Cuál es tu nivel actual de actividad física?",
    options: [
      "Sedentario - Poco o nada de ejercicio",
      "Ligero - Ejercicio ligero 1-3 días por semana",
      "Moderado - Ejercicio moderado 3-5 días por semana",
      "Intenso - Ejercicio intenso 6-7 días por semana"
    ]
  },
  {
    id: 2,
    question: "¿Cuál es tu objetivo principal?",
    options: [
      "Perder peso",
      "Ganar masa muscular",
      "Mejorar flexibilidad y bienestar mental",
      "Rehabilitación y recuperación"
    ]
  },
  {
    id: 3,
    question: "¿Tenés alguna lesión o limitación física?",
    options: [
      "No tengo limitaciones",
      "Problemas de espalda",
      "Problemas de rodillas/articulaciones",
      "Otras lesiones o condiciones médicas"
    ]
  },
  {
    id: 4,
    question: "¿Cuánto tiempo podés dedicarle al movimiento por semana?",
    options: [
      "1-2 horas por semana",
      "3-4 horas por semana",
      "5-6 horas por semana",
      "Más de 6 horas por semana"
    ]
  },
  {
    id: 5,
    question: "¿Qué ambiente preferís para entrenar?",
    options: [
      "Sesiones individuales personalizadas",
      "Clases grupales pequeñas",
      "Actividades relajantes como movilidad y yoga",
      "Combinación de diferentes modalidades"
    ]
  }
];

export default function EvaluacionPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers, answerIndex];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const getRecommendations = (): ServiceRecommendation[] => {
    const recommendations: ServiceRecommendation[] = [];
    const activityLevel = answers[0];
    const goal = answers[1];
    const limitations = answers[2];
    const environment = answers[4];

    if (goal === 0 || goal === 1 || limitations > 0 || environment === 0) {
      recommendations.push({
        service: "Clase Personalizada 1:1",
        description: "Sesiones individualizadas para tus objetivos y cualquier limitación que tengas.",
        price: "Consultar",
        icon: "👤"
      });
    }

    if (goal === 2 || environment === 2 || activityLevel <= 1 || limitations === 1) {
      recommendations.push({
        service: "Movilidad & Postura",
        description: "Ideal para mejorar flexibilidad, liberar tensión y fortalecer el core de forma suave.",
        price: "Consultar",
        icon: "🧘‍♀️"
      });
    }

    if (goal === 0 || goal === 1 || activityLevel >= 2) {
      recommendations.push({
        service: "Plan de Longevidad Activa",
        description: "Mapeo postural + plan de hábitos diarios para sostener movimiento de por vida.",
        price: "Consultar",
        icon: "🌅"
      });
    }

    if (recommendations.length === 0) {
      recommendations.push({
        service: "Evaluación Inicial",
        description: "Análisis detallado de tu cuerpo para diseñar un plan 100% personalizado.",
        price: "Gratuita",
        icon: "📋"
      });
    }

    return recommendations;
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  if (showResults) {
    const recommendations = getRecommendations();

    return (
      <div className="min-h-screen bg-[#FFF8F0]">
        <Header />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-br from-amber-300 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#3D2F26] mb-4">
              ¡Evaluación completada!
            </h1>

            <p className="text-xl text-[#6B5545] mb-8 max-w-2xl mx-auto">
              Basado en tus respuestas, estos son los caminos que recomiendo para vos:
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {recommendations.map((rec, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 border border-amber-200/70 shadow-md hover:shadow-xl transition-all">
                <div className="flex items-start">
                  <div className="text-4xl mr-6">{rec.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#3D2F26] mb-3">
                      {rec.service}
                    </h3>
                    <p className="text-[#6B5545] mb-4 leading-relaxed">
                      {rec.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-semibold text-orange-700">
                        {rec.price}
                      </span>
                      <a
                        href={`https://wa.me/50686094225?text=${encodeURIComponent(`Hola Stephanie, hice la evaluación y me interesa ${rec.service}.`)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:from-orange-600 hover:to-amber-600 transition-all shadow-md"
                      >
                        Más info
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-6 mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-bold text-[#3D2F26] mb-2">
                  Próximos pasos
                </h3>
                <p className="text-[#6B5545] leading-relaxed">
                  Stephanie revisa tus respuestas y se pone en contacto para coordinar una consulta gratuita
                  donde armamos el plan ideal para vos.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/confirmacion"
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-lg"
              >
                Agendar consulta gratuita
              </Link>
              <button
                onClick={resetTest}
                className="border-2 border-[#3D2F26] text-[#3D2F26] px-8 py-3 rounded-full font-semibold hover:bg-[#3D2F26] hover:text-[#FFF8F0] transition-colors"
              >
                Repetir evaluación
              </button>
            </div>

            <Link
              href="/"
              className="text-[#6B5545] hover:text-orange-600 transition-colors inline-block"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3D2F26] mb-4">
            Evaluación <span className="text-sunrise-gradient">personalizada</span>
          </h1>
          <p className="text-xl text-[#6B5545] mb-8 max-w-2xl mx-auto">
            Respondé estas preguntas para descubrir qué formato de Vitamina Movimiento te sirve más.
          </p>

          {/* Progress Bar */}
          <div className="w-full bg-amber-100 rounded-full h-2 mb-4 overflow-hidden">
            <div
              className="bg-gradient-to-r from-orange-500 to-amber-400 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>

          <p className="text-sm text-[#6B5545]">
            Pregunta {currentQuestion + 1} de {questions.length}
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-lg border border-amber-200/60 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-[#3D2F26] mb-8">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full text-left p-5 border-2 border-amber-200/70 rounded-2xl hover:border-orange-400 hover:bg-amber-50/60 transition-all duration-200 group"
              >
                <div className="flex items-center">
                  <div className="w-6 h-6 border-2 border-amber-300 rounded-full mr-4 group-hover:border-orange-500 flex items-center justify-center transition-colors">
                    <div className="w-3 h-3 bg-gradient-to-br from-orange-500 to-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-base md:text-lg text-[#3D2F26] group-hover:text-orange-700 transition-colors">
                    {option}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="text-[#6B5545] hover:text-orange-600 transition-colors"
          >
            ← Volver al inicio
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
