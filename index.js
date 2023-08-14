 document.getElementById('submit-btn').addEventListener('click',function(){
    const userEmail =document.getElementById('user-email')
    console.log(userEmail.value);
    const password = document.getElementById('password')
    if(userEmail.value=== 'sohan@gmail.com' && password.value==='sohan'){
        window.location.href="index1.html"
    }
    else{
        alert('You have entered invalid input')
    }
 })