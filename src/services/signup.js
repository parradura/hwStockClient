const ENDPOINT = "http://localhost:5000"

export default function signup ({ firstName, lastName, email, password, birthDate }) {
  return fetch(`${ENDPOINT}/user/signup`, {
    method: 'POST',
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ firstName, lastName, email, password, birthDate })
  }).then(res => {
    if(!res.ok) throw new Error('Response is not ok')
    return res.json()   
  }).then( res => {
    return res
  })
}