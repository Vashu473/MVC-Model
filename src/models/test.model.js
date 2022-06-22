const { getResquest } = require("../api/api");

async function GetDataM(body) {
  try {
    // setting token --- Basically set token is used in login api
    const storeToken = await setToken(body);
    // calling api
    const data = await getResquest(process.env.TEST_URL, body);
    return { message: data, success: true, token: storeToken };
  } catch (error) {
    return { message: e, success: false, token: null };
  }
}
async function TestM() {
  try {
    const data = await Test.find({}, { name: 1, img: 1, _id: 0 });
    return { message: data, success: true, token: null };
  } catch (error) {
    return { message: e, success: false, token: null };
  }
}

module.exports = {
  TestM,
  GetDataM,
};
