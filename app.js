const student_form=document.getElementById('student_form')
const alert= document.querySelector('.msg')


student_form.onsubmit=(a)=>{
 
    
    a.preventDefault()

        
const  form_data = new FormData(a.target);

const {name,email,cell,uname,gender} = Object.fromEntries(form_data.entries())



 
//      !name || !email || !cell || !uname ? alert.innerHTML=setAlert('All fields are required','success') : alert.innerHTML=setAlert('Data Stable','success');


 


if( !name || !email || !cell || !uname ){
 
       alert.innerHTML=setAlert('All field are requerd')


}else{

      alert.innerHTML=setAlert('Data Stable','success')
}




}