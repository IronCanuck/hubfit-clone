import { Zap } from "lucide-react";
import { ComingSoon } from "@/components/app/ComingSoon";

export default function AutomationsPage() {
  return (
    <ComingSoon
      icon={Zap}
      title="Automations"
      subtitle="Onboarding flows, AutoFlow content, and 5,000+ Zapier apps"
      features={[
        "Drag-and-drop flow builder",
        "Trigger on signup, week, or event",
        "AutoFlow content scheduling",
        "Zapier integration",
        "Webhooks & API",
        "Per-client conditional branches",
      ]}
    />
  );
}
