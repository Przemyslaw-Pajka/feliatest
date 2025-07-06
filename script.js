document.querySelectorAll('.faq-new-list__item').forEach(faqItem => {
    faqItem.addEventListener('click',() => faqItem.classList.toggle('active'));
})