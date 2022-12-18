const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(
    ["goku", "vegeta", "trunks"],       // Names
    ["https://yt3.ggpht.com/a/AATXAJzbnO5f-cXtlXGiTC1VVq78oZ0w2VNHmfbS_7j0=s900-c-k-c0xffffffff-no-rj-mo", // Images
    "https://yt3.ggpht.com/a/AATXAJyX43NUT01B1bJBRsDCss7kFqQbZY7gHCpAXg=s900-c-k-c0xffffffff-no-rj-mo", 
    "https://yt3.ggpht.com/a/AATXAJxijfv4EaP8_hOEUcJaJhgABYHGdoDPlzkp8Q=s900-c-k-c0xffffffff-no-rj-mo"],
    [500, 400, 600],                    // HP values
    [100, 150, 50]                       // Attack damage values
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  txn = await gameContract.mintCharacterNFT(0);
  await txn.wait();
  console.log("Minted NFT #1");

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log("Minted NFT #2");

  txn = await gameContract.mintCharacterNFT(2);
  await txn.wait();
  console.log("Minted NFT #3");

  txn = await gameContract.mintCharacterNFT(1);
  await txn.wait();
  console.log("Minted NFT #4");

  console.log("Done deploying and minting!");  


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