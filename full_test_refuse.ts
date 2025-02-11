import { chromium } from 'playwright';

export async function runFullTestRefuse() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
        // Charger la page initiale
        await page.goto("https://connect.algoan.com/v2/init?client_id=030d0c7dfcfdcfcc135c6cf5&redirect_uri=https://dashboard.algoan.com");
        console.log("Test du processus complet...");
        await page.waitForTimeout(2000);

        // Coche la case
        const checkbox = await page.waitForSelector("//input[@type='checkbox']", { timeout: 10000 });
        await page.waitForTimeout(2000);
        await checkbox.click();
        console.log("✅ Case à cocher sélectionnée.");
        await page.waitForTimeout(2000);

        // Cliquez sur le bouton "Continuer vers le choix de la banque"
        const continueButton = await page.waitForSelector("//button[@aria-label='Continuer vers le choix de la banque']", { timeout: 10000 });
        await page.waitForTimeout(2000);
        await continueButton.click();
        console.log("✅ Bouton 'Continuer vers le choix de la banque' cliqué avec succès.");
        await page.waitForTimeout(2000);

        // Sélectionnez "Algoan Bank"
        const algoanBank = await page.waitForSelector("//div[@aria-label='Algoan Bank']", { timeout: 10000 });
        await algoanBank.click();
        console.log("✅ 'Algoan Bank' sélectionné.");
        await page.waitForTimeout(2000);

        // Cliquez sur "Poursuivre sur cet appareil"
        const continueOnDevice = await page.waitForSelector("//button[@data-testid='connection-with-qr-code-button']", { timeout: 10000 });
        await continueOnDevice.click();
        console.log("✅ 'Poursuivre sur cet appareil' cliqué.");
        await page.waitForTimeout(2000);

        // Cliquez sur "J’ai compris"
        const iUnderstand = await page.waitForSelector("//button[@data-testid='bank-redirection-button']", { timeout: 10000 });
        await iUnderstand.click();
        console.log("✅ Bouton 'J’ai compris' cliqué.");
        await page.waitForTimeout(2000);

        // Cliquez sur "Admin"
        const adminButton = await page.waitForSelector("//button[div[contains(text(), 'Admin')]]", { timeout: 10000 });
        await adminButton.click();
        console.log("✅ Bouton 'Admin' cliqué.");
        await page.waitForTimeout(2000);

        // Cliquez sur "Connecter la banque"
        const connectBankButton = await page.waitForSelector("//button[div[contains(text(), 'Connecter la banque')]]", { timeout: 10000 });
        await connectBankButton.click();
        console.log("✅ Bouton 'Connecter la banque' cliqué.");
        await page.waitForTimeout(2000);

        // Sélectionnez le profil "Score élevé"
        const highScoreProfile = await page.waitForSelector("//h3[contains(text(), 'Score élevé')]", { timeout: 10000 });
        await highScoreProfile.click();
        console.log("✅ Profil 'Score élevé' sélectionné.");
        await page.waitForTimeout(2000);

        // Cliquez sur "Connecter la banque pour la deuxième fois"
        const connectBankButton2 = await page.waitForSelector("//button[div[contains(text(), 'Connecter la banque')]]", { timeout: 10000 });
        await connectBankButton2.click();
        console.log("✅ Bouton 'Connecter la banque' cliqué.");
        await page.waitForTimeout(2000);

        // Cliquez sur "Refuser"
        const refuseButton = await page.waitForSelector("//button[div[contains(text(), 'Refuser')]]", { timeout: 10000 });
        await refuseButton.click();
        console.log("✅ Bouton 'Refuser' cliqué.");
        await page.waitForTimeout(2000);

        // Cliquez sur "Poursuivre vers QA Prod Groov"
        const qaProdButton = await page.waitForSelector("//button[div[contains(text(), 'Poursuivre vers QA Prod Groov')]]", { timeout: 10000 });
        await qaProdButton.click();
        console.log("✅ Bouton 'Poursuivre vers QA Prod Groov' cliqué.");
        await page.waitForTimeout(2000);
    } catch (error) {
        console.error("❌ Une erreur est survenue :", error);
    } finally {
        await browser.close();
    }
}

if (require.main === module) {
    runFullTestRefuse();
}
