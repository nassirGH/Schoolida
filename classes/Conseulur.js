class Conseulur extends Employee {

  constructor(officeDays, officeHours) {
    super();
    this.officeDays = []
    this.officeHours = []
  }
  getConseulur() {
    return `${super.getEmployee()} `
  }
  setConseulur() {
    super.setEmployee()
  }

  toStrting() {
    return `${super.toStrting()} ${this.officeDays} ${this.officeHours} `
  }
}