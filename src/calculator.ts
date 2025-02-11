export function add(numbers: string): number {
    if (!numbers) return 0; // Return 0 if input is empty

    let delimiterRegex = /[\n,]/; // Default delimiters: comma and newline

    // Check if the input starts with a custom delimiter definition
    const customDelimiterMatch = numbers.match(/^\/\/(.+)\n(.*)$/);
    if (customDelimiterMatch) {
        const customDelimiter = customDelimiterMatch[1].replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // Escape special characters
        delimiterRegex = new RegExp(`${customDelimiter}|\n|,`); // Support custom delimiter along with default ones
        numbers = customDelimiterMatch[2]; // Extract actual number part
    }

    const numArray = numbers
        .split(delimiterRegex) // Split using combined delimiter
        .map(num => num.trim()) // Remove extra spaces
        .filter(num => num !== '') // Ignore empty values
        .map(num => parseInt(num, 10) || 0); // Convert to number, handling invalid cases as 0

    // Find all negative numbers
    const negativeNumbers = numArray.filter(num => num < 0);
    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed: ${negativeNumbers.join(", ")}`);
    }

    return numArray.reduce((sum, num) => sum + num, 0); // Sum up numbers
}
