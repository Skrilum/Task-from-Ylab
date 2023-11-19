const logInbtn = form.querySelector('#logIn')
const email = form.querySelector('#email')
const password = form.querySelector('#password')
let users = [];

getJson()

function getJson () {
users = [];

return fetch('https://dummyjson.com/users')
  .then(function (response) {
    if (response.status !== 200){
      return Promise.reject(new Error(response.statusText))
    }
    return Promise.resolve(response)
  })
  .then(function(response) {
    return response.json()
  })
  .then(function (data) {
    console.log('data', data)
    users = data.users
    console.log(users.length)
  })
  .catch(function (error) {
    console.log('error', error)
  })
}

logInbtn.onclick = function () {
  if (email.value.length === 0) {
    return
}
else if (password.value.length === 0) {
  return
}
for (let i = 0; i < users.length - 1; i++){
  // while (i != users.length){
  //   usersemail !== users.email)
  // }
}
  console.log(email.value)
  console.log(password.value)
  
  email.value = ''
  password.value = ''
}


