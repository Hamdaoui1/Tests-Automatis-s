from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import time

def run_test_list_banks_with_search():
    driver = webdriver.Chrome()
    driver.maximize_window()

    try:
        # Étape 1 : Accéder à la page principale
        driver.get("https://connect.algoan.com/v2/init?client_id=030d0c7dfcfdcfcc135c6cf5&redirect_uri=https://dashboard.algoan.com")
        print("Page chargée avec succès.")

        # Étape 2 : Sélectionner la case à cocher et cliquer sur "Continuer vers le choix de la banque"
        print("Test de la case à cocher et du bouton 'Continuer vers le choix de la banque'...")
        try:
            checkbox = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.XPATH, "//input[@type='checkbox']"))
            )
            driver.execute_script("arguments[0].click();", checkbox)
            print("✅ Case à cocher sélectionnée via JavaScript.")

            continue_button = WebDriverWait(driver, 10).until(
                EC.element_to_be_clickable((By.XPATH, "//button[contains(., 'Continuer vers le choix de la banque')]"))
            )
            driver.execute_script("arguments[0].click();", continue_button)
            print("✅ Bouton 'Continuer vers le choix de la banque' cliqué avec succès.")

            WebDriverWait(driver, 10).until(
                EC.url_contains("bank-selection")
            )
            print("✅ Redirection vers la page de sélection des banques réussie.")
        except TimeoutException:
            print("❌ Test échoué : La case à cocher ou le bouton 'Continuer vers le choix de la banque' n'ont pas fonctionné.")
            return

        # Étape 3 : Récupérer toutes les banques avant la recherche
        print("Récupération de toutes les banques affichées avant la recherche...")
        try:
            banks_before_search = WebDriverWait(driver, 10).until(
                EC.presence_of_all_elements_located((By.XPATH, "//div[@data-testid='suggested-banks']//div[@aria-label]"))
            )
            # Utiliser un ensemble (set) pour éliminer les doublons
            banks_before = list(set([bank.get_attribute("aria-label").strip() for bank in banks_before_search]))

            if banks_before:
                print("✅ Banques affichées avant la recherche :")
                for bank in banks_before:
                    print(f"  - {bank}")
            else:
                print("❌ Aucune banque trouvée avant la recherche.")
        except TimeoutException:
            print("❌ Test échoué : Impossible de récupérer les suggestions avant la recherche.")
            return

        # Étape 4 : Saisir "re" dans le champ de recherche
        print("Test du champ de recherche...")
        try:
            search_field = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.XPATH, "//input[@placeholder='Recherchez votre banque']"))
            )
            search_field.clear()
            search_field.send_keys("re")
            print("✅ Saisie 're' effectuée dans le champ de recherche.")

            time.sleep(2)  # Attente pour permettre le rafraîchissement des suggestions
        except TimeoutException:
            print("❌ Champ de recherche introuvable.")
            return

        # Étape 5 : Récupérer les nouvelles banques après la recherche
        print("Récupération des banques affichées après la recherche...")
        try:
            banks_after_search = WebDriverWait(driver, 10).until(
                EC.presence_of_all_elements_located((By.XPATH, "//div[@data-testid='suggested-banks']//div[@aria-label]"))
            )
            # Utiliser un ensemble (set) pour éliminer les doublons
            banks_after = list(set([bank.get_attribute("aria-label").strip() for bank in banks_after_search]))

            if banks_after:
                print("✅ Banques affichées après la recherche :")
                for bank in banks_after:
                    print(f"  - {bank}")
            else:
                print("❌ Aucune banque trouvée après la recherche.")
        except TimeoutException:
            print("❌ Test échoué : Impossible de récupérer les suggestions après la recherche.")
    except Exception as e:
        print(f"Erreur inattendue : {e}")
    finally:
        time.sleep(5)  # Pause pour vérifier la page avant fermeture
        driver.quit()

if __name__ == "__main__":
    run_test_list_banks_with_search()
