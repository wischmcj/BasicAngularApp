export function isEven(e: number): boolean {
    return e % 2 === 0;
}

export function isOdd(e: number): boolean {
    return !isEven(e);
}

export const PI = 3.14;

export interface Recipe {
    name: string;
    steps: string[]
}

export class Customer {

}

export type EmployeeType = 'full-time' | 'part-time' | 'contractor';