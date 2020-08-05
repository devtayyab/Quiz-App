data=[
    {
        question: "Owner of facebook",
        answer:"Mark zackerburg",
        option:[
            "Mark zackerburg",
            "billgates",
            "Quaid-e-Azam"
        ]

    },
    {
        question: "Full form of RAM",
        answer:"Random accsess memory",
        option:[
            "Random accsess memory",
            "read only memory",
            "Floppy disk"
        ]

    },
    {
        question: "Pakistan capital name",
        answer:"Islamabad",
        option:[
            "karachi",
            "lahore",
            "Islamabad"
        ]

    },
    {
        question: "Manchester city of pakistan",
        answer:"faislabad",
        option:[
            "faislabad",
            "karachi",
            "gojra"
        ]

    },
    {
        question: "The full form of IT",
        answer:"information technology",
        option:[
            "information technology",
            "infrastructure",
            "internet"
        ]

    }
]
var score = 0
var s=0
function start(e){
    
    
        var get=document.getElementById("question")
        get.innerHTML=data[e].question
        
        for(var i=0; i<=3; i++){
            
            var option=document.getElementsByClassName("optionselement")
            option[i].innerHTML =data[e].option[i]
            
        }
       
    }


    

    function Next(){
         var get=document.getElementById("question")
         var option=document.getElementsByClassName("optionselement")
         
         
         validate(s)
         s++;
         if(s<5){
             
             removeactive()
             
             start(s)
         }
         else{
             var next= document.getElementById("next")

             var heading=document.createElement("h1")
             var inner =get.innerHTML= "your score is  " + score + "/50";
             var text= document.createTextNode(inner)
             heading.appendChild(text)
             option[0].innerHTML=""
             option[1].innerHTML=""
             option[2].innerHTML=""
             
         }
}

function Active(e){
    removeactive()
    e.classList.add("active")
} 
function removeactive(){
    var active= document.getElementsByClassName("active")
    for (var i=0; active.length; i++){
        active[i].classList.remove("active")
    }

}
function validate(e){
    var validate=document.getElementsByClassName("active")
  if(validate[0].innerHTML== data[e].answer){
    score=score+10;
    console.log(score)
    console.log(validate[0].innerHTML)
    console.log(data[e].answer)
  
}
}
