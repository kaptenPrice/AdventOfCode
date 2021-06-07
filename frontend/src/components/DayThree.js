import React from 'react'
import input from '../input/2015/input3.text'

export const DayThree = () => {
	const [objectData, setObjectData] = useState(undefined)

	useEffect(() => {
		fetchData()
	}, [])
    
	const fetchData = async () => {
		try {
			const res = await (await fetch(input)).text()
			setObjectData(res)
		} catch (error) {
			console.log('error, ', error)
		}
	}
	return <div></div>
}
