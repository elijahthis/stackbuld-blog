import { BiLoaderAlt } from "react-icons/bi";

interface ButtonProps {
	children: JSX.Element | JSX.Element[] | string;
	onClick?: () => void;
	className?: string;
	loading?: boolean;
	type?: "button" | "submit" | "reset" | undefined;
	style?: React.CSSProperties;
}

const Button = ({
	children,
	onClick,
	className = "",
	loading = false,
	type = "button",
	style = {},
}: ButtonProps) => {
	return (
		<button
			className={`px-4 py-2 bg-[#a4634d] text-[#ffffff] rounded-3xl text-sm lg:text-base font-semibold ${className} `}
			onClick={onClick}
			type={type}
			style={style}
		>
			{loading ? (
				<BiLoaderAlt className="btn-loader mx-auto h-5 w-5 lg:h-6 lg:w-6 " />
			) : (
				children
			)}
		</button>
	);
};

export default Button;
