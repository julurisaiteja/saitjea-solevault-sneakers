"use client";
import { useState } from "react";
import { brand } from "@/lib/data";

type Msg = { role: "bot" | "user"; text: string };

export function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([{ role: "bot", text: `Vault size chat — drops, auth, code ${brand.offer.code}.` }]);
  const [input, setInput] = useState("");

  function ask(q: string) {
    if (!q.trim()) return;
    const hit =
      brand.ai.find(([a]) => q.toLowerCase().includes(a.toLowerCase().slice(0, 12))) ||
      brand.ai.find(([a]) =>
        a.toLowerCase().split(" ").some((w) => w.length > 4 && q.toLowerCase().includes(w))
      );
    const answer = hit ? hit[1] : `Check DROPS or use ${brand.offer.code} on accessories.`;
    setMsgs((m) => [...m, { role: "user", text: q }, { role: "bot", text: answer }]);
    setInput("");
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-50 border-2 border-vault-fg bg-white px-4 py-2 font-mono text-[10px] uppercase shadow-lg"
      >
        {open ? "Close" : "Size chat"}
      </button>
      {open && (
        <div className="fixed bottom-16 right-5 z-50 flex h-[400px] w-[min(92vw,360px)] flex-col border-2 border-vault-fg bg-white shadow-2xl">
          <div className="border-b-2 border-vault-fg px-4 py-3 font-mono text-xs uppercase">Live size chat</div>
          <div className="flex-1 space-y-2 overflow-y-auto p-3 text-sm">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-8 border-l-4 border-vault-pink bg-vault-bg px-3 py-2"
                    : "mr-6 border border-vault-border bg-vault-bg/50 px-3 py-2"
                }
              >
                {m.text}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-1 border-t-2 border-vault-fg p-2">
            {brand.ai.slice(0, 3).map(([q]) => (
              <button key={q} type="button" className="border border-vault-fg px-2 py-1 font-mono text-[9px]" onClick={() => ask(q)}>
                {q.slice(0, 24)}
              </button>
            ))}
          </div>
          <form
            className="flex gap-2 border-t-2 border-vault-fg p-2"
            onSubmit={(e) => {
              e.preventDefault();
              ask(input);
            }}
          >
            <input className="input-vault !py-2" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask vault…" />
            <button className="btn-vault !px-3 !py-2" type="submit">Send</button>
          </form>
        </div>
      )}
    </>
  );
}
