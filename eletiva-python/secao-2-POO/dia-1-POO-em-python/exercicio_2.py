def found_elements(elements: list[str], target: str) -> list[str]:
    return [element for element in elements if element.startswith(target)]


if __name__ == "__main__":
    elements = ["avestruz", "jiboia", "", "anta", "elefante"]
    target = "a"
    print(found_elements(elements, target))
