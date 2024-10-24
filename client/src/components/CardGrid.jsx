

const cards = [
    {
        image: "./images/idflogo.jpg",
        title: "הארגון",
        description: "lorem ipsum dolor sit amet, consectetur adip lorem, sed do eiusmod tempor incididunt ut labore"
    },
    {
        image: "https://via.placeholder.com/300",
        title: "המצודה",
        description: "This is the description for Card 2."
    },
    {
        image: "https://via.placeholder.com/300",
        title: "דברי היו״ר",
        description: "This is the description for Card 3."
    },
];

const CardGrid = () => {

    return (
        <div className="h-[100vh] lg:p-20 mt-5">
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <div key={index} className="shadow-md rounded-sm overflow-hidden">
                            <img src={card.image} alt={card.title} className="w-full min-h-48 object-cover" />
                            <div className="p-4">
                                <h2 className="text-3xl font-bold mb-2 text-center text-secondary">{card.title}</h2>
                                <p className="text-gray-600">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CardGrid