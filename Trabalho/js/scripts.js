class Validator{
    constructor(){
        this.validations = [
            'data-min-length',
        ]
    }

validate(form){
    let inputs = form.getElemetByIdTagName('Input');

    let inputsArray = [...inputs];

    inputsArray.forEach(function(input){
        for(let i = 0;this.validations.length>i;i++){
            if(input.getAttribute(this.validations[i])!= null){
                
            }
        }
    },this);
}

}







let form = document.getElemetById("register-form");
let submit = document.getElemetById("btn-submit");

let validator = new validator

submit.addEventListener('click',function(e){
    e.preventDefault();

    validator.validate(form);
});




