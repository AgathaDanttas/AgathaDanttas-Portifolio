import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Activity, Truck, Zap, Layout } from "lucide-react";
import { Link } from "react-router-dom";
import { translations } from "../data/translations";
import type { Language } from "../types/language";
import { getInitialLang, persistLang } from "../lib/lang";
import Navbar from "../components/home/NavBar";
import ParticleCanvas from "../components/home/ParticleCanvas";
import CustomCursor from "../components/home/CustomCursor";

export default function SimUpa() {
  const [lang, setLang] = useState<Language>(getInitialLang);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    persistLang(lang);
  }, [lang]);

  return (
    <div className="bg-[#050508] min-h-screen text-white selection:bg-purple-500/30">
      <CustomCursor />
      <ParticleCanvas />
      <Navbar t={t} lang={lang} setLang={setLang} scrolled={scrolled} />

      <main className="relative z-10 pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              to="/Home"
              className="inline-flex items-center gap-2 text-purple-400/50 hover:text-white-400 transition-colors group px-4 py-2 rounded-full bg-purple-400/5 border border-purple-400/10 hover:border-purple-500/30"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-purple-400">Voltar ao Portfólio</span>
            </Link>
          </motion.div>

          {/* Hero Section */}
          <section className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-6">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                  Projeto em Desenvolvimento
                </div>
                <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-white to-white/50 bg-clip-text text-transparent leading-tight">
                  SIM-UPA
                </h1>
                <p className="text-xl text-white/60 leading-relaxed mb-8 max-w-xl">
                  Um ecossistema digital projetado para resolver o caos na regulação médica. O SIM-UPA conecta gestores, médicos e equipes de resgate em uma única plataforma de alta performance.
                </p>

              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-purple-600/20 blur-3xl rounded-full opacity-50" />
                <div className="relative aspect-video rounded-2xl border border-white/10 bg-[#0d0d14] overflow-hidden shadow-2xl group">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-emerald-500" />
                  <div className="p-8 flex items-center justify-center h-full">
                    <Activity size={80} className="text-purple-500/20 animate-pulse" />
                    <div className="absolute inset-x-8 bottom-8 p-4 rounded-xl bg-black/60 backdrop-blur-md border border-white/10">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono">Real-time status</span>
                        <span className="text-[10px] text-emerald-400 font-mono">Live</span>
                      </div>
                      <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "72%" }}
                          transition={{ duration: 1.5, delay: 1 }}
                          className="h-full bg-emerald-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Features Grid */}


          {/* Core Feature: Dashboard */}
          <section className="mb-20">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-bold mb-4">Monitoramento de Lotação</h2>
              <p className="text-white/50 max-w-2xl mx-auto">
                Acompanhamento preciso da capacidade de cada unidade através do sistema de cores (Protocolo de Manchester adaptado para gestão de leitos).
              </p>
            </div>


          </section>

          {/* Ambulance Section */}
          <section className="relative p-12 rounded-3xl bg-[#0d0d14] border border-white/10 overflow-hidden mb-20">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-purple-500/10 to-transparent pointer-events-none" />
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 text-purple-400 text-xs font-mono uppercase tracking-[0.2em] mb-4">
                  <Truck size={14} />
                  Módulo SAMU
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Logística e Encaminhamento Inteligente</h2>
                <p className="text-white/60 leading-relaxed mb-6">
                  Não basta saber que uma UPA está cheia. O SIM-UPA utiliza algoritmos de geolocalização para sugerir a unidade mais adequada para as ambulâncias, considerando tempo de trânsito e gravidade do paciente.
                </p>
                <ul className="space-y-4">
                  {[
                    "Cálculo de rota em tempo real com Google Maps API",
                    "Alertas de lotação crítica emitidos via WebSockets",
                    "Painel dedicado para motoristas e médicos reguladores",
                    "Relatórios automáticos de ocorrência"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/3 rounded-2xl border border-white/10 p-4 aspect-square flex items-center justify-center">
                <div className="w-full h-full rounded-xl bg-black/40 border border-white/5 relative overflow-hidden flex items-center justify-center group">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full border-2 border-purple-500/30 animate-[ping_3s_linear_infinite]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 p-3 rounded-lg bg-black text-[10px] font-mono border border-white/5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-purple-400">$ system.analyze_route(samu_04)</span><br />
                    <span className="text-white/40">Calculating optimal UPA destination...</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Roadmap/Architecture */}
          <section className="max-w-4xl mx-auto mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Arquitetura e Escopo</h2>
            </div>
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-8 rounded-2xl bg-white/3 border border-white/8">
                  <Layout size={24} className="text-blue-400 mb-4" />
                  <h4 className="text-xl font-bold mb-4">Frontend</h4>
                  <p className="text-sm text-white/50 leading-relaxed">
                    Interface reativa desenvolvida com React e Framer Motion para visualização imediata de dados sem recarregamento de página.
                  </p>
                </div>
                <div className="p-8 rounded-2xl bg-white/3 border border-white/8">
                  <Zap size={24} className="text-amber-400 mb-4" />
                  <h4 className="text-xl font-bold mb-4">Real-time Backend</h4>
                  <p className="text-sm text-white/50 leading-relaxed">
                    Node.js com WebSockets mantendo a sincronia entre centenas de dispositivos simultâneos.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Footer CTA */}
          <section className="text-center py-20 border-t border-white/5">

            <Link
              to="/Home"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-500 transition-all font-bold hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:-translate-y-1"
            >
              Explorar outros projetos
            </Link>
          </section>
        </div>
      </main>
    </div>
  );
}
