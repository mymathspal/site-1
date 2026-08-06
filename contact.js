const fullnameEl = document.getElementById("fullName");
const emailEl = document.getElementById("email");
const telNumEl = document.getElementById("telNum");
const messageEl = document.getElementById("message");
const submitBtn = document.getElementById("submit-btn");
const formURL = "submit-form.php";

const nameErrorMsg = document.querySelector(".name-err");
const emailErrorMsg = document.querySelector(".email-err");
const telNumErrorMsg = document.querySelector(".tel-err");
const messageErrorMsg = document.querySelector(".message-err");

submitBtn.addEventListener("click", async(e)=>{
    e.preventDefault();
    console.log("clickedddd");
    await submitEnquiry();
})


function validateFullName(){};

function validateEmail(){};

function validateTelNumber(){};

function validateMessage(){};

async function submitEnquiry(){

    // change the values of the assignment later
    // const name = fullnameEl.value ?? "";
    // const email = emailEl.value ?? ""; 
    // const telNum = telNumEl.value ?? "";
    // const message = messageEl.value ?? "";

    const data = {
        name : fullnameEl.value.trim(),
        email : emailEl.value.trim(),
        telNum : telNumEl.value.trim(),
        message : messageEl.value.trim()
    };

    console.log(data)

    const request = {
        method : "POST",
        body : JSON.stringify(data),
        headers: {"Content-Type" : "application/json"}
    };

    try{
        const response = await fetch(formURL, request);

        if(!response.ok){ throw new Error("connection failed"); }

        // const resData = await response.json();
    }
    catch(error){
        console.log("you are missing somethingg...");
        console.log(error);
    }

};
