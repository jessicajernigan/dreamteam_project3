import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import { BiTrash } from 'react-icons/bi';

import './Cart.css'

function Cart( location ) {
	const [show, setShow] = useState(false);

  	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);
	return (
		<>
		<Button variant="primary" onClick={handleShow}>
			Launch demo modal
		</Button>

		<Modal className="m-4" show={show} onHide={handleClose} animation={false} backdrop={false}>
			<Modal.Header closeButton>
			<Modal.Title>View Cart</Modal.Title>
			</Modal.Header>
			<Modal.Body className="text-left p-2">
				<p className="cart-item m-2"><BiTrash className="m-1 RemoveFrmCart"/> $0.99 - Red Hot Chili Peppers - Californication</p>
				<p className="cart-item m-2"><BiTrash className="m-1 RemoveFrmCart"/> $0.99 - Red Hot Chili Peppers - Californication</p>
				<p className="cart-item m-2"><BiTrash className="m-1 RemoveFrmCart"/> $0.99 - Red Hot Chili Peppers - Californication</p>
				<h5 className="text-right">Total: $2.97</h5>
			</Modal.Body>
			<Modal.Footer className="p-1">
			<Button className="btn-sm" variant="primary" onClick={handleClose}>
				Check Out
			</Button>
			</Modal.Footer>
		</Modal>
    	</>
	);
  }

export default Cart;
