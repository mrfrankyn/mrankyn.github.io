document.querySelectorAll('.catalog__tab').forEach((item) =>
    item.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelectorAll('.catalog__tab').forEach(
            (child) => child.classList.remove('catalog_active')
        );

        item.classList.add('catalog_active');
        document.getElementById(id).classList.add('.catalog__tab');
     })
);