const Id = (e)=> document.getElementById(e)

document.addEventListener("DOMContentLoaded", function() {


    
    const form = Id("requestForm");
    const emailInput = Id("email");

    const lists = ["firstname","lastname","email","target_pest","phone","comfirm_phone","date_of_service","time_of_service","location","property_type","compound","social_media"];

    form.addEventListener("submit", function(event) {
    event.preventDefault();
      let isValid = true;

      lists.forEach((list)=>{

if(list === "email"){
       if (!isValidEmail(emailInput.value.trim())) {
        Id("emailErrorNotCorrect").classList.remove("hidden");
        isValid = false;
      } else {
        Id("emailErrorNotCorrect").classList.add("hidden");
      }
}

   if (Id(`${list}`).value.trim() === "") {
       Id(`${list}Error`).classList.remove("hidden");
       Id(`${list}`).classList.add('border-red');
       Id(`${list}`).classList.remove('border-neutral-400');
        isValid = false;
      } else {
       Id(`${list}Error`).classList.add("hidden");
       Id(`${list}`).classList.remove('border-red');
       Id(`${list}`).classList.add('border-neutral-400');
      }

      });

      if (!isValid) {
        event.preventDefault(); // Prevent form submission if there are errors
      }else {
const firstname = Id("firstname").value,
lastname = Id("lastname").value,
email = Id("email").value,
location =  Id("location").value,
target_pest = Id("target_pest").value,
property_type = Id("property_type").value,
compound = Id("compound").value,
phone = Id("phone").value,
date_needed = Id("date_of_service").value,
time_needed = Id("time_of_service").value;
added_info = Id("additional_details").value;


/*
Hello Dews and Petals. This is Ogunbiyi Joshua from Lagos. I just requested for an estimate on your website. 
I have provided the following information: Email - primedrive55@gmail.com, 
Phone No - 09161940239, Precise Location -  Victoria Island, Target Pest - Rats and coackroaches, 
Property Description - 3 Bedrooms 1 Living Room, Extra Space - Laundry, Compound - Yes, PFC - , Added Info - Nope. 
Kindly send the estimate via email when it's ready. Thank you!
*/

     const whatsappURL = `https://api.whatsapp.com/send?phone=2348123916766&text=Hi Ecoshield fumigation service. This is ${firstname} ${lastname} from ${location}. I just requested for an estimate on your website. I have provided the following information: Email: ${email}, Phone No: ${phone},Target Pest: ${target_pest},Property Description: ${property_type},Compound: ${compound},${(added_info) !=="" ? "Added Info: " + added_info  : ""}Kindly send the estimate via email when it's ready. Thank you!`;

      window.location.href = whatsappURL;

      }
    });
  
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });
  