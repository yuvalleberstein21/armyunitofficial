




const CardGrid = ({ image, title, description }) => {
    return (
        <div className="shadow-md rounded-sm overflow-hidden">
            <img src={image} alt={title} className="w-full max-h-56 p-3 object-cover" />
            <div className="p-4 min-h-60" dir="rtl">
                <h2 className="text-3xl font-bold mb-2 text-center text-secondary">{title}</h2>
                <p className="text-gray-600">{description}</p>
                <div className="text-center flex justify-center min-h-full py-10">
                    <button className="px-3 py-1 border border-accent-light text-accent-light rounded-sm hover:bg-accent-light hover:text-primary">
                        מידע נוסף
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardGrid