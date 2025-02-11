import { chromium } from 'playwright';

export async function runTestCGU() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
        // Charger la page principale
        await page.goto("https://connect.algoan.com/v2/init?client_id=030d0c7dfcfdcfcc135c6cf5&redirect_uri=https://dashboard.algoan.com");
        console.log("Test du lien 'CGU'...");
        await page.waitForTimeout(2000);
        // Localiser le lien 'CGU' et cliquer dessus
        const cguLink = await page.waitForSelector("text=CGU", { timeout: 10000 });
        await cguLink.click();
        console.log("✅ Lien 'CGU' cliqué.");
        await page.waitForTimeout(2000);
        // Attendre que l'URL contienne "terms-and-conditions"
        await page.waitForURL(/terms-and-conditions/, { timeout: 10000 });
        console.log("✅ Redirection vers 'CGU' réussie.");
        await page.waitForTimeout(2000);
        // Vérifier que la page chargée contient bien le texte attendu
        await page.waitForSelector("h1", { timeout: 10000 });  // Modifier si nécessaire
        console.log("✅ Contenu de la page CGU détecté.");
        // Retourner à la page principale
        await page.goBack();
        await page.waitForURL(/init/, { timeout: 10000 });
        console.log("✅ Retour à la page principale réussi.");
        await page.waitForTimeout(2000);
    } catch (error) {
        console.error("❌ Test du lien 'CGU' échoué :", error);
    } finally {
        await browser.close();
    }
}

// if (require.main === module) {
//     runTestCGU();
// }
