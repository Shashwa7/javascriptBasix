const paras = document.querySelectorAll('p');

//innerText will only able read visible texts.

paras.forEach(para => {
    if (para.textContent.includes('error')) {
        para.classList.add('error');
    }
    else if (para.innerText.includes('success')) {
        para.classList.add('success');
    }

});

//whereas textContent can read visble as well as invisible texts.
//we will use this apporach