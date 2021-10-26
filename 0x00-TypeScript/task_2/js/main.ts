interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
class Director implements DirectorInterface {
    workFromHome(): string {
      return "Working from home";
    }
  
    getCoffeeBreak(): string {
      return "Getting a coffee break";
    }
  
    workDirectorTasks(): string {
      return "Getting to director tasks";
    }
  }
  
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return "Cannot work from home";
    }
    getCoffeeBreak(): string {
      return "Cannot have a break";
    }
    workTeacherTasks(): string {
      return "Getting to work";
    }
  }
  
  function createEmployee(salary: number | string): Teacher | Director {
    if (typeof salary === "number"){
        if (salary < 500) return new Teacher();
    } else {
        return new Director();
    }
  }

  function isDirector(emp: (Director | Teacher)): emp is Director {
        return (emp as Director) instanceof Director;
  }

  function executeWork(emp: DirectorInterface | TeacherInterface): string {
    if(isDirector(emp)) return emp.workDirectorTasks();
    return emp.workTeacherTasks();
    }

  type Subjects = "Math" | "History";

  function teachClass(classType:Subjects): string {
    if (classType === "Math") return "Teaching Math";
    if (classType === "History") return "Teaching History";
  }