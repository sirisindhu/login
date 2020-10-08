var app = new Vue({
  el: "#app",

  data: {
    registerActive: false,
    emailLogin: "",
    passwordLogin: "",
    emailReg: "",
    passwordReg: "",
    confirmReg: "",
    emptyFields: false,
    active: 'Your login successful',
    register: 'You are now registered'
  },

  methods: {
     doLogin() {
        if (this.emailLogin === "" || this.passwordLogin === "") {
           this.emptyFields = true;
        } else {
           alert(this.active);
        }
     },
     
     doRegister() {
        if (this.emailReg === "" || this.passwordReg === "" || this.confirmReg === "") {
           this.emptyFields = true;
        } else {
           alert(this.register);
        }
     }
  }
});