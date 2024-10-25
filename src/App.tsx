import React from 'react';
import { Users, Shield, ChevronRight, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Building } from 'lucide-react';
import { Logo } from './components/Logo';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Logo />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-[#110064]">Sobre Nosotros</a>
              <a href="#services" className="text-gray-700 hover:text-[#110064]">Servicios</a>
              <a href="#contact" className="text-gray-700 hover:text-[#110064]">Contacto</a>
              <a href="https://tally.so/r/mV15dJ" target="_blank" rel="noopener noreferrer" 
                className="bg-[#110064] text-white px-4 py-2 rounded-md hover:bg-[#1a0b82]">
                Unirse al Equipo
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Logo className="h-24 mx-auto mb-8" />
            <h1 className="text-4xl md:text-5xl font-bold text-[#110064] mb-6">
              Encuentra Receptores Judiciales en Tiempo Record
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Conectamos abogados con receptores judiciales de manera rápida y confiable, optimizando tus gestiones legales.
            </p>
            <a href="#contact" 
              className="inline-flex items-center bg-[#110064] text-white px-8 py-3 rounded-md hover:bg-[#1a0b82]">
              Comenzar Ahora <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#110064] mb-12">¿Por qué E-Receptor?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Building className="h-12 w-12 text-[#110064] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-[#110064]">Rapidez y Eficiencia</h3>
              <p className="text-gray-600">Encuentra receptores disponibles de inmediato, sin llamadas ni correos innecesarios.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Users className="h-12 w-12 text-[#110064] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-[#110064]">Red Confiable</h3>
              <p className="text-gray-600">Accede a una red verificada de receptores judiciales en todo el país.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <Shield className="h-12 w-12 text-[#110064] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-[#110064]">Seguridad Garantizada</h3>
              <p className="text-gray-600">Todos nuestros receptores están validados y monitoreados constantemente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#110064] mb-12">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-[#110064]">Notificación Personal</h3>
              <p className="text-gray-600 mb-4">Gestión eficiente de notificaciones personales con seguimiento en tiempo real.</p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center"><div className="w-4 h-4 mr-2 rounded-full bg-[#110064]" />Cobertura nacional</li>
                <li className="flex items-center"><div className="w-4 h-4 mr-2 rounded-full bg-[#110064]" />Seguimiento en tiempo real</li>
                <li className="flex items-center"><div className="w-4 h-4 mr-2 rounded-full bg-[#110064]" />Reportes detallados</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-[#110064]">Notificación Personal Subsidiaria</h3>
              <p className="text-gray-600 mb-4">Servicio completo de notificaciones subsidiarias siguiendo todos los protocolos legales.</p>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center"><div className="w-4 h-4 mr-2 rounded-full bg-[#110064]" />Proceso documentado</li>
                <li className="flex items-center"><div className="w-4 h-4 mr-2 rounded-full bg-[#110064]" />Cumplimiento normativo</li>
                <li className="flex items-center"><div className="w-4 h-4 mr-2 rounded-full bg-[#110064]" />Gestión integral</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#110064] mb-12">Contáctanos</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nombre</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#110064] focus:ring-[#110064]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#110064] focus:ring-[#110064]" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Mensaje</label>
                  <textarea rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#110064] focus:ring-[#110064]"></textarea>
                </div>
                <button type="submit" className="w-full bg-[#110064] text-white px-4 py-2 rounded-md hover:bg-[#1a0b82]">
                  Enviar Mensaje
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="flex items-center">
                <Mail className="h-6 w-6 text-[#110064] mr-3" />
                <span>contacto@e-receptor.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-6 w-6 text-[#110064] mr-3" />
                <span>+56 2 2345 6789</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-6 w-6 text-[#110064] mr-3" />
                <span>Santiago, Chile</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#110064] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Logo inverted className="h-8 mb-4" />
              <p className="text-gray-300">Conectando eficientemente el mundo legal.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-300 hover:text-white">Sobre Nosotros</a></li>
                <li><a href="#services" className="text-gray-300 hover:text-white">Servicios</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-white">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Términos y Condiciones</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Política de Privacidad</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white">
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-[#1a0b82] mt-12 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} E-Receptor. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;