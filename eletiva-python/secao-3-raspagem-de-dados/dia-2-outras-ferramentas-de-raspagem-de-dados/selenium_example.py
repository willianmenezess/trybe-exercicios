# importação do webdriver, que é o que possibilita a implementação para todos
# os principais navegadores da web
from selenium import webdriver
# Importa teclas comuns do teclado
from selenium.webdriver.common.keys import Keys


# Especifique o caminho para o perfil do Firefox
firefox_profile_path = (
    '/home/pc/snap/firefox/common/.mozilla/firefox/gk81b50v.willian')
firefox_options = webdriver.FirefoxOptions()
firefox_options.add_argument(f'--profile={firefox_profile_path}')

# criação de uma instância de navegador utilizando o Firefox
firefox = webdriver.Firefox(options=firefox_options)

# requisições para essa instância criada utilizando o método `get`
response = firefox.get("https://www.google.com.br/")

# pesquisa na instância aberta do navegador pela primeira ocorrência
# do nome 'q'
search_input = firefox.find_element("name", "q")

# escreve selenium dentro do campo de pesquisa
search_input.send_keys("selenium")

# pressiona enter para realizar a busca
search_input.send_keys(Keys.ENTER)
