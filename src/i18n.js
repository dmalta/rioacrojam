import { createI18n } from 'vue-i18n'

const messages = {
  pt: {
    title: 'Rio Acroyoga Open Jam',
    intro: 'Nossa <i>jam</i> é um espaço aberto de encontro, prática e convivência de acroyoga. Todos são bem-vindos. O que nos une é o prazer da prática como treino, diversão e experiência humana compartilhada.',
    principles: 'Princípios',
    principlesList: [
      'Jam <strong>totalmente aberta e gratuita</strong>',
      'Se você está <strong>se divertindo</strong>, está certo',
      'Diversão não exclui <strong>treino técnico, foco e seriedade</strong>',
      '<strong>Não há espaço para assédio</strong>, seja físico, verbal ou psicológico',
      'Cada pessoa é <strong>responsável por si e pelo coletivo</strong>'
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
    locationTime: 'Local e Horário',
    locationLabel: 'Local:',
    locationText: 'Lagoa Rodrigo de Freitas, no gramado próximo aos pedalinhos, ao lado do restaurante <em>Badalado</em>.',
    timeLabel: 'Horário:',
    timeText: 'Encontro semanal, a partir das 16h.',
    importantLabel: 'Importante:',
    importantText: 'Horário e local podem sofrer alterações por condições climáticas ou outros imprevistos. Antes de ir, confirme no grupo do WhatsApp. Em dias de chuva, geralmente não há jam na Lagoa.',
    amenitiesLabel: 'Amenidades:',
    amenitiesText: 'Logo atrás do gramado fica o <a href="https://eurionalagoa.com.br/" target="_blank" rel="noopener noreferrer"><em>Eu Rio Beach Club</em></a>, onde rola usar gratuitamente banheiros, academia, chuveiros, bares, açaí, massagem e outras facilidades. O espaço é aberto ao público, com cadastro prévio.'
  },
  es: {
    title: 'Rio Acroyoga Open Jam',
    intro: 'Nuestra <i>jam</i> es un espacio abierto de encuentro, práctica y convivencia de acroyoga. Todos son bienvenidos. Lo que nos une es el placer de la práctica como entrenamiento, diversión y experiencia humana compartida.',
    principles: 'Principios',
    principlesList: [
      'Jam <strong>totalmente abierta y gratuita</strong>',
      'Si te estás <strong>divirtiendo</strong>, lo estás haciendo bien',
      'La diversión no excluye el <strong>entrenamiento técnico, el enfoque y la seriedad</strong>',
      '<strong>No hay espacio para el acoso</strong>, sea físico, verbal o psicológico',
      'Cada persona es <strong>responsable de sí misma y del colectivo</strong>'
    ],
    recommendations: 'Recomendaciones',
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
    locationTime: 'Lugar y Horario',
    locationLabel: 'Lugar:',
    locationText: 'Lagoa Rodrigo de Freitas, en el césped cerca de los botes a pedal, junto al restaurante <em>Badalado</em>.',
    timeLabel: 'Horario:',
    timeText: 'Encuentro semanal, a partir de las 16:00.',
    importantLabel: 'Importante:',
    importantText: 'El horario y el lugar pueden cambiar por condiciones climáticas u otros imprevistos. Antes de ir, confirma en el grupo de WhatsApp. En días de lluvia, normalmente no hay jam en la Lagoa.',
    amenitiesLabel: 'Amenidades:',
    amenitiesText: 'Justo detrás del césped está el <a href="https://eurionalagoa.com.br/" target="_blank" rel="noopener noreferrer"><em>Eu Rio Beach Club</em></a>, donde se pueden usar gratuitamente baños, gimnasio, duchas, bares, açaí, masajes y otras comodidades. El espacio está abierto al público con registro previo.'
  },
  en: {
    title: 'Rio Acroyoga Open Jam',
    intro: 'Our <i>jam</i> is an open space for meeting, practice, and community in acroyoga. Everyone is welcome. What unites us is the pleasure of practice as training, fun, and shared human experience.',
    principles: 'Principles',
    principlesList: [
      'Jam is <strong>completely open and free</strong>',
      'If you\'re <strong>having fun</strong>, you\'re doing it right',
      'Fun doesn\'t exclude <strong>technical training, focus, and seriousness</strong>',
      '<strong>There is no room for harassment</strong>, whether physical, verbal, or psychological',
      'Each person is <strong>responsible for themselves and the collective</strong>'
    ],
    recommendations: 'Recommendations',
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
    locationTime: 'Location and Time',
    locationLabel: 'Location:',
    locationText: 'Lagoa Rodrigo de Freitas, on the grass near the pedal boats, next to the <em>Badalado</em> restaurant.',
    timeLabel: 'Time:',
    timeText: 'Weekly gathering, starting at 4:00 PM.',
    importantLabel: 'Important:',
    importantText: 'Time and location may change due to weather conditions or other unforeseen circumstances. Before going, please check the WhatsApp group. On rainy days, there is usually no jam at the Lagoa.',
    amenitiesLabel: 'Amenities:',
    amenitiesText: 'Right behind the grass area is the <a href="https://eurionalagoa.com.br/" target="_blank" rel="noopener noreferrer"><em>Eu Rio Beach Club</em></a>, where you can freely use restrooms, gym, showers, bars, açaí, massage, and other amenities. The space is open to the public with prior registration.'
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