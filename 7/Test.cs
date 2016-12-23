using System;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;

namespace selenium_tests
{
	[TestFixture]
	public class SubItemsTest
	{
		private IWebDriver driver;

		[SetUp]
		public void start()
		{
			driver = new ChromeDriver();
			driver.Manage().Timeouts().ImplicitlyWait(TimeSpan.FromSeconds(10));
		}

		[Test]
		public void MainTest ()
		{
			driver.Url = "http://localhost/litecart/admin/";
			
			driver.FindElement(By.Name("username")).SendKeys("admin");
			driver.FindElement(By.Name("password")).SendKeys("admin");
			
			driver.FindElement(By.Name("login")).Click();		
			
			By by_ForMainItems=By.Id("app-");
			By by_ForSubItems=By.CssSelector("[id*=doc]");
			
			int countItems=driver.FindElements(by_ForMainItems).Count;
			
			for (int i = 0; i < countItems; i++) {
				
				var items=driver.FindElements(by_ForMainItems);//Получаем все пункты меню
				Console.WriteLine("Главный пункт: "+items[i].Text);
				items[i].Click();//кликаем iтый элемент (то есть следующий)
				
				int countSubItems=driver.FindElements(by_ForSubItems).Count;
				
				for (int j = 0; j < countSubItems; j++) {
					var subItems=driver.FindElements(by_ForSubItems);
					Console.WriteLine(subItems[j].Text);
					subItems[j].Click();
					
					Assert.True(driver.FindElements(By.CssSelector("h1")).Count==1);					
					
				}			
				
			}
		}

		[TearDown]
		public void stop()
		{
			driver.Quit();
			driver = null;
		}
	}
}