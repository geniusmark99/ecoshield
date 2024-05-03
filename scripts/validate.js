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
property_type = Id("property_type"),
compound = Id("compound").value,
phone = Id("phone").value,
date_needed = Id("date_of_service").value,
time_needed = Id("time_of_service").value;




        const whatsappURL = `https://api.whatsapp.com/send?phone=2348123916766&text=Hi Ecoshiel fumigation service, My firstname is :${firstname} my %0Alastname is:${lastname}%0AEmail:${email} , I need you service at ${location}`;

      window.location.href = whatsappURL;

      }
    });
  
    function isValidEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }
  });
  