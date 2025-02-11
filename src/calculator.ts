export function add(numbers: string): number {
    if (!numbers) return 0; // Return 0 if input is empty

    const parts = numbers.split(',');
    if (parts.length === 1) return parseInt(parts[0], 10) || 0; // Handle single number case

    const num1 = parseInt(parts[0], 10) || 0;
    const num2 = parseInt(parts[1], 10) || 0;

    return num1 + num2;
}
