import React from 'react';

interface Props extends Partial<React.CSSProperties> {
  children?: React.ReactNode;
  className?: string;
};

const Flex: React.FC<Props> = ({ children, className, ...styles }) => {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        ...styles
      }}
    >
      {children}
    </div>
  )
}

export default Flex;