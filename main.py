from test_cgu import run_test_cgu
from test_policy import run_test_policy
from test_en_savoir_plus import run_test_en_savoir_plus
from test_sidebar import run_test_sidebar
from test_checkbox_and_continue import run_test_checkbox_and_continue
from test_search_bank import run_test_list_banks_with_search
from full_test import run_full_test
from full_test_refuse_acces import run_full_test_refuse

def afficher_menu():
    print("\n===== MENU DES TESTS =====")
    print("1. Test du lien 'CGU'")
    print("2. Test du lien 'Politique de confidentialité'")
    print("3. Test du bouton principal 'En savoir plus'")
    print("4. Test du lien 'En savoir plus' (barre latérale)")
    print("5. Test de la case à cocher et du bouton 'Continuer vers le choix de la banque'")
    print("6. Test de la liste des banques avec champ de recherche")
    print("7. Test du processus complet de connexion et récupération des données")
    print("9. Test du processus complet de connexion et refus d'autorisation d'accès aux données")
    print("8. Exécuter tous les tests")
    print("0. Quitter")
    
def main():
    while True:
        afficher_menu()
        choix = input("Entrez le numéro du test à exécuter : ")

        if choix == "1":
            print("\nÉtape 1 : Test du lien 'CGU'")
            run_test_cgu()
        
        elif choix == "2":
            print("\nÉtape 2 : Test du lien 'Politique de confidentialité'")
            run_test_policy()
        
        elif choix == "3":
            print("\nÉtape 3 : Test du bouton principal 'En savoir plus'")
            run_test_en_savoir_plus()
        
        elif choix == "4":
            print("\nÉtape 4 : Test du lien 'En savoir plus' (barre latérale)")
            run_test_sidebar()
        
        elif choix == "5":
            print("\nÉtape 5 : Test de la case à cocher et du bouton 'Continuer vers le choix de la banque'")
            run_test_checkbox_and_continue()
        
        elif choix == "6":
            print("\nÉtape 6 : Test de la liste des banques avec champ de recherche")
            run_test_list_banks_with_search()
        
        elif choix == "7":
            print("\nTest du processus complet de connexion et récupération des données")
            run_full_test()

        elif choix == "9":
            print("\nTest du processus complet de connexion et refus d'autorisation d'accès aux données")
            run_full_test_refuse()

        elif choix == "8":
            print("\nExécution de tous les tests en séquence...")
            run_test_cgu()
            run_test_policy()
            run_test_en_savoir_plus()
            run_test_sidebar()
            run_test_checkbox_and_continue()
            run_test_list_banks_with_search()
            run_full_test()
            print("\nTous les tests ont été exécutés.")

        elif choix == "0":
            print("Programme terminé.")
            break

        else:
            print("⚠️ Choix invalide, veuillez entrer un numéro valide.")

if __name__ == "__main__":
    main()
