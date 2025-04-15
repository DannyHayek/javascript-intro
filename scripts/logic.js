const students = [
    {name: "Jeff", scores: [45, 20, 100]},
    {name: "Ahmad", scores: [70, 88, 63]},
    {name: "Bob", scores: [77, 81, 99]},
    {name: "Frank", scores: [89, 78, 67]},
    {name: "John", scores: [45, 20, 100]},
];

function generateReport(students) {
    const studentReports = [];
    
    for (let i = 0; i < students.length; i++) {
        let avg = 0;
        let sum = 0;
        let num = 0;
        let grade = "F";
        let curStudent = students[i];

        for (let j = 0; j < curStudent.scores.length; j++) {
            sum += curStudent.scores[j];
            num++;
        }
        
        avg = sum / num;
        console.log(`${avg}`);
    }
}

generateReport(students);