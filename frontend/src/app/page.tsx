'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function WhatsAppButton() {
  const whatsappNumber = "+50686094225";
  const whatsappMessage = "Hola Stephanie, me interesa agendar una clase contigo. ¿Cuándo tienes disponibilidad?";
  const whatsappUrl = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-xl flex items-center space-x-3 w-fit"
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
      </svg>
      <span>Contactar por WhatsApp</span>
    </a>
  );
}

function FAQItem({ question, answer, icon, isLast = false }: { question: string; answer: string | React.ReactNode; icon: React.ReactNode; isLast?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-xl border-2 border-green-200 hover:border-green-400 transition-all">
      <button 
        className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 rounded-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-green-900 flex items-center">
          <span className="w-5 h-5 mr-3 text-lime-600">{icon}</span>
          {question}
        </h3>
        <svg 
          className={`w-5 h-5 text-green-700 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          {typeof answer === 'string' ? (
            <p className="text-gray-900">{answer}</p>
          ) : (
            <div className="text-gray-900">{answer}</div>
          )}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-lime-50 to-emerald-50 py-20 lg:py-32 overflow-hidden">
        {/* Decorative background logos and icons */}
        <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
          <Image
            src="/logo3.jpeg"
            alt=""
            width={200}
            height={200}
            className="absolute top-10 -left-10 rotate-12 blur-sm"
          />
          {/* Stretching icon */}
          <svg className="absolute top-1/4 left-1/3 w-20 h-20 text-lime-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/>
          </svg>
          {/* Heart rate / health icon */}
          <svg className="absolute top-20 right-1/4 w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          {/* Body posture icon */}
          <svg className="absolute top-1/2 left-20 w-14 h-14 text-lime-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
          </svg>
          <Image
            src="/logo3.jpeg"
            alt=""
            width={150}
            height={150}
            className="absolute bottom-20 right-10 -rotate-12 blur-sm"
          />
          {/* Yoga/flexibility icon */}
          <svg className="absolute bottom-1/3 right-1/3 w-18 h-18 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 4c0-1.11-.89-2-2-2s-2 .89-2 2 .89 2 2 2 2-.89 2-2zm-1 8v6h-2v-6l-3-3 .62-2.73L11 9v2h2V9l2.38-2.73L16 9l-3 3z"/>
          </svg>
          {/* Joint/knee icon */}
          <svg className="absolute bottom-10 left-1/3 w-16 h-16 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <Image
            src="/logo3.jpeg"
            alt=""
            width={100}
            height={100}
            className="absolute top-1/3 right-1/4 rotate-45 blur-sm"
          />
          {/* Movement/activity icon */}
          <svg className="absolute top-1/3 left-1/4 w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7z"/>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Animated badge */}
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-200 shadow-sm animate-fade-in">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-800">Coach Certificada de Movilidad</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block text-green-900 mb-2 animate-slide-up">Recupera tu</span>
                <span className="block text-green-900 mb-2 animate-slide-up animation-delay-100">libertad de</span>
                <span className="block bg-gradient-to-r from-green-600 via-lime-500 to-emerald-600 bg-clip-text text-transparent animate-gradient-x animation-delay-200">Movimiento</span>
              </h1>
              
              <p className="text-xl text-green-800 leading-relaxed animate-fade-in animation-delay-300">
                <span className="font-semibold text-green-900">Coach de movilidad</span> especializada en longevidad. 
                Aprende hábitos posturales que te permitan seguir haciendo lo que amas
                <span className="relative inline-block">
                  <span className="relative z-10 font-semibold text-lime-700 ml-2">sin lesiones</span>
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-lime-200/60 -z-0"></span>
                </span>.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-400">
                <WhatsAppButton />
              </div>
            </div>
            
            <div className="relative animate-fade-in animation-delay-500">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-lime-300/20 to-green-300/20 rounded-full blur-3xl animate-pulse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-gradient-to-tr from-emerald-300/20 to-green-300/20 rounded-full blur-3xl animate-pulse-slow animation-delay-1000"></div>
              
              <div className="relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 backdrop-blur-sm transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/WhatsApp Image 2026-03-05 at 10.41.25 PM (2).jpeg"
                    alt="Stephanie Madriz - Coach de Movilidad"
                    width={500}
                    height={600}
                    className="object-cover w-full h-[500px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 via-transparent to-transparent"></div>
                  
                  {/* Floating badge */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-lime-600 rounded-full flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-green-900">Stephanie Madriz</p>
                        <p className="text-xs text-green-700">Especialista en Longevidad</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24 bg-white overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-lime-50/30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-lime-200/20 to-green-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-200/20 to-green-200/20 rounded-full blur-3xl"></div>
        
        {/* Small mobility icons */}
        <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
          {/* Spine/back icon */}
          <svg className="absolute top-20 right-1/4 w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm1 18h-2v-5h2v5zm-2-7v-4l-1-1.5v2.5H8v-3.5l3-4.5c.4-.6 1-.5 1.5-.5s1.1.1 1.5.5l3 4.5V11h-2V8.5l-1 1.5v4h-2z"/>
          </svg>
          {/* Dumbbell/strength icon */}
          <svg className="absolute top-1/3 left-10 w-14 h-14 text-lime-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.57 14.86L22 13.43 20.57 12 17 15.57 8.43 7 12 3.43 10.57 2 9.14 3.43 7.71 2 5.57 4.14 4.14 2.71 2.71 4.14l1.43 1.43L2 7.71l1.43 1.43L2 10.57 3.43 12 7 8.43 15.57 17 12 20.57 13.43 22l1.43-1.43L16.29 22l2.14-2.14 1.43 1.43 1.43-1.43-1.43-1.43L22 16.29z"/>
          </svg>
          {/* Bones/skeleton icon */}
          <svg className="absolute bottom-1/4 right-20 w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          {/* Muscle/fitness icon */}
          <svg className="absolute bottom-1/3 left-1/3 w-16 h-16 text-lime-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6.5 7.5c0 1.1-.9 2-2 2h-1v4c0 1.1-.9 2-2 2h-2v3h-2v-3h-2c-1.1 0-2-.9-2-2v-4H6c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h1V6c0-1.1.9-2 2-2h2V1h2v3h2c1.1 0 2 .9 2 2v3h1c1.1 0 2 .9 2 2v2z"/>
          </svg>
          {/* Running person */}
          <svg className="absolute top-1/2 right-1/3 w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm5.51 7.52h-1v7h-2v-4h-2v4h-2v-7H8c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h3V6.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V8h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1z"/>
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-green-800">Conoce a tu Coach</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-900 to-lime-700 bg-clip-text text-transparent mb-4">
              Stephanie Madriz
            </h2>
            <p className="text-xl text-green-800 max-w-3xl mx-auto">
              Coach de movilidad certificada, especializada en longevidad y prevención de lesiones
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/WhatsApp Image 2026-03-05 at 10.41.24 PM.jpeg"
                  alt="Stephanie Madriz - Instructora de Vitamina Movimiento"
                  width={500}
                  height={300}
                  className="object-cover w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent"></div>
              </div>
              
              {/* Stats overlay */}
              <div className="absolute -bottom-6 left-6 right-6 bg-white rounded-2xl p-4 shadow-2xl">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-green-900 mb-1">5+</div>
                    <div className="text-xs text-green-700">Años de Experiencia</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-900 mb-1">50+</div>
                    <div className="text-xs text-green-700">Clientes Felices</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8 order-1 lg:order-2">
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-100 hover:border-green-300 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-lime-600 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-green-900 mb-2">Mi Misión</h3>
                    <p className="text-green-700 leading-relaxed">
                      Devolverte la libertad de movimiento con mejores hábitos posturales para que vivas una vida activa y sin dolor.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-100 hover:border-green-300 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-lime-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-green-900 mb-2">Mi Enfoque</h3>
                    <p className="text-green-700 leading-relaxed">
                      Entiende tu cuerpo y sus necesidades. Mapéate tanto que evitas lesiones antes de que sucedan.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-green-100 hover:border-green-300 transition-all">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-green-900 mb-2">Mi Visión</h3>
                    <p className="text-green-700 leading-relaxed">
                      Crear una comunidad de bienestar donde combinamos hábitos posturales y de movimiento que nos impulsan a completar aventuras sin lesiones.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <WhatsAppButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="relative bg-gradient-to-br from-green-50 via-lime-50 to-emerald-50 py-20 overflow-hidden">
        {/* Decorative background icons */}
        <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
          <Image
            src="/logo3.jpeg"
            alt=""
            width={150}
            height={150}
            className="absolute top-20 left-10 rotate-12"
          />
          {/* Balance/stability icon */}
          <svg className="absolute top-10 right-1/3 w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"/>
          </svg>
          <svg className="absolute top-1/4 right-20 w-16 h-16 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          {/* Knee/joint icon */}
          <svg className="absolute top-1/3 left-1/4 w-10 h-10 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <Image
            src="/logo3.jpeg"
            alt=""
            width={120}
            height={120}
            className="absolute bottom-20 right-1/4 -rotate-12"
          />
          {/* Meditation/recovery icon */}
          <svg className="absolute bottom-10 left-20 w-14 h-14 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14 4c0-1.11-.89-2-2-2s-2 .89-2 2 .89 2 2 2 2-.89 2-2zm-1 8v6h-2v-6l-3-3 .62-2.73L11 9v2h2V9l2.38-2.73L16 9l-3 3z"/>
          </svg>
          <svg className="absolute bottom-32 left-1/3 w-20 h-20 text-lime-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.6 13.9l1-4.4 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7-1.6 8.1-4.9-1-.4 2 7 1.4z"/>
          </svg>
          {/* Wellness star */}
          <svg className="absolute bottom-1/4 right-10 w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-800 to-lime-600 bg-clip-text text-transparent mb-4">
              Servicios de Movilidad
            </h2>
            <p className="text-lg text-green-800 max-w-2xl mx-auto">
              Sesiones personalizadas para que sigas haciendo lo que amas: correr, caminar, alzar peso... sin lesiones
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-green-200 hover:border-green-400 flex flex-col">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-lime-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-4">Clases Virtuales</h3>
              <p className="text-green-700 mb-6 flex-grow">
                Entrena desde cualquier lugar. Sesiones en vivo por Zoom con seguimiento personalizado de tu progreso.
              </p>
              <a 
                href="https://wa.me/50686094225?text=Hola%20Stephanie%2C%20me%20interesa%20agendar%20una%20clase%20contigo.%20%C2%BFCu%C3%A1ndo%20tienes%20disponibilidad%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 w-full mt-auto"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
                </svg>
                <span>Contactar</span>
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-lime-200 hover:border-lime-400 flex flex-col">
              <div className="w-12 h-12 bg-gradient-to-br from-lime-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-4">Clases Presenciales</h3>
              <p className="text-green-700 mb-6 flex-grow">
                Atención personalizada en Cartago. Trabajo uno a uno para corregir y optimizar tu movimiento.
              </p>
              <a 
                href="https://wa.me/50686094225?text=Hola%20Stephanie%2C%20me%20interesa%20agendar%20una%20clase%20contigo.%20%C2%BFCu%C3%A1ndo%20tienes%20disponibilidad%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 w-full mt-auto"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
                </svg>
                <span>Contactar</span>
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all border-2 border-emerald-200 hover:border-emerald-400 flex flex-col">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-green-900 mb-4">Talleres de Movilidad</h3>
              <p className="text-green-700 mb-6 flex-grow">
                Aprende técnicas específicas en talleres temáticos para prevenir lesiones y mejorar tu rendimiento.
              </p>
              <a 
                href="https://wa.me/50686094225?text=Hola%20Stephanie%2C%20me%20interesa%20agendar%20una%20clase%20contigo.%20%C2%BFCu%C3%A1ndo%20tienes%20disponibilidad%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 w-full mt-auto"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
                </svg>
                <span>Contactar</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Success Cases Section */}
      <section className="relative py-20 bg-gradient-to-br from-lime-50 via-green-50 to-emerald-50 overflow-hidden">
        {/* Decorative background icons */}
        <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
          {/* Trophy/success icon */}
          <svg className="absolute top-10 left-10 w-14 h-14 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
          </svg>
          {/* Star achievement */}
          <svg className="absolute top-1/3 right-20 w-12 h-12 text-lime-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
          {/* Play/video icon */}
          <svg className="absolute top-1/2 left-1/4 w-10 h-10 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
          {/* Checkmark circle */}
          <svg className="absolute bottom-20 right-1/3 w-16 h-16 text-lime-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          {/* Person celebrating */}
          <svg className="absolute bottom-10 left-20 w-12 h-12 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm5.51 7.52h-1v7h-2v-4h-2v4h-2v-7H8c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h3V6.5c0-.28.22-.5.5-.5h3c.28 0 .5.22.5.5V8h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1z"/>
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-900 to-lime-700 bg-clip-text text-transparent mb-4">
              Casos de Éxito
            </h2>
            <p className="text-lg text-green-800">
              Historias reales de personas que recuperaron su libertad de movimiento
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            {/* Video Section */}
            <div className="bg-gradient-to-br from-green-200 via-lime-200 to-emerald-300 rounded-2xl p-3 shadow-2xl">
              <video 
                className="w-full rounded-xl max-h-96 object-cover"
                controls
              >
                <source src="/WhatsApp Video 2026-03-05 at 10.43.00 PM.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-green-800 italic">
                "Aprendí a entender mi cuerpo y corregir mi postura. Ahora vivo sin dolor."
              </p>
              <p className="text-green-900 font-semibold mt-2">— Cliente de Vitamina Movimiento</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative bg-gradient-to-br from-green-50 via-lime-50 to-emerald-50 py-20 overflow-hidden">
        {/* Decorative background icons */}
        <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none">
          <svg className="absolute top-10 left-20 w-24 h-24 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/>
          </svg>
          <Image
            src="/logo3.jpeg"
            alt=""
            width={100}
            height={100}
            className="absolute top-1/3 right-10 rotate-45"
          />
          <svg className="absolute bottom-20 left-1/4 w-28 h-28 text-lime-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/>
          </svg>
          <Image
            src="/logo3.jpeg"
            alt=""
            width={130}
            height={130}
            className="absolute bottom-10 right-20 -rotate-12"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-900 to-lime-700 bg-clip-text text-transparent mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-green-800">
              Resolvemos tus dudas sobre movilidad y longevidad
            </p>
          </div>
          
          <div className="space-y-4">
            <FAQItem 
              question="¿Cómo puedo agendar una clase?"
              answer={
                <>
                  <p className="text-gray-700 mb-4">
                    Es muy fácil. Solo contáctame por WhatsApp al <span className="font-semibold">+506 8609 4225</span> 
                    y coordinamos el horario que mejor te convenga. Respondo rápidamente.
                  </p>
                  <a 
                    href={`https://wa.me/50686094225?text=${encodeURIComponent("Hola Stephanie, me interesa agendar una clase contigo. ¿Cuándo tienes disponibilidad?")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-green-600 to-lime-600 hover:from-green-700 hover:to-lime-700 text-white px-6 py-3 rounded-full font-semibold transition-colors shadow-lg inline-flex items-center space-x-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
                    </svg>
                    <span>Contactar por WhatsApp</span>
                  </a>
                </>
              }
              icon={
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
                </svg>
              }
            />
            
            <FAQItem 
              question="¿Cuáles son los horarios disponibles?"
              answer={
                <>
                  Ofrezco clases de <span className="font-semibold">lunes a viernes de 6:00 AM a 8:00 PM</span> y 
                  <span className="font-semibold">sábados de 7:00 AM a 5:00 PM</span>. Los horarios son flexibles 
                  y se adaptan a tu disponibilidad.
                </>
              }
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
            
            <FAQItem 
              question="¿Dónde se realizan las clases?"
              answer="Las clases virtuales se realizan por Zoom. Las clases presenciales son en Cartago, Costa Rica. También ofrezco talleres especializados en diferentes ubicaciones."
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
            />
            
            <FAQItem 
              question="¿Qué incluyen las sesiones de movilidad?"
              answer="Cada sesión incluye evaluación postural, ejercicios personalizados de movilidad, técnicas de prevención de lesiones y seguimiento de tu progreso. Todo adaptado a tus necesidades específicas."
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
            
            <FAQItem 
              question="¿Necesito experiencia previa?"
              answer="No necesitas experiencia previa. Trabajo con personas de todos los niveles, desde principiantes completos hasta atletas avanzados. Cada sesión se adapta a tu nivel actual y objetivos."
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              }
              isLast={true}
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
