const PRODUTOS = [
  {
    "codigo": "PP01",
    "titulo": "Preparo Profissional",
    "descricao": "Levo o cuidado e o conhecimento até você. Faço o preparo completo da sua planta com os melhores materiais.",
    "categoria": "servico",
    "tipo": "servico",
    "badge": { "texto": "Serviço", "cor": "servico" },
    "imagem": "images/023.jpg",
    "servico_includes": [
      "Argila expandida (drenagem)",
      "Substrato especial por tipo de planta",
      "Carvão ativo (evita fungos)",
      "Montagem e plantio no vaso",
      "Orientação de cuidados",
      "Identificação da planta"
    ],
    "preparo": { "texto": "Serviço por planta", "valor": "A partir de R$ 18,00" }
  },
  {
    "codigo": "OF01",
    "titulo": "Orquídea Phalaenopsis",
    "descricao": "Elegante e delicada, floresce por meses. Ideal para ambientes internos com luz indireta.",
    "categoria": "planta",
    "badge": { "texto": "Destaque", "cor": "destaque" },
    "imagem": "images/01.webp",
    "planta": { "texto": "Planta", "valor": "R$ 45,00" },
    "vaso": { "texto": "Vaso decorativo", "valor": "R$ 35,00" },
    "preparo": { "texto": "Preparo Completo", "subtexto": "(argila, substrato, montagem)", "valor": "+ R$ 25,00" },
    "total": "R$ 105,00"
  },
  {
    "codigo": "SM01",
    "titulo": "Suculentas Mix",
    "descricao": "Resistentes e encantadoras. Precisam de pouca água e trazem muito charme à decoração.",
    "categoria": "planta",
    "imagem": "images/03.webp",
    "planta": { "texto": "Planta (unidade)", "valor": "R$ 15,00" },
    "vaso": { "texto": "Vaso de cerâmica", "valor": "R$ 22,00" },
    "preparo": { "texto": "Preparo Completo", "subtexto": "(areia grossa, argila, montagem)", "valor": "+ R$ 18,00" },
    "total": "R$ 55,00"
  },
  {
    "codigo": "LP01",
    "titulo": "Lírio da Paz",
    "descricao": "Purifica o ar e traz tranquilidade ao ambiente. Uma das plantas de interior mais populares.",
    "categoria": "planta",
    "badge": { "texto": "Novidade", "cor": "novidade" },
    "imagem": "images/04.webp",
    "planta": { "texto": "Planta", "valor": "R$ 35,00" },
    "vaso": { "texto": "Vaso esmaltado", "valor": "R$ 40,00" },
    "preparo": { "texto": "Preparo Completo", "subtexto": "(argila expandida, substrato, montagem)", "valor": "+ R$ 22,00" },
    "total": "R$ 97,00"
  },
  {
    "codigo": "SP01",
    "titulo": "Samambaia Pendente",
    "descricao": "Perfeita para varandas e ambientes úmidos. Suas folhas pendentes criam um efeito visual incrível.",
    "categoria": "planta",
    "imagem": "images/05.webp",
    "planta": { "texto": "Planta", "valor": "R$ 28,00" },
    "vaso": { "texto": "Vaso suspenso", "valor": "R$ 38,00" },
    "preparo": { "texto": "Preparo Completo", "subtexto": "(substrato especial, argila, montagem)", "valor": "+ R$ 20,00" },
    "total": "R$ 86,00"
  },
  {
    "codigo": "SJ01",
    "titulo": "Espada de São Jorge",
    "descricao": "Símbolo de proteção e sorte. Planta robusta e de fácil cuidado, ideal para qualquer ambiente.",
    "categoria": "planta",
    "imagem": "images/06.webp",
    "planta": { "texto": "Planta", "valor": "R$ 32,00" },
    "vaso": { "texto": "Vaso alto de cerâmica", "valor": "R$ 55,00" },
    "preparo": { "texto": "Preparo Completo", "subtexto": "(areia, argila, substrato, montagem)", "valor": "+ R$ 25,00" },
    "total": "R$ 112,00"
  },
  {
    "codigo": "VB01",
    "titulo": "Vaso Artesanal de Barro",
    "descricao": "Peça única feita à mão. Cada vaso é especial, com texturas e acabamentos exclusivos.",
    "categoria": "vaso",
    "imagem": "images/07.jpg",
    "opcoes": [
      { "texto": "Vaso pequeno (10cm)", "valor": "R$ 28,00" },
      { "texto": "Vaso médio (20cm)", "valor": "R$ 45,00" },
      { "texto": "Vaso grande (30cm)", "valor": "R$ 68,00" }
    ]
  },
  {
    "codigo": "PD01",
    "titulo": "Pothos Dourado",
    "descricao": "Uma das plantas mais fáceis de cuidar. Cresce em qualquer ambiente e purifica o ar naturalmente.",
    "categoria": "planta",
    "imagem": "images/08.jpg",
    "planta": { "texto": "Planta", "valor": "R$ 22,00" },
    "vaso": { "texto": "Vaso decorativo", "valor": "R$ 30,00" },
    "preparo": { "texto": "Preparo Completo", "subtexto": "(substrato, argila, montagem)", "valor": "+ R$ 18,00" },
    "total": "R$ 70,00"
  },
  {
    "codigo": "AV01",
    "titulo": "Arranjo Varanda",
    "descricao": "Composição especial para varanda com plantas resistentes ao sol e à sombra.",
    "categoria": "planta",
    "badge": { "texto": "Novidade", "cor": "novidade" },
    "imagem": "images/09.jpg",
    "planta": { "texto": "Conjunto de plantas", "valor": "R$ 65,00" },
    "vaso": { "texto": "Vasos decorativos (3 un)", "valor": "R$ 90,00" },
    "preparo": { "texto": "Preparo Completo", "subtexto": "(substrato, argila, montagem)", "valor": "+ R$ 40,00" },
    "total": "R$ 195,00"
  },
  {
    "codigo": "BV01",
    "titulo": "Bonsai Ficus",
    "descricao": "Arte milenar japonesa. Um bonsai traz elegância e zen para qualquer ambiente.",
    "categoria": "planta",
    "badge": { "texto": "Destaque", "cor": "destaque" },
    "imagem": "images/10.jpg",
    "planta": { "texto": "Planta", "valor": "R$ 120,00" },
    "vaso": { "texto": "Bandeja de bonsai", "valor": "R$ 55,00" },
    "preparo": { "texto": "Preparo Completo", "subtexto": "(substrato bonsai, pedras, montagem)", "valor": "+ R$ 35,00" },
    "total": "R$ 210,00"
  },
  {
    "codigo": "AM01",
    "titulo": "Antúrio Vermelho",
    "descricao": "Flor exuberante que dura meses. Traz cor e vida a ambientes internos.",
    "categoria": "planta",
    "imagem": "images/11.webp",
    "planta": { "texto": "Planta", "valor": "R$ 40,00" },
    "vaso": { "texto": "Vaso esmaltado branco", "valor": "R$ 35,00" },
    "preparo": { "texto": "Preparo Completo", "subtexto": "(substrato, argila, montagem)", "valor": "+ R$ 20,00" },
    "total": "R$ 95,00"
  },
  {
    "codigo": "PA01",
    "titulo": "Palmeira Areca",
    "descricao": "Umidifica o ar e cria um visual tropical incrível. Perfeita para salas espaçosas.",
    "categoria": "planta",
    "imagem": "images/12.jpg",
    "planta": { "texto": "Planta", "valor": "R$ 85,00" },
    "vaso": { "texto": "Vaso alto resinado", "valor": "R$ 75,00" },
    "preparo": { "texto": "Preparo Completo", "subtexto": "(substrato tropical, argila, montagem)", "valor": "+ R$ 30,00" },
    "total": "R$ 190,00"
  },
  {
    "codigo": "ZZ01",
    "titulo": "Zamioculcas (ZZ Plant)",
    "descricao": "Sobrevive a quase tudo! Pouca luz, pouca água. Ideal para escritórios e apartamentos.",
    "categoria": "planta",
    "imagem": "images/13.webp",
    "planta": { "texto": "Planta", "valor": "R$ 55,00" },
    "vaso": { "texto": "Vaso moderno cinza", "valor": "R$ 45,00" },
    "preparo": { "texto": "Preparo Completo", "subtexto": "(substrato, argila, montagem)", "valor": "+ R$ 22,00" },
    "total": "R$ 122,00"
  },
  {
    "codigo": "MV01",
    "titulo": "Mini Vasos Decorativos",
    "descricao": "Conjunto de vasos artesanais em cores neutras, perfeitos para decoração de prateleiras.",
    "categoria": "vaso",
    "imagem": "images/14.webp",
    "opcoes": [
      { "texto": "Kit 3 peças P", "valor": "R$ 65,00" },
      { "texto": "Kit 3 peças M", "valor": "R$ 90,00" },
      { "texto": "Kit 5 peças M", "valor": "R$ 140,00" }
    ]
  },
  {
    "codigo": "OV01",
    "titulo": "Orquídea Vanda",
    "descricao": "Raridade e beleza! Floresce em cores vibrantes e é cultivada em vaso especial com raízes expostas.",
    "categoria": "planta",
    "badge": { "texto": "Destaque", "cor": "destaque" },
    "imagem": "images/16.webp",
    "planta": { "texto": "Planta", "valor": "R$ 95,00" },
    "vaso": { "texto": "Vaso especial com gel", "valor": "R$ 60,00" },
    "preparo": { "texto": "Preparo Completo", "subtexto": "(gel nutritivo, montagem especial)", "valor": "+ R$ 35,00" },
    "total": "R$ 190,00"
  },
  {
    "codigo": "HV01",
    "titulo": "Horta Vertical",
    "descricao": "Monte sua horta em casa! Kit com ervas aromáticas: manjericão, cebolinha, hortelã e salsa.",
    "categoria": "planta",
    "badge": { "texto": "Novidade", "cor": "novidade" },
    "imagem": "images/17.avif",
    "planta": { "texto": "Kit de ervas (4 vasos)", "valor": "R$ 70,00" },
    "vaso": { "texto": "Suporte vertical em madeira", "valor": "R$ 85,00" },
    "preparo": { "texto": "Preparo Completo", "subtexto": "(substrato horta, argila, montagem)", "valor": "+ R$ 30,00" },
    "total": "R$ 185,00"
  }
];

function loadCatalog() {
    const produtos = PRODUTOS;

    const container = document.getElementById('catalog-container');
    container.innerHTML = produtos.map(renderCard).join('');

    GLightbox({
        selector: '.glightbox',
        touchNavigation: true,
        loop: true,
        autoplayVideos: false,
        closeButton: true,
        openEffect: 'zoom',
        closeEffect: 'fade'
    });

    initFilters();
}

function badgeHTML(badge) {
    if (!badge) return '';
    return `<div class="card-badge ${badge.cor}">${badge.texto}</div>`;
}

function codigoHTML(codigo) {
    return `<span class="card-codigo">${codigo}</span>`;
}

function renderCard(produto) {
    if (produto.tipo === 'servico') return renderServicoCard(produto);
    if (produto.opcoes) return renderVasoCard(produto);
    return renderPlantaCard(produto);
}

function renderPlantaCard(p) {
    const whatsappMsg = encodeURIComponent(`Olá! Tenho interesse em: ${p.titulo} (${p.codigo}) 🌿`);
    return `
    <article class="card" data-category="${p.categoria}">
        ${badgeHTML(p.badge)}
        <div class="card-img-wrap">
            <a href="${p.imagem}" class="glightbox" data-gallery="catalogo"
               data-title="${p.titulo} — ${p.codigo}"
               data-description="${p.descricao}">
                <img src="${p.imagem}" alt="${p.titulo}" loading="lazy">
                <span class="img-overlay"><i class="fas fa-magnifying-glass-plus"></i> Ver foto</span>
            </a>
        </div>
        <div class="card-body">
            <div class="card-header-row">
                <h2 class="card-title">${p.titulo}</h2>
                ${codigoHTML(p.codigo)}
            </div>
            <p class="card-desc">${p.descricao}</p>
            <div class="card-prices">
                ${p.planta ? `
                <div class="price-item">
                    <i class="fas fa-seedling"></i>
                    <span>${p.planta.texto}</span>
                    <strong>${p.planta.valor}</strong>
                </div>` : ''}
                ${p.vaso ? `
                <div class="price-item">
                    <i class="fas fa-circle-dot"></i>
                    <span>${p.vaso.texto}</span>
                    <strong>${p.vaso.valor}</strong>
                </div>` : ''}
                ${p.preparo ? `
                <div class="price-item preparo">
                    <i class="fas fa-hands"></i>
                    <span>${p.preparo.texto}${p.preparo.subtexto ? ` <small>${p.preparo.subtexto}</small>` : ''}</span>
                    <strong>${p.preparo.valor}</strong>
                </div>` : ''}
            </div>
            ${p.total ? `
            <div class="card-total">
                <span>Conjunto completo</span>
                <strong>${p.total}</strong>
            </div>` : ''}
            <a href="https://wa.me/5581986935525?text=${whatsappMsg}" target="_blank" class="card-btn">
                <i class="fab fa-whatsapp"></i> Quero este!
            </a>
        </div>
    </article>`;
}

function renderVasoCard(p) {
    const whatsappMsg = encodeURIComponent(`Olá! Tenho interesse em: ${p.titulo} (${p.codigo}) 🏺`);
    const opcoesHTML = p.opcoes.map(op => `
        <div class="price-item">
            <i class="fas fa-circle-dot"></i>
            <span>${op.texto}</span>
            <strong>${op.valor}</strong>
        </div>`).join('');

    return `
    <article class="card" data-category="${p.categoria}">
        ${badgeHTML(p.badge)}
        <div class="card-img-wrap">
            <a href="${p.imagem}" class="glightbox" data-gallery="catalogo"
               data-title="${p.titulo} — ${p.codigo}"
               data-description="${p.descricao}">
                <img src="${p.imagem}" alt="${p.titulo}" loading="lazy">
                <span class="img-overlay"><i class="fas fa-magnifying-glass-plus"></i> Ver foto</span>
            </a>
        </div>
        <div class="card-body">
            <div class="card-header-row">
                <h2 class="card-title">${p.titulo}</h2>
                ${codigoHTML(p.codigo)}
            </div>
            <p class="card-desc">${p.descricao}</p>
            <div class="card-prices">${opcoesHTML}</div>
            <a href="https://wa.me/5581986935525?text=${whatsappMsg}" target="_blank" class="card-btn">
                <i class="fab fa-whatsapp"></i> Quero este!
            </a>
        </div>
    </article>`;
}

function renderServicoCard(p) {
    const whatsappMsg = encodeURIComponent(`Olá! Tenho interesse em: ${p.titulo} (${p.codigo}) 🌱`);
    const includesHTML = p.servico_includes.map(item =>
        `<li><i class="fas fa-check"></i> ${item}</li>`
    ).join('');

    return `
    <article class="card servico-card" data-category="${p.categoria}">
        ${badgeHTML(p.badge)}
        <div class="card-img-wrap">
            <a href="${p.imagem}" class="glightbox" data-gallery="catalogo"
               data-title="${p.titulo} — ${p.codigo}"
               data-description="${p.descricao}">
                <img src="${p.imagem}" alt="${p.titulo}" loading="lazy">
                <span class="img-overlay"><i class="fas fa-magnifying-glass-plus"></i> Ver foto</span>
            </a>
        </div>
        <div class="card-body">
            <div class="card-header-row">
                <h2 class="card-title">${p.titulo}</h2>
                ${codigoHTML(p.codigo)}
            </div>
            <p class="card-desc">${p.descricao}</p>
            <div class="service-includes">
                <h3><i class="fas fa-list-check"></i> O que está incluso:</h3>
                <ul>${includesHTML}</ul>
            </div>
            <div class="card-prices">
                <div class="price-item preparo">
                    <i class="fas fa-hands"></i>
                    <span>${p.preparo.texto}</span>
                    <strong>${p.preparo.valor}</strong>
                </div>
            </div>
            <a href="https://wa.me/5581986935525?text=${whatsappMsg}" target="_blank" class="card-btn">
                <i class="fab fa-whatsapp"></i> Solicitar serviço
            </a>
        </div>
    </article>`;
}

function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            cards.forEach(card => {
                const show = filter === 'all' || card.dataset.category === filter;
                card.classList.toggle('hidden', !show);
            });
        });
    });
}

loadCatalog();
