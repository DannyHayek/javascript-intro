// ============================= Question 1 =============================

const students = [
    {name: "Jeff", scores: [45, 20, 100]},
    {name: "Ahmad", scores: [70, 88, 63]},
    {name: "Bob", scores: [77, 81, 99]},
    {name: "Frank", scores: [89, 78, 67]},
    {name: "John", scores: [45, 20, 100]},
];

// O(n) * O(m) => O(n * m)
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

// O(1) + O(1) + ... + O(n) => O(n)
class BankAccount {

    // O(1)
    constructor(ownerName, initialBalance) {
        this.ownerName = ownerName;
        this.currentBalance = initialBalance;
        this.actionHistory = [`Initial balance ${initialBalance}`];
    }

    // O(1)
    deposit(amount) {
        this.currentBalance += amount;
        this.actionHistory.push(`Deposited ${amount}`)
    }

    // O(1)
    withdraw(amount) {
        let withdrawn = 0;
        if (this.currentBalance < amount) {
            console.log("You do not have enough balance to withdraw that amount! Withdrawing maximum...")
            withdrawn = this.currentBalance;
            this.currentBalance = 0;
            this.actionHistory.push(`Withdrew ${withdrawn}`)
            return withdrawn;
        }
        this.currentBalance -= amount;
        this.actionHistory.push(`Withdrew ${amount}`)
        return amount;
    }

    // O(1)
    transferTo(anotherAccount, amount) {
        if (this.currentBalance < amount) {
            console.log("You do not have enough balance to transfer that amount! Transfer stopped!")
        } else {
            anotherAccount.deposit(this.withdraw(amount));
            console.log("Transfer complete!")
        }        
    }

    // O(1)
    getSummary() {
        console.log(`${this.ownerName}'s balance is ${this.currentBalance}.`);
    }

    // O(n) where n is the number of actions taken by the account owner
    printHistory() {
        console.log(`Action history for ${this.ownerName}: ${this.actionHistory.join(" - ")}`)
    }

}

const acc1 = new BankAccount("John", 500);
const acc2 = new BankAccount("Sara", 300); 

acc1.getSummary(); // John's balance is $500
acc2.getSummary(); // Sara's balance is $300 

acc1.transferTo(acc2, 250); // This will succeed
acc1.getSummary(); // John's balance is $250
acc2.getSummary(); // Sara's balance is $550

acc2.transferTo(acc1, 600); // This will fail and account summaries will remain the same
acc1.getSummary(); // John's balance is $250
acc2.getSummary(); // Sara's balance is $550

acc1.deposit(200); // This will succeed
acc1.withdraw(50); // this will succeed
acc1.withdraw(500); // This will fail and be changed accordingly in history

acc1.printHistory();

acc1.getSummary();



// ============================= Question 3 =============================

const tasks = [];

const taskbtn = document.getElementById("button");
taskbtn.addEventListener("click", addTask);

function addTask () {
 
    let list = document.getElementById("taskList");

    let taskText = document.getElementById("taskText").value;

    let newTask = document.createElement("li");
    newTask.setAttribute("id", "tasks");
    newTask.textContent = taskText;

    list.appendChild(newTask);

    document.getElementById("taskText").value = "";
}