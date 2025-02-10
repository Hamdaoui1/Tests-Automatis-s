# **Projet de Tests Automatisés - Algoan Bank**

Ce projet contient des scripts Selenium automatisés permettant de tester diverses fonctionnalités de l'application de connexion et de sélection bancaire d'**Algoan Bank**.

---

## **📌 Prérequis**
Avant d'exécuter les tests, assurez-vous d'avoir installé les prérequis suivants :

### **1⃣ Installer les dépendances :**
#### a) Avec `pip` :
```bash
pip install -r requirements.txt
```
#### b) Avec `conda` (si vous utilisez Anaconda) :
```bash
conda env create -f environment.yml
conda activate selenium_env
```

### **2⃣ Vérifier l'installation de Chrome et WebDriver**
- Assurez-vous d'avoir **Google Chrome** installé sur votre machine.
- Téléchargez et placez **chromedriver** dans votre PATH. Vous pouvez obtenir la version correcte ici :  
  👉 [https://sites.google.com/chromium.org/driver/](https://sites.google.com/chromium.org/driver/)

---

## **📝 Liste des Tests**
Ce projet inclut plusieurs tests automatisés pour vérifier le bon fonctionnement de l'application.

| **Fichier de test**                  | **Description du test** |
|--------------------------------------|------------------------|
| `test_cgu.py`                        | Vérifie l'ouverture correcte du lien **CGU** |
| `test_policy.py`                      | Vérifie l'ouverture correcte du lien **Politique de confidentialité** |
| `test_en_savoir_plus.py`              | Vérifie le **bouton principal** "En savoir plus" |
| `test_sidebar.py`                     | Vérifie le lien "En savoir plus" dans la **barre latérale** |
| `test_checkbox_and_continue.py`       | Vérifie la case à cocher et le bouton "Continuer vers le choix de la banque" |
| `test_search_bank.py`                 | Teste la **barre de recherche** des banques |
| `full_test.py`                        | Effectue le **processus complet de connexion bancaire** |
| `full_test_refuse_acces.py`           | Test du processus en refusant l'accès à la banque |

---

## **🚀 Exécution des Tests**
### **1⃣ Exécuter un test individuel**
Vous pouvez exécuter chaque test indépendamment avec :
```bash
python test_cgu.py
```
ou
```bash
python test_search_bank.py
```

### **2⃣ Exécuter tous les tests en séquence**
Le fichier `main.py` exécute tous les tests dans l'ordre défini :
```bash
python main.py
```

---

## **📌 Processus de Test Automatisé**
Voici un aperçu des tests exécutés dans **`main.py`** :

1⃣ Test du lien **CGU**  
2⃣ Test du lien **Politique de confidentialité**  
3⃣ Test du bouton **"En savoir plus"** (principal)  
4⃣ Test du lien **"En savoir plus"** (barre latérale)  
5⃣ Test de la **case à cocher** et du bouton **"Continuer vers le choix de la banque"**  
6⃣ Test de la **recherche et de la sélection des banques**  
7⃣ Sélection de **"Algoan Bank"** et parcours du processus d'authentification  
8⃣ Sélection des options de **connexion et validation**  

---

## **🛠 Débogage**
Si un test échoue, vous pouvez :
- Vérifier les logs affichés dans le terminal.
- Augmenter le **temps d'attente** (`WebDriverWait(driver, 15)`) dans les fichiers de test si certains éléments prennent du temps à s'afficher.

---

## **💎 Support**
Si vous rencontrez des problèmes, contactez-moi pour toute question ou amélioration du projet.

---

🚀 **Bon test !**

