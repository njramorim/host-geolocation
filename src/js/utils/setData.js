export function setData(element, data, domain = true) {
	return domain ?
		element.setState({
			domainLocation: data,
			mapCenter: {lat: data.latitude, lng:data.longitude}
		}) :
	  element.setState({
	  	userLocation: data,
			mapCenter: {lat: data.latitude, lng:data.longitude}
	  })
}
