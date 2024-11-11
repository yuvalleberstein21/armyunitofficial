
const CardGrid = ({ title, description }) => {
    return (
        <div
            className="bg-gradient-to-br from-blue-200 to-blue-500 shadow-lg rounded-lg p-8 mx-2 lg:mx-0 md:mx-0 transition-transform duration-300 hover:scale-105 hover:shadow-2xl transform hover:rotate-1"
        >
            <div className="flex flex-col h-full text-center text-primary">
                <h2 className="text-3xl font-bold mb-3 text-accent-dark drop-shadow-lg">{title}</h2>
                <p className="text-gray-100 mb-4 leading-relaxed text-lg drop-shadow-md">
                    {description}
                </p>
                <div className="mt-auto">
                    <button className="px-6 py-3 rounded-full border-2 border-white text-white font-semibold bg-opacity-20 hover:bg-white hover:text-blue-500 transition-colors duration-300">
                        מידע נוסף
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardGrid