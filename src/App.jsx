import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Menu, X, Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { href: "#skills", label: "Habilidades" },
  { href: "#projects", label: "Projetos" },
];

const skills = [
  {
    id: "python",
    label: "Python",
    short: "Py",
    description:
      "Desenvolvi habilidades em Python por meio de cursos e projetos pessoais, aprimorando a aplicação eficiente e estruturada de conceitos da linguagem.",
  },
  {
    id: "js",
    label: "JavaScript",
    short: "JS",
    description:
      "Desenvolvi habilidades em Python por meio de cursos e projetos pessoais disponíveis em meu GitHub, aprimorando a aplicação eficiente e estruturada de conceitos da linguagem.",
  },
  {
    id: "ts",
    label: "TypeScript",
    short: "TS",
    description:
      "Desenvolvi competências em TypeScript aplicando tipagem estática em projetos reais, fortalecendo a segurança, legibilidade e manutenção do código em aplicações modernas.",
  },
  {
    id: "node",
    label: "Node.js",
    short: "Node",
    description:
      "Desenvolvi habilidades em Node.js por meio de cursos e projetos práticos, consolidando a construção de APIs e aplicações back-end estruturadas e funcionais.",
  },
  {
    id: "react",
    label: "React",
    short: "React",
    description:
      "Aprimorei a construção de interfaces interativas e dinâmicas com React através de projetos práticos, consolidando a habilidade de criar componentes reutilizáveis e aplicações web escaláveis de forma organizada e eficiente.",
  },
  {
    id: "tailwind",
    label: "Tailwind CSS",
    short: "Tailwind",
    description:
      "Aprofundei meus conhecimentos em Tailwind por meio de projetos práticos, aprimorando a criação de interfaces intuitivas e visualmente consistentes",
  },
];

const sampleProjects = [
  {
    id: "proj-1",
    title: "Mini blog",
    desc: "um pequeno blog onde podemos fazer posts variados",
    link: "https://raphaelrosa74.github.io/miniblog/",
  },
  {
    id: "proj-2",
    title: "Inside-Test",
    desc: "Lista de Usuários com Hook Personalizado (useUsers) Este projeto é um exemplo prático de como utilizar React com um hook personalizado para buscar e gerenciar dados de uma API externa. Aqui utilizamos o endpoint público do JSONPlaceholder para simular a listagem de usuários",
    link: "https://github.com/RaphaelRosa74/Inside-Test",
  },
  {
    id: "proj-3",
    title: "Reactgram",
    desc: "O Reactgram é uma aplicação full-stack inspirada no Instagram, desenvolvida com React no frontend e Node.js + Express no backend, utilizando MongoDB como banco de dados. O projeto implementa autenticação, gerenciamento de usuários, publicação de fotos, curtidas e comentários, simulando funcionalidades reais de uma rede social moderna.",
    link: "https://github.com/RaphaelRosa74/Reactgram",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = (hash) => {
    setMenuOpen(false);
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white selection:bg-fuchsia-500/30">
      {/* NAVBAR */}
      <header className="sticky top-0 border-b border-white/5 bg-slate-900 z-9">
        <div className="mx-auto max-w-6xl px-4 py-6 flex items-center justify-between ">
          <div
            className="text-lg font-bold cursor-pointer hover:text-fuchsia-300 transition"
            onClick={() => goTo("#home")}
          >
            Raphael de Faria Rosa
          </div>
          <nav className="hidden md:flex gap-6 items-center">
            {navLinks.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={(e) => {
                  e.preventDefault();
                  goTo(n.href);
                }}
                className="text-slate-300 hover:text-fuchsia-300 transition"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen((s) => !s)}
              className="p-2 rounded-md bg-white/5"
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/5 bg-slate-900/90">
            <div className="px-4 py-4 flex flex-col gap-3">
              {navLinks.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={(e) => {
                    e.preventDefault();
                    goTo(n.href);
                  }}
                  className="text-slate-300"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO / SOBRE */}
      <main>
        <section id="home" className="mx-auto max-w-6xl px-4 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-extrabold leading-tight"
              >
                Olá, eu sou <br />
                <span className="bg-clip-text text-transparent bg-linear-to-r from-fuchsia-400 to-violet-300">
                  Raphael
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-slate-300 max-w-xl"
              >
                Desenvolvedor Full Stack júnior, curioso por natureza e sempre
                em busca de novos aprendizados. Gosto de transformar ideias em
                soluções práticas e bem estruturadas, unindo design, lógica e
                código limpo. Estou dando meus primeiros passos na área e
                buscando oportunidades para crescer e contribuir com projetos
                incríveis.
              </motion.p>
              <div className="mt-8 flex items-center gap-4">
                <motion.a
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  onClick={(e) => {
                    e.preventDefault();
                    setTimeout(() => {
                      const el = document.querySelector("#skills");
                      if (el)
                        el.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }, 100);
                  }}
                  href="#skills"
                  className="flex items-center gap-2 rounded-2xl bg-fuchsia-600 px-5.5 py-3.5 font-medium text-white shadow-lg transition-all hover:bg-fuchsia-700"
                >
                  Veja mais
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </motion.a>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              {/* Card com resumo / destaque */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl border border-white/6 bg-white/2 p-6"
              >
                <div className="text-sm text-slate-400">Função</div>
                <div className="text-2xl font-bold mt-1">
                  Desenvolvedor Fullstack
                </div>
                <div className="text-sm text-slate-300 mt-4">
                  <span className="font-bold">Principais stacks:</span> React,
                  Node.js, TypeScript, Tailwind, Python
                </div>
                <div className="flex flex-col sm:flex-row justify-start items-start gap-8 mt-6 grid-cols-3">
                  <div className="text-left">
                    <div className="text-sm text-slate-400">Projetos</div>
                    <div className="font-bold">+10</div>
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-slate-400">Contato</div>
                    <div className="font-bold">Disponível</div>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="rounded-2xl border border-white/6 bg-white/2 p-8 flex flex-col md:flex-row items-center justify-between gap-6"
              >
                <div>
                  <h4 className="text-lg font-semibold">Vamos conversar?</h4>
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/RaphaelRosa74"
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full border px-4 py-3 hover:bg-white/3 transition"
                    aria-label="GitHub"
                  >
                    <Github />
                    <span className="hidden sm:inline">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/raphael-rosa-536758219/"
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full border px-4 py-3 hover:bg-white/3 transition"
                    aria-label="LinkedIn"
                  >
                    <Linkedin />
                    <span className="hidden sm:inline">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:“raphafaria7@gmail.com”"
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-full border px-4 py-3 hover:bg-white/3 transition"
                    aria-label="GitHub"
                  >
                    <Mail />
                    <span className="hidden sm:inline">Email</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* HABILIDADES */}
        <section id="skills" className="mx-auto max-w-6xl px-4 py-12">
          <h3 className="text-xl font-semibold mb-4">Habilidades</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((s) => (
              <motion.button
                key={s.id}
                onClick={() => {
                  setTimeout(() => {
                    const el = document.querySelector("#projects");
                    if (el)
                      el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }, 100);
                }}
                whileHover={{ scale: 1.02 }}
                className="group text-left rounded-2xl border border-white/6 p-6 bg-white/1 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-slate-400">{s.short}</div>
                    <div className="mt-2 font-semibold">{s.label}</div>
                  </div>
                </div>

                <p className="mt-3 text-slate-300 text-sm">{s.description}</p>
              </motion.button>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-4 py-12">
          <h3 className="text-xl font-semibold mb-6">Projetos</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sampleProjects.map((p, idx) => (
              <motion.a
                key={p.id}
                href={p.link}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12 * idx }}
                className="block rounded-2xl border border-white/6 p-6 bg-white/1 hover:bg-white/3 hover:scale-[1.01] transition transform"
              >
                <div className="flex items-center justify-between">
                  <div className="font-semibold">{p.title}</div>
                  <div className="text-sm text-slate-400">{/* tag */}</div>
                </div>
                <p className="mt-3 text-slate-300 text-sm">{p.desc}</p>
                <div className="mt-4 flex items-center gap-3 text-sm text-slate-400">
                  <span>Fullstack</span>
                </div>
              </motion.a>
            ))}
          </div>
        </section>
      </main>
      {/* FOOTER */}
      <footer className="border-t border-white/5">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col items-center">
          <div className="mb-4">
            Raphael de Faria Rosa © {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
