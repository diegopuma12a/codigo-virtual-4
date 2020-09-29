//Reemplazar los id cursos por los cursos
message('Ejercicio 4 :');

function getCourseById(id){
    let course = courses.find((cou)=>{
        return cou.courseId === id;
    });
    return course;
}


function parseUsersCourses() {
    let usersParse = users.map((user)=>{
        
        let  coursesUsermap = user.courses.map((courseId)=>{
            return getCourseById(courseId);
        })
        user.courses = coursesUsermap;

        return user;
    })

    console.log(usersParse)
}

parseUsersCourses();