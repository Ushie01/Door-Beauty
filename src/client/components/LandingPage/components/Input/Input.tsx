type TextProps = {
    textColor: string;
    bgColor: string;
    placeHolder: string
}


export const Input = ({textColor, bgColor, placeHolder}: TextProps) => {
	return (
		<input
			type='text'
			name='price'
			id='price'
			className={`block w-full py-1.5 lg:pl-4 pl-2 font-bold  ${textColor} ${bgColor} h-12 placeholder:text-gray-400 lg:text-md text-sm`}
			placeholder={placeHolder}
		/>
	);
};
