import React, { useEffect, useState } from 'react';
import input from '../input/2015/input3.text';
import { calculateHappiness, fetchData } from './helpers/HelperFunctions';
import { readFileSync } from 'fs';

export const DayThree = () => {
	const [objectData, setObjectData] = useState(undefined);
	const north = '^';
	const south = 'v';
	const west = '<';
	const east = '>';

	useEffect(async () => {
		const text = await fetchData(input);
		text && setObjectData(text);
	}, []);

	const splittedData = objectData?.split('');

	const santa = {
		posX: 1,
		posY: 1,
	};
	const roboSanta = {
		posX: 1,
		posY: 1,
	};
	const santaMoves = [
		{
			x: 0,
			y: 0,
		},
	];
	const roboMoves = [
		{
			x: 0,
			y: 0,
		},
	];
	const visitedHouses = { '1,1': true };

	for (let i = 0; i < splittedData?.length; i += 2) {
		if (splittedData[i] === '^') {
			santaMoves.push({
				x: 0,
				y: +1,
			});
		}
		if (splittedData[i] === 'v') {
			santaMoves.push({
				x: 0,
				y: -1,
			});
		}
		if (splittedData[i] === '<') {
			santaMoves.push({
				x: -1,
				y: 0,
			});
		}
		if (splittedData[i] === '>') {
			santaMoves.push({
				x: +1,
				y: 0,
			});
		}
	}
	for (let i = 1; i < splittedData?.length; i += 2) {
		if (splittedData[i] === '^') {
			roboMoves.push({
				x: 0,
				y: +1,
			});
		}
		if (splittedData[i] === 'v') {
			roboMoves.push({
				x: 0,
				y: -1,
			});
		}
		if (splittedData[i] === '<') {
			roboMoves.push({
				x: -1,
				y: 0,
			});
		}
		if (splittedData[i] === '>') {
			roboMoves.push({
				x: +1,
				y: 0,
			});
		}
	}

	for (let val of santaMoves) {
		santa.posX += val.x;
		santa.posY += val.y;
		visitedHouses[santa.posX + ',' + santa.posY] = true;
	}
	for (let val of roboMoves) {
		roboSanta.posX += val.x;
		roboSanta.posY += val.y;
		visitedHouses[roboSanta.posX + ',' + roboSanta.posY] = true;
	}

	const sumSanta = Object.keys(visitedHouses).length;
    console.log(sumSanta)

	return <div>DAY THREE</div>;
};
