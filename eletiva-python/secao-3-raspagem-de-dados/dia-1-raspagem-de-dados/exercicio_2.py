# from parsel import Selector
import requests

URL_BASE = "https://api.github.com/users"
response = requests.get(URL_BASE)
for user in response.json():
    print(user["login"], user["html_url"])
