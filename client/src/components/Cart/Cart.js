import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { BiTrash } from 'react-icons/bi';

import './Cart.css'

function Cart() {
	const noderef = React.useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <a className="ViewCartBtn" onClick={() => setIsOpen(!isOpen)}>
            View Cart
        </a>

        {isOpen ? (
            <div className="Cart p-2" noderef={noderef}>
                <div className="modal-header p-1">
                    <h4 className="modal-title">View Cart</h4>
                    <span className="close-modal-btn" onClick={() => setIsOpen(!isOpen)}>x</span>
                </div>
                <div className="modal-content">
                    <div className="cart-contents">
                        <p className="cart-item m-1"><Button className="RemoveFromCart p-0"><BiTrash className="m-1"/></Button> $0.99 - Red Hot Chili Peppers - Californication</p>
                        <p className="cart-item m-1"><Button className="RemoveFromCart p-0"><BiTrash className="m-1"/></Button> $0.99 - Red Hot Chili Peppers - Californication</p>
                        <p className="cart-item m-1"><Button className="RemoveFromCart p-0"><BiTrash className="m-1"/></Button> $0.99 - Red Hot Chili Peppers - Californication</p>
                <h5 className="total text-right m-2">Total: $2.97</h5>
                    </div>
                    <div className="modal-footer p-1">
                        <Button className="CheckOutBtn btn-sm" onClick={() => setIsOpen(!isOpen)}>Check Out</Button>
                    </div>
                </div>
            </div>
        ) : null}
        </>
    );
  }

export default Cart;
