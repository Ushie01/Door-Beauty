import { useState } from 'react';
import { Modal, Button, IconButton } from '@heathmont/moon-core-tw';
import { ArrowsRight, ControlsCloseSmall } from '@heathmont/moon-icons-tw';
import { RenderComponent } from '../../components/LandingPage/components/DoorBeautyLinks/RenderComponent';


const ModelInput = ({
	modalTitle,
	index,
}: {
	modalTitle: string;
	index: number;
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const closeModal = () => setIsOpen(false);
	const openModal = () => setIsOpen(true);

	return (
		<>
			<Button
				onClick={openModal}
				className='bg-orange-400 rounded-xl p-1 mt-4'>
				<ArrowsRight
					height={34}
					width={34}
					color='white'
				/>
			</Button>

			<Modal
				open={isOpen}
				onClose={closeModal}>
				<Modal.Backdrop className='bg-black opacity-40' />
				<Modal.Panel className='bg-white border w-[1200px]'>
					<div className='border-b-[0.063rem] border-beerus pt-5 pb-4 px-6 relative'>
						<h3 className='text-moon-18 text-bulma font-medium'>
							{modalTitle}
						</h3>
						<IconButton
							variant='ghost'
							size='sm'
							className='absolute top-4 end-5'
							onClick={closeModal}>
							<ControlsCloseSmall className='text-moon-24' />
						</IconButton>
					</div>

					<RenderComponent index={index} />

					<div className='flex flex-col w-full space-y-4 p-4'>
						<Button
							onClick={closeModal}
							className='bg-orange-500 text-white rounded-xl w-full'>
							Create
						</Button>
						<Button
							variant='outline'
							onClick={closeModal}
							className='bg-black text-white rounded-xl w-full'>
							Cancel
						</Button>
					</div>
				</Modal.Panel>
			</Modal>
		</>
	);
};

export default ModelInput;
