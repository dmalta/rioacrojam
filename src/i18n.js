import { createI18n } from 'vue-i18n'

const messages = {
  pt: {
    title: 'Rio Acroyoga Open Jam',
    intro: 'Este é um espaço aberto de encontro, prática e convivência de acroyoga. Todos são bem-vindos. O que nos une é o prazer da prática como treino, diversão e experiência humana compartilhada.',
    principles: 'Princípios',
    principlesList: [
      'Jam <strong>totalmente aberta e gratuita</strong>',
      'Se você está <strong>se divertindo</strong>, está certo',
      'Diversão não exclui <strong>treino técnico, foco e seriedade</strong>',
      'Cada pessoa é <strong>responsável por si e pelo coletivo</strong>',
      'Acroyoga <strong>sem assédio</strong>, em qualquer forma'
    ],
    recommendations: 'Recomendações',
    respectLimits: 'Respeito aos limites',
    respectLimitsText: 'Dizer "não" é um ato de amor próprio e respeito ao outro. Comunique seus limites com clareza. Respeite os limites de cada um com simplicidade e siga em frente.',
    safetyWord: 'Palavra de segurança: "DOWN"',
    safetyWordText: 'Qualquer pessoa (base, voador ou cuidador) pode dizer "down" para interromper imediatamente o movimento. Sem perguntas, sem insistência. Primeiro para, depois pergunta a razão.',
    physicalContact: 'Contato físico',
    physicalContactText: 'Faz parte da prática, mas se algo incomodar, avise. O ajuste vem depois do respeito.',
    collaboration: 'Colaboração',
    collaborationText: 'Observe suas próprias limitações. Evite apontar erros de forma excessiva ou acusatória. O objetivo é evoluir juntos, não competir.',
    spotters: 'Cuidadores (Spotters)',
    spottersText: 'A prática segura de acroyoga inclui um cuidador. Um bom spotter aumenta segurança, confiança e possibilidades de exploração.',
    spottersList: [
      'Qualquer pessoa pode pedir cuidador a qualquer momento',
      'Esse pedido deve ser respeitado',
      'Se não se sentir seguro para cuidar naquele momento, avise',
      'Esteja aberto a ouvir como o voador ou base querem ser cuidados',
      'Ao cuidar, responsabilize-se pela segurança',
      'Duplas podem optar por praticar sem cuidador se ambos concordarem'
    ],
    photosVideos: 'Fotos e Vídeos',
    photosVideosText: 'Fotos e vídeos são livres, mas não são nosso objetivo primário. Se alguém quiser remover uma imagem em que aparece, basta pedir — o pedido deve ser respeitado sem questionamentos.',
    mediation: 'Mediação',
    mediationText: 'Caso você se sinta desconfortável com qualquer situação, temos mediadores disponíveis para conversar em particular e ajudar a resolver.',
    spirit: 'Espírito da Jam',
    spiritText: 'A jam é um encontro acolhedor de amigos, novos e antigos, para brincar e aprender juntos.',
    spiritList: [
      'É universal: todos os níveis, escolas e culturas são bem-vindos.',
      'É comunitária: não é aula, competição ou palco.',
      'É prática compartilhada: cuidado mútuo, leveza com responsabilidade.'
    ]
  },
  es: {
    title: 'Rio Acroyoga Open Jam',
    intro: 'Este es un espacio abierto de encuentro, práctica y convivencia de acroyoga. Todos son bienvenidos. Lo que nos une es el placer de la práctica como entrenamiento, diversión y experiencia humana compartida.',
    principles: 'Principios',
    principlesList: [
      'Jam <strong>totalmente abierta y gratuita</strong>',
      'Si te estás <strong>divirtiendo</strong>, lo estás haciendo bien',
      'La diversión no excluye el <strong>entrenamiento técnico, el enfoque y la seriedad</strong>',
      'Cada persona es <strong>responsable de sí misma y del colectivo</strong>',
      'Acroyoga <strong>sin acoso</strong>, en cualquier forma'
    ],
    recommendations: 'Seguridad',
    respectLimits: 'Respeto a los límites',
    respectLimitsText: 'Decir "no" es un acto de amor propio y respeto hacia el otro. Comunica tus límites con claridad. Respeta los límites de cada uno con simplicidad y sigue adelante.',
    safetyWord: 'Palabra de seguridad: "DOWN"',
    safetyWordText: 'Cualquier persona (base, volador o cuidador) puede decir "down" para interrumpir inmediatamente el movimiento. Sin preguntas, sin insistencia. Primero se detiene, después se pregunta la razón.',
    physicalContact: 'Contacto físico',
    physicalContactText: 'Es parte de la práctica, pero si algo incomoda, avisa. El ajuste viene después del respeto.',
    collaboration: 'Colaboración',
    collaborationText: 'Observa tus propias limitaciones. Evita señalar errores de forma excesiva o acusatoria. El objetivo es evolucionar juntos, no competir.',
    spotters: 'Cuidadores (Spotters)',
    spottersText: 'La práctica segura de acroyoga incluye un cuidador. Un buen spotter aumenta la seguridad, confianza y posibilidades de exploración.',
    spottersList: [
      'Cualquier persona puede pedir un cuidador en cualquier momento',
      'Esta solicitud debe ser respetada',
      'Si no te sientes seguro para cuidar en ese momento, avisa',
      'Estate abierto a escuchar cómo el volador o la base quieren ser cuidados',
      'Al cuidar, responsabilízate por la seguridad',
      'Las parejas pueden optar por practicar sin cuidador si ambos están de acuerdo'
    ],
    photosVideos: 'Fotos y Videos',
    photosVideosText: 'Las fotos y videos son libres, pero no son nuestro objetivo principal. Si alguien quiere eliminar una imagen en la que aparece, solo tiene que pedirlo — la solicitud debe ser respetada sin cuestionamientos.',
    mediation: 'Mediación',
    mediationText: 'Si te sientes incómodo con cualquier situación, tenemos mediadores disponibles para conversar en privado y ayudar a resolver.',
    spirit: 'Espíritu de la Jam',
    spiritText: 'La jam es un encuentro acogedor de amigos, nuevos y antiguos, para jugar y aprender juntos.',
    spiritList: [
      'Es universal: todos los niveles, escuelas y culturas son bienvenidos.',
      'Es comunitaria: no es una clase, competencia o escenario.',
      'Es práctica compartida: cuidado mutuo, ligereza con responsabilidad.'
    ]
  },
  en: {
    title: 'Rio Acroyoga Open Jam',
    intro: 'This is an open space for meeting, practice, and community in acroyoga. Everyone is welcome. What unites us is the pleasure of practice as training, fun, and shared human experience.',
    principles: 'Principles',
    principlesList: [
      'Jam is <strong>completely open and free</strong>',
      'If you\'re <strong>having fun</strong>, you\'re doing it right',
      'Fun doesn\'t exclude <strong>technical training, focus, and seriousness</strong>',
      'Each person is <strong>responsible for themselves and the collective</strong>',
      'Acroyoga <strong>without harassment</strong>, in any form'
    ],
    recommendations: 'Safety',
    respectLimits: 'Respect for boundaries',
    respectLimitsText: 'Saying "no" is an act of self-love and respect for others. Communicate your limits clearly. Respect everyone\'s boundaries with simplicity and move on.',
    safetyWord: 'Safety word: "DOWN"',
    safetyWordText: 'Anyone (base, flyer, or spotter) can say "down" to immediately stop the movement. No questions, no insistence. Stop first, ask why later.',
    physicalContact: 'Physical contact',
    physicalContactText: 'It\'s part of the practice, but if something bothers you, speak up. Adjustment comes after respect.',
    collaboration: 'Collaboration',
    collaborationText: 'Observe your own limitations. Avoid pointing out mistakes excessively or accusatorily. The goal is to evolve together, not compete.',
    spotters: 'Spotters',
    spottersText: 'Safe acroyoga practice includes a spotter. A good spotter increases safety, confidence, and possibilities for exploration.',
    spottersList: [
      'Anyone can request a spotter at any time',
      'This request must be respected',
      'If you don\'t feel safe to spot at that moment, communicate it',
      'Be open to hearing how the flyer or base wants to be spotted',
      'When spotting, take responsibility for safety',
      'Pairs can choose to practice without a spotter if both agree'
    ],
    photosVideos: 'Photos and Videos',
    photosVideosText: 'Photos and videos are allowed, but aren\'t our primary goal. If someone wants to remove an image they appear in, just ask — the request must be respected without questioning.',
    mediation: 'Mediation',
    mediationText: 'If you feel uncomfortable with any situation, we have mediators available to talk privately and help resolve issues.',
    spirit: 'Spirit of the Jam',
    spiritText: 'The jam is a welcoming gathering of friends, new and old, to play and learn together.',
    spiritList: [
      'It\'s universal: all levels, schools, and cultures are welcome.',
      'It\'s community-based: it\'s not a class, competition, or stage.',
      'It\'s shared practice: mutual care, lightness with responsibility.'
    ]
  }
}

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'pt',
  fallbackLocale: 'pt',
  messages
})

export default i18n