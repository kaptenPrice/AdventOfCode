import React, { useEffect, useState } from 'react'
import input from '../input.text'
import { createObjectData, getCombinationWithMaxTotalHappiness } from './helpers/HelperFunctions'

const KnightOfTheDinnerTable = () => {
	const [data, setData] = useState('')
	const [guests, setGuests] = useState([])
	const [points, setPoints] = useState()

	useEffect(() => {
		fetchData()
	}, [data])
	useEffect(() => {
		data && showRes()
	}, [data])

	const fetchData = async () => {
		try {
			const res = await fetch(input)
			const data = await res.text()
			setData(data)
		} catch (error) {
			console.log('error, ', error)
		}
	}
	const showRes = () => {
		const stringArray = data?.match(/(\b[A-Z].*?\b)|(gain|lose)|([0-9]+)/gm)
		const objectData = createObjectData(stringArray)
		const names = Object.keys(objectData)
		const optimizedCombination = getCombinationWithMaxTotalHappiness(names, objectData)
		setGuests(Object.values(optimizedCombination[1]))
		setPoints(optimizedCombination[0])
	}

	return (
		<div style={styleBody}>
			<h2> --- Day 13: Knights of the Dinner Table ---</h2>
			<div>
				<h3>
					Highest Happyness:
					{points &&' ' + points}
					<br />
				</h3>

				<h3>Best combination:</h3>
				<h4>
					{guests.map((element) => (
						<p>{element}</p>
					))}
				</h4>
			</div>
		</div>
	)
}

export default KnightOfTheDinnerTable

const styleBody = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
}
