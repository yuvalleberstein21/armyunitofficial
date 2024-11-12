// import CardGrid from "../components/CardGrid";
import Logo from '/images/logo-nobg.png';

const Organizations = () => {
    return (
        <div className="container mx-auto p-4 pt-10 lg:pt-16" dir="rtl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:p-8 items-center">

                {/* Text and Logo Column */}
                <div className="space-y-6">
                    <div className="flex justify-center lg:justify-start items-center">
                        <img src={Logo} alt="Logo" className="w-1/2 h-32 opacity-90" />
                    </div>
                    <p className="text-gray-800 text-xl font-light leading-relaxed px-4 py-1 lg:pl-12 lg:pr-6">
                        כשקמנו לבוקר של ה-7 באוקטובר, כל מה שהכרנו נשבר באחת. תחושת הביטחון שהייתה חלק מחיינו התפוגגה. המלחמה בצפון מזכירה לנו שמה שקרה בדרום עלול להתרחש גם כאן ותושבי רמת הגולן עומדים בפני סכנה מוחשית.
                    </p>
                    <p className="text-gray-800 text-xl font-light leading-relaxed mt-4 px-4 py-1 lg:pl-12 lg:pr-6">
                        אסור לנו להמתין עד שהמציאות תכה שוב! בעזרת התמיכה שלכם, נוכל להעניק ללוחמי היחידה את הכוח להגן על בתיהם ומשפחותיהם ולהכין אותם לכל תרחיש אפשרי.
                    </p>
                </div>

                {/* Video Column */}
                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg lg:h-[450px]">
                    <iframe
                        className="w-full h-full object-cover rounded-lg"
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