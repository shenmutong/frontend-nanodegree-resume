/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$("#main").append("Shen Mutong")
//var awesomeThoughts = "I am shenmutong and I am AWESOME!"
//console.log(awesomeThoughts)
//var email = "shenmutong@hotmail.com"
//var newEmail = email.replace("hotmail","gmail")
//console.log(email)
//console.log(newEmail)
//var name = 
//var headerRole = "software engineer"

var bio =
    {
       "name" :"shen.mutong",
       "role" : "software engineer",
       "contacts" : {
           "mobile":"13625298662",
           "email":"shenmutong@hotmail.com",
           "github": "shenmutong",
           "location":"China"
       },
        "email" : "shenmutong@hotmail.com",
        "pictureURL": "images/me.jpg",
        "welcomeMessage" : "Hello World",
        "skills" : ["C#","Cc","C","python","DeepMind","Operation System","linux"] 
    }
var work = {
    "jobs" = [
        {
            "employer" : "weimu.ltd",
            "title" : "software engineer",
            "location":"Suzhou,China",
            "dates": "2014/08/01 - now",
        },
        {
            "employer" : "Proassist.ltd",
            "title" : "software engineer",
            "location":"Suzhou.China,osaka.Japan",
            "dates": "2013/07/01 - 2014/08/01",
        }
    ]
};

//var work= {};
//work["position"] = "software engineer";
//work["employer"] = "Weimu.Ltd";
//work["years"] = "3 years";
//work["city"] = "Suzhou";

var education =
    {
        "schools":[
            {
                "name": "Tianjin chengjian University",
                "city":"Suzhou,China",
                "degree":"BA",
                "major":["EE"]
            }
            ],
        "onlineCourses" :[
            {
            "title" : "",
            "school" :"",
            "dates" : "",
            "url":""
            }
        ]
}
var projects ={
    "projects" :[
        {
            "title" : "",
            "dates" : "",
            "describes" : "",
            "images" : ""
        }
    ]
}

/* older works
var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedContactGeneric = HTMLcontactGeneric.replace("%data%",bio.contactInformation)

var formattedEmail = HTMLemail.replace("%data%",bio.email);
var formattedPicUrl = HTMLbioPic.replace("%data%",bio.pictureURL);
var formattedWelMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
var formattedSkills = HTMLskills.replace("%data%",bio.skills)

$("#main").append(work["position"]);
$("#main").append(education.name);
$("#header").prepend(formattedSkills);


$("#header").prepend(formattedEmail);
//("#main").prepend(formattedEmail);
$//("#main").append(bio.WelMsg)
//$("#main").prepend(bio.PicUrl)
//$("#main").prepend(bio.email)
//$("#main").prepend(formattedContactGeneric);
$("#header").prepend(formattedPicUrl);
$("#header").prepend(formattedWelMsg);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
*/