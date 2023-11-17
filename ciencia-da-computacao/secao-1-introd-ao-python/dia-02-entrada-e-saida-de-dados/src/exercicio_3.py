import random

MAX_ATTEMPTS = 3


def read_words_from_file(file_path):
    try:
        with open(file_path, "r") as file:
            words = file.readlines()
    except FileNotFoundError:
        raise Exception(f"File {file_path} not found")
    return words


def draw_secret_word(words):
    secret_word = random.choice(words)
    scrambled_word = "".join(random.sample(secret_word, len(secret_word)))
    return secret_word, scrambled_word


def collect_guesses():
    guesses = []
    for attempt in range(MAX_ATTEMPTS):
        guess = input("Guess the word: ")
        guesses.append(guess)
    return guesses


def check_game_result(secret_word, guesses):
    if secret_word in guesses:
        print(f"You win: {secret_word}")
    else:
        print(f"You lose: {secret_word}")


if __name__ == "__main__":
    WORDS_WITH_N = read_words_from_file("words.txt")
    # compreensão de lista para percorrer a lista
    # original e strip para remover o \n
    WORDS = [word.strip() for word in WORDS_WITH_N]
    print(WORDS)
    secret_word, scrambled_word = draw_secret_word(WORDS)
    print(f"Scrambled word is {scrambled_word}")
    guesses = collect_guesses()
    check_game_result(secret_word, guesses)
