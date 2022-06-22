// saving logs
async function logs(data1, data2, data3) {
  const logData = {
    request: JSON.stringify(data1),
    gameName: data3,
    response: JSON.stringify(data2),
  };
  const logStore = await logs(logData);
  await logStore.save();
}
module.exports = logs;
