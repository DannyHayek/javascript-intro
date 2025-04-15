// ============================= Question 1 =============================

const students = [
    {name: "Jeff", scores: [45, 20, 100]},
    {name: "Ahmad", scores: [70, 88, 63]},
    {name: "Bob", scores: [77, 81, 99]},
    {name: "Frank", scores: [89, 78, 67]},
    {name: "John", scores: [45, 20, 100]},
];

// O(n) * O(m) => O(n * m) where at worst n = m => O(n * n) => O(n^2)
function generateReport(students) {
    const studentReports = [];
    
    // O(m) where m is the length of the students array
    for (let i = 0; i < students.length; i++) {
        let avg = 0;
        let sum = 0;
        let num = 0;
        let grade = "F";
        let curStudent = students.at(i);


        // O(n) where n is the length of the scores array
        for (let j = 0; j < curStudent.scores.length; j++) {
            sum += curStudent.scores.at(j);
            num++;
        }
        
        avg = sum / num;
        
        if (avg >= 90) {
            grade = "A";
        } else if (avg >= 80) {
            grade = "B";
        } else if (avg >= 70) {
            grade = "C";
        } else if (avg >= 60) {
            grade = "D";
        }
        
        studentReports.push({
            name: curStudent.name,
            average: avg,
            grade: grade,
        })
    }

    return studentReports;
}


console.log(generateReport(students));


// ============================= Question 2 =============================

class BankAccount {
    constructor(ownerName, initialBalance) {
        this.ownerName = ownerName;
        this.currentBalance = initialBalance;
    }

    deposit(amount) {
        this.currentBalance += amount;
    }

    withdraw(amount) {
        let withdrawn = 0;
        if (this.currentBalance < amount) {
            console.log("You do not have enough balance to withdraw that amount! Withdrawing maximum...")
            withdrawn = this.currentBalance;
            this.currentBalance = 0;
            return withdrawn;
        }
        this.currentBalance -= amount;
        return amount;
    }

    transferTo(anotherAccount, amount) {
        if (this.currentBalance < amount) {
            console.log("You do not have enough balance to transfer that amount! Transfer stopped!")
        } else {
            anotherAccount.deposit(this.BankAccount.withdraw(amount));
        }        
    }

    getSummary() {
        console.log(`${this.ownerName}'s balance is ${this.currentBalance}.`);
    }
}