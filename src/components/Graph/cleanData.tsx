import countries from './map/countries.json';
import carlcox from './map/carlcox.json';

export function formatCoordinates() {
	// go through the carlcox countryies
	const input = carlcox.country
	let data = []
	for(let i = 0; i< input.length; i++){
		// find input[i] in countries.json
		if(input[i] === 'UK') {
			input[i] = 'GB'
		}
		const gps = countries.find( (d: any) => d.country === input[i])
		if(typeof gps === 'object'){
			data.push({'name': i, 'coordinates': [+gps.coordinates[0],+gps.coordinates[1]]  })
		}
	}
	// console.log('hi',data)
	return data
}
