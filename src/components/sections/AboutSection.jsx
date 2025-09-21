const AboutSection = () => {
    return (
        <section id="aboutSection" className="flex w-full h-fit lg:h-screen items-center justify-center bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(/src/assets/AB1.jpg)` }}>
            <div className="w-full m-4 lg:w-280 flex flex-col lg:flex-row backdrop-blur-2xl bg-stone-900/15 shadow-xl">
                
                <div className="flex flex-1 bg-amber-100 border-[#7F7F7F] border-1">
                    <video 
                        className="w-full h-full object-cover"
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                    >
                        <source src="/src/assets/3dScan.mov" type="video/mp4" />
                        <source src="/src/assets/3dScan.mov" type="video/quicktime" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                
                <div className="flex-1 text-2xl text-stone-50 font-['Geist_Mono'] font-normal px-6 py-4 border-[#7F7F7F] border-1">
                    Hi, I'm Eduardo!<br /><br />
                    I live to make stuff. I was born and raised in Sao Paulo, Brazil, so feel free to reach out to me in English or Portuguese.<br />
                    I graduated from RISD with a BFA Industrial Design and was awarded the Marc Harrison Design Excellence award.
                    In my spare time you'll find me sketching, riding my bike, or writing something on my <a href="https://edusinconsistentblog.bearblog.dev/" target="_blank" rel="noopener noreferrer" className="underline hover:text-stone-300">blog</a>.
                </div>
            </div>
        </section>
    )
}

export default AboutSection;