console.log("working!!!");
//Q-1 Write the code to access element which is having id as "text"
const elementOne = document.getElementById("text")
elementOne.style.fontSize ="50px"
//Q-2 Write the code to access element which is having tag as "h1"
const elementTwo = document.getElementsByTagName("h1")[0]

elementTwo.style.color =`green`

//Q-3 Write the code to access element which is having class as "box"
const elementThree = document.getElementsByClassName("box")[0]

//Q-4 "<h1>Hello </h1>

// Change the heading from ""Hello"" to ""Hello World"" using DOM functions"
function myChangeText(){
    const elementFour = document.getElementsByTagName("h1")[0]
    elementFour.innerText="Hello Word"
}
// Q-5Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.
function myFlexDi(){
    const elementFive = document.getElementsByClassName("main_car1")[0]
    elementFive.style.flexDirection = `column`
}
function myFlexDi2(){
    const elemnetSix = document.getElementsByClassName("main_car1")[0]
    elemnetSix.style.flexDirection = `row`
}
//What’s the difference between window vs document?
function myDcmnt(){
    const elementSeven = document.getElementsByClassName("winoDocu")[0]
    elementSeven.querySelector("div.winoDocu").append("<h1>Windo</h1>")
    // elementSeven.innerHTML=``
    elementSeven.innerText = `	It is the very first object that is loaded in the browser.`
    elementSeven.style.padding = `20px`
}
//Q-8"<h1>Hello </h1>

// Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"
const elementEight = document.createElement("h1")
elementEight.id = "colorRed"
elementEight.innerText =`Hello`
elementEight.setAttribute("value","created")
elementEight.style.color = "red"
document.querySelector("div.query").appendChild(elementEight)

//Q-9Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"
function replaceText(){
    const elementNine = document.getElementsByTagName("h2")[0]
    elementNine.innerText = `Welcome to Elevation Academy`
    elementNine.style.fontSize = "40px"
}
function showTime() {
    var date = new Date();
    var hr = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var amPm = "AM";
 
    if (hr > 12) {
        hr = hr - 12;
        amPm = "PM";
    }
    if (hr == 0) {
        hr = 12;
        amPm = "AM";
    }
 
    hr = hr < 10 ? "0" + hr : hr;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
 
    let currentTime = hr + ":" + min + ":" + sec + amPm;
 
    document.getElementById("clockDigital").innerHTML = currentTime;
}
setInterval(showTime,1000);
showTime();
//Q-11Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected
var yearsSelect = document.getElementsByClassName("box")[0].Value()
document.innerHTML= yearsSelect

function getOption() {
    year = document.querySelector('#year');
    output = year.options[year.selectedIndex].value;
    document.querySelector('#output').textContent = output;
}

var formText = document.getElementById("fname").value()
if(formText != null && formText != "" && formText != undefined){
    function myErrorSms(){
        let text = document.getElementById("errorms")
        text.innerHTML = `sffsxgvsxh`
    }
    

}
