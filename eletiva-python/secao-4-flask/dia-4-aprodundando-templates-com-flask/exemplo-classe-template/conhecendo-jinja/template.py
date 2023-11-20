from jinja2 import Template

# # Carrega um template a partir de um arquivo
# o conteúdo do arquivo template.html é lido e fornecido à classe
# Template para criar uma instância do template.
template_file = open('template.html').read()
template = Template(template_file)

# # Cria um contexto
data = {
    'saudacao': 'Eu sou um template HTML',
    'informacao': (
        'E essa é uma das formas de se passar múltiplas informações'
        'para o template'),
    'contexto': 'Isso é possível através da criação de um contexto'
}

# # Renderiza o template com um contexto específico
output = template.render(data)

# # Imprime o resultado
print(output)
