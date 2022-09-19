/*Force converter between Pascal and Bar*/
const PASCAL_INPUT = document.getElementById('pascal');
const BAR_INPUT = document.getElementById('bar');

BAR_INPUT.addEventListener('keyup', () => {
    PASCAL_INPUT.value =
        BAR_INPUT.value
            ? BAR_INPUT.value * 100000
            : 0;
});

PASCAL_INPUT.addEventListener('keyup', () => {
    BAR_INPUT.value =
        PASCAL_INPUT.value
            ? +PASCAL_INPUT.value / 100000
            : 0;
});
