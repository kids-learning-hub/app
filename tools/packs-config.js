/* Paid practice packs — PayPal hosted button ids, one per grade page.
   Key = "<system>/<grade slug>" (see tools/grades-data-*.js).
   A grade page shows its "buy the pack" box only when its id is set here.

   How to get an id: PayPal Business → Pay & Get Paid → PayPal buttons →
   "Buy Now", price 4.99 USD, and in the advanced settings set the
   "after payment, take customers to this URL" field to the pack's Google
   Drive link. The id is the value of hosted_button_id in the button code.
   (The Drive link stays inside PayPal and never appears in this public repo.) */
'use strict';

module.exports = {
  price: '$4.99',
  buttons: {
    // 'us/3rd-grade-math-worksheets': 'ABCDEFGHIJKLM',
  },
};
