import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

export default function ConfirmacionPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-br from-amber-300 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-[#3D2F26] mb-4">
            ¡Reserva <span className="text-sunrise-gradient">confirmada</span>!
          </h1>

          <p className="text-xl text-[#6B5545] max-w-2xl mx-auto">
            Tu cita quedó programada. Stephanie te va a contactar para confirmar los detalles finales.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 mb-8 shadow-md border border-amber-200/60">
          <h2 className="text-2xl font-bold text-[#3D2F26] mb-6">
            Detalles de tu reserva
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-xs font-semibold text-orange-700 uppercase tracking-widest mb-1">
                  Servicio
                </h3>
                <p className="text-lg text-[#3D2F26]">Evaluación gratuita</p>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-orange-700 uppercase tracking-widest mb-1">
                  Fecha y hora
                </h3>
                <p className="text-lg text-[#3D2F26]">Por confirmar por WhatsApp</p>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-orange-700 uppercase tracking-widest mb-1">
                  Ubicación
                </h3>
                <p className="text-lg text-[#3D2F26]">Estudio Vitamina Movimiento</p>
                <p className="text-[#6B5545]">Cartago, Costa Rica</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-xs font-semibold text-orange-700 uppercase tracking-widest mb-1">
                  Coach
                </h3>
                <p className="text-lg text-[#3D2F26]">Stephanie Madriz</p>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-orange-700 uppercase tracking-widest mb-1">
                  Número de confirmación
                </h3>
                <p className="text-lg text-[#3D2F26] font-mono">#VM2026-001</p>
              </div>

              <div>
                <h3 className="text-xs font-semibold text-orange-700 uppercase tracking-widest mb-1">
                  Contacto
                </h3>
                <p className="text-lg text-[#3D2F26]">+506 8609 4225</p>
                <p className="text-[#6B5545]">@vitamina_movimiento</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-amber-50/60 border border-amber-200 rounded-2xl p-6 mb-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-amber-300 to-orange-500 rounded-xl flex items-center justify-center shadow-md">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-[#3D2F26] mb-2">
                Qué esperar en tu primera sesión
              </h3>
              <ul className="text-[#6B5545] space-y-1 leading-relaxed">
                <li>• Evaluación postural y de rangos de movilidad</li>
                <li>• Conversación sobre tus objetivos y estilo de vida</li>
                <li>• Identificación de patrones y compensaciones</li>
                <li>• Primeras recomendaciones personalizadas</li>
                <li>• Plan inicial para empezar tu camino</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-orange-50/70 border border-orange-200 rounded-2xl p-6 mb-8">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center shadow-md">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-[#3D2F26] mb-2">
                Qué traer a tu cita
              </h3>
              <ul className="text-[#6B5545] space-y-1 leading-relaxed">
                <li>• Ropa cómoda para moverte</li>
                <li>• Zapatos deportivos (o descalzo, como prefieras)</li>
                <li>• Botella de agua</li>
                <li>• Información médica o exámenes relevantes</li>
                <li>• Lista de medicamentos actuales (si aplica)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-lg"
            >
              Volver al inicio
            </Link>
            <a
              href="https://wa.me/50686094225?text=Hola%20Stephanie%2C%20necesito%20agregar%20la%20cita%20a%20mi%20calendario."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#3D2F26] text-[#3D2F26] px-8 py-3 rounded-full font-semibold hover:bg-[#3D2F26] hover:text-[#FFF8F0] transition-colors"
            >
              Agregar al calendario
            </a>
          </div>

          <p className="text-[#6B5545]">
            ¿Necesitás cambiar la cita? Escribí a <span className="font-semibold">+506 8609 4225</span>
          </p>
        </div>

        <div className="mt-12 bg-gradient-to-br from-amber-100 via-orange-100 to-amber-50 rounded-3xl p-8 border border-amber-200/70">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[#3D2F26] mb-4">
              Mientras llega el día...
            </h2>
            <p className="text-lg text-[#6B5545] mb-6 max-w-2xl mx-auto">
              Seguime en Instagram para tips diarios de movilidad, longevidad y hábitos posturales.
            </p>
            <a
              href="https://www.instagram.com/vitamina_movimiento/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-[#3D2F26] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#2A1F18] transition-colors shadow-md"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>@vitamina_movimiento</span>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
