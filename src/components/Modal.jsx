import './Modal.css'

function Modal({property}){
    return(
        <>
            <div className="modal">
                <p className="modal__title">{property}</p>
                <div className="modal__buttons">
                <button onClick = {() => console.log('cancel')} className="btn btn__cancel">Cancel</button>
                <button onClick = {() => console.log('Confirm')} className="btn">Confirm</button>
                </div>
            </div>
            <div className="backdrop" />
        </>
    )
}

export default Modal