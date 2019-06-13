'use strict';

class Person {
  constructor(name, date, money) {
    this.name = name;
    this.birthday = date.split('.');
    this.age = this.getAge();
    this.money = money;
    this.accountHistory = [];
    this.accountHistory.push({
      name: 'Initial',
      amountOfMoney: money
    });
  }

  getInfo() {
    return `Name: ${this.name}, Age: ${this.age}, Amount: ${this.money}$`;
  }
  addMoney(amountOfMoney, source) {
    this.accountHistory.push({
      name: source,
      amountOfMoney: amountOfMoney
    });
    this.money += amountOfMoney;
  }
  withdrawMoney(amountOfMoney, aim) {
    this.accountHistory.push({
      name: aim,
      amountOfMoney: -amountOfMoney
    });
    this.money -= amountOfMoney;
  }
  getAccountHistory() {
    const arrForInput = [];
    for (let item of this.accountHistory) {
      arrForInput.push(`${item.name}: ${item.amountOfMoney}$`);
    }
    return arrForInput;
  }

  getAge()
  {
    const dateArr = this.birthday;
    const today = new Date();
    const birthDate = new Date(dateArr[2], dateArr[1], dateArr[0]);
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate()))
    {
      age--;
    }
    return age;
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
