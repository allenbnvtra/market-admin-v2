import crypto from "crypto";

const generateKey = () => {
  const agentId = "FlameCasino_Seamless";
  const agentKey = d36403b9242a21abee1c0e10e9b98ca1c23b1472;
  const now = new Date().toISOString().slice(0, 10).replace(/-/g, "").slice(2); // YYMMDD
  const keyG = crypto
    .createHash("md5")
    .update(now + agentId + agentKey)
    .digest("hex");
  const queryString = Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join("&");
  const md5String = crypto
    .createHash("md5")
    .update(queryString + keyG)
    .digest("hex");
  return `123456${md5String}abcdef`;
};

console.log(generateKey);

export default generateKey;

// export const loginWithRedirect = async () => {
//   const params = {
//     Token: "https://wb-api4.jlfafafa3.com/",
//     GameId: 1,
//     Lang: "en-US",
//     AgentId: "FlameCasino_Seamless",
//   };

//   const agentId = "abcd_THB";
//   const agentKey = "your_agent_key_here";
//   const key = generateKey(agentId, agentKey, params);
//   params.Key = key;

//   const response = await fetch("https://api.example.com/singleWallet/Login", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(params),
//   });

//   return response.json();
// };
