import Modal from '../components/Modal/Modal';
import Button from '../components/Button/Button';
import useDisclosure from '../utils/useDisclosure';

export const basic = () => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        cardProps={{
          title: 'Table example',
          description: 'Utilizing Card component',
        }}
        pullUp
        footer={(
          <div style={{display: 'flex'}}>
            <Button variant="primary">Submit</Button>
            <Button variant="surface" style={{marginLeft: 12}} onClick={onClose}>Cancel</Button>
          </div>
        )}
      >
        Some content
      </Modal>

      <Button variant="primary" btnSize="lg" onClick={onOpen}>Open modal</Button>
    </>
  );
};

export default {
  component: Modal,
};