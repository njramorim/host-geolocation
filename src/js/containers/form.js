import React,  {Component} from 'react'
import {getData} from './../utils/getData'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
  }
 
	render () {
		let {props} = this
		return <section className="formContainer">
			<form action="#" onSubmit={props.domainSubmit} className="domainLocation">
			  <fieldset>
			  	<legend>
			  		<p>Find out the <b>physical location of a website</b></p>
			  	</legend>
			  	<div>
				    <input type="text" 
				    	value={props.domainValue} 
				    	onChange={props.domainChange}
				    	placeholder="TYPE AN URL"
				    />
				    <button type="submit">Search</button>
				   </div>
			  </fieldset>
			</form>
			<div className="userLocation">			
		    <button className="find" type="button" onClick={props.userLocation}>
		    	Show My Position
		    </button>			
		    <button className="reset" type="button" onClick={props.reset} disabled={!props.resetUser}>
		    	Clean
		    </button>
		  </div>
		</section>
	}
		    
}
