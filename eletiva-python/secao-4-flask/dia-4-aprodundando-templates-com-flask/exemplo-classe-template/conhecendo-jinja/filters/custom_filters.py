# criando filtros customizados
from datetime import datetime


def convert_date(date):
    data_obj = datetime.strptime(date, "%Y-%m-%d")
    return data_obj.strftime("%d/%m/%Y")


# filtro que terá mais de um parâmetro
def replace_text(string, old_text, new_text):
    return string.replace(old_text, new_text)
