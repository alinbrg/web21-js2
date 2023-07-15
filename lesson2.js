// array
const num1 = 0;
const arr2 = [2, 4, 6, [10, 20, 30]];

const arr = [
	10,
	arr2,
	,
	3,
	4,
	num1,
	40,
	"text",
	true,
	undefined,
	null,
	"text 2",
	10,
	arr2,
	,
	3,
	4,
	num1,
	40,
	"text",
	true,
	undefined,
	null,
	"text 2",
	0,
];

// get array elements
const first = arr[num1];
const second = arr[1];

// console.log(arr);
// console.log(first, second);

const el = arr[1][3][1];
// console.log(el);

// object property method

// array property
// length

const arrLength = arr.length;
// console.log(arrLength);

const last = arr[arrLength - 1];
// console.log(last);

// array methods
// at
arr[0] = 100;

const last2 = arr.at(-1);
const first2 = arr.at(0);
// console.log(first2, last2);

// pop
const lastRemoved = arr.pop();
// console.log(lastRemoved);

// push
arr.push(5);

// shift
const firstRemoved = arr.shift();

// console.log(firstRemoved);

// unshift
arr.unshift("first element");

// console.log(arr);

// slice
// splice
// join

const arr5 = ["a", "b", "c"];
// console.log(arr5.join("###"));

const prices = [100, 200, 400, 500, 210];
const sum = 1200;

// object
const course = {
	duration: 20,
	stundents: ["Saba", "niko", "ana"],
	name: "Front End Development",
};

const courses = [
	{
		name: "Front End Development",
		duration: 3,
		stundents: [
			{
				name: "saba",
				surname: "",
				mobile: 321231,
				email: "example@gmail.com",
			},
			{
				name: "saba",
				surname: "",
				mobile: 321231,
				email: "example@gmail.com",
			},
		],
	},
	{
		name: "Manual Testing",
		duration: 3,
		stundents: [
			{
				name: "saba",
				surname: "",
				mobile: 321231,
				email: "example@gmail.com",
			},
			{
				name: "saba",
				surname: "",
				mobile: 321231,
				email: "example@gmail.com",
			},
		],
	},
	{
		name: "It Recruiting",
		duration: 3,
		stundents: [
			{
				name: "saba",
				surname: "",
				mobile: 321231,
				email: "example@gmail.com",
			},
			{
				name: "saba",
				surname: "",
				mobile: 321231,
				email: "example@gmail.com",
			},
		],
	},
];

// get object elements

// console.log(courses[0].stundents[0].name);
const key = "stundents";
const courseName = course.name;
const students = course.stundents;
const firstStudent = course.stundents[0];
// console.log(firstStudent);
const elWithKey = course[key];
// console.log(elWithKey);

// add, delete, edit property
course.duration = 22;
course.lecturer = "alina";
delete course.duration;
// console.log(course);
// copy objects and arrays, spread syntax
let num5 = 10;
let numCopied = num5;

console.log(num5, numCopied);
numCopied = 20;
num5 = 15;
console.log(num5, numCopied);

let newObj = {
	duration: 20,
	stundents: ["Saba", "niko", "ana"],
	name: "Front End Development",
};
let copiedObj = { ...newObj };
// const arr = [...newArr]
// console.log(newObj, copiedObj);
newObj.lecturer = "alina";
// console.log(newObj, copiedObj);

const currencies = [
	{
		code: "AED",
		quantity: 10,
		rateFormated: "7.0167",
		diffFormated: "0.0083",
		rate: 7.0167,
		name: "არაბეთის გაერთიანებული საამიროების დირჰამი",
		diff: -0.0083,
		date: "2023-07-14T17:45:02.704Z",
		validFromDate: "2023-07-15T00:00:00.000Z",
	},
	{
		code: "AMD",
		quantity: 1000,
		rateFormated: "6.6664",
		diffFormated: "0.0074",
		rate: 6.6664,
		name: "სომხური დრამი",
		diff: -0.0074,
		date: "2023-07-14T17:45:02.704Z",
		validFromDate: "2023-07-15T00:00:00.000Z",
	},
	{
		code: "AUD",
		quantity: 1,
		rateFormated: "1.7700",
		diffFormated: "0.0015",
		rate: 1.77,
		name: "ავსტრალიური დოლარი",
		diff: 0.0015,
		date: "2023-07-14T17:45:02.704Z",
		validFromDate: "2023-07-15T00:00:00.000Z",
	},
	{
		code: "USD",
		quantity: 1,
		rateFormated: "2.5771",
		diffFormated: "0.0032",
		rate: 2.5771,
		name: "აშშ დოლარი",
		diff: -0.0032,
		date: "2023-07-14T17:45:02.704Z",
		validFromDate: "2023-07-15T00:00:00.000Z",
	},
];

console.error("error");
console.warn("info");
// console.clear();
console.table(arr); //for object and array
console.log("after console");
