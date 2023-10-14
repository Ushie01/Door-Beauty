import React, { useState } from 'react';
import { Dropdown, MenuItem } from '@heathmont/moon-core-tw';
import Image, { StaticImageData } from 'next/image';

type Data = {
	name: string;
	image: StaticImageData;
};

type DropDownProps = {
	arrayData: Data[];
}

const DropDownImage: React.FC<DropDownProps> = ({ arrayData }) => {
	const [option, setOption] = useState<Data | null>(null);

	return (
		<div className='flex w-full items-center justify-center h-12 rounded border-r'>
			<Dropdown
				value={option}
				onChange={setOption}>
				{({ open }) => (
					<>
						<div className='flex items-center justify-center '>
							<Image
								src={option ? option.image : arrayData[0].image}
								alt='image'
								className='flex flex-row h-5 -mr-3 w-10 '
							/>

							<Dropdown.InsetSelect
								open={open}
								placeholder={arrayData[0].name}>
								{option?.name}
							</Dropdown.InsetSelect>
						</div>

						<Dropdown.Options className='w-12 bg-white border'>
							{arrayData.map((person, index) => (
								<Dropdown.Option
									value={person}
									key={index}>
									{({ selected, active }) => (
										<MenuItem
											isActive={active}
											isSelected={selected}>
											<Image
												src={person.image}
												alt='image'
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

export default DropDownImage;
