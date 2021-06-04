import { isEven, isOdd } from "../utils/math";


describe('array methods', () => {

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    beforeEach(() => {
        numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    });
    // TODO: beforeEach
    it('visiting each element of an array', () => {
        // just go through each one and let me have a look at it.
        numbers.forEach((v, i, a) => console.log({ v, i, a }));
    });

    describe('methods that produce a new array', () => {

        it('has filter', () => {

            // filter is Where in LINQ
            const evens = numbers.filter(isEven);

            expect(evens).toEqual([2, 4, 6, 8]);
            expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });

        it('has map', () => {
            // map is select in LINQ
            // map is how you get from point a -> point b
            const doubled = numbers.map(n => n + n);

            expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);

        });

    });
    describe('methods that return a single (scalar) value', () => {

        it('testing the membership of an array', () => {

            // in C# Linq this is .all
            const allEven = numbers.every(isEven);
            expect(allEven).toBe(false);
            // in c# Link this is .any
            const someEven = numbers.some(isEven);
            expect(someEven).toBe(true);
        });

        it('finding the first value that matches a predicate', () => {

            // do this
            const fizz = numbers.find(n => n % 3 === 0);
            expect(fizz).toBe(3);
            const x = numbers.find(n => n === 32);
            expect(x).toBe(undefined);
            // not this
            const fizz2 = numbers.filter(n => n % 3 === 0)[0];
            expect(fizz2).toBe(3);


        });

        it('has reduce', () => {
            const total = numbers.reduce((s, n) => s + n);
            expect(total).toBe(45);
        });


        it('use reduce to determine application state', () => {

            interface Action {
                type: string;
            }

            const actions: Action[] = [
                { type: 'add' },
                { type: 'subtract' },
                { type: 'add' },
                { type: 'add' },
                { type: 'add' },
                { type: 'add' },
                { type: 'subtract' }

            ];

            const finalValue = actions.reduce((s: number, n: Action) => {

                switch (n.type) {
                    case 'add': {
                        return s + 1;
                    }
                    case 'subtract': {
                        return s - 1;
                    }
                    default: {
                        return s;
                    }
                }

            }, 0)


        });

    });

    describe('an example', () => {
        it('doing something more real with this', () => {

            interface Vehicle {
                vin: string,
                make: string,
                model: string,
                mileage: number;
            };

            const vehicles: Vehicle[] = [
                { vin: '398398938', make: 'Ford', model: 'Taurus', mileage: 123_100 },
                { vin: '678967877', make: 'Honda', model: 'Pilot', mileage: 87_000 },
                { vin: '337873787', make: 'Chevy', model: 'Bolt', mileage: 93_123 },
                { vin: '377329922', make: 'Dodge', model: 'Ram', mileage: 189_888 }
            ];

            const TotalMilageHighMilage: number = vehicles
                .filter(v => v.mileage > 100_000)
                .reduce((s: number, n: Vehicle) => s + n.mileage, 0);

            expect(TotalMilageHighMilage).toEqual(123_100 + 189_888);


            const highMilageVehicles: string[] = vehicles
                .filter(v => v.mileage > 100_000)
                .map(v => `${v.make} ${v.model}`);

            expect(highMilageVehicles).toEqual(['Ford Taurus', 'Dodge Ram']);

        });

    });


});

