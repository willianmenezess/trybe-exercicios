import requests
from parsel import Selector

URL_BASE = (
    "http://books.toscrape.com/catalogue/the-grand-design_405/index.html")
response = requests.get(URL_BASE)
selector = Selector(text=response.text)

# extração dos campos título, preço, descrição
# e url contendo a imagem de capa do livro:
title = selector.css(".product_main h1::text").get()
price = selector.css(
    ".product_main .price_color::text").re_first(r"£\d+\.\d{2}")
description = selector.css("#product_description ~ p::text").get()
suffix = "...more"
if description.endswith(suffix):
    description = description[: -len(suffix)]
image_url = URL_BASE + selector.css(".thumbnail img::attr(src)").get()
print(title, price, description, image_url)
