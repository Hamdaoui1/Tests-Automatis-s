from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException

def run_test_en_savoir_plus():
    driver = webdriver.Chrome()
    driver.maximize_window()

    try:
        driver.get("https://connect.algoan.com/v2/init?client_id=030d0c7dfcfdcfcc135c6cf5&redirect_uri=https://dashboard.algoan.com")
        print("Test du bouton principal 'En savoir plus'...")

        try:
            button = WebDriverWait(driver, 10).until(
                EC.element_to_be_clickable((By.XPATH, "//div[contains(text(), 'En savoir plus')]"))
            )
            button.click()
            WebDriverWait(driver, 10).until(
                EC.url_contains("welcome-page-details")
            )
            print("✅ Bouton principal 'En savoir plus' fonctionnel.")
        except TimeoutException:
            print("❌ Test échoué : le bouton principal 'En savoir plus' ou la redirection a échoué.")
    except Exception as e:
        print(f"Erreur inattendue : {e}")
    finally:
        driver.quit()
