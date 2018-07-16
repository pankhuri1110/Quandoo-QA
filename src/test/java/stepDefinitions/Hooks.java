package stepDefinitions;
import com.quandoo.genericlib.QuandooSelenium;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
	
	@Before
	public void before() {
	    System.out.println("Test Started");
	}
	
	@After
	public void after() {
	    QuandooSelenium.driver.quit();
	}
}