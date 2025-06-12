"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Heart, Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Home() {
  const timelineEvents = [
    {
      date: "26 de Julho, 2019",
      title: "Nosso Primeiro Beijo (Selinho)",
      description:
        "Festa de XV da Luiza, eu estava nervoso porque ia te ver, mas estava muito animado, principalmente depois de interagirmos na casa da Samara. Você tava muito linda nesse vestido e ficou toda estranha dps que eu dei o selinho kkkkkkk, foi uma noite incrivel pra mim.",
      location: "XV da Luiza",
      image: "/01.jpeg",
      type: "milestone",
    },
    {
      date: "26 de Julho, 2019",
      title: "A Foto no Fim da Festa",
      description:
        "Ainda nervosos mas bem mais relaxados do que antes, a gente ja conversou muito e da pra ver que as coisas mudaram muito desses dias pra cá, nossos rostinhos, nossos amigos. Sou muito feliz de ter crescido com você.",
      location: "XV da Luiza",
      image: "/02.jpeg",
      type: "special",
    },
    {
      date: "26 de Outubro, 2019",
      title: "Primeira Vez Na Minha Casa",
      description:
        "Essa foto representa bem o famoso 'Momentos antes da merda acontecer', kkkkkkk além de estar nervoso e feliz com você ali, foi o dia que tu me viu boladão kkkkk.",
      location: "Casa do Caio",
      image: "/03.jpeg",
      type: "adventure",
    },
    {
      date: "26 de Outubro, 2019",
      title: "Cinema Com A Minha Família",
      description:
        "Se eu não me engano, ainda naquele dia, fomos no cinema ver malévola 2 e também foi a primeira saída sua comigo e minha família. Cá entre nós...a gente era muito loucoo kkkkkk. (Repara no mini Ian)",
      location: "Shopping Via Brasil",
      image: "/04.jpeg",
      type: "family",
    },
    {
      date: "14 de Dezembro, 2019",
      title: "Sua Primeira Formatura (De Muitas)",
      description:
        "Sua formatura do 9 ano para o ensino-médio, você tava uma gata e eu lembro que fomos comer no Romanella depois, onde até tiramos nossa foto com pose de espião 🔫😎",
      location: "Barra da Tijuca",
      image: "/07.jpeg",
      type: "milestone",
    },
    {
      date: "23 de Fevereiro, 2020",
      title: "Nossa Primeira Viagem (para Santos, óbvio)",
      description:
        "Até então eu nunca tinha viajado com uma namorada, ainda mais com tão pouco tempo de namoro e cara, foi INCRÍVEL, assistimos libertadores, caímos do patinete, fomos 30x no Shopping da Ana Costa 30x (essa foto foi na praça de alimentação inclusive), fomos no cinema, montamos quebra-cabeça, jogamos joguinho no Friv. Você é a melhor companhia sempre!",
      location: "Shopping Parque Balneário, Santos",
      image: "/08.jpeg",
      type: "milestone",
    },
    {
      date: "15 de Junho, 2020",
      title: "Pós Quarentena",
      description:
        "Foi a primeira vez que a gente se viu pós-quarentena, foram cerca de 3 meses se não me engano. Tava maluco ja pra te ver e lembro que fizemos tiktok, pintamos a cara, brincamos, vimos serie ou filme e nos beijamos muito muito muito.",
      location: "Rua Valério 118, Cascadura",
      image: "/09.jpeg",
      type: "milestone",
    },
    {
      date: "Não lembro a data...",
      title: "Sobre A Minha Melhor Amiga",
      description:
        "Minha melhor amiga AMA comer e comer besteira mas odeia peixe e tudo que for do mar, ela não só sabe como ama me fazer rir, é dona do melhor abraço, do melhor beijo e dos melhores conselhos. Ela é gentil e carinhosa, é temente a Deus e ama muito ele. Ela é minha parceira, confidente, escudeira. Ela é demais pra mim...mas mesmo assim eu a amo. Obrigado por me fazer tão bem!",
      location: "Nosso Primeiro Lar",
      image: "/10.jpeg",
      type: "milestone",
    },
    {
      date: "Não lembro a data dessa tbm...",
      title: "A Beleza Dela",
      description:
        "A data da foto não importa, coloquei aqui pra dizer que te acho a garota mais linda do universo, toda vez que olho pra você me pego admirado pela sua beleza...que sorte a minha :)",
      location: "Meu Lar",
      image: "/11.jpeg",
      type: "milestone",
    },
    {
      date: "27 de Novembro, 2024",
      title: "A Vida Com Você",
      description:
        "Como dar pra ver na foto, não consigo ficar com você, viver com você sem um sorriso no rosto, você é meu carregador de bateria social, namorar a melhor amiga é algo que nem sempre as pessoas conseguem, mas descobrir alguém tão extraordinário e tão linda que te xingou de graça na igreja. Eu diria que é praticamente impossivél, mas graças a Dues, não foi pra mim. Descobrir sua amizade enquanto te conhecia e te curtia, foi muito especial. Foi descobrir algo que eu queria tanto mas tanto e não fazia a menor ideia...",
      location: "Cachoeira, Paraty",
      image: "/cachu.jpeg",
      type: "milestone",
    },
    {
      date: "Outro dia",
      title: "Amigos",
      description:
        "Essa eu coloquei pra gente lembrar, lembrar de todas as orações, tudo que a gente pediu, sonhou e passou. Oravamos e choravamos por amigos e olha hoje..., choravamos por dinheiro e hoje conseguimos juntar uma grana maneira. Deus não desiste, Deus escuta. Ele é fiel e cumpre oque diz. Ainda conquistaremos muita coisa juntos, confia.",
      location: "Casa do Tala, Sulacap",
      image: "/amigos.jpeg",
      type: "milestone",
    },
    {
      date: "5 de Maio, 2025",
      title: "Minha dupla",
      description:
        "Obrigado pela parceria, pela cumplicidade. Obrigado por levantar minha moral e meu bom humor, muito obrigado por ficar e se esforçar por mim, sei que não sou fácil, se relacionar não fácil...mas você faz tudo valer a pena, que sorte a minha ter você.",
      location: "Aniversário do Caio, Casa dele",
      image: "/12.jpeg",
      type: "milestone",
    },
    {
      date: "31 de Julho, 2024",
      title: "Mudamos Juntos",
      description:
        "O futuro ao seu lado fica cada dia mais claro, mais promissor e brilhante. Feliz dia dos namorados! Você é tudo que eu pedi pra Deus e também oque eu nem pedi, obrigado por me fazer tão bem meu amor. TE AMO PRA SEMPRE 💘",
      location: "Nossa Futura Casa, Copacabana",
      image: "/ultima.jpeg",
      type: "milestone",
    },
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "milestone":
        return "bg-pink-500";
      case "special":
        return "bg-red-500";
      case "adventure":
        return "bg-purple-500";
      case "family":
        return "bg-blue-500";
      case "anniversary":
        return "bg-rose-500";
      default:
        return "bg-pink-500";
    }
  };

  const getTypeBadge = (type: string) => {
    switch (type) {
      case "milestone":
        return "Marco";
      case "special":
        return "Especial";
      case "adventure":
        return "Aventura";
      case "family":
        return "Família";
      case "anniversary":
        return "Aniversário";
      case "memory":
        return "Memória";
      default:
        return "Momento";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
      {/* Header */}
      <div className="text-center py-12 px-4">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Heart className="w-8 h-8 text-red-500 fill-current" />
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
            Nossa História de Amor
          </h1>
          <Heart className="w-8 h-8 text-red-500 fill-current" />
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Cada momento ao seu lado é uma página especial na nossa história. Aqui
          estão os capítulos mais importantes da nossa jornada juntos.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto px-4 pb-12">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-pink-300 via-red-300 to-rose-300"></div>

          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full ${getTypeColor(
                  event.type
                )} border-4 border-white shadow-lg z-10`}
              ></div>

              {/* Content Card */}
              <div
                className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                }`}
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <div className="relative">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge
                        variant="secondary"
                        className="bg-white/90 text-gray-700"
                      >
                        {getTypeBadge(event.type)}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {event.title}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Message */}
      <div className="text-center py-12 px-4 bg-gradient-to-r from-pink-100 to-red-100">
        <div className="max-w-2xl mx-auto">
          <Heart className="w-12 h-12 text-red-500 fill-current mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            E nossa história só ta no começo...
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Cada dia é uma nova oportunidade de criar memórias especiais juntos.
            Obrigada Ana Carolynda meu amor, por fazer parte da minha vida e por todos os momentos
            incríveis que ainda estão por vir.
          </p>
          <div className="flex justify-center items-center gap-2 text-red-500">
            <Heart className="w-6 h-6 fill-current" />
            <span className="text-xl font-semibold">Com todo meu amor</span>
            <Heart className="w-6 h-6 fill-current" />
          </div>
        </div>
      </div>
    </div>
  );
}
