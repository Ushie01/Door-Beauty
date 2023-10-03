import React, { useState } from 'react';
import { Button, Drawer, IconButton } from '@heathmont/moon-core-tw';
import { ControlsCloseSmall, GenericBurgerRegular } from '@heathmont/moon-icons-tw';


const Example = ({ DrawerContent }: { DrawerContent: React.ReactNode }) => {
	const [isOpen, setIsOpen] = useState(false);
	const handleClick = () => setIsOpen(true);
	const handleClose = () => setIsOpen(false);
	return (
		<>
			<Button
				variant='outline'
				onClick={handleClick}>
				<GenericBurgerRegular
					height={30}
					width={30}
					className='border'
				/>
			</Button>
			<Drawer
				open={isOpen}
				setOpen={setIsOpen}>
				<Drawer.Panel className='bg-white border-r'>
					<div className='flex justify-between items-center p-3 border-b border-trunks'>
						<p>Header</p>
						<IconButton
							variant='ghost'
							onClick={handleClose}
							aria-label='Close'>
							<ControlsCloseSmall />
						</IconButton>
					</div>
					<div>{DrawerContent}</div>
				</Drawer.Panel>
			</Drawer>
		</>
	);
};

export default Example;
