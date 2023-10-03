import React from 'react';

const CheckBox = ({textValue}: {textValue: string}) => {
	const [checked, setChecked] = React.useState(false);

	const handleChange = () => {
		setChecked(!checked);
	};

	return (
		<div className='flex items-center justify-start space-x-2'>
			<input
				type='checkbox'
				checked={checked}
                onChange={handleChange}
			/>
            <label>{textValue}</label>
		</div>
	);
};

export default CheckBox;
