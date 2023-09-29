import React, { Dispatch, SetStateAction, useState } from 'react';
import { Dropdown, MenuItem } from '@heathmont/moon-core-tw';

type TitleProps = {
	title: string;
	arrayTitle: { name: string }[];
	setLink: Dispatch<SetStateAction<string | []>>;
};

const DropDown = ({ title, arrayTitle, setLink }: TitleProps) => {
	const [option, setOption] = useState<{ name: string } | null>(null);

	const handleOptionSelect = (selectedLink: { name: string }) => {
		setOption(selectedLink);
		setLink(selectedLink.name);
	};

	return (
		<div className='flex items-center h-6 text-black'>
			<Dropdown
				value={option}
				onChange={setOption}>
				{({ open }) => (
					<>
						<Dropdown.InsetSelect
							open={open}
							placeholder={title}>
							{option?.name}
						</Dropdown.InsetSelect>

						<Dropdown.Options className='w-6 rounded-md border bg-white'>
							{arrayTitle?.map((value, index) => (
								<Dropdown.Option
									value={{ name: value.name }}
									key={index}>
									{({ selected, active }) => (
										<MenuItem
											isActive={active}
											isSelected={selected}
											onClick={() => handleOptionSelect(value)}>
											<MenuItem.Title>{value.name}</MenuItem.Title>
											<MenuItem.Radio
												isSelected={selected}
												className={selected ? 'bg-yellow-500' : 'bg-gray-200'}
											/>
										</MenuItem>
									)}
								</Dropdown.Option>
							))}
						</Dropdown.Options>
					</>
				)}
			</Dropdown>
		</div>
	);
};

export default DropDown;
