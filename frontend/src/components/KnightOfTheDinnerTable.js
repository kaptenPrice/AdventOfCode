import React, { Fragment, useEffect, useState } from 'react'
import input from '../input.text'
import { createObjectData, getCombinationWithMaxTotalHappiness } from './helpers/HelperFunctions'

const KnightOfTheDinnerTable = () => {
	// const [data, setData] = useState('')
	const [guests, setGuests] = useState([])
	const [points, setPoints] = useState()
	const [objectData, setObjectData] = useState(null)

	useEffect(() => {
		fetchData()
	}, [])
	const fetchData = async () => {
		try {
			const res = await fetch(input)
			const data = await res.text()
			setObjectData(showRes(data))
		} catch (error) {
			console.log('error, ', error)
		}
	}
	const showRes = (data) => {
		const stringArray = data?.match(/(\b[A-Z].*?\b)|(gain|lose)|([0-9]+)/gm)
		const objectData = createObjectData(stringArray)
		const names = Object.keys(objectData)
		const optimizedCombination = getCombinationWithMaxTotalHappiness(names, objectData)
		setGuests(Object.values(optimizedCombination[1]))
		setPoints(optimizedCombination[0])
		return objectData
	}
	return (
		<div style={styles.KnightsOfTheDinnerTable}>
			<h2> --- Day 13: Knights of the Dinner Table ---</h2>

			<table style={styles.table}>
				<thead>
					<tr style={styles.cell}>
						<td style={styles.cell}>X</td>
						{objectData &&
							Object.keys(objectData).map((column, i) => (
								<td style={styles.cell} key={i}>
									{column}
								</td>
							))}
					</tr>
				</thead>
				<tbody>
					{objectData &&
						Object.entries(objectData).map(([name, neighbors], i) => (
							<tr style={styles.cell} key={name}>
								<td style={styles.cell}>{name}</td>
								{Object.entries(neighbors).map(([, happiness], j) => (
									<Fragment key={j}>
										{i === 0 && j === 0 && <td>X</td>}
										<td style={styles.cell}>{happiness}</td>
										{i === j + 1 && <td>X</td>}
									</Fragment>
								))}
							</tr>
						))}
				</tbody>
			</table>
			<table style={{ ...styles.table, marginTop: 15 }}>
				<thead>
					<tr style={styles.cell}>
						<td style={styles.cell}>Highest Happyness:</td>
						{guests.map((e, i) => (
							<td style={styles.cell}>chair{i + 1}</td>
						))}
					</tr>
				</thead>
				<tbody>
					<tr style={styles.cell}>
						<td style={styles.cell}>{points && ' ' + points}</td>
						{guests.map((e, i) => (
							<td style={styles.cell}>{e}</td>
						))}
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default KnightOfTheDinnerTable

const styles = {
	KnightsOfTheDinnerTable: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',

		flex: 1,
		justifyContent: 'center',
	},
	table: {
		margin: 'auto',
		borderCollapse: 'collapse',
	},
	cell: {
		border: '1px solid #000000',
		padding: 10,
		textAlign: 'center',
	},
}
