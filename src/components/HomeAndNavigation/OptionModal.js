import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

function OptionModal({ options, title, currentSettings, saveOptions }) {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="success" fixed="bottom" onClick={handleShow}>
				Options
			</Button>

			<Modal
				style={{ color: "black" }}
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title>{title} </Modal.Title>
				</Modal.Header>
				<Modal.Body>{options}</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary">SAVE</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default OptionModal;
