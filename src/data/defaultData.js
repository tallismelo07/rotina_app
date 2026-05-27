export const DEFAULT_CHECKLIST = [
  { id: 'c1', label: 'Acordar sem celular', tag: 'essencial', done: false },
  { id: 'c2', label: 'Tomar água ao acordar', tag: 'essencial', done: false },
  { id: 'c3', label: 'Estudo JavaScript (manhã)', tag: 'essencial', done: false },
  { id: 'c4', label: 'Academia com seu pai', tag: 'essencial', done: false },
  { id: 'c5', label: 'Café da manhã', tag: 'essencial', done: false },
  { id: 'c6', label: 'Descompressão após trabalho', tag: 'essencial', done: false },
  { id: 'c7', label: 'Estudo JavaScript (40 min — noite)', tag: 'importante', done: false },
  { id: 'c8', label: 'Rotina noturna + cabelo', tag: 'importante', done: false },
]

export const MINIMAL_ROUTINE = [
  { id: 'm1', label: 'Acordar e tomar água', tag: 'essencial', done: false },
  { id: 'm2', label: 'Ir trabalhar', tag: 'essencial', done: false },
  { id: 'm3', label: 'Comer pelo menos uma refeição boa', tag: 'essencial', done: false },
  { id: 'm4', label: 'Dormir no horário', tag: 'essencial', done: false },
]

export const COLORS = [
  { key: 'purple', label: 'Estudo', bg: 'bg-violet-50 dark:bg-violet-950/60', text: 'text-violet-800 dark:text-violet-200', dot: 'bg-violet-500' },
  { key: 'green',  label: 'Saúde',  bg: 'bg-emerald-50 dark:bg-emerald-950/60', text: 'text-emerald-800 dark:text-emerald-200', dot: 'bg-emerald-500' },
  { key: 'blue',   label: 'Trabalho', bg: 'bg-blue-50 dark:bg-blue-950/60', text: 'text-blue-800 dark:text-blue-200', dot: 'bg-blue-500' },
  { key: 'amber',  label: 'Pessoal', bg: 'bg-amber-50 dark:bg-amber-950/60', text: 'text-amber-800 dark:text-amber-200', dot: 'bg-amber-500' },
  { key: 'gray',   label: 'Rotina',  bg: 'bg-neutral-100 dark:bg-neutral-800', text: 'text-neutral-700 dark:text-neutral-300', dot: 'bg-neutral-400' },
  { key: 'teal',   label: 'Bem-estar', bg: 'bg-teal-50 dark:bg-teal-950/60', text: 'text-teal-800 dark:text-teal-200', dot: 'bg-teal-500' },
  { key: 'coral',  label: 'Social', bg: 'bg-rose-50 dark:bg-rose-950/60', text: 'text-rose-800 dark:text-rose-200', dot: 'bg-rose-500' },
]

export const DEFAULT_SCHEDULE = {
  seg: [
    { id: 's1', time: '05h00 – 05h30', title: 'Acordar + hidratação', sub: 'Sem celular', color: 'amber' },
    { id: 's2', time: '05h30 – 06h00', title: 'Estudo JavaScript', sub: 'Essencial — mente fresca', color: 'purple' },
    { id: 's3', time: '06h00 – 07h00', title: 'Academia com seu pai', sub: 'Compromisso fixo', color: 'green' },
    { id: 's4', time: '07h00 – 07h30', title: 'Café + preparar para o trabalho', sub: '', color: 'gray' },
    { id: 's5', time: '09h00 – 18h00', title: 'Trabalho', sub: 'Suporte / implantação', color: 'blue' },
    { id: 's6', time: '18h00 – 18h30', title: 'Descompressão', sub: 'Sem telas, caminhar ou música', color: 'gray' },
    { id: 's7', time: '19h00 – 19h40', title: 'Estudo JavaScript (40 min)', sub: 'Você já faz às vezes — agora é fixo', color: 'purple' },
    { id: 's8', time: '19h40 – 20h30', title: 'Jantar + família', sub: '', color: 'coral' },
    { id: 's9', time: '20h30 – 22h00', title: 'Tempo livre — série, YouTube', sub: 'Você mereceu, sem culpa', color: 'gray' },
    { id: 's10', time: '22h00 – 22h30', title: 'Rotina noturna + cabelo', sub: '', color: 'teal' },
  ],
  ter: [
    { id: 't1', time: '05h00 – 05h30', title: 'Acordar + hidratação', sub: 'Sem celular', color: 'amber' },
    { id: 't2', time: '05h30 – 06h00', title: 'Estudo JavaScript — revisão', sub: '', color: 'purple' },
    { id: 't3', time: '06h00 – 07h00', title: 'Academia com seu pai', sub: '', color: 'green' },
    { id: 't4', time: '07h00 – 07h30', title: 'Café + preparar', sub: '', color: 'gray' },
    { id: 't5', time: '09h00 – 18h00', title: 'Trabalho', sub: '', color: 'blue' },
    { id: 't6', time: '18h00 – 18h30', title: 'Descompressão', sub: '', color: 'gray' },
    { id: 't7', time: '19h00 – 19h40', title: 'Estudo JavaScript (40 min)', sub: 'Projeto prático', color: 'purple' },
    { id: 't8', time: '19h40 – 20h30', title: 'Jantar + família', sub: '', color: 'coral' },
    { id: 't9', time: '20h30 – 22h30', title: 'Tempo livre', sub: 'Série, YouTube, descanso', color: 'gray' },
  ],
  qua: [
    { id: 'q1', time: '05h00 – 05h30', title: 'Acordar + hidratação', sub: '', color: 'amber' },
    { id: 'q2', time: '05h30 – 06h00', title: 'Estudo JavaScript — projeto', sub: 'Dia de construir algo', color: 'purple' },
    { id: 'q3', time: '06h00 – 07h00', title: 'Academia com seu pai', sub: '', color: 'green' },
    { id: 'q4', time: '07h00 – 07h30', title: 'Café + preparar', sub: '', color: 'gray' },
    { id: 'q5', time: '09h00 – 18h00', title: 'Trabalho', sub: '', color: 'blue' },
    { id: 'q6', time: '18h00 – 19h00', title: 'Descanso / caminhada', sub: 'Sem academia hoje', color: 'gray' },
    { id: 'q7', time: '19h00 – 19h40', title: 'Estudo JavaScript (40 min)', sub: '', color: 'purple' },
    { id: 'q8', time: '19h40 – 20h30', title: 'Jantar + família', sub: '', color: 'coral' },
    { id: 'q9', time: '20h30 – 22h30', title: 'Tempo livre', sub: '', color: 'gray' },
  ],
  qui: [
    { id: 'qi1', time: '05h00 – 05h30', title: 'Acordar + hidratação', sub: '', color: 'amber' },
    { id: 'qi2', time: '05h30 – 06h00', title: 'Estudo JavaScript — dúvidas', sub: 'Revisar o que não entendeu', color: 'purple' },
    { id: 'qi3', time: '06h00 – 07h00', title: 'Academia com seu pai', sub: '', color: 'green' },
    { id: 'qi4', time: '07h00 – 07h30', title: 'Café + preparar', sub: '', color: 'gray' },
    { id: 'qi5', time: '09h00 – 18h00', title: 'Trabalho', sub: '', color: 'blue' },
    { id: 'qi6', time: '18h00 – 18h30', title: 'Descompressão', sub: '', color: 'gray' },
    { id: 'qi7', time: '19h00 – 19h40', title: 'Estudo JavaScript (40 min)', sub: '', color: 'purple' },
    { id: 'qi8', time: '19h40 – 20h30', title: 'Jantar + família', sub: '', color: 'coral' },
    { id: 'qi9', time: '20h30 – 22h30', title: 'Tempo livre', sub: '', color: 'gray' },
  ],
  sex: [
    { id: 'sx1', time: '05h00 – 05h30', title: 'Acordar + hidratação', sub: '', color: 'amber' },
    { id: 'sx2', time: '05h30 – 06h00', title: 'Estudo JavaScript — consolidar semana', sub: '', color: 'purple' },
    { id: 'sx3', time: '06h00 – 07h00', title: 'Academia com seu pai', sub: '', color: 'green' },
    { id: 'sx4', time: '07h00 – 07h30', title: 'Café + preparar', sub: '', color: 'gray' },
    { id: 'sx5', time: '09h00 – 18h00', title: 'Trabalho', sub: '', color: 'blue' },
    { id: 'sx6', time: '18h00 – 19h00', title: 'Descompressão longa', sub: 'Fim de semana começa agora', color: 'gray' },
    { id: 'sx7', time: '19h00 em diante', title: 'Namorada + tempo livre', sub: 'Aproveite', color: 'coral' },
  ],
  sab: [
    { id: 'sb1', time: '09h00 – 12h00', title: 'Trabalho (horário reduzido)', sub: 'Pode ir até 18h se colega não receber alta', color: 'blue' },
    { id: 'sb2', time: 'Após o trabalho', title: 'Tempo com a namorada', sub: 'Prioridade do final de semana', color: 'coral' },
    { id: 'sb3', time: '1 momento do dia', title: 'Estudo leve — 30 min (opcional)', sub: 'Só se sobrar energia', color: 'purple' },
    { id: 'sb4', time: 'Tarde', title: 'Revisão semanal rápida — 15 min', sub: 'O que funcionou? O que ajusto?', color: 'amber' },
    { id: 'sb5', time: 'À noite', title: 'Cuidados pessoais — cabelo, pele', sub: '', color: 'teal' },
  ],
  dom: [
    { id: 'dm1', time: 'Manhã', title: 'Descanso real — sem alarme', sub: 'O descanso não é opcional', color: 'gray' },
    { id: 'dm2', time: 'Dia todo', title: 'Namorada, lazer, qualidade', sub: 'Recarrega para a semana', color: 'coral' },
    { id: 'dm3', time: 'Tarde (opcional)', title: 'Estudo leve — vídeo ou podcast dev', sub: 'Só se quiser', color: 'purple' },
    { id: 'dm4', time: '21h00 – 22h00', title: 'Preparar a semana', sub: 'Roupa, lista mental, dormir cedo', color: 'teal' },
  ],
}

export const RULES = {
  overloaded: [
    'Corte tudo que não for essencial. Só: trabalho + sono + 1 refeição boa.',
    'Falhou 1 dia? Não recupera. Só retoma no próximo. Sem culpa.',
    'Consistência bate intensidade. 30 min todo dia > 3h uma vez.',
  ],
  dont: [
    'Não abrir celular/YouTube ao acordar — isso rouba o bloco de estudo.',
    'Não estudar mais de 1h30 sem pausa.',
    'Não planejar de novo sem executar o plano anterior.',
    'Não trocar estudo por série como padrão — série vem depois.',
  ],
  review: [
    'O que funcionou esta semana?',
    'O que não funcionou?',
    'O que ajusto na próxima semana?',
  ],
}

export const GOALS = {
  short: [
    { title: 'Retomar JavaScript', sub: 'Refazer um projeto simples. Só para religar a memória.' },
    { title: 'Fixar o bloco das 5h30', sub: '2 semanas sem falhar mais de 1 dia seguido.' },
    { title: 'Parar série/YouTube antes do estudo', sub: 'Estudo vem primeiro, descanso depois.' },
  ],
  mid: [
    { title: '2–3 projetos no GitHub', sub: 'Simples, funcionando e documentados.' },
    { title: '10 candidaturas dev enviadas', sub: 'Júnior ou estágio. Usar exp em suporte como diferencial.' },
    { title: 'Controle financeiro ativo', sub: 'Planilha simples. Saber onde vai cada real.' },
  ],
  long: [
    { title: 'Trabalhar como desenvolvedor', sub: 'Júnior front-end ou full-stack.' },
    { title: 'Ansiedade sob controle', sub: 'Rotina estável, sono bom, treino com o pai.' },
    { title: 'Evolução financeira', sub: 'Reserva de emergência + renda melhor.' },
  ],
}
