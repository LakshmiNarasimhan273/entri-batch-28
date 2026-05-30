const fs = require("fs");

// 3 parameters
// - FileName
// - File content
// - Callback Function to identify any errors
fs.writeFile("report.txt", "Entri Live Session - FN B28", (err) => {
    if(err){
        console.log("File Processing Failed");
        return;
    }
    console.log("File Processing Successful");
}); 