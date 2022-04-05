/**
 * A function that generates pseudo-random numbers. This means that 
 * the generated numbers will eventually repeat, since computers can't
 * make truly random numbers. 
 * 
 * @param max The maximum value of the pseudo-random number. 
 * @param min The minimum value of the pseudo-random number
 * (0 by default).
 * @returns A pseudo-random number.  
 */
export default function random(max: number, min?: number): number;