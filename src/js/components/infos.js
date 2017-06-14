import React from 'react'
 
const Infos = (props) => {
	return <aside className="infos">
		<ul className="domain">
			{props.domain}
		</ul>
		<ul className="user">
			{props.user}
		</ul>
	</aside>
}

export default Infos 