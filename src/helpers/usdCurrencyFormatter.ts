const usdCurrencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  currencyDisplay: "narrowSymbol",
  maximumFractionDigits: 0,
});

export default usdCurrencyFormatter;
