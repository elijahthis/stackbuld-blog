import { BiLoaderAlt } from "react-icons/bi";

/**
 * Button component props
 */
interface ButtonProps {
	/**
	 * The content of the button
	 */
	children: JSX.Element | JSX.Element[] | string;
	/**
	 * The function to be called when the button is clicked
	 */
	onClick?: () => void;
	/**
	 * The class name to be applied to the button
	 */
	className?: string;
	/**
	 * Whether the button is in a loading state
	 */
	loading?: boolean;
	/**
	 * The type of the button
	 */
	type?: "button" | "submit" | "reset" | undefined;
	/**
	 * The style object to be applied to the button
	 */
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
