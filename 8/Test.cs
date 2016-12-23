using System;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using OpenQA.Selenium.Support.UI;

namespace selenium_tests
{
	[TestFixture]
	public class StickerTests
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
			driver.Url = "http://localhost/litecart/en/";
			
			var cards=driver.FindElements(By.CssSelector(".product"));
			
			for (int i = 0; i < cards.Count; i++) {
				var card = cards[i];
				var sticker=card.FindElements(By.CssSelector(".sticker"));
				
				Assert.True(sticker.Count==1, "Количество стикеров на карточке неверное: " + sticker.Count + " Ожидалось: " + 1);
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