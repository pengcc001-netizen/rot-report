export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    subtypeSlug: string;
  }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "You hear a toilet flush. Your first thought is...",
    options: [
      { text: "Skibidi toilet lore, obviously", subtypeSlug: "skibidi-syndrome" },
      { text: "Nothing. It is a toilet.", subtypeSlug: "ohio-onset" },
      { text: "Is this a reference to something?", subtypeSlug: "npc-drift" },
      { text: "I am too cooked to have thoughts about toilets", subtypeSlug: "cooked-terminal-stage" },
    ],
  },
  {
    id: 2,
    question: "Someone attractive walks by. You...",
    options: [
      { text: "Assess their rizz level mentally", subtypeSlug: "rizz-deficit-disorder" },
      { text: "Think 'GYATT' involuntarily", subtypeSlug: "gyatt-hyperreflexia" },
      { text: "Mew your jaw at them", subtypeSlug: "mewing-jawlock" },
      { text: "Do not notice. You are scrolling.", subtypeSlug: "cooked-terminal-stage" },
    ],
  },
  {
    id: 3,
    question: "Your friend orders food. You say...",
    options: [
      { text: "Fanum tax. Hand some over.", subtypeSlug: "fanum-tax-economy" },
      { text: "Bussin, no cap", subtypeSlug: "skibidi-syndrome" },
      { text: "You do not eat with friends anymore", subtypeSlug: "cooked-terminal-stage" },
      { text: "Nothing. You eat alone. Sigma mode.", subtypeSlug: "sigma-lone-wolf-delusion" },
    ],
  },
  {
    id: 4,
    question: "You are at a party. You...",
    options: [
      { text: "Stand alone. I am the lone wolf.", subtypeSlug: "sigma-lone-wolf-delusion" },
      { text: "Act like an NPC waiting for dialogue", subtypeSlug: "npc-drift" },
      { text: "Mew in the corner hoping someone notices your jawline", subtypeSlug: "mewing-jawlock" },
      { text: "Are not at a party. You are at home scrolling.", subtypeSlug: "cooked-terminal-stage" },
    ],
  },
  {
    id: 5,
    question: "Someone says 'Ohio.' You...",
    options: [
      { text: "Know exactly what they mean. Only in Ohio.", subtypeSlug: "ohio-onset" },
      { text: "Think of Tralalero Tralala", subtypeSlug: "italian-brainrot-variant" },
      { text: "Wonder why everyone talks about a US state", subtypeSlug: "npc-drift" },
      { text: "Have no reaction. You are too far gone.", subtypeSlug: "cooked-terminal-stage" },
    ],
  },
  {
    id: 6,
    question: "Your daily screen time is...",
    options: [
      { text: "2-4 hours. I touch grass.", subtypeSlug: "rizz-deficit-disorder" },
      { text: "6-8 hours. I function.", subtypeSlug: "npc-drift" },
      { text: "10+ hours. I am the screen.", subtypeSlug: "cooked-terminal-stage" },
      { text: "I lost count. The screen lost count.", subtypeSlug: "italian-brainrot-variant" },
    ],
  },
  {
    id: 7,
    question: "A crocodile walks by. You think...",
    options: [
      { text: "Bombardiro Crocodilo!", subtypeSlug: "italian-brainrot-variant" },
      { text: "Is this a zoo?", subtypeSlug: "npc-drift" },
      { text: "Aura farming opportunity", subtypeSlug: "gyatt-hyperreflexia" },
      { text: "Nothing. Content has fried your brain.", subtypeSlug: "cooked-terminal-stage" },
    ],
  },
  {
    id: 8,
    question: "When was the last time you touched grass?",
    options: [
      { text: "Today. I am well-adjusted.", subtypeSlug: "rizz-deficit-disorder" },
      { text: "This week, probably", subtypeSlug: "ohio-onset" },
      { text: "What is grass?", subtypeSlug: "sigma-lone-wolf-delusion" },
      { text: "Grass cannot save me now.", subtypeSlug: "cooked-terminal-stage" },
    ],
  },
  {
    id: 9,
    question: "Your friend sends a meme you do not understand. You...",
    options: [
      { text: "Spend 40 minutes researching the lore", subtypeSlug: "skibidi-syndrome" },
      { text: "Reply 'based' and hope it fits", subtypeSlug: "npc-drift" },
      { text: "Mew and move on", subtypeSlug: "mewing-jawlock" },
      { text: "Cannot process. Brain void.", subtypeSlug: "cooked-terminal-stage" },
    ],
  },
  {
    id: 10,
    question: "How is your jawline?",
    options: [
      { text: "Perfectly mewed. I am a looksmaxxer.", subtypeSlug: "mewing-jawlock" },
      { text: "Normal. I do not think about it.", subtypeSlug: "ohio-onset" },
      { text: "Sigma jaw. Lone wolf energy.", subtypeSlug: "sigma-lone-wolf-delusion" },
      { text: "I have not looked in a mirror in days", subtypeSlug: "cooked-terminal-stage" },
    ],
  },
  {
    id: 11,
    question: "You hear Italian words you do not know. You think...",
    options: [
      { text: "Tralalero Tralala! Bombardiro Crocodilo!", subtypeSlug: "italian-brainrot-variant" },
      { text: "Is this a food?", subtypeSlug: "npc-drift" },
      { text: "Fanum tax is not Italian but close enough", subtypeSlug: "fanum-tax-economy" },
      { text: "I cannot hear anything over the content noise", subtypeSlug: "cooked-terminal-stage" },
    ],
  },
  {
    id: 12,
    question: "How would you describe your current state?",
    options: [
      { text: "I am the main character. Sigma energy.", subtypeSlug: "sigma-lone-wolf-delusion" },
      { text: "I am an NPC in someone else's story", subtypeSlug: "npc-drift" },
      { text: "My GYATT is off the charts", subtypeSlug: "gyatt-hyperreflexia" },
      { text: "Cooked. Absolutely cooked.", subtypeSlug: "cooked-terminal-stage" },
    ],
  },
]
