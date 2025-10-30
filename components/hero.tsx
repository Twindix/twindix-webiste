export const Hero = () => (
    /* full-bleed so the gradient reaches the edges, with the nav floating over it */
    <section className="hero-surface relative overflow-hidden">
        {/* give it near-full viewport height */}
        <div className="min-h-[78svh] grid place-items-center">
            <h1
                className="select-none text-blue-800 font-extrabold leading-none tracking-[0.06em]
                     text-[clamp(56px,10vw,160px)] drop-shadow"
            >
                TWINDIX
            </h1>
        </div>
    </section>
);
