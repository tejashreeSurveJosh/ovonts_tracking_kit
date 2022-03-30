function parseProduct(product) {
    return ({
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
        product_size: product?.size

    })
}

function parseCheckout(checkoutObj) {
    return ({
        cartId: checkoutObj?.cartId,
        checkoutId: checkoutObj?.checkoutId,
        orderId: checkoutObj?.orderId,
        total_amount: checkoutObj?.totalAamount,
        payable_amount: checkoutObj?.payableAamount,
        promoCode: checkoutObj?.promoCode
    })
}

function parseOrder(orderObj) {
    return ({
        orderId: orderObj?.orderId,
        gross_amount: orderObj?.grossAmount,
        taxable_amount: orderObj?.taxableAmount,
        payable_amount: orderObj?.payableAmount,
        total_amount: orderObj?.totalAmount,
        transactionId: orderObj?.transactionId,
        offerId: orderObj?.offerId,
        promoApplied: orderObj?.promoApplied
    })
}

function parseRegister(registerObj) {
    return ({
        userEmail: registerObj?.email,
        userPhone: registerObj?.phone,
        userName: registerObj?.name,
        userAge: registerObj?.age,
        userDob: registerObj?.dob
    })
}

function parseLogin(loginObj) {
    return ({
        userId: loginObj?.id,
        userName: loginObj?.name,
        userPhone: loginObj?.phone
    })
}

//1
function productViewed(product) {
    const productDetails = parseProduct(product)
    try {
        window.mParticle.logEvent(
            "productViewed",
            window.mParticle.EventType.Navigation,
            {
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
                brand: productDetails?.product_brand,
                color: productDetails?.product_color,
                currency: productDetails?.product_currency,
                desc: productDetails?.product_product_desc,
                mainCategory: productDetails?.product_mainCategory,
                offeredPrice: productDetails?.product_offered_price,
                price: productDetails?.product_price,
                quantity: productDetails?.product_quantity,
                size: productDetails?.product_size,
                sku: productDetails?.product_sku,
                subCategory1: productDetails?.product_subCategory1,
                subCategory2: productDetails?.product_subCategory2,
                title: productDetails?.product_product_title,
                url: productDetails?.product_url,
                variant: productDetails?.product_variant,
                   
            }
        )
    }
    catch (error) {
        console.log(error)
    }

}

//2
function productAddedToCart(product, cartId = null) {
    const productDetails = parseProduct(product)
    try {
        window.mParticle.logEvent(
            "productAddedToCart",
            window.mParticle.EventType.Navigation,
            {
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
                brand: productDetails?.product_brand,
                color: productDetails?.product_color,
                currency: productDetails?.product_currency,
                desc: productDetails?.product_product_desc,
                mainCategory: productDetails?.product_mainCategory,
                offeredPrice: productDetails?.product_offered_price,
                price: productDetails?.product_price,
                quantity: productDetails?.product_quantity,
                size: productDetails?.product_size,
                sku: productDetails?.product_sku,
                subCategory1: productDetails?.product_subCategory1,
                subCategory2: productDetails?.product_subCategory2,
                title: productDetails?.product_product_title,
                url: productDetails?.product_url,
                variant: productDetails?.product_variant,

            }
        )

    }
    catch (error) {
        console.log(error)
    }

}

//3
function productAddedToWishlist(wishlistId = null, product) {
    const productDetails = parseProduct(product)
    try {
        window.mParticle.logEvent(
            "productAddedToWishlist",
            window.mParticle.EventType.Navigation,
            {
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
                brand: productDetails?.product_brand,
                color: productDetails?.product_color,
                currency: productDetails?.product_currency,
                desc: productDetails?.product_product_desc,
                mainCategory: productDetails?.product_mainCategory,
                offeredPrice: productDetails?.product_offered_price,
                price: productDetails?.product_price,
                quantity: productDetails?.product_quantity,
                size: productDetails?.product_size,
                sku: productDetails?.product_sku,
                subCategory1: productDetails?.product_subCategory1,
                subCategory2: productDetails?.product_subCategory2,
                title: productDetails?.product_product_title,
                url: productDetails?.product_url,
                variant: productDetails?.product_variant,

            }
        )

    }
    catch (error) {
        console.log(error)
    }

}

//4
function productRemovedFromCart(product, cartId = null) {
    const productDetails = parseProduct(product)
    try {
        window.mParticle.logEvent(
            "productRemovedFromCart",
            window.mParticle.EventType.Navigation,
            {
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
                brand: productDetails?.product_brand,
                color: productDetails?.product_color,
                currency: productDetails?.product_currency,
                desc: productDetails?.product_product_desc,
                mainCategory: productDetails?.product_mainCategory,
                offeredPrice: productDetails?.product_offered_price,
                price: productDetails?.product_price,
                quantity: productDetails?.product_quantity,
                size: productDetails?.product_size,
                sku: productDetails?.product_sku,
                subCategory1: productDetails?.product_subCategory1,
                subCategory2: productDetails?.product_subCategory2,
                title: productDetails?.product_product_title,
                url: productDetails?.product_url,
                variant: productDetails?.product_variant,

            }
        )
    }
    catch (error) {
        console.log(error)
    }

}

//5
function cartViewed(product, cartId = null) {
    const productDetails = parseProduct(product)
    try {

        window.mParticle.logEvent(
            "cartViewed",
            window.mParticle.EventType.Navigation,
            {
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
                brand: productDetails?.product_brand,
                color: productDetails?.product_color,
                currency: productDetails?.product_currency,
                desc: productDetails?.product_product_desc,
                mainCategory: productDetails?.product_mainCategory,
                offeredPrice: productDetails?.product_offered_price,
                price: productDetails?.product_price,
                quantity: productDetails?.product_quantity,
                size: productDetails?.product_size,
                sku: productDetails?.product_sku,
                subCategory1: productDetails?.product_subCategory1,
                subCategory2: productDetails?.product_subCategory2,
                title: productDetails?.product_product_title,
                url: productDetails?.product_url,
                variant: productDetails?.product_variant,

            }
        )
    }
    catch (error) {
        console.log(error)
    }
}

//6
function orderPlaced(products, orderObj) {
    let parsedProduct = [], productsStringified
    let order = parseOrder(orderObj)
    try {
        products.map(p => {
            parsedProduct.push(parseProduct(p))
        })
        productsStringified = JSON.stringify(parsedProduct)
        window.mParticle.logEvent(
            "orderPlaced",
            window.mParticle.EventType.Navigation,
            {
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
                products: productsStringified

            }
        )
    }
    catch (error) {
        console.log(error)
    }
}

//7
function checkoutStarted(products_array, chekoutObj) {
    const checkout = parseCheckout(chekoutObj)
    let parsedProduct = [], productsStringified;
    try {
        products_array.map(p => {
            parsedProduct.push(parseProduct(p))
        })
        productsStringified = JSON.stringify(parsedProduct)
        window.mParticle.logEvent(
            "checkoutStarted",
            window.mParticle.EventType.Navigation,
            {
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
                products: productsStringified
            }
        )
    }
    catch (error) {
        console.log(error)
    }
}

//8
function productRemovedFromCart(cartId = null) {
    try {
        window.mParticle.logEvent(
            "productRemovedFromCart",
            window.mParticle.EventType.Navigation,
            {
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
            }
        )
    }
    catch (error) {
        console.log(error)

    }

}

//9
function Register(registerObj) {
    const registerObject = parseRegister(registerObj)
    try {
        window.mParticle.logEvent(
            "register",
            window.mParticle.EventType.Navigation,
            {
                campaignId: window.campaignId,
                affiliateId: window.affiliateId,
                userEmail: registerObject?.userEmail,
                userPhone: registerObject?.userPhone,
                userName: registerObject?.userName,
                userAge: registerObject?.userAge,
                userDob: registerObject?.userDob


            }
        )
    } catch (error) {
        console.log(error);
    }
}

//10
function Login(loginObj) {
    const loginObject = parseLogin(loginObj)
    try {
        window.mParticle.logEvent(
            "login",
            window.mParticle.EventType.Navigation,
            {
                campaignId: window.campaignId,
                affiliateId: window.affiliateId,
                userId: loginObject?.userId,
                userName: loginObject?.userName,
                userPhone: loginObject?.userPhone,
            }
        )

    } catch (error) {
        console.log(error);
    }
}

