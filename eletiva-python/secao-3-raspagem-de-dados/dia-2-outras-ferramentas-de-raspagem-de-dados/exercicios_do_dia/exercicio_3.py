# Com o Selenium, no site https://diolinux.com.br/
# faça a extração dos campos título e link para cada post da página inicial.


from selenium import webdriver
from selenium.webdriver.common.by import By

# Especifica o caminho para o perfil do Firefox
firefox_profile_path = (
    "/home/pc/snap/firefox/common/.mozilla/firefox/gk81b50v.willian")
firefox_options = webdriver.FirefoxOptions()
firefox_options.add_argument(f"--profile={firefox_profile_path}")

# criação de uma instância de navegador utilizando o Firefox
firefox = webdriver.Firefox(options=firefox_options)


def scrape(url):
    firefox.get(url)

    posts = []
    for post in firefox.find_elements(By.CLASS_NAME, "post-outer"):
        new_item = dict()
        new_item["title"] = (
            post.find_element(By.CLASS_NAME, "entry-title")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("innerHTML")
        )
        new_item["link"] = (
            post.find_element(By.CLASS_NAME, "entry-title")
            .find_element(By.TAG_NAME, "a")
            .get_attribute("href")
        )
        posts.append(new_item)
    return posts


if __name__ == "__main__":
    url = "https://diolinux.com.br/"
    print(scrape(url))
