import React, { useState } from 'react';
import { Dropdown, MenuItem } from '@heathmont/moon-core-tw';
import Image, { StaticImageData } from 'next/image';
import USAImage from './../../../assets/us.png';
import SpainImage from './../../../assets/spain.png';

type People = {
	name: string;
	flag: StaticImageData; // Update the flag property type
};

const people: People[] = [
	{ name: 'English', flag: USAImage },
	{ name: 'Spain', flag: SpainImage },
];

const DropDown = () => {
	const [option, setOption] = useState<People | null>(null);

	return (
		<div className='flex w-full items-center h-12 border rounded'>
			<Dropdown
				value={option}
				onChange={setOption}>
				{({ open }) => (
					<>
						<div className='flex items-center justify-center '>
							<Image
								src={option ? option?.flag : people[0].flag}
								alt='flag'
								className='flex flex-row h-5 w-10 ml-2'
							/>
							<Dropdown.InsetSelect
								open={open}
								placeholder='English'>
								{option?.name}
							</Dropdown.InsetSelect>
						</div>

						<Dropdown.Options className='w-12 bg-white border'>
							{people.map((person, index) => (
								<Dropdown.Option
									value={person}
									key={index}>
									{({ selected, active }) => (
                                        <MenuItem
											isActive={active}
											isSelected={selected}>
											<Image
												src={person.flag}
												alt='flag'
												className='h-5 w-10'
											/>
											<MenuItem.Title>{person.name}</MenuItem.Title>
											<MenuItem.Radio
												className=' bg-gray-200'
												isSelected={selected}
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
