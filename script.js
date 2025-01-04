const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let monthly = document.getElementByClassName('monthly');

let prices = document.querySelectorAll('.price');
let sum = 0
const getSum = () => {
//Add your code here
	// for(let t of prices){
	// 	sum+= +t.innerHTML;
	// }

 monthly.innerHTML = 5;
	console.log('ok')
};

getSumBtn.addEventListener("click", getSum);

monthly.innerText = sum;