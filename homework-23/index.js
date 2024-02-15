"use strict";

class Student {
  constructor(firstName, lastName, yearOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.evaluations = [];
    this.attendance = new Array(25);
  }

  getAge() {
    return new Date().getFullYear() - this.yearOfBirth;
  }

  averageScore() {

  }
}