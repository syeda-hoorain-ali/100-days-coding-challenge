// Question 123: Create a loop that iterates through a string and stops when it finds the first vowel.

const findVowel = (string: string) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (const char of string) {
        if (vowels.includes(char.toLowerCase())) {
            console.log(`First vowel found: ${char}`);
            break;
        }
        console.log(char);
    }
}

findVowel('TypeScript');
