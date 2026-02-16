import Image from 'next/image';

export default function TrainingSection() {
    const programs = [
        {
            title: "Pro Equipment",
            image: "/Rectangle 20.png",
            description: "From strength to fat loss, our expert equipment help you learn whether and achieve real results at any fitness level."
        },
        {
            title: "Expert Trainers",
            image: "/Rectangle 21.png",
            description: "From strength to fat loss, our expert equipment help you learn whether and achieve real results at any fitness level."
        },
        {
            title: "Health Report",
            image: "/Rectangle 22.png",
            description: "From strength to fat loss, our expert equipment help you learn whether and achieve real results at any fitness level."
        }
    ];

    return (
        <section className="bg-white py-24 px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <div>
                    <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-[2px] bg-brand-primary" />
                        <span className="text-brand-primary font-bold tracking-widest text-xs uppercase underline decoration-brand-primary decoration-2 underline-offset-4">Why Choose Us</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-brand-dark leading-tight">
                        Personal <span className="text-brand-primary">Training</span><br />
                        Will <span className="text-brand-primary">Work For You</span>
                    </h2>
                </div>
                <p className="max-w-md text-neutral-500 text-sm font-medium leading-relaxed">
                    From strength to fat loss, our expert equipment help you learn whether and achieve real results at any fitness level.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {programs.map((program, idx) => (
                    <div key={idx} className="relative group overflow-hidden rounded-xl h-[400px]">
                        <Image
                            src={program.image}
                            alt={program.title}
                            width={500}
                            height={400}
                            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-8 flex flex-col justify-end">
                            <h3 className="text-white text-2xl font-black mb-2 uppercase tracking-tight">{program.title}</h3>
                            <p className="text-white/70 text-xs leading-relaxed max-w-[250px]">
                                {program.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
