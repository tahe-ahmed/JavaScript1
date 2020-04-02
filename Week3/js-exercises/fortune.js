'use strict'

function main(){
    const numChildren = [1,2,3,4,0];
    const partnerNames = ["Emma", "Olivia", "Ava", "Mia", "Amelia"];
    const locations = ["Assen", "Coevorden","Emmen", "Almere", "Meppel"];
    const jobs =["bookeeeper", "business Manager", "Office Manager", "Receptionist"];

    console.log(tellFortune(numChildren, partnerNames,locations,jobs));
}

function tellFortune(numChildren, partnerNames,locations,jobs){
    let myJob = jobs[Math.floor(Math.random() * 5)];
    let myPartnerName = partnerNames[Math.floor(Math.random() * 5)];
    let myLocation = locations[Math.floor(Math.random() * 5)];
    let myChildernNumber = numChildren[Math.floor(Math.random() * 5)];

    return `You will be a ${myJob} in ${myLocation}, and married to ${myPartnerName} with ${myChildernNumber} kids.`;
}

main();



