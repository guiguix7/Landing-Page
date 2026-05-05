import React from 'react';
import { Download, Mail, Github, Linkedin, MessageSquare, ExternalLink, Code, Database, Terminal, GitBranch, Layout, Server } from 'lucide-react';

// --- Shared Components ---

const Button = ({ children, variant = 'primary', className = '', href, ...props }: any) => {
  const baseStyle = "inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium transition-colors rounded-lg border focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2";
  const variants = {
    primary: "bg-zinc-900 text-white border-transparent hover:bg-zinc-800",
    secondary: "bg-white text-zinc-900 border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300",
    outline: "bg-transparent text-zinc-900 border-zinc-200 hover:bg-zinc-50"
  };
  
  if (href) {
    return (
      <a href={href} className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const Section = ({ id, className = '', children }: any) => (
  <section id={id} className={`py-24 ${className}`}>
    <div className="max-w-4xl mx-auto px-6">
      {children}
    </div>
  </section>
);

const SectionTitle = ({ children, centered = false }: any) => (
  <h2 className={`text-2xl font-bold text-zinc-900 mb-10 ${centered ? 'text-center' : ''}`}>
    {children}
  </h2>
);

// --- Main Application ---

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-200">
      
      {/* 1. Header / Hero */}
      <header className="pt-24 pb-16 border-b border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
          <h1 className="text-6xl font-extrabold tracking-tight text-zinc-900 mb-4">
            Gui.
          </h1>
          <p className="text-xl text-zinc-500 mb-10 font-light tracking-wide">
            Desenvolvedor Backend em Formação — Java • SQL
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button variant="primary">
              <Download className="w-4 h-4 mr-2" /> Baixar Currículo
            </Button>
            <Button variant="secondary" href="#contato">
              Contato
            </Button>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-zinc-400">
            <a href="#sobre" className="hover:text-zinc-900 transition-colors">Sobre</a>
            <a href="#skills" className="hover:text-zinc-900 transition-colors">Skills</a>
            <a href="#projetos" className="hover:text-zinc-900 transition-colors">Projetos</a>
            <a href="#contato" className="hover:text-zinc-900 transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      <main>
        {/* 2. Sobre */}
        <Section id="sobre" className="flex flex-col items-center text-center">
          <SectionTitle centered>Sobre mim</SectionTitle>
          <p className="text-lg text-zinc-600 max-w-[650px] leading-relaxed mx-auto">
            Estudante de tecnologia com foco em backend. Experiência prática com APIs REST, SQL e Git. Buscando estágio para evoluir tecnicamente com projetos reais.
          </p>
        </Section>

        {/* 3. Skills */}
        <Section id="skills" className="bg-zinc-50/50">
          <SectionTitle centered>Skills</SectionTitle>
          <div className="grid md:grid-cols-2 gap-10">
            
            {/* Hard Skills */}
            <div>
              <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">Hard Skills</h3>
              <div className="flex flex-col gap-3">
                {[
                  { name: 'Lógica de Programação', icon: Terminal },
                  { name: 'Git & GitHub', icon: GitBranch },
                  { name: 'SQL & Modelagem', icon: Database },
                  { name: 'APIs REST', icon: Server },
                  { name: 'Java ou C#', icon: Code },
                  { name: 'Docker (básico)', icon: Layout },
                ].map(skill => (
                  <div key={skill.name} className="flex items-center gap-3 bg-white border border-zinc-100 rounded-lg px-4 py-3 text-zinc-700 shadow-sm transition-all hover:border-zinc-200">
                    <skill.icon className="w-4 h-4 text-zinc-300" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-6">Soft Skills</h3>
              <div className="flex flex-col gap-3">
                {[
                  'Autonomia',
                  'Organização',
                  'Aprendizado rápido',
                  'Raciocínio lógico'
                ].map(skill => (
                  <div key={skill} className="flex items-center gap-3 bg-white border border-zinc-100 rounded-lg px-4 py-3 text-zinc-700 shadow-sm transition-all hover:border-zinc-200">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-200" />
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Section>

        {/* 4. Projetos */}
        <Section id="projetos">
          <SectionTitle centered>Projetos</SectionTitle>
          <div className="grid md:grid-cols-3 gap-6">
            
            {/* Project Card 1 */}
            <div className="flex flex-col h-full border border-zinc-200 rounded-2xl p-6 bg-white hover:border-zinc-300 transition-colors shadow-sm">
              <h3 className="font-semibold text-zinc-900 mb-3">API de Autenticação — Java + Spring</h3>
              <p className="text-zinc-500 text-sm mb-6 flex-grow leading-relaxed">
                API REST com JWT, CRUD de usuários e conexão com banco relacional. Testes básicos e deploy simples.
              </p>
              <div className="flex gap-3 pt-4 border-t border-zinc-50">
                <Button variant="secondary" className="flex-1 text-xs py-2 px-0"><Github className="w-3.5 h-3.5 mr-2"/> GitHub</Button>
                <Button variant="secondary" className="flex-1 text-xs py-2 px-0"><ExternalLink className="w-3.5 h-3.5 mr-2"/> Demo</Button>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="flex flex-col h-full border border-zinc-200 rounded-2xl p-6 bg-white hover:border-zinc-300 transition-colors shadow-sm">
              <h3 className="font-semibold text-zinc-900 mb-3">Sistema de Gestão — C# + SQL Server</h3>
              <p className="text-zinc-500 text-sm mb-6 flex-grow leading-relaxed">
                Backend para controle de estoque. Relatórios, procedures otimizadas e arquitetura em camadas.
              </p>
              <div className="flex gap-3 pt-4 border-t border-zinc-50">
                <Button variant="secondary" className="flex-1 text-xs py-2 px-0"><Github className="w-3.5 h-3.5 mr-2"/> GitHub</Button>
                <Button variant="secondary" className="flex-1 text-xs py-2 px-0 opacity-50 cursor-not-allowed"><ExternalLink className="w-3.5 h-3.5 mr-2"/> Demo</Button>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="flex flex-col h-full border border-zinc-200 rounded-2xl p-6 bg-white hover:border-zinc-300 transition-colors shadow-sm">
              <h3 className="font-semibold text-zinc-900 mb-3">Microserviço de Notificações</h3>
              <p className="text-zinc-500 text-sm mb-6 flex-grow leading-relaxed">
                Serviço assíncrono para envio de emails utilizando mensageria simples e Docker para orquestração.
              </p>
              <div className="flex gap-3 pt-4 border-t border-zinc-50">
                <Button variant="secondary" className="flex-1 text-xs py-2 px-0"><Github className="w-3.5 h-3.5 mr-2"/> GitHub</Button>
              </div>
            </div>

          </div>
        </Section>

        {/* 5. Formação */}
        <Section id="formacao" className="bg-zinc-50/50">
          <SectionTitle centered>Formação</SectionTitle>
          <div className="text-center">
            <p className="inline-block text-zinc-800 text-lg font-medium px-6 py-4 bg-white border border-zinc-100 rounded-xl shadow-sm">
              Desenvolvimento de Sistemas — <span className="text-zinc-500 font-normal">Etec (2023–2025)</span>
            </p>
          </div>
        </Section>

        {/* 6. Contato */}
        <Section id="contato">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-zinc-900 mb-10 tracking-tight">Vamos conversar?</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" className="text-sm px-6 py-3 w-full sm:w-auto">
                <MessageSquare className="w-4 h-4 mr-2 text-zinc-400"/> WhatsApp
              </Button>
              <Button variant="secondary" className="text-sm px-6 py-3 w-full sm:w-auto">
                <Mail className="w-4 h-4 mr-2 text-zinc-400"/> Email
              </Button>
              <Button variant="secondary" className="text-sm px-6 py-3 w-full sm:w-auto" href="https://github.com">
                <Github className="w-4 h-4 mr-2 text-zinc-400"/> GitHub
              </Button>
              <Button variant="secondary" className="text-sm px-6 py-3 w-full sm:w-auto" href="https://linkedin.com">
                <Linkedin className="w-4 h-4 mr-2 text-zinc-400"/> LinkedIn
              </Button>
            </div>
          </div>
        </Section>

      </main>

      {/* 7. Rodapé */}
      <footer className="py-8 border-t border-zinc-100 bg-white">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-400 font-light">
            © 2026 Gui — Todos os Direitos Reservados
          </p>
          <div className="flex gap-5">
            <a href="https://github.com" className="text-zinc-300 hover:text-zinc-900 transition-colors" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" className="text-zinc-300 hover:text-zinc-900 transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
