const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["goku", "vegeta", "trunks"],       // Names
    ["https://yt3.ggpht.com/a/AATXAJzbnO5f-cXtlXGiTC1VVq78oZ0w2VNHmfbS_7j0=s900-c-k-c0xffffffff-no-rj-mo", // Images
    "https://yt3.ggpht.com/a/AATXAJyX43NUT01B1bJBRsDCss7kFqQbZY7gHCpAXg=s900-c-k-c0xffffffff-no-rj-mo", 
    "https://yt3.ggpht.com/a/AATXAJxijfv4EaP8_hOEUcJaJhgABYHGdoDPlzkp8Q=s900-c-k-c0xffffffff-no-rj-mo"],
    [500, 400, 600],                    // HP values
    [100, 150, 50],                       // Attack damage values
    "broly", // Boss name
    "https://yt3.ggpht.com/a/AATXAJz9CWHCtnBW7oJqw2onT70Q5zhc0C2aXQW3-w=s900-c-k-c0xffffffff-no-rj-mo", // Boss image
    2000, // Boss hp
    50 // Boss attack damage

  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  
  txn = await gameContract.attackBoss();
  await txn.wait();
  
  txn = await gameContract.attackBoss();
  await txn.wait();


};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();