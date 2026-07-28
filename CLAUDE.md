# Project Context: Kanaria Developers Website

## Περιγραφή
Η Kanaria Developers είναι μια εταιρεία ανάπτυξης ακινήτων (real estate development). Το website πρέπει να αποπνέει πολυτέλεια, μινιμαλισμό και υψηλή αισθητική. Το design βασίζεται σε σκούρα χρώματα (dark theme), κομψές τυπογραφίες (Serif για τίτλους, Sans-Serif για κείμενα) και καθαρές γραμμές.

## Tech Stack
*   **Framework:** Next.js (App Router)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Animations:** Framer Motion
*   **Components:** React Server Components (όπου είναι εφικτό) και Client Components (`"use client"`) μόνο όταν απαιτείται state, interactivity ή animations.

## Coding Standards & Best Practices
1.  **Φάκελοι:** Όλος ο κώδικας βρίσκεται μέσα στο `src/`.
2.  **Tailwind:** Χρησιμοποιούμε semantic HTML tags (`<section>`, `<article>`, `<nav>`) και αποφεύγουμε τα περιττά `<div>`.
3.  **Responsive Design:** Όλα τα components πρέπει να είναι mobile-first. Ξεκινάμε με το default styling (για κινητά) και προσθέτουμε breakpoints (`md:`, `lg:`) για μεγαλύτερες οθόνες.
4.  **Εικόνες:** Χρησιμοποιούμε πάντα το `next/image` (`<Image />`) για βελτιστοποίηση (WebP, lazy loading) και αποφεύγουμε το απλό `<img>`.
5.  **Clean Code:** Μικρά, επαναχρησιμοποιήσιμα components. Αποφεύγουμε τα τεράστια αρχεία. Αν ένα αρχείο ξεπερνά τις 150-200 γραμμές, πιθανότατα πρέπει να σπάσει σε μικρότερα components.
6.  **Framer Motion:** Κάθε αρχείο/component που κάνει import το `motion` πρέπει υποχρεωτικά να έχει την οδηγία `"use client";` στην πρώτη γραμμή του, καθώς τα animations απαιτούν πρόσβαση στο DOM.

## UI/UX Κατευθυντήριες
*   **Χρώματα:** Το background είναι σκούρο (π.χ. `#121212`) και τα κείμενα λευκά/off-white για ισχυρό contrast.
*   **Animations:** Πρέπει να είναι διακριτικά, αργά και κομψά (π.χ. `duration: 0.8` ή μεγαλύτερο για μεγάλα τμήματα). Προτιμάμε ομαλά fade-ins (`opacity: 0` σε `opacity: 1`) και ελαφριά κάθετη κίνηση (`y: 20` σε `y: 0`). Αποφεύγουμε τα γρήγορα, απότομα και "θορυβώδη" εφέ για να διατηρήσουμε την premium, luxury αίσθηση του real estate brand.