//mouse click
document.getElementById('submit-btn').addEventListener('click',function(){
    const userEmail =document.getElementById('user-email')
    const password = document.getElementById('password')
    if( userEmail.value=== 'sohan@gmail.com' &&  password.value ==='sohan'){
        window.location.href="index1.html"
    }
    else{
        alert('You have entered invalid input')
    }
 })
//  keypress
document.getElementById('user-email').addEventListener('keyup',function(event){
    if(event.key==='Enter'){
    const userEmail =document.getElementById('user-email')
    const password = document.getElementById('password')
    if( userEmail.value=== 'sohan@gmail.com' &&  password.value==='sohan'){
        window.location.href="index1.html"
    }
    else{
        alert('You have entered invalid input')
    }
    }
})
document.getElementById('password').addEventListener('keyup',function(event){
    if(event.key==='Enter'){
    const userEmail =document.getElementById('user-email')
    const password = document.getElementById('password')
    if( userEmail.value=== 'sohan@gmail.com' &&  password.value==='sohan'){
        window.location.href="index1.html"
    }
    else{
        alert('You have entered invalid input')
    }
    }
})




