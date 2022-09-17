let select = 3;                               //("1.feet to inch 2.inch to feet 3.feet to meter 4.meter to feet ")
switch(select){
    case 1 :
        let feetToInch = 30;
        console.log("the converted value in inch = "+ feetToInch*12);
        break;
    case 2 :
        let inch = 20;
        console.log("The converted value in feet is = "+ inch/12);
        break;
    case 3 :
        let feetToMeter = 60;
        console.log("the converted value in meter is = "+ feetToMeter/3.25);
        break;
    case 4 :
        let meter = 70
        console.log("the converted value in feet is =" + meter*3.28);
        break;
    default :
    console.log("please select correct oprtion");
}