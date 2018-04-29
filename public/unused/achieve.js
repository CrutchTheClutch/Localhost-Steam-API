//https://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=360740&key=0195B29C05C2C1B6D2ACAAD2EC2C837A&steamid=76561198021486864

const steamID = "76561198021486864";
const steamKey = "0195B29C05C2C1B6D2ACAAD2EC2C837A";
// App ID for Downfall = 360740
let appID = "360740";

let url = `http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=${appID}&key=${steamKey}&steamid=${steamID}`;

const dataFrame = document.getElementById("dataFrame");
//dataFrame.src = url;
//let iframeDocument = dataFrame.contentDocument || dataFrame.contentWindow.document;

let achieveTotal = 20;
let achieveGot = 10;
let achievePercent = ((achieveGot / achieveTotal) * 100).toFixed(2);

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
    }
  };
  xhttp.open("POST", url, true);
  xhttp.send();
}

// Update achieveTitle
function achieveTitleUpdate () {
	const achieveTitle = document.getElementById("achieveTitle");
	achieveTitle.innerHTML = `${achieveGot} of ${achieveTotal} \(${achievePercent}\%\) achievements earned:`;
}

// Update achieveBarProgress Width
function achieveBarWidth () {
	const achieveBarProgress = document.getElementById("achieveBarProgress");
	achieveBarProgress.style.width = `${achievePercent}\%`;
}

// Call functions on page load
window.onload = function () {
	achieveTitleUpdate();
	achieveBarWidth();
	loadDoc();
};