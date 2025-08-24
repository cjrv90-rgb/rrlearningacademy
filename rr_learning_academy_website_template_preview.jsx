import React from "react";
import { Book, GraduationCap, Users, MessageSquare, Phone, Mail, MapPin, Sparkles, CheckCircle2 } from "lucide-react";

export default function RRWebsite() {
  return (
    <div className="min-h-screen w-full text-slate-800 bg-white">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-yellow-400 flex items-center justify-center font-extrabold text-slate-900">RR</div>
            <div className="leading-tight">
              <p className="font-semibold tracking-tight">R&R Learning Academy</p>
              <p className="text-xs text-slate-500">Inglés presencial + virtual</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#programas" className="hover:text-slate-900 text-slate-600">Programas</a>
            <a href="#por-que" className="hover:text-slate-900 text-slate-600">¿Por qué nosotros?</a>
            <a href="#precios" className="hover:text-slate-900 text-slate-600">Precios</a>
            <a href="#contacto" className="hover:text-slate-900 text-slate-600">Contacto</a>
          </nav>
          <a href="#registro" className="hidden md:inline-flex items-center rounded-2xl bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-800">Reserva tu clase</a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 items-center gap-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-100 text-yellow-800 px-3 py-1 text-xs font-medium mb-4">
              <Sparkles className="h-3.5 w-3.5"/> Apertura – cupos limitados
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Aprende inglés con <span className="text-yellow-500">confianza</span>
            </h1>
            <p className="mt-4 text-slate-600 text-lg">
              Clases presenciales en nuestro salón + apoyo virtual. Refuerzo escolar, conversación y preparación de exámenes para niños, jóvenes y adultos.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#registro" className="inline-flex items-center justify-center rounded-2xl bg-slate-900 text-white px-5 py-3 font-semibold hover:bg-slate-800">Comienza hoy</a>
              <a href="#precios" className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-800 hover:bg-slate-50">Ver planes</a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-500">
              <CheckCircle2 className="h-4 w-4"/> Niveles por edad · Grupos reducidos · Material incluido
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-yellow-200 via-white to-sky-100 border border-slate-200 shadow-[0_10px_40px_rgba(2,6,23,.08)] flex items-center justify-center">
              <div className="grid grid-cols-3 gap-3 p-6 w-full">
                <div className="rounded-2xl bg-white border border-slate-200 p-4 flex flex-col items-center justify-center text-center">
                  <Book className="h-8 w-8 text-slate-900"/>
                  <p className="mt-2 text-sm font-semibold">Refuerzo escolar</p>
                </div>
                <div className="rounded-2xl bg-white border border-slate-200 p-4 flex flex-col items-center justify-center text-center">
                  <Users className="h-8 w-8 text-slate-900"/>
                  <p className="mt-2 text-sm font-semibold">Grupos pequeños</p>
                </div>
                <div className="rounded-2xl bg-white border border-slate-200 p-4 flex flex-col items-center justify-center text-center">
                  <MessageSquare className="h-8 w-8 text-slate-900"/>
                  <p className="mt-2 text-sm font-semibold">Conversación</p>
                </div>
                <div className="rounded-2xl bg-white border border-slate-200 p-4 flex flex-col items-center justify-center text-center col-span-2">
                  <GraduationCap className="h-8 w-8 text-slate-900"/>
                  <p className="mt-2 text-sm font-semibold">Prep. exámenes</p>
                </div>
                <div className="rounded-2xl bg-white border border-slate-200 p-4 flex flex-col items-center justify-center text-center">
                  <Phone className="h-8 w-8 text-slate-900"/>
                  <p className="mt-2 text-sm font-semibold">Apoyo virtual</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES / WE'VE GOT YOU COVERED */}
      <section id="por-que" className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="grid md:grid-cols-4 gap-6">
            <Feature
              title="We've Got You Covered"
              headline="Proven Success: 90% grade improvement"
              text="Nuestros estudiantes muestran mejoras notables gracias a planes personalizados, seguimiento y práctica guiada."
            />
            <Feature
              title="A Different Approach to Learning"
              headline="Aprender haciendo"
              text="Metodología dinámica con juegos, proyectos, conversación real y tecnología para mantener alta la motivación."
            />
            <Feature
              title="Customized Learning Plans"
              headline="Tu plan, a tu ritmo"
              text="Evaluamos el nivel, marcamos metas por mes y ajustamos el plan para cada estudiante: niños, jóvenes y adultos."
            />
            <Feature
              title="Top College Entrance Prep"
              headline="Resultados que abren puertas"
              text="Estrategias para College Board, SAT y entrevistas en inglés. Simulacros y retroalimentación precisa."
            />
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programas" className="">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Nuestros Programas</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">Tutorías individuales y grupales, inglés conversacional para adultos y preparación de exámenes. Presencial con opción virtual algunos días.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <ProgramCard icon={<Book className="h-6 w-6"/>} title="Niños y Jóvenes" text="Refuerzo de gramática, lectura y escritura. Actividades lúdicas y evaluación mensual." />
            <ProgramCard icon={<MessageSquare className="h-6 w-6"/>} title="Conversacional Adultos" text="Inglés básico y funcional para trabajo, entrevistas y vida diaria. Enfoque práctico." />
            <ProgramCard icon={<GraduationCap className="h-6 w-6"/>} title="Exámenes" text="College Board, SAT y presentación oral. Técnicas y simulacros." />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="precios" className="bg-slate-50 border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Planes y Precios</h2>
          <p className="mt-2 text-slate-600">Mínimo 8 clases mensuales · 1 hora por clase · Grupos reducidos (3–6).</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <PriceCard title="Individual" price="$20 / clase" note="8 clases mín. → $160/mes" features={["Atención 1:1","Plan personalizado","Reporte mensual"]} />
            <PriceCard highlight title="Grupal" price="$15 / clase" note="8 clases mín. → $120/mes" features={["3–6 estudiantes","Proyecto por unidad","Práctica de conversación"]} />
            <PriceCard title="Adultos Conversacional" price="$25 / clase" note="8 clases mín. → $200/mes" features={["Inglés funcional para trabajo","Simulación de entrevistas","Horario noche / fin de semana"]} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="registro" className="">
        <div className="mx-auto max-w-6xl px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">Listos para empezar</h3>
            <p className="mt-2 text-slate-600">Reserva una clase de diagnóstico gratuita. Definimos metas, nivel y el mejor grupo para ti.</p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contacto" className="inline-flex items-center justify-center rounded-2xl bg-yellow-400 text-slate-900 px-5 py-3 font-semibold hover:bg-yellow-300">Agendar evaluación</a>
              <a href="#precios" className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-800 hover:bg-slate-50">Ver planes</a>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-200 p-6 bg-white shadow-[0_10px_40px_rgba(2,6,23,.06)]">
            <form className="grid grid-cols-1 gap-4">
              <input className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="Nombre completo"/>
              <input className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="Correo electrónico"/>
              <input className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900" placeholder="Teléfono"/>
              <select className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-slate-900">
                <option>Programa de interés</option>
                <option>Niños y Jóvenes</option>
                <option>Conversacional Adultos</option>
                <option>Exámenes</option>
              </select>
              <button type="button" className="rounded-2xl bg-slate-900 text-white px-5 py-3 font-semibold hover:bg-slate-800">Enviar</button>
            </form>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer id="contacto" className="bg-slate-900 text-slate-100">
        <div className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <div className="h-10 w-10 rounded-full bg-yellow-400 flex items-center justify-center font-extrabold text-slate-900">RR</div>
            <p className="mt-3 text-sm text-slate-300">Centro de Tutorías de Inglés · Presencial y Virtual</p>
          </div>
          <div>
            <h4 className="font-semibold">Contacto</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4"/>(939) 344‑3767</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4"/>mrs.rodriguezruiz@gmail.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4"/>[Tu dirección aquí]</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Horarios</h4>
            <p className="mt-3 text-sm text-slate-300">Niños/Jóvenes: Lun–Jue · Adultos: Vie–Sáb · Clases virtuales: días seleccionados</p>
          </div>
        </div>
        <div className="border-t border-slate-800 py-4 text-xs text-center text-slate-400">© {new Date().getFullYear()} R&R Learning Academy. Todos los derechos reservados.</div>
      </footer>
    </div>
  );
}

function Feature({ title, headline, text }) {
  return (
    <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-[0_10px_30px_rgba(2,6,23,.04)]">
      <p className="text-xs uppercase tracking-wider text-slate-500">{title}</p>
      <h3 className="mt-1 font-bold text-slate-900">{headline}</h3>
      <p className="mt-2 text-sm text-slate-600">{text}</p>
    </div>
  );
}

function ProgramCard({ icon, title, text }) {
  return (
    <div className="rounded-3xl border border-slate-200 p-6 bg-white shadow-[0_10px_30px_rgba(2,6,23,.04)]">
      <div className="h-10 w-10 rounded-xl bg-yellow-100 text-slate-900 flex items-center justify-center">{icon}</div>
      <h4 className="mt-3 text-lg font-bold text-slate-900">{title}</h4>
      <p className="mt-1 text-sm text-slate-600">{text}</p>
    </div>
  );
}

function PriceCard({ title, price, note, features, highlight }) {
  return (
    <div className={
      "rounded-3xl p-6 border shadow-[0_10px_30px_rgba(2,6,23,.06)] " +
      (highlight ? "border-slate-900 bg-slate-900 text-white" : "border-slate-200 bg-white")
    }>
      <p className={"text-xs uppercase tracking-wider " + (highlight ? "text-white/70" : "text-slate-500")}>{title}</p>
      <div className="mt-1 text-2xl font-extrabold">{price}</div>
      <div className={"text-sm mt-1 " + (highlight ? "text-white/80" : "text-slate-500")}>{note}</div>
      <ul className="mt-4 space-y-2 text-sm">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle2 className={"h-4 w-4 mt-0.5 " + (highlight ? "text-yellow-300" : "text-slate-900")} />
            <span className={highlight ? "text-white" : "text-slate-700"}>{f}</span>
          </li>
        ))}
      </ul>
      <a href="#registro" className={
        "mt-5 inline-flex items-center justify-center w-full rounded-2xl px-4 py-2 font-semibold " +
        (highlight ? "bg-white text-slate-900 hover:bg-slate-100" : "bg-slate-900 text-white hover:bg-slate-800")
      }>
        Elegir plan
      </a>
    </div>
  );
}
