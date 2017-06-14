import React,  {Component} from 'react'

export default class MapContainer extends Component {
  constructor(props) {
    super(props)
  }

  createMap() {
    return this.map = new google.maps.Map(this.refs.map, {
      center: this.props.center,
      zoom: this.props.zoom
    })
  }

  setLatLng(lat, lng) {
  	return new google.maps.LatLng(lat, lng)
  }

  createMarker(latLng, title, color) {
  	return new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: title,
      icon: this.setPinColor(color)
    })    
  } 

  setPinColor(color) {
		let pinColor = color
		return new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor)
  }

  
  componentDidMount() {
  	//initialize map
    this.createMap()

    //pass domain's coords
    let domainLatLng = this.setLatLng(this.props.domainLat, this.props.domainLng)
   	this.domainMarker = this.createMarker(domainLatLng, "Domain's location", '88AAFE')
		this.domainMarker.setPosition(domainLatLng)

		//pass user's coords
    let userLatLng = this.setLatLng(this.props.userLat, this.props.userLng)
   	this.userMarker = this.createMarker(userLatLng, "User's location", 'FE7569')
		this.userMarker.setPosition(userLatLng)

  } 

  componentDidUpdate(prevProps) {
  	if (prevProps.center === this.props.center)
  		return null

  	//update domain's coords
  	let domainLatLng = this.setLatLng(this.props.domainLat, this.props.domainLng)
  	this.domainMarker.setPosition(domainLatLng)

  	//update user's coords
  	let userLatLng = this.setLatLng(this.props.userLat, this.props.userLng)
  	this.userMarker.setPosition(userLatLng)

  	//go to new position
		this.map.panTo(this.props.center)
  }
 
  render() {    
    return <section className="mapContainer" ref="map"></section>
  }
}

