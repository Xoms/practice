
export function getUser({ email, password }) {
    const users = JSON.parse(localStorage.getItem('Users'))
    console.log(users);
    console.log(email, password);
   return users.find(user => user.email === email && user.password === password)
}

export function postUser(user) { 
    
    const {email,password} = user
    const users = JSON.parse(localStorage.getItem('Users'))
    if (users.find(el => el.email === email)) return;
    users.push(user)
    
    localStorage.setItem('Users', JSON.stringify(users))
    return {email,password}
}