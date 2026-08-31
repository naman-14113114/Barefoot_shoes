export type FaqItem = {
  category: "Sizing & Fit" | "Shipping & Delivery" | "14-Day Returns" | "Materials & Care" | "Payment & Security";
  question: string;
  answerHtml: string;
};

export const faqsData: FaqItem[] = [
  {
    category: "Sizing & Fit",
    question: "How do BUUDY. barefoot shoes fit compared to standard US sneakers?",
    answerHtml: "<p>BUUDY. shoes feature a wide, anatomically shaped toe box and a true zero-drop sole (0mm heel-to-toe drop). They fit true to size. We provide a full US to EU conversion chart. If you are between sizes, we recommend ordering one half size up.</p>"
  },
  {
    category: "Sizing & Fit",
    question: "I am new to barefoot footwear. How should I transition?",
    answerHtml: "<p>Because traditional athletic shoes elevate your heel, transitioning to zero-drop activates stabilizer muscles in your feet and calves. We suggest wearing your BUUDY. shoes for 2 to 3 hours daily initially, gradually increasing wear over 1 to 2 weeks.</p>"
  },
  {
    category: "Shipping & Delivery",
    question: "When will my US order be dispatched?",
    answerHtml: "<p>Orders placed before 5:00 PM EST are dispatched the same business day. Delivery across the US via USPS Priority / FedEx Ground takes <strong>2 to 4 business days</strong>.</p>"
  },
  {
    category: "Shipping & Delivery",
    question: "How much is shipping in the United States?",
    answerHtml: "<p>We provide <strong>FREE USPS / FedEx Ground Shipping</strong> on all US orders over $180. For orders under $180, standard tracked delivery is $7.</p>"
  },
  {
    category: "14-Day Returns",
    question: "What is your return & exchange policy in the US?",
    answerHtml: "<p>We offer a <strong>14-day exchange & return window</strong> from the date of delivery. Size exchanges are 100% free. Please test footwear indoors on carpeted floors and return in original packaging.</p>"
  },
  {
    category: "Materials & Care",
    question: "Where are BUUDY. barefoot sneakers made?",
    answerHtml: "<p>Our shoes are handcrafted in family-owned ateliers in Portugal using certified Gold-rated full-grain Italian nappa leather from Gruppo Mastrotto and premium Mediterranean suede.</p>"
  },
  {
    category: "Payment & Security",
    question: "What payment methods do you accept?",
    answerHtml: "<p>We accept Visa, Mastercard, American Express, Discover, Apple Pay, Google Pay, Klarna, and PayPal. Transactions are secured via 256-bit SSL encryption.</p>"
  }
];
