import CardGrid from "../components/CardGrid";


const cardData = [
    {
        image: "https://storage.bhol.co.il/images/jgvzm-ryx5i/media/386861/_imagebank_orig_orig_9dbba9f3087742f7a5ed0367d276cd51.jpg",
        title: "הארגון",
        description: "lorem ipsum dolor sit amet, consectetur adip lorem, sed do eiusmod tempor incididunt ut labore"
    },
    {
        image: "https://michaelarch.wordpress.com/wp-content/uploads/2017/05/dsc00318.jpg",
        title: "המצודה",
        description: "lorem ipsum dolor sit amet, consectetur adip lorem, sed do eiusmod tempor incididunt ut labore"
    },
    {
        image: "./images/idflogo.jpg",
        title: "דברי היו״ר",
        description: "lorem ipsum dolor sit amet, consectetur adip lorem, sed do eiusmod tempor incididunt ut labore"
    },
];
const Organizations = () => {
    return (
        <div className="container mx-auto md:p-20 p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:p-8">
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

export default Organizations