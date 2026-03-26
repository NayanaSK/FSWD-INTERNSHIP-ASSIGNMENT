let students = [
    {
        name: "Rahul",
        marks: [85, 78, 90]
    },
    {
        name: "Anita",
        marks: [88, 92, 79]
    },
    {
        name: "Kiran",
        marks: [70, 75, 80]
    }
];

function calculateAverage(marks) {
    let total = 0;
    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }
    return total / marks.length;
}

for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let avg = calculateAverage(student.marks);

    console.log("Student:", student.name);
    console.log("Marks:", student.marks);
    console.log("Average:", avg);
    console.log("---------------------");
}