function capitalizeWords(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
console.log(capitalizeWords("the quick brown fox"));

function largestOfThree(a, b, c) {
  return Math.max(a, b, c);
}
console.log(largestOfThree(1, 0, 1000));
console.log(largestOfThree(1000, 510, 440));

function right(str) {
  if (str.length < 3) return str;
  return str.slice(-3) + str.slice(0, -3);
}
console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));

function angle_Type(angle) {
  if (angle > 0 && angle < 90) return "Acute angle";
  if (angle === 90) return "Right angle";
  if (angle > 90 && angle < 180) return "Obtuse angle";
  if (angle === 180) return "Straight angle";
  return "Invalid angle";
}
console.log(angle_Type(47));
console.log(angle_Type(90));
console.log(angle_Type(145));
console.log(angle_Type(180));

function array_max_sum(arr, k) {
  let maxSum = 0;
  for (let i = 0; i < k; i++) maxSum += arr[i];

  let currentSum = maxSum;
  for (let i = k; i < arr.length; i++) {
    currentSum = currentSum - arr[i - k] + arr[i];
    if (currentSum > maxSum) maxSum = currentSum;
  }
  return maxSum;
}
console.log(array_max_sum([1, 2, 3, 14, 5], 2));
console.log(array_max_sum([2, 3, 5, 1, 6], 3));
console.log(array_max_sum([9, 3, 5, 1, 7], 2));
