const BasicBar = ({ title, description }) => {
    return (
        <div className='flex flex-col items-center xl:w-[55%] lg:w-[80%] w-[90%] mx-auto gap-4'>
            <h2 className=" text-[24px] md:text-[48px] font-bold text-gray-900 font-openSans ">
                {title}
            </h2>
            <p className="text-[16px] md:text-lg text-center text-[#626671] font-openSans ">
                {description}
            </p>

        </div>
    );
};

export default BasicBar;