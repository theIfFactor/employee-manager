export default class Employee {
  // constructor
    constructor(id, name, phone, title){
      this.id = id;
      this.name = name;
      this.phone = phone;
      this.title = title;
    }
    // updateName
  updateName(val){
    this.name = val;
  }
    // updatePhone
  updatePhone(val){
    this.phone = val;
  }
    // updateTitle
  updateTitle(val){
    this.title = val;
  }   
}