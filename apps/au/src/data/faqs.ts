export type FaqItem = {
  category: "Sizing & Fit" | "Shipping & Delivery" | "14-Day Returns" | "Materials & Care" | "Payment & Security";
  question: string;
  answerHtml: string;
};

export const faqsData: FaqItem[] = [
  {
    category: "Sizing & Fit",
    question: "How do BUUDY. barefoot shoes fit compared to standard Australian footwear?",
    answerHtml: "<p>BUUDY. shoes feature a wide anatomical toe box and a true zero-drop sole (0mm heel-to-toe drop). They fit true to European sizing (AU sizing corresponds directly to UK sizing for men). We provide an AU/EU conversion chart on every product page.</p>"
  },
  {
    category: "Shipping & Delivery",
    question: "When will my AU order be dispatched?",
    answerHtml: "<p>Orders placed before 5:00 PM AEST are dispatched the same business day. Delivery across Australia via Australia Post Express takes <strong>2 to 4 business days</strong>.</p>"
  },
  {
    category: "Shipping & Delivery",
    question: "How much is shipping in Australia?",
    answerHtml: "<p>We offer <strong>FREE Australia Post Express Shipping</strong> on all orders over A$250. For orders under A$250, standard tracked parcel delivery is A$12.</p>"
  },
  {
    category: "14-Day Returns",
    question: "What is your return & exchange policy in Australia?",
    answerHtml: "<p>We offer a <strong>14-day exchange & return window</strong> from the date of delivery. Size exchanges are processed quickly. Please test shoes indoors on clean floors and return with original packaging.</p>"
  },
  {
    category: "Materials & Care",
    question: "Where are BUUDY. barefoot shoes crafted?",
    answerHtml: "<p>Our footwear is handcrafted in family-owned artisanal workshops in Portugal using certified Gold-rated full-grain Italian nappa leather from Gruppo Mastrotto and premium Mediterranean suede.</p>"
  },
  {
    category: "Payment & Security",
    question: "What payment methods do you accept?",
    answerHtml: "<p>We accept Visa, Mastercard, American Express, Apple Pay, Google Pay, Klarna/Afterpay, and PayPal. Transactions are secured via 256-bit SSL encryption.</p>"
  }
];
