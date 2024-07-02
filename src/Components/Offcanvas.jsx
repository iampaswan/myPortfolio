import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import styles from './Offcanvas.module.css'

import logo from './profilepic.jpg'

import MainMenu from './MainMenu';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <img src={logo} alt="logo image" onClick={handleShow} className={styles.logoImage} />


      {/* <Button onClick={handleShow} className={styles.iconButton}></Button> */}

      <Offcanvas show={show} onHide={handleClose} className={styles.offcanvas}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Krishna Kumar Paswan</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* <p>Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </p> */}
          <MainMenu></MainMenu>
        </Offcanvas.Body>
      </Offcanvas>

    </>
  );
}

export default Example;


// import styles from './Offcanvas.module.css'
// import React, { useState } from 'react';

// import Offcanvas from 'react-bootstrap/Offcanvas'


// const OffcanvasLeft = () => {

//   const [show, setShow] = useState(true);

//   const handleShow = () => {
//     setShow(true)
//   };

//   const handleClose = () => {
//     setShow(false)
//   };

//   return <><div className={styles.offcanvas}>
//     <h1 >offCanva Example</h1>
//     <Offcanvas show={show}>
//       <Offcanvas.Header>
//         <Offcanvas.Title>Title</Offcanvas.Title>
//       </Offcanvas.Header>

//     </Offcanvas>

//   </div>
//   </>


// export default OffcanvasLeft;



