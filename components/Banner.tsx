const Banner = () => {
	return (
		<section
			className="py-6 px-5 lg:py-12 bg-cover bg-center bg-no-repeat rounded-xl shadow-md border border-gray-500 mb-8 lg:mb-12 "
			style={{
				backgroundImage:
					"linear-gradient(to right, rgba(21, 20, 21, 0.96) 60%, rgba(21, 20, 21, 0.5)), url(/images/banner-img.avif)",
			}}
		>
			<p className="mb-5 lg:mb-8 font-semibold lg:text-4xl ">
				Catch up on your favorite articles and authors!
			</p>
			<button className="px-4 py-2 bg-white text-[#181a20] rounded-3xl text-sm lg:text-base font-semibold">
				Read more
			</button>
		</section>
	);
};

export default Banner;
