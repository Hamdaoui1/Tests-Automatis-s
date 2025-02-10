from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

def run_test_policy():
    driver = webdriver.Chrome()
    driver.maximize_window()

    try:
        # Charger la page principale
        driver.get("https://connect.algoan.com/v2/init?client_id=030d0c7dfcfdcfcc135c6cf5&redirect_uri=https://dashboard.algoan.com")
        print("Test du lien 'Politique de confidentialité'...")

        try:
            # Localiser le lien 'Politique de confidentialité' et cliquer dessus
            policy_link = WebDriverWait(driver, 10).until(
                EC.element_to_be_clickable((By.LINK_TEXT, "Politique de confidentialité"))
            )
            policy_link.click()

            # Attendre que l'URL change pour correspondre à celle de la politique de confidentialité
            WebDriverWait(driver, 10).until(
                EC.url_contains("privacy-policy")
            )
            print("✅ Lien 'Politique de confidentialité' cliqué, redirection réussie.")

            # Retourner à la page principale
            driver.back()
            WebDriverWait(driver, 10).until(
                EC.url_contains("init")
            )
            print("✅ Retour à la page principale réussi.")
        except TimeoutException:
            print("❌ Test du lien 'Politique de confidentialité' échoué : la redirection ou le retour n'a pas fonctionné.")
    except Exception as e:
        print(f"Erreur inattendue : {e}")
    finally:
        driver.quit()

# Appeler la fonction pour exécuter le test
if __name__ == "__main__":
    run_test_policy()
