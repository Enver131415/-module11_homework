import { countDown } from './index.js';

describe ('test for countDown function', () => {
    it (' if positive number',() => {
        const result = countDown(3)
        expect(result).toBe(3, 2, 1);
    })
    it ('if zero',() => {
        const result = countDown(0)
        expect(result).toBe(0);
    })
    it ('if string',() => {
        const result = countDown('hello')
        expect(result).toBe('string');
    })
    it ('corner case',() => {
        const result = countDown(-3)
        expect(result).toBe(-3, -2, -1);
    })    
});