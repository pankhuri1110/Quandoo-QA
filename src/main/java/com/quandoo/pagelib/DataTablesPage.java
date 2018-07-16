package com.quandoo.pagelib;

import java.util.ArrayList;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.google.common.collect.Ordering;
import com.quandoo.genericlib.QuandooSelenium;

public class DataTablesPage extends QuandooSelenium {
	
	@FindBy(xpath = "//div[@class='figcaption']/h5")
	public WebElement username;
	
	public void sortWithColumn(String columnName, String sortingType) {
		if(sortingType.equals("DSC"))
			getElement("//table[@id='table2']//th//span[text()='" + columnName + "']", LocatorType.XPATH).click();
		getElement("//table[@id='table2']//th//span[text()='" + columnName + "']", LocatorType.XPATH).click();
	}
	
	public void verifySorting(String sortingType, String columnNumber) {
		ArrayList<WebElement> elements = (ArrayList<WebElement>) getElements("//table[@id='table2']//tbody//tr//td[" + columnNumber + "]", LocatorType.XPATH);
		ArrayList<String> texts = new ArrayList<String>();
		boolean sorted = false;
		for (int i = 0; i < elements.size(); i++) {
			texts.add(elements.get(i).getText());
		}
		if(sortingType.equals("ASC")) {
		     sorted = Ordering.natural().isOrdered(texts);
		}
		else {
			 sorted = Ordering.natural().reverse().isOrdered(texts);
		}
		Assert.assertTrue(sortingType + " sorting is failed", sorted);
	}
}
