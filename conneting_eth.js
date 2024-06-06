//Importando web3.js
const {Web3} = require('web3');
//Conectandose a una public RPC  endpoint para ver datos de la blockcahin
const web3 = new Web3('https://eth.llamarpc.com');

//Algunas consultas
web3.eth.getBalance('0x000000633b68f5D8D3a86593ebB815b4663BCBe0').then(balance => {console.log('\nSaldo de la billetera:', web3.utils.fromWei(balance, 'ether'), 'ETH');})

web3.eth.getChainId().then(chainID => {console.log('El Id de la cadena es:', chainID);})

web3.eth.getGasPrice().then(gasPrice => {console.log('La gas fee actual es de:',  web3.utils.fromWei(gasPrice, 'gwei'));})

console.log("Wallet:")
//Creando una random wallet
myRandomWallet=web3.eth.accounts.wallet.create(1)
console.log(myRandomWallet[0])

console.log("\nAccount:")
//Haciendo una cuenta de una private key de una wallet
const account = web3.eth.accounts.wallet.add('0x003bc0ef7f9646a3a3b374dc33963a08776a3809ebb4af77c7dde50a9d792858');
console.log(account)
console.log("La llave privada de la cuenta recien creada",account[1].privateKey);
console.log("La direccion publica de la account creada: ",account[1].address);




//Creando un transaction object
const tx = 
{ 
    from: account[1].address, 
    to: "0x1234567890123456789012345678901234567890",
    value: web3.utils.toWei('1', 'ether'),
    gas: 210000, // Limite de gas para la transacción

};

//Simulacion de envio, no hay fondos
web3.eth.sendTransaction(tx).then(hashTrans => {console.log("El hash de esta transaccion es ",hashTrans)});