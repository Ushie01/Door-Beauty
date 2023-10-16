import { useState } from 'react';
import { Modal, Button, IconButton } from '@heathmont/moon-core-tw';
import { ControlsCloseSmall, GenericDelete } from '@heathmont/moon-icons-tw';

type Props = {
	id: number;
	isButtonClicked: boolean;
	handleDelete: (params: { id: number; isButtonClicked: boolean }) => void;
};

const useModalConfirmation = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isButtonClicked, _] = useState(true);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);
	const handleButtonClick = () => {
		closeModal();
	};

	const ModalComponent = ({ id, isButtonClicked, handleDelete }: Props) => (
		<>
			<button>
				<GenericDelete
					className='h-10 w-10'
					onClick={openModal}
				/>
			</button>
			<Modal
				open={isOpen}
				onClose={closeModal}>
				<Modal.Backdrop className='bg-black opacity-60' />
				<Modal.Panel className='lg:max-w-md bg-roshi text-goten rounded-none bg-white border'>
					<IconButton
						variant='ghost'
						size='sm'
						className='absolute top-4 end-5 text-goten'
						onClick={closeModal}>
						<ControlsCloseSmall className='text-moon-24' />
					</IconButton>
					<div className='p-4 pt-11'>
						<div className='mt-2'>
							<h3 className='text-moon-24 text-goten font-medium text-center'>
								Are sure you want to delete this item from cart!!
							</h3>
						</div>
					</div>

					<hr className='w-full border' />

					<div className='flex flex-col p-4 items-center justify-center '>
						<Button
							variant='outline'
							className='text-white w-full bg-orange-500 rounded-xl'
							onClick={() => {
								handleDelete({ id, isButtonClicked });
								handleButtonClick();
							}}>
							Got it, thanks!
						</Button>
						<Button
							variant='outline'
							className='text-white w-full bg-black rounded-xl mt-3'
							onClick={closeModal}>
							No
						</Button>
					</div>
				</Modal.Panel>
			</Modal>
		</>
	);

	return {
		ModalComponent,
		openModal,
		isButtonClicked,
	};
};

export default useModalConfirmation;
