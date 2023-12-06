import requests
from parsel import Selector

# Agora um desafio! Vá ao site
# https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags
# e recupere as imagens de todas as bandeiras.
URL_BASE = "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"
response = requests.get(URL_BASE)
selector = Selector(text=response.text)
flags_urls = selector.css(".thumb span a::attr(href)").getall()
for img_url in flags_urls:
    filename_with_file = img_url.split("/")[-1]
    filename = filename_with_file.split(":")[-1]
    image_detail = requests.get(f"https://en.wikipedia.org/{img_url}")
    image_selector = Selector(text=image_detail.text)
    full_image_url = image_selector.css(".fullImageLink a::attr(href)").get()
    image_content = requests.get(f"https:{full_image_url}").content

    # salva a imagem no diretório country_flags
    # wb = write binary => imagem é salva em binário
    with open(f"./country_flags/{filename}", "wb") as f:
        f.write(image_content)
