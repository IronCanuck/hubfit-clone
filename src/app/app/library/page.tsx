import { FolderOpen } from "lucide-react";
import { ComingSoon } from "@/components/app/ComingSoon";

export default function LibraryPage() {
  return (
    <ComingSoon
      icon={FolderOpen}
      title="Library"
      subtitle="Recipe books, workout videos, and on-demand resources"
      features={[
        "Recipe books with full macros",
        "Workout studio uploads",
        "PDF & guide collections",
        "Drip-scheduled content",
        "Branded watermarks",
        "Per-tier access control",
      ]}
    />
  );
}
