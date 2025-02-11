import { chromium } from 'playwright';

export async function runTestCheckboxAndContinue() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
        // Charger la page
        await page.goto("https://connect.algoan.com/v2/init?client_id=030d0c7dfcfdcfcc135c6cf5&redirect_uri=https://dashboard.algoan.com");
        console.log("Test de la case à cocher et du bouton 'Continuer vers le choix de la banque'...");
        await page.waitForTimeout(2000);

        // Attendre et cocher la case
        const checkbox = await page.waitForSelector("//input[@type='checkbox']", { timeout: 10000 });
        await page.waitForTimeout(2000);
        await checkbox.click();
        console.log("✅ Case à cocher sélectionnée.");
        await page.waitForTimeout(2000);

        // Attendre et cliquer sur le bouton "Continuer vers le choix de la banque"
        const continueButton = await page.waitForSelector("//button[@aria-label='Continuer vers le choix de la banque']", { timeout: 10000 });
        await page.waitForTimeout(2000);
        await continueButton.click();
        console.log("✅ Bouton 'Continuer vers le choix de la banque' cliqué avec succès.");
        await page.waitForTimeout(5000);
    } catch (error) {
        console.error("❌ Test échoué : La case à cocher ou le bouton 'Continuer vers le choix de la banque' n'ont pas fonctionné.", error);
    } finally {
        await browser.close();
    }
}

if (require.main === module) {
    runTestCheckboxAndContinue();
}
