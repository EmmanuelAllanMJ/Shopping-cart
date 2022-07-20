import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

function Backdrop(props) {
  //As they are backdrop and modal function are closely related to each other we didn't create new component
  // We use props to pass the function to the child to make this reusable. Using context might not be the good idea to
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
}
function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}

//Since we need to say the portal where to point our overlay we use this
const portalElement = document.getElementById("overlays");

function Modal(props) {
  // We also need to add a div called overlays on index.html
  return (
    <Fragment>
      {/* This is how we create without using portals */}
      {/* <Backdrop />
      <ModalOverlay>{props.children}</ModalOverlay> */}
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Modal;
