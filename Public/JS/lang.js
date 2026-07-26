function changeLanguage(lang) {
  const buttons = document.querySelectorAll(".lang-btn");

  buttons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

const textNodes = {
  eyebrow: document.getElementById("eyebrow"),
  eyebrowSeparator: document.getElementById("eyebrow_separator"),
  eyebrowBrasil: document.getElementById("eyebrow_brasil"),
  title: document.getElementById("title"),
  role: document.getElementById("role"),
  role2: document.getElementById("role2"),
  download: document.getElementById("download"),
  headerGithub: document.getElementById("header_github"),
  headerLinkedin: document.getElementById("header_linkedin"),
  langPtBtn: document.getElementById("lang_pt_btn"),
  langEnBtn: document.getElementById("lang_en_btn"),
  li1: document.getElementById("li1"),
  li2: document.getElementById("li2"),
  li3: document.getElementById("li3"),
  li4: document.getElementById("li4"),
  li5: document.getElementById("li5"),
  li6: document.getElementById("li6"),
  li7: document.getElementById("li7"),
  titleSummary: document.getElementById("title_summary"),
  summaryContent: document.getElementById("summary_content"),
  titleObjective: document.getElementById("title_objective"),
  objectiveContent: document.getElementById("objective_content"),
  titleSkills: document.getElementById("title_skills"),
  subtitleSkills: document.getElementById("subtitle_skills"),
  skillsHardTitle: document.getElementById("skills_hard_title"),
  skillsHardHint: document.getElementById("skills_hard_hint"),
  skillsSoftTitle: document.getElementById("skills_soft_title"),
  skillsSoftSubtitle: document.getElementById("skills_soft_subtitle"),
  softOrganizationLabel: document.getElementById("soft_organization_label"),
  softOrganizationValue: document.getElementById("soft_organization_value"),
  softFastlearningLabel: document.getElementById("soft_fastlearning_label"),
  softFastlearningValue: document.getElementById("soft_fastlearning_value"),
  softAutonomyLabel: document.getElementById("soft_autonomy_label"),
  softAutonomyValue: document.getElementById("soft_autonomy_value"),
  titleProjects: document.getElementById("title_projects"),
  subtitleProjects: document.getElementById("subtitle_projects"),
  project1Title: document.getElementById("project1_title"),
  project1Status: document.getElementById("project1_status"),
  project1Content: document.getElementById("project1_content"),
  project1Stack: document.getElementById("project1_stack"),
  project1Link: document.getElementById("project1_link"),
  project2Title: document.getElementById("project2_title"),
  project2Status: document.getElementById("project2_status"),
  project2Content: document.getElementById("project2_content"),
  project2Stack: document.getElementById("project2_stack"),
  project2Link: document.getElementById("project2_link"),
  project3Title: document.getElementById("project3_title"),
  project3Status: document.getElementById("project3_status"),
  project3Content: document.getElementById("project3_content"),
  project3Stack: document.getElementById("project3_stack"),
  project3Link: document.getElementById("project3_link"),
  project4Title: document.getElementById("project4_title"),
  project4Status: document.getElementById("project4_status"),
  project4Content: document.getElementById("project4_content"),
  project4Stack: document.getElementById("project4_stack"),
  project4Link: document.getElementById("project4_link"),
  moretxtProjects: document.getElementById("moretxt_projects"),
  titleAbout: document.getElementById("title_about"),
  subtitleAbout: document.getElementById("subtitle_about"),
  aboutContent: document.getElementById("about_content"),
  titleFormation: document.getElementById("title_formation"),
  subtitleFormation: document.getElementById("subtitle_formation"),
  titleFormationCurrent: document.getElementById("title_formation_current"),
  formationCurrent1Title: document.getElementById("formation_current_1_title"),
  formationCurrent1Text: document.getElementById("formation_current_1_text"),
  formationCurrent1Time: document.getElementById("formation_current_1_time"),
  formationCurrent2Title: document.getElementById("formation_current_2_title"),
  formationCurrent2Text: document.getElementById("formation_current_2_text"),
  formationCurrent2Time: document.getElementById("formation_current_2_time"),
  formationCurrent3Title: document.getElementById("formation_current_3_title"),
  formationCurrent3Text: document.getElementById("formation_current_3_text"),
  formationCurrent3Time: document.getElementById("formation_current_3_time"),
  titleFormationDone: document.getElementById("title_formation_done"),
  formationDone1Title: document.getElementById("formation_done_1_title"),
  formationDone1Text: document.getElementById("formation_done_1_text"),
  formationDone1Time: document.getElementById("formation_done_1_time"),
  formationDone1Certificate: document.getElementById(
    "formation_done_1_certificate",
  ),
  formationDone2Title: document.getElementById("formation_done_2_title"),
  formationDone2Text: document.getElementById("formation_done_2_text"),
  formationDone2Time: document.getElementById("formation_done_2_time"),
  formationDone2Certificate: document.getElementById(
    "formation_done_2_certificate",
  ),
  formationDone3Title: document.getElementById("formation_done_3_title"),
  formationDone3Text: document.getElementById("formation_done_3_text"),
  formationDone3Time: document.getElementById("formation_done_3_time"),
  titleFormationFuture: document.getElementById("title_formation_future"),
  formationFuture1Title: document.getElementById("formation_future_1_title"),
  formationFuture1Text: document.getElementById("formation_future_1_text"),
  formationFuture1Start: document.getElementById("formation_future_1_start"),
  formationFuture1End: document.getElementById("formation_future_1_end"),
  titleContact: document.getElementById("title_contact"),
  contactInvite: document.getElementById("contact_invite"),
  contactNote: document.getElementById("contact_note"),
  contactSubmit: document.getElementById("contact_submit"),
  footerCopyright: document.getElementById("footer_copyright"),
  footerGithub: document.getElementById("footer_github"),
  footerLinkedin: document.getElementById("footer_linkedin"),
  footerWhatsapp: document.getElementById("footer_whatsapp"),
  footerInstagram: document.getElementById("footer_instagram"),
  footerEmail: document.getElementById("footer_email"),
};

const translations = {
  pt: {
    eyebrow: "Currículo Web",
    eyebrowSeparator: "-",
    eyebrowBrasil: "Brasil",
    title: "Guilherme Andraz - <br /> Desenvolvedor Frontend",
    role: "HTML • CSS • JavaScript • API • Frontend • Frameworks • Banco de Dados",
    role2: "16 Anos • Salto SP • Remoto",
    download: "Baixar Currículo",
    headerGithub: "GitHub",
    headerLinkedin: "LinkedIn",
    langPtBtn: "",
    langEnBtn: "",
    li1: "Resumo Profissional",
    li2: "Objetivos",
    li3: "Habilidades",
    li4: "Projetos",
    li5: "Sobre",
    li6: "Formação",
    li7: "Contato",
    titleSummary: "Resumo Profissional",
    summaryContent:
      "Estudante de Análise e Desenvolvimento de Sistemas (ADS) focado em desenvolvimento frontend. Experiência pessoal prática com criação de sites (como este). Buscando oportunidades remotas para aplicar meus conhecimentos em projetos reais e evoluir tecnicamente.",
    titleObjective: "Objetivos",
    objectiveContent:
      "Meu Principal objetivo é aprender, primeiramente como desenvolvedor frontend, para ampliar meus conhecimentos, ganhar experiência prática e contribuir para projetos. Futuramente, desejo me tornar um profissional completo, desenvolver em backend e ser capaz de desenvolver soluções web eficientes.",
    titleSkills: "Minhas Habilidades",
    subtitleSkills: "O que eu já uso sei e o que uso.",
    skillsHardTitle: "Hard Skills",
    skillsHardHint: "Clique na skill para ver mais detalhes",
    skillsSoftTitle: "Soft Skills",
    skillsSoftSubtitle: "Habilidades Técnicas",
    softOrganizationLabel: "Organização",
    softOrganizationValue: "86%",
    softFastlearningLabel: "Aprendizado rápido",
    softFastlearningValue: "82%",
    softAutonomyLabel: "Autonomia",
    softAutonomyValue: "78%",
    titleProjects: "Projetos em Destaque",
    subtitleProjects:
      "Alguns repositórios do meu GitHub dos projetos que desenvolvi.",
    project1Title: "Garage do Edu",
    project1Status: "Status: Em Desenvolvimento",
    project1Content:
      "Garage do Edu é um projeto em construção para divulgar e gerenciar a venda de carros classicos. O projeto engloba uma landing page rica em interacao, paginas de login e cadastro, um painel administrativo para gestão de estoque e um backend em Node.js responsavel por autenticacao e CRUD de carros e usuarios, o projeto tem uma base sólida para seu desenvolvimento.",
    project1Stack: "Stack: HTML, CSS, JavaScript, Node.js, Express, MongoDB",
    project1Link: "Repositório",
    project2Title: "Help Desk",
    project2Status: "Status: Em Desenvolvimento",
    project2Content:
      "Este projeto é um Help Desk em ASP.NET Core MVC (C#), focado em exibir chamados de suporte. Ele possui: Listagem de chamados com título, descrição, status code, status e data de abertura. Tela de detalhes de cada chamado. Estrutura padrão MVC com Controllers, Models, Views e assets em wwwroot. Atualmente, os chamados são mantidos em lista estática em memória (simulando banco), então o sistema funciona como uma base inicial/didática para evolução futura (CRUD completo, persistência real, autenticação etc.).",
    project2Stack: "Stack: HTML, CSS, JavaScript, C#",
    project2Link: "Repositório",
    project3Title: "Landing Page",
    project3Status: "Status: Em Desenvolvimento",
    project3Content:
      "Este é o proprio site do meu curriculo (esse site): uma landing page responsiva com animações de entrada, seções bem definidas (resumo, habilidades, projetos, formacao e contato), cards interativos e layout focado em clareza e UX, o JavaScript tem uma boa interação com o DOM, o que permite fazer interações como a seção de habilidades por exemplo.",
    project3Stack: "Stack: HTML, CSS, JavaScript",
    project3Link: "Repositório",
    project4Title: "Easy Van",
    project4Status: "Status: Em Desenvolvimento",
    project4Content:
      "EasyVan é um sistema web MVC para gerenciar o transporte de vans. A proposta é facilitar o controle de rotas, horários, passageiros e motoristas, reduzindo erros operacionais e melhorando a organização do serviço. O projeto usa o template ASP.NET Core MVC",
    project4Stack:
      "Stack: HTML, CSS, JavaScript, C#, TypeScript, APIs de Autenticação, SQL",
    project4Link: "Repositório",
    moretxtProjects: "Mais repositórios atualizados no GitHub.",
    titleAbout: "Sobre Mim",
    subtitleAbout: "Um pouco sobre mim e minha trajetória.",
    aboutContent:
      "Meu nome é Guilherme Pereira Andraz, tenho 16 anos, moro em Salto - SP e sou estudante de Análise e Desenvolvimento de Sistemas (ADS). Meu foco atual é aprender, estou me aprofundando em tecnologias de desenvolvimento web, e estudando linguagens Backend, atualmente estou buscando oportunidades remotas para colaborar com minhas habilidades, ganhar experiência prática e aprender com as oportunidades. Pretendo me tornar um desenvolvedor backend em breve.",
    titleFormation: "Formação Acadêmica",
    subtitleFormation: "O que eu já estudei e o que estou estudando.",
    titleFormationCurrent: "Cursando Atualmente",
    formationCurrent1Title: "Cursando Atualmente - Ensino Médio + Técnico",
    formationCurrent1Text:
      "Ensino Médio com Habilitação Profissional de Técnico em Análise e Desenvolvimento de Sistemas - ETEC Martinho de Ciero",
    formationCurrent1Time: "2025-2027",
    formationCurrent2Title: "Cursando Atualmente - Curso Online",
    formationCurrent2Text:
      "Desenvolvendo em React.js - TIC em trilhas | Venturus",
    formationCurrent2Time: "Conclusão estimada: 2026",
    formationCurrent3Title: "Cursando Atualmente - Extracurricular",
    formationCurrent3Text:
      "Extracurricular de Pacote Office, Excel, Educação Financeira, PNL, Gestão de Carreiras, Libras | ITEMM",
    formationCurrent3Time: "Conclusão estimada: 2026",
    titleFormationDone: "Formação Concluída",
    formationDone1Title: "Curso Concluido - Curso Online",
    formationDone1Text: "Lógica de Programação Web - TIC em trilhas | Venturus",
    formationDone1Time: "2025",
    formationDone1Certificate: "Exibir Certificado",
    formationDone2Title: "Curso Concluido - Curso Online",
    formationDone2Text:
      "Fundamentos de Desenvolvimento Web - TIC em trilhas | Venturus",
    formationDone2Time: "2025",
    formationDone2Certificate: "Exibir Certificado",
    formationDone3Title:
      "Curso Concluido - Extracurricular",
    formationDone3Text:"Extracurricular de Pacote Office, Excel, Educação Financeira, PNL,Gestão de Carreiras, Libras | ITEMM",
    formationDone3Time: "2025",
    formationDone4Title:
      "Ensino Fundamental Concluido - Ensino Fundamental I & II",
    formationDone4Text: "Ensino Fundamental - CEUNSP Salto",
    formationDone4Time: "2024",
    titleFormationFuture: "Pretendo Cursar",
    formationFuture1Title: "Graduação em Análise e Desenvolvimento de Sistemas",
    formationFuture1Text: "FATEC",
    formationFuture1Start: "Inicio estimado: 2028",
    formationFuture1End: "Conclusão estimada: 2030",
    titleContact: "Contato",
    contactInvite:
      "Sinta-se à vontade para me enviar uma mensagem aqui pelo site, ficarei feliz em responder!",
    contactNote: "Minha API me entragará sua mensagem",
    contactSubmit: "Enviar Mensagem",
    footerCopyright: "© 2026 Guilherme Andraz - Todos os direitos reservados.",
    footerGithub: "GitHub",
    footerLinkedin: "LinkedIn",
    footerWhatsapp: "WhatsApp",
    footerInstagram: "Instagram",
    footerEmail: "Email",
  },
  en: {
    eyebrow: "Web Curriculum",
    eyebrowSeparator: "-",
    eyebrowBrasil: "Brazil",
    title: "Guilherme Andraz - <br /> Frontend Developer",
    role: "HTML • CSS • JavaScript • API • Frontend • Frameworks • Databases",
    role2: "16 Years Old • Salto SP • Remote",
    download: "Download Curriculum",
    headerGithub: "GitHub",
    headerLinkedin: "LinkedIn",
    langPtBtn: "",
    langEnBtn: "",
    li1: "Professional Summary",
    li2: "Objectives",
    li3: "Skills",
    li4: "Projects",
    li5: "About",
    li6: "Education",
    li7: "Contact",
    titleSummary: "Professional Summary",
    summaryContent:
      "Student of Systems Analysis and Development (ADS) focused on frontend development. Practical personal experience building websites like this one. Looking for remote opportunities to apply my knowledge in real projects and keep growing technically.",
    titleObjective: "Objectives",
    objectiveContent:
      "My main goal is to learn, first as a frontend developer, to expand my knowledge, gain practical experience, and contribute to projects. In the future, I want to become a well-rounded professional, develop backend skills, and be able to build efficient web solutions.",
    titleSkills: "My Skills",
    subtitleSkills: "What I already use and know.",
    skillsHardTitle: "Hard Skills",
    skillsHardHint: "Click a skill to see more details",
    skillsSoftTitle: "Soft Skills",
    skillsSoftSubtitle: "Technical Skills",
    softOrganizationLabel: "Organization",
    softOrganizationValue: "86%",
    softFastlearningLabel: "Fast Learning",
    softFastlearningValue: "82%",
    softAutonomyLabel: "Autonomy",
    softAutonomyValue: "78%",
    titleProjects: "Featured Projects",
    subtitleProjects: "Some GitHub repositories from projects I have built.",
    project1Title: "Garage do Edu",
    project1Status: "Status: In Development",
    project1Content:
      "Garage do Edu is a project under construction to showcase and manage used car sales. The project includes a feature-rich landing page, login and registration pages, an admin panel for inventory management, and a Node.js backend responsible for authentication and CRUD for cars and users. It already has a solid foundation for development.",
    project1Stack: "Stack: HTML, CSS, JavaScript, Node.js, Express, MongoDB",
    project1Link: "Repository",
    project2Title: "Help Desk",
    project2Status: "Status: In Development",
    project2Content:
      "This project is a Help Desk built with ASP.NET Core MVC (C#), focused on displaying support tickets. It includes: a list of tickets with title, description, status code, status, and open date; a details page for each ticket; standard MVC structure with Controllers, Models, Views and assets in wwwroot. Currently, tickets are stored in a static in-memory list (simulating a database), so the system serves as an initial/didactic base for future evolution (full CRUD, real persistence, authentication, etc.).",
    project2Stack: "Stack: HTML, CSS, JavaScript, C#",
    project2Link: "Repository",
    project3Title: "Landing Page",
    project3Status: "Status: In Development",
    project3Content:
      "This is my resume website itself: a responsive landing page with entrance animations, well-defined sections (summary, skills, projects, education and contact), interactive cards and a layout focused on clarity and UX. JavaScript is heavily used to interact with the DOM, which allows interactions like the skills section, for example.",
    project3Stack: "Stack: HTML, CSS, JavaScript",
    project3Link: "Repository",
    project4Title: "Easy Van",
    project4Status: "Status: In Development",
    project4Content:
      "EasyVan is an MVC web system for managing van transportation. The goal is to make route, schedule, passenger and driver management easier, reducing operational errors and improving service organization. The project uses the ASP.NET Core MVC template.",
    project4Stack:
      "Stack: HTML, CSS, JavaScript, C#, TypeScript, Authentication APIs, SQL",
    project4Link: "Repository",
    moretxtProjects: "More repositories updated on GitHub.",
    titleAbout: "About Me",
    subtitleAbout: "A little about me and my journey.",
    aboutContent:
      "My name is Guilherme Pereira Andraz, I am 16 years old, I live in Salto, SP, and I am a student of Systems Analysis and Development (ADS). My current focus is learning; I am deepening my knowledge of web development technologies and studying backend languages. I am currently looking for remote opportunities to contribute with my skills, gain practical experience and learn from the opportunities. I plan to become a backend developer soon.",
    titleFormation: "Education",
    subtitleFormation: "What I have already studied and what I am studying.",
    titleFormationCurrent: "Currently Studying",
    formationCurrent1Title: "Currently Studying - High School + Technical",
    formationCurrent1Text:
      "High School with Technical Certification in Systems Analysis and Development - ETEC Martinho de Ciero",
    formationCurrent1Time: "2025-2027",
    formationCurrent2Title: "Currently Studying - Online Course",
    formationCurrent2Text: "Developing in React.js - TIC em trilhas | Venturus",
    formationCurrent2Time: "Estimated completion: 2026",
    formationCurrent3Title: "Currently Studying - Extracurricular",
    formationCurrent3Text:
      "Extracurricular in Office Package, Excel, Financial Education, PNL, Career Management, Libras | ITEMM",
    formationCurrent3Time: "Estimated completion: 2026",
    titleFormationDone: "Completed Education",
    formationDone1Title: "Completed Course - Online Course",
    formationDone1Text: "Web Programming Logic - TIC em trilhas | Venturus",
    formationDone1Time: "2025",
    formationDone1Certificate: "View Certificate",
    formationDone2Title: "Completed Course - Online Course",
    formationDone2Text:
      "Web Development Fundamentals - TIC em trilhas | Venturus",
    formationDone2Time: "2025",
    formationDone2Certificate: "View Certificate",
    formationDone3Title:
      "Completed Elementary School - Elementary School I & II",
    formationDone3Text: "Elementary School - CEUNSP Salto",
    formationDone3Time: "2024",
    formationDone4Title:
      "Completed Elementary School - Elementary School I & II",
    formationDone4Text: "Elementary School - CEUNSP Salto",
    formationDone4Time: "2024",
    titleFormationFuture: "Planned Education",
    formationFuture1Title:
      "Bachelor's Degree in Systems Analysis and Development",
    formationFuture1Text: "FATEC",
    formationFuture1Start: "Estimated start: 2028",
    formationFuture1End: "Estimated completion: 2030",
    titleContact: "Contact",
    contactInvite:
      "Feel free to send me a message here through the site, I will be happy to respond!",
    contactNote: "My API will deliver your message",
    contactSubmit: "Send Message",
    footerCopyright: "© 2026 Guilherme Andraz - All rights reserved.",
    footerGithub: "GitHub",
    footerLinkedin: "LinkedIn",
    footerWhatsapp: "WhatsApp",
    footerInstagram: "Instagram",
    footerEmail: "Email",
  },
};

const htmlKeys = new Set(["title"]);

function applyTranslations(dictionary) {
  Object.entries(dictionary).forEach(([key, value]) => {
    const element = textNodes[key];
    if (!element) {
      console.warn(`Elemento para chave '${key}' não encontrado.`);
      return;
    }
    if (htmlKeys.has(key)) {
      element.innerHTML = value;
      return;
    }
    const lastChild = element.lastChild;
    if (lastChild && lastChild.nodeType === Node.TEXT_NODE) {
      lastChild.textContent = value;
    } else {
      element.textContent = value;
    }
  });
}

function changeLanguage(lang) {
  const buttons = document.querySelectorAll(".lang-btn");
  buttons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function changelanguage_por() {
  applyTranslations(translations.pt);
}

function changelanguage_eng() {
  applyTranslations(translations.en);
}

window.changeLanguage = changeLanguage;
window.changelanguage_por = changelanguage_por;
window.changelanguage_eng = changelanguage_eng;
window.pt_br = translations.pt;
window.eng = translations.en;

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    changelanguage_por();
  });
} else {
  changelanguage_por();
}