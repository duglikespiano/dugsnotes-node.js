const submitButton = document.querySelector('.submit-button');
const allCookies = document.cookie;

console.log(allCookies.includes('validation-result'));

submitButton.addEventListener('submit', (event) => {
	event.preventDefault();
});
