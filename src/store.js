const STORE_KEY = 'todos-vuejs';

export default {
	fetch () {
		return  JSON.parse(window.localStorage.getItem(STORE_KEY) || []);
		
	},
	save (item) {
		window.localStorage.setItem(STORE_KEY,JSON.stringify(item));
	
	}
}
