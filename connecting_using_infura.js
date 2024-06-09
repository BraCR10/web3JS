//Importing WEB3 library
var {Web3} = require("web3");

//Your endpoint
var url="";
//Making a object
var web3=new Web3(url)


//var address="0x5e35cD24E97415b1ee7A72FaEd8c2459b7d7F1Db"
var address="0xE3b3326b2c695e38BD3eF1F851A0974a78EC35BA"//My hash

//A simple funtion that gets balance
async function getBalamce(address) {
    try {
        const tokens = await web3.eth.getBalance(address);
        console.log(web3.utils.fromWei(tokens,'ether'));
    } catch (error) {
        console.error(error);
    }
}

//Asking for my balance
getBalamce(address);
