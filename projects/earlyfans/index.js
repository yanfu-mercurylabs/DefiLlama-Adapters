const { sumTokens2 } = require("../helper/unwrapLPs");
const ADDRESSES = require('../helper/coreAssets.json')

const contract = "0x4b17a9318238403ddac8E3a790C3b06D18132Bf4";
const early = "0x7135B32e9903BdB4e19a8b1D22fC2038964B8451";

async function tvl(api) {
  return sumTokens2({ tokens: [ADDRESSES.null, early], owners: [contract], api });
}

module.exports = {
  methodology: `We count the EARLY on ${early}`,
  blast: {
    tvl,
  },
};
