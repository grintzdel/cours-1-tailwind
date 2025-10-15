import ProjectHead from "@/modules/app/react/components/project-head";
import ProjectBento from "@/modules/app/react/components/project-bento";
import ProjectCollection from "@/modules/app/react/components/project-collection";

export default function ProjectSection() {
 return (
     <section>
        <ProjectHead />
        <ProjectBento />
         <ProjectCollection />
    </section>
 )
}