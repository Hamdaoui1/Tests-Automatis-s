from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

def run_full_test_refuse():
    driver = webdriver.Chrome()
    driver.maximize_window()

    try:
        # Charger la page initiale
        driver.get("https://connect.algoan.com/v2/init?client_id=030d0c7dfcfdcfcc135c6cf5&redirect_uri=https://dashboard.algoan.com")
        print("Test du processus complet...")

        # Coche la case
        checkbox = WebDriverWait(driver, 10).until(
            EC.presence_of_element_located((By.XPATH, "//input[@type='checkbox']"))
        )
        driver.execute_script("arguments[0].click();", checkbox)
        print("✅ Case à cocher sélectionnée via JavaScript.")

        # Cliquez sur le bouton "Continuer vers le choix de la banque"
        continue_button = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, "//button[@aria-label='Continuer vers le choix de la banque']"))
        )
        time.sleep(2)
        continue_button.click()
        print("✅ Bouton 'Continuer vers le choix de la banque' cliqué avec succès.")

        # Sélectionnez "Algoan Bank"
        algoan_bank = WebDriverWait(driver, 10).until(
            EC.element_to_be_clickable((By.XPATH, "//div[@aria-label='Algoan Bank']"))
        )
        algoan_bank.click()
        print("✅ 'Algoan Bank' sélectionné.")
    
        time.sleep(2)
        # Cliquez sur "Poursuivre sur cet appareil"
        try:
            continue_on_device = WebDriverWait(driver, 10).until(
                EC.element_to_be_clickable((By.XPATH, "//button[@data-testid='connection-with-qr-code-button']"))
            )
            continue_on_device.click()
            print("✅ 'Poursuivre sur cet appareil' cliqué.")
        except TimeoutException:
            print("❌ Erreur : Le bouton 'Poursuivre sur cet appareil' n'a pas été trouvé ou cliqué.")
        time.sleep(2)
        # Cliquez sur "J’ai compris"
        try:
            i_understand = WebDriverWait(driver, 10).until(
                EC.element_to_be_clickable((By.XPATH, "//button[@data-testid='bank-redirection-button']"))
            )
            i_understand.click()
            print("✅ Bouton 'J’ai compris' cliqué.")
        except TimeoutException:
            print("❌ Erreur : Le bouton 'J’ai compris' n'a pas été trouvé ou cliqué.")
        time.sleep(2)

        # Cliquez sur "Admin"
        try:
            admin_button = WebDriverWait(driver, 10).until(
                EC.element_to_be_clickable((By.XPATH, "//button[contains(@class, 'sc-jwIPbr')]/div[contains(text(), 'Admin')]"))
            )
            admin_button.click()
            print("✅ Bouton 'Admin' cliqué.")
        except TimeoutException:
            print("❌ Erreur : Le bouton 'Admin' n'a pas été trouvé ou cliqué.")

        time.sleep(2)
        # Cliquez sur "Connecter la banque"
        try:
            connect_bank_button = WebDriverWait(driver, 10).until(
                EC.element_to_be_clickable((By.XPATH, "//button[contains(@class, 'sc-jwIPbr') and contains(@class, 'sc-drVZOg')]/div[contains(text(), 'Connecter la banque')]"))
            )
            connect_bank_button.click()
            print("✅ Bouton 'Connecter la banque' cliqué.")
        except TimeoutException:
            print("❌ Erreur : Le bouton 'Connecter la banque' n'a pas été trouvé ou cliqué.")
        time.sleep(2)
        # Sélectionnez le profil "Score élevé"
        try:
            high_score_profile = WebDriverWait(driver, 10).until(
                EC.element_to_be_clickable((By.XPATH, "//h3[contains(text(), 'Score élevé')]"))
            )
            high_score_profile.click()
            print("✅ Profil 'Score élevé' sélectionné.")
        except TimeoutException:
            print("❌ Erreur : Impossible de sélectionner le profil 'Score élevé'.")

        time.sleep(2)
        # Cliquez sur "Connecter la banque"
        try:
            connect_bank_button = WebDriverWait(driver, 15).until(
                EC.element_to_be_clickable((By.XPATH, "//button[div[contains(text(), 'Connecter la banque')]]"))
            )
            connect_bank_button.click()
            print("✅ Bouton 'Connecter la banque' cliqué.")
        except TimeoutException:
            print("❌ Erreur : Impossible de cliquer sur 'Connecter la banque'.")
        time.sleep(2)
        # Cliquez sur "Refuser"
        try:
            refuse_button = WebDriverWait(driver, 15).until(
                EC.element_to_be_clickable((By.XPATH, "//button[div[contains(text(), 'Refuser')]]"))
            )
            refuse_button.click()
            print("✅ Bouton 'Refuser' cliqué.")
        except TimeoutException:
            print("❌ Erreur : Impossible de cliquer sur 'Refuser'.")

        time.sleep(2)
        # Cliquez sur "Poursuivre vers QA Prod Groov"
        try:
            qa_prod_button = WebDriverWait(driver, 15).until(
                EC.element_to_be_clickable((By.XPATH, "//button[div[contains(text(), 'Poursuivre vers QA Prod Groov')]]"))
            )
            qa_prod_button.click()
            print("✅ Bouton 'Poursuivre vers QA Prod Groov' cliqué.")
        except TimeoutException:
            print("❌ Erreur : Impossible de cliquer sur 'Poursuivre vers QA Prod Groov'.")
        time.sleep(2)
    except Exception as e:
        print(f"❌ Une erreur est survenue : {e}")
    finally:
        driver.quit()

if __name__ == "__main__":
    run_full_test_refuse()
