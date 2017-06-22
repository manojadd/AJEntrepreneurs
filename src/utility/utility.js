let ob ={
	convertNames: (names,object)=>{
		let newOb={};
		names = Object.entries(names);
		names.forEach((item)=>{
			newOb[item[1]]=object[item[0]];
		});
		console.log("new object is ",newOb);
		return newOb;
	}
}

module.exports = ob;