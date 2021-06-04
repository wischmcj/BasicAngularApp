import { Person } from "./person";

//

export class Employee extends Person {

    private currentSalary = 80_000;

    constructor(firstName: string, lastName: string, public id: string, public department: string) {
        super(firstName, lastName);
    }


    get salary(): number {
        return this.currentSalary;
    }

    get fullName(): string {
        return this.firstName + ' ' + this.lastName;
    }

    giveRaise(percent: number): void {
        this.currentSalary *= percent + 1;
    }
}