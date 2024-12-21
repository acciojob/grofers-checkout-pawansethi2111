const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let monthly = document.getElementByClassName('monthly');

let prices = document.querySelectorAll('.price');
let sum = 0
const getSum = () => {
//Add your code here
	for(let t of prices){
		sum+= +t;
	}

 console.log(sum);
};

getSumBtn.addEventListener("click", getSum);

monthly.innerText = sum;