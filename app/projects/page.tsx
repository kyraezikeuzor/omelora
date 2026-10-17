import Link from "next/link";
import type { Metadata } from "next";
import { getActiveProjects } from "@/lib/projects";
import { typography } from "@/styles/typography";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Projects | Omelora",
  description: "Donate school supplies, gifts and other items to the children Omelora's partner centers serve.",
};

export default async function ProjectsPage() {
  const projects = await getActiveProjects();
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <h1 className={`${typography.pageTitle} text-foreground`}>Projects</h1>
      <p className={`${typography.body} mt-2 max-w-2xl text-muted-foreground`}>
        Choose a project and donate the items it needs. Omelora buys each item and delivers it.
      </p>
      {projects.length === 0 ? (
        <p className={`${typography.body} mt-8 text-muted-foreground`}>New projects are coming soon.</p>
      ) : (
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const percent = project.itemsNeeded ? Math.min(100, Math.round((project.itemsFunded / project.itemsNeeded) * 100)) : 0;
            return (
              <li key={project.id}>
                <Link href={`/projects/${project.slug}`} className="group block rounded-2xl border-2 border-border p-3 transition-colors hover:bg-muted/60">
                  <div className="aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                    {project.imageUrl && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={project.imageUrl} alt="" className="h-full w-full object-cover transition-transform group-hover:scale-[1.02]" />
                    )}
                  </div>
                  <h2 className={`${typography.cardTitle} mt-3 text-foreground`}>{project.name}</h2>
                  {project.summary && <p className={`${typography.bodySmall} mt-1 line-clamp-2 text-[#4A4A4A]`}>{project.summary}</p>}
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-bridge-action" style={{ width: `${percent}%` }} />
                  </div>
                  <p className={`${typography.helper} mt-1 text-muted-foreground`}>
                    {project.itemsFunded} of {project.itemsNeeded} items funded
                  </p>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}
