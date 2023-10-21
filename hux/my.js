const contentData = [
    {
        title: "Modelo Osi",
        content: "O modelo “Open System Interconnection” é um modelo de camadas de rede criado in 1984 pela ISO ('International Organization for Standardization') para proporcionar a interconexão de sistemas abertos, visando a inoperabilidade do sistema em questão. <br /><br /> No modelo OSI, os protocolos são agrupados em 7 camadas, iniciando sempre pela camada inferior."
    },
    {
        title: "Aplicação",
        content: "Esta última camada é responsável pelo consumo dos dados, executando a interação humano-máquina por meio de uma série de protocolos necessários para os usuários. <br /><br /> Principais protocolos envolvidos: HTTP, FTP, DNS, entre outros."
    },
    // Add more data for other cards
];

function toggleActive(index) {
    const cards = document.querySelectorAll('.card-custom');
    cards.forEach(card => {
        card.classList.remove('active');
    });

    const selectedCard = document.querySelector(`.card-custom:nth-child(${index + 1})`);
    selectedCard.classList.add('active');

    const blockTitle = document.querySelector('.block-title');
    const blockContent = document.querySelector('.block-content');

    blockTitle.textContent = contentData[index].title;
    blockContent.innerHTML = contentData[index].content;
}

  $(function() {
     $(document).ready(function () {
// Apply the Maphilight plugin to the image map
$('img[usemap]').maphilight({
    fillColor: 'FFFFFF',  // Default fill color
    fillOpacity: 0.5,     // Default fill opacity (adjust as needed)
});

// Set different fill colors for specific areas
$('.area1').data('maphilight', { fillColor: 'FF0000', fade: true, stroke: false});
$('.area3').data('maphilight', { fillColor: '0000FF', fade: true, stroke: false });
$('.area4').data('maphilight', { fillColor: 'FFFF00', fade: true, stroke: false });
$('.area2').data('maphilight', { fillColor: '00FF00', fade: true, stroke: false });


// Initialize the maphilight plugin
$('img[usemap]').maphilight();

// Handle mouseover events to change fill color and opacity on hover
$('area[data-maphilight]').mouseover(function () {
    var areaFillColor = $(this).data('fillColor');
    if (areaFillColor) {
        $('img[usemap]').maphilight({
            fillColor: areaFillColor,
            fillOpacity: 0.5,
            toolTip: true,
        });
    }
});

// Handle mouseout events to reset fill color and opacity
$('area[data-maphilight]').mouseout(function () {
    $('img[usemap]').maphilight({
        fillColor: 'FFFFFF',  // Reset to default fill color
        fillOpacity: 0.5      // Reset to default fill opacity
    });
});
});

  });
  function scrollToSection(sectionId, offset) {
const section = document.getElementById(sectionId);

if (section) {
    const offsetPosition = section.offsetTop - offset;
    window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
    });
}
}

function lerMais() {
    var maisTexto = document.getElementById("more");
    var btnLerMais = document.getElementById("saibaMais");

    if (btnLerMais.innerHTML === "Saiba mais sobre a internet clicando aqui!") {
        maisTexto.style.display = "inline";
        btnLerMais.innerHTML = "Saiba menos sobre a internet clicando aqui 😢";
    } else {
        maisTexto.style.display = "none";
        btnLerMais.innerHTML = "Saiba mais sobre a internet clicando aqui!";
    }
}


  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))