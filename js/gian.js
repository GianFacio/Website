window.onload=programmer;             // Call the initialize function on page load

function programmer()
{
    // Create a programmer object with some properties using JavaScript notion.
    let programmer =
    {
        firstName: "Gian",
        lastName: "Facio",
        age: 22,
        grade: "Junior",
        school: "GCU"
    };
    console.log ("This is the creator " + programmer.firstName + " " + programmer.lastName + " who is of age " + programmer.age + " and is a " + programmer.grade + ' at ' + programmer.school);
}
