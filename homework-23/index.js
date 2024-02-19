class Student {
  constructor(firstName, lastName, yearOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.evaluations = [];
    this.attendance = new Array(Student.ATTENDANCE_LENGTH);
  }

  static ATTENDANCE_LENGTH = 25;
  static DEFAULT_AVERAGE_EVALUATIONS = 90;
  static DEFAULT_AVERAGE_ATTENDANCE = 0.9;

  #setAttendance(value) {
    const attendanceLength = this.attendance.filter(item => item !== undefined).length

    if (attendanceLength < Student.ATTENDANCE_LENGTH) {
      return this.attendance[Object.values(this.attendance).length] = value;
    }
  }

  getAverageEvaluations() {
    if (this.evaluations.length === 0) return 0;

    const sum = this.evaluations.reduce((acc, cur) => acc + cur, 0);
    return sum / this.evaluations.length;
  }

  getAverageAttendance() {
    return this.attendance.filter(item => item === true).length / Student.ATTENDANCE_LENGTH;
  }

  addEvaluation(value) {
    this.evaluations.push(value);
  }

  getAge() {
    return new Date().getFullYear() - this.yearOfBirth;
  }

  present() {
    this.#setAttendance(true);
  }

  absent() {
    this.#setAttendance(false);
  }

  summary() {
    const averageAttendance = this.getAverageAttendance();
    const averageEvaluations = this.getAverageEvaluations();

    if (averageAttendance > Student.DEFAULT_AVERAGE_ATTENDANCE
      && averageEvaluations > Student.DEFAULT_AVERAGE_EVALUATIONS) {
      return "Молодець!";
    } else if (averageAttendance > Student.DEFAULT_AVERAGE_EVALUATIONS
      || averageEvaluations > Student.DEFAULT_AVERAGE_EVALUATIONS) {
      return "Добре, але можна краще!";
    } else return "Редиска!";
  }
}


const me = new Student("Roman", "Chumychov", 1986);
console.log(me.getAge());
me.addEvaluation(100);
me.addEvaluation(10);
me.addEvaluation(70);
me.addEvaluation(90);
me.present();
me.present();
me.present();
me.absent();
console.log(me.getAverageAttendance());
console.log(me.getAverageEvaluations());
console.log(me.summary());

const mary = new Student("Mary", "Johnson", 2001);
console.log(mary.getAge());
mary.addEvaluation(98);
mary.addEvaluation(92);
mary.addEvaluation(85);
for (let i = 1; i <= 23; i++) mary.present();
mary.absent();
mary.absent();
console.log(me.getAverageAttendance());
console.log(me.getAverageEvaluations());
console.log(mary.summary());