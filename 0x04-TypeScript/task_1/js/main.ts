export interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [attribute: string]: any;
}

export interface Directors extends Teacher {
    numberOfReports: number;
}

export function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}

export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

export interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

export interface ConstructorInterface {
    (firstName: string, lastName: string): StudentClassInterface;
}

export class StudentClass implements StudentClassInterface {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

  workOnHomework() {
    return "Currently working";
}

  displayName() {
    return this.firstName;
}
}
