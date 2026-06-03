document.getElementById('analyzeBtn').addEventListener('click', function () {
  const password = document.getElementById('password').value;
  const strengthLabel = document.getElementById('strengthLabel');
  const passwordSuggestions = document.getElementById('passwordSuggestions');
  const resultSection = document.getElementById('result');

  const passwordStrength = analyzePasswordStrength(password);
  const suggestions = generatePasswordSuggestions(password);

  // Display Strength
  strengthLabel.innerText = `Password Strength: ${passwordStrength}`;

  // Display Suggestions
  passwordSuggestions.innerHTML = `<ul>${suggestions.map(s => `<li>${s}</li>`).join('')}</ul>`;

  // Show result section
  resultSection.style.display = 'block';
});

function analyzePasswordStrength(password) {
  if (password.length < 1) {
    return 'Write Something';
  }
  else if (password.length < 4) {
    return 'Easiest';
  }
  else if (password.length < 6) {
    return 'Very Weak';
  }
  else if (password.length < 9) {
    return 'Weak';
  } 
  else if (password.length < 13) {
    return 'Normal';
  }
  else if (password.length < 14) {
    return 'Medium';
  }
  else if (password.length < 17) {
    return 'Strong';
  }
  else if (password.length < 21) {
    return "Very Strong";
  }
  else if (password.length < 25) {
    return "Very Very Strong";
  }
  else if (password.length < 30) {
    return "Very Very Very Strong";
  }
  else if (password.length < 10000) {
    return "It's Unbreakable";
  }
}

function generatePasswordSuggestions(password) {
  const suggestions = [];
  if (password.length < 1) {
    suggestions.push('Please write something!');
  }
  if (password.length < 4) {
    suggestions.push('Give some effort to your brain');
  }
  if (password.length < 8) {
    suggestions.push('Consider making your password longer (at least 8 characters).');
  }
  if (!/[A-Z]/.test(password)) {
    suggestions.push('Add an uppercase letter to increase strength.');
  }
  if (!/[a-z]/.test(password)) {
    suggestions.push('Add a lowercase letter to increase strength.');
  }
  if (!/[0-9]/.test(password)) {
    suggestions.push('Add a number to increase strength.');
  }
  if (!/[^A-Za-z0-9]/.test(password)) {
    suggestions.push('Add a special character like @, #, $, etc.');
  }
  if (password.length < 12) {
    suggestions.push('Make your normal password (at least 12 characters).');
  }
  if (password.length < 16) {
    suggestions.push('Make your password some looking strong (at least 16 characters).');
  }
  if (password.length < 25) {
    suggestions.push('Make your password strongest (at least 24 characters).');
  }
  if (password.length < 30) {
    suggestions.push('Consider making your password Unbreakable (more than 30 characters).');
  }
  return suggestions;
}
