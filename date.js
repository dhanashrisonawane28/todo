//shortcuts
exports.getDate = function (){
  const today = new Date();
  const options = {
    weekday : "long",
    day : "numeric",
    month : "long"
  };
  return today.toLocaleDateString("en-US",options);
}
//no shortcuts
module.exports.getDay = getday;
function getday(){
  const today = new Date();
  const options = {
    weekday : "long",
  };
  const day = today.toLocaleDateString("en-US",options);
  return day;
}
