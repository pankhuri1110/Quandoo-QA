package runners;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
 
@RunWith(Cucumber.class)
@CucumberOptions(plugin = { "pretty", "html:target/cucumber-reports" },
glue = {"stepDefinitions"},
features = {"src/test/resources"},
monochrome = true) 
public class TestRunner {
}