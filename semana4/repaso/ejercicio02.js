message('Ejercicio 2 :')


//Ejercicio 2 => Traer usuarios por nombres
// diego => traer todos los usuarios que tengan como nombre diego
console.log(users)

function getUserByName(name){
    let upperName = name.toUpperCase();
    let usersByName = users.filter((user)=>{        
        return user.name.toUpperCase() === upperName;
    });
    let userByNameFind = users.find((user)=>{
        return user.name.toUpperCase() === upperName;
    })
    console.log(userByNameFind)
    console.table(usersByName);
}

getUserByName("DiEgO");
