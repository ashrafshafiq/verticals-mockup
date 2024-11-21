export const submitToBlockchain = async (donationDetails) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("0x123abc456def"); // Mock transaction hash
      }, 3000); // Mock blockchain delay
    });
  };
  