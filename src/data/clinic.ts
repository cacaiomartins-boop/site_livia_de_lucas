// Todos os textos, links e imagens do site ficam aqui.
// Para trocar algo, edite este arquivo e rode o deploy.bat.

export const clinic = {
  nome: "Lívia de Lucas",
  titulo: "psicanalista",
  atendimento: ["Atendimento de adultos", "Online e presencial em Pinheiros, SP"],

  whatsappNumero: "5511998518026",
  whatsappTexto: "Olá, Lívia! Gostaria de saber mais sobre o atendimento.",
  telefone: "(11) 99851-8026",
  email: "livialolivero@gmail.com",

  endereco: "Rua Artur de Azevedo, Pinheiros, São Paulo - SP, 05404-014",
  mapaBusca: "Rua Artur de Azevedo, Pinheiros, São Paulo, 05404-014",
  cidadeCurta: "pinheiros, sp - online",

  doctoralia:
    "https://www.doctoralia.com.br/livia-de-lucas-olivero/psicanalista/sao-paulo",
  lattes: "https://lattes.cnpq.br/3198396250290526",

  imagens: {
    retrato: "/img/livia.webp",
    arte: "/img/arte.webp",
    consultorio: [
      { src: "/img/consultorio-1.webp", width: 800, height: 1066, alt: "Consultório com estante de livros e plantas junto à janela" },
      { src: "/img/consultorio-3.webp", width: 800, height: 1000, alt: "Sala do consultório com poltronas, sofá e quadros na parede" },
      { src: "/img/consultorio-2.webp", width: 800, height: 1066, alt: "Janela do consultório com plantas e vista da cidade" },
    ],
  },

  saudacao: "Olá, sejam bem-vindos(as)!",
  bio: [
    "Sou psicanalista, com formação pela Escola dos Fóruns do Campo Lacaniano de São Paulo (FCL-SP).",
    "Tenho um percurso acadêmico, com mestrado em Psicologia Social pelo Instituto de Psicologia da Universidade de São Paulo (USP), com orientação do Prof. Dr. Paulo Beer, e doutorado em andamento em Psicologia Clínica pelo Instituto de Psicologia da USP, com orientação do Prof. Dr. Christian Dunker.",
    "Sou docente no curso de formação em psicanálise do Centro de Estudos Psicanalíticos (CEP).",
    "Atuo na clínica particular, orientada pela psicanálise de Jacques Lacan. Tenho experiência em atendimento de adultos, nas modalidades online e presencial.",
  ],

  formacao: [
    "Formação em psicanálise pela Escola dos Fóruns do Campo Lacaniano de São Paulo (FCL-SP)",
    "Mestrado em Psicologia Social, Instituto de Psicologia da USP",
    "Doutorado em andamento em Psicologia Clínica, Instituto de Psicologia da USP",
    "Docente no curso de formação em psicanálise do Centro de Estudos Psicanalíticos (CEP)",
  ],

  trabalho: [
    "A primeira sessão é um momento para compreender o que te fez buscar a escuta psicanalítica e para pensar possibilidades de continuidade.",
    "O valor das sessões, o formato do atendimento (online ou presencial) e a frequência são acordados diretamente com o analisante.",
    "Caso você precise alterar o dia/horário, por favor avisar com pelo menos 24h de antecedência. Em caso de atendimento presencial, oriento chegar 10min antes para realizar seu cadastro na portaria do prédio.",
    "Não trabalho com plano de saúde ou recibo para reembolso.",
    "Para brasileiros que vivem no exterior, ofereço a possibilidade de atendimento online (considerando as especificidades de cada fuso horário), e solicito que o pagamento seja realizado em real.",
    "Caso tenha dúvidas ou queira fazer um agendamento, fique à vontade para me escrever por WhatsApp ou e-mail.\n\nAté breve!",
  ],

  aviso: [
    "Atendimento apenas com hora marcada.",
    "Para emergências, dirija-se a um pronto-socorro.",
  ],
};

// "/img/foto.webp" -> "/img/foto-400.webp 400w, /img/foto.webp 800w"
export const srcSet = (src: string) =>
  `${src.replace(".webp", "-400.webp")} 400w, ${src} 800w`;

export const whatsappLink = `https://wa.me/${clinic.whatsappNumero}?text=${encodeURIComponent(
  clinic.whatsappTexto,
)}`;

export const mapaEmbed = `https://www.google.com/maps?q=${encodeURIComponent(
  clinic.mapaBusca,
)}&output=embed`;

export const mapaLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  clinic.mapaBusca,
)}`;
