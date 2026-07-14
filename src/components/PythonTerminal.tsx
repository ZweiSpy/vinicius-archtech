"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import type { TerminalLineKind } from "@/lib/dictionaries";

const TYPING_SPEED_MS = 22;
const LOOP_RESTART_MS = 4200;

function lineClass(kind: TerminalLineKind): string {
  switch (kind) {
    case "command":
      return "text-cyan-400";
    case "sistema":
      return "text-blue-400";
    case "sucesso":
      return "text-green-400";
    case "atencao":
      return "text-amber-400";
    case "robo":
      return "text-indigo-300";
  }
}

function formatDisplay(kind: TerminalLineKind, text: string): string {
  if (kind === "command") return `> ${text}`;
  return text;
}

interface RenderedLine {
  kind: TerminalLineKind;
  text: string;
}

export function PythonTerminal() {
  const { locale, dict } = useLanguage();
  const script = dict.terminal.script;

  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-40px" });
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const scriptRef = useRef(script);
  scriptRef.current = script;

  const [lines, setLines] = useState<RenderedLine[]>([]);
  const [activeText, setActiveText] = useState("");
  const [activeKind, setActiveKind] = useState<TerminalLineKind>("command");
  const [isTyping, setIsTyping] = useState(false);
  const [done, setDone] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [started, setStarted] = useState(false);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  const schedule = useCallback((fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms);
    timersRef.current.push(id);
    return id;
  }, []);

  const runScript = useCallback(() => {
    clearTimers();
    setLines([]);
    setActiveText("");
    setDone(false);
    setIsTyping(true);

    const currentScript = scriptRef.current;
    let cumulativeDelay = 0;

    currentScript.forEach((line, index) => {
      const full = formatDisplay(line.kind, line.text);
      cumulativeDelay += line.pauseBefore ?? 300;
      const startAt = cumulativeDelay;

      schedule(() => {
        setActiveKind(line.kind);
        setActiveText("");

        for (let i = 1; i <= full.length; i++) {
          const charDelay = i * TYPING_SPEED_MS;
          schedule(() => {
            setActiveText(full.slice(0, i));
          }, charDelay);
        }

        const finishAt = full.length * TYPING_SPEED_MS + 40;
        schedule(() => {
          setLines((prev) => [...prev, { kind: line.kind, text: full }]);
          setActiveText("");

          if (index === currentScript.length - 1) {
            setIsTyping(false);
            setDone(true);
            schedule(() => runScript(), LOOP_RESTART_MS);
          }
        }, finishAt);
      }, startAt);

      cumulativeDelay += full.length * TYPING_SPEED_MS + 40;
    });
  }, [clearTimers, schedule]);

  useEffect(() => {
    if (isInView && !started) {
      setStarted(true);
      runScript();
    }
  }, [isInView, started, runScript]);

  // Restart animation when language changes
  useEffect(() => {
    if (!started) return;
    runScript();
  }, [locale]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const id = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(id);
  }, []);

  useEffect(() => () => clearTimers(), [clearTimers]);

  const cursor = (
    <span
      aria-hidden
      className={`ml-0.5 inline-block h-[1.05em] w-[0.55em] translate-y-[2px] bg-cyan-400 align-middle transition-opacity duration-100 ${
        showCursor ? "opacity-100" : "opacity-0"
      }`}
    />
  );

  return (
    <div
      ref={containerRef}
      className="w-full max-w-xl overflow-hidden rounded-xl border border-cyan-500/20 bg-zinc-950 shadow-lg shadow-cyan-500/20"
      role="img"
      aria-label={dict.terminal.ariaLabel}
    >
      <div className="flex items-center gap-2 border-b border-white/5 bg-zinc-900/90 px-4 py-3">
        <span className="h-3 w-3 shrink-0 rounded-full bg-red-500/90" />
        <span className="h-3 w-3 shrink-0 rounded-full bg-yellow-400/90" />
        <span className="h-3 w-3 shrink-0 rounded-full bg-green-500/90" />
        <span className="ml-3 truncate font-mono text-xs text-zinc-500">
          {dict.terminal.windowTitle}
        </span>
      </div>

      <div className="relative min-h-[260px] px-4 py-5 sm:min-h-[320px] sm:px-5 sm:py-6">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.04),transparent_60%)]" />

        <pre className="relative z-10 overflow-x-auto whitespace-pre-wrap break-all font-mono text-[11px] leading-relaxed sm:break-normal sm:text-xs md:text-[13px]">
          {lines.map((line, i) => (
            <div
              key={`${i}-${line.text.slice(0, 16)}`}
              className={`${lineClass(line.kind)} mb-1`}
            >
              {line.text}
            </div>
          ))}

          {isTyping && activeText && (
            <div className={`${lineClass(activeKind)} mb-1`}>
              {activeText}
              {cursor}
            </div>
          )}

          {(done || (isTyping && !activeText) || !started) && (
            <div className="text-cyan-400">
              {"> "}
              {cursor}
            </div>
          )}
        </pre>
      </div>
    </div>
  );
}
