/**
 * Created by swathi on 11/4/17.
 */
var loginPage = function(){
    this.userid = element(by.model('credentials.email'));
    this.password = element(by.model('credentials.password'));
    this.loginButton = element(by.css('button[type=submit]'));
}
module.exports = loginPage;