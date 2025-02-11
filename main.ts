import { runTestCGU } from './test_cgu';
import { runTestPolicy } from './test_policy';
import { runFullTest } from './FullTest';
import { runTestEnSavoirPlus } from './test_en_savoir_plus';
import { runTestSidebar } from './test_sidebar';
import { runTestCheckboxAndContinue } from './test_checkbox';
import { runTestListBanksWithSearch } from './test_search_bank';
import { runFullTestRefuse } from './full_test_refuse';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function afficherMenu(): void {
    console.log("\n===== MENU DES TESTS =====");
    console.log("1. Test du lien 'CGU'");
    console.log("2. Test du lien 'Politique de confidentialité'");
    console.log("3. Test du bouton principal 'En savoir plus'");
    console.log("4. Test du lien 'En savoir plus' (barre latérale)");
    console.log("5. Test de la case à cocher et du bouton 'Continuer vers le choix de la banque'");
    console.log("6. Test de la liste des banques avec champ de recherche");
    console.log("7. Test du processus complet de connexion et récupération des données");
    console.log("9. Test du processus complet de connexion et refus d'autorisation d'accès aux données");
    console.log("8. Exécuter tous les tests");
    console.log("0. Quitter");
}

async function main(): Promise<void> {
    while (true) {
        afficherMenu();

        const choix = await new Promise<string>((resolve) => {
            rl.question("Entrez le numéro du test à exécuter : ", resolve);
        });

        switch (choix) {
            case "1":
                console.log("\nÉtape 1 : Test du lien 'CGU'");
                await runTestCGU();
                break;
            case "2":
                console.log("\nÉtape 2 : Test du lien 'Politique de confidentialité'");
                await runTestPolicy();
                break;
            case "3":
                console.log("\nÉtape 3 : Test du bouton principal 'En savoir plus'");
                await runTestEnSavoirPlus();
                break;
            case "4":
                console.log("\nÉtape 4 : Test du lien 'En savoir plus' (barre latérale)");
                await runTestSidebar();
                break;
            case "5":
                console.log("\nÉtape 5 : Test de la case à cocher et du bouton 'Continuer vers le choix de la banque'");
                await runTestCheckboxAndContinue();
                break;
            case "6":
                console.log("\nÉtape 6 : Test de la liste des banques avec champ de recherche");
                await runTestListBanksWithSearch();
                break;
            case "7":
                console.log("\nÉtape 7 : Test du processus complet de connexion et récupération des données");
                await runFullTest();
                break;  
            case "8":
                console.log("\nÉtape 8 : Test du processus complet de connexion et refus d'autorisation d'accès aux données");
                await runFullTestRefuse();
                break;
            case "0":
                console.log("Programme terminé.");
                rl.close();
                return;
            default:
                console.log("⚠️ Choix invalide, veuillez entrer un numéro valide.");
        }
    }
}

main();
