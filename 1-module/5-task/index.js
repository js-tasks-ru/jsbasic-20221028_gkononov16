function truncate(str, maxlength) {
  return (str.length <= maxlength) ? str : str.replace(str.slice(maxlength - 1), "…");
}
