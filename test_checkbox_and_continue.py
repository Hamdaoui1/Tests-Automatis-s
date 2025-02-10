from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException
import time

def run_test_checkbox_and_continue():
    driver = webdriver.Chrome()
    driver.maximize_window()

    try:
        # Charger la page
        driver.get("https://connect.algoan.com/v2/init?client_id=030d0c7dfcfdcfcc135c6cf5&redirect_uri=https://dashboard.algoan.com")
        print("Test de la case à cocher et du bouton 'Continuer vers le choix de la banque'...")

        try:
            # Attendre que la case à cocher soit présente
            checkbox = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.XPATH, "//input[@type='checkbox']"))
            )
            driver.execute_script("arguments[0].click();", checkbox)  # Cliquer sur la case à cocher avec JavaScript
            print("✅ Case à cocher sélectionnée via JavaScript.")

            # Attendre que le bouton "Continuer vers le choix de la banque" soit cliquable
            continue_button = WebDriverWait(driver, 10).until(
                EC.element_to_be_clickable((By.XPATH, "//button[@aria-label='Continuer vers le choix de la banque']"))
            )
            time.sleep(2)  # Pause pour s'assurer que le bouton devient actif
            continue_button.click()  # Cliquer sur le bouton
            print("✅ Bouton 'Continuer vers le choix de la banque' cliqué avec succès.")

            # Attendre 5 secondes pour observer la page après le clic
            time.sleep(5)
        except TimeoutException:
            print("❌ Test échoué : La case à cocher ou le bouton 'Continuer vers le choix de la banque' n'ont pas fonctionné.")
    except Exception as e:
        print(f"Erreur inattendue : {e}")
    finally:
        driver.quit()

if __name__ == "__main__":
    run_test_checkbox_and_continue()
