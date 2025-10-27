class Employee {
    constructor(){
        this.baseSalary = 5000000;
    }

    calculateSalary(){

    }
}

class FullTimeEmployee extends Employee {
    calculateSalary(){
        console.log(`Gaji karyawan yang tetap adalah ${this.baseSalary}`);
    }
}

class PartTimeEmployee extends Employee {
    calculateSalary(totalHours){
        this.perjam = 50000;
        this.totalSalary = this.baseSalary * totalHours;
        console.log(`Gaji karyawan part time adalah total jam kerja/bulan ${totalHours}, dengan gaji perjam ${this.baseSalary}, maka gaji bulan ini adalah ${this.totalSalary}`);
    }
}

const partTime = new PartTimeEmployee();
partTime.calculateSalary(40);