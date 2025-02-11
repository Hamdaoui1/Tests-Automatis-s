import { chromium } from 'playwright';

export async function runTestListBanksWithSearch() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
        // Étape 1 : Accéder à la page principale
        await page.goto("https://connect.algoan.com/v2/init?client_id=030d0c7dfcfdcfcc135c6cf5&redirect_uri=https://dashboard.algoan.com");
        console.log("Page chargée avec succès.");
        await page.waitForTimeout(2000);

        // Étape 2 : Sélectionner la case à cocher et cliquer sur "Continuer vers le choix de la banque"
        console.log("Test de la case à cocher et du bouton 'Continuer vers le choix de la banque'...");
        const checkbox = await page.waitForSelector("//input[@type='checkbox']", { timeout: 10000 });
        await page.waitForTimeout(2000);
        await checkbox.click();
        console.log("✅ Case à cocher sélectionnée.");
        await page.waitForTimeout(2000);

        const continueButton = await page.waitForSelector("//button[contains(., 'Continuer vers le choix de la banque')]", { timeout: 10000 });
        await page.waitForTimeout(2000);
        await continueButton.click();
        console.log("✅ Bouton 'Continuer vers le choix de la banque' cliqué avec succès.");
        await page.waitForTimeout(5000);

        // Étape 3 : Récupérer toutes les banques avant la recherche
        console.log("Récupération de toutes les banques affichées avant la recherche...");
        let banksBefore = await page.$$eval("div[data-testid='suggested-banks'] div[aria-label]", banks => [...new Set(banks.map(bank => bank.getAttribute("aria-label")?.trim() || ""))]);
        console.log("✅ Banques affichées avant la recherche :", banksBefore);
        await page.waitForTimeout(2000);

        // Étape 4 : Saisir "re" dans le champ de recherche
        console.log("Test du champ de recherche...");
        const searchField = await page.waitForSelector("//input[@placeholder='Recherchez votre banque']", { timeout: 10000 });
        await page.waitForTimeout(2000);
        await searchField.fill("re");
        console.log("✅ Saisie 're' effectuée dans le champ de recherche.");
        await page.waitForTimeout(2000);

        // Étape 5 : Récupérer les nouvelles banques après la recherche
        console.log("Récupération des banques affichées après la recherche...");
        let banksAfter = await page.$$eval("div[data-testid='suggested-banks'] div[aria-label]", banks => [...new Set(banks.map(bank => bank.getAttribute("aria-label")?.trim() || ""))]);
        console.log("✅ Banques affichées après la recherche :", banksAfter);
        await page.waitForTimeout(2000);
    } catch (error) {
        console.error("❌ Test échoué :", error);
    } finally {
        await page.waitForTimeout(5000);
        await browser.close();
    }
}

if (require.main === module) {
    runTestListBanksWithSearch();
}
