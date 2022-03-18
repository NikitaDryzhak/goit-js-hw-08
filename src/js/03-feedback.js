import throttle from 'lodash.throttle';


const form = document.querySelector('.feedback-form');
const email = document.querySelector('.email');
const message = document.querySelector('.message');

form.addEventListener('input', throttle(inputText, 500))
form.addEventListener('submit', submitForm)

const data = {};

savedTextOnForm()

function inputText(e) {
    data[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(data))

}
function submitForm(e) {
    e.preventDefault()
    e.target.reset()
    localStorage.removeItem('feedback-form-state')
    console.log(data)

}



function savedTextOnForm() {
    let storageData = localStorage.getItem('feedback-form-state');
    if (storageData) {
        storageData = JSON.parse(storageData)
    } else return;
    Object.entries(storageData).forEach(([name, value]) => 
        form.elements[name].value = value
    )
}
