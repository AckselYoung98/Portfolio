// Mock data for Acksel Young's Portfolio
import photoLocal from './Foto.png';

export const personalInfo = {
  name: "Acksel Young Oliveira Campos",
  title: "Desenvolvedor .NET | Analista de Suporte",
  tagline: "Estudante de Engenharia de Software focado em soluções escaláveis. Desenvolvedor em início de carreira com experiência sólida como Analista de Suporte em ambiente de fábrica. Busco aplicar conhecimentos técnicos em C#, .NET e desenvolvimento web para criar soluções eficientes e escaláveis.",
  // Use a imagem local `src/Foto.png` (sem fundo) para evitar o padrão quadriculado
  photo: photoLocal,
  email: "ackselwebsolutions@gmail.com",
  linkedin: "https://www.linkedin.com/in/acksel-young/",
  github: "https://github.com/AckselYoung98",
  whatsapp: "34996677769",
};

export const skills = [
  {
    id: 1,
    category: "Backend",
    items: [
      { name: "C#", level: "intermediate", icon: "code" },
      { name: ".NET Core", level: "intermediate", icon: "box" },
      { name: "ASP.NET", level: "intermediate", icon: "server" },
      { name: "Entity Framework", level: "beginner", icon: "database" }
    ]
  },
  {
    id: 2,
    category: "Frontend",
    items: [
      { name: "HTML5", level: "intermediate", icon: "file-code" },
      { name: "CSS3", level: "intermediate", icon: "palette" },
      { name: "JavaScript", level: "beginner", icon: "code-2" }
    ]
  },
  {
    id: 3,
    category: "Ferramentas & Outras",
    items: [
      { name: "Git", level: "intermediate", icon: "git-branch" },
      { name: "SQL Server", level: "intermediate", icon: "database" },
      { name: "Visual Studio", level: "intermediate", icon: "terminal" },
      { name: "Suporte Técnico", level: "advanced", icon: "headphones" }
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "Sistema de Gerenciamento de Tarefas",
    description: "API RESTful desenvolvida em ASP.NET Core para gerenciamento de tarefas com autenticação JWT e persistência em SQL Server. Implementa operações CRUD completas e validações robustas.",
    technologies: ["C#", ".NET Core", "SQL Server", "JWT", "Entity Framework"],
    features: [
      "Autenticação e autorização com JWT",
      "CRUD completo de tarefas",
      "Filtros e paginação",
      "Validação de dados com FluentValidation"
    ],
    github: "#",
    demo: null,
    status: "Em desenvolvimento",
    icon: "list-checks"
  },
  {
    id: 2,
    title: "API de E-commerce",
    description: "Backend para plataforma de e-commerce seguindo princípios de Clean Architecture. Inclui gestão de produtos, carrinho de compras e processamento de pedidos.",
    technologies: ["C#", "ASP.NET Core", "Clean Architecture", "SQL Server"],
    features: [
      "Arquitetura em camadas",
      "Gestão de produtos e categorias",
      "Carrinho de compras",
      "Sistema de pedidos"
    ],
    github: "#",
    demo: null,
    status: "Planejado",
    icon: "shopping-cart"
  },
  {
    id: 3,
    title: "Dashboard Analítico",
    description: "Aplicação web com Blazor WebAssembly para visualização de dados e relatórios em tempo real. Interface responsiva com gráficos interativos e filtros dinâmicos.",
    technologies: ["Blazor", "C#", ".NET", "Chart.js", "SignalR"],
    features: [
      "Gráficos interativos",
      "Atualizações em tempo real",
      "Exportação de relatórios",
      "Interface responsiva"
    ],
    github: "#",
    demo: null,
    status: "Planejado",
    icon: "bar-chart"
  }
];

export const experience = [
  {
    id: 1,
    title: "Analista de Suporte",
    company: "Ambiente Industrial",
    period: "Atual",
    description: "Responsável por suporte técnico em ambiente de fábrica, troubleshooting de sistemas e atendimento aos usuários.",
    responsibilities: [
      "Atendimento e resolução de chamados técnicos",
      "Manutenção de sistemas operacionais",
      "Suporte em hardware e software",
      "Documentação de processos"
    ]
  }
];

export const education = [
  {
    id: 1,
    degree: "Engenharia de Software",
    institution: "Universidade",
    period: "Cursando",
    status: "Em andamento"
  }
];