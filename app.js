// var, concat, typeof, console

// 1.შექმენით html და app.js ფაილები. შემოტანეთ app.js html-ში.
// 2. app.js ფაილში შექმენით ცვლადები და მიანიჭეთ მარტივი ტიპები (Primitive types). გამოიყენეთ ყველა მარტივი ტიპი რაც განვიხილეთ.
const num = 20;
const str = "text";
const bool = true;
const und = undefined;
const nl = null;

// console.log(num, str, bool, und, nl);

// 3. დამატებით შექმენით ცვლადები myName, myHobby,  yearOfBirth, currentYear და მიანიჭეთ თქვენი სახელი, ჰობი, დაბადების წელი, მიმდინარე წელი.
const myName = "alina";
const myHobby = "coding";
const yearOfBirth = 1996;
const currentYear = 2023;

// 4. #3 დავალებაში შექმნილი ცვლადებისგან შექმენით წინადადება: My name is (აქ myName ცვლადი), I am (აქ გამოთვალეთ ასაკი currentYear  და yearOfBirth -   ცვლადების გამოყენებით) old and my hobby is (აქ myHobby ცვლადი), გამოიყენეთ წინადადების აწყობის ლექციაზე განხილული ორივე სინტაქსი.
// მუშაობის პროცესში, ტესტირებისთვის გამოიყენეთ console.log();

const text1 = `My name is ${myName}, I am  ${
	currentYear - yearOfBirth
} old and my hobby is ${myHobby}`;

const text2 =
	"My name is " +
	myName +
	", I am  " +
	(currentYear - yearOfBirth) +
	" old and my hobby is " +
	myHobby;

// console.log(text1);
// console.log(text2);
