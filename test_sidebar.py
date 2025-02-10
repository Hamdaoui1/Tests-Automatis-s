from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

def run_test_sidebar():
    # Initialisation du driver
    driver = webdriver.Chrome()
    driver.maximize_window()

    try:
        # Charger la page principale
        driver.get("https://connect.algoan.com/v2/init?client_id=030d0c7dfcfdcfcc135c6cf5&redirect_uri=https://dashboard.algoan.com")
        print("Test du lien 'En savoir plus' (barre latérale)...")

        try:
            # Identifier le lien "En savoir plus" dans la barre latérale
            sidebar_link = WebDriverWait(driver, 15).until(
                EC.element_to_be_clickable((By.XPATH, "//a[contains(text(),'En savoir plus')]"))
            )
            print("✅ Lien 'En savoir plus' trouvé. Tentative de clic...")
            sidebar_link.click()
            
            # Vérifier si un nouvel onglet s'ouvre
            WebDriverWait(driver, 15).until(EC.number_of_windows_to_be(2))
            print("✅ Nouvel onglet détecté. Changement d'onglet...")
            
            # Passer à la nouvelle fenêtre/onglet
            driver.switch_to.window(driver.window_handles[1])
            print(f"URL actuelle dans le nouvel onglet : {driver.current_url}")

            # Vérifier que l'URL cible est atteinte
            assert "faq#security" in driver.current_url, "Redirection incorrecte ou URL inattendue."
            print("✅ Test réussi : la page de la FAQ 'En savoir plus' (barre latérale) s'est ouverte correctement.")

            # Fermer l'onglet de la FAQ
            driver.close()
            driver.switch_to.window(driver.window_handles[0])
            print("✅ Retour à l'onglet principal effectué.")
        except TimeoutException:
            print("❌ Test échoué : impossible de détecter ou cliquer sur le lien 'En savoir plus' (barre latérale).")
    except Exception as e:
        print(f"Erreur inattendue : {e}")
    finally:
        # Fermer le navigateur
        driver.quit()

# Si ce fichier est exécuté directement
if __name__ == "__main__":
    run_test_sidebar()
