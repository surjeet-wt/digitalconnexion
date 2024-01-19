import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';

const SlideToggle = ({ children, section }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    // <div>
    //   <h3 className='border-bottom-0' onClick={handleToggle}>
    //     {section}
    //   </h3>
    //   <div className={`${styles.container} ${isOpen ? styles.visible : styles.hidden}`}>
    //     <div className='text-center partners-data'>{children}</div>
    //   </div>
    // </div>


<div className='list-partners'>
<div className='text-center border-bottom-0 head-partner'>
  <h3 className='border-bottom-0' onClick={handleToggle}> {section} </h3>

  <Collapse in={isOpen}>
    <div className='text-center partners-data'>
    {children}
    </div>
    </Collapse>
</div>
</div>


  );
};

export default SlideToggle;
