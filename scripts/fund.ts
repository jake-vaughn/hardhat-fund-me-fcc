import { ethers } from "hardhat"
import { FundMe } from "../typechain-types"

async function main() {
    const accounts = await ethers.getSigners()
    const deployer = accounts[0]
    const fundMe: FundMe = await ethers.getContract("FundMe", deployer)
    console.log("Funding contract...")
    const transactionResponse = await fundMe.fund({
        value: ethers.utils.parseEther("1"),
    })
    await transactionResponse.wait(1)
    console.log("Funded!")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
