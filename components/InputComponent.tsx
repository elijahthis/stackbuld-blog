interface InputComponentProps {
	label: string;
	value?: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	name: string;
	type: "text" | "password" | "email";
}

const InputComponent = ({
	label,
	value,
	onChange,
	name,
	type,
}: InputComponentProps) => {
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
