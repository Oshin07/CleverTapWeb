// ============================================================
// CLEVERTAP CONFIG — edit ONLY this file
// ============================================================
var CLEVERTAP_ACCOUNT_ID = "4W7-4R8-R65Z";
    var CLEVERTAP_REGION     = "eu1";

    // Save to localStorage so every inner page loads the SDK automatically
    localStorage.setItem("CT_ACCOUNT_ID", CLEVERTAP_ACCOUNT_ID);
    localStorage.setItem("CT_REGION",     CLEVERTAP_REGION);;  // ← replace this
// ============================================================

var clevertap = { account:[], event:[], profile:[], onUserLogin:[], notifications:[], privacy:[] };
clevertap.privacy.push({ optOut: false });
clevertap.privacy.push({ useIP: true });
clevertap.account.push({ id: "4W7-4R8-R65Z"});
clevertap.account.push({ region: CLEVERTAP_REGION });
(function(){
  var w = document.createElement("script");
  w.type = "text/javascript";
  w.async = true;
  w.src = "https://d2r1yp2w7bby2u.cloudfront.net/js/clevertap.min.js";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(w, s);
})();
