

const cards = [
    {
        image: "./images/idflogo.jpg",
        title: "הארגון",
        description: "lorem ipsum dolor sit amet, consectetur adip lorem, sed do eiusmod tempor incididunt ut labore"
    },
    {
        image: "https://via.placeholder.com/300",
        title: "המצודה",
        description: "lorem ipsum dolor sit amet, consectetur adip lorem, sed do eiusmod tempor incididunt ut labore"
    },
    {
        image: "https://via.placeholder.com/300",
        title: "דברי היו״ר",
        description: "lorem ipsum dolor sit amet, consectetur adip lorem, sed do eiusmod tempor incididunt ut labore"
    },
];

const CardGrid = () => {

    return (
        <div className="">
            <div className="container mx-auto md:p-20 p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:p-8">
                    {cards.map((card, index) => (
                        <div key={index} className="shadow-md rounded-sm overflow-hidden">
                            <img src={card.image} alt={card.title} className="w-full max-h-56 p-3 object-cover " />
                            <div className="p-4 min-h-60" dir="rtl">
                                <h2 className="text-3xl font-bold mb-2 text-center text-secondary">{card.title}</h2>
                                <p className="text-gray-600">{card.description}</p>
                                <div className="text-center flex justify-center min-h-full py-10">
                                    <button className="px-3 py-1 border border-accent-light text-accent-light rounded-sm hover:bg-accent-light hover:text-primary">מידע נוסף</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CardGrid