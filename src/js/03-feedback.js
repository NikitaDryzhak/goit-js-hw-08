import throttle from 'lodash.throttle';


const form = document.querySelector('.feedback-form');


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
    const mail = form.elements.email.value;
    const message = form.elements.message.value;
    if (mail == '' || message == '') {
        alert('Fill the form')
        return
    }
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
