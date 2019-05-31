'use strict';

class Person {
  constructor(name, date, money) {
    this.name = name;
    this.birthday = date;
    this.money = money;
    this.accountHistory = [`Initial: ${money}$`];
  }

  getInfo() {
    const dateArr = this.birthday.split('.');
    const date = new Date(dateArr[2], dateArr[1], dateArr[0]);
    const age = getAge(date)//now.getFullYear() - birthYear;
    console.log(`Name: ${this.name}, Age: ${age}, Amount: ${this.money}$`);
  }
  addMoney(amountOfMoney, source) {
    this.accountHistory.push(`${source}: ${amountOfMoney}$`);
    this.money += amountOfMoney;
  }
  withdrawMoney(amountOfMoney, aim) {
    this.accountHistory.push(`${aim}: -${amountOfMoney}$`);
    this.money -= amountOfMoney;
  }
  getAccountHistory() {
    console.log(this.accountHistory);
  }
}

const dmytro = new Person('Dmytro', '26.11.1994', 1000);
const pavel = new Person('Pavel', '06.06.1990', 400);

dmytro.getInfo(); // print `Name: Dmytro, Age: 24, Amount: 1000$`
dmytro.addMoney(2000, 'salary');
dmytro.withdrawMoney(500, 'new phone');
dmytro.getInfo(); // Name: Dmytro, Age: 24, Amount: 2500$
dmytro.withdrawMoney(500, 'apartment rent');
dmytro.getAccountHistory(); // [ 'Initial: 1000', 'salary: 2000', 'new phone: -500', 'apartment rent: -500']

pavel.getInfo(); // // Name: Pavel, Age: 28, Amount: 400$


function getAge(dateString)
{
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate()))
  {
    age--;
  }
  return age;
}