

const SectionTitle = ({ title }) => {
    return (
        <div className="py-5 flex justify-center items-center flex-col">
            <h1 className="text-4xl lg:text-5xl md:text-5xl font-bold text-accent-dark">
                {title}
            </h1>
            <span className="py-1 border-b-4 border-accent-light w-44"></span>
        </div>
    )
}

export default SectionTitle