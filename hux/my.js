const contentData = [
    {
        title: "Modelo Osi",
        content: "O modelo “Open System Interconnection” é um modelo de camadas de rede criado in 1984 pela ISO ('International Organization for Standardization') para proporcionar a interconexão de sistemas abertos, visando a inoperabilidade do sistema em questão.<br/><br/>No modelo OSI, os protocolos são agrupados em 7 camadas, iniciando sempre pela camada inferior."
    },
    {
        title: "Aplicação",
        content: "Esta última camada é responsável pelo consumo dos dados, executando a interação humano-máquina por meio de uma série de protocolos necessários para os usuários.<br/><br/>Principais protocolos envolvidos: HTTP, FTP, DNS, entre outros."
    },
    {
        title: "Apresentação",
        content: "Além de gerenciar estruturas de dados abstratas, a camada de Apresentação utiliza protocolos para realizar a tradução e criptografia de dados das informações transmitidas, mantendo o foco na sintaxe e na semântica da rede. "
    },
    {
        title: "Sessão",
        content: "Permite que os usuários realizem uma comunicação entre duas máquinas, além de proporcionar a sincronização de dados, o controle de diálogo e o gerenciamento de tokens – aumentando a eficiência da transmissão de dados.<br/><br/>Nesta camada, os protocolos dividem-se em: estabelecimento, gerenciamento e encerramento da sessão. "
    },
    {
        title: "Transporte",
        content: "Como o próprio nome sugere, esta camada do modelo OSI transporta dados entre duas máquinas distintas e controla o envio e recebimento dos pacotes – estes vindos da camada de Rede – garantindo a qualidade e a integridade dos dados.<br/><br/>Principais protocolos envolvidos: TCP, UDP, entre outros."
    },
    {
        title: "Rede",
        content: "Responsável pela comunicação host-a-host e pelo roteamento de pacotes de dado por meio de uma ou mais redes, controlando a operação da sub-rede e gerenciando o tráfego de sistemas distintos.<br/><br/>Principais protocolos envolvidos: IP, RIP, ICMP, entre outros."
    },
    {
        title: "Enlace de Dados",
        content: "Além de gerenciar endereços MAC e evitar que dois dispositivos transmitam informações ao mesmo tempo por meio do CSMA-CD, esta camada realiza a detecção e correção de erros introduzidos pelo meio de transmissão. Assim, ela fiscaliza os dados e controla seu fluxo de envio a partir da transformação normal em uma linha que pareça livre de erros de transmissão, mascarando os erros reais de modo que a camada de rede não os veja.<br/><br/>Principais protocolos envolvidos: Ethernet, ARP, STP, entre outros."
    },
    {
        title: "Física",
        content: "Define meios de transmissão para realizar a transmissão de dados brutos entre o dispositivo e o meio físico. Desta forma, ao receber uma informação do meio físico, ela converte o sinal em bits digitais e os encaminha à camada de Enlace de Dados - além detectar erros na transmissão.<br/><br/>Principais protocolos envolvidos: Wi-fi, Bluetooth, HDMI, USB, entre outros."
    }
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

// Define an array of section IDs to be used for the buttons
const sectionIDs = ['home', 'camadas', 'camadasTcp', 'topolog'];

// Function to set the active button based on the center of the screen
function setActiveButton() {
  const windowHeight = window.innerHeight;
  const scrollCenter = window.scrollY + windowHeight / 2;

  for (const sectionID of sectionIDs) {
    const section = document.getElementById(sectionID);
    if (!section) continue;

    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    const button = document.querySelector(`.button[data-section="${sectionID}"]`);
    if (button) {
      if (scrollCenter >= sectionTop && scrollCenter <= sectionTop + sectionHeight) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    }
  }
}

// Initial call to set the active button when the page loads
setActiveButton();

// Listen for the scroll event and update the active button
window.addEventListener('scroll', setActiveButton);