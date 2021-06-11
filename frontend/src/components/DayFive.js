import React, { useEffect, useState } from 'react';
import incoming from '../input/2015/input5.txt';
import { fetchData, generateCharArray } from './helpers/HelperFunctions';

const DayFive = () => {
	const [input, setInput] = useState(undefined);
	const wordArray = [];
	let cleanData = [];

	useEffect(() => {
		const unSubScribe = async () => {
			const text = await fetchData(incoming);
			setInput(text);
		};
		unSubScribe();
	}, []);

	// console.log(input);
	if (input) {
		cleanData = input?.split('\r\n');
		// console.log(cleanData);
	}

	const splitInput = (arr1, arr2) => {
		for (let i = 0; i < arr1?.length; i++) {
			arr2.push(arr1[i].split(''));
		}
		return arr2;
	};

	const alphabetArray = generateCharArray('a', 'z');
	const splittedWords = splitInput(cleanData, wordArray);

	const niceWords = [];
	const badWords = [];

	if (splittedWords.length) {
		for (let i = 0; i < splittedWords.length; i++) {
			let isItNice = true;
			for (let j = 0; j < splittedWords[i].length; j++) {
				//The letter in original word to check
				let letter = splittedWords[i][j];
				//Index of letter in alphabet
				let indexOfLetterInAlphabet = alphabetArray.indexOf(letter);

				if (splittedWords[i][j + 1] === alphabetArray[indexOfLetterInAlphabet + 1]) {
					isItNice = false;
					break;
				}
			}
			isItNice && niceWords.push(splittedWords[i]);
		}
	}
	//if (!splittedWords[i].includes(/ab| cd| pq | xy/gm)) {}


	const joinInput = (arr1) => {
		const tempArr = [];
		for (let i = 0; i < arr1?.length; i++) {
			tempArr.push(arr1[i].join(''));
		}
		return tempArr;
	};

	const niceWordsJoined = joinInput(niceWords);
	//  console.log(niceWords);
	let vowels=["a","e","i","o","u"]
	for (const char of vowels) {
		const charCode=char.charCodeAt(char)
		console.log("CharCode of :",char," is :", charCode)
		
	}
	for (let i = 0; i < niceWordsJoined.length; i++) {
		if(niceWordsJoined[i].includes("a"||"e"||"i"||"o"||"u")) {
			// console.log("niceWords with vowels: ",niceWordsJoined[i])
		}

	}


	return <div>Day Fiexer</div>;
};

export default DayFive;
