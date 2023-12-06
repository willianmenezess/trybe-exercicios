from jinja2 import Template


# Crie uma função que recebe uma lista de nomes e usa o Jinja2 para
# renderizar um template que exiba todos os nomes em uma lista numerada.
def renderizar_nomes(nomes):
    # carregando o template diretamente, sem um loader
    template = Template("{% for nome in nomes %}Olá {{ nome }}!\n{% endfor %}")
    resultado = template.render(nomes=nomes)
    print(resultado)


nomes = ["João", "Maria", "José"]
renderizar_nomes(nomes)
