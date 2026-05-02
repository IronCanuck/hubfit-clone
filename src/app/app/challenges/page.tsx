import { Trophy } from "lucide-react";
import { ComingSoon } from "@/components/app/ComingSoon";

export default function ChallengesPage() {
  return (
    <ComingSoon
      icon={Trophy}
      title="Challenges"
      subtitle="Live leaderboards, milestone badges, and automatic progress"
      features={[
        "Step, training, & habit challenges",
        "Live leaderboards",
        "Milestone badges",
        "Auto sync from wearables",
        "Public & private challenges",
        "Branded share cards",
      ]}
    />
  );
}
