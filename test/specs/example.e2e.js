import LoginPage from  '../pageobjects/login.page';
import ProfilePage from '../pageobjects/profile.page';
describe('Auth', () => {
    it('user logs in with valid data', () => {
        LoginPage.open();
        //LoginPage.setLogin('eqpqtat@gmail.com');
        LoginPage.setLogin('eqpqtat@gmail.com');
        LoginPage.setPassword('zaqqazx');
        LoginPage.clickSubmitButton();
        ProfilePage.isOpen();
    });
});


