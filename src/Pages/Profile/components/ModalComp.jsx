import { Button, Modal, Select } from "flowbite-react";
import { useEffect, useState } from "react";
import TreeStructure from "../../TreeStructure/TreeStructure";
import { useNavigate } from "react-router";

export function ModalComp() {
    const [openModal, setOpenModal] = useState(true);
    const [modalPlacement, setModalPlacement] = useState('center')



    const navigator = useNavigate()

    useEffect(() => {

    }, [openModal])
    return (
        <>
            <Modal
                show={openModal}
                position={modalPlacement}
                onClose={() => setOpenModal(false)}
            >
                <Modal.Header>Tree Structure</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6 p-6">
                        <TreeStructure></TreeStructure>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button color="gray" onClick={navigator('/profile')}>
                        Decline
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}