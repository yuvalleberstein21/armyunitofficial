

const ImageBanner = () => {
    return (
        <div className="mx-auto h-[450px] relative" dir="rtl">
            {/* Background Image */}
            <img
                src="./images/idf3.webp"
                alt="image idf comando"
                className="object-cover bg-center w-full h-full bg-no-repeat opacity-70"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-slate-400 bg-opacity-50"></div>

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-4 text-white">
                <div className="text-balance text-4xl font-semibold tracking-tight text-secondary lg:text-6xl md:text-5xl">
                    תורמים מתפתחים באתר
                </div>
                <div className="text-xl lg:text-2xl md:text-2xl font-semibold text-secondary">
                    אתר לעמותת היחידה המובחרת
                </div>
                <button className="text-xl font-semibold text-primary bg-accent-light px-6 py-1 hover:opacity-90 cursor-default">
                    לחץ לקריאה
                </button>
            </div>
        </div>
    )
}

export default ImageBanner