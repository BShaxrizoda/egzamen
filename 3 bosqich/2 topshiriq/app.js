const acc = document.querySelectorAll('.accardion-text');
for (i = 0; i < acc.length; i++){
        acc[i].addEventListener('click', function(){
            this.nextElementSibling.classList.toggle('active')
        })
    }


