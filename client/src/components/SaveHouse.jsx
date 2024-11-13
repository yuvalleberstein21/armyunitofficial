import SectionTitle from './SectionTitle';
import GolanMap from '/images/golan-map.webp';


const SaveHouse = () => {

    return (
        <div className="container mx-auto w-full h-full relative py-8">
            {/* <!-- Title Section --> */}
            <SectionTitle title={"שומרים על הבית"} />
            {/* <!-- Slanted Grid Section --> */}
            <div className="relative mt-10 bg-primary shadow-sm rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-accent-light -skew-y-6 transform origin-top-left"></div>

                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-6 p-8 lg:p-12">
                    {/* <!-- Image Column (Left) --> */}
                    <div className="flex justify-center items-center">
                        <img
                            src={GolanMap}
                            alt="Descriptive Alt Text"
                            className="w-full h-48 lg:h-80 max-w-sm lg:max-w-md shadow-lg rounded-lg border-4 border-primary"
                        />
                    </div>
                    <div className="text-gray-800 font-normal leading-relaxed" dir='rtl'>
                        <h2 className="text-3xl font-semibold text-accent-dark mb-4">
                            כוח מקומי מיומן שמגן על ביתו ומשפחתו
                        </h2>
                        <p className="text-xl">
                            יחידת פרא היא יחידת מילואים המורכבת מלוחמים מקומיים מהגולן מתוך עקרון הגנה על הבית ותפיסת ההגנה של לוחם מקומי עם מחויבות ויכולות יוצאות דופן.
                        </p>
                        <p className="text-xl">
                            היחידה הוקמה במטרה להוות כוח לוחם איכותי, זמין, מהיר ונחוש המייצר חיץ אפקטיבי בין האויב לבין ישובי הגולן מתוך צורך מיידי להגן על התושבים מפני איומי הטרור המתעצמים בגזרה.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SaveHouse;