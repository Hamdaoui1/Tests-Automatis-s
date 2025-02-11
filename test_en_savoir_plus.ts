import { chromium } from 'playwright';

export async function runTestEnSavoirPlus() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
        // Charger la page principale
        await page.goto("https://connect.algoan.com/v2/init?client_id=030d0c7dfcfdcfcc135c6cf5&redirect_uri=https://dashboard.algoan.com");
        console.log("Test du bouton principal 'En savoir plus'...");
        await page.waitForTimeout(2000);

        // Localiser et cliquer sur le bouton 'En savoir plus' au milieu de la page
        const button = await page.waitForSelector("//div[contains(text(), 'En savoir plus') and not(ancestor::*[@aria-label='Sidebar'])]", { timeout: 10000 });
        await page.waitForTimeout(2000);
        await button.click();
        console.log("✅ Bouton 'En savoir plus' (au milieu de la page) cliqué.");
        await page.waitForTimeout(2000);

        // Attendre que l'URL contienne "welcome-page-details"
        await page.waitForURL(/welcome-page-details/, { timeout: 10000 });
        await page.waitForTimeout(2000);
        console.log("✅ Redirection vers 'En savoir plus' réussie.");
    } catch (error) {
        console.error("❌ Test échoué : le bouton 'En savoir plus' ou la redirection a échoué.", error);
    } finally {
        await browser.close();
    }
}

if (require.main === module) {
    runTestEnSavoirPlus();
}