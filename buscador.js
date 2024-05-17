document.addEventListener("DOMContentLoaded", function() {
    var keywordsList = document.getElementById('keywordsList');

    document.getElementById('searchInput').addEventListener('input', function() {
        var searchValue = this.value.toLowerCase().trim();
        
        if (searchValue === '') {
            keywordsList.style.display = 'none'; 
            return;
        }

        var lis = keywordsList.getElementsByTagName('li');
        
        Array.from(lis).forEach(function(li) {
            var keyword = li.textContent.toLowerCase();
            if (keyword.startsWith(searchValue)) {
                li.style.display = 'block'; 
            } else {
                li.style.display = 'none'; 
            }
        });

        keywordsList.style.display = 'block'; 
    });
});
