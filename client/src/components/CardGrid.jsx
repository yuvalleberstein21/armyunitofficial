




const CardGrid = ({ image, title, description }) => {
    return (
        <div className="shadow-lg rounded-lg mx-2 lg:mx-0 md:mx-0 overflow-hidden transition-transform duration-300 hover:scale-105">
            <img src={image} alt={title} className="w-full h-56 object-cover" />
            <div className="p-6 min-h-60 bg-white" dir="rtl">
                <h2 className="text-2xl font-bold mb-3 text-center text-secondary">{title}</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
                <div className="text-center">
                    <button className="px-5 py-2 border border-accent-light text-accent-light  hover:bg-accent-light hover:text-white transition-colors duration-300">
                        מידע נוסף
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardGrid