let raceNumber = Math.floor(Math.random() * 1000);

let earlyReg = true; // or false;
let runnerAge = 21;

if (runnerAge > 18 && earlyReg === true) {
    raceNumber += 1000;
};


if (runnerAge > 18 && earlyReg === true) {
        console.log(`You will race at 9:30 am. Your race number is ${raceNumber}.`); 
    } else if (runnerAge > 18 && earlyReg === false) { 
        console.log(`You will race at 11:00 am. Your race number is ${raceNumber}.`); 
    } else if (runnerAge < 18) { 
        console.log(`You will race at 12:30 pm. Your race number is ${raceNumber}.`); 
    } else { console.log('Please see the registration desk for further assistance.');     
};
