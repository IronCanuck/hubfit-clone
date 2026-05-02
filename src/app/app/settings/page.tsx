import { Settings } from "lucide-react";
import { ComingSoon } from "@/components/app/ComingSoon";

export default function SettingsPage() {
  return (
    <ComingSoon
      icon={Settings}
      title="Settings"
      subtitle="Profile, branding, billing, team, and integrations"
      features={[
        "Profile & coach bio",
        "App branding (logo, colors)",
        "Billing & subscription",
        "Team & roles",
        "Connected integrations",
        "Notifications & preferences",
      ]}
    />
  );
}
