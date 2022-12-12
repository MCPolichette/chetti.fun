import React, { useState } from "react";
import { Button, Modal, Row } from "react-bootstrap";

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
				keyboard={false}
				size="sm"
				aria-labelledby="contained-modal-title-vcenter"
				centered
				variant="primary"
			>
				<Modal.Header style={{ backgroundColor: "lightskyblue" }} closeButton>
					<Modal.Title>{title} </Modal.Title>
				</Modal.Header>
				<Modal.Body style={{ backgroundColor: "lightskyblue" }}>
					<Row>{options}</Row>
				</Modal.Body>
				<Modal.Footer style={{ backgroundColor: "lightskyblue" }}>
					<Button size="lg" variant="success" onClick={handleClose}>
						Close
					</Button>
					{/* <Button variant="primary">SAVE</Button> */}
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default OptionModal;
