export const market = {
  storeId: "buudy_uk",
  siteUrl: "https://buudy.co.uk",
  locale: "en-GB",
  currency: "GBP" as const,
  currencySymbol: "£",
  country: "United Kingdom",
  countryCode: "GB",
  marketLabel: "UK",
  sizeSystem: "UK",
  checkoutSource: "uk_buudy_barefoot",
  checkoutBridgeUrl: "https://buudy.com/pages/add-to-cart",
  shipping: {
    freeThreshold: 150,
    standardRate: 5,
    carrier: "Royal Mail Tracked 24/48",
    deliveryDaysMin: 2,
    deliveryDaysMax: 4,
  },
  support: {
    email: "support@buudy.com",
    hours: "Monday – Friday, 9:00 AM – 5:00 PM GMT",
  },
} as const;
