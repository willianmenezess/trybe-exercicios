# A nota de cada pessoa é o maior número que a outra pessoa não escolheu;
# O redutor é o menor numero que a outra pessoa não escolheu;
# A pontuação final é a nota de partida - redutor.

# clara = [0, 1, 5, 9, 10]
# nota de partida: 5
# redutor: 1
# pt: 4

# marco = [0, 2, 8, 9, 10]
# nota de partida: 8
# redutor: 2
# pt individual: 6

# Quem ganhou: Marco

def blefe_game(entrada: dict) -> str:  # complexidade O(n)
    """Recebe um dict com os nomes e números chutados e retorna quem ganhou"""
    players = []
    for key, value in entrada.items():
        player = (key, value)
        players.append(player)

    player_1 = players[0]
    player_2 = players[1]
    conj_1 = set(player_1[1])
    conj_2 = set(player_2[1])

    total_point_1 = calculate_total_point(conj_1, conj_2)

    total_point_2 = calculate_total_point(conj_2, conj_1)

    if total_point_1 > total_point_2:
        return f'{player_1[0]} ganhou!'
    elif total_point_1 < total_point_2:
        return f'{player_2[0]} ganhou!'
    else:
        return 'Deu empate!'


def calculate_total_point(conj, other_conj):
    point = max(conj.difference(other_conj))
    reductor = min(conj.difference(other_conj))
    total_point = point - reductor
    return total_point


if __name__ == "__main__":
    entrada = {
        "Clara": [0, 1, 5, 9, 10],
        "Marcos": [0, 2, 8, 9, 10]
    }
    print(blefe_game(entrada))  # Marcos
