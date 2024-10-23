

const Banner = () => {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8">
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                className="absolute inset-0 -z-10 w-full h-[100vh] object-cover"
            >
                <source src="./images/bannerarmy.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="text-center">
                    <h1 className="text-balance text-5xl font-semibold tracking-tight text-primary sm:text-7xl">
                        Data to enrich your online business
                    </h1>
                    <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Get started
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 bg-black px-3.5 py-2.5 rounded-md text-primary">
                            Learn more <span aria-hidden="true">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner