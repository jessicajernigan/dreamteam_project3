import React, { useEffect, useState, useRef } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import { BiTrash } from 'react-icons/bi';

import './Cart.css'

function Cart() {
// 	const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

	const node = useRef()
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = e => {
		if (node.current.contains(e.target)) {
		  // inside click
		  return;
		}
		// outside click 
		setIsOpen(!isOpen);
	  };

	return (
		<>
		<a className="ViewCartBtn" onClick={() => setIsOpen(!isOpen)}>
			View Cart
		</a>

		{isOpen ? (
			<div className="Cart p-2" ref={node}>
				<div className="modal-header p-1">
					<h4 className="">View Cart</h4>
					<span className="close-modal-btn" onClick={() => setIsOpen(!isOpen)}>x</span>
				</div>
				<div className="modal-content">
					<div className="cart-contents">
						<p className="cart-item m-1"><Button className="RemoveFromCart p-0"><BiTrash className="m-1"/></Button> $0.99 - Red Hot Chili Peppers - Californication</p>
						<p className="cart-item m-1"><Button className="RemoveFromCart p-0"><BiTrash className="m-1"/></Button> $0.99 - Red Hot Chili Peppers - Californication</p>
						<p className="cart-item m-1"><Button className="RemoveFromCart p-0"><BiTrash className="m-1"/></Button> $0.99 - Red Hot Chili Peppers - Californication</p>
				<h5 className="text-right m-2">Total: $2.97</h5>
					</div>
					<div className="modal-footer">
						<Button className="CheckOutBtn btn-sm" onClick={() => setIsOpen(!isOpen)}>Check Out</Button>
					</div>
				</div>
    		</div>
		) : null}
    

		{/* <Modal className="ViewCartModal" show={show} onHide={handleClose} animation={false} backdrop={false} scrollable={false}>
			<Modal.Header closeButton>
			<Modal.Title>View Cart</Modal.Title>
			</Modal.Header>
			<Modal.Body className="text-left p-2">
				<p className="cart-item m-1"><Button className="RemoveFromCart p-0"><BiTrash className="m-1"/></Button> $0.99 - Red Hot Chili Peppers - Californication</p>
				<p className="cart-item m-1"><Button className="RemoveFromCart p-0"><BiTrash className="m-1"/></Button> $0.99 - Red Hot Chili Peppers - Californication</p>
				<p className="cart-item m-1"><Button className="RemoveFromCart p-0"><BiTrash className="m-1"/></Button> $0.99 - Red Hot Chili Peppers - Californication</p>
				<h5 className="text-right m-2">Total: $2.97</h5>
			</Modal.Body>
			<Modal.Footer className="p-1">
			<Button className="CheckOutBtn btn-sm" variant="primary" onClick={handleClose}>
				Check Out
			</Button>
			</Modal.Footer>
		</Modal> */}
    	</>
	);
  }

export default Cart;
