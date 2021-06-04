
import { Employee, Contractor } from '../hr';


describe('using classes to create objects', () => {


    describe('creating employees', () => {
        it('using a constructor', () => {
            const bob = new Employee('Bob', 'Smith', '99', 'DEV');

            expect(bob.id).toBe('99');
            expect(bob.lastName).toBe('Smith');

            expect(bob.firstName).toBe('Bob');
            expect(bob.fullName).toBe('Bob Smith');
            expect(bob.department).toBe('DEV');

            expect(bob.salary).toBe(80_000);

            bob.giveRaise(.5);




        });

        it('using a contractor', () => {
            const jeff = new Contractor('Jeff', 'Gonzalez');
        });

    });
});