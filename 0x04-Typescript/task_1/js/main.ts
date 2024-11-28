interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: string;
  location: string;
  yearsOfExperience?: number;
  [key: string]: any
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFuntion {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFuntion = (firstName: string, lastName: string) => {
  return `${firstName[0]}. ${lastName}`
}

interface StudentClassInterface {
  firstName: string;
  lastName: string;
}

interface StudentClassConstructorInterface {
  new(firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;
  
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}
