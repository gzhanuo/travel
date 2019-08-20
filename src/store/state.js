let defaultCity = '上海'
try {
	if(localStorage.city) {
		defaultCity = localStorage.city
	}
// eslint-disable-next-line no-empty
} catch (error) {}

export default {
	city: defaultCity
}