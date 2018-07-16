package com.quandoo.pagelib;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;

import com.quandoo.genericlib.QuandooSelenium;

public class LoginPage extends QuandooSelenium{
	
	@FindBy(id = "username")
	public WebElement username;
	
	@FindBy(id = "password")
	public WebElement password;
	
	@FindBy(xpath = "//form[@id='login']//button")
	public WebElement loginButton;
	
	@FindBy(xpath = "//div[@id='flash-messages']/div")
	public WebElement flashMessage;
	
	public LoginPage() {           
		PageFactory.initElements(new AjaxElementLocatorFactory(driver, 20), this);
		}
	
	public void enterUsername(String username) {
		this.username.sendKeys(username);
	}
	
	public void enterPassword(String password) {
		this.password.sendKeys(password);
	}
	
	public void clickLoginButton() {
		this.loginButton.click();
	}
	
	public void performLogin(String username, String password) {
		enterUsername(username);
		enterPassword(password);
		clickLoginButton();
	}
	
	public String getFLashMessage() {
		waitForElementToAppear(this.flashMessage);
		return this.flashMessage.getText();
	}
}
