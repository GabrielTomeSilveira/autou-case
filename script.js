// ===== DOCUMENT DATA =====
const documents = [
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
        content: `
            <h4>1. Objetivo</h4>
            <p>Inspeção termográfica preventiva nos equipamentos da SE 230kV Norte...</p>
            <div class="highlight-red">
                <strong>⚠️ ATENÇÃO:</strong> Isolador da fase B apresenta temperatura de 87°C, 
                ultrapassando o limite operacional de 80°C conforme NBR 61501.
            </div>
            <h4>2. Metodologia</h4>
            <p>Utilizado equipamento FLIR T860 com resolução de 640×480 pixels...</p>
            <div class="highlight-green">
                <strong>✅ CONFORME:</strong> Todos os ensaios dielétricos realizados 
                dentro dos parâmetros da NBR 61501.
            </div>
            <h4>3. Resultados</h4>
            <p>Foram identificados 3 pontos críticos de aquecimento...</p>
            <div class="highlight-blue">
                <strong>📋 AÇÃO NECESSÁRIA:</strong> Substituir isolador da fase B 
                até 30/04/2026 para evitar risco de flashover.
            </div>
        `
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
        content: `
            <h4>1. Escopo</h4>
            <p>Ensaios elétricos completos no transformador TR-3 da Subestação Alpha...</p>
            <div class="highlight-green">
                <strong>✅ RESULTADO:</strong> Todos os parâmetros dentro das especificações 
                do fabricante e normas ABNT.
            </div>
            <h4>2. Ensaios Realizados</h4>
            <p>• Resistência de isolamento<br>• Fator de potência<br>• Relação de transformação</p>
        `
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
        content: `
            <h4>1. Objeto</h4>
            <p>Proposta para adequação das instalações elétricas conforme NR-10...</p>
            <div class="highlight-blue">
                <strong>💡 OPORTUNIDADE:</strong> Projeto estimado em R$ 450.000,00 
                com prazo de 90 dias.
            </div>
        `
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
        content: `
            <h4>Dados da ART</h4>
            <p>Número: 2026/0001234<br>Responsável: Eng. Oliveira (CREA 123456)</p>
            <div class="highlight-green">
                <strong>✅ VÁLIDA:</strong> ART registrada e quitada.
            </div>
        `
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
        content: `
            <h4>1. Resumo</h4>
            <p>Manutenção preventiva nos disjuntores da linha 138kV...</p>
            <div class="highlight-red">
                <strong>⚠️ ATENÇÃO:</strong> Disjuntor DJ-2 apresenta desgaste de 60% 
                nos contatos principais.
            </div>
        `
    }
];

// Pending documents data
const pendingDocs = [
    { id: 1, title: "Laudo TR-3", assignee: "Eng. Costa", deadline: "15/03/2026", priority: "high" },
    { id: 2, title: "ART Sub Beta", assignee: "Eng. Oliveira", deadline: "20/03/2026", priority: "medium" },
    { id: 3, title: "Relatório DJ-2", assignee: "Eng. Santos", deadline: "18/03/2026", priority: "high" },
    { id: 4, title: "Proposta XYZ", assignee: "Comercial", deadline: "25/03/2026", priority: "low" },
    { id: 5, title: "Inspeção SE Norte", assignee: "Eng. Silva", deadline: "12/03/2026", priority: "high" }
];

// Risks data
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

// ===== NAVIGATION =====
const screens = document.querySelectorAll('.screen');

const showToast = (message) => {
    const toast = document.getElementById('toast');
    document.getElementById('toast-message').textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => toast.classList.add('hidden'), 3000);
};

const showScreen = (screenId) => {
    screens.forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    window.scrollTo(0, 0);
};

// ===== RENDER DOCUMENTS =====
const renderDocuments = (docs = documents) => {
    const docList = document.getElementById('doc-list');
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

        // Sort
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
    if (!doc) return;

    document.getElementById('preview-title').textContent = doc.title;
    document.getElementById('preview-content').innerHTML = doc.content;
    document.getElementById('zoom-content').innerHTML = doc.content;
};

// ===== METRIC MODALS =====
const setupMetricModals = () => {
    const modal = document.getElementById('metric-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.getElementById('close-modal');

    const openModal = (title, content) => {
        modalTitle.textContent = title;
        modalBody.innerHTML = content;
        modal.classList.remove('hidden');
    };

    const close = () => {
        modal.classList.add('hidden');
    };

    // Click on metric cards
    document.getElementById('metric-pending').addEventListener('click', () => {
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

    document.getElementById('metric-risks').addEventListener('click', () => {
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

    document.getElementById('metric-time').addEventListener('click', () => {
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

    closeModal.addEventListener('click', close);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) close();
    });

    // ESC key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            close();
        }
    });
};

// ===== UPLOAD SIMULATION =====
const setupUpload = () => {
    const dropzone = document.getElementById('dropzone');
    
    dropzone.addEventListener('click', () => {
        document.getElementById('upload-progress').classList.remove('hidden');
        dropzone.classList.add('hidden');
        
        let progress = 0;
        const interval = setInterval(() => {
            progress += Math.random() * 15;
            if (progress >= 100) {
                progress = 100;
                clearInterval(interval);
                document.getElementById('progress-fill').style.width = '100%';
                document.getElementById('progress-text').textContent = 'Processamento concluído!';
                
                setTimeout(() => {
                    document.getElementById('upload-progress').classList.add('hidden');
                    document.getElementById('upload-results').classList.remove('hidden');
                    showToast('✅ 2 documentos processados com sucesso!');
                }, 500);
            } else {
                document.getElementById('progress-fill').style.width = progress + '%';
                document.getElementById('progress-text').textContent = `Processando: ${Math.round(progress)}%`;
            }
        }, 200);
    });

    // Drag and drop
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
    // Zoom
    document.getElementById('zoom-btn').addEventListener('click', () => {
        const modal = document.getElementById('zoom-modal');
        modal.classList.remove('hidden');
    });

    document.getElementById('close-zoom').addEventListener('click', () => {
        document.getElementById('zoom-modal').classList.add('hidden');
    });

    // Close modal on outside click
    document.getElementById('zoom-modal').addEventListener('click', (e) => {
        if (e.target.id === 'zoom-modal') {
            document.getElementById('zoom-modal').classList.add('hidden');
        }
    });

    // Download PDF
    document.getElementById('download-btn').addEventListener('click', () => {
        const title = document.getElementById('preview-title').textContent;
        const content = document.getElementById('preview-content').innerHTML;
        
        // Create printable content
        const printWindow = window.open('', '_blank');
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
    });
};

// ===== ACTION FORM =====
const setupActionForm = () => {
    document.getElementById('action-form').addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('action-form').classList.add('hidden');
        document.getElementById('success-state').classList.remove('hidden');
        showToast('🎯 Ordem de serviço gerada!');
    });

    document.getElementById('cancel-form').addEventListener('click', () => {
        showScreen('insights');
    });
};

// ===== EVENT LISTENERS =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize
    renderDocuments();
    setupFilters();
    setupUpload();
    setupDocumentActions();
    setupActionForm();
    setupMetricModals();

    // Navigation - Logo
    document.getElementById('logo-link').addEventListener('click', (e) => {
        e.preventDefault();
        showScreen('dashboard');
    });

    // Navigation - FAB Button (FIXED!)
    document.getElementById('fab-upload').addEventListener('click', () => {
        showScreen('upload');
    });

    // Navigation - Upload screen
    document.getElementById('back-dashboard-upload').addEventListener('click', () => {
        showScreen('dashboard');
    });
    
    document.getElementById('proceed-analysis').addEventListener('click', () => {
        showScreen('insights');
    });
    
    // Navigation - Insights screen
    document.getElementById('create-action').addEventListener('click', () => {
        showScreen('action');
    });
    
    document.getElementById('forward-team').addEventListener('click', () => {
        showToast('📤 Encaminhado para a equipe');
    });
    
    document.getElementById('mark-reviewed').addEventListener('click', () => {
        showToast('✅ Marcado como analisado');
        setTimeout(() => showScreen('dashboard'), 1000);
    });
    
    // Navigation - Action screen
    document.getElementById('cancel-action').addEventListener('click', () => {
        showScreen('insights');
    });
    
    document.getElementById('back-dashboard-success').addEventListener('click', () => {
        showScreen('dashboard');
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.getElementById('zoom-modal').classList.add('hidden');
            document.getElementById('metric-modal').classList.add('hidden');
        }
    });
});