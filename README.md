# **Projet de Tests Automatisés - Algoan Bank**

Ce projet contient des tests automatisés pour **Algoan Bank**, avec **deux branches distinctes** :
- **`main`** : Contient le code en **Python avec Selenium**.
- **`master`** : Contient le code en **TypeScript avec Playwright**.

---

## ** Branches du Projet**
### **1️⃣ `main` : Tests en Python avec Selenium**
Cette branche contient les scripts Python utilisant **Selenium** pour l'automatisation des tests.

#### **🔹 Prérequis :**
- Python 3.x
- Selenium WebDriver
- Chrome et ChromeDriver

#### **🔹 Installation des dépendances :**
```bash
pip install -r requirements.txt
```

#### **🔹 Exécution des tests :**
```bash
python main.py  # Exécute tous les tests
```
Ou pour un test spécifique :
```bash
python test_cgu.py
```

---

### **2️⃣ `master` : Tests en TypeScript avec Playwright**
Cette branche contient les scripts TypeScript utilisant **Playwright** pour l'automatisation.

#### **🔹 Prérequis :**
- Node.js (version 16 ou plus)
- Playwright installé

#### **🔹 Installation des dépendances :**
```bash
npm install
npx playwright install
```

#### **🔹 Exécution des tests :**
**Exécuter un test spécifique :**
```bash
npx ts-node test_cgu.ts
```

**Exécuter tous les tests avec `main.ts`**
```bash
npx ts-node main.ts
```


---

## **📝 Liste des Tests**
| **Fichier (Python - `main`)**        | **Fichier (TS - `master`)** | **Description** |
|--------------------------------------|-----------------------------|-----------------|
| `test_cgu.py`                        | `test_cgu.ts`               | Vérifie l'ouverture du lien **CGU** |
| `test_policy.py`                      | `test_policy.ts`            | Vérifie l'ouverture du lien **Politique de confidentialité** |
| `test_en_savoir_plus.py`              | `test_en_savoir_plus.ts`    | Vérifie le bouton "En savoir plus" principal |
| `test_sidebar.py`                     | `test_sidebar.ts`           | Vérifie le lien "En savoir plus" dans la barre latérale |
| `test_checkbox_and_continue.py`       | `test_checkbox.ts`          | Vérifie la case à cocher et le bouton "Continuer" |
| `test_search_bank.py`                 | `test_search_bank.ts`       | Teste la recherche et sélection des banques |
| `full_test.py`                        | `FullTest.ts`               | Exécute le processus complet d'authentification |
| `full_test_refuse_acces.py`           | `full_test_refuse.ts`       | Test du processus en refusant l'accès |

---

## ** Différences entre Selenium et Playwright**
| **Feature**            | **Selenium (Python - `main`)** | **Playwright (TS - `master`)** |
|----------------------|---------------------|-------------------|
| Exécution des tests | Plus lente | Plus rapide |
| Gestion des onglets | Complexe | Native et facile |
| Attente des éléments | Manuelle (`WebDriverWait`) | Automatique et optimisée |
| Support multi-navigateur | Oui | Oui |

---

## ** Support et Améliorations**
Si vous avez des questions ou des suggestions, n'hésitez pas à contribuer aux branches **`main`** et **`master`** ! 🚀

---

 **Bon test et happy coding !**

