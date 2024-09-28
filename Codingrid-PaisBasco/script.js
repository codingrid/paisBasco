// Inicializar o mapa
var map = L.map('map').setView([43.263, -2.935], 8); // Coordenadas para Bilbao, Espanha

// Adicionar camada do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Adicionar marcadores ao mapa
var markers = [
    { lat: 43.322, lng: -1.985, title: "San Sebastián" },
    { lat: 43.268, lng: -2.933, title: "Museu Guggenheim" },
    { lat: 43.444, lng: -2.785, title: "San Juan de Gaztelugatxe" }
];

markers.forEach(function(marker) {
    L.marker([marker.lat, marker.lng]).addTo(map)
        .bindPopup(marker.title)
        .openPopup();
});
// Função para lidar com o envio do comentário
document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir o comportamento padrão do formulário

    // Capturar o valor do campo de comentário
    var commentInput = document.getElementById('comment-input');
    var commentText = commentInput.value;

    if (commentText.trim() !== "") {
        // Criar um novo elemento de comentário
        var commentSection = document.getElementById('comment-section');
        var newComment = document.createElement('div');
        newComment.classList.add('comment');

        // Adicionar o conteúdo do comentário
        newComment.innerHTML = `
            <p>${commentText}</p>
            <span>Comentário Adicionado!</span>
        `;

        // Adicionar o novo comentário à seção de comentários
        commentSection.appendChild(newComment);

        // Limpar o campo de entrada de comentário
        commentInput.value = "";
    } else {
        alert("O comentário não pode estar vazio.");
    }
});
