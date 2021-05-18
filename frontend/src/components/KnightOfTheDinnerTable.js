import React, { useEffect, useState } from 'react'
import input from '../input.text'

const KnightOfTheDinnerTable = () => {
	const [data, setData] = useState('')
	// console.log(input.toString())

	useEffect(() => {
		fetchData()
	}, [data])
  const stringArray = data.match(/(\b[A-Z].*?\b)|(gain|lose)|([0-9]+)/gm)


	const fetchData = async () => {
		try {
			const res = await fetch(input)
			const data = await res.text()
			setData(data)
		} catch (error) {
			console.log('error, ', error)
		}
	}

	console.log(stringArray)
	const objectData = {}
	if (stringArray?.length) {
		for (let i = 0; i < stringArray.length; i += 4) {
			//Creating every guest
			const hapinessValue = (stringArray[i + 1] === 'lose' ? -1 : 1) * stringArray[i + 2]
			//Creating every guests neighbors and value of happiness
			objectData[stringArray[i]] = { ...objectData[stringArray[i]], [stringArray[i + 3]]: hapinessValue }
		}
		console.log(objectData)
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
			<div>{Object.keys(objectData).map((e)=><p>{e}</p>)}</div>
		</div>
	)
}

export default KnightOfTheDinnerTable
