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
			className={`block w-full py-1.5 pl-7 font-bold pr-20 ${textColor} ${bgColor} h-12 placeholder:text-gray-400 sm:text-sm`}
			placeholder={placeHolder}
		/>
	);
};
