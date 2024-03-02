
let slides=document.getElementsByClassName("slide");//it is an array
console.log(slides);
let index=0;

function nextslide(){
	index++;
 if(index<slides.length){
	for(let i=0;i<slides.length;i++){
		slides[i].classList.remove('active');
		slides[i].classList.add('hide');
	}
	slides[index].classList.add('active');
 }else{
	 index=0;
	 slides[slides.length-1].classList.remove('active');
	 slides[slides.length-1].classList.add('add');
	 slides[index].classList.add('active');
 }
}


function prevslide(){
	index--;
 if(index<slides.length&&index>=0){
	 console.log(index);
	 for(let i=slides.length-1;i>0;i--){
		 slides[i].classList.remove('active');
		 slides[i].classList.add('hide');
	 }
	 slides[index].classList.remove('hide');
	slides[index].classList.add('active');
	
}else{
	index=slides.length-1;
	 slides[0].classList.remove('active');
	 slides[0].classList.add('hide');
	 slides[index].classList.add('active');
}
	
	
	
	
	
}