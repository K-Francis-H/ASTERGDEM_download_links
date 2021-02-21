function createTextDownload(content){
    var a = document.createElement("A");
    a.href = window.URL.createObjectURL(new Blob([content]), {type: "text/plain;charset=utf-8"});
    a.download = document.location.host+"_wget_list.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

//find all links and filter only for zip, zip.xml, and jpg
let as = document.getElementsByTagName("A");
let zips = "";
for(let i=0; i < as.length; i++){
	if(as[i].href.indexOf(".zip") > -1 || as[i].href.indexOf(".jpg") > -1){
		zips += as[i].href + "\n";
	}
}
//then download
createTextDownload(zips);
