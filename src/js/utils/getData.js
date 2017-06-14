import axios from 'axios'

const config = {
	method: 'GET',
	headers: {
    Accept: 'application/json',
  }
}

export function getData(url) {
  return axios({method: 'get', url: url}).then(response => response.data)
}


