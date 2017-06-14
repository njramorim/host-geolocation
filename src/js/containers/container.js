import React,  {Component} from 'react'
import MapContainer from './mapContainer'
import Form from './form'
import Modal from './../components/modal'  
import Infos from './../components/infos'  
import {getData} from './../utils/getData'
import {fixString} from './../utils/fixString'
import {setData} from './../utils/setData' 
import {validateLocation} from './../utils/validateLocation'

const errorMsg = "Cannot find url,  please enter a valid one like 'www.nytimes.com' or 'nytimes.com'"
const invalidMsg = "Invalid url, please enter a valid one like 'www.nytimes.com' or 'nytimes.com' "



export default class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
    	userLocation: false,
    	domainName: '',
    	domainLocation: false,
    	mapCenter: false,
    	alertText: ''
    }  
  }

  userLocation() {
  	getData('https://freegeoip.net/json/')
  		.then( data => setData(this, data, false) )
			.catch( error => console.error(`Deu ruim: ${error}`) )
  }

  reset() {
  	const newLat = this.state.mapCenter.lat
  	const newLng = this.state.mapCenter.lng
	  this.setState({
	  	userLocation: false,
    	mapCenter: {
    		lat: newLat,
    		lng: newLng
     	}
	  })
  }

  domainLocation(event) {
  	let value = this.state.domainName.trim()
  	value != '' && validateLocation(value) ?
	    getData('https://freegeoip.net/json/'+value)
	    	.then( data => setData(this, data) )
				.catch(error => this.setState({alertText: errorMsg})) :
			this.setState({alertText: invalidMsg})

    event.preventDefault()
  }

 	domainChange(event) {
    this.setState({domainName: event.target.value})
  }

  closeModal() {
  	this.setState({alertText: ''})
  }

  mobileTrigger() {
  	this.state.mobileOpen ? 
  		this.setState({mobileOpen: false}) :
  		this.setState({mobileOpen: true})
  }
 
	render () {
		let {state} = this

		return <div className={state.mapCenter ? 'map-active' : ''}>
			<Form 
				domainValue={state.domainName}
				domainChange={this.domainChange.bind(this)}
				domainSubmit={this.domainLocation.bind(this)}
				userLocation={this.userLocation.bind(this)}
				reset = {this.reset.bind(this)}
				resetUser={!!state.userLocation}
			/>

			{state.mapCenter && <MapContainer 
				center={state.mapCenter}
				zoom={8}
				userLat={state.userLocation.latitude}
				userLng={state.userLocation.longitude}
				domainLat={state.domainLocation.latitude}
				domainLng={state.domainLocation.longitude}
			/>}

			<Infos 
				domain={ Object.keys(state.domainLocation).map((item, index) => {
					return <li key={index}>
						<span>{fixString(item)}: </span>
						<span>{state.domainLocation[item] || '---'}</span>
					</li>
				})}
				user={ Object.keys(state.userLocation).map((item, index) => {
					return <li key={index}>
						<span>{fixString(item)}: </span>
						<span>{state.userLocation[item] || '---'}</span>
					</li>
				})}
			/>

			<Modal  
				alertText={state.alertText}
				modal={this.closeModal.bind(this)}
			/>
		</div>
	}
		    
}
