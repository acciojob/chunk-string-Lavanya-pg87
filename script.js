function stringChop(str, size) {
  // your code here
	let arr = [];
	let i=0;
	while(i< str.length){
		let x = str.slice(i,i+size);
		arr.push(x);
		i = i + size;
	}
return arr;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
