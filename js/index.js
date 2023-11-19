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

// email = atuny0@sohu.com password = 9uQFF1Lh
if (email.value == users[0].email && password.value == users[0].password ){
  alert('Вы вошли в систему!')
}  
  email.value = ''
  password.value = ''
}


