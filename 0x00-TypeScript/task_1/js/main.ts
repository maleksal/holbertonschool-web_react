interface Teacher {

    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [newProp: string]: any,
}

interface Directors extends Teacher {
    numberOfReports: number;
}


interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = function(firstName: string, lastName: string): string {
	return '${firstName[0]}. ${lastName}';
}

interface ClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

class StudentClass implements ClassInterface {
     firstName: string;
     lastName: string;
    
     constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    workOnHomework():string{
        return "Currently working";
    }
    
    displayName():string{
        return this.firstName;
    }
}

const studentClass: StudentClass = new StudentClass('Edward', 'Snowden');
console.log(studentClass.displayName());
console.log(studentClass.workOnHomework());

