
// Ana fonksiyon-geçerli görev girildiğinde görevi listeye ekleme(altaki fonksiyon ile) ve toastları gösterme, görevi localStorage'a ekleme
// let clicks = 0    // localStorage a tek tek görev eklemek için
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

function newElement(){
    const TASK = document.querySelector('#task')

    if (TASK.value && TASK.value.trim() !=='') {        
        addTask(TASK.value)                         // alttaki görev fonksiyonunu çalıştırma
        // clicks ++;   // localStorage a tek tek görev eklemek için
        // localStorage.setItem(`Görev ${clicks}`, TASK.value)      // localStorage a tek tek görev eklemek için
        TASK.value = ""
        $('#liveToast').toast('show')
        closeButtons();                 // alttaki listeyi kapatma fonksiyonunu çalıştırma
        // checkedButtons();            // alttaki listeyi checked class'ına döndürme fonksiyonunu (düzgün çalışmayan) çalıştırma
    } else {
        $('#liveToast1').toast('show')
        TASK.value = ""

    }
}

// Yeni bir görev ekleme fonksiyonu
let ulListDOM = document.querySelector('#list')

const addTask = (task) => {
    itemsArray.push(task);
    localStorage.setItem('items', JSON.stringify(itemsArray))
    let liDOM = document.createElement('li')
    liDOM.classList.add(
        'li'
        )
    liDOM.innerHTML =`${task}<span class="close">&times;</span>`
    ulListDOM.appendChild(liDOM)
}

// Yaratılan listeyi kapatma fonksiyonu
function closeButtons() {
    let closeBtns = document.querySelectorAll('span.close')


    for (let i = 0; i < closeBtns.length; i++) {
        closeBtns[i].addEventListener("click", function(){
            this.parentElement.style.display = 'none'
        })
    }
}

// Checked classına geçme ve ondan çıkma (düzgün çalışıyor)

let checkedBtns = document.querySelector('ul')

checkedBtns.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('checked')
    }
}, false)

// Checked classına geçme ve ondan çıkma (hatalı çalışıyor)

// function checkedButtons() {
//     let checkedBtns = document.querySelectorAll('li')

//     for (let j = 0; j < checkedBtns.length; j++) {
//         checkedBtns[j].addEventListener("click", function(){
            
//             // if (this.classList.contains("checked")) {
//             //     this.classList.remove('checked')
//             // } else {
//             //     this.classList.add('checked')
//             // }
//             this.classList.toggle('checked')

//         })
//     }
// }
closeButtons();
// checkedButtons();

