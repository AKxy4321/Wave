const main = async () => {
  const waveContract = await hre.ethers.deployContract('WavePortal', {value: hre.ethers.parseEther('0.001')});
  await waveContract.waitForDeployment();
  console.log("Contract deployed to:", waveContract.target);

  let contractBalance = await hre.ethers.provider.getBalance(
    waveContract.target
  );

  console.log(
    "Contract balance:",
    ethers.formatEther(contractBalance)
  );

  contractBalance = await hre.ethers.provider.getBalance(waveContract.target);
  console.log(
    "Contract balance:",
    ethers.formatEther(contractBalance)
  );

  let allWaves = await waveContract.getAllWaves();
  console.log(allWaves);
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