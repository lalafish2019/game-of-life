(function () {
  var reports = {
    birthDeathReport: function(actualStateBefore, actualStateAfter) {
      var birth = 0;
      var death = 0;
      var keysBefore = [];
      var keysAfter = [];

      for (i = 0; i < actualStateBefore.length; i++) {
        for (j = 1; j < actualStateBefore[i].length; j++) {
          keysBefore.push(actualStateBefore[i][j] + ',' + actualStateBefore[i][0]);
        }
      }

      for (i = 0; i < actualStateAfter.length; i++) {
        for (j = 1; j < actualStateAfter[i].length; j++) {
          keysAfter.push(actualStateAfter[i][j] + ',' + actualStateAfter[i][0]);
        }
      }

      for (i = 0; i < keysBefore.length; i++) {
        if (keysAfter.indexOf(keysBefore[i]) < 0) {
          death++;
        }
      }

      for (i = 0; i < keysAfter.length; i++) {
        if (keysBefore.indexOf(keysAfter[i]) < 0) {
          birth++;
        }
      }

      return {birth, death};
    }
  };

  window.GOLReports = reports;
}());