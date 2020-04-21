class Principal extends Employee {

  constructor() {
    super();
  }
  getPrincipal() {
    return `${super.getEmployee()} `
  }
  setPrincipal() {
    super.setEmployee()
  }
  editPhone(nbr) {
    this.phonNbr = nbr
  }
  uploadFile() {

  }
  createStd() {

  }
  addClass() {

  }
  toStrting() {
    return `${super.toStrting()} `
  }
}