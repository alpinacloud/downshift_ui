import React from 'react';
import Modal from '../Modal/Modal';
import Card, { CardContent } from '../Card/Card';
import Button from '../Button/Button';
import Flex from '../Flex/Flex';

type Props = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading?: boolean;
  width?: string;
}

const Dialogue: React.FC<Props> = ({
  width = '360px',
  isOpen,
  title,
  onClose,
  onConfirm,
  loading,
}) => {
  return (
    <Modal width={width} isOpen={isOpen} onClose={onClose}>
      <Card title={title}>
        <CardContent>
          <Flex width={width}>
            <Flex marginRight={12}>
              <Button variant="primary" onClick={onConfirm} loading={loading}>
                Confirm
              </Button>
            </Flex>
            <Flex>
              <Button variant="surface" onClick={onClose}>
                Cancel
              </Button>
            </Flex>
          </Flex>
        </CardContent>
      </Card>
    </Modal>
  );
}

export default Dialogue;