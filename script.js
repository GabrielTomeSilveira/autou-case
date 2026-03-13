// ===== USER DATA =====
const currentUser = {
  name: "Gabriel Silva",
  role: "Engenheiro Eletricista Sênior",
  email: "gabriel.silva@autou.io",
  department: "Engenharia de Manutenção",
  team: "Operações Norte-Sul",
  docsAnalyzed: 127,
  avatar: "G"
};

// ===== NOTIFICATIONS DATA =====
const notifications = [
  {
    id: 1,
    type: "task",
    icon: "📋",
    title: "Nova tarefa atribuída",
    text: "Inspeção termográfica - SE 230kV Norte",
    time: "Há 2 horas",
    unread: true
  },
  {
    id: 2,
    type: "risk",
    icon: "⚠️",
    title: "Risco crítico detectado",
    text: "Isolador fase B - Degradação 40% no projeto Norte-Sul",
    time: "Há 4 horas",
    unread: true
  },
  {
    id: 3,
    type: "deadline",
    icon: "📅",
    title: "Prazo se aproximando",
    text: "Laudo TR-3 vence em 3 dias (15/03/2026)",
    time: "Há 1 dia",
    unread: true
  },
  {
    id: 4,
    type: "success",
    icon: "✅",
    title: "Documento analisado",
    text: "ART Subestação Beta foi aprovada",
    time: "Há 2 dias",
    unread: false
  },
  {
    id: 5,
    type: "comment",
    icon: "💬",
    title: "Comentário adicionado",
    text: "Eng. Costa comentou em Proposta XYZ Energia",
    time: "Há 3 dias",
    unread: false
  }
];

// ===== DOCUMENT DATA =====
let documents = [
  {
    id: 1,
    title: "Relatório de Inspeção Termográfica - SE 230kV Norte",
    project: "Norte-Sul",
    date: "2026-03-10",
    author: "Eng. Silva",
    type: "relatorio",
    tags: ["Risco", "Termografia"],
    status: "warning",
    icon: "📄",
    content: `<h4>1. Objetivo</h4><p>Inspeção termográfica preventiva nos equipamentos da SE 230kV Norte...</p><div class="highlight-red"><strong>⚠️ ATENÇÃO:</strong> Isolador da fase B apresenta temperatura de 87°C, ultrapassando o limite operacional de 80°C conforme NBR 61501.</div><h4>2. Metodologia</h4><p>Utilizado equipamento FLIR T860 com resolução de 640×480 pixels...</p><div class="highlight-green"><strong>✅ CONFORME:</strong> Todos os ensaios dielétricos realizados dentro dos parâmetros da NBR 61501.</div><h4>3. Resultados</h4><p>Foram identificados 3 pontos críticos de aquecimento...</p><div class="highlight-blue"><strong>📋 AÇÃO NECESSÁRIA:</strong> Substituir isolador da fase B até 30/04/2026 para evitar risco de flashover.</div>`
  },
  {
    id: 2,
    title: "Laudos de Ensaios Elétricos - Transformador TR-3",
    project: "Subestação Alpha",
    date: "2026-03-08",
    author: "Eng. Costa",
    type: "laudo",
    tags: ["Conforme", "Ensaios"],
    status: "success",
    icon: "🔬",
    content: `<h4>1. Escopo</h4><p>Ensaios elétricos completos no transformador TR-3 da Subestação Alpha...</p><div class="highlight-green"><strong>✅ RESULTADO:</strong> Todos os parâmetros dentro das especificações do fabricante e normas ABNT.</div><h4>2. Ensaios Realizados</h4><p>• Resistência de isolamento<br>• Fator de potência<br>• Relação de transformação</p>`
  },
  {
    id: 3,
    title: "Proposta Técnica - Adequação NR-10",
    project: "Comercial",
    date: "2026-03-05",
    author: "XYZ Energia",
    type: "proposta",
    tags: ["Oportunidade", "Comercial"],
    status: "info",
    icon: "📋",
    content: `<h4>1. Objeto</h4><p>Proposta para adequação das instalações elétricas conforme NR-10...</p><div class="highlight-blue"><strong>💡 OPORTUNIDADE:</strong> Projeto estimado em R$ 450.000,00 com prazo de 90 dias.</div>`
  },
  {
    id: 4,
    title: "ART - Instalação Subestação Beta",
    project: "Subestação Beta",
    date: "2026-03-01",
    author: "Eng. Oliveira",
    type: "art",
    tags: ["Conforme", "ART"],
    status: "success",
    icon: "📝",
    content: `<h4>Dados da ART</h4><p>Número: 2026/0001234<br>Responsável: Eng. Oliveira (CREA 123456)</p><div class="highlight-green"><strong>✅ VÁLIDA:</strong> ART registrada e quitada.</div>`
  },
  {
    id: 5,
    title: "Relatório de Manutenção - Disjuntores 138kV",
    project: "Linha Transmissão",
    date: "2026-02-28",
    author: "Eng. Santos",
    type: "relatorio",
    tags: ["Risco", "Manutenção"],
    status: "warning",
    icon: "📄",
    content: `<h4>1. Resumo</h4><p>Manutenção preventiva nos disjuntores da linha 138kV...</p><div class="highlight-red"><strong>⚠️ ATENÇÃO:</strong> Disjuntor DJ-2 apresenta desgaste de 60% nos contatos principais.</div>`
  }
];

// ===== DADOS ESPECÍFICOS POR DOCUMENTO (DINÂMICO) =====
const documentData = {
  1: {
    summary: [
      "Inspeção identificou 3 pontos críticos de aquecimento",
      "Isoladores da fase B com degradação avançada (40%)",
      "Temperatura máxima: 87°C (acima do limite de 80°C)",
      "Risco de flashover identificado - ação necessária até 30/04/2026"
    ],
    extractedData: [
      { icon: "📍", label: "Localização", value: "SE 230kV Norte, Bay TR-3" },
      { icon: "🌡️", label: "Temp. Máxima", value: "87°C (fase B)" },
      { icon: "⚡", label: "Tensão", value: "245 kV" },
      { icon: "📅", label: "Ação Necessária", value: "30/04/2026" }
    ],
    classification: [
      { type: "risk", text: "Isolador fase B: degradação 40% - risco de flashover" },
      { type: "warning", text: "Temperatura 15% acima do histórico - investigar" },
      { type: "success", text: "Certificações de segurança válidas" }
    ]
  },
  2: {
    summary: [
      "Todos os ensaios elétricos realizados com sucesso",
      "Parâmetros dentro das especificações do fabricante",
      "Conforme normas ABNT NBR 61501",
      "Transformador TR-3 aprovado para operação"
    ],
    extractedData: [
      { icon: "📍", label: "Localização", value: "Subestação Alpha" },
      { icon: "🔬", label: "Ensaios", value: "5 testes realizados" },
      { icon: "✅", label: "Status", value: "Aprovado" },
      { icon: "📅", label: "Data", value: "08/03/2026" }
    ],
    classification: [
      { type: "success", text: "Resistência de isolamento: conforme" },
      { type: "success", text: "Fator de potência: dentro do limite" },
      { type: "success", text: "Relação de transformação: nominal" }
    ]
  },
  3: {
    summary: [
      "Proposta para adequação conforme NR-10",
      "Projeto estimado em R$ 450.000,00",
      "Prazo de execução: 90 dias",
      "Oportunidade comercial identificada"
    ],
    extractedData: [
      { icon: "💰", label: "Valor", value: "R$ 450.000,00" },
      { icon: "📅", label: "Prazo", value: "90 dias" },
      { icon: "🏢", label: "Cliente", value: "XYZ Energia" },
      { icon: "📋", label: "Tipo", value: "Adequação NR-10" }
    ],
    classification: [
      { type: "success", text: "Projeto estimado em R$ 450.000,00 com prazo de 90 dias" },
      { type: "success", text: "Escopo completo de adequação NR-10" },
      { type: "success", text: "Proposta técnica detalhada" }
    ]
  },
  4: {
    summary: [
      "ART registrada e quitada",
      "Responsável técnico: Eng. Oliveira",
      "CREA 123456/SP",
      "Documento válido e regular"
    ],
    extractedData: [
      { icon: "📝", label: "Número ART", value: "2026/0001234" },
      { icon: "👤", label: "Responsável", value: "Eng. Oliveira" },
      { icon: "🔢", label: "CREA", value: "123456/SP" },
      { icon: "✅", label: "Status", value: "Válida e quitada" }
    ],
    classification: [
      { type: "success", text: "ART registrada e quitada" },
      { type: "success", text: "Documentação completa" },
      { type: "success", text: "Conforme exigências legais" }
    ]
  },
  5: {
    summary: [
      "Manutenção preventiva nos disjuntores 138kV",
      "Disjuntor DJ-2 com desgaste de 60% nos contatos",
      "Necessidade de substituição programada",
      "Risco operacional identificado"
    ],
    extractedData: [
      { icon: "📍", label: "Localização", value: "Linha Transmissão 138kV" },
      { icon: "⚠️", label: "Desgaste", value: "60% (DJ-2)" },
      { icon: "🔧", label: "Ação", value: "Substituição necessária" },
      { icon: "📅", label: "Prazo", value: "25/03/2026" }
    ],
    classification: [
      { type: "risk", text: "Disjuntor DJ-2: desgaste de 60% nos contatos principais" },
      { type: "warning", text: "Substituição recomendada antes da falha" },
      { type: "success", text: "Demais disjuntores operam normalmente" }
    ]
  }
};

const pendingDocs = [
  { id: 1, title: "Laudo TR-3", assignee: "Eng. Costa", deadline: "15/03/2026", priority: "high" },
  { id: 2, title: "ART Sub Beta", assignee: "Eng. Oliveira", deadline: "20/03/2026", priority: "medium" },
  { id: 3, title: "Relatório DJ-2", assignee: "Eng. Santos", deadline: "18/03/2026", priority: "high" },
  { id: 4, title: "Proposta XYZ", assignee: "Comercial", deadline: "25/03/2026", priority: "low" },
  { id: 5, title: "Inspeção SE Norte", assignee: "Eng. Silva", deadline: "12/03/2026", priority: "high" }
];

const risks = [
  {
    id: 1,
    title: "Isolador fase B - Degradação 40%",
    project: "SE 230kV Norte",
    severity: "high",
    description: "Risco de flashover - temperatura 87°C",
    deadline: "30/04/2026"
  },
  {
    id: 2,
    title: "Disjuntor DJ-2 - Desgaste 60%",
    project: "Linha Transmissão 138kV",
    severity: "high",
    description: "Desgaste avançado nos contatos principais",
    deadline: "25/03/2026"
  },
  {
    id: 3,
    title: "Temperatura acima do histórico",
    project: "SE 230kV Norte",
    severity: "medium",
    description: "15% acima da média - necessita investigação",
    deadline: "15/03/2026"
  }
];

// ===== GLOBAL VARIABLES =====
let lastUploadedDocId = null;
let lastScrollY = window.scrollY;
let ticking = false;

// ===== NAVIGATION =====
const screens = document.querySelectorAll('.screen');

const showToast = (message) => {
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  if (toast && toastMessage) {
    toastMessage.textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 3000);
  }
};

// ===== FAB SCROLL BEHAVIOR =====
const setupFabScrollBehavior = () => {
  const fab = document.getElementById('fab-upload');
  if (!fab) return;
  
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrollando para baixo - esconde FAB
          fab.style.transform = 'translateY(100px)';
          fab.style.opacity = '0';
        } else {
          // Scrollando para cima - mostra FAB
          fab.style.transform = 'translateY(0)';
          fab.style.opacity = '1';
        }
        
        lastScrollY = currentScrollY;
        ticking = false;
      });
      
      ticking = true;
    }
  }, { passive: true });
};

const showScreen = (screenId) => {
  screens.forEach(s => s.classList.remove('active'));
  const screen = document.getElementById(screenId);
  if (screen) {
    screen.classList.add('active');
  }
  window.scrollTo(0, 0);
  closeAllDropdowns();
};

// ===== DROPDOWNS =====
const notificationsBtn = document.getElementById('notifications-btn');
const profileBtn = document.getElementById('profile-btn');
const notificationsDropdown = document.getElementById('notifications-dropdown');
const profileDropdown = document.getElementById('profile-dropdown');

const toggleDropdown = (dropdown) => {
  if (!dropdown) return;
  const isHidden = dropdown.classList.contains('hidden');
  closeAllDropdowns();
  if (isHidden) {
    dropdown.classList.remove('hidden');
  }
};

const closeAllDropdowns = () => {
  if (notificationsDropdown) notificationsDropdown.classList.add('hidden');
  if (profileDropdown) profileDropdown.classList.add('hidden');
};

if (notificationsBtn) {
  notificationsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown(notificationsDropdown);
    renderNotifications();
  });
}

if (profileBtn) {
  profileBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown(profileDropdown);
  });
}

document.addEventListener('click', () => {
  closeAllDropdowns();
});

if (notificationsDropdown) {
  notificationsDropdown.addEventListener('click', (e) => e.stopPropagation());
}
if (profileDropdown) {
  profileDropdown.addEventListener('click', (e) => e.stopPropagation());
}

// Render notifications
const renderNotifications = () => {
  const list = document.getElementById('notifications-list');
  if (!list) return;
  
  list.innerHTML = notifications.map(notif => `
    <div class="notification-item ${notif.unread ? 'unread' : ''}" data-id="${notif.id}">
      <div class="notification-icon">${notif.icon}</div>
      <div class="notification-text">
        <strong>${notif.title}</strong>
        <p>${notif.text}</p>
        <div class="notification-time">${notif.time}</div>
      </div>
    </div>
  `).join('');
  
  list.querySelectorAll('.notification-item').forEach(item => {
    item.addEventListener('click', () => {
      const id = parseInt(item.dataset.id);
      markNotificationAsRead(id);
    });
  });
};

const markNotificationAsRead = (id) => {
  const index = notifications.findIndex(n => n.id === id);
  if (index !== -1 && notifications[index].unread) {
    notifications[index].unread = false;
    updateNotificationBadge();
    renderNotifications();
  }
};

const updateNotificationBadge = () => {
  const unreadCount = notifications.filter(n => n.unread).length;
  const badge = document.querySelector('.badge-alert');
  if (badge) {
    if (unreadCount > 0) {
      badge.textContent = unreadCount;
      badge.style.display = 'block';
    } else {
      badge.style.display = 'none';
    }
  }
};

const markAllReadBtn = document.getElementById('mark-all-read');
if (markAllReadBtn) {
  markAllReadBtn.addEventListener('click', () => {
    notifications.forEach(n => n.unread = false);
    updateNotificationBadge();
    renderNotifications();
    showToast('✅ Todas notificações marcadas como lidas');
  });
}

// Editar Perfil
const editProfileBtn = document.getElementById('edit-profile');
if (editProfileBtn) {
  editProfileBtn.addEventListener('click', () => {
    showToast('🔧 Funcionalidade em desenvolvimento');
    closeAllDropdowns();
  });
}

// Logout
const logoutBtn = document.getElementById('logout');
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    if (confirm('Deseja realmente sair do sistema?')) {
      showToast('👋 Até logo, Eng. Gabriel!');
      setTimeout(() => {
        location.reload();
      }, 1500);
    }
    closeAllDropdowns();
  });
}

// ===== RENDER DOCUMENTS =====
const renderDocuments = (docs = documents) => {
  const docList = document.getElementById('doc-list');
  if (!docList) return;
  
  docList.innerHTML = '';
  
  if (docs.length === 0) {
    docList.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--text-secondary);">
        <p style="font-size: 48px; margin-bottom: 16px;">📭</p>
        <p>Nenhum documento encontrado</p>
      </div>
    `;
    return;
  }

  docs.forEach(doc => {
    const card = document.createElement('div');
    card.className = 'doc-card';
    card.dataset.type = doc.type;
    card.dataset.id = doc.id;
    
    const tagClass = doc.status === 'warning' ? 'tag-red' : 
                    doc.status === 'success' ? 'tag-green' : 'tag-blue';
    
    card.innerHTML = `
      <div class="doc-icon">${doc.icon}</div>
      <div class="doc-info">
        <h4>${doc.title}</h4>
        <div class="meta">
          <span>Projeto: ${doc.project}</span>
          <span>•</span>
          <span>${formatDate(doc.date)}</span>
          <span>•</span>
          <span>${doc.author}</span>
        </div>
        <div class="tags">
          ${doc.tags.map(tag => `<span class="tag ${tagClass}">${tag}</span>`).join('')}
        </div>
      </div>
      <div class="doc-actions">
        <button class="btn-secondary btn-sm" onclick="event.stopPropagation(); showScreen('insights'); loadDocument(${doc.id});">
          Analisar
        </button>
      </div>
    `;
    
    card.addEventListener('click', () => {
      showScreen('insights');
      loadDocument(doc.id);
    });
    
    docList.appendChild(card);
  });
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
};

// ===== FILTERS =====
const setupFilters = () => {
  const searchInput = document.getElementById('search-input');
  const typeFilter = document.getElementById('type-filter');
  const sortFilter = document.getElementById('sort-filter');
  
  if (!searchInput || !typeFilter || !sortFilter) return;
  
  const filterDocuments = () => {
    const searchTerm = searchInput.value.toLowerCase();
    const typeValue = typeFilter.value;
    const sortValue = sortFilter.value;

    let filtered = documents.filter(doc => {
      const matchesSearch = doc.title.toLowerCase().includes(searchTerm) ||
                          doc.project.toLowerCase().includes(searchTerm) ||
                          doc.author.toLowerCase().includes(searchTerm);
      
      const matchesType = typeValue === 'all' || doc.type === typeValue;
      
      return matchesSearch && matchesType;
    });

    if (sortValue === 'recent') {
      filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortValue === 'critical') {
      filtered.sort((a, b) => {
        const priority = { warning: 0, info: 1, success: 2 };
        return priority[a.status] - priority[b.status];
      });
    } else if (sortValue === 'project') {
      filtered.sort((a, b) => a.project.localeCompare(b.project));
    }

    renderDocuments(filtered);
  };

  searchInput.addEventListener('input', filterDocuments);
  typeFilter.addEventListener('change', filterDocuments);
  sortFilter.addEventListener('change', filterDocuments);
};

// ===== LOAD DOCUMENT =====
const loadDocument = (id) => {
  const doc = documents.find(d => d.id === id);
  const data = documentData[id];
  
  if (!doc) return;

  const previewTitle = document.getElementById('preview-title');
  const previewContent = document.getElementById('preview-content');
  const zoomContent = document.getElementById('zoom-content');
  
  if (previewTitle) previewTitle.textContent = doc.title;
  if (previewContent) previewContent.innerHTML = doc.content;
  if (zoomContent) zoomContent.innerHTML = doc.content;

  const summaryList = document.getElementById('dynamic-summary');
  if (summaryList && data) {
    summaryList.innerHTML = data.summary.map(item => `<li>${item}</li>`).join('');
  }

  const dataCards = document.getElementById('dynamic-data');
  if (dataCards && data) {
    dataCards.innerHTML = data.extractedData.map(d => `
      <div class="data-card">
        <div class="data-icon">${d.icon}</div>
        <div>
          <strong>${d.label}</strong>
          <p>${d.value}</p>
        </div>
      </div>
    `).join('');
  }

  const classList = document.getElementById('dynamic-classification');
  if (classList && data) {
    const typeClass = {
      'risk': 'risk-item risk-high',
      'warning': 'risk-item risk-medium',
      'success': 'risk-item risk-low',
      'opportunity': 'risk-item risk-low',
      'info': 'risk-item risk-low'
    };
    
    const icons = {
      'risk': '⚠️',
      'warning': '🟡',
      'success': '✅',
      'opportunity': '💡',
      'info': 'ℹ️'
    };
    
    classList.innerHTML = data.classification.map(c => `
      <div class="${typeClass[c.type] || 'risk-item risk-low'}">
        ${icons[c.type] || 'ℹ️'} ${c.text}
      </div>
    `).join('');
  }
};

// ===== METRIC MODALS =====
const setupMetricModals = () => {
  const modal = document.getElementById('metric-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const closeModal = document.getElementById('close-modal');
  
  if (!modal || !modalTitle || !modalBody) return;
  
  const openModal = (title, content) => {
    modalTitle.textContent = title;
    modalBody.innerHTML = content;
    modal.classList.remove('hidden');
  };
  
  const close = () => {
    modal.classList.add('hidden');
  };

  const metricPending = document.getElementById('metric-pending');
  if (metricPending) {
    metricPending.addEventListener('click', () => {
      const html = `
        <div class="metric-detail-list">
          <p style="margin-bottom: 16px; color: var(--text-secondary);">
            <strong>15 documentos</strong> aguardando análise e atribuição
          </p>
          ${pendingDocs.map(doc => `
            <div class="metric-detail-item pending">
              <h4>${doc.title}</h4>
              <p>👤 Atribuído para: <strong>${doc.assignee}</strong></p>
              <p>📅 Prazo: <strong>${doc.deadline}</strong></p>
              <p>⚡ Prioridade: <strong>${doc.priority === 'high' ? '🔴 Alta' : doc.priority === 'medium' ? '🟡 Média' : '🟢 Baixa'}</strong></p>
            </div>
          `).join('')}
          <p style="margin-top: 16px; font-size: 13px; color: var(--text-secondary);">
            Mostrando 5 de 15 documentos pendentes
          </p>
        </div>
      `;
      openModal('📄 Documentos Pendentes', html);
    });
  }

  const metricRisks = document.getElementById('metric-risks');
  if (metricRisks) {
    metricRisks.addEventListener('click', () => {
      const html = `
        <div class="metric-detail-list">
          <p style="margin-bottom: 16px; color: var(--text-secondary);">
            <strong>3 riscos críticos</strong> identificados pela IA
          </p>
          ${risks.map(risk => `
            <div class="metric-detail-item risk">
              <h4>${risk.title}</h4>
              <p>📍 Projeto: <strong>${risk.project}</strong></p>
              <p>📝 ${risk.description}</p>
              <p>📅 Ação necessária até: <strong>${risk.deadline}</strong></p>
            </div>
          `).join('')}
        </div>
      `;
      openModal('⚠️ Riscos Detectados', html);
    });
  }

  const metricTime = document.getElementById('metric-time');
  if (metricTime) {
    metricTime.addEventListener('click', () => {
      const html = `
        <div style="margin-bottom: 20px;">
          <p style="margin-bottom: 16px; color: var(--text-secondary);">
            Comparativo de tempo médio por documento analisado
          </p>
          <div class="comparison-grid">
            <div class="comparison-card before">
              <h4>Análise Manual</h4>
              <div class="value">5.0h</div>
              <p>Tempo médio anterior</p>
            </div>
            <div class="comparison-card after">
              <h4>Com AutoU IA</h4>
              <div class="value">0.8h</div>
              <p>Tempo médio atual</p>
              <div class="savings">💾 Economia de 84%</div>
            </div>
          </div>
        </div>
        <div style="background: #F0FDF4; padding: 16px; border-radius: 8px; border-left: 4px solid var(--accent);">
          <h4 style="margin-bottom: 8px; color: var(--text);">💡 Impacto Mensal</h4>
          <p style="font-size: 14px; color: var(--text-secondary);">
            Considerando 50 documentos/mês:<br>
            <strong>Antes:</strong> 250 horas (31 dias úteis × 8h = ~4 meses)<br>
            <strong>Agora:</strong> 40 horas (1 semana)<br>
            <strong style="color: var(--accent);">Economia: 210 horas/mês (4.2h/doc × 50 docs)</strong>
          </p>
        </div>
      `;
      openModal('⏱️ Tempo Economizado', html);
    });
  }

  if (closeModal) {
    closeModal.addEventListener('click', close);
  }
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) close();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      close();
    }
  });
};

// ===== UPLOAD SIMULATION =====
const setupUpload = () => {
  const dropzone = document.getElementById('dropzone');
  if (!dropzone) return;
  
  dropzone.addEventListener('click', () => {
    const uploadProgress = document.getElementById('upload-progress');
    const uploadResults = document.getElementById('upload-results');
    
    if (uploadProgress) uploadProgress.classList.remove('hidden');
    if (dropzone) dropzone.classList.add('hidden');
    
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        const progressFill = document.getElementById('progress-fill');
        const progressText = document.getElementById('progress-text');
        if (progressFill) progressFill.style.width = '100%';
        if (progressText) progressText.textContent = 'Processamento concluído!';
        
        // Criar novo documento simulado
        const newDocId = documents.length + 1;
        const today = new Date().toISOString().split('T')[0];
        
        const newDoc = {
          id: newDocId,
          title: "Relatório_Inspeção_SE230kV.pdf",
          project: "Novo Projeto",
          date: today,
          author: "Eng. Silva",
          type: "relatorio",
          tags: ["Novo", "Upload"],
          status: "info",
          icon: "📄",
          content: `<h4>1. Objetivo</h4><p>Inspeção termográfica preventiva nos equipamentos...</p><div class="highlight-green"><strong>✅ CONFORME:</strong> Documentação processada com sucesso pela IA.</div><h4>2. Metodologia</h4><p>Documento recém-upload e processado automaticamente...</p><div class="highlight-blue"><strong>📋 PRONTO PARA ANÁLISE:</strong> Clique nos botões abaixo para analisar.</div>`
        };
        
        // Adicionar documento ao array
        documents.push(newDoc);
        
        // Adicionar dados do documento
        documentData[newDocId] = {
          summary: [
            "Documento processado com sucesso",
            "Classificação automática realizada",
            "Pronto para análise detalhada",
            "Dados extraídos pela IA"
          ],
          extractedData: [
            { icon: "📅", label: "Data Upload", value: today },
            { icon: "👤", label: "Responsável", value: "Eng. Silva" },
            { icon: "📊", label: "Tipo", value: "Relatório" },
            { icon: "✅", label: "Status", value: "Processado" }
          ],
          classification: [
            { type: "success", text: "Documento válido e legível" },
            { type: "success", text: "Metadados extraídos com sucesso" },
            { type: "success", text: "Pronto para análise" }
          ]
        };
        
        // Salvar ID do último documento uploadado
        lastUploadedDocId = newDocId;
        
        setTimeout(() => {
          if (uploadProgress) uploadProgress.classList.add('hidden');
          if (uploadResults) uploadResults.classList.remove('hidden');
          showToast('✅ 2 documentos processados com sucesso!');
        }, 500);
      } else {
        const progressFill = document.getElementById('progress-fill');
        const progressText = document.getElementById('progress-text');
        if (progressFill) progressFill.style.width = progress + '%';
        if (progressText) progressText.textContent = `Processando: ${Math.round(progress)}%`;
      }
    }, 200);
  });

  dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropzone.style.borderColor = 'var(--primary)';
    dropzone.style.background = '#F8FAFC';
  });

  dropzone.addEventListener('dragleave', () => {
    dropzone.style.borderColor = 'var(--border)';
    dropzone.style.background = 'white';
  });

  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.style.borderColor = 'var(--border)';
    dropzone.style.background = 'white';
    dropzone.click();
  });
};

// ===== DOWNLOAD & ZOOM =====
const setupDocumentActions = () => {
  const zoomBtn = document.getElementById('zoom-btn');
  const closeZoom = document.getElementById('close-zoom');
  const zoomModal = document.getElementById('zoom-modal');
  const downloadBtn = document.getElementById('download-btn');
  
  if (zoomBtn && zoomModal) {
    zoomBtn.addEventListener('click', () => {
      zoomModal.classList.remove('hidden');
    });
  }
  
  if (closeZoom && zoomModal) {
    closeZoom.addEventListener('click', () => {
      zoomModal.classList.add('hidden');
    });
  }

  if (zoomModal) {
    zoomModal.addEventListener('click', (e) => {
      if (e.target.id === 'zoom-modal') {
        zoomModal.classList.add('hidden');
      }
    });
  }

  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      const previewTitle = document.getElementById('preview-title');
      const previewContent = document.getElementById('preview-content');
      
      const title = previewTitle ? previewTitle.textContent : 'Documento';
      const content = previewContent ? previewContent.innerHTML : '';
      
      const printWindow = window.open('', '_blank');
      if (printWindow) {
        printWindow.document.write(`
          <!DOCTYPE html>
          <html lang="pt-BR">
          <head>
            <meta charset="UTF-8">
            <title>${title}</title>
            <style>
              body { font-family: 'Inter', system-ui, sans-serif; padding: 40px; line-height: 1.6; }
              h1 { font-size: 20px; margin-bottom: 20px; color: #1E293B; }
              h4 { font-size: 16px; margin: 20px 0 10px; color: #1E293B; }
              p { margin-bottom: 12px; color: #334155; }
              .highlight-red { background: #FEE2E2; padding: 12px; border-left: 4px solid #EF4444; margin: 12px 0; }
              .highlight-green { background: #DCFCE7; padding: 12px; border-left: 4px solid #10B981; margin: 12px 0; }
              .highlight-blue { background: #DBEAFE; padding: 12px; border-left: 4px solid #2563EB; margin: 12px 0; }
              strong { font-weight: 600; }
              @media print { body { padding: 20px; } }
            </style>
          </head>
          <body>
            <h1>${title}</h1>
            <div style="color: #64748B; font-size: 14px; margin-bottom: 20px;">
              Gerado por AutoU Docs em ${new Date().toLocaleDateString('pt-BR')}
            </div>
            ${content}
          </body>
          </html>
        `);
        printWindow.document.close();
        
        setTimeout(() => {
          printWindow.print();
          showToast('📥 Preparando download do PDF...');
        }, 500);
      }
    });
  }
};

// ===== ACTION FORM =====
const setupActionForm = () => {
  const actionForm = document.getElementById('action-form');
  const successState = document.getElementById('success-state');
  const cancelForm = document.getElementById('cancel-form');
  
  if (actionForm && successState) {
    actionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      actionForm.classList.add('hidden');
      successState.classList.remove('hidden');
      showToast('🎯 Ordem de serviço gerada!');
    });
  }
  
  if (cancelForm) {
    cancelForm.addEventListener('click', () => {
      showScreen('insights');
    });
  }
};

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', () => {
  renderDocuments();
  setupFilters();
  setupUpload();
  setupDocumentActions();
  setupActionForm();
  setupMetricModals();
  updateNotificationBadge();
  setupFabScrollBehavior();
  
  const logoLink = document.getElementById('logo-link');
  if (logoLink) {
    logoLink.addEventListener('click', (e) => {
      e.preventDefault();
      showScreen('dashboard');
    });
  }

  const fabUpload = document.getElementById('fab-upload');
  if (fabUpload) {
    fabUpload.addEventListener('click', () => {
      showScreen('upload');
    });
  }

  const backDashboardUpload = document.getElementById('back-dashboard-upload');
  if (backDashboardUpload) {
    backDashboardUpload.addEventListener('click', () => {
      showScreen('dashboard');
    });
  }

  // ✅ CORRIGIDO: Botão Prosseguir para Análise
  const proceedAnalysis = document.getElementById('proceed-analysis');
  if (proceedAnalysis) {
    proceedAnalysis.addEventListener('click', () => {
      // Se houver um documento uploadado recentemente, carregar ele
      if (lastUploadedDocId) {
        showScreen('insights');
        loadDocument(lastUploadedDocId);
      } else {
        // Caso contrário, carregar o primeiro documento
        showScreen('insights');
        if (documents.length > 0) {
          loadDocument(documents[0].id);
        }
      }
    });
  }

  // Criar Plano de Ação
  const createAction = document.getElementById('create-action');
  if (createAction) {
    createAction.addEventListener('click', () => {
      showScreen('action');
    });
  }

  // Encaminhar
  const forwardTeam = document.getElementById('forward-team');
  if (forwardTeam) {
    forwardTeam.addEventListener('click', () => {
      showToast('🔧 Funcionalidade em desenvolvimento');
    });
  }

  // Marcar como Analisado
  const markReviewed = document.getElementById('mark-reviewed');
  if (markReviewed) {
    markReviewed.addEventListener('click', () => {
      showToast('🔧 Funcionalidade em desenvolvimento');
    });
  }

  const cancelActionBtn = document.getElementById('cancel-action');
  if (cancelActionBtn) {
    cancelActionBtn.addEventListener('click', () => {
      showScreen('insights');
    });
  }

  const backDashboardSuccess = document.getElementById('back-dashboard-success');
  if (backDashboardSuccess) {
    backDashboardSuccess.addEventListener('click', () => {
      showScreen('dashboard');
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const zoomModal = document.getElementById('zoom-modal');
      const metricModal = document.getElementById('metric-modal');
      if (zoomModal) zoomModal.classList.add('hidden');
      if (metricModal) metricModal.classList.add('hidden');
      closeAllDropdowns();
    }
  });
});