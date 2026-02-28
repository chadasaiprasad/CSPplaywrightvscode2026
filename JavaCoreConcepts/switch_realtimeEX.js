let responsecode=404;
switch (responsecode){
    case 200:
        console.log(" 200 ok");
        break;
    case 404:
        console.log("404 not found");
        break;
    case 500:
        console.log("500 internal server error");
        break;
    default:
        console.log("unknown response code");   
}