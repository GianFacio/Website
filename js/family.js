function family() 
{
    // Create new objects - Miguel, Eddie, and Sandra
    function Sibling(firstName, lastName, age, occupation, grade, birthPlace) 
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.occupation = occupation;
        this.grade = grade;
        this.birthPlace = birthPlace;
    }

    // Create new objects - Miguel, Eddie, Sandra
    let Miguel = new Sibling("Miguel", "Tamayo", 19, "Student", 13, "Inglewood, CA");
    let Eddie = new Sibling("Eddie", "Tamayo", 16, "Student", 11, "Los Angeles, CA");
    let Sandra = new Sibling("Sandra", "Tamayo", 12, "Student", 6, "Beverly Hills, CA");

    console.log('This is ' + Miguel.firstName + ' ' + Miguel.lastName + ' who is of age ' + Miguel.age + ' and is a ' + Miguel.occupation + ' and is in grade ' + Miguel.grade + ' and was born in ' + Miguel.birthPlace);
    console.log('This is ' + Eddie.firstName + ' ' + Eddie.lastName + ' who is of age ' + Eddie.age + ' and is a ' + Eddie.occupation + ' and is in grade ' + Eddie.grade + ' and was born in ' + Eddie.birthPlace);
    console.log('This is ' + Sandra.firstName + ' ' + Sandra.lastName + ' who is of age ' + Sandra.age + ' and is a ' + Sandra.occupation + ' and is in grade ' + Sandra.grade + ' and was born in ' + Sandra.birthPlace);

    // Create new objects for hobbies
    function Hobbies(hobby) 
    {
        this.hobby = hobby;
    }

    let miguelHobbies = new Hobbies("Video Games");
    let eddieHobbies = new Hobbies("Working Out");
    let sandraHobbies = new Hobbies("YouTube");

    console.log("Miguel's hobby is " + miguelHobbies.hobby)
    console.log("Eddie's hobby is " + eddieHobbies.hobby)
    console.log("Sandra's hobby is " + sandraHobbies.hobby)

}
