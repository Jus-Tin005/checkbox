const getCheckbox = document.getElementById('toggle-checkbox'),
          getChecklabel = document.getElementById('toggle-label'),
          getBasic = document.getElementById('basic'),
          getProfessional = document.getElementById("professional"),
          getMaster = document.getElementById("master");


getChecklabel.addEventListener('click',function(){
        // console.log("kooo");
        if(getCheckbox.checked){    // reverse issue here when you click label like keyup

                [getBasic.textContent,getProfessional.textContent,getMaster.textContent]= [10,15,25]; // notice here

        }else {
                getBasic.textContent = 120;
                getProfessional.textContent = 240;
                getMaster.textContent = 360;
        }
});