export const add = (a: number, b: number): number => a + b

export const subtract = (a: number, b: number): number => a - b
//tsc will ignore and this code will not be emitted to JS
type ProductType = {
    id: number,
    price: number,
    name: string
}

interface Product {
    id: number;
    price: number,
    name: string
}
//tsc will ignore and this code will not be emitted to JS
export interface IOperations<T> {
    add(data: T): boolean;
}
//tsc will ignore implements and this code will not be emitted to JS, but the class code will be emitted to JS
export class Operations implements IOperations<Product> {
    add(data: Product): boolean {
        return true
    }
}

export const divide = async (a: number, b: number): Promise<number> => {
    const res = a / b
    if (res === Infinity)
        throw new Error('divisor should not be zero')
    else
        return res
}

const callDivide = async (): Promise<void> => {
    try {
        const data = await divide(12, 3)
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

callDivide()