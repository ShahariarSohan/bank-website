
 document.getElementById('submit-btn').addEventListener('click',function(){
    const userEmail =document.getElementById('user-email')
    const password = document.getElementById('password')
    if( userEmail.value=== 'sohan@gmail.com' &&(typeof password.value)==='string'){
        window.location.href="index1.html"
    }
    else{
        alert('You have entered invalid input')
    }
    
 })
