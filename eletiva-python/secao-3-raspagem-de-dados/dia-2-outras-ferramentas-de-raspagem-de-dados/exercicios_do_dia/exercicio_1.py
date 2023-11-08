# Com o Selenium, faça uma requisição para o endpoint
# https://quotes.toscrape.com/ e imprima a primeira citação
# que aparece na página.


from selenium import webdriver
from selenium.webdriver.common.by import By

# Especifica o caminho para o perfil do Firefox
firefox_profile_path = (
    '/home/pc/snap/firefox/common/.mozilla/firefox/gk81b50v.willian')
firefox_options = webdriver.FirefoxOptions()
firefox_options.add_argument(f'--profile={firefox_profile_path}')

# criação de uma instância de navegador utilizando o Firefox
firefox = webdriver.Firefox(options=firefox_options)


def scrape(url):
    firefox.get(url)
    quote = firefox.find_element(By.CLASS_NAME, "text").text
    # firefox.find_element(By.CLASS_NAME, 'text').get_attribute('innerHTML')
    return quote


if __name__ == "__main__":
    url = "https://quotes.toscrape.com/"
    print(scrape(url))
