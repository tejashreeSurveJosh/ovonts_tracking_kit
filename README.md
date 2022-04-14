
# Ovonts Tracking Kit
download/clone the repository add this script file to your index.html file 
## Object to created/formed

```javascript
1)product
    {        
        sku: "",
        title: "",
        desc: "",
        brand: "",
        price: "",
        offered_price: "",
        currency: "",
        category: {
          mainCategory: "",
          subCategory: "",
          mainSubCategory: "",
        },
        product_url:"",
        quantity: "",
        variant: "",
        color: "",
        size: ""
    }
         
2)checkoutObj
    {
        cartId: "",
        checkoutId: "",
        orderId: "",
        total_amount: "",
        payable_amount: "",
        promoCode: ""
    }

3)order
    {
        orderId: "",
        gross_amount: "",
        taxable_amount: "",
        payable_amount: "",
        total_amount: "",
        transactionId: "",
        offerId: "",
        promoApplied: ""
    }
//this product array is used for when user click on checkoutStarted and oderplaced
4)product_array = [
        {
          sku: "",
          title: "",
          desc: "",
          brand: "",
          price: "",
          offered_price: "",
          currency: "",
          category: {
            mainCategory: "",
            subCategory: "",
            mainSubCategory: "",
          },
          product_url:
            "https :"",
          quantity: "",
          variant: "",
          color: "",
          size: "",
        },
        {
          sku: "",
          title: "",
          desc: "",
          brand: "",
          price: "",
          offered_price: "",
          currency: "",
          category: {
            mainCategory: "",
            subCategory: "",
            mainSubCategory: "",
          },
          product_url:
            "https :"",
          quantity: "",
          variant: "",
          color: "",
          size: "",
        },
      ];

5)checkoutObj = {
      cartId: "12",
      checkoutId: "123",
      orderId: "12344",
      totalAamount: "2500",
      payableAamount: "1800",
      promoCode: "serddss",
    };

6)orderObj = {
      orderId: "A1001",
      grossAmount: "4000",
      taxableAmount: "400",
      payableAmount: "400",
      totalAmount: "4400",
      transactionId: "U10001",
      offerId: "100001",
      promoApplied: "OFF400",
    };

7)registerObj = {
      email: "subas@gmail.com",
      phone: "9022813986",
      name: "subas",
      age: "24",
      dob: "21/07/1997",
    };

8)loginObj = {
      id: "subas123",
      phone: "9022",
      name: "subhu",
    };



Event Functions :

1)productViewed(product)
    {       
            //set the properties of product object
            //example:
            productViewed = parseProduct(product)
            product_sku:productViewed.sku,
            product_price:productViewed.price,
    }
    
2)productAddedToCart(product,cartId)
    {       
            
            //set the properties of product object
            //set the cartId       
    }

3)productAddedToWishlist(wishlistId, product)
    {

                //set the properties of product object
                //set the wishlistId
    }
4)productRemovedFromCart(product, cartId)
    {
            //set the properties of product object
            //set the cartId

    }
5)cartViewed(product, cartId)
    {
            //set the properties of product object
            //set the cartId               
    }
6)orderPlaced(product_array, orderObj)
    {       
            //set the properties of product_array object
            //set the properties of orderObj
            //example:
            order = parseOrder(orderObj)
            orderId:order.orderId,
            gross_amount:order.gross_amount,
            taxable_amount:order.taxable_amount,
            payable_amount:order.payable_amount,
            total_amount:order.total_amount,
            transactionId:order.transactionId,
            offerId:order.offerId,
            promoApplied:order.promoApplied,

    }

7)checkoutStarted(product_array, checkoutObj)
    {
            //set the properties of product_array object
            //set the properties of checkoutObj object
            //example:
            checkout = parseCheckout(checkoutObj)
                cartId: checkout?.cartId,
                checkoutId: checkout?.checkoutId,
                orderId:checkout?.orderId,
                total_amount: checkout?.total_amount,
                payable_amount: checkout?.payable_amount,
                promo_applied: checkout?.promo_applied,
    }
8)productRemovedFromCart(cartId)
    {  
         //it will set the value of cartId when product is removed
        //example:
        cartId:cartId
    }
```


## UserTraits

``` javacript
// this should be called with any user trait as soon as they found and this needs  only be done once. 
//it will take user object as an argument
ovontsSetUserTraits(
    {
            email: "",
            mobile_number: "",
            name: "",
            dob: "",
            fbId: "",
            google_id: "",
            googleAdId:"",
            hardwareId:""
    })
//example:
ovontsSetUserTraits(
    {
        email:"example@ovonts.com",
        name:"example"
    })

```
## Events to be tracked

``` javascript

1)productViewed(product)
    {       
            //set the properties of product object
            //example:
            productViewed = parseProduct(product)
            product_sku:productViewed.sku,
            product_price:productViewed.price,
    }
    
2)productAddedToCart(product,cartId)
    {       
            
            //set the properties of product object
            //set the cartId       
    }

3)productAddedToWishlist(wishlistId, product)
    {

                //set the properties of product object
                //set the wishlistId
    }
4)productRemovedFromCart(product, cartId)
    {
            //set the properties of product object
            //set the cartId

    }
5)cartViewed(product, cartId)
    {
            //set the properties of product object
            //set the cartId               
    }
6)orderPlaced(product_array, orderObj)
    {       
            //set the properties of product_array object
            //set the properties of orderObj
            //example:
            order = parseOrder(orderObj)
            orderId:order.orderId,
            gross_amount:order.gross_amount,
            taxable_amount:order.taxable_amount,
            payable_amount:order.payable_amount,
            total_amount:order.total_amount,
            transactionId:order.transactionId,
            offerId:order.offerId,
            promoApplied:order.promoApplied,

    }

7)checkoutStarted(product_array, checkoutObj)
    {
            //set the properties of product_array object
            //set the properties of checkoutObj object
            //example:
            checkout = parseCheckout(checkoutObj)
                cartId: checkout?.cartId,
                checkoutId: checkout?.checkoutId,
                orderId:checkout?.orderId,
                total_amount: checkout?.total_amount,
                payable_amount: checkout?.payable_amount,
                promo_applied: checkout?.promo_applied,
    }

8)Register(registerObj) {

    registerObject = parseRegister(registerObj);
    campaignId: window.campaignId,
          affiliateId: window.affiliateId,
          userEmail: registerObject?.userEmail,
          userPhone: registerObject?.userPhone,
          userName: registerObject?.userName,
          userAge: registerObject?.userAge,
          userDob: registerObject?.userDob,
}

8)function Login(loginObj) {
   loginObject = parseLogin(loginObj);
          campaignId: window.campaignId,
          affiliateId: window.affiliateId,
          userId: loginObject?.userId,
          userName: loginObject?.userName,
          userPhone: loginObject?.userPhone,
}

9)function search(search) {
     searchObj = parseSearch(search);
     search_category: searchObj?.category,
          search_value: searchObj?.value,
          seach_product_rating: searchObj?.rating,
          search_min_price: searchObj?.min_price,
          search_max_price: searchObj?.max_price,
          search_brand: searchObj?.brand,
          search_discount: searchObj?.discount,
          search_offer: searchObj?.offer,
}
```
