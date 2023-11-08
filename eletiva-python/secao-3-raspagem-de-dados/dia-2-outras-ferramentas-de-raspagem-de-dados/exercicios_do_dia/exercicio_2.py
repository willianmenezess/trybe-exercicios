# Com o Selenium, Imprima todos os parágrafos da página
# https://www.wikimetal.com.br/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/.


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
    paragraphs = firefox.find_elements(By.TAG_NAME, "p")
    for paragraph in paragraphs:
        print(paragraph.text)


if __name__ == "__main__":
    url = (
        "https://www.wikimetal.com.br/iron-maiden-scorpions"
        "-kiss-veja-melhores-albuns-1982/")
    print(scrape(url))
