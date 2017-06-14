export function validateLocation(value) {
	let invalidString = 'http://'
	return !value.includes(invalidString)
}


