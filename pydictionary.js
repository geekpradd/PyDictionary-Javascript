var links={
	'meaning': 'http://pydictionary-geekpradd.rhcloud.com/api/meaning/',
	'synonym': 'http://pydictionary-geekpradd.rhcloud.com/api/synonym/',
	'antonym': 'http://pydictionary-geekpradd.rhcloud.com/api/antonym/',
	'translate': 'http://pydictionary-geekpradd.rhcloud.com/api/translate/'
}
var getMeaning = function(word){
	totalLink = links.meaning + word;
	var r = new XMLHttpRequest();
	r.open("GET",totalLink, false);
	r.send();
	var data;
	if (r.status===200){
		var resp= JSON.parse(r.responseText);
		data=resp;
	}
	else{
		data='Error while running AJAX';
	}
	return data
	
}
var getSynonym = function(word){
	totalLink = links.synonym + word;
	var r = new XMLHttpRequest();
	r.open("GET",totalLink, false);
	r.send();
	var data;
	if (r.status===200){
		var resp= JSON.parse(r.responseText);
		data=resp;
	}
	else{
		data='Error while running AJAX';
	}
	return data
	
}
var getAntonym = function(word){
	totalLink = links.antonym + word;
	var r = new XMLHttpRequest();
	r.open("GET",totalLink, false);
	r.send();
	var data;
	if (r.status===200){
		var resp= JSON.parse(r.responseText);
		data=resp;
	}
	else{
		data='Error while running AJAX';
	}
	return data	
}
var getTranslation = function(word,code){
	totalLink = links.translate + code + '/' + word;
	var r = new XMLHttpRequest();
	r.open("GET",totalLink, false);
	r.send();
	var data;
	if (r.status===200){
		var resp= r.responseText;
		data=resp;
	}
	else{
		data='Error while running AJAX';
	}
	return data
	
}
var PyDictionary = function(){
	this.meaning = getMeaning;
	this.synonym = getSynonym;
	this.antonym = getAntonym;
	this.translate = getTranslation;
}
