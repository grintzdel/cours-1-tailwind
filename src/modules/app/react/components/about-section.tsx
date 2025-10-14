import AboutTitle from "@/modules/app/react/components/about-title";
import AboutText from "@/modules/app/react/components/about-text";
import AboutGrid from "@/modules/app/react/components/about-grid";

export default function AboutSection() {
    return (
        <section className="px-8 md:px-16 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <AboutTitle />
                <div className="row-span-2">
                    <AboutGrid />
                </div>
                <AboutText />
            </div>
        </section>
    )
}