const Hero = () => {
    return (
        <section id="hero">
            <div className="container mx-auto my-20 p-6">
                <div className="flex flex-col space-y-4 max-w-md mx-auto md:mx-0">
                    <h1 className="text-7xl font-bold text-emerald-500 text-center md:text-left">
                        Creative
                    </h1>
                    <h1 className="text-7xl font-bold text-slate-500 text-center md:text-left">
                        Business
                    </h1>
                    <div className="border-2 border-emerald-500 w-32 self-center md:self-start"></div>
                    <p className="text-center md:text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan tortor posuere ac ut consequat semper viverra nam. Dolor magna eget est lorem ipsum dolor sit amet.
                    </p>
                    {/* Learn More */}
                    <div className="flex justify-center md:justify-start">
                        <a
                            href="#"
                            className="p-2 px-6 text-white bg-emerald-500 rounded-full hover:bg-slate-500"
                        >Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;