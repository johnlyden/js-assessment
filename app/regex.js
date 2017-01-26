exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
      return /\d/.test(str);
  },

  containsRepeatingLetter: function(str) {
    // regex to find consecutive repeating letters
    return /([a-zA-Z])\1/.test(str);
  },

  endsWithVowel: function(str) {
    // i think this way reads better
    var re = /[aeiou]$/i;
    return re.test(str);
  },

  captureThreeNumbers: function(str) {
    var matches = (/\d{3}/).exec(str);
    return matches ? matches[0] : false;
  },

  matchesPattern: function(str) {
    return (/^\d{3}-\d{3}-\d{4}$/).test(str);
  },

  isUSD: function(str) {
    return (/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/).test(str);
  }
};
