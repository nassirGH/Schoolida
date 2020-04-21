class Employee {

  constructor(firstName, lastName, phonNbr, pEmail, role, schoolID, baseSalary, BankInfo, SchooldiaEmail) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phonNbr = phonNbr
    this.pEmail = pEmail
    this.role = role
    this.schoolID = schoolID
    this.baseSalary = baseSalary
    this.BankInfo = BankInfo
    this.SchooldiaEmail = SchooldiaEmail
  }
  getEmployee() {
    return `${this.firstName} ${this.lastName} ${this.phonNbr} ${this.pEmail} ${this.role} ${this.schoolID} ${this.baseSalary} ${this.BankInfo} ${this.SchooldiaEmail}`
  }
  setEmployee(firstName, lastName, phonNbr, pEmail, role, schoolID, baseSalary, BankInfo, SchooldiaEmail) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phonNbr = phonNbr
    this.pEmail = pEmail
    this.SchooldiaEmail = SchooldiaEmail
    this.role = role
    this.schoolID = schoolID
    this.baseSalary = baseSalary
    this.BankInfo = BankInfo
  }
  toStrting() {
    return `${this.firstName} ${this.lastName} ${this.phonNbr} ${this.pEmail} ${this.role} ${this.schoolID} ${this.baseSalary} ${this.BankInfo} ${this.SchooldiaEmail}`
  }
}