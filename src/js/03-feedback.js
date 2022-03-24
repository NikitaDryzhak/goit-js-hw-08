import throttle from 'lodash.throttle';


const form = document.querySelector('.feedback-form');


form.addEventListener('input', throttle(inputText, 500))
form.addEventListener('submit', submitForm)



savedTextOnForm()

function inputText(e) {
    let data = localStorage.getItem('feedback-form-state')
    data = data ? JSON.parse(data) : {};
    data[e.target.name] = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(data))
}

function submitForm(e) {
    e.preventDefault()
    const email = form.elements.email.value;
    const message = form.elements.message.value;
    if (email == '' || message == '') {
        alert('Fill the form')
        return
    }
    const formData = {
        email,
        message
    };

    e.target.reset()
    localStorage.removeItem('feedback-form-state')

    console.log(formData)
}



function savedTextOnForm() {
    let storageData = localStorage.getItem('feedback-form-state');
    if (storageData) {
        storageData = JSON.parse(storageData)
    } else return;
    Object.entries(storageData).forEach(
        ([name, value]) => form.elements[name].value = value
    )
}
