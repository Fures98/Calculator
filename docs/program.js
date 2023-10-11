let clear = document.getElementById('ce')
clear.addEventListener("click", function(){
    document.getElementById("ldo").innerHTML = null
    document.getElementById('LED').value = null
})
let a = null
let b = null
let add = document.getElementById('add');
add.addEventListener("click", function(){
    document.getElementById("ldo").innerHTML = '+'
    a = document.getElementById('LED').value
    document.getElementById('LED').value = null
})
let sub = document.getElementById('sub');
sub.addEventListener("click", function(){
    document.getElementById("ldo").innerHTML = '-'
    a = document.getElementById('LED').value
    document.getElementById('LED').value = null
})
let mult = document.getElementById('mult');
mult.addEventListener("click", function(){
    document.getElementById("ldo").innerHTML = '*'
    a = document.getElementById('LED').value
    document.getElementById('LED').value = null
})
let divi = document.getElementById('divi');
divi.addEventListener("click", function(){
    document.getElementById("ldo").innerHTML = '/'
    a = document.getElementById('LED').value
    document.getElementById('LED').value = null
})
let equal = document.getElementById('equal');
equal.addEventListener("click", function(){
    b = document.getElementById('LED').value
    if(document.getElementById("ldo").innerHTML == '+'){
        let ans = parseFloat(a) + parseFloat(b)
        document.getElementById('LED').value = ans
        document.getElementById('ldo').innerHTML = '='
    }
    else if(document.getElementById("ldo").innerHTML == '-'){
        let ans = parseFloat(a) - parseFloat(b)
        document.getElementById('LED').value = ans
        document.getElementById('ldo').innerHTML = '='
    }
    else if(document.getElementById("ldo").innerHTML == '*'){
        let ans = parseFloat(a) * parseFloat(b)
        document.getElementById('LED').value = ans
        document.getElementById('ldo').innerHTML = '='
    }
    else if(document.getElementById("ldo").innerHTML == '/'){
        let ans = parseFloat(a) / parseFloat(b)
        document.getElementById('LED').value = ans
        document.getElementById('ldo').innerHTML = '='
    }
    else{
        alert('Invalid Operator')
    }
})