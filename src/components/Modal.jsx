import './Modal.css'

function Modal({property, onModalDelete}){
    return(
        <>
            <div className="modal">
                <p className="modal__title">{property}</p>
                <div className="modal__buttons">
                <button onClick = {onModalDelete} className="btn btn__cancel">Cancel</button>
                <button onClick = {onModalDelete} className="btn">Confirm</button>
                </div>
            </div>
            <div className="backdrop" />
        </>
    )
}

export default Modal