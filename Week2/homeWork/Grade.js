
function main(){
    // set a total mark 
    const totalMark = 100;
    
    let myMark = 60;
    // get the grade report from a pre-defined function and assign its reutrn to a variable
    let report = calcGrade(myMark, totalMark);

    //log the grade report
    console.log("You got a " +report +"!");

}


//a function returns the percentage and the grade of a given mark and totalmark
function calcGrade(myMark, totalMark){
    let grade ;
    let avg = (myMark * 100) / totalMark;

    if (avg > 100 || avg < 0)
        grade = "wrong percentage";
    else if (avg < 60)
        grade = "F";    
    else if (avg < 70) 
        grade = "D";       
    else if (avg < 80) 
        grade = "C";  
    else if (avg < 90) 
        grade = "B";  
    else if (avg < 100) 
        grade = "A";  

    return (grade +" (" + avg +"%)" );
}

main();