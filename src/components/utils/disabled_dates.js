const disabledDates = currentDate => {
  const today = new Date();
  today.setDate(today.getDate() - 1);
  if (new Date(currentDate._d) < today) {
    return true;
  }
  return false;
};
export default disabledDates