var changethetext= document.querySelector("#fontforcontent");
var knowmore=document.querySelector("#clickbutton");

knowmore.addEventListener("click", function(){
	if(this.textContent==="Know more")
{
changethetext.innerHTML=" <h5>&nbsp&nbsp&nbsp&nbsp&nbsp<strong>Some Cool facts about CAPTAIN AMERICA</strong></h5> <ol><li>HIS FIRST FILM APPEARANCE WAS A 1944 SERIAL</li><li>HIS SHIELD WASN'T ALWAYS A VIBRANIUM FRISBEE</li><li> CHRIS EVANS TURNED DOWN THE MOVIE ROLE THREE TIMES BEFORE ACCEPTING</li>";
this.textContent="Go Back";
}
else
{
	changethetext.innerHTML="Follow CAPTAIN AMERICA as he gets ready for an andventure of a lifetime.His super developer will keep you posted with the latest happenings.CAPTAIN AMERICA needs your support to save the Earth so feel free to support and follow him on GitHub."
    this.textContent="Know more"
}

});