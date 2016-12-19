
function getInformation(identify){

}

getInformation={
	getName:function(){
		return document.getElementsByClassName('ProfileHeader-name')[0].innerHTML;
	},
	getHeadline:function(){
		return document.getElementsByClassName('ProfileHeader-headline')[0].innerHTML;
	},
	getLocation:function(){
		return document.getElementsByClassName('ProfileHeader-detailValue')[0].innerHTML;
	},
	getProfession:function(){
		return document.getElementsByClassName('ProfileHeader-detailValue')[1].innerHTML+
		document.getElementsByClassName('ProfileHeader-detailValue')[2].innerHTML;
	},
	getProfessionExperience:function(){
		return document.getElementsByClassName('ProfileHeader-field')[0].innerHTML;
	},
	getDescription:function(){
		return document.getElementsByClassName('ProfileHeader-detailValue')[3].innerHTML;
	} 

}



















