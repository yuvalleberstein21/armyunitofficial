// import CardGrid from "../components/CardGrid";
import Logo from '/images/logo-nobg.png';


// const cardData = [
//     {
//         image: "https://storage.bhol.co.il/images/jgvzm-ryx5i/media/386861/_imagebank_orig_orig_9dbba9f3087742f7a5ed0367d276cd51.jpg",
//         title: "הארגון",
//         description: "lorem ipsum dolor sit amet, consectetur adip lorem, sed do eiusmod tempor incididunt ut labore"
//     },
//     {
//         image: "https://michaelarch.wordpress.com/wp-content/uploads/2017/05/dsc00318.jpg",
//         title: "כותרת",
//         description: "lorem ipsum dolor sit amet, consectetur adip lorem, sed do eiusmod tempor incididunt ut labore"
//     },
//     {
//         image: "./images/idflogo.jpg",
//         title: "דברי היו״ר",
//         description: "lorem ipsum dolor sit amet, consectetur adip lorem, sed do eiusmod tempor incididunt ut labore"
//     },
// ];
const Organizations = () => {
    return (
        <div className="container mx-auto p-4 pt-10 lg:pt-16" dir="rtl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:p-8 items-center">
                {/* Summary Column */}
                <div className="lg:p-8 bg-white rounded-lg">
                    <img src={Logo} alt="Logo" className='w-1/2 h-36' />
                    <p className="text-gray-700 text-lg leading-relaxed px-5 py-2">
                        כשקמנו לבוקר של ה-7 באוקטובר, כל מה שהכרנו נשבר באחת. תחושת הביטחון שהייתה חלק מחיינו התפוגגה. המלחמה בצפון מזכירה לנו שמה שקרה בדרום עלול להתרחש גם כאן ותושבי רמת הגולן עומדים בפני סכנה מוחשית.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed mt-2 px-5 py-1">
                        אסור לנו להמתין עד שהמציאות תכה שוב!
                        בעזרת התמיכה שלכם, נוכל להעניק ללוחמי היחידה את הכוח להגן על בתיהם ומשפחותיהם ולהכין אותם לכל תרחיש אפשרי.
                    </p>
                </div>

                {/* Video Column */}
                <div className="shadow-lg rounded-lg overflow-hidden">
                    <iframe
                        className="min-w-full object-cover min-h-full"
                        height="315"
                        src="https://www.youtube.com/embed/J5fM50ZLNSQ?autoplay=1&mute=1&loop=1&playlist=J5fM50ZLNSQ"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>

    )
}

export default Organizations