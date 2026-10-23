document.addEventListener("DOMContentLoaded", function () {
  const agentData = JSON.parse(localStorage.getItem("currentAgent"));
  const agentCode = localStorage.getItem("currentAgentCode");

  if (!agentData) {
    window.location.href = "login.html";
    return;
  }

  document.getElementById("agentName").textContent = agentData.name;
  document.getElementById("agentCode").textContent = "CÓDIGO: " + agentCode;
  document.getElementById("agentLevel").textContent = "NÍVEL: " + agentData.level;

  const missions = [
    {
      code: "EXC-OP-0741",
      codename: "Vernissage",
      status: "EM ANDAMENTO",
      access: "PARCIAL",
      clickable: true,
      location: "San Francisco, Califórnia",

      summary: "Investigação ativa sobre alterações emocionais associadas a material pigmentado de origem ainda não confirmada.",

      objectives: [
        "Identificar a origem do pigmento.",
        "Mapear indivíduos afetados.",
        "Determinar riscos de exposição prolongada.",
        "Localizar possíveis responsáveis pela distribuição do material."
      ],

      team: [
        "Equipe Taj Mahal"
      ],

      agents: [
        "Alex Volkov",
        "Ash",
        "Clive Müller",
        "Joana Vianey",
        "Maurice M. Mahmoudi"
      ],

      images: [
        // Exemplo futuro:
        // "assets/chroma/pigmento.jpg",
        // "assets/chroma/galeria.jpg"
      ],

      miroUrl: "",

      logs: [
        "09:42 // Relatório preliminar recebido.",
        "09:17 // Amostras pigmentadas encaminhadas para análise.",
        "08:51 // Ocorrência classificada como operação ativa."
      ]
    },

    {
      code: "EXC-OP-0319",
      codename: "Maré Alta",
      status: "ARQUIVADA",
      access: "LIBERADO",
      clickable: true,
      location: "Costa Leste dos Estados Unidos",
      summary: "Operação concluída. Dados movidos para arquivo histórico.",
      logs: [
        "Operação encerrada.",
        "Relatório final arquivado.",
        "Acesso liberado para agentes autorizados."
      ]
    },

    {
      code: "EXC-OP-0842",
      codename: "██████████",
      status: "CLASSIFICADO",
      access: "NEGADO",
      clickable: false
    },

    {
      code: "EXC-OP-1027",
      codename: "██████████",
      status: "CLASSIFICADO",
      access: "NEGADO",
      clickable: false
    }
  ];

  const incidents = [
    {
      code: "EXC-INC-0001",
      title: "Residência Abandonada, Minas Gerais",
      status: "ENCERRADO",
      threatLevel: "CONTIDA",
      location: "Zona rural, interior de Minas Gerais",
      date: "08/02",
      summary: "Primeiro relato de atividade confirmada na região — moradores reportaram ruídos e vultos recorrentes numa residência desocupada há anos. Investigação de campo confirmou presença de entidade não catalogada, posteriormente neutralizada.",
      archived: true
    },
    {
      code: "EXC-INC-0002",
      title: "Avistamentos na Costa Leste",
      status: "ESCALONADO",
      threatLevel: "MÉDIA",
      location: "Litoral da Flórida, Estados Unidos",
      date: "19/03",
      summary: "Pescadores e banhistas relataram criatura marinha de grande porte com comportamento anômalo. O padrão recorrente de ataques levou à abertura de operação formal.",
      relatedMission: "Maré Alta (EXC-OP-0319)",
      archived: true
    },
    {
      code: "EXC-INC-0003",
      title: "Colapsos Emocionais Associados a Pigmento",
      status: "ESCALONADO",
      threatLevel: "ALTA",
      location: "San Francisco, Califórnia",
      date: "02/05",
      summary: "Múltiplos casos de colapso emocional súbito associados ao contato com material pigmentado de origem não identificada. Escalado para operação ativa diante do risco de exposição contínua.",
      relatedMission: "Vernissage (EXC-OP-0741)",
      archived: true
    },
    {
      code: "EXC-INC-0004",
      title: "Transmissões Anômalas em Rádio Desativada",
      status: "ENCERRADO",
      threatLevel: "DESCARTADA",
      location: "Estação de rádio desativada, interior",
      date: "27/01",
      summary: "Moradores reportaram transmissões não identificadas captadas por rádios antigos. Perícia técnica rastreou o fenômeno a interferência atmosférica recorrente na região; sem componente paranormal confirmado.",
      archived: true
    },
    {
      code: "EXC-INC-0005",
      title: "Mortandade Animal em Propriedade Rural",
      status: "EM ANÁLISE",
      threatLevel: "INDETERMINADA",
      location: "Propriedade rural, região não divulgada",
      date: "15/06",
      summary: "Produtor rural relatou morte súbita de parte do rebanho sem sinais de predação ou doença aparente. Amostras coletadas aguardam laudo do Scriptorium."
    },
    {
      code: "EXC-INC-0006",
      title: "Figura Humanoide em Linha de Metrô",
      status: "AGUARDANDO CLASSIFICAÇÃO",
      threatLevel: "INDETERMINADA",
      location: "Linha de metrô, área urbana",
      date: "03/07",
      summary: "Passageiros relataram figura humanoide parada sobre os trilhos segundos antes da chegada de uma composição, sem registro em câmeras de segurança. Caso aguarda triagem."
    },
    {
      code: "EXC-INC-0007",
      title: "Objeto Não Identificado em Naufrágio",
      status: "AGUARDANDO CLASSIFICAÇÃO",
      threatLevel: "INDETERMINADA",
      location: "Sítio de naufrágio, águas internacionais",
      date: "21/07",
      summary: "Equipe de resgate recuperou objeto de origem desconhecida durante operação de salvamento. Material foi isolado e aguarda análise."
    },
    {
      code: "EXC-INC-0008",
      title: "Interferência Eletromagnética em Torre de Transmissão",
      status: "CONTIDO",
      threatLevel: "BAIXA",
      location: "Torre de transmissão regional",
      date: "09/08",
      summary: "Picos de interferência eletromagnética sem causa técnica identificada afetaram comunicações locais. Fenômeno monitorado, sem expansão ou recorrência significativa."
    },
    {
      code: "EXC-INC-0009",
      title: "Movimentação Suspeita de Empresa de Fachada",
      status: "EM MONITORAMENTO",
      threatLevel: "MÉDIA",
      location: "Não divulgado",
      date: "30/08",
      summary: "Registros financeiros apontam movimentação atípica de uma empresa de fachada com possíveis ligações a redes de interesse ainda não confirmadas. Investigação discreta em curso."
    }
  ];

  const dossiers = [
    {
      code: "EXC-DOS-0001",
      title: "Entidade Residencial",
      type: "ENTIDADE",
      status: "NEUTRALIZADA",
      summary: "Entidade não catalogada que ocupava uma residência desocupada em Minas Gerais, manifestando-se através de ruídos e vultos recorrentes. Neutralizada após intervenção de campo.",
      linked: "EXC-INC-0001"
    },
    {
      code: "EXC-DOS-0002",
      title: "Criatura Litorânea",
      type: "ENTIDADE",
      status: "NEUTRALIZADA",
      summary: "Criatura marinha de grande porte com comportamento predatório anômalo, avistada ao longo do litoral da Flórida. Contida ao fim da operação Maré Alta.",
      linked: "EXC-OP-0319"
    },
    {
      code: "EXC-DOS-0003",
      title: "Corpo do Sentir",
      type: "ENTIDADE",
      status: "ATIVA",
      summary: "Entidade alimentada por energia emocional coletiva, associada ao material pigmentado distribuído na operação Vernissage. Origem e extensão total ainda sob investigação.",
      linked: "EXC-OP-0741"
    },
    {
      code: "EXC-DOS-0004",
      title: "Chupa-cabra",
      type: "ENTIDADE",
      status: "CONTIDA",
      summary: "Criatura associada a ataques a animais de criação na região do Maine. O encontro resultou no recrutamento do agente Hector Ignacius.",
      linked: ""
    },
    {
      code: "EXC-DOS-0005",
      title: "Residência Abandonada, Minas Gerais",
      type: "LOCAL",
      status: "MONITORADO",
      summary: "Imóvel desocupado onde foi registrada a primeira atividade confirmada da Fundação na região. Mantido sob observação periódica.",
      linked: "EXC-INC-0001"
    },
    {
      code: "EXC-DOS-0006",
      title: "Litoral da Flórida",
      type: "LOCAL",
      status: "LIBERADO",
      summary: "Trecho costeiro da Costa Leste dos Estados Unidos, cenário da operação Maré Alta. Sem atividade anômala registrada desde o encerramento do caso.",
      linked: "EXC-OP-0319"
    },
    {
      code: "EXC-DOS-0007",
      title: "Galeria de Arte, San Francisco",
      type: "LOCAL",
      status: "SOB VIGILÂNCIA",
      summary: "Espaço expositivo central na distribuição do material pigmentado investigado na operação Vernissage. Monitoramento ativo da equipe Taj Mahal.",
      linked: "EXC-OP-0741"
    },
    {
      code: "EXC-DOS-0008",
      title: "Iluminatti",
      type: "ORGANIZAÇÃO",
      status: "HOSTIL",
      summary: "Conspiração de abrangência internacional que busca uma nova ordem mundial por meios paranormais. Principal adversária institucional da Fundação Excalibur.",
      linked: ""
    },
    {
      code: "EXC-DOS-0009",
      title: "Chroma Importação e Pigmentos Ltda.",
      type: "ORGANIZAÇÃO",
      status: "EM INVESTIGAÇÃO",
      summary: "Empresa de fachada identificada na cadeia de distribuição do material pigmentado associado à operação Vernissage. Suspeita de vínculo com a Iluminatti ainda não confirmada oficialmente.",
      linked: "EXC-INC-0009"
    }
  ];

  const agents = [
  {
    code: "EXC-0204",
    name: "Lina Ward",
    status: "ATIVO",
    access: "COMANDO",
    team: "Olho de Avalon",
    specialty: "Infiltração Digital",

    profile:
      "Lina é a filha de um delegado de polícia que costumava cooperar com um dos nossos agentes. Entrou na Fundação Excalibur com cerca de 17 anos após ser salva por este agente da organização. Foi designada a uma equipe experimental formada por ele e se mostrou muito promissora, atuando no fornecimento de informações e apoio tecnológico. Perdeu os movimentos das pernas após um ataque de ocultista perigoso.",

    missions: [],

    restricted: {
      access: "COMANDO",
      evaluation:
        "Apresenta desempenho elevado ao agir em momentos de crise, mantendo a calma e procurando a melhor forma de resolver. Sempre prestativa e gentil com os agentes.",
      notes: "",
      observations: ""
    }
  },

 {
    code: "EXC-0312",
    name: "Vilma Binkley",
    status: "ATIVO",
    access: "ANALISTA",
    team: "Gangue do Mistério",
    specialty: "Investigação",

    profile:
      "Vilma Binkley é uma jovem uma agente especialista em investigação, capaz de enxergar coisas que os outros não vêem (menos quando seus óculos caem) Quando ainda estava na escola ela e seus grupo de amigos tinham um club de investigação local visando desmascarar o paranormal. Em uma de suas investigações o grupo se deparou com algo que não estavam preparados. Encontraram um cãozinho que estava fugindo de algo. Um dos integrantes pegou o cão e acabou descobrindo que ele era mais inteligente que o normal... Ele falava. Em meio a esta situação avistamentos de criaturas no local. Durante as investigações perceberam que não era só alguém espalhando rumores ou fantasiado, o que levou eles a correr risco quando a criatura foi para cima deles. Para sorte das crianças um agente da Excalibur estava no local e os ajudou. Após serem salvos, se recusaram a deixar o cão ser levado até a Excalibur. Hoje o grupo atua como uma das principais equipes de campo, conseguindo manter em segredo a existência do paranormal para a grande mídia.",

    missions: [],

    restricted: {
      access: "COMANDO",
      evaluation:
        "",
      notes: "",
      observations: ""
    }
  },

 {
    code: "EXC-0313",
    name: "Freduardo James",
    status: "ATIVO",
    access: "AGENTE",
    team: "Gangue do Mistério",
    specialty: "Combatente/Armadilheiro",

    profile:
      "Freduardo James, ou apenas Fred para os mais próximos, é um jovem agente especialista em criar armadilhas (quase) infalíveis. Quando ainda estava na escola ela e seus grupo de amigos tinham um club de investigação local visando desmascarar o paranormal. Em uma de suas investigações o grupo se deparou com algo que não estavam preparados. Encontraram um cãozinho que estava fugindo de algo. Um dos integrantes pegou o cão e acabou descobrindo que ele era mais inteligente que o normal... Ele falava. Em meio a esta situação avistamentos de criaturas no local. Durante as investigações perceberam que não era só alguém espalhando rumores ou fantasiado, o que levou eles a correr risco quando a criatura foi para cima deles. Para sorte das crianças um agente da Excalibur estava no local e os ajudou. Após serem salvos, se recusaram a deixar o cão ser levado até a Excalibur. Hoje o grupo atua como uma das principais equipes de campo, conseguindo manter em segredo a existência do paranormal para a grande mídia.",

    missions: [],

    restricted: {
      access: "COMANDO",
      evaluation:
        "",
      notes: "",
      observations: ""
    }
  },

 {
    code: "EXC-0314",
    name: "Delphina Bell",
    status: "ATIVO",
    access: "AGENTE",
    team: "Gangue do Mistério",
    specialty: "Negociação/Isca",

    profile:
      "Delphine Bell, é uma jovem agente especialista em criar distrações (a donzela indefesa), negociação e combate marcial. Quando ainda estava na escola ela e seus grupo de amigos tinham um club de investigação local visando desmascarar o paranormal. Em uma de suas investigações o grupo se deparou com algo que não estavam preparados. Encontraram um cãozinho que estava fugindo de algo. Um dos integrantes pegou o cão e acabou descobrindo que ele era mais inteligente que o normal... Ele falava. Em meio a esta situação avistamentos de criaturas no local. Durante as investigações perceberam que não era só alguém espalhando rumores ou fantasiado, o que levou eles a correr risco quando a criatura foi para cima deles. Para sorte das crianças um agente da Excalibur estava no local e os ajudou. Após serem salvos, se recusaram a deixar o cão ser levado até a Excalibur. Hoje o grupo atua como uma das principais equipes de campo, conseguindo manter em segredo a existência do paranormal para a grande mídia.",

    missions: [],

    restricted: {
      access: "COMANDO",
      evaluation:
        "",
      notes: "",
      observations: ""
    }
  },

 {
    code: "EXC-0315",
    name: "Norberto 'Linguiça' Rogério",
    status: "ATIVO",
    access: "AGENTE",
    team: "Gangue do Mistério",
    specialty: "Ocultista",

    profile:
      "Norberto Rogério, ou Linguiça, como é mais conhecido por seus amigo é uma jovem agente que se dedicou em conhecimentos ocultistas, sempre acreditando que o paranormal existia, mas sem grandes envolvimentos até se tornar um agente. Quando ainda estava na escola ela e seus grupo de amigos tinham um club de investigação local visando desmascarar o paranormal. Em uma de suas investigações o grupo se deparou com algo que não estavam preparados. Encontraram um cãozinho que estava fugindo de algo. Um dos integrantes pegou o cão e acabou descobrindo que ele era mais inteligente que o normal... Ele falava. Em meio a esta situação avistamentos de criaturas no local. Durante as investigações perceberam que não era só alguém espalhando rumores ou fantasiado, o que levou eles a correr risco quando a criatura foi para cima deles. Para sorte das crianças um agente da Excalibur estava no local e os ajudou. Após serem salvos, se recusaram a deixar o cão ser levado até a Excalibur. Hoje o grupo atua como uma das principais equipes de campo, conseguindo manter em segredo a existência do paranormal para a grande mídia.",

    missions: [],

    restricted: {
      access: "COMANDO",
      evaluation:
        "",
      notes: "",
      observations: ""
    }
  },
    
  {
    code: "EXC-1013",
    name: "Clive Müller",
    status: "EM CAMPO",
    access: "AGENTE",
    team: "Taj Mahal",
    specialty: "Tecnologia / Análise Digital",
    profile: "Clive estava na semana de congresso universitário quando encontrou uma placa de circuitos que parecia ser tecnologia elevada. Ao tentar usá-la num computador um ser de energia se manifestou. O rapaz não se lembra de nada depois disso, apenas que a maioria de seus amigos foram mortos e sua namorada desapareceu. A criatura parace ter uma rixa pessoal com ele. Foi recrutado para excalibur após realizar diversas buscas na internet.",
    missions: [
      "Teatro de Bonecas",
      "Sea of Madness",
      "Vernissage"
    ],
    restricted: {
      access: "COMANDO",
      evaluation: "",
      notes: "",
      observations: ""
    }
  },

  {
    code: "EXC-1214",
    name: "Gonzales ",
    status: "ATIVO",
    access: "COMANDO",
    team: "",
    specialty: "Especialista/Distribuição de missão",
    profile: "",
    missions: [],
    restricted: {
      access: "COMANDO",
      evaluation: "",
      notes: "",
      observations: ""
    }
  },
    
  {
    code: "EXC-1249",
    name: "Max Park",
    status: "ATIVO",
    access: "ANALISTA",
    team: "Scriptorium",
    specialty: "Ocultismo",
    profile: "",
    missions: [],
    restricted: {
      access: "COMANDO",
      evaluation: "",
      notes: "",
      observations: ""
    }
  },

  {
    code: "EXC-1288",
    name: "Marcus Akello",
    status: "ATIVO",
    access: "ANALISTA",
    team: "",
    specialty: "Combate a curta distância",
    profile: "Originário de Uganda",
    missions: [],
    restricted: {
      access: "COMANDO",
      evaluation: "",
      notes: "",
      observations: ""
    }
  },

  {
    code: "EXC-1297",
    name: "Jules",
    status: "ATIVO",
    access: "ANALISTA",
    team: "",
    specialty: "Ocultista de campo/Energia",
    profile: "",
    missions: [],
    restricted: {
      access: "COMANDO",
      evaluation: "",
      notes: "",
      observations: ""
    }
  },

  {
    code: "EXC-1314",
    name: "Jordan",
    status: "ATIVO",
    access: "ANALISTA",
    team: "",
    specialty: "Negociação",
    profile: "",
    missions: [],
    restricted: {
      access: "COMANDO",
      evaluation: "",
      notes: "",
      observations: ""
    }
  },
    
   {
    code: "EXC-1288",
    name: "Marcus Akello",
    status: "ATIVO",
    access: "ANALISTA",
    team: "",
    specialty: "Combate a curta distância",
    profile: "Originário de Uganda",
    missions: [],
    restricted: {
      access: "COMANDO",
      evaluation: "",
      notes: "",
      observations: ""
    }
  },
    
  {
    code: "EXC-2146",
    name: "Elora Avalon",
    status: "EM CAMPO",
    access: "AGENTE",
    team: "Não designada",
    specialty: "Operações de Campo",
    profile: "Elora Avalon era uma policial dedicada na Escócia, dedicada a encontrar seus pais desaparecidos, estava sempre atenta a qualquer coisa que fosse estranha. Ela acompanhava o blog de uma parapsicóloga que relatava histórias estranhas. Quando não houve nenhum post em semanas, decidiu investigar e foi quando descobriu sobre a existêcia do paranormal e foi recrutada por William",
    missions: [
      "Sonhos Eternos",
      "Férias Tropicais",
      "Gostosuras ou Travessuras",
      "Presa de prata",
      "Operação Cripta"
    ],
    restricted: {
      access: "COMANDO",
      evaluation: "",
      notes: "",
      observations: ""
    }
  },

  {
    code: "EXC-2147",
    name: "Joana Vianney",
    status: "EM CAMPO",
    access: "AGENTE",
    team: "Taj Mahal",
    specialty: "Campo / Ocultismo",
    profile: "A médica forense, Joana Vianney, tinha uma vida tranquila, mas algo sempre a incomodou. Lendo um blog de uma parapsicóloga que relatava histórias estranhas começou a investigar sobre a origem delas, até que a autora desaparece e Joana decide ir investigar. Se deparando com um caso onde pessoas entravam em coma permanente, seu primeiro contato com o paranormal. Foi recrutada por William após o ocorrido",
    missions: [
      "Sonhos Eternos",
      "Férias Tropicais",
      "Gostosuras ou Travessuras",
      "Presa de prata",
      "Sea of Madness",
      "Vernissage"
    ],
    restricted: {
      access: "COMANDO",
      evaluation: "",
      notes: "",
      observations: ""
    }
  },

  {
    code: "EXC-2148",
    name: "John Tiltor",
    status: "CAÍDO",
    access: "AGENTE",
    team: "Prélude",
    specialty: "Campo / Ocultismo",
    profile: "John Tiltor era um jornalista que teve seu primeiro contato com o paranormal ainda muito jovem, dentro de sua própria casa. Só veio se tornar um agente quando foi investigar casos de pessoas que pegavam no sono e não mais acordavam. Foi recrutado por William após esta missão. Caído em missão, durante o confronto com uma criatura não identificada",
    missions: [
      "Sonhos Eternos",
      "Férias Tropicais",
      "Gostosuras ou Travessuras",
      "Presa de prata"
    ],
    restricted: {
      access: "COMANDO",
      evaluation: "",
      notes: "",
      observations: ""
    }
  },

  {
    code: "EXC-2189",
    name: "Hector Ignacius",
    status: "CAÍDO",
    access: "AGENTE",
    team: "Prélude",
    specialty: "Campo / Infiltração",
    profile: "Hector Ignatius era um criminoso da américa do sul, que foi recrutado pelo agente Santiago Hernandez durante um incidente com uma criatura que foi atribuído o nome de chupa-cabra. Logo recebeu alguns treinamento, foi alocado na equipe Prélude que foi enviada para investigar acontecimentos no Maine. Caído em missão, durante o confronto com uma criatura não identificada",
    missions: [
      "Gostosuras ou Travessuras",
      "Presa de prata"
    ],
    restricted: {
      access: "COMANDO",
      evaluation: "",
      notes: "",
      observations: ""
    }
  },

{
  code: "EXC-4044",
  name: "Akane Hayashi",
  status: "████████",
  access: "COMANDO",
  team: "████████",
  specialty: "Combate",

  isLegend: true,

  profile:
    "A existência desta agente nunca foi oficialmente confirmada pela Fundação Excalibur. Rumores sobre sua atuação circulam entre agentes veteranos há anos, embora nenhum registro fotográfico ou testemunho formal tenha sido autenticado.",

  missions: [
    "████████",
    "████████",
    "████████"
  ],

  restricted: {
    access: "DIRETORIA",
    evaluation: "Registro indisponível.",
    notes: "Arquivo mantido sob inconsistência permanente.",
    observations: "Este registro não deveria aparecer para agentes de campo."
  }
},
    
  {
    code: "EXC-7166",
    name: "Maurice M. Mahmoudi",
    status: "ATIVO",
    access: "AGENTE",
    team: "Taj Mahal",
    specialty: "Operações Táticas",
    profile: "",
    missions: [
      "Teatro de Bonecas",
      "Sea of Madness",
      "Vernissage"
    ],
    restricted: {
      access: "COMANDO",
      evaluation: "",
      notes: "",
      observations: ""
    }
  },

  {
    code: "EXC-7167",
    name: "Ash",
    status: "EM CAMPO",
    access: "AGENTE",
    team: "Taj Mahal",
    specialty: "Ocultismo",
    profile: "",
    missions: [
      "Teatro de Bonecas",
      "Sea of Madness",
      "Vernissage"
    ],
    restricted: {
      access: "COMANDO",
      evaluation: "",
      notes: "",
      observations: ""
    }
  },

  {
    code: "EXC-7168",
    name: "Robert Drake",
    status: "COMPROMETIDO",
    access: "AGENTE",
    team: "Taj Mahal",
    specialty: "Combate Tático",
    profile: "",
    missions: [
      "Teatro de Bonecas",
      "Sea of Madness"
    ],
    restricted: {
      access: "COMANDO",
      evaluation: "",
      notes: "",
      observations: ""
    }
  },

  {
    code: "EXC-7175",
    name: "Isabella Ramos",
    status: "EM CAMPO",
    access: "AGENTE",
    team: "Taj Mahal",
    specialty: "Ocultista / Pintura",
    profile: "",
    missions: [],
    restricted: {
      access: "COMANDO",
      evaluation: "",
      notes: "",
      observations: ""
    }
  },

  {
    code: "EXC-7812",
    name: "Alex Volkov",
    status: "EM CAMPO",
    access: "AGENTE",
    team: "Taj Mahal",
    specialty: "Operações de Campo",
    profile: "",
    missions: [
      "Sea of Madness",
      "Vernissage"
    ],
    restricted: {
      access: "COMANDO",
      evaluation: "",
      notes: "",
      observations: ""
    }
  }
];

  const contentArea = document.getElementById("content-area");
  const overviewBtn = document.getElementById("overviewBtn");
  const missionsBtn = document.getElementById("missionsBtn");
  const incidentsBtn = document.getElementById("incidentsBtn");
  const dossiersBtn = document.getElementById("dossiersBtn");
  const agentsBtn = document.getElementById("agentsBtn");
  const menuButtons = document.querySelectorAll(".menu-button");

  const missionModal = document.getElementById("missionModal");
  const closeMissionModal = document.getElementById("closeMissionModal");

  const incidentModal = document.getElementById("incidentModal");
  const closeIncidentModal = document.getElementById("closeIncidentModal");

  const dossierModal = document.getElementById("dossierModal");
  const closeDossierModal = document.getElementById("closeDossierModal");

  const agentModal = document.getElementById("agentModal");
  const closeAgentModal = document.getElementById("closeAgentModal");

  let akaneTimers = [];
  let activeDossierType = "ENTIDADE";
  
  const overviewContent = contentArea.innerHTML;

  function setActiveButton(activeButton) {
    menuButtons.forEach(function (button) {
      button.classList.remove("active");
    });

    activeButton.classList.add("active");
  }

  function renderMissionsTable() {
    const rows = missions.map(function (mission) {
      const rowClass = mission.clickable ? "clickable-row" : "locked-row";

      return `
        <tr class="${rowClass}" data-code="${mission.code}">
          <td>${mission.code}</td>
          <td>${mission.codename}</td>
          <td>${mission.status}</td>
          <td>${mission.access}</td>
        </tr>
      `;
    }).join("");

    contentArea.innerHTML = `
      <section class="database-panel">
        <div class="panel-header">
          <h2>MISSÕES OPERACIONAIS</h2>
          <span>EXCALIBUR DATABASE</span>
        </div>

        <table class="mission-table">
          <thead>
            <tr>
              <th>CÓDIGO</th>
              <th>CODINOME</th>
              <th>STATUS</th>
              <th>ACESSO</th>
            </tr>
          </thead>

          <tbody>
            ${rows}
          </tbody>
        </table>
      </section>
    `;

    document.querySelectorAll(".clickable-row").forEach(function (row) {
      row.addEventListener("click", function () {
        const code = row.getAttribute("data-code");
        const mission = missions.find(function (item) {
          return item.code === code;
        });

        openMissionModal(mission);
      });
    });
  }

  function renderIncidentsList() {
    const rows = incidents.map(function (incident) {
      return `
        <tr class="clickable-row" data-code="${incident.code}">
          <td>${incident.code}</td>
          <td>${incident.title}</td>
          <td>${incident.status}</td>
        </tr>
      `;
    }).join("");

    contentArea.innerHTML = `
      <section class="database-panel">
        <div class="panel-header">
          <h2>INCIDENTES REGISTRADOS</h2>
          <span>EXCALIBUR OCCURRENCE LOG</span>
        </div>

        <table class="mission-table">
          <thead>
            <tr>
              <th>CÓDIGO</th>
              <th>DESIGNAÇÃO</th>
              <th>STATUS</th>
            </tr>
          </thead>

          <tbody>
            ${rows}
          </tbody>
        </table>
      </section>
    `;

    document.querySelectorAll(".clickable-row").forEach(function (row) {
      row.addEventListener("click", function () {
        const code = row.getAttribute("data-code");
        const incident = incidents.find(function (item) {
          return item.code === code;
        });

        if (incident) {
          openIncidentModal(incident);
        }
      });
    });
  }

  function openIncidentModal(incident) {
    document.getElementById("modalIncidentCode").textContent = incident.code;
    document.getElementById("modalIncidentName").textContent = incident.title;
    document.getElementById("modalIncidentStatus").textContent = incident.status;
    document.getElementById("modalIncidentThreat").textContent = incident.threatLevel || "INDETERMINADA";
    document.getElementById("modalIncidentLocation").textContent = incident.location || "NÃO DISPONÍVEL";
    document.getElementById("modalIncidentDate").textContent = incident.date || "NÃO DISPONÍVEL";
    document.getElementById("modalIncidentSummary").textContent = incident.summary || "Sem resumo disponível.";

    const relatedItems = incident.relatedMission ? [incident.relatedMission] : [];
    renderList("modalIncidentRelated", relatedItems, "Nenhuma operação vinculada.");

    incidentModal.classList.add("active");
  }

  function closeIncidentDetails() {
    incidentModal.classList.remove("active");
  }

  function renderDossiersSection() {
    const types = [
      { key: "ENTIDADE", label: "ENTIDADES" },
      { key: "LOCAL", label: "LOCAIS" },
      { key: "ORGANIZAÇÃO", label: "ORGANIZAÇÕES" }
    ];

    const tabs = types.map(function (t) {
      const activeClass = t.key === activeDossierType ? " active" : "";
      return `<button class="subtab-button${activeClass}" data-type="${t.key}">${t.label}</button>`;
    }).join("");

    const filtered = dossiers.filter(function (dossier) {
      return dossier.type === activeDossierType;
    });

    const rows = filtered.map(function (dossier) {
      return `
        <tr class="clickable-row" data-code="${dossier.code}">
          <td>${dossier.code}</td>
          <td>${dossier.title}</td>
          <td>${dossier.status}</td>
        </tr>
      `;
    }).join("");

    contentArea.innerHTML = `
      <section class="database-panel">
        <div class="panel-header">
          <h2>DOSSIÊS REGISTRADOS</h2>
          <span>EXCALIBUR REFERENCE DATABASE</span>
        </div>

        <div class="subtab-row">
          ${tabs}
        </div>

        <table class="mission-table">
          <thead>
            <tr>
              <th>CÓDIGO</th>
              <th>DESIGNAÇÃO</th>
              <th>STATUS</th>
            </tr>
          </thead>

          <tbody>
            ${rows}
          </tbody>
        </table>
      </section>
    `;

    document.querySelectorAll(".subtab-button").forEach(function (button) {
      button.addEventListener("click", function () {
        activeDossierType = button.getAttribute("data-type");
        renderDossiersSection();
      });
    });

    document.querySelectorAll(".clickable-row").forEach(function (row) {
      row.addEventListener("click", function () {
        const code = row.getAttribute("data-code");
        const dossier = dossiers.find(function (item) {
          return item.code === code;
        });

        if (dossier) {
          openDossierModal(dossier);
        }
      });
    });
  }

  function openDossierModal(dossier) {
    document.getElementById("modalDossierCode").textContent = dossier.code;
    document.getElementById("modalDossierName").textContent = dossier.title;
    document.getElementById("modalDossierType").textContent = dossier.type;
    document.getElementById("modalDossierStatus").textContent = dossier.status;
    document.getElementById("modalDossierSummary").textContent = dossier.summary || "Sem resumo disponível.";

    const linkedItems = dossier.linked ? [dossier.linked] : [];
    renderList("modalDossierLinked", linkedItems, "Nenhum vínculo registrado.");

    dossierModal.classList.add("active");
  }

  function closeDossierDetails() {
    dossierModal.classList.remove("active");
  }

  function renderList(containerId, items, emptyText) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    if (items && items.length > 0) {
      items.forEach(function (text) {
        const item = document.createElement("div");
        item.className = "log-line";
        item.textContent = text;
        container.appendChild(item);
      });
    } else {
      container.innerHTML = `<div class="log-line">${emptyText}</div>`;
    }
  }

  function openMissionModal(mission) {
    document.getElementById("modalMissionCode").textContent = mission.code;
    document.getElementById("modalMissionName").textContent = mission.codename;
    document.getElementById("modalMissionStatus").textContent = mission.status;
    document.getElementById("modalMissionAccess").textContent = mission.access;
    document.getElementById("modalMissionLocation").textContent = mission.location || "NÃO DISPONÍVEL";
    document.getElementById("modalMissionSummary").textContent = mission.summary || "ARQUIVO RESTRITO.";

    renderList("modalMissionObjectives", mission.objectives, "Nenhum objetivo disponível.");
    renderList("modalMissionTeam", mission.team, "Nenhuma equipe vinculada.");
    renderList("modalMissionAgents", mission.agents, "Nenhum agente vinculado.");
    renderList("modalMissionLogs", mission.logs, "Nenhum log disponível.");

    const imagesContainer = document.getElementById("modalMissionImages");
    imagesContainer.innerHTML = "";

    if (mission.images && mission.images.length > 0) {
      mission.images.forEach(function (imageSrc) {
        const img = document.createElement("img");
        img.className = "case-image";
        img.src = imageSrc;
        img.alt = "Imagem relacionada ao caso";
        imagesContainer.appendChild(img);
      });
    } else {
      imagesContainer.innerHTML = `<div class="log-line">Nenhuma imagem vinculada.</div>`;
    }

    const mapContainer = document.getElementById("modalMissionMap");
    mapContainer.innerHTML = "";

    if (mission.miroUrl) {
      mapContainer.innerHTML = `
        <a class="oraculo-action-button" href="${mission.miroUrl}" target="_blank">
          ABRIR MAPA INVESTIGATIVO
        </a>
      `;
    } else {
      mapContainer.innerHTML = `<div class="log-line">Mapa investigativo não vinculado.</div>`;
    }

    missionModal.classList.add("active");
  }

function typeAkaneText(text, elementId, speed) {
  const element = document.getElementById(elementId);
  let index = 0;

  function typeNextCharacter() {
    if (!element) return;

    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;

      const timer = setTimeout(typeNextCharacter, speed);
      akaneTimers.push(timer);
    }
  }

  typeNextCharacter();
}
  
function openAkaneModal(agent) {
  akaneTimers.forEach(clearTimeout);
  akaneTimers = [];

  const currentAgentName = agentData.name || "AGENTE";

  agentModal.classList.add("active");
  agentModal.classList.add("akane-corrupted");
  document.body.classList.add("akane-screen-glitch");

  document.getElementById("modalAgentCode").textContent = "";
  document.getElementById("modalAgentName").textContent = "";
  document.getElementById("modalAgentStatus").textContent = "";
  document.getElementById("modalAgentAccess").textContent = "";
  document.getElementById("modalAgentTeam").textContent = "";
  document.getElementById("modalAgentSpecialty").textContent = "";

  document.getElementById("modalAgentProfile").innerHTML = `
    <div class="akane-blank-screen">
      <div class="akane-system-message">CONSULTANDO EXC-4044...</div>
    </div>
  `;

  document.getElementById("modalAgentMissions").innerHTML = "";
  document.getElementById("modalAgentRestricted").innerHTML = "";

  akaneTimers.push(setTimeout(function () {
    document.getElementById("modalAgentProfile").innerHTML = `
      <div class="akane-blank-screen">
        <div class="akane-system-message akane-error">DADOS NÃO ENCONTRADOS.</div>
        <div class="akane-system-submessage">Nenhum arquivo associado ao código EXC-4044.</div>
      </div>
    `;
  }, 1400));

  akaneTimers.push(setTimeout(function () {
    document.getElementById("modalAgentProfile").innerHTML = `
      <div class="akane-blank-screen">
        <div class="akane-system-message">RECUPERANDO FRAGMENTOS...</div>
        <div class="akane-loading-bar">
          <div class="akane-loading-fill"></div>
        </div>
      </div>
    `;
  }, 3000));

  akaneTimers.push(setTimeout(function () {
    document.getElementById("modalAgentProfile").innerHTML = `
      <div class="akane-blank-screen">
        <div id="akaneTypedMessage" class="akane-typed-message"></div>
      </div>
    `;

    typeAkaneText("Você está procurando por mim?", "akaneTypedMessage", 70);
  }, 6200));

  akaneTimers.push(setTimeout(function () {
    document.getElementById("akaneTypedMessage").innerHTML = "";
    typeAkaneText(currentAgentName + "...", "akaneTypedMessage", 95);
  }, 8600));

  akaneTimers.push(setTimeout(function () {
    document.getElementById("akaneTypedMessage").innerHTML = "";
    typeAkaneText("Não olhe para o arquivo. Olhe para trás.", "akaneTypedMessage", 65);
  }, 10500));

  akaneTimers.push(setTimeout(function () {
    document.body.classList.add("akane-screen-glitch");

    document.getElementById("modalAgentCode").textContent = "EXC-4044";
    document.getElementById("modalAgentName").textContent = "A█A█E HAY█SHI";
    document.getElementById("modalAgentStatus").textContent = "████████";
    document.getElementById("modalAgentAccess").textContent = "COMANDO";
    document.getElementById("modalAgentTeam").textContent = "████████";
    document.getElementById("modalAgentSpecialty").textContent = "C█M█ATE";

    document.getElementById("modalAgentProfile").textContent =
      "A existência desta agente nunca foi oficialmente confirmada pela Fundação Excalibur. Rumores sobre sua atuação circulam entre agentes veteranos há anos, embora nenhum registro fotográfico ou testemunho formal tenha sido autenticado.";

    document.getElementById("modalAgentMissions").innerHTML = `
      <div class="log-line akane-whisper">███ ██ ███████</div>
      <div class="log-line akane-whisper">Operação ███████</div>
      <div class="log-line akane-whisper">Nenhum sobrevivente confirmou contato visual.</div>
    `;

    document.getElementById("modalAgentRestricted").innerHTML = `
      <div class="log-line akane-error">ARQUIVO PARCIALMENTE RESTAURADO</div>
      <div class="log-line">AUTORIZAÇÃO DIRETORIA NECESSÁRIA</div>
      <div class="log-line">Última sincronização: AGORA</div>
    `;
  }, 13500));

  akaneTimers.push(setTimeout(function () {
    document.getElementById("modalAgentName").textContent = agent.name;
    document.getElementById("modalAgentSpecialty").textContent = agent.specialty;

    renderList("modalAgentMissions", agent.missions, "Nenhuma missão registrada.");

    document.getElementById("modalAgentRestricted").innerHTML = `
      <div class="log-line">████████████████████████████</div>
      <div class="log-line">AUTORIZAÇÃO DIRETORIA NECESSÁRIA</div>
      <div class="log-line">Última sincronização: INDETERMINADA</div>
    `;

    document.body.classList.remove("akane-screen-glitch");
    agentModal.classList.remove("akane-corrupted");
  }, 17000));
}
  
function openNormalAgentModal(agent) {
  agentModal.classList.remove("akane-corrupted");
  agentModal.classList.remove("clive-rgb-glitch");
  document.body.classList.remove("akane-screen-glitch");
  document.body.classList.remove("rgb-screen-glitch");

  document.getElementById("modalAgentCode").textContent = agent.code;
  document.getElementById("modalAgentName").textContent = agent.name;
  document.getElementById("modalAgentStatus").textContent = agent.status;
  document.getElementById("modalAgentAccess").textContent = agent.access;
  document.getElementById("modalAgentTeam").textContent = agent.team;
  document.getElementById("modalAgentSpecialty").textContent = agent.specialty;

  document.getElementById("modalAgentProfile").textContent =
    agent.profile || "Nenhum perfil registrado.";

  renderList("modalAgentMissions", agent.missions, "Nenhuma missão registrada.");

  document.getElementById("modalAgentRestricted").innerHTML = `
    <div class="log-line">████████████████████████████</div>
    <div class="log-line">AUTORIZAÇÃO COMANDO NECESSÁRIA</div>
  `;

  agentModal.classList.add("active");
}

function openCliveModal(agent) {
  openNormalAgentModal(agent);

  agentModal.classList.add("clive-rgb-glitch");
  document.body.classList.add("rgb-screen-glitch");

  const modalWindow = agentModal.querySelector(".mission-modal");

  const intrusion = document.createElement("div");
  intrusion.className = "rgb-intrusion";
  intrusion.innerHTML = `
    <div class="rgb-intrusion-content">
      <div class="rgb-error">INTERFERÊNCIA EXTERNA DETECTADA</div>
      <div class="rgb-whisper">Olá, Clive.</div>
      <div class="rgb-whisper">Você ainda está conectado.</div>
    </div>
  `;

  modalWindow.appendChild(intrusion);

  const originalName = agent.name;
  const originalSpecialty = agent.specialty;

  setTimeout(function () {
    document.getElementById("modalAgentName").textContent = "CL1V3_MÜLL3R";
    document.getElementById("modalAgentSpecialty").textContent =
      "TECNOLOGIA / RUÍDO DIGITAL";
  }, 900);

  setTimeout(function () {
    document.getElementById("modalAgentName").textContent = originalName;
    document.getElementById("modalAgentSpecialty").textContent =
      originalSpecialty;

    intrusion.classList.add("rgb-intrusion-fade");
  }, 3800);

  setTimeout(function () {
    intrusion.remove();

    agentModal.classList.remove("clive-rgb-glitch");
    document.body.classList.remove("rgb-screen-glitch");
  }, 4400);
}

function openAgentModal(agent) {
  if (agent.isLegend) {
    openAkaneModal(agent);
    return;
  }

  if (agent.code === "EXC-1013") {
    openCliveModal(agent);
    return;
  }

  openNormalAgentModal(agent);
}

function closeModal() {
  missionModal.classList.remove("active");
}

overviewBtn.addEventListener("click", function () {
  contentArea.innerHTML = overviewContent;
  setActiveButton(overviewBtn);
});

missionsBtn.addEventListener("click", function () {
  setActiveButton(missionsBtn);
  renderMissionsTable();
});

incidentsBtn.addEventListener("click", function () {
  setActiveButton(incidentsBtn);
  renderIncidentsList();
});

dossiersBtn.addEventListener("click", function () {
  setActiveButton(dossiersBtn);
  activeDossierType = "ENTIDADE";
  renderDossiersSection();
});

agentsBtn.addEventListener("click", function () {
  setActiveButton(agentsBtn);

  const rows = agents.map(function (agent) {
    return `
      <tr class="clickable-row" data-agent="${agent.code}">
        <td>${agent.code}</td>
        <td>${agent.name}</td>
        <td>${agent.status}</td>
        <td>${agent.access}</td>
      </tr>
    `;
  }).join("");

  contentArea.innerHTML = `
    <section class="database-panel">
      <div class="panel-header">
        <h2>AGENTES REGISTRADOS</h2>
        <span>EXCALIBUR PERSONNEL DATABASE</span>
      </div>

      <table class="mission-table">
        <thead>
          <tr>
            <th>CÓDIGO</th>
            <th>NOME</th>
            <th>STATUS</th>
            <th>ACESSO</th>
          </tr>
        </thead>

        <tbody>
          ${rows}
        </tbody>
      </table>
    </section>
  `;

  document.querySelectorAll(".clickable-row").forEach(function (row) {
    row.addEventListener("click", function () {
      const code = row.getAttribute("data-agent");

      const agent = agents.find(function (item) {
        return item.code === code;
      });

      openAgentModal(agent);
    });
  });
});

closeMissionModal.addEventListener("click", closeModal);

missionModal.addEventListener("click", function (event) {
  if (event.target === missionModal) {
    closeModal();
  }
});

closeIncidentModal.addEventListener("click", closeIncidentDetails);

incidentModal.addEventListener("click", function (event) {
  if (event.target === incidentModal) {
    closeIncidentDetails();
  }
});

closeDossierModal.addEventListener("click", closeDossierDetails);

dossierModal.addEventListener("click", function (event) {
  if (event.target === dossierModal) {
    closeDossierDetails();
  }
});

function closeAgentDossier() {
  akaneTimers.forEach(clearTimeout);
  akaneTimers = [];

  agentModal.classList.remove("active");
  agentModal.classList.remove("akane-corrupted");
  agentModal.classList.remove("clive-rgb-glitch");
  document.body.classList.remove("akane-screen-glitch");
  document.body.classList.remove("rgb-screen-glitch");
}

closeAgentModal.addEventListener("click", closeAgentDossier);

agentModal.addEventListener("click", function (event) {
  if (event.target === agentModal) {
    closeAgentDossier();
  }
});
});
