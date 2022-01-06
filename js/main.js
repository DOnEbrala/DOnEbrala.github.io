
form.addEventListener('submit', (e) => {
  
  const name = document.getElementById('name')
  const password = document.getElementById('password')
  const form = document.getElementById('form')
  const email=document.getElementById('Email');
  debugger
  let messages = []
  if (name.value === '' || name.value === 'Username' || name.value == null) {
    messages.push('Name is required')
  }

  if (password.value.length <= 6) {
    messages.push('Password must be longer than 6 characters')
  }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password')
  }
  if(ValidateEmail(email.value)===false){
    messages.push('invalid email')

  }
  if (messages.length > 0) {
    e.preventDefault()
    alert(messages.join(', '))
  }
  else{
      e.preventDefault()
      window.location.replace("index.html");
      document.getElementById("account").innerHTML = name.value;
    }
 

 

function ValidateEmail(email) 
{
  email=email.replace(/\s/g, '');

 var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 if (email.match(mailformat))
  {
    return (true)
  }
    return (false)
}

})