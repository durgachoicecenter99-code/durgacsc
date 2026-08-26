// =======================
// Automatic Slider
// =======================

const slides = [
    "banner1.jfif",
    "banner2.jfif",
    "banner3.jfif",
    "banner4.jfif"
];

let current = 0;

function autoSlider() {

    current++;

    if(current >= slides.length){
        current = 0;
    }

    document.getElementById("slide").src = slides[current];

}

setInterval(autoSlider,3000);


// =======================
// Live Search
// =======================

function searchService(){

    let input = document.getElementById("search").value.toUpperCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(function(card){

        let name = card.getAttribute("data-name").toUpperCase();

        if(name.indexOf(input)>-1){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

}


// =======================
// Card Click
// =======================

const serviceLinks={

"CG Shram Card":"https://shramevjayate.cg.gov.in/shramik",

"PAN Card Service":"https://www.onlineservices.nsdl.com/",

"Aadhaar Service":"https://myaadhaar.uidai.gov.in/",

"APAAR ID":"https://apaar.education.gov.in/",

"Voter ID":"https://voters.eci.gov.in/",

"CG Ration Card":"https://khadya.cg.nic.in/",

"Ayushman Bharat":"https://beneficiary.nha.gov.in/",

"CG Rojgar Panjiyan":"https://exchange.cg.nic.in/",
"Driving Licence":"https://parivahan.gov.in/",
"RC Service":"https://parivahan.gov.in/",
"Vehicle Service":"https://parivahan.gov.in/",
"HSRP":"https://cgtransport.gov.in/#",
"आय/जाति/निवास":"https://sewasetu.cgstate.gov.in/home?lang=hi",
"Birth&Death":"https://dc.crsorgi.gov.in/crs/Auth/general-public",
"EPFO Service":"https://unifiedportal-emp.epfindia.gov.in/epfo/",
"Udyam Aadhar":"https://udyamregistration.gov.in/UdyamRegistration.aspx",
"PM Kisan Samman Nidhi":"https://pmkisan.gov.in/",
"PM Fasal Bima Yojana":"https://pmfby.gov.in/",
"PM Awas Yojana":"https://pmayg.dord.gov.in/netiayHome/Home.aspx",
"E-sharam card":"https://eshram.gov.in/",
"Hemchand yadav":"https://www.durguniversity.ac.in/",
"Durg Science Clg":"https://www.govtsciencecollegedurg.ac.in/",
"CGBSE":"https://cgbse.nic.in/",
"CGVyapam":"https://vyapamprofile.cgstate.gov.in/online/",
"CG Police":"https://citizen.cgpolice.gov.in/citizen/login.htm?lang=en&stov=9X6T-S8WW-G731-3M0P-VV6R-DUBI-17R3-JRKU#",
};


document.querySelectorAll(".card").forEach(function(card){

card.addEventListener("click",function(){

let service=this.getAttribute("data-name");

if(serviceLinks[service]){

window.open(serviceLinks[service],"_blank");

}

});

});


// =======================
// Hover Animation
// =======================

document.querySelectorAll(".card").forEach(function(card){

card.addEventListener("mouseenter",function(){

this.style.transform="translateY(-8px) scale(1.02)";

});

card.addEventListener("mouseleave",function(){

this.style.transform="translateY(0px)";

});

});
