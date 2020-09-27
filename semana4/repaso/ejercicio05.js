
message('Ejercicio 5')
//Ejercicio 5 - traer usuarios que tengan un dominio
//gmail.com
// console.log(users)



function getUserByMail(dominio){    
    let userFilter = users.filter((user)=>{
        let emailPosition = user.email.indexOf("@")
        let emailDominioValue = user.email.substr(emailPosition+1)
        // console.log(emailPosition)
        // console.log(emailDominioValue)
        return emailDominioValue === dominio
    })
    console.log(userFilter)
}

getUserByMail('gmail.com')
