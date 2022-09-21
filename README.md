
## Web3 Charity Project
Moralis x Filecoin Hackathon project
Project url: 

# what is our project about?
 Our project aims to solve the issue of trust, transparency in the isssuance of funds for charity, fundraising, donations etc.
 users can create a cause which they need money to be raised for by filling the details of the cause which are stored on ipfs using `web3.storage`, and so as to discourage unnecessary causes each cause created by a user has to be voted 
 on, the voting is open and can be done by anyone but each wallet can only vote for a cause once, once a cause has been approved the `chainlink keepers`
 update the state of the cause and it is listed, once listed donations can be made to the cause, users can chat with the organizers using `Xmtp messaging
feature` anyone who donates to the cause gets a soul-bound nft made using `NFT.storage`.The cause is closed when the creator decides or when the specified goal has been reached.

# plans moving forward
  * We plan to implement a standard open dao which with each cause as proposals and ways to incentivize users to verify them
  * we plan to add support for donation of real world asssets or other digital assets
  
  ## integrations 
  * chainlink keepers for automating functions in smart contract - https://github.com/umershaikh123/Moralis-x-Filecoin-Hackathon/blob/master/Backend/Hardhat/contracts/funder.sol
  * xmtp for messaging - https://github.com/umershaikh123/moralis-x-filecoin-frontend/blob/heeze-branch/pages/detailPage/%5Baddress%5D.js
  * web3.storage and NFT.storage to store the users data when a cause is created - https://github.com/umershaikh123/moralis-x-filecoin-frontend/blob/main/pages/Create-new-program.js
  * Moralis for syncing events from our smart contract
  


