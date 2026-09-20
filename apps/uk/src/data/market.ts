export const market = {
  storeId: "juujo_uk",
  siteUrl: "https://juujo.co.uk",
  locale: "en-GB",
  currency: "GBP" as const,
  currencySymbol: "£",
  country: "United Kingdom",
  countryCode: "GB",
  marketLabel: "UK",
  sizeSystem: "UK",
  checkoutSource: "uk_juujo_barefoot",
  checkoutBridgeUrl: "https://juujo.com/pages/add-to-cart",
  shipping: {
    freeThreshold: 150,
    standardRate: 5,
    carrier: "Royal Mail Tracked 24/48",
    deliveryDaysMin: 2,
    deliveryDaysMax: 4,
  },
  support: {
    email: "support@juujo.com",
    hours: "Monday – Friday, 9:00 AM – 5:00 PM GMT",
  },
} as const;
