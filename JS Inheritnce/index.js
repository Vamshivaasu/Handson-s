//Q!
const parent = {
    detail(){
        console.log(`My name is ${this.name} and im from ${this.location} and age is ${this.age}`)
    }
}
const firstChild = Object.create(parent);
firstChild.name="EA19"
firstChild.location="prepbyte"
firstChild.age="19"

firstChild.detail();


const secondChild = Object.create(parent);
secondChild.name="EA19"
secondChild.location="prepbyte"
secondChild.age="19"


secondChild.detail();
