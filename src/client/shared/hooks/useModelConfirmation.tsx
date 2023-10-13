import { useState } from 'react';
import { Modal, Button, IconButton } from '@heathmont/moon-core-tw';
import { ControlsCloseSmall } from '@heathmont/moon-icons-tw';

const useModalConfirmation
 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const handleButtonClick = () => {
    setIsButtonClicked(true);
    closeModal();
  };

  const ModalComponent = () => (
    <Modal open={isOpen} onClose={closeModal}>
      <Modal.Backdrop />
      <Modal.Panel className="lg:max-w-md bg-roshi text-goten rounded-none">
        <IconButton
          variant="ghost"
          size="sm"
          className="absolute top-4 end-5 text-goten"
          onClick={closeModal}
        >
          <ControlsCloseSmall className="text-moon-24" />
        </IconButton>
        <div className="p-4 pt-11">
          <div className="mt-2">
            <h3 className="text-moon-24 text-goten font-medium text-center">
              Your payment has been successfully submitted.
            </h3>
          </div>
        </div>
        <div className="p-4 flex items-center justify-center">
          <Button variant="outline" onClick={handleButtonClick}>
            Got it, thanks!
          </Button>
        </div>
      </Modal.Panel>
    </Modal>
  );

  return {
    ModalComponent,
    openModal,
    isButtonClicked,
  };
};

export default useModalConfirmation
;
