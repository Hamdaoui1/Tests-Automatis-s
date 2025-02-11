import { chromium } from 'playwright';

export async function runTestSidebar() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    try {
        // Charger la page principale
        await page.goto("https://connect.algoan.com/v2/init?client_id=030d0c7dfcfdcfcc135c6cf5&redirect_uri=https://dashboard.algoan.com");
        console.log("Test du lien 'En savoir plus' (barre latérale)...");
        await page.waitForTimeout(2000);

        // Identifier le lien "En savoir plus" dans la barre latérale
        const sidebarLink = await page.waitForSelector("//a[contains(text(),'En savoir plus')]");
        console.log("✅ Lien 'En savoir plus' trouvé. Tentative de clic...");
        await sidebarLink.scrollIntoViewIfNeeded(); // S'assure que l'élément est visible
        await page.waitForTimeout(2000);
        await sidebarLink.click();

        // Attendre qu'un nouvel onglet s'ouvre
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            page.waitForTimeout(2000)
        ]);

        if (!newPage) {
            throw new Error("❌ L'onglet ne s'est pas ouvert correctement.");
        }
        console.log("✅ Nouvel onglet détecté. Changement d'onglet...");
        await newPage.waitForLoadState();
        console.log(`URL actuelle dans le nouvel onglet : ${newPage.url()}`);
        await page.waitForTimeout(2000);

        // Vérifier que l'URL cible est atteinte
        if (!newPage.url().includes("faq#security")) {
            throw new Error("Redirection incorrecte ou URL inattendue.");
        }
        console.log("✅ Test réussi : la page de la FAQ 'En savoir plus' (barre latérale) s'est ouverte correctement.");

        // Fermer l'onglet de la FAQ et revenir à la fenêtre principale
        await newPage.close();
        console.log("✅ Onglet de la FAQ fermé.");
        await page.bringToFront();
        await page.waitForTimeout(2000);
        console.log("✅ Retour à l'onglet principal effectué.");
    } catch (error) {
        console.error("❌ Test échoué : impossible de détecter ou cliquer sur le lien 'En savoir plus' (barre latérale).", error);
    } finally {
        await browser.close();
    }
}

if (require.main === module) {
    runTestSidebar();
}