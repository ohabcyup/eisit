class MySchool {
  static students: string[] = [];

  static addStudent(studentName: string) {
    this.students.push(studentName);
  }
}

// Usage
MySchool.addStudent("ZZ Top");
