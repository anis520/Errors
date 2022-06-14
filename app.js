const student_form=document.getElementById('student_form')
const alert= document.querySelector('.msg')
const body=document.querySelector('body')
const mdiv= document.querySelector('.mdiv')
const goro= document.querySelector('.goro')
const emailField=document.querySelector('input[name="email"]')
const cellField=document.querySelector('input[name="cell"]')
const email_validation = document.getElementById('email_validation')
const cell_validation = document.getElementById('cell_validation')


student_form.onsubmit=(a)=>{
 
    
    a.preventDefault()


goro.style.display='block'
mdiv.style.display='none'
body.style.backgroundColor='rgba(110, 120, 120, 0.334)'
alert.style.display='none'


 
    

setTimeout(() => {
    const  form_data = new FormData(a.target);
    
    const {name,email,cell,username,gender} = Object.fromEntries(form_data.entries())

           
if(!name || !email || !cell || !username){


    alert.innerHTML=setAlert('All Fields are required')
}else{
    alert.innerHTML=setAlert('Data Stable','success')
    a.target.reset()
}
   
    

    email_validation.textContent=''
    email_validation.className=''
    cell_validation.textContent=''
    cell_validation.className =''
    
    alert.style.display='block'

body.style.backgroundColor='white'
     goro.style.display='none'
     mdiv.style.display='block'

}, 3000);

        



}



emailField.onkeyup=(a)=>{

    let email = a.target.value
  

   if(emailCheck(email)){
    email_validation.textContent='Email is okay now'
    email_validation.className='text-success'
   }else{
    email_validation.textContent='invalied email'
    email_validation.className='text-danger'
   }

}

cellField.onkeyup=(a)=>{

        let cell=a.target.value
    
        if(cellCheck(cell)){
            cell_validation.textContent='Cell is okey now'
            cell_validation.className ='text-success'

        }else{
            cell_validation.textContent='Invalied cell number'
            cell_validation.className ='text-danger'

        }

}