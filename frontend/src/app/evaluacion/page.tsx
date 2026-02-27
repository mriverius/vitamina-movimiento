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
    question: "¿Tienes alguna lesión o limitación física?",
    options: [
      "No tengo limitaciones",
      "Problemas de espalda",
      "Problemas de rodillas/articulaciones",
      "Otras lesiones o condiciones médicas"
    ]
  },
  {
    id: 4,
    question: "¿Cuánto tiempo puedes dedicar al ejercicio por semana?",
    options: [
      "1-2 horas por semana",
      "3-4 horas por semana",
      "5-6 horas por semana",
      "Más de 6 horas por semana"
    ]
  },
  {
    id: 5,
    question: "¿Qué tipo de ambiente prefieres para entrenar?",
    options: [
      "Sesiones individuales personalizadas",
      "Clases grupales pequeñas",
      "Actividades relajantes como yoga",
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
    
    // Lógica de recomendación basada en respuestas
    const activityLevel = answers[0];
    const goal = answers[1];
    const limitations = answers[2];
    const timeAvailable = answers[3];
    const environment = answers[4];

    // Entrenamiento Personal
    if (goal === 0 || goal === 1 || limitations > 0 || environment === 0) {
      recommendations.push({
        service: "Entrenamiento Personal",
        description: "Sesiones individualizadas perfectas para tus objetivos específicos y cualquier limitación física que puedas tener.",
        price: "Desde $50/sesión",
        icon: "👤"
      });
    }

    // Yoga & Pilates
    if (goal === 2 || environment === 2 || activityLevel <= 1 || limitations === 1) {
      recommendations.push({
        service: "Yoga & Pilates",
        description: "Ideal para mejorar flexibilidad, reducir estrés y fortalecer el core de manera suave y efectiva.",
        price: "Desde $35/clase",
        icon: "🧘‍♀️"
      });
    }

    // Nutrición Deportiva
    if (goal === 0 || goal === 1 || activityLevel >= 2) {
      recommendations.push({
        service: "Nutrición Deportiva",
        description: "Plan nutricional personalizado para optimizar tus resultados y alcanzar tus objetivos más rápido.",
        price: "Desde $80/plan",
        icon: "🥗"
      });
    }

    // Si no hay recomendaciones específicas, agregar evaluación completa
    if (recommendations.length === 0) {
      recommendations.push({
        service: "Evaluación Completa",
        description: "Análisis detallado de tu condición física actual para crear un plan completamente personalizado.",
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
      <div className="min-h-screen bg-white">
        <Header />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              ¡Evaluación Completada!
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Basado en tus respuestas, estos son los servicios que recomendamos para ti:
            </p>
          </div>

          <div className="space-y-6 mb-12">
            {recommendations.map((rec, index) => (
              <div key={index} className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 border border-green-100">
                <div className="flex items-start">
                  <div className="text-4xl mr-6">{rec.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {rec.service}
                    </h3>
                    <p className="text-lg text-gray-600 mb-4">
                      {rec.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-semibold text-green-600">
                        {rec.price}
                      </span>
                      <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                        Más Información
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-medium text-blue-900 mb-2">
                  Próximos Pasos
                </h3>
                <p className="text-blue-800">
                  Stephanie revisará tus respuestas y se pondrá en contacto contigo para programar una consulta gratuita 
                  donde podrán discutir en detalle el plan perfecto para tus necesidades.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/confirmacion" 
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Agendar Consulta Gratuita
              </Link>
              <button 
                onClick={resetTest}
                className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors"
              >
                Repetir Evaluación
              </button>
            </div>
            
            <Link 
              href="/" 
              className="text-gray-600 hover:text-green-600 transition-colors inline-block"
            >
              Volver al Inicio
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Evaluación Corporal Personalizada
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Responde estas preguntas para descubrir qué servicios de Vitamina Movimiento son perfectos para ti
          </p>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
            <div 
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          
          <p className="text-sm text-gray-500">
            Pregunta {currentQuestion + 1} de {questions.length}
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">
            {questions[currentQuestion].question}
          </h2>
          
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className="w-full text-left p-6 border-2 border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-all duration-200 group"
              >
                <div className="flex items-center">
                  <div className="w-6 h-6 border-2 border-gray-300 rounded-full mr-4 group-hover:border-green-500 flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <span className="text-lg text-gray-700 group-hover:text-green-700">
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
            className="text-gray-600 hover:text-green-600 transition-colors"
          >
            ← Volver al Inicio
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
