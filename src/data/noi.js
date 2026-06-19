export const noiNavLinks = [
  { name: "Journey", link: "#journey" },
  { name: "Preparation", link: "#preparation" },
  { name: "Algorithms", link: "#algorithms" },
  { name: "Reflection", link: "#reflection" },
];

export const algorithms = [
  {
    name: "Binary Search",
    level: "Solid",
    desc: "Efficiently finds a value in a sorted array by repeatedly halving the search space. O(log n) time complexity.",
    code: `while (l < r) {\n  ll mid = (l + r) / 2;\n  if (check(mid)) r = mid;\n  else l = mid + 1;\n}`,
  },
  {
    name: "Prefix Sum",
    desc: "Precomputes cumulative sums to answer range sum queries in O(1) after O(n) preprocessing.",
    code: `for (int i = 1; i <= n; i++)\n  pref[i] = pref[i-1] + a[i];\nll sum = pref[r] - pref[l-1];`,
  },
  {
    name: "Sliding Window",
    desc: "Maintains a window that expands and contracts to solve subarray problems efficiently in O(n).",
    code: `int l = 0;\nfor (int r = 0; r < n; r++) {\n  // add a[r]\n  while (/* invalid */) l++;\n  // update answer\n}`,
  },
  {
    name: "Greedy",
    desc: "Makes the locally optimal choice at each step, often used with sorting to solve optimisation problems.",
    code: `sort(a.begin(), a.end());\nfor (auto x : a) {\n  if (valid(x)) take(x);\n}`,
  },
];
