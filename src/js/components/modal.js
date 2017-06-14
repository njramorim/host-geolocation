import React from 'react'
 
const Modal = (props) => {
	return <div className={props.alertText !== '' ? 'modal on' : 'modal off'}  onClick={props.modal}>
		<p>
			{props.alertText}
		</p>
		<button className="close" type="button">
			Click anywhere to close
		</button>
	</div>
}

export default Modal 