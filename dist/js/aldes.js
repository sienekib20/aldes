"use-strict";

(function () {

   var aldes = Aldes.init();

   var navbarObject = aldes.generateNavbar({
      type: [
         {
            theme: 'light',
            brand: true,
            itemsCount: 4,
            isTogglable: true
         },
         {
            theme: 'dark',
            brand: true,
            itemsCount: 8,
            isTogglable: true
         }
      ]
   }).apply(() => done(data));

   navbarObject.map((key, nav) => {

   });

})();