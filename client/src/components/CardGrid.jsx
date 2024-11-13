
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
            </div>
        </div>
    )
}

export default CardGrid