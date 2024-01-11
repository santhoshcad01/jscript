/* v1=35;
console.log(v1);
var output=v1=="s" ? "v1 has value" : "v1 doesnot have value";
console.log(output);


m=51;
var mark= (35<=m && m<60) ? "grade c" : (60<=m && m<80) ?
"grade B" : (80<=m && m<90) ? "grade A" : (90<=m && m<=100) ?
"grade Distinction" : "no grade";
console.log(mark);

function findgrade1(m,k){
    var mark= (35<=m && m<60) ? "grade c" : (60<=m && m<80) ?
"grade B" : (80<=m && m<90) ? "grade A" : (90<=m && m<=100) ?
"grade Distinction" : "no fail";
console.log(k,mark);
}
findgrade1(81,"sandy"); 

var findgrade2=(m,k)=>{
    console.log("under process");
}

console.log(findgrade2); 

var findgrade2=(m,k)=>{
    var mark=(35<=m && m<60) ? "grade c":
    (60<=m && m<80) ? "grade A"
}
console.log(findgrade2(36,"dani"));*/

//using functions

function checkgrade(){
    console.log("Welcome");
    console.log("you do everthing");
}
checkgrade();

var checkgrade1=(a,b)=>{
    console.log(a+b);
    return a+b;
}

checkgrade();
console.log("added value",checkgrade1(1,2))

var printmsg =checkgrade1(1,2);
console.log(printmsg);

//trying to short the code 
var checkgrade2=(a,b)=> a+b;
console.log(checkgrade2(5,10));

//trying to short the code
var checkgrade2=()=> checkgrade();
console.log(checkgrade2());

//conditional statements
//if condition
function gradechecking(m){
    if(m>0 && m<=35)
    {
        console.log("no grade");
        console.log("fail");

    }
}
gradechecking(20);

//nested if else condition
function gradechecking(m)
{
    if(m>0 && m<=40)
    {
        console.log("no grade");
        console.log("fail");
    }
    else{
        console.log("pass");
        console.log("other grades");
    }
}

gradechecking(45);

//nested if else condition
function gradechecking1(m)
{
    if(m>0 && m<=40)
    {
        console.log("no grade");
        console.log("fail");
    }
    else{
        if(m>41 && m<=74){
        console.log("pass");
        console.log("other grades");
    }
    }
}
gradechecking1(30)

function checkingwithswitch(a)
{
    switch(a){
        case 's':
            console.log(a);
            break;
        case 'h':
            console.log("case 2 executed",a);
            break;
        case 3:
            break;      
        
        default:
            console.log(a);
    }
    
}
{

checkingwithswitch(1);

switch(a){
    case 's':
        console.log('executed case s', typeof a);
        break;
    case 'h':
        console.log("case 2 executed",a);
        break;
    case 3:

    console.log("case 3 executed");
        break;      
    
    default:
        alert("wellcome ot js script");
}

}

checkingwithswitch(5);

