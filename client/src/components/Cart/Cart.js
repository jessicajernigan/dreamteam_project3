import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import { BiTrash } from 'react-icons/bi';

import './Cart.css'

function Cart() {
	const [show, setShow] = useState(false);

  	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);
	return (
		<>
		<a className="ViewCartBtn" onClick={handleShow}>
			View Cart
		</a>

		<Modal className="ViewCartModal" tabIndex="0" show={show} onHide={handleClose} animation={false} backdrop={false} scrollable={false}>
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
		</Modal>
    	</>
	);
  }

export default Cart;