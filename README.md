## Early Exercises - Command Line - JS Basics - Jest Testing
- The Command Line Murders
- JavaScript Basics (Numbers, Strings, Booleans, Arrays, and Objects)
- DIY Kata (basics of testing in JavaScript)

---

### The Command Line Murders

	.OOOOOOOOOOOOOOO @@                                   @@ OOOOOOOOOOOOOOOO.
	OOOOOOOOOOOOOOOO @@                                    @@ OOOOOOOOOOOOOOOO
	OOOOOOOOOO'''''' @@                                    @@ ```````OOOOOOOOO
	OOOOO'' aaa@@@@@@@@@@@@@@@@@@@@"""                   """""""""@@aaaa `OOOO
	OOOOO,""""@@@@@@@@@@@@@@""""                                     a@"" OOOA
	OOOOOOOOOoooooo,                                            |OOoooooOOOOOS
	OOOOOOOOOOOOOOOOo,                                          |OOOOOOOOOOOOC
	OOOOOOOOOOOOOOOOOO                                         ,|OOOOOOOOOOOOI
	OOOOOOOOOOOOOOOOOO @          THE                          |OOOOOOOOOOOOOI
	OOOOOOOOOOOOOOOOO'@           COMMAND                      OOOOOOOOOOOOOOb
	OOOOOOOOOOOOOOO'a'            LINE                         |OOOOOOOOOOOOOy
	OOOOOOOOOOOOOO''              MURDERS                      aa`OOOOOOOOOOOP
	OOOOOOOOOOOOOOb,..                                          `@aa``OOOOOOOh
	OOOOOOOOOOOOOOOOOOo                                           `@@@aa OOOOo
	OOOOOOOOOOOOOOOOOOO|                                             @@@ OOOOe
	OOOOOOOOOOOOOOOOOOO@                               aaaaaaa       @@',OOOOn
	OOOOOOOOOOOOOOOOOOO@                        aaa@@@@@@@@""        @@ OOOOOi
	OOOOOOOOOO~~ aaaaaa"a                 aaa@@@@@@@@@@""            @@ OOOOOx
	OOOOOO aaaa@"""""""" ""            @@@@@@@@@@@@""               @@@|`OOOO'
	OOOOOOOo`@@a                  aa@@  @@@@@@@""         a@        @@@@ OOOO9
	OOOOOOO'  `@@a               @@a@@   @@""           a@@   a     |@@@ OOOO3
	`OOOO'       `@    aa@@       aaa"""          @a        a@     a@@@',OOOO'


___There's been a murder in Terminal City, and TCPD needs your help___

Don't use a text editor. The objective of this exercise it to get more comfortable using the command line, and you will find that it is an incredibly powerful tool on its own.

#### Getting set up
There are three directories in this repo - `mystery`, `steps` and `hints`
- `mystery` contains all of the information you will need to go through to solve the mystery
- `steps` contains some instructions to guide you on your way
- `hints` contains some hints for some of the steps - don't use these until you've attempted to solve the step yourself, and be aware that not every step has a hint.

To get started, open a Terminal, go to the location of the files, and start by reading the file `steps/step0`.

---

### JavaScript Basics

![](javascriptBasic/jsBasics.png)

At an abstract level, when you run any computer program, it will use data from some source (user input, data from the internet, data written into the code etc) to tell you something useful about the data (a return value), or possibly to perform an action using that data (a side effect).

In JavaScript this data comes in 5 main **types**:
 - **Numbers**
 - **Strings**
 - **Booleans**
 - **Arrays**
 - **Objects**

Numbers, strings and booleans are known as **primitives**
Arrays and objects are known as **data structures**

There are a few other values to be aware of, including:
- `undefined` - this is a sort of accidental no-value. It's like asking a question and being ignored.
- `null`- this is typically an intentional lack of value - it's like asking a question and being told that there's nothing to report.
- `NaN` - not a number - the result of an invalid arithmetic statement such as dividing by 0.

There are 57 problems in total, so good luck!

---

### DIY Kata

![](diyKata/DIYKata.png)

This repository is aimed at helping you get to grips with the basics of testing in JavaScript. 
Your challenge is to populate the functions and then to write tests for those functions.

#### Requirements for each Kata
1. FizzBuzz
2. Boolean to word
3. Convert a Number to a reversed Array of digits
4. Human Years, Cat Years, Dog Years

#### FizzBuzz
The `fizzBuzz` function should accept a single argument of the `Number` type. When passed a number, it will return `Fizz` if the number is a multiple of 3, `Buzz` if the number is a multiple of 5, `FizzBuzz` if the number is a multiple of 3 _and_ 5, otherwise it should return the number.

#### Boolean to word
When `booleanToWord` is passed `true`, it should return `'Yes'`. When it is passed `false`, it should return `'No'`.

#### Convert a Number to a reversed Array of digits
When `numberToReversedDigits` is passed a number, it should return a _reversed_ array of that number's digits.

#### Human Years, Cat Years, Dog Years
When `humanCatDogYears` is passed a number (representing human years), it should return an array of three numbers. The first number should be the human years passed as an argument, the second element should be the equivalent cat years, and the third element should be the equivalent dog years.
