const formatAmount = amount => {
  const parts = amount.toString().split('.');
  
  const integerPart = parts[0];

  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    ',',
  );

  return parts.length > 1
    ? `${formattedIntegerPart}.${parts[1]}`
    : formattedIntegerPart;
};

export default formatAmount;
