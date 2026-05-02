import { Apple } from "lucide-react";
import { ComingSoon } from "@/components/app/ComingSoon";

export default function NutritionPage() {
  return (
    <ComingSoon
      icon={Apple}
      title="Nutrition"
      subtitle="Macro targets, meal plans, and the in-app nutrition tracker"
      features={[
        "Per-client macro targets",
        "Meal plans with one-tap logging",
        "Cronometer & Apple Health sync",
        "Recipe books & cookbooks",
        "Hydration & supplement tracking",
        "Weekly compliance scoring",
      ]}
    />
  );
}
