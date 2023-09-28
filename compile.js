const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol'); // Adjust the path as per your directory structure
const source = fs.readFileSync(inboxPath, 'utf8');

const input = {
  language: 'Solidity',
  sources: {
    'Inbox.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};

const compiledContract = JSON.parse(solc.compile(JSON.stringify(input)));
const contract = compiledContract.contracts['Inbox.sol']['Inbox']; // Adjust as per your contract name

module.exports = {
  interface: contract.abi,
  bytecode: contract.evm.bytecode.object,
};



// const solc = require('solc');
// const path = require('path');
// const fs = require('fs');

// const contractPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
// const source = fs.readFileSync(contractPath, 'utf8');

// const input = {
//   language: 'Solidity',
//   sources: {
//     'Inbox.sol': {
//       content: source,
//     },
//   },
//   settings: {
//     outputSelection: {
//       '*': {
//         '*': ['*'],
//       },
//     },
//   },
// };

// const compiled = JSON.parse(solc.compile(JSON.stringify(input)));
// const contract = compiled.contracts['Inbox.sol']['Inbox'];

// module.exports = {
//   abi: contract.abi,
//   bytecode: contract.evm.bytecode.object,
// };
































// const path = require('path');
// const fs = require('fs');
// const solc = require('solc');


// const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
// const source = fs.readFileSync(inboxPath, 'utf8');

// // module.exports = solc.compile(source, 1).contracts[':Inbox'];




// const input = {
//   language: 'Solidity',
//   sources: {
//     'Inbox.sol': {
//       content: source,
//     },
//   },
//   settings: {
//     outputSelection: {
//       '*': {
//         '*': ['*'],
//       },
//     },
//   },
// };

// const output = JSON.parse(solc.compile(JSON.stringify(input)));

// if (output.errors) {
//   output.errors.forEach(error => {
//     console.error(error.message);
//   });
// } else {
//   const contract = output.contracts['Inbox.sol']['Inbox'];
//   module.exports = contract;
// }














































// const path = require('path');
// const fs = require('fs');
// const solc = require('solc');

// const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
// const source = fs.readFileSync(inboxPath, 'utf8');

// try {
//   const compiledContract = solc.compile(source, 1);
//   module.exports = compiledContract.contracts[':Inbox'];
// } catch (error) {
//   console.error('Error compiling contract:', error);
//   module.exports = null; // or handle the error in a way that makes sense for your application
// }




















