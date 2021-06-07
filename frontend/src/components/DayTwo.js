import React, { useEffect, useState } from 'react'
import input from '../input/2015/input2.text'

const DayTwo = () => {
	const [objectData, setObjectData] = useState(undefined)

	useEffect(() => {
		fetchData()
	}, [])
	useEffect(() => {
		const [sum, ribbonSum] = countPaperAmount()
		console.log('sum: ', sum, ' ribbon: ', ribbonSum)
	}, [objectData])

	const fetchData = async () => {
		try {
			const res = await (await fetch(input)).text()
			setObjectData(res)
		} catch (error) {
			console.log('error, ', error)
		}
	}
	const areaCounter = ([x, y, z]) => {
		const volume = 2 * x * y + 2 * y * z + 2 * z * x + x * y
		return volume
	}
	const ribbonCounter = ([x, y, z]) => {
		const ribbonAmount = 2 * x + 2 * y + x * y * z
		return ribbonAmount
	}

	const countPaperAmount = () => {
		const cleanData = objectData?.split(/\r\n|\n|\r|x/gm)
		let tempArr = []
		let sum = 0
		let ribbonSum = 0
		if (cleanData?.length) {
			for (let i = 0; i < cleanData.length; i += 3) {
				tempArr.push(
					[
						parseInt(cleanData[i]),
						parseInt(cleanData[i + 1]),
						parseInt(cleanData[i + 2]),
					].sort((a, b) => a - b)
				)
			}
			for (let i = 0; i < tempArr.length; i++) {
				console.log(tempArr[i])
				sum += areaCounter(tempArr[i])
				ribbonSum += ribbonCounter(tempArr[i])
			}
		}
		return [sum, ribbonSum]
	}

	return <div>Hej</div>
}

export default DayTwo
