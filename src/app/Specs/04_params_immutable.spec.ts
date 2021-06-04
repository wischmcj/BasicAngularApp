
describe('some details about functions etc.', () => {

    it('optional parameters and default values', () => {

        function formatName(first: string, last: string, mi?: string): string {
            let fullName = `${last}, ${first}`;
            if (mi) {
                fullName += ` ${mi}.`;
            }
            return fullName;
        }


        expect(formatName('Han', 'Solo')).toBe('Solo, Han');
        expect(formatName('Han', 'Solo', 'D')).toBe('Solo, Han D.');

        function add(a: number = 10, b: number = 12, ...rest: number[]): number {
            const firstTwo = a + b;
            return rest.reduce((s, n) => s + n, firstTwo);
        }

        expect(add(9, 9)).toBe(18);
        expect(add()).toBe(22);
        expect(add(5)).toBe(17);
        expect(add(undefined, 10)).toBe(20);

        expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);



    });
});

describe('a few immutable operation patterns', () => {

    it('on arrays', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        const newNumbers = [0, ...numbers, 10]; // array spread operator (...)
        expect(newNumbers).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        expect(numbers).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);

        const updatedNumbers = numbers.filter(n => n !== 5);

        expect(updatedNumbers).toEqual([1, 2, 3, 4, 6, 7, 8, 9]);


    });
    it('on objects', () => {
        interface Movie {
            title: string;
            director: string;
            yearReleased: number;
        };

        const movie = {
            title: 'Star Wars IV: A New Hope',
            director: 'George Lucas',
            yearReleased: 1978
        };

        // movie.yearReleased = 1977;

        const newMovie = { ...movie, yearReleased: 1977 };
        expect(newMovie).toEqual({
            title: 'Star Wars IV: A New Hope',
            director: 'George Lucas',
            yearReleased: 1977
        });

        expect(movie).toEqual({
            title: 'Star Wars IV: A New Hope',
            director: 'George Lucas',
            yearReleased: 1978
        });


        function updateYear(movie: Movie, newYear: number): Movie {
            return {
                ...movie,
                yearReleased: newYear
            };
        }
        expect(updateYear(movie, 1983)).toEqual({
            title: 'Star Wars IV: A New Hope',
            director: 'George Lucas',
            yearReleased: 1983
        });
        // if you are going to use an arrow function to return an object as an expression, use parens around the object literal.
        const updateDirect = (movie: Movie, newDirector: string): Movie => ({ ...movie, director: newDirector });

    });

    it('changing objects in an array (sucks)', () => {
        const vehicles = [
            { vin: '398398938', make: 'Ford', model: 'Taurus', mileage: 123_100 },
            { vin: '678967877', make: 'Honda', model: 'Pilot', mileage: 87_000 },
            { vin: '337873787', make: 'Chevy', model: 'Bolt', mileage: 93_123 },
            { vin: '377329922', make: 'Dodge', model: 'Ram', mileage: 189_888 }
        ];
        // pluck out the objec

        const objectToChange = vehicles.find(v => v.vin === '337873787'); // hold on to this.

        const arrayWithoutThatVehicle = vehicles.filter(v => v.vin !== '337873787');

        const updatedVehicle = { ...objectToChange, model: 'Volt' };

        const newListOfVehicles = [...arrayWithoutThatVehicle, updatedVehicle];

        expect(newListOfVehicles).toEqual([

            { vin: '398398938', make: 'Ford', model: 'Taurus', mileage: 123_100 },
            { vin: '678967877', make: 'Honda', model: 'Pilot', mileage: 87_000 },
            { vin: '377329922', make: 'Dodge', model: 'Ram', mileage: 189_888 },
            { vin: '337873787', make: 'Chevy', model: 'Volt', mileage: 93_123 },
        ]);

    });
    it('using a map of things', () => {
        const vehicleMap = {
            '398398938': { vin: '398398938', make: 'Ford', model: 'Taurus', mileage: 123_100 },
            '678967877': { vin: '678967877', make: 'Honda', model: 'Pilot', mileage: 87_000 },
            '337873787': { vin: '337873787', make: 'Chevy', model: 'Bolt', mileage: 93_123 },
            '377329922': { vin: '377329922', make: 'Dodge', model: 'Ram', mileage: 189_888 }
        };
        expect(vehicleMap['337873787'].mileage).toBe(93_123);

        const newVehicleMap = { ...vehicleMap, '337873787': { vin: '337873787', make: 'Chevy', model: 'Volt', mileage: 93_123 } };

        // const anotherVersion = {...newVehicleMap, 'MY-CAR': {}}
    });


});