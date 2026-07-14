export interface RotStage {
  number: number;
  name: string;
  description: string;
  symptoms: string[];
  recovery: string;
}

export const rotStages: RotStage[] = [
  {
    number: 1,
    name: "Slang Creep",
    description: "Stage 1 is the entry point. You start using internet slang in real-life conversations without noticing. 'No cap' slips into a work email. 'Slay' becomes your default compliment. The vocabulary of your group chats has begun colonizing your spoken language. This is the earliest detectable sign of brain rot. It is completely reversible with awareness and moderate social interaction with people over 30.",
    symptoms: ["Saying 'no cap' out loud", "Using 'based' as a compliment", "Typing 'ngl' instead of 'honestly'", "Humming TikTok audio"],
    recovery: "Talk to a human over age 40. Read a book published before 2010. Touch grass for 20 minutes daily.",
  },
  {
    number: 2,
    name: "Attention Span Dip",
    description: "Stage 2 affects your cognitive processing. You can no longer watch a full YouTube video without skipping. You open TikTok, scroll for 45 minutes, and remember nothing. Your brain has been trained to expect dopamine every 8 seconds, and anything longer feels boring. Books are out of the question. Movies require a second screen. This stage is concerning but still reversible with deliberate effort.",
    symptoms: ["Skipping videos after 5 seconds", "Cannot read books anymore", "Opening and closing the same app", "Checking phone every 3 minutes"],
    recovery: "Set a 25-minute timer. Do not touch your phone. Repeat 4x daily. Read one page of a book. Increase by one page each day.",
  },
  {
    number: 3,
    name: "Meme-Tinted Glasses",
    description: "Stage 3 is perceptual. You start seeing the world through memes. A stranger trips and you immediately think of the meme format it resembles. Your friend's relationship drama is narrated in your head using TikTok audio. You reference memes in serious conversations and are confused when people do not understand. The membrane between internet and reality has thinned.",
    symptoms: ["Thinking in meme formats", "Quoting TikToks in serious settings", "Brainrot terminology in professional emails", "Cannot explain concepts without memes"],
    recovery: "Spend 24 hours offline. Go outside. Have a conversation with no references to internet culture. It will be hard. That is the point.",
  },
  {
    number: 4,
    name: "Content Void",
    description: "Stage 4 is terminal. You have consumed so much content that your brain produces nothing original. When asked for an opinion, you quote someone else. When asked for a joke, you reference a meme. Your inner monologue has been replaced by a scroll. The good news: this stage sounds worse than it is. The brain is plastic. Recovery is possible with sustained, deliberate exposure to boredom, nature, and genuine human connection.",
    symptoms: ["No original thoughts", "Cannot form opinions without internet input", "Scroll reflexively even when not on phone", "Feel empty when not consuming content"],
    recovery: "Digital detox: 72 hours. No screens except for calls. Go outside. Be bored. Boredom is the cure. Let your brain make noise again.",
  },
]
