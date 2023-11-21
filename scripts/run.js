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
    const waveTxn = await waveContract.wave("This is wave #1");
    await waveTxn.wait();
  
    const waveTxn2 = await waveContract.wave("This is wave #2");
    await waveTxn2.wait();
  
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