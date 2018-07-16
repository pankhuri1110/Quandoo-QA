package com.quandoo.pagelib;

import com.quandoo.genericlib.QuandooSelenium;

public class HoverPage extends QuandooSelenium{
	
	public void perfromHover(String avatar) {
	hoverOnElement(getElement("//div[@class='figure'][" + avatar + "]", LocatorType.XPATH));
	}
	
	public boolean isUsernameVisible(String username) {
		return getElement("//div[@class='figcaption']/h5[text()='" + username + "']", LocatorType.XPATH).isDisplayed();
	}

}
