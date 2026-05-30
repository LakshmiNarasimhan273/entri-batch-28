const os = require("os");

// Software Informations
console.log("System Platform", os.platform());
console.log("OS Type", os.type());
console.log("OS Release Version", os.release());
console.log("OS Current Version", os.version());
console.log("OS Architecture", os.arch());

// Hardware Informations
console.log("Total RAM memory", (os.totalmem() / (1024 ** 3)).toFixed(2));
console.log("Current Free Memory", (os.freemem() / (1024 ** 3)).toFixed(2));
console.log("Display uptime", (os.uptime() / 3600).toFixed(2));

// Network Information
console.log("Network Informations", os.networkInterfaces());