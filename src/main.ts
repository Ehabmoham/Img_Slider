let srcImgs : string[] = ['../imgs/01.jpg', '../imgs/02.jpg', '../imgs/03.jpg', '../imgs/04.jpg'];
let slider  = document.querySelector('.slider') as HTMLDivElement;
let currentIndex : number = 0;
let prevBtn = document.querySelector('.prev') as HTMLButtonElement;
let nextBtn = document.querySelector('.next') as HTMLButtonElement;

window.onload = function(){
    slider.style.backgroundImage = `url(${srcImgs[currentIndex]})`;
    createBullets();
}

function createBullets(){

    let ul = document.createElement('ul');

    for(let i = 0; i < srcImgs.length; i++){

        let li = document.createElement('li');
        li.innerText = `${i +1}`;
        li.setAttribute('data-index', `${i}`)
        ul.appendChild(li)

        
    };

    slider.appendChild(ul)
    let lists = document.querySelectorAll('ul li');
    lists[currentIndex].classList.add('active')
    
    lists.forEach((list)=>{
        list.addEventListener('click' , (e: Event)=>{

            const target = e.target as HTMLElement;

            lists.forEach((list)=>{
                list.classList.remove('active')
            });
            
            target.classList.add('active');

            let currentIndex = target.dataset.index;

            slider.style.backgroundImage = `url(${srcImgs[Number(currentIndex)]})`;
          
        });
    });
};

nextBtn.addEventListener('click', ()=>{
    currentIndex = Number(document.querySelector('.active')?.getAttribute('data-index'));

    if(srcImgs[currentIndex + 1] != undefined){
        currentIndex += 1;
        slider.style.backgroundImage = `url(${srcImgs[currentIndex]})`;

        let list = document.querySelectorAll('.slider ul li');
        list.forEach((li)=>{
            li.classList.remove('active');
        })

        list[Number(currentIndex)].classList.add('active');

    }else{
        currentIndex = 0;
        slider.style.backgroundImage = `url(${srcImgs[currentIndex]})`;
        let list = document.querySelectorAll('.slider ul li');
        list.forEach((li)=>{
            li.classList.remove('active');
        })

        list[Number(currentIndex)].classList.add('active');
    };
});

prevBtn.addEventListener('click', ()=>{

    currentIndex = Number(document.querySelector('.active')?.getAttribute('data-index'));

    if(srcImgs[currentIndex - 1] != undefined){
        currentIndex -= 1;
        slider.style.backgroundImage = `url(${srcImgs[currentIndex]})`;
        let list = document.querySelectorAll('.slider ul li');
        list.forEach((li)=>{
            li.classList.remove('active');
        })

        list[Number(currentIndex)].classList.add('active');

    }else{
        currentIndex = srcImgs.length - 1;
        slider.style.backgroundImage = `url(${srcImgs[currentIndex]})`;
        let list = document.querySelectorAll('.slider ul li');
        list.forEach((li)=>{
            li.classList.remove('active');
        })

        list[Number(currentIndex)].classList.add('active');
    };
});
