import Script from "next/script";
import { GIVEBUTTER_SCRIPT_SRC } from "@/lib/givebutter";
import "./projects.css";

/** Project pages: item drives with Givebutter checkout, inside the omelora.org navbar and footer. */
export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="projects-root bg-background">
      <Script src={GIVEBUTTER_SCRIPT_SRC} strategy="afterInteractive" />
      {children}
    </div>
  );
}
