import * as f from  '../functions';
export let si;
export let st;

let bg_num = 0;

export function createField(){
	f.cl_Int(si);
	let m2bg = f.g(".field_container");
	for(let i = 0; i < 40; i++){
		let x = f.new_element("div", m2bg[0], "", ["field", "visible"], []);
	}
	hideField();
}


export function hideField(){
	f.cl_Int(si);
	si = setInterval(()=>{
		let visibleField = f.g(".visible");
		let start = 0;
		f.change_element(visibleField, start, ["add_class", "hidden_field"], ["remove_class", "visible"]);
		f.change_element(visibleField, visibleField.length - 1, ["add_class", "hidden_field"], ["remove_class", "visible"]);
		if(visibleField.length <= 0){
			f.cl_Int(si);
			st = setTimeout(()=>{
				showFields();
			}, 5000);
		}
	},40);
}

export function showFields(){
	f.cl_Int(si);
	let field = f.g(".field");
	for(let i = 0; i < 40; i++){
		f.change_element(field, i, ["add_class", "visible"], ["remove_class", "hidden_field"]);
	}
	changePhoto();
}

export function changePhoto(){
	f.cl_Int(si);
	let photoArr = ["../../../images/dc_logo.png","../../../images/dc1.png", "../../../images/dc2.png", "../../../images/dc3.png"];
	bg_num += 1;
	if(bg_num >= photoArr.length){
		bg_num = 0;
	}
	let bg_photo = f.g(".bg_photo");
	bg_photo[0].src = photoArr[bg_num];
	
	hideField();
}
