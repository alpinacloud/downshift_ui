import { useState, useCallback } from 'react';

const useDisclosure = (defaultIsOpen: boolean = false) => {
  const [isOpen, setOpen] = useState<boolean>(Boolean(defaultIsOpen));

  const onClose = useCallback(() => setOpen(false), []);
  const onOpen = useCallback(() => setOpen(true), []);
  const onToggle = useCallback(() => setOpen(prevIsOpen => !prevIsOpen), []);

  return { isOpen, onOpen, onClose, onToggle };
};

export default useDisclosure;
