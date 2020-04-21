class FloorDirector extends Employee {

  constructor(floorNbr) {
    super();
    this.floorNbr = 1
  }
  getFloorDirector() {
    return `${super.getEmployee()} ${this.floorNbr} `
  }
  setFloorDirector(floorNbr) {
    super.setEmployee()
    this.floorNbr = floorNbr
  }
  editPhone(nbr) {
    this.phonNbr = nbr
  }
  editEmail(email) {
    this.SchooldiaEmail = email
  }
  toStrting() {
    return `${super.toStrting()} ${this.floorNbr}`
  }
}