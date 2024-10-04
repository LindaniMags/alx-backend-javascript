export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set length(len) {
    if (typeof len !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = len;
  }

  get length() {
    return this._length;
  }

  set students(stud) {
    if (stud instanceof Array) {
      this._students = stud;
    } else {
      throw new TypeError('Students must be an Array');
    }
  }

  get students() {
    return this._students;
  }
}
