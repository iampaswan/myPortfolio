import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

import styles from './Offcanvas.module.css'

import logo from './profilepic.jpg'



function Example({ selectedTab, setSelectedTab }) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  return (
    <>

      <img src={logo} alt="logo image" onClick={handleShow} className={styles.logoImage} />
      {/* <Button onClick={handleShow} className={styles.iconButton}></Button> */}
      <Offcanvas show={show} onHide={handleClose} className={styles.offcanvas} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Krishna Kumar Paswan</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* <p>Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </p> */}
          <div class="list-group ">
            <button type="button" class="list-group-item list-group-item-action " aria-current="true"
              onClick={() => { setSelectedTab("Home") }}>Home</button>
            <button type="button" class="list-group-item list-group-item-action"
              onClick={() => { setSelectedTab("About") }} >About</button>
            <button type="button" class="list-group-item list-group-item-action"
              onClick={() => { setSelectedTab("Blog") }}>Blog</button>
          </div>

        </Offcanvas.Body>
      </Offcanvas>

    </>
  );
}

export default Example;


