export const market = {
  storeId: "buudy_us",
  siteUrl: "https://us.buudy.com",
  locale: "en-US",
  currency: "USD" as const,
  currencySymbol: "$",
  country: "United States",
  countryCode: "US",
  marketLabel: "US",
  sizeSystem: "US",
  checkoutSource: "us_buudy_barefoot",
  checkoutBridgeUrl: "https://buudy.com/pages/add-to-cart",
  shipping: {
    freeThreshold: 180,
    standardRate: 7,
    carrier: "USPS Priority / FedEx Ground",
    deliveryDaysMin: 3,
    deliveryDaysMax: 5,
  },
  support: {
    email: "support@buudy.com",
    hours: "Monday – Friday, 9:00 AM – 6:00 PM EST",
  },
} as const;
