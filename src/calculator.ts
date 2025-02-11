export function add(numbers: string): number {
    if (!numbers) return 0; // Return 0 if input is empty

    return numbers
        .split(/[\n,]/) // Split using regex to handle both ',' and '\n'
        .map(num => parseInt(num.trim(), 10) || 0) // Convert to number, treating invalid values as 0
        .reduce((sum, num) => sum + num, 0); // Sum up numbers
}
