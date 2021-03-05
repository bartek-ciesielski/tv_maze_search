import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = ({ className, icon, onClick, color }) => {
  return (
    <FontAwesomeIcon
      className={className}
      fixedWidth
      icon={icon}
      size="sm"
      onClick={onClick}
      style={{ backgroundColor: 'inherit', color: color }}
    />
  );
};
export default Icon;
