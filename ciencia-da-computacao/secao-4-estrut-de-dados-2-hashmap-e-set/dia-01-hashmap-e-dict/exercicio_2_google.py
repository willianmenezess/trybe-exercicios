"""Uma certa empresa tem uma estrutura hierarquizada onde cada pessoa
reporta a uma única outra pessoa. Cada pessoa tem um score que é o total
de pessoas que estão abaixo dela, incluindo subordinados de seus subordinados,
além dela própria. Isso significa que uma pessoa que não tem nenhuma equipe
tem score 1. Uma pessoa com apenas um subordinado e esse subordinado não
tem equipe, tem score 2.

Escreva um método que calcule o score de uma determinada pessoa."""


def score(subordinates: dict, person: int) -> int:
    this_score = 1

    for subordinate in subordinates[person]:
        this_score += score(subordinates, subordinate)

    return this_score


if __name__ == "__main__":
    subordinates = {
        1: [2, 3],
        2: [4],
        3: [],
        4: [5, 6],
        5: [7],
        6: [],
        7: [],
    }
    print(score(subordinates, 1))
