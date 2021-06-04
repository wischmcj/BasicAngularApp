describe('objects', () => {

    describe('object literals', () => {

        it('can be created', () => {

            interface Customer {
                name: string;
                creditLimit: number;
                address?: {
                    street: string;
                    city: string;
                    state: string;
                };
            };

            let joe: Customer = {
                name: 'Joe Schmidt',
                creditLimit: 5000,
                address: {
                    street: '1212 Mockingbird Ct.',
                    city: 'Mayfield Heights',
                    state: 'OH'
                }
            };

            joe.creditLimit = 6000;
            expect(joe.name).toBe('Joe Schmidt');
            expect(joe.creditLimit).toBe(6000);

            expect(joe.address?.state).toBe('OH');

            let sue: Customer = {
                name: 'Sue Schmidt',
                creditLimit: 10_000
            }

            expect(sue.address).toBeUndefined();
            expect(sue.address?.state).toBeUndefined();// "Elvis"
        });
        it('structural typing - aka duck typing', () => {

            interface Payment {
                for: string,
                amount: number
            }
            const payment: Payment = {
                for: 'Grass Mowing',
                amount: 40
            }

            const payment2 = {
                for: 'Painting',
                amount: 300,
                company: 'Eds Painting',
                phoneNumber: '555-1212'
            }

            const payments: Payment[] = [payment, payment2, { for: 'Raking', amount: 999 }];

            processPayment(payments[0]);
            processPayment(payment);
            processPayment(payment2);

            function processPayment(thing: Payment): string {
                return `For ${thing.for} you paid $${thing.amount}`;
            }

            const actor = {
                name: 'Ben Gazarra',
                birthDate: '389389'
            }

            sendBirthdayCard(actor);

            const movie = {
                name: 'Jaws',
                director: 'Spielberg'
            };
            sendBirthdayCard(movie);
            function sendBirthdayCard(actor: { name: string }) {
                console.log('Happy Birthday, ' + actor.name);
            }
        });

    });

    describe('function literals', () => {
        function add(a: number, b: number): number {
            return a + b;
        }

        it('examples', () => {
            let subtract;

            expect(add(2, 2)).toBe(4);


            // named function

            // // named anonymous functions (these are dumb. Don't do it.)
            // const divide = function (a: number, b: number): number {
            //     return a / b;
            // }
            type MathOp = (a: number, b: number) => number;


            subtract = (a: number, b: number): number => a - b;
            expect(subtract(2, 2)).toBe(0);

            let multiply: MathOp;


            multiply = (a: number, b: number) => 32;

            // (a: number, b:number):number => a * b;
            // const favoriteFood = 'Tacos';

            expect(doMath(10, add)).toBe(20);
            expect(doMath(10, subtract)).toBe(0);

            // expect(doMath(10, (a,b)=> (a + b) *2 )

            // a higher order function is a function that either takes one or more functions as an argument, and/or returns a function
            function doMath(x: number, b: MathOp): number {
                return b(x, x);
            }



        });

        it('another', () => {
            expect(add(2, 2)).toBe(4);
        });



    });
});


