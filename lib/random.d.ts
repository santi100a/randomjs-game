/**
 * A function that generates pseudo-random numbers. This means that 
 * the numbers generated will eventually repeat, since computers can't
 * make truly random numbers. 
 * 
 * @param max The maximum of the pseudo-random numbers. 
 * @param min The minimum of the pseudo-random numbers (default: 0).
 * @returns The pseudo-random numbers.  
 */
export default function random(max: number, min?: number): number;