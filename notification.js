window.onload = () => {
    document.querySelector('#chips-show').onclick = () => {
        let text = document.querySelector('#chips-text').value; //text input 
        let chips = document.createElement('div');
        chips.classList.add('chips');
        chips.innerText = text;

        // document.body.appendChild(chips);
        if (!document.querySelector('#chips-field')) {
            let chipsField = document.createElement('div');
            chipsField.id = 'chips-field';
            document.body.appendChild(chipsField);
        }
             document.querySelector('#chips-field').appendChild(chips); 
             setTimeout(
                () => {
                    chips.remove();
                    removeChipsField();
                },
                3000
             );

        }

        function removeChipsField() {
            let chips = document.querySelectorAll('#chips-field .chips');
            if (chips.length == 0){
                document.querySelector('#chips-field').remove();
            }
        }
    }
