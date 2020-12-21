var txt="";
function callback(response){
     txt+= "country_code: " + response.country_code + "\n"; 
     txt+= "City: " + response.city + "\n" ;
     txt+= "postal: " + response.postal + "\n";
     txt+= "latitude: " + response.latitude + "\n" ;
      txt+= "longitude: " + response.longitude + "\n" ;
       txt+= "IPv4: " + response.IPv4 + "\n" ;
        txt+= "state: " + response.state + "\n";

      document.getElementById("details").value= txt;
}

$.ajax({
    url:"https://geoip-db.com/jsonp",
    dataType:"jsonp"
})

var txt = "";
txt += " Browser CodeName: " + navigator.appCodeName + "\n";
txt += "Browser Name: " + navigator.appName + "\n" ;
txt += "Browser Version: " + navigator.appVersion + "\n" ;
txt += "Cookies Enabled: " + navigator.cookieEnabled + "\n" ;
txt += "Browser Language: " + navigator.language + "\n";
txt += "Browser Online: " + navigator.onLine + "\n";
txt += "Platform: " + navigator.platform + "\n";
txt += "User-agent header: " + navigator.userAgent + "\n";
txt += "Total width/height: " + screen.width + "*" + screen.height + "\n";
txt += "Available width/height: " + screen.availWidth + "*" + screen.availHeight + "\n";
txt += "Color depth: " + screen.colorDepth + "\n";
txt += "Color resolution: " + screen.pixelDepth + "\n";

document.getElementById("details").value= txt;

function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
document.myform.email.focus();
return true;
}
else
{
alert("Please Enter a Valid Email Address");
document.myform.email.focus();
return false;
}
}