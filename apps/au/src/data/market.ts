export const market = {
  storeId: "buudy_au",
  siteUrl: "https://au.buudy.com",
  locale: "en-AU",
  currency: "AUD" as const,
  currencySymbol: "A$",
  country: "Australia",
  countryCode: "AU",
  marketLabel: "AU",
  sizeSystem: "AU",
  checkoutSource: "au_buudy_barefoot",
  checkoutBridgeUrl: "https://buudy.com/pages/add-to-cart",
  shipping: {
    freeThreshold: 250,
    standardRate: 12,
    carrier: "Australia Post Express",
    deliveryDaysMin: 2,
    deliveryDaysMax: 4,
  },
  support: {
    email: "support@buudy.com",
    hours: "Monday – Friday, 9:00 AM – 5:00 PM AEST",
  },
} as const;
