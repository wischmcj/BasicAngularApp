describe('types in typescript', () => {

    describe('variables and constants in typescript', () => {

        it('using let to declare a variable', () => {
            let x: any;

            x = 3.14;
            expect(x).toBe(3.14);
            expect(typeof (x)).toBe('number');
            x = 'Tacos';
            expect(x).toBe('Tacos');
            expect(typeof (x)).toBe("string");

        });
        it('using let with a type in typescript', () => {
            let x: number;

            x = 3.14;
            x = 12;
            x = 123_456_789;
            x = 0xff; //hexadecimal
            x = 0b10101;
            x = 0o222;

            // x = 'Tacos';

        });
        it('union types in typescript', () => {
            let x: number | string;

            x = 'Dog';

            x = 12;

            // x = ['Dog', 'Cat'];
        });
        it('initializing variables with let', () => {
            let name = 'Joe';

            let age: string | number = 'Old';

            age = 42;

        });

    });

    describe('using const', () => {

        it('const allows you to declare a name for a value that cannot be reassigned', () => {

            const PI = 3.14; // you MUST initialize a const.

            // PI = 3;

            const favoriteNumbers = [9, 20, 108];

            // favoriteNumbers = [99];
            favoriteNumbers[0] = 18;


            const movie = {
                title: 'Thor',
                director: 'Taika Waititi',
                yearReleased: 2022
            };

            movie.title = 'Thor: Love and Thunder';

        });
    });

    describe('details of some data types', () => {
        it('has strings!', () => {
            const n1 = 'Joe';
            const n2 = "Joe";
            expect(n1).toBe(n2);

            const n3 = `Joe`;
            expect(n1).toBe(n3);
            expect(n2).toBe(n3);

            const story = `Chapter 1.
            It was a dark and stormy night!
            
            The end.
            `;

            const manager = 'Sue';
            const department = 'DEV';
            const startingSalary = 52_000;

            const message1 = 'You are hired. Your manager is ' + manager + ' in the ' + department + ' department, and your pay is ' + startingSalary;
            const message2 = `You are hired. Your manager is ${manager} in the ${department} department, and your pay is ${startingSalary}`;
            expect(message1).toBe(message2);

        });

        it('booleans', () => {

            function isOldEnough(age: number): boolean {
                return age >= 21;
            }

            expect(isOldEnough(21)).toBe(true);

            function isBestAge(age: number): boolean {
                return age === 52;
            }

            expect(isBestAge(30)).toBe(false);
            expect(isBestAge(52)).toBe(true);
        });
        it('truth table', () => {
            expect('beer').toBeTruthy();
            expect('').toBeFalsy();
            expect(0).toBeFalsy();
            expect(-1).toBeTruthy();
            expect(1).toBeTruthy();
            expect(undefined).toBeFalsy();
            expect(null).toBeFalsy();

            const friends = ['Sean', 'Billy', 'David', 'Sarah'];

            if (friends[0]) {
                // you have at least one friend!
            }
        });

    });

    // bonus - literal unions.

    it('using a literal union', () => {
        type SeatType = 'Aisle' | 'Window' | 'Center';

        const mySeat: SeatType = 'Center';


        type ThingWithLettersAndStuff = string;


        let name: ThingWithLettersAndStuff;

        name = 'Joe';
        //  name = 1433;


    });
});


