import { useEffect, useMemo, useRef, useState } from "react";

/**
 * TypewriterRich
 * - Reveals styled "runs" character-by-character, letting the browser wrap.
 * - Uses a speedValues array (ms) cycling per character: e.g., [10,30,20,40,50]
 * - No caret
 * - Sizer pattern is handled in the parent to keep height fixed.
 *
 * Props:
 * - runs: Array<{ text: string, render?: (children) => JSX }>
 * - speedValues: number[]  // e.g., [10, 30, 20, 40, 50]
 * - startDelay: number
 * - className: string
 */
function TypewriterRich({
  runs,
  speedValues = [20, 50, 30],
  startDelay = 0,
  className = "",
}) {
  const totalChars = useMemo(
    () => runs.reduce((sum, r) => sum + (r.text?.length || 0), 0),
    [runs]
  );
  const [i, setI] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    const speeds = speedValues.length ? speedValues : [20];

    const tick = (n) => {
      if (cancelled) return;
      if (n >= totalChars) return;
      setI(n + 1);
      const delay = speeds[(n + 1) % speeds.length]; // next char delay
      timerRef.current = setTimeout(() => tick(n + 1), delay);
    };

    // Start after optional delay
    timerRef.current = setTimeout(() => tick(0), startDelay);

    return () => {
      cancelled = true;
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [totalChars, speedValues, startDelay]);

  // Render each run with only the visible portion
  let consumed = 0;
  const children = runs.map((run, idx) => {
    const len = run.text.length;
    const remaining = Math.max(0, i - consumed);
    const visibleLen = Math.min(len, remaining);
    consumed += len;

    const nodeText = run.text.slice(0, visibleLen);
    const content = nodeText;

    if (run.render) return <span key={idx}>{run.render(content)}</span>;
    return <span key={idx}>{content}</span>;
  });

  return (
    <span aria-live="polite" className={`whitespace-pre-wrap break-words ${className}`}>
      {children}
    </span>
  );
}

/**
 * Utility to render the FULL text with (mostly) the same look,
 * but with non-interactive elements, for the hidden sizer.
 * We avoid <a> to prevent duplicate focus/links; we mirror visuals with <span>.
 */
function RenderRunsForSizer({ runs }) {
  return (
    <>
      {runs.map((run, idx) => {
        const t = run.text;
        // Heuristically mirror the styling of your "render" without anchors.
        // If a run used a link, we keep the same classes but swap to a <span>.
        // Otherwise, just render the text.
        if (run.__type === "link") {
          return (
            <span
              key={idx}
              className={run.linkClassName}
            >
              {t}
            </span>
          );
        }
        if (run.__type === "styled") {
          return (
            <span key={idx} className={run.className || ""}>
              {t}
            </span>
          );
        }
        return <span key={idx}>{t}</span>;
      })}
    </>
  );
}

export { TypewriterRich, RenderRunsForSizer };
