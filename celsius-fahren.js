/*Conversion Centigrados Fahrenheir */
const centiInput = document.getElementById('centi');
const fahrInput = document.getElementById('fheit');

centiInput.addEventListener('keyup', () => {
    fahrInput.value = (centiInput.value) ? +centiInput.value * 9/5 + 32 : "";
});

fahrInput.addEventListener('keyup', () => {
    centiInput.value = (fahrInput.value) ? (+fahrInput.value - 32) * 5/9 : "";
});
