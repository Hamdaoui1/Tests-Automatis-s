import { chromium } from 'playwright';

export async function runTestPolicy() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
        // Charger la page principale
        await page.goto("https://connect.algoan.com/v2/init?client_id=030d0c7dfcfdcfcc135c6cf5&redirect_uri=https://dashboard.algoan.com", { timeout: 10000 });
        console.log("Test du lien 'Politique de confidentialité'...");
        await page.waitForTimeout(2000);
        // Localiser le lien 'Politique de confidentialité' et cliquer dessus
        const policyLink = await page.waitForSelector("text=Politique de confidentialité", { timeout: 10000 });
        await page.waitForTimeout(2000);
        await policyLink.click();
        console.log("✅ Lien 'Politique de confidentialité' cliqué.");
        await page.waitForTimeout(2000);
        // Attendre que l'URL contienne "privacy-policy"
        await page.waitForURL(/privacy-policy/, { timeout: 10000 });
        console.log("✅ Redirection vers 'Politique de confidentialité' réussie.");
        await page.waitForTimeout(2000);
        // Vérifier que la page contient un élément clé (ex: titre h1)
        await page.waitForSelector("h1", { timeout: 10000 });
        console.log("✅ Contenu de la page Politique de confidentialité détecté.");
        await page.waitForTimeout(2000);
        // Retourner à la page principale
        await page.goBack();
        await page.waitForURL(/init/, { timeout: 10000 });
        console.log("✅ Retour à la page principale réussi.");
        await page.waitForTimeout(2000);
    } catch (error) {
        console.error("❌ Test du lien 'Politique de confidentialité' échoué :", error);
    } finally {
        await browser.close();
    }
}

if (require.main === module) {
    runTestPolicy();
}
