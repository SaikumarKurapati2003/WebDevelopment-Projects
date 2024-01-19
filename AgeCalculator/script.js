let str="",age="",yearstr="",monthstr="",daystr="";
let diff_years=0,diff_months=0,diff_days=0;
let yearNum=0, monthNum=0,dayNum=0;

let newYear = new Date();
function calculateAgeDifferance(dob){
    diff_years=0;
    diff_months=0;
    diff_days=0;
    devide(dob);
    printValues();
}
function devide(dob){
    str=dob;
    yearstr="";
    monthstr="";
    daystr="";
    let count=0;
    for(let i of str){
        if(i=="-"){
            count++;
        }
        else if(count==0){
            yearstr+=i;
        }
        else if(count==1){
            monthstr+=i;
        }
        else{
            daystr+=i;
        }
    }
    console.log("devide(dtr)=",yearstr,monthstr,daystr);
    yearNum = Number(yearstr);
    monthNum = Number(monthstr);
    dayNum = Number(daystr);
    diffY();
}
function diffY(){

    diff_years = newYear.getFullYear() - yearNum -1;                        console.log("diff_years=",diff_years);
    diffMonth();

}


function diffMonth(){

    if(  ( newYear.getMonth()+1 )  >  monthNum ) {                          console.log("this month is > dob month:");
        diff_years++;

        if(newYear.getDate() >= dayNum){                                    console.log("this day is >= dob day");
            diff_months = newYear.getMonth()+1-monthNum;                    console.log("diff_months=", diff_months);
            diff_days = newYear.getDate() - dayNum;                         console.log("diff_days=",diff_days);
        }
        else{                                                               console.log("this day is < dob day");
            diff_months = (newYear.getMonth()+1)-(monthNum+1);              console.log("diff_months=", diff_months);
            diff_days = 30 - dayNum - newYear.getDate();                    console.log("diff_days=",diff_days);
        }
    }

    else if ( (newYear.getMonth()+1)  <  monthNum ){                        console.log("this month is < dob month:");
        if(newYear.getDate() >= dayNum){                                    console.log("this day is >= dob day");
            diff_months = (12- monthNum ) + (newYear.getMonth()+1);         console.log("diff_months=",diff_months); 
            diff_days = newYear.getDate() - dayNum;                         console.log("diff_days=",diff_days);
        }
        else{                                                               console.log("this day is < dob day");
            diff_months = (12- monthNum ) + (newYear.getMonth()+1) - 1;     console.log("diff_months=",diff_months);
            diff_days = 30-(dayNum - newYear.getDate() );                   console.log("diff_days=",diff_days);
        }
    }

    else{                                         /*here diff_months=0;*/   console.log("this is same month");
        if(newYear.getDate() >= dayNum){
            diff_years++;                                               
            diff_months = (newYear.getMonth()+1) - monthNum;                console.log("diff_months=", diff_months);
            diff_days = newYear.getDate() - dayNum;                         console.log("diff_days=",diff_days);
        }
        else{                                                               console.log("today is < your birthday",typeof newYear.getMonth());
            diff_months = (12)-(newYear.getMonth()+1)+(monthNum-1);         console.log("diff_months=", diff_months);
            diff_days = 30 - (dayNum - newYear.getDate());                  console.log("diff_days=",diff_days);
        }
    }

}

function printValues(){
    console.log(`You entered\nYear=${str}\n${dayNum} ${monthNum} ${yearNum}`);
    age = ` ${diff_years}years  ${diff_months}months  ${diff_days}days`;
    console.log(`Your age is : ${age}`);
}

// let str=window.prompt("Enter Your DOB:(dd-mm-yyyy):");
document.getElementById("calc-btn").onclick = function (){
    let dob = document.getElementById("dateofbirth").value;
    console.log("dob=",dob,typeof dob);
    calculateAgeDifferance(dob);    
}
