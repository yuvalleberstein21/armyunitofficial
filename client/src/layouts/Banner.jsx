

const Banner = () => {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8 min-h-screen">
            {/* Background Image */}
            <img
                src="./images/idf2.jpg"
                alt="idf image"
                className="absolute inset-0 -z-10 w-full h-full object-cover bg-center opacity-80 transition-opacity duration-700 ease-out"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 -z-10 bg-black opacity-50"></div>

            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                <div className="text-center">
                    <h1 className="text-balance text-5xl font-semibold tracking-tight text-primary sm:text-7xl">
                        האתר לעמותת היחידה המובחרת
                    </h1>
                    <p className="mt-8 text-pretty text-lg font-medium text-primary sm:text-xl/8">
                        העמותה הרשמית ליחידה המיוחדת
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            תרומות
                        </a>
                        <a href="#" className="text-sm font-semibold leading-6 bg-accent-light px-3.5 py-2.5 rounded-md text-primary">
                            על היחידה <span aria-hidden="true">→</span>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner