import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Lightbulb, UserRound, X } from "lucide-react";
import { avatarUrl, funFacts } from "@/data/funFacts";

type Appearance = { index: number; side: "left" | "right" };
export default function FunFactPopup() {
  const [enabled, setEnabled] = useState(true);
  const [appearance, setAppearance] = useState<Appearance | null>(null);
  const [avatarMissing, setAvatarMissing] = useState(false);
  const previous = useRef(-1);
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    if (!enabled) return;
    const timer = window.setInterval(() => {
      const focused = document.activeElement;
      const busy = document.hidden || focused?.matches("input, textarea, select, [contenteditable='true']") || document.querySelector('[data-menu-open="true"]');
      if (busy) return;
      // Choose the topic first, then a fact, without repeating the last topic.
      const topics = [...new Set(funFacts.map(fact => fact.topic))]
        .filter(topic => topic !== funFacts[previous.current]?.topic);
      const topic = topics[Math.floor(Math.random() * topics.length)];
      const choices = funFacts.map((fact, index) => ({ ...fact, index })).filter(fact => fact.topic === topic);
      const index = choices[Math.floor(Math.random() * choices.length)].index;
      previous.current = index;
      setAppearance({ index, side: Math.random() < 0.5 ? "left" : "right" });
    }, 25000);
    return () => window.clearInterval(timer);
  }, [enabled]);
  useEffect(() => {
    if (!appearance) return;
    const timer = window.setTimeout(() => setAppearance(null), 9000);
    return () => window.clearTimeout(timer);
  }, [appearance]);
  const close = () => setAppearance(null);
  const offset = !appearance || reduceMotion ? { opacity: 0 } : { opacity: 0, x: appearance.side === "left" ? -180 : 180 };
  return <>
    <button className="fun-fact-toggle" aria-pressed={enabled} onClick={() => { setEnabled(value => !value); close(); }} title={enabled ? "Pause fun facts" : "Enable fun facts"}>
      <Lightbulb size={15} aria-hidden="true" /><span>Fun facts {enabled ? "on" : "off"}</span>
    </button>
    <div className="fun-fact-stage">
    {enabled && <AnimatePresence>
      {enabled && appearance && <motion.aside key={`${appearance.index}-${appearance.side}`} className={`fun-fact-popup fact-${appearance.side}`} initial={offset} animate={{ opacity: 1, x: 0, y: 0 }} exit={offset} transition={{ duration: reduceMotion ? 0 : 0.4 }} aria-label="A fun fact from Edwin">
        <div className="fact-avatar" aria-hidden="true">
          {avatarMissing ? <span className="fact-avatar-fallback"><UserRound size={60} /><span>Edwin</span></span> : <img src={avatarUrl} alt="" onError={() => setAvatarMissing(true)} />}
        </div>
        <div className="fact-bubble">
          <button className="fact-close" onClick={close} aria-label="Dismiss fun fact"><X size={16} /></button>
          <p className="fact-eyebrow">Edwin’s fun fact · {funFacts[appearance.index].topic}</p>
          <p role="status" aria-live="polite">{funFacts[appearance.index].text}</p>
        </div>
      </motion.aside>}
    </AnimatePresence>}
    </div>
  </>;
}
