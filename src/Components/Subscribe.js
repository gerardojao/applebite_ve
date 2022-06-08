import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import { useState } from "react"

const Subscribe = () => {
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: ""
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
        console.log(form);
    }
    return (
        <>

            <form id="subscribe" action="https://formsubmit.co/https://bit.ly/3rsDqEd" method="POST">
                <h3>Contáctanos</h3>

                <input className="subscribe-input" type="email" placeholder="Escribenos tu email" name="email" pattern="[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-z0-9-]+(\.[a-z]{2,15})$" title="Email format correct: peter@gmail.com" value={form.email}
                    onChange={handleChange} required />

                <input className="subscribe-input" type="text" placeholder="¿Cuál es tu nombre?" title="Accept space, special character and letters ex: Peter" pattern="^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$" name="name"
                    value={form.name}
                    onChange={handleChange} required />

                <input className="subscribe-input" type="text" placeholder="¿En qué podemos ayudarte?" name="subject" required />

                <button className="button" type="submit" onClick={handleShow} >Send</button>

            </form>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>APPLE BITE</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Gracias <b>{form.name}</b> a la brevedad nos pondremos en contacto
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Subscribe
