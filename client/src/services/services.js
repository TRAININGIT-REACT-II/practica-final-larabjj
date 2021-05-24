const ENDPOINT = 'http://localhost:8080/api'

export default function register({ username, password }) {
  return fetch(`${ENDPOINT}/register`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return res.json()
  }).then(res => {
    return true
  })
};

export default function login({ username, password }) {
  return fetch(`${ENDPOINT}/login`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  }).then(res => {
    if (!res.ok) throw new Error('Response is NOT ok')
    return res.json()
  }).then(res => {
    const { token } = res
    return token
  })
};

