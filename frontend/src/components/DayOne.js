import React, { useEffect, useState } from 'react'
import input from '../input/2015/input1.txt'

const DayOne = () => {
	const [objectData, setObjectData] = useState(undefined)
	const [plusOne] = useState('(')
	const [minusOne] = useState(')')

	useEffect(() => {
		fetchData()
	}, [])

	useEffect(() => {
		// counter()
		countNumbers()
	}, [objectData])

	const fetchData = async () => {
		try {
			const res = await (await fetch(input)).text()
			setObjectData(res)
		} catch (error) {
			console.log('error, ', error)
		}
	}
	const counter = () => {
		let res = 0
		objectData?.split('').map((letter) => {
			res += letter === '(' ? 1 : -1
		})

		console.log(res)
	}
	// console.log(objectData?.split(''))

	/*	let res = 0
    for (const value of objectData) {
		value === plusOne ? res++ : (res -= 1)
	}
    console.log(res)*/

	const countNumbers = () => {
		let result = 0
		const tempArr = objectData?.split('')
	
		if (tempArr?.length) {
			for (let i = 0; i < tempArr.length; i++) {
				if (tempArr[i] === "(") {
					result++
				}
				if (tempArr[i] === ")") {
					result += -1
				}
				if (result === -1 ) {
					console.log('Plats: ', i)
                    break;
				}
			}
		}
	}

	return <div style={{ display: 'flex', justifyContent: 'center' }}>Day one</div>
}

export default DayOne
