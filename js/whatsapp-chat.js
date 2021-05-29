$(function () {
    $('.floating-wpp').floatingWhatsApp({
        phone: '99999999999',
        popupMessage: 'Welcome to iamrohit.in',
        showPopup: true,
        position: 'right', // left or right
        autoOpen: false, // true or false
        //autoOpenTimer: 4000,
        message: 'Hello how are you my name is rohit',
        //headerColor: 'orange', // enable to change msg box color
        headerTitle: 'Whatsapp Message Box',
    });
});