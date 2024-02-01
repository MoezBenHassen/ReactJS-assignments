const words = ['apple', 'banana','banana', 'cherry', 'durian'];

const input = [
    ["a", "b", "c"],
    ["c", "d", "f"],
    ["d", "f", "g"],
]
const findLongestWord = (words) => {
    let longestWord = '';
    let longestLength = 0;

    for (let word of words) {
        if (word.length > longestLength) {
            longestWord = word;
            longestLength = word.length;
        }
    }

    return { word: longestWord, length: longestLength };
};

const findLongestWord2 = (words) => {
    const wordObjects = words.map( (word) => ({ mot: word, longueur: word.length }) );

    const longestWordObject = wordObjects.reduce((prev, current) => {
        return current.longueur > prev.longueur ? current : prev;
    });

    return {
        mot: longestWordObject.mot,
        longueur: longestWordObject.longueur,
    };
};
const countOccurrences = (input) => {
    const flatArray = input.flat();

    const occurrenceCount = flatArray.reduce((accumulator, currentValue) => {
        accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
        return accumulator;
    }, {});

    return occurrenceCount;
};



let students = [
    { name: 'John', id: 123, mark: 98 },
    { name: 'Chris', id: 101, mark: 23 },
    { name: 'Alex', id: 456, mark: 98 },
    { name: 'Steve', id: 102, mark: 45 },
    { name: 'Sponge Bob', id: 789, mark: 98 },
];

const calculateTotal = (students) => {
    const filteredStudents = students.filter((student) => student.mark > 50);

    const total = filteredStudents.reduce((accumulator, currentStudent) => {
        return accumulator + currentStudent.mark;
    }, 0);

    return total;
};

const totalMarks = calculateTotal(students);
console.log(totalMarks);
console.log(findLongestWord(words));
console.log(findLongestWord2(words));
console.log(countOccurrences(input));
console.log(calculateTotal(students));