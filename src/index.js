/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences) {
  var count = 0;

  for (var i = 0; i < preferences.length; i++) {
    preferences[i]--;
  }

  for (var j = 0; j < preferences.length; j++) {
    if(preferences[j] == j) {
      preferences[j] = undefined;
    }

    if (preferences[preferences[preferences[j]]] == j) {
      count++;
      preferences[j] = undefined;
      preferences[preferences[j]] = undefined;
      preferences[preferences[preferences[j]]] = undefined;
    }
  }

  return count;
};
