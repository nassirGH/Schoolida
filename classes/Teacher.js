class Teacher extends Employee {

  constructor(floorNbr, subject, empType) {
    super();
    this.floorNbr = floorNbr
    this.subject = subject
    this.empType = empType
  }
  getTeacher() {
    return `${super.getEmployee()} ${this.subject} ${this.empType} ${this.floorNbr}`
  }
  setTeacher(floorNbr, subject, empType) {
    super.setEmployee()
    this.floorNbr = floorNbr
    this.subject = subject
    this.empType = empType
  }

  toStrting() {
    return `${super.toStrting()} ${this.subject} ${this.empType} ${this.floorNbr} `
  }
}