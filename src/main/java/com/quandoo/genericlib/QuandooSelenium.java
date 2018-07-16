package com.quandoo.genericlib;

import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.remote.RemoteWebDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class QuandooSelenium {
	
public static RemoteWebDriver driver;
	
	public static void LaunchBrowser(String url) {	
		Path currentRelativePath = Paths.get("");
		String PATH = currentRelativePath.toAbsolutePath().toString();
		String geckoDriver = null;
		
		String osType = System.getProperty("os.name").toLowerCase();
		if(osType.indexOf("mac") >= 0)
			geckoDriver = PATH + "/lib/" + "geckodriver";
		else if(osType.indexOf("lin") >= 0)
			geckoDriver = PATH + "/lib/" + "geckodriver";
		else 
			geckoDriver = PATH + "\\lib\\" + "geckodriver";
		System.setProperty("webdriver.gecko.driver", geckoDriver);
		
		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get(url);
		waitForPageToLoad();	
	}
	
	public enum LocatorType { 
	  ID("ID"), XPATH("XPATH"), NAME("NAME"); 

		private String type; 
		private LocatorType(String type) { 
			this.type = type; 
		} 

		@Override 
		public String toString(){ 
			return type; 
		} 
	}

	public WebElement getElement(String locator, LocatorType type) {

		WebElement element = null;

		switch (type.toString()) {
		case "ID":
			System.out.println("Finding Element with Id: " + locator);
			element = driver.findElement(By.id(locator));	
			break;
		case "XPATH":
			System.out.println("Finding Element with XPath: " + locator);
			element= driver.findElement(By.xpath(locator));	
			break;
		case "NAME":
			System.out.println("Finding Elements with Name: " + locator);
			element= driver.findElement(By.name(locator));	
			break;
		default:
			break;
		}
		return element;
	}

	public List<WebElement> getElements(String locator, LocatorType type) {

		List<WebElement> elements = null;

		switch (type.toString()) {
		case "ID":
			System.out.println("Finding Elements with Id: " + locator);
			elements= driver.findElements(By.id(locator));	
			break;
		case "XPATH":
			System.out.println("Finding Elements with XPath: " + locator);
			elements= driver.findElements(By.xpath(locator));	
			break;
		case "NAME":
			System.out.println("Finding Elements with Name: " + locator);
			elements= driver.findElements(By.name(locator));	
			break;
			
		default:
			break;
		}
		return elements;
	}

	
	public void hoverOnElement(WebElement element) {
		Actions action = new Actions(driver); 
        action.moveToElement(element).build().perform();
	}
	
	public static void waitForPageToLoad() {
		WebDriverWait wait = new WebDriverWait(driver, 30);
	    wait.until(new ExpectedCondition<Boolean>() {
	        public Boolean apply(WebDriver wdriver) {
	            return ((JavascriptExecutor) driver).executeScript(
	                "return document.readyState"
	            ).equals("complete");
	        }
	    });		
	}
	
	public static void waitForElementToAppear(WebElement element){	
		WebDriverWait wait = new WebDriverWait(driver, 120);
	    wait.until(ExpectedConditions.visibilityOf(element));	
	}
}
