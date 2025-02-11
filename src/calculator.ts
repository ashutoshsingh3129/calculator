export function add(numbers: string): number {
    if (!numbers) return 0; // Return 0 if input is empty

    return numbers
    .split(',')
    .map(num => parseInt(num, 10) || 0) // Convert string to number, default to 0 if NaN
    .reduce((sum, num) => sum + num, 0);
}
