export const add = (a, b) => {
  return a + b;
}

export const subtract = (a, b) => {
  return a - b;
}

export const multiply = (a, b) => {
  return a * b;
}

export const divide = (a, b) => {
  return a / b;
}

export const power = (a, b) => {
  return a ** b;
}

export const round = (a) => {
  return Math.round(a);
}

export const roundUp = (a) => {
  return Math.ceil(a);
}

export const roundDown = (a) => {
  return Math.floor(a);
}

export const absolute = (a) => {
  return Math.abs(a);
}

export const quotient = (a, b) => {
  const result = a / b;
  return (result < 0) ? Math.ceil(result) : Math.floor(result);
}

export const remainder = (a, b) => {
  return a % b;
}

export const sayHello = (string) => {
  return `Hello, ${string}!`;
}

export const uppercase = (string) => {
  return string.toUpperCase();
}

export const lowercase = (string) => {
  return string.toLowerCase();
}

export const countCharacters = (string) => {
  return string.length;
}

export const firstCharacter = (string) => {
  return string.charAt(0);
}

export const firstCharacters = (string, n) => {
  return string.slice(0, n);
}

export const negate = (a) => {
  return !a;
}

export const both = (a, b) => {
  return a && b;
}

export const either = (a, b) => {
  return a || b;
}

export const none = (a, b) => {
  return !(a || b);
}

export const one = (a, b) => {
  return (a || b) && !(a && b);
}

export const truthiness = (a) => {
  return Boolean(a);
}

export const isEqual = (a, b) => {
  return a === b;
}

export const isGreaterThan = (a, b) => {
  return a > b;
}

export const isLessThanOrEqualTo = (a, b) => {
  return a <= b;
}

export const isOdd = (a) => {
  return a % 2 === 1;
}

export const isEven = (a) => {
  return a % 2 === 0;
}

export const isSquare = (a) => {
  return (a === 0) || (a > 0 && (a % Math.sqrt(a)) === 0);
}

export const startsWith = (char, string) => {
  return string.charAt(0) === char;
}

export const containsVowels = (string) => {
  return /[aeiou]/.test(string.toLowerCase());
}

export const isLowerCase = (string) => {
  return string.toLowerCase() === string;
}

export const getNthElement = (index, array) => {
  return array[index % array.length];
}

export const arrayToCSVString = (array) => {
  return array.join();
}

export const csvStringToArray = (string) => {
  return string.split(',');
}

export const addToArray = (item, array) => {
  array.push(item);
}

export const addToArray2 = (item, array) => {
  return array.concat(item);
}

export const removeNthElement = (index, array) => {
  array.splice(index, 1);
}

export const numbersToStrings = (numbers) => {
  return numbers.map((number) => {
    return number.toString();
  });
}

export const uppercaseWordsInArray = (strings) => {
  return strings.map(uppercase);
}

export const reverseWordsInArray = (strings) => {
  return strings.map((word) => {
    return word.split('').reverse().join('');
  });
}

export const onlyEven = (numbers) => {
  return numbers.filter(isEven);
}

export const removeNthElement2 = (index, array) => {
  return array.filter((element, i) => {
    return index !== i;
  });
}

export const elementsStartingWithAVowel = (strings) => {
  return strings.filter((string) => {
    return /^[aeiou]/.test(string.toLowerCase());
  });
}

export const removeSpaces = (string) => {
  return string.split('').filter((character) => {
    return character !== ' ';
  }).join('');
}

export const sumNumbers = (numbers) => {
  return numbers.reduce((acc, number) => {
    return acc + number;
  });
}

export const sortByLastLetter = (strings) => {
  return strings.sort((a, b) => {
    return a.charAt(a.length - 1) > b.charAt(b.length - 1) ? 1 : -1
  });
}

export const createPerson = (name, age) => {
  return {
    name: name,
    age: age,
  };
}

export const getName = (object) => {
  return object.name;
}

export const getProperty = (property, object) => {
  return object[property];
}

export const hasProperty = (property, object) => {
  return object[property] !== undefined;
}

export const isOver65 = (person) => {
  return person.age > 65;
}

export const getAges = (people) => {
  return people.map((person) => {
    return person.age;
  });
}

export const findByName = (name, people) => {
  return people.find((person) => {
    return person.name === name;
  });
}

export const findHondas = (cars) => {
  return cars.filter((car) => {
    return car.manufacturer === 'Honda';
  });
}

export const averageAge = (people) => {
  const totalAge = people.reduce((total, person) => {
    return total + person.age;
  }, 0);
  return totalAge/ people.length;
}

export const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce: (greetName) => {
      return `Hi ${greetName}, my name is ${name} and I am ${age}!`;
    },
  };
}
