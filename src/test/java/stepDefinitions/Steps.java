package stepDefinitions;

import org.junit.Assert;

import com.quandoo.genericlib.QuandooSelenium;
import com.quandoo.pagelib.DataTablesPage;
import com.quandoo.pagelib.HoverPage;
import com.quandoo.pagelib.LoginPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Steps extends QuandooSelenium{
	
	private HoverPage hover = new HoverPage();
	private DataTablesPage tables = new DataTablesPage();
	
	@Given("^User is on Login Page$")
	public void user_is_on_login_Page(){
		LaunchBrowser("http://the-internet.herokuapp.com/login");
	}
	
	@When("^User tries to login with \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_tries_to_login(String arg1, String arg2)  {
		LoginPage login = new LoginPage();
		login.performLogin(arg1, arg2);
	}
	
	@Then("^User should be successfully looged in$")
	public void login_should_be_successful()  {
		LoginPage login = new LoginPage();
		Assert.assertTrue("Login is not successful", login.getFLashMessage().contains("You logged into a secure area!"));
	}
	
	@Then("^User should see invalid username error message$")
	public void verify_invalid_username_error_message()  {
		LoginPage login = new LoginPage();
		Assert.assertTrue("Invalid username message is not correct", login.getFLashMessage().contains("Your username is invalid!"));
	}
	
	@Then("^User should see invalid password error message$")
	public void verify_invalid_password_error_message()  {
		LoginPage login = new LoginPage();
		Assert.assertTrue("Invalid password message is not correct", login.getFLashMessage().contains("Your password is invalid!"));
	}
	
	@Given("^User is on hover test page$")
	public void user_is_on_hover_test_page() throws Throwable {
		LaunchBrowser("http://the-internet.herokuapp.com/hovers");
	}

	@When("^User hover on \"([^\"]*)\"$")
	public void user_hover_on(String avatar) throws Throwable {
	    hover.perfromHover(avatar);
	}

	@Then("^\"([^\"]*)\" should display$")
	public void username_should_display(String username) throws Throwable {
	    Assert.assertTrue("Correct username is not visible", hover.isUsernameVisible(username));
	}
	
	@Given("^User is on sorting test page$")
	public void user_is_on_sorting_test_page() throws Throwable {
		LaunchBrowser("http://the-internet.herokuapp.com/tables");
	}

	@When("^User sorts with column \"([^\"]*)\" and sorting type is \"([^\"]*)\"$")
	public void user_sorts_with_column(String column, String sortingType) throws Throwable {
	    tables.sortWithColumn(column, sortingType);
	}

	@Then("^\"([^\"]*)\" Sorting should be successful on \"([^\"]*)\"$")
	public void ascending_sorting_shouold_be_successful(String sortingType, String columnNumber) throws Throwable {
	    tables.verifySorting(sortingType, columnNumber);
	}

}