export const createObjectData = (stringArray) => {
	const objectData = {}

	if (stringArray?.length) {
		for (let i = 0; i < stringArray.length; i += 4) {
			//Creating every guest
			const hapinessValue = (stringArray[i + 1] === 'lose' ? -1 : 1) * stringArray[i + 2]
			//Creating every guests neighbors and value of happiness
			objectData[stringArray[i]] = {
				...objectData[stringArray[i]],
				[stringArray[i + 3]]: hapinessValue,
			}
		}
	}
	return objectData
}

/**
 * Calculates the total happiness of the received combination( counting left and right neighbor)
 */
export const calculateHappiness = (combination, happinessObject) => {
	let result = 0
	for (let i = 0; i < combination.length; i++) {
		const leftNeighborIdx = i === 0 ? combination.length - 1 : i - 1
		const rightNeighborIdx = i === combination.length - 1 ? 0 : i + 1
		result +=
			happinessObject[combination[i]][combination[leftNeighborIdx]] +
			happinessObject[combination[i]][combination[rightNeighborIdx]]
	}
	return result
}
//Optimized permutation: Will calculate the hapiness and store only the best
export const getCombinationWithMaxTotalHappiness = (names, happinessObject) => {
	if (names.length < 2) {
		return names
	} else if (names.length === 2) {
		return [
			[names[0], names[1]],
			[names[1], names[0]],
		]
	} else {
		let ableToCalcTotalHappiness = false
		let betterCombo = []
		let bestTotalHappinness = 0
		const result = []
		for (let i = 0; i < names.length; i++) {
			//Pick current
			const prefix = [names[i]]
			//the rest
			const suffix = [...names]
			//Remove current
			suffix.splice(i, 1)
			//Recursive call with the rest and the original object(irrelevant right now)
			const suffixes = getCombinationWithMaxTotalHappiness(suffix, happinessObject)
			//loop through all combinations of suffixes (without prefix) and the prefix to all
			suffixes.map((suffixVariant) => {
				const currentCombination = prefix.concat(suffixVariant)

				//If the length of the current combinations is equal to the original arrayLength (all names)
				if (Object.keys(happinessObject).length === currentCombination.length) {
					ableToCalcTotalHappiness = true

					//Calculate hapiness and replace the current best combo if the current combinations happiness is higher
					const currentHappyness = calculateHappiness(currentCombination, happinessObject)
					if (currentHappyness > bestTotalHappinness) {
						betterCombo = currentCombination
						bestTotalHappinness = currentHappyness
					}
				} else {
					//If the length of the current combinations is less than the original arrayLength
					result.push(currentCombination)
				}
			})
		}
		/**
		 * If the length of the current combinations is equal to the original arrayLength, will return
		 * the combo with highest totalhappiness, else will return all possible combinations (without the original prefix)
		 * */
		return ableToCalcTotalHappiness ? [bestTotalHappinness, betterCombo] : result
	}
}
