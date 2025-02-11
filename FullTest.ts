import { chromium, Page } from 'playwright';

async function runFullTest() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
        // Charger la page initiale
        await page.goto("https://connect.algoan.com/v2/init?client_id=030d0c7dfcfdcfcc135c6cf5&redirect_uri=https://dashboard.algoan.com");
        console.log("Test du processus complet...");
        await page.waitForTimeout(2000);

        // Coche la case
        await page.waitForSelector("input[type='checkbox']");
        await page.click("input[type='checkbox']");
        console.log("✅ Case à cocher sélectionnée.");
        await page.waitForTimeout(2000);

        // Cliquez sur le bouton "Continuer vers le choix de la banque"
        await page.waitForSelector("button[aria-label='Continuer vers le choix de la banque']");
        await page.click("button[aria-label='Continuer vers le choix de la banque']");
        console.log("✅ Bouton 'Continuer vers le choix de la banque' cliqué.");
        await page.waitForTimeout(2000);

        // Sélectionnez "Algoan Bank"
        await page.waitForFunction(() => {
            const element = document.querySelector("div[aria-label='Algoan Bank']");
            return element  // Vérifie si l'élément est visible
        });
        await page.click("div[aria-label='Algoan Bank']");
        console.log("✅ 'Algoan Bank' sélectionné ");
       
        // Cliquez sur "Poursuivre sur cet appareil"
        await page.waitForSelector("button[data-testid='connection-with-qr-code-button']", { timeout: 5000 });
        await page.click("button[data-testid='connection-with-qr-code-button']");
        console.log("✅ 'Poursuivre sur cet appareil' cliqué.");
        await page.waitForTimeout(2000);

        // Cliquez sur "J’ai compris"
        await page.waitForSelector("button[data-testid='bank-redirection-button']", { timeout: 5000 });
        await page.click("button[data-testid='bank-redirection-button']");
        console.log("✅ Bouton 'J’ai compris' cliqué.");
        await page.waitForTimeout(2000);


        // Sélectionnez le profil "Score élevé"
        await page.waitForSelector("h3:has-text('Score élevé')");
        await page.click("h3:has-text('Score élevé')");
        console.log("✅ Profil 'Score élevé' sélectionné.");
        await page.waitForTimeout(2000);

        // Cliquez sur "Connecter la banque"
        await page.waitForSelector("button:has-text('Connecter la banque')");
        await page.click("button:has-text('Connecter la banque')");
        console.log("✅ Bouton 'Connecter la banque' cliqué.");
        await page.waitForTimeout(2000);

        // Cliquez sur "Autoriser l’accès"
        await page.waitForSelector("button:has-text('Autoriser l’accès')");
        await page.click("button:has-text('Autoriser l’accès')");
        console.log("✅ 'Autoriser l’accès' cliqué.");
        await page.waitForTimeout(2000);

        // Cliquez sur "Valider"
        await page.waitForSelector("button:has-text('Valider')");
        await page.click("button:has-text('Valider')");
        console.log("✅ Bouton 'Valider' cliqué.");
        await page.waitForTimeout(2000);

        //Cliquez sur "Poursuivre vers QA Prod Groov"
            await page.waitForSelector("button:has-text('Poursuivre vers QA Prod Groov')");
            await page.click("button:has-text('Poursuivre vers QA Prod Groov')");
            console.log("✅ Bouton 'Poursuivre vers QA Prod Groov' cliqué.");
            await page.waitForTimeout(2000);

       

    } catch (error) {
        console.error("❌ Une erreur est survenue :", error);
    } finally {
        await browser.close();
    }
}

export { runFullTest };
