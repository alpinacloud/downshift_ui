import { MutableRefObject, useEffect } from 'react';

const useClickOutside = (ref: MutableRefObject<any>, callback: () => void, excludeArr?: MutableRefObject<any>[]) => {
  const handleClick = ({ target }: {target: EventTarget}) => {
    if (excludeArr) {
      for (let ea of excludeArr) {
        if (ea.current && !ea.current.contains(target)) {
          return callback();
        }
      }

      return;
    }

    if (ref.current && !ref.current.contains(target)) {
      return callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useClickOutside;
