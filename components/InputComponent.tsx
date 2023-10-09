interface InputComponentProps {
	label: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	name: string;
	type: "text" | "password" | "email";
}

/**
 * InputComponentProps interface.
 * @interface
 * @property {string} label - The label for the input.
 * @property {string} value - The value of the input.
 * @property {(event: React.ChangeEvent<HTMLInputElement>) => void} onChange - The function to handle input changes.
 * @property {string} name - The name of the input.
 * @property {"text" | "password" | "email"} type - The type of the input.
 */

/**
 * InputComponent functional component.
 * @param {InputComponentProps} props - The props for the component.
 * @returns {JSX.Element} - The JSX element for the component.
 */
const InputComponent = ({
	label,
	value,
	onChange,
	name,
	type,
}: InputComponentProps): JSX.Element => {
	return (
		<label htmlFor="" className="flex flex-col items-stretch gap-1 ">
			{label}
			<input
				type={type}
				name={name}
				value={value}
				onChange={onChange}
				className="bg-transparent border border-[#a4634d] px-2 py-1 rounded-lg outline-none"
			/>
		</label>
	);
};

export default InputComponent;
