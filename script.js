//Employ role access system;
let role = prompt("Enter Your Role: ");
switch(role.toLowerCase()){
    case"admin":
    alert("Full access");
    break;
    case"manager":
    alert("team management access");
    break;
    case"developer":
    alert("code access");
    break;
    case"intern":
    alert("limited access");
    break;
    default:
    alert("Invalid role");
    break;
}

//Online Payment Method Selection;
let payment = prompt("Choose Payment Method");
switch(payment.toLowerCase()){
    case"credit":
    alert("Payment successfull");
    break;
    case"debit":
    alert("Payment successfull");
    break;
    case"upi":
    alert("Payment successfull");
    break;
    case"cod":
    alert("Payment successfull");
    break;
    default:
    alert("Choose proper way")
} 

//Order Status Checker;
let statusoforder  = prompt("Enter ordered status");
switch(statusoforder.toLowerCase()){
    case"placed":
    alert("your order is placed");
    break;
    case"packed":
    alert("your order is packed");
    break;
    case"shipped":
    alert("your order is shipped");
    break;
    case"delivered":
    alert("your order is delivered");
    break;
    case"cancelled":
    alert("your order is cancelled");
    break;
    default:
    alert("Choose order first ");
    break;
}

//Office Working Day Checker
let input = prompt("Enter Day Name");
switch(input.toLowerCase()){
    case"monday":
    alert("Working Day");
    break;
    case"tuesday":
    alert("Working Day");
    break;
    case"wednesday":
    alert("Working Day");
    break;    
    case"thursday":
    alert("Working Day");
    break;
    case"friday":
    alert("Half Day");
    break;
    case"saturday":
    alert("Working Day");
    break;
    case"sunday":
    alert("Holiday");
    break;
    default:
    alert("Not A Day");
    break;
}