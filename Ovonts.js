function parseProduct(product) {
  return {
    product_sku: product?.sku,
    product_product_title: product?.title,
    product_product_desc: product?.desc,
    product_brand: product?.brand,
    product_price: product?.price,
    product_offered_price: product?.offeredPrice,
    product_currency: product?.currency,
    product_mainCategory: product?.category?.mainCategory,
    product_subCategory1: product?.category?.subCategory,
    product_subCategory2: product?.category?.mainSubCategory,
    product_url: product?.productUrl,
    product_quantity: product?.quantity,
    product_variant: product?.variant,
    product_color: product?.color,
    product_size: product?.size,
  };
}

function parseCheckout(checkoutObj) {
  return {
    cartId: checkoutObj?.cartId,
    checkoutId: checkoutObj?.checkoutId,
    orderId: checkoutObj?.orderId,
    total_amount: checkoutObj?.totalAamount,
    payable_amount: checkoutObj?.payableAamount,
    promoCode: checkoutObj?.promoCode,
  };
}

function parseOrder(orderObj) {
  return {
    orderId: orderObj?.orderId,
    gross_amount: orderObj?.grossAmount,
    taxable_amount: orderObj?.taxableAmount,
    payable_amount: orderObj?.payableAmount,
    total_amount: orderObj?.totalAmount,
    transactionId: orderObj?.transactionId,
    offerId: orderObj?.offerId,
    promoApplied: orderObj?.promoApplied,
  };
}

function parseRegister(registerObj) {
  return {
    userEmail: registerObj?.email,
    userPhone: registerObj?.phone,
    userName: registerObj?.name,
    userAge: registerObj?.age,
    userDob: registerObj?.dob,
  };
}

function parseLogin(loginObj) {
  return {
    userId: loginObj?.id,
    userName: loginObj?.name,
    userPhone: loginObj?.phone,
  };
}

function parseSearch(searchObj) {
  return {
    category: searchObj?.category,
    value: searchObj?.value,
    rating: searchObj?.rating,
    min_price: searchObj?.min_price,
    max_price: searchObj?.max_price,
    brand: searchObj?.brand,
    discount: searchObj?.discount,
    offer: searchObj?.offer,
  };
}

//1
function productViewed(product) {
  const productDetails = parseProduct(product);
  try {
    window.Countly.q.push([
      "add_event",
      {
        key: "productViewed",
        segmentation: {
          userEmail: window.ovontsUserEmail,
          userName: window.ovontsUserName,
          userPhone: window.ovontsUserMobile,
          userDob: window.ovontsUserDob,
          userFbId: window.ovontsUserFbId,
          userGoogleId: window.ovontsUserGoogleId,
          userGoogleAdId: window.ovontsUserGoogleAdId,
          userHardwareId: window.ovontsUserHardwareId,
          affiliateId: window.affiliateId,
          campaignId: window.campaignId,
          product_brand: productDetails?.product_brand,
          product_color: productDetails?.product_color,
          product_currency: productDetails?.product_currency,
          product_desc: productDetails?.product_product_desc,
          product_mainCategory: productDetails?.product_mainCategory,
          product_offeredPrice: productDetails?.product_offered_price,
          product_price: productDetails?.product_price,
          product_quantity: productDetails?.product_quantity,
          product_size: productDetails?.product_size,
          product_sku: productDetails?.product_sku,
          product_subCategory1: productDetails?.product_subCategory1,
          product_subCategory2: productDetails?.product_subCategory2,
          product_title: productDetails?.product_product_title,
          product_url: productDetails?.product_url,
          product_variant: productDetails?.product_variant,
        },
      },
    ]);
  } catch (error) {
    console.log(error);
  }
}
//2
function productAddedToCart(product, cartId = null) {
  const productDetails = parseProduct(product);
  try {
    window.Countly.q.push([
      "add_event",
      {
        key: "productAddedToCart",
        segmentation: {
          userEmail: window.ovontsUserEmail,
          userName: window.ovontsUserName,
          userPhone: window.ovontsUserMobile,
          userDob: window.ovontsUserDob,
          userFbId: window.ovontsUserFbId,
          userGoogleId: window.ovontsUserGoogleId,
          userGoogleAdId: window.ovontsUserGoogleAdId,
          userHardwareId: window.ovontsUserHardwareId,
          campaignId: window.campaignId,
          affiliateId: window.affiliateId,
          cartId: cartId,
          product_brand: productDetails?.product_brand,
          product_color: productDetails?.product_color,
          product_currency: productDetails?.product_currency,
          product_desc: productDetails?.product_product_desc,
          product_mainCategory: productDetails?.product_mainCategory,
          product_offeredPrice: productDetails?.product_offered_price,
          product_price: productDetails?.product_price,
          product_quantity: productDetails?.product_quantity,
          product_size: productDetails?.product_size,
          product_sku: productDetails?.product_sku,
          product_subCategory1: productDetails?.product_subCategory1,
          product_subCategory2: productDetails?.product_subCategory2,
          product_title: productDetails?.product_product_title,
          product_url: productDetails?.product_url,
          product_variant: productDetails?.product_variant,
        },
      },
    ]);
  } catch (error) {
    console.log(error);
  }
}
//3
function productAddedToWishlist(wishlistId = null, product) {
  const productDetails = parseProduct(product);
  try {
    window.Countly.q.push([
      "add_event",
      {
        key: "productAddedToWishlist",
        segmentation: {
          userEmail: window.ovontsUserEmail,
          userName: window.ovontsUserName,
          userPhone: window.ovontsUserMobile,
          userDob: window.ovontsUserDob,
          userFbId: window.ovontsUserFbId,
          userGoogleId: window.ovontsUserGoogleId,
          userGoogleAdId: window.ovontsUserGoogleAdId,
          userHardwareId: window.ovontsUserHardwareId,
          campaignId: window.campaignId,
          affiliateId: window.affiliateId,
          wishlistId: wishlistId,
          product_brand: productDetails?.product_brand,
          product_color: productDetails?.product_color,
          product_currency: productDetails?.product_currency,
          product_desc: productDetails?.product_product_desc,
          product_mainCategory: productDetails?.product_mainCategory,
          product_offeredPrice: productDetails?.product_offered_price,
          product_price: productDetails?.product_price,
          product_quantity: productDetails?.product_quantity,
          product_size: productDetails?.product_size,
          product_sku: productDetails?.product_sku,
          product_subCategory1: productDetails?.product_subCategory1,
          product_subCategory2: productDetails?.product_subCategory2,
          product_title: productDetails?.product_product_title,
          product_url: productDetails?.product_url,
          product_variant: productDetails?.product_variant,
        },
      },
    ]);
  } catch (error) {
    console.log(error);
  }
}
//4
function cartViewed(product, cartId = null) {
  const productDetails = parseProduct(product);
  try {
    window.Countly.q.push([
      "add_event",
      {
        key: "cartViewed",
        segmentation: {
          userEmail: window.ovontsUserEmail,
          userName: window.ovontsUserName,
          userPhone: window.ovontsUserMobile,
          userDob: window.ovontsUserDob,
          userFbId: window.ovontsUserFbId,
          userGoogleId: window.ovontsUserGoogleId,
          userGoogleAdId: window.ovontsUserGoogleAdId,
          userHardwareId: window.ovontsUserHardwareId,
          campaignId: window.campaignId,
          affiliateId: window.affiliateId,
          cartId: cartId,
          product_brand: productDetails?.product_brand,
          product_color: productDetails?.product_color,
          product_currency: productDetails?.product_currency,
          product_desc: productDetails?.product_product_desc,
          product_mainCategory: productDetails?.product_mainCategory,
          product_offeredPrice: productDetails?.product_offered_price,
          product_price: productDetails?.product_price,
          product_quantity: productDetails?.product_quantity,
          product_size: productDetails?.product_size,
          product_sku: productDetails?.product_sku,
          product_subCategory1: productDetails?.product_subCategory1,
          product_subCategory2: productDetails?.product_subCategory2,
          product_title: productDetails?.product_product_title,
          product_url: productDetails?.product_url,
          product_variant: productDetails?.product_variant,
        },
      },
    ]);
  } catch (error) {
    console.log(error);
  }
}
//5
function orderPlaced(products, orderObj) {
  // let parsedProduct = [],
  //   productsStringified;
  let order = parseOrder(orderObj);
  try {
    // products.map((p) => {
    //   parsedProduct.push(parseProduct(p));
    // });
    // productsStringified = JSON.stringify(parsedProduct);
    window.Countly.q.push([
      "add_event",
      {
        key: "orderPlaced",
        segmentation: {
          userEmail: window.ovontsUserEmail,
          userName: window.ovontsUserName,
          userPhone: window.ovontsUserMobile,
          userDob: window.ovontsUserDob,
          userFbId: window.ovontsUserFbId,
          userGoogleId: window.ovontsUserGoogleId,
          userGoogleAdId: window.ovontsUserGoogleAdId,
          userHardwareId: window.ovontsUserHardwareId,
          campaignId: window.campaignId,
          affiliateId: window.affiliateId,
          orderId: order.orderId,
          grossAmount: order.gross_amount,
          taxableAmount: order.taxable_amount,
          payableAmount: order.payable_amount,
          totalAmount: order.total_amount,
          transactionId: order.transactionId,
          offerId: order.offerId,
          promoApplied: order.promoApplied,
          products: productsStringified,
        },
      },
    ]);
  } catch (error) {
    console.log(error);
  }
}
//6
function checkoutStarted(products_array, chekoutObj) {
  const checkout = parseCheckout(chekoutObj);
  // let parsedProduct = [],
  //   productsStringified;
  try {
    // products.map((p) => {
    //   parsedProduct.push(parseProduct(p));
    // });
    // productsStringified = JSON.stringify(parsedProduct);
    window.Countly.q.push([
      "add_event",
      {
        key: "checkoutStarted",
        segmentation: {
          userEmail: window.ovontsUserEmail,
          userName: window.ovontsUserName,
          userPhone: window.ovontsUserMobile,
          userDob: window.ovontsUserDob,
          userFbId: window.ovontsUserFbId,
          userGoogleId: window.ovontsUserGoogleId,
          userGoogleAdId: window.ovontsUserGoogleAdId,
          userHardwareId: window.ovontsUserHardwareId,
          campaignId: window.campaignId,
          affiliateId: window.affiliateId,
          cartId: checkout?.cartId,
          checkoutId: checkout?.checkoutId,
          orderId: checkout?.orderId,
          totalAmount: checkout?.total_amount,
          payableAamount: checkout?.payable_amount,
          promoCode: checkout?.promoCode,
          products: productsStringified,
        },
      },
    ]);
  } catch (error) {
    console.log(error);
  }
}
//7
function productRemovedFromCart(cartId = null) {
  try {
    window.Countly.q.push([
      "add_event",
      {
        key: "productRemovedFromCart",
        segmentation: {
          userEmail: window.ovontsUserEmail,
          userName: window.ovontsUserName,
          userPhone: window.ovontsUserMobile,
          userDob: window.ovontsUserDob,
          userFbId: window.ovontsUserFbId,
          userGoogleId: window.ovontsUserGoogleId,
          userGoogleAdId: window.ovontsUserGoogleAdId,
          userHardwareId: window.ovontsUserHardwareId,
          campaignId: window.campaignId,
          affiliateId: window.affiliateId,
          cartId: cartId,
        },
      },
    ]);
  } catch (error) {
    console.log(error);
  }
}

//8
function Register(registerObj) {
  const registerObject = parseRegister(registerObj);
  try {
    window.Countly.q.push([
      "add_event",
      {
        key: "Register",
        segmentation: {
          campaignId: window.campaignId,
          affiliateId: window.affiliateId,
          userEmail: registerObject?.userEmail,
          userPhone: registerObject?.userPhone,
          userName: registerObject?.userName,
          userAge: registerObject?.userAge,
          userDob: registerObject?.userDob,
        },
      },
    ]);
  } catch (error) {
    console.log(error);
  }
}
//9
function Login(loginObj) {
  const loginObject = parseLogin(loginObj);
  try {
    window.Countly.q.push([
      "add_event",
      {
        key: "Login",
        segmentation: {
          campaignId: window.campaignId,
          affiliateId: window.affiliateId,
          userId: loginObject?.userId,
          userName: loginObject?.userName,
          userPhone: loginObject?.userPhone,
        },
      },
    ]);
  } catch (error) {
    console.log(error);
  }
}

function search(search) {
  const searchObj = parseSearch(search);
  try {
    window.Countly.q.push([
      "add_event",
      {
        key: "Search",
        segmentation: {
          search_category: searchObj?.category,
          search_value: searchObj?.value,
          seach_product_rating: searchObj?.rating,
          search_min_price: searchObj?.min_price,
          search_max_price: searchObj?.max_price,
          search_brand: searchObj?.brand,
          search_discount: searchObj?.discount,
          search_offer: searchObj?.offer,
        },
      },
    ]);
  } catch (error) {
    console.log(error);
  }
}
