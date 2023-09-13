const inputs = document.querySelectorAll('input')

inputs.forEach(function (currentValue, currentIndex, listObj) {
    currentValue.addEventListener('submit', validateForm);
    console.log(`${currentValue}, ${currentIndex}, ${this}`);
});

function validateForm(e) {
    const form = e.target;

    if (form.checkValidity()){
        console.log(form);
    } else {
        e.preventDefault();
    }
}