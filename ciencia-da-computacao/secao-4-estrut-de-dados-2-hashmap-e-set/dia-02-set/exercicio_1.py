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

    point_1 = max(conj_1.difference(conj_2))
    reductor_1 = min(conj_1.difference(conj_2))
    total_point_1 = point_1 - reductor_1

    point_2 = max(conj_2.difference(conj_1))
    reductor_2 = min(conj_2.difference(conj_1))
    total_point_2 = point_2 - reductor_2

    if total_point_1 > total_point_2:
        return player_1[0]
    else:
        return player_2[0]


if __name__ == "__main__":
    entrada = {
        "Clara": [0, 1, 5, 9, 10],
        "Marcos": [0, 2, 8, 9, 10]
    }
    print(blefe_game(entrada))  # Marcos
