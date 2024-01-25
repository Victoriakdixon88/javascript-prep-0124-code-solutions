/* exported getKeys */
function getKeys(object) {
  const newArray = [];
  for (const prop in object) {
    newArray.push(prop);
  }
  return newArray;
}
