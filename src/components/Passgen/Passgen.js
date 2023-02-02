
export default function Passgen() {

    let userCharArr = [];
    let charLength = 8;
    
    let numCharArr = ('0123456789'.split(''));
    let charLower = ('abcdefghijklmnopqrstuvwyxz'.split(''));
    let charUpper = ('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));
    let charSpecial = ('()!@#$%&*/?+-%'.split(''));
    
    
    //Write password to the #password input
    function writePassword() {
        let accptPrompts = getPrompts(); //returns True or False
        //let passwordText = document.querySelector("#password");
        
        if (accptPrompts) {//If true... then...
            let password = generatePassword();
            alert("Your new password is: \n\n" + password);
        }
       
    }
    
    //define a function that will generate the password from the user prompts.
    
    function generatePassword() {
        let passString = '';
        for (let i = 0; i < charLength; i++) {
         let randomIndex = [Math.floor(Math.random() * userCharArr.length)];
         passString = passString + userCharArr[randomIndex];
        }
        return passString
    }
        
    //Setting the userCharArr to the concatinated numCharArr ensures numbers are present if user declines all other options.
    function getPrompts(){
        userCharArr = [];
        userCharArr = userCharArr.concat(numCharArr);
        charLength = parseInt(prompt("How many characters long do you want your new password to be?\nChoose between 8 and 128 characters"));
    
    
        if (isNaN(charLength) || charLength < 8 || charLength > 128){
        alert("Number of characters must be a number 8 - 128\nPlease enter a number between 8-129.");
            return false;
        }
    
        if (window.confirm("Would you like lowercase letters?")){
            userCharArr = userCharArr.concat(charLower);
        }
    
        if (window.confirm("Would you like uppercase letters?")){
            userCharArr = userCharArr.concat(charUpper);
        }
    
        if (window.confirm("Would you like special characters?")){
            userCharArr = userCharArr.concat(charSpecial);
        }
    
    return true;
    
    }




    return (
        <>
            <a className='dropdown-item' onClick={writePassword} id='passBtn'>
                Password Generator
            </a>

        </>
    );
}

