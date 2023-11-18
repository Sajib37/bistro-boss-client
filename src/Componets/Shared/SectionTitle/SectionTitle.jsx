
const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="w-1/4 mx-auto my-8">
            <h1 className="text-[#D99904] text-center italic mb-2"> ---{subHeading}--- </h1>
            <h1 className="text-4xl text-center py-2 border-y-2 uppercase">{ heading}</h1>
        </div>
    );
};

export default SectionTitle;