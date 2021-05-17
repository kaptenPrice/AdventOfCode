import React, { useEffect, useState } from 'react'

const KnightOfTheDinnerTable = () => {
	const [data, setData] = useState('')

	useEffect(() => {
		fetchData()
		createObject()
	}, [data])

	const fetchData = async () => {
		try {
			const res = await fetch('http://localhost:3008/')
			const data = await res.json()
			setData(data.inputData)
		} catch (error) {
			console.log('error, ', error)
		}
	}
	const createObject = () => {
		const stringArray = data.match(/(\b[A-Z].*?\b)|(gain|lose)|([0-9]+)/gm)
		const objectData = {}
		if (stringArray?.length) {
			for (let i = 0; i < stringArray.length; i += 4) {
				//Creating every person
				objectData[stringArray[i]] = { ...objectData[stringArray[i]] }
				//Creating every persons preferences
				objectData[stringArray[i]][stringArray[i + 3]] =
					(stringArray[i + 1] === 'lose' ? -1 : 1) * stringArray[i + 2]
			}
			console.log(objectData)
		}
	}

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<h2> --- Day 13: Knights of the Dinner Table ---</h2>
			<div></div>
		</div>
	)
}

export default KnightOfTheDinnerTable
