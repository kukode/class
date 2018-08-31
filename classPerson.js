/**
 * @description create class person 
 */

 class Person {
     constructor(fullName,age,phone,email,address){
        this.fullName = fullName
        this.age = age
        this.phone = phone
        this.email = email
        this.address = address
     }

     getName(){
         return `Nama : ${this.fullName} Umur : ${this.age} Phone : ${this.phone} Email : ${this.email} Address : ${this.address}` 
     }
     setPos(pos){
         return this.pos = pos
     }
     setSkill(skillOne,skillTwo,skillThree){
         this.skillOne = skillOne
         this.skillTwo = skillTwo
         this.skillThree = skillThree
         return `Skill : ${this.skillOne}, Skill ${this.skillTwo}, Skill ${this.skillThree}`
     }
 }
 const myPerson = new Person('joko',23,12345,'joko@gmail.com','jl.sarimadu')
 console.log(myPerson.getName())
 console.log(myPerson.setPos(123))
 console.log(myPerson.setSkill('Node JS','PHP','React JS'))
 console.log(myPerson)