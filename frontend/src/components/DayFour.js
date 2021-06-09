import React, { useState } from 'react';
import { MD5 } from 'crypto-js';

const DayFour = () => {
	 const secretKey = 'iwrupvqb';
//	const secretKey = 'abcdef';
	const zeroes = '000000';
	//  let counter = 609043;
	let counter = 0;
	let solution = "";
	//  MD5(secretKey + counter)
	// 	.toString()
	// 	.startsWith(zeroes);
	//.substring(0, 5);

	while (!solution.startsWith(zeroes)) {
		//while (solution.toString().substring(0, 5) !== zeroes) {
		solution = MD5(secretKey + counter).toString();

		if (solution.startsWith(zeroes)) {
			console.log(counter);
			return solution+counter
		}
		counter++;
	 }

	//console.log(counter)

	return <div>Day Four</div>;
};

export default DayFour;
