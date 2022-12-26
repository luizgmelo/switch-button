function toggleButton() {
    const button = document.getElementById("button");
    const radio = document.getElementById("radio");

    const isOff = button.getAttribute("class") == 'switch-button';

    const turnOn = () => {
        radio.innerText = 'radio_button_checked';
        button.classList.add("buttonOn");
    };

    const turnOff = () => {
        radio.innerText = 'radio_button_unchecked';
        button.classList.remove("buttonOn");
    };
    
    isOff ? turnOn() : turnOff();

}