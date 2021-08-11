const ENDPOINT = "http://localhost:5000"

export default function login ({ email, password }) {
  return fetch(`${ENDPOINT}/user/login`, {
    method: 'POST',
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({email, password})
  }).then(res => {
    if(!res.ok) throw new Error('Response is not ok')
    return res.json()   
  }).then( res => {
    return res
  })
}