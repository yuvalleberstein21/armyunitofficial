import CardGrid from "../components/CardGrid";

const cardData = [
    {
        image: "https://adrenalin-israel.co.il/wp-content/uploads/%D7%A6%D7%94%D7%9C.jpg",
        title: "הארגון",
        description: "lorem ipsum dolor sit amet, consectetur adip lorem, sed do eiusmod tempor incididunt ut labore"
    },
    {
        image: "https://gonegev.co.il/wp-content/uploads/2017/06/%D7%9E%D7%A6%D7%95%D7%93%D7%AA-%D7%99%D7%95%D7%90%D7%91.jpg",
        title: "כותרת",
        description: "lorem ipsum dolor sit amet, consectetur adip lorem, sed do eiusmod tempor incididunt ut labore"
    },
    {
        image: "./images/idflogo.jpg",
        title: "כותרת",
        description: "lorem ipsum dolor sit amet, consectetur adip lorem, sed do eiusmod tempor incididunt ut labore"
    },

];

const Activities = () => {
    return (
        <div className="container mx-auto md:p-5 p-4 pt-10 lg:pt-16 md:pt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:grid-cols-3 gap-6 lg:p-8">
                {cardData.map((card, index) => (
                    <CardGrid
                        key={index}
                        image={card.image}
                        title={card.title}
                        description={card.description}
                    />
                ))}
            </div>
        </div>
    )
}

export default Activities