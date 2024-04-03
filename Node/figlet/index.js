const figlet=require("figlet")
figlet("AYAN PATHAN", function (err,data) {
    if(err){
        console.log("something is wrong");
        console.dir(err);
        return;
    }
    else{
        console.log(data);
    }
})