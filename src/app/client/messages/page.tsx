import { Image as ImageIcon, Paperclip, Send, Smile } from "lucide-react";
import { PageHeader } from "@/components/app/PageHeader";

const MESSAGES: {
  from: "coach" | "me";
  body: string;
  time: string;
  type?: "text" | "image" | "voice";
}[] = [
  {
    from: "coach",
    body: "Morning! Saw your bench session — clean reps. How was the rest of the day?",
    time: "Mon 8:14 AM",
  },
  {
    from: "me",
    body: "Felt strong! Could've gone heavier on set 3 honestly.",
    time: "Mon 9:02 AM",
  },
  {
    from: "coach",
    body: "Good to hear. Hold the load for one more session, then we'll bump 2.5kg.",
    time: "Mon 9:04 AM",
  },
  {
    from: "coach",
    body: "Quick form check — tag me when you do OHP this week, I want to see the bar path.",
    time: "Tue 11:30 AM",
  },
  {
    from: "me",
    body: "Will do. Also — can we move Friday's session? I have a wedding.",
    time: "Tue 6:48 PM",
  },
  {
    from: "coach",
    body: "Easy. Push it to Saturday, swap with the conditioning circuit. I'll update your plan.",
    time: "Tue 6:49 PM",
  },
  {
    from: "me",
    body: "Perfect, thanks 🙏",
    time: "Tue 6:50 PM",
  },
  {
    from: "coach",
    body: "Loved your last bench session — form looked dialed. Try +2.5kg today, but stop at 6 reps even if you've got more. We're building, not testing.",
    time: "Today · 2h ago",
  },
];

export default function ClientMessagesPage() {
  return (
    <div className="container-max">
      <PageHeader
        title="Messages"
        subtitle="Direct chat with your coach"
      />

      <div className="card flex h-[70vh] min-h-[560px] flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-3 border-b border-white/[0.06] px-5 py-4">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-accent-lime to-brand-400 text-xs font-bold text-ink-950">
            CF
          </div>
          <div className="min-w-0 flex-1">
            <div className="text-sm font-semibold">Cody Fairburn</div>
            <div className="flex items-center gap-1.5 text-[11px] text-white/55">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-lime" />
              Online · usually replies in a few hours
            </div>
          </div>
          <button className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium text-white/85 hover:bg-white/[0.08]">
            Coach profile
          </button>
        </div>

        {/* Thread */}
        <div className="flex-1 overflow-y-auto px-4 py-5 sm:px-6">
          <div className="mx-auto flex max-w-2xl flex-col gap-3">
            <DateDivider label="This week" />
            {MESSAGES.map((m, i) => (
              <Bubble key={i} {...m} />
            ))}
          </div>
        </div>

        {/* Composer */}
        <div className="border-t border-white/[0.06] p-3 sm:p-4">
          <div className="flex items-end gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-2 pl-3.5">
            <button
              aria-label="Attach"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-white/55 hover:bg-white/[0.05] hover:text-white"
            >
              <Paperclip className="h-4 w-4" />
            </button>
            <button
              aria-label="Photo"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-white/55 hover:bg-white/[0.05] hover:text-white"
            >
              <ImageIcon className="h-4 w-4" />
            </button>
            <textarea
              rows={1}
              placeholder="Message Cody…"
              className="max-h-32 flex-1 resize-none bg-transparent py-2 text-sm placeholder:text-white/40 focus:outline-none"
            />
            <button
              aria-label="Emoji"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-lg text-white/55 hover:bg-white/[0.05] hover:text-white"
            >
              <Smile className="h-4 w-4" />
            </button>
            <button
              aria-label="Send"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent-lime text-ink-950 hover:brightness-110"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
          <div className="mt-2 flex items-center justify-between text-[10px] text-white/40">
            <span>Press Shift + Enter for new line</span>
            <span>End-to-end encrypted</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function DateDivider({ label }: { label: string }) {
  return (
    <div className="my-2 flex items-center gap-3 text-[10px] uppercase tracking-wider text-white/40">
      <div className="h-px flex-1 bg-white/[0.06]" />
      <span>{label}</span>
      <div className="h-px flex-1 bg-white/[0.06]" />
    </div>
  );
}

function Bubble({
  from,
  body,
  time,
}: {
  from: "coach" | "me";
  body: string;
  time: string;
}) {
  const isMe = from === "me";
  return (
    <div
      className={`flex items-end gap-2.5 ${
        isMe ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div
        className={`grid h-7 w-7 shrink-0 place-items-center rounded-full text-[10px] font-bold text-ink-950 ${
          isMe
            ? "bg-gradient-to-br from-pink-400 to-fuchsia-500"
            : "bg-gradient-to-br from-accent-lime to-brand-400"
        }`}
      >
        {isMe ? "SW" : "CF"}
      </div>
      <div className={`flex max-w-[78%] flex-col ${isMe ? "items-end" : "items-start"}`}>
        <div
          className={`rounded-2xl px-3.5 py-2.5 text-[13px] leading-snug ${
            isMe
              ? "rounded-br-sm bg-accent-lime text-ink-950"
              : "rounded-bl-sm border border-white/[0.08] bg-white/[0.04] text-white/90"
          }`}
        >
          {body}
        </div>
        <div className="mt-1 px-1 text-[10px] text-white/40">{time}</div>
      </div>
    </div>
  );
}
