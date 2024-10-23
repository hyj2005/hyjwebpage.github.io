document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const iframe = document.getElementById('contentFrame');
        iframe.src = this.href;
    });
});

window.addEventListener('DOMContentLoaded', function() {
    var headerHeight = document.querySelector('header').offsetHeight;
    var iframe = document.querySelector('iframe');
    iframe.style.marginTop = headerHeight + 'px';
});
