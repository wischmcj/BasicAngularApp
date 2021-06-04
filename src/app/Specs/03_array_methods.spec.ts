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

        it('an example of using reduce to determine application state', () => {
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

            // assuming this is the list of things that the user did, and the initial value for our number is 0, what is the current
            // value?

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

            expect(finalValue).toBe(3);
        });

    });

    describe('an example', () => {

        it('doing something more real with this', () => {

            interface Vehicle {
                vin: string;
                make: string;
                model: string;
                mileage: number;
            };
            const vehicles: Vehicle[] = [
                { vin: '398398938', make: 'Ford', model: 'Taurus', mileage: 123_100 },
                { vin: '678967877', make: 'Honda', model: 'Pilot', mileage: 87_000 },
                { vin: '337873787', make: 'Chevy', model: 'Bolt', mileage: 93_123 },
                { vin: '377329922', make: 'Dodge', model: 'Ram', mileage: 189_888 }
            ];

            // what is the total mileage of all the cars with more than 100_000 miles.
            const totalHighMileage: number = vehicles
                .filter(isHighMilageVehicle) // -> Vehicles come out of this!
                .reduce(addMileage, 0);

            expect(totalHighMileage).toBe(123_100 + 189_888);

            // Pure Function - and those are GOOD in programming.
            function addMileage(state: number, vehicle: { mileage: number }) {
                return state + vehicle.mileage;
            }

            function isHighMilageVehicle(v: Vehicle): boolean {
                return v.mileage >= 100_000;
            }

            expect(addMileage(1000, { mileage: 300 })).toBe(1300)
            // -- a reduce...

            // what are the vehicles with high milage (where high >= 100_000)
            const highMileageVehicles: string[] = vehicles
                .filter(isHighMilageVehicle) // 4 -> 2 
                .map(makeSummaryFromVehicle); // 2 vehicles,=> 2 strings

            function makeSummaryFromVehicle(v: Vehicle): string {
                return `${v.make} ${v.model}`;
            }

            expect(highMileageVehicles).toEqual(['Ford Taurus', 'Dodge Ram']);
        });

    });


});

