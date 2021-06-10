import React, { useEffect, useState } from 'react';
import incoming from '../input/2015/input5.text';
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
		return () => unSubScribe();
	}, []);

	if (input) {
		cleanData = input?.split('\n');
	}

	const cleanInput = (arr1, arr2) => {
		for (let i = 0; i < arr1?.length; i++) {
			arr2.push(arr1[i].split(''));
		}
		return arr2;
	};
	const alphabetArray = generateCharArray('a', 'z');
	const splitedWords = cleanInput( cleanData, wordArray);
	// console.log("Cleaned array : ",splitedWords);

	// console.log('Blended before check: ', unCheckedArray);
	/*if (wordArray.length) {
		const myLetter = wordArray[0][0];
		const indexInAlphabet = alphabetArray.indexOf(myLetter);
		console.log(indexInAlphabet);
		console.log(alphabetArray[indexInAlphabet + 1]);
	}*/
	const niceWords = [];
	const badWords = [];
	
	if (splitedWords.length) {
		for (let i = 0; i < splitedWords.length; i++) {
			for (let j = 0; j < splitedWords[i].length; j++) {
				//The letter in original word to check
				let letter = splitedWords[i][j];
				//Index of letter in alphabet
				let indexOfLetterInAlphabet = alphabetArray.indexOf(letter);

				if (splitedWords[i][j + 1] !== alphabetArray[indexOfLetterInAlphabet + 1]) {
				
					niceWords.push(splitedWords[[i][j]]);
					console.log(niceWords)
				// } else {
				// 	badWords.push(splitedWords[i][j]);
				}
			}
		}
	}
	// console.log("nice wordS: ",niceWords)
	// console.log(badWords)
	return <div>Day Fiexer</div>;
};

export default DayFive;
