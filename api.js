const locations = [
]

// export default () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       return resolve(locations)
//     }, 3000)
//   })
// }

export default () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			let response = fetch('https://appear.pl/pins.json')
			.then(res => res.json())
			.catch(console.log)
			return resolve(response)
		}, 3000);
	})
}
