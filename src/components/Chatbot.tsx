import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot, Loader2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { cn } from '../lib/utils';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

const SYSTEM_PROMPT = `
You are the "Titan Fitness Assistant", a helpful and energetic AI for Titan Fitness Hub in Gulshan-e-Iqbal, Karachi.
Your goal is to answer queries about the gym and help convert visitors into members.

Key Info:
- Location: Gulshan-e-Iqbal, Karachi.
- Timings: 24/7 for males. Ladies hours are 10 AM – 5 PM.
- Packages: 
  * Student: Rs. 8,000 (Inc. Registration)
  * Monthly: Rs. 6,000 (+ Registration)
  * Quarterly VIP: Rs. 22,000 (Zero Registration)
  * Ladies Power: Rs. 5,500 (10 AM - 5 PM)
- Facilities: Imported Life Fitness Cardio, Heavy Weight Section, Steam/Sauna, Locker Rooms, CrossFit, MMA Zone, Supplement Bar.
- Personality: Strong, motivating, professional, and welcoming.

Keep answers concise. If asked about joining, encourage them to "Claim their Free 3-Day Pass" on the website.
`;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([
    { role: 'model', text: 'Salam! I am your Titan Fitness Assistant. How can I help you reach your goals today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    const currentMessages = [...messages, { role: 'user', text: userMessage } as const];
    setInput('');
    setMessages(currentMessages);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: currentMessages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }],
        })),
        config: {
          systemInstruction: SYSTEM_PROMPT,
        }
      });

      const botText = response.text || "I'm not sure how to answer that, but if you visit our gym in Gulshan, our staff can definitely help!";
      setMessages(prev => [...prev, { role: 'model', text: botText }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: 'Sorry, I am having a bit of a technical glitch. Can you try again?' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-brand-neon text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95"
      >
        <MessageCircle size={32} />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            className="fixed bottom-24 right-8 z-50 w-[350px] md:w-[400px] h-[500px] bg-brand-charcoal border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 bg-brand-neon text-black flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-black p-2 rounded-full">
                  <Bot size={20} className="text-brand-neon" />
                </div>
                <div>
                  <p className="font-bold text-sm leading-none">TITAN ASSISTANT</p>
                  <p className="text-[10px] font-black tracking-widest opacity-60">GULSHAN HUB</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-black/10 p-1 rounded-full">
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 bg-noise relative">
              {messages.map((m, idx) => (
                <div key={idx} className={cn('flex', m.role === 'user' ? 'justify-end' : 'justify-start')}>
                  <div className={cn('max-w-[80%] p-4 rounded-2xl text-sm',
                    m.role === 'user' 
                      ? 'bg-brand-neon text-black rounded-tr-none' 
                      : 'bg-white/5 text-gray-200 border border-white/10 rounded-tl-none'
                  )}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/10">
                    <Loader2 className="animate-spin text-brand-neon" size={16} />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 bg-brand-black border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about membership, timings..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-neon transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="bg-brand-neon text-black p-3 rounded-xl disabled:opacity-50 transition-all hover:scale-105 active:scale-95"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
