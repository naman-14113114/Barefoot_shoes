export type FaqItem = {
  category: "Sizing & Fit" | "Shipping & Delivery" | "14-Day Returns" | "Materials & Care" | "Payment & Security";
  question: string;
  answerHtml: string;
};

export const faqsData: FaqItem[] = [
  {
    category: "Sizing & Fit",
    question: "How do BUUDY. barefoot shoes fit compared to traditional sneakers?",
    answerHtml: "<p>BUUDY. shoes feature a wide, anatomically shaped toe box that allows your toes to splay naturally, combined with a true zero-drop sole (0mm heel-to-toe drop). They fit true to European sizing. We recommend ordering your normal EU shoe size. If you are between sizes or prefer extra room for thicker socks, we recommend sizing up one EU size.</p>"
  },
  {
    category: "Sizing & Fit",
    question: "I am new to barefoot shoes. Is there an adaptation period?",
    answerHtml: "<p>Yes. Because conventional footwear elevates your heel and constricts your forefoot, transitioning to zero-drop stimulates muscles in your feet, calves, and Achilles tendons that may have weakened over time. We recommend wearing your BUUDY. shoes for 2 to 3 hours a day initially, gradually increasing wear as your foot musculature adapts.</p>"
  },
  {
    category: "Sizing & Fit",
    question: "Do BUUDY. shoes have removable insoles?",
    answerHtml: "<p>Yes. Every pair includes a removable 3mm cushioned cork & EVA insole. You can wear the shoes with the insole for a cushioned barefoot entry, or remove it for maximum ground feel and sensory feedback.</p>"
  },
  {
    category: "Shipping & Delivery",
    question: "When will my order be dispatched?",
    answerHtml: "<p>Orders placed before 23:30 GMT are dispatched the very same business day. Delivery across the UK via Royal Mail Tracked 24/48 typically takes <strong>1 to 3 business days</strong>.</p>"
  },
  {
    category: "Shipping & Delivery",
    question: "How much does shipping cost?",
    answerHtml: "<p>We offer <strong>FREE Royal Mail Tracked Delivery</strong> on all UK orders over £150. For orders under £150, standard tracked delivery is just £5.</p>"
  },
  {
    category: "Shipping & Delivery",
    question: "How do I track my package?",
    answerHtml: "<p>Once your order leaves our facility, you will receive an email and SMS with your Royal Mail tracking code. You can also track your shipment live on our <a href='/order-tracking' class='underline font-medium hover:text-black'>Order Tracking Page</a>.</p>"
  },
  {
    category: "14-Day Returns",
    question: "What is your return & exchange policy?",
    answerHtml: "<p>We provide a <strong>14-day exchange & return window</strong> from the date of delivery. If you need a different size or colorway, exchanges for UK customers are 100% free. Please ensure shoes are tried on indoors on carpeted floors and returned in original condition with all packaging.</p>"
  },
  {
    category: "14-Day Returns",
    question: "How do I initiate a size exchange?",
    answerHtml: "<p>Simply submit a request via our <a href='/pages/contact-us' class='underline font-medium hover:text-black'>Contact Desk</a> with your order number and requested replacement size. Our team will provide a prepaid return slip and reserve your exchange pair immediately.</p>"
  },
  {
    category: "Materials & Care",
    question: "Where are BUUDY. barefoot shoes crafted?",
    answerHtml: "<p>Our footwear is handcrafted in family-owned artisanal workshops in Portugal using full-grain Italian nappa leather from Gruppo Mastrotto and premium Mediterranean suede. Every pair passes multi-stage European quality control.</p>"
  },
  {
    category: "Materials & Care",
    question: "How should I clean and protect the leather and suede?",
    answerHtml: "<p>For smooth nappa leather, wipe gently with a damp microfiber cloth and apply a neutral beeswax leather balm once every few months. For suede models, brush gently with a soft crepe suede brush and apply a water-repellent spray prior to wet weather wear.</p>"
  },
  {
    category: "Payment & Security",
    question: "What payment methods do you accept?",
    answerHtml: "<p>We accept Visa, Mastercard, American Express, Apple Pay, Google Pay, Klarna (Pay in 3 / Pay Later), and PayPal. All transactions are encrypted via 256-bit SSL technology.</p>"
  },
  {
    category: "Payment & Security",
    question: "When is my card charged?",
    answerHtml: "<p>Your card or payment account is charged immediately upon order confirmation. You will receive an instant itemized invoice receipt via email.</p>"
  }
];
