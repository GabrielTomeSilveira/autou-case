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

// Dashboard → Upload
document.getElementById('open-upload').addEventListener('click', () => showScreen('upload'));
document.getElementById('back-dashboard').addEventListener('click', () => showScreen('dashboard'));

// Upload simulation
const dropzone = document.getElementById('dropzone');
dropzone.addEventListener('click', () => {
  document.getElementById('upload-progress').classList.remove('hidden');
  dropzone.classList.add('hidden');
  
  // Simulate progress
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

// Upload → Insights
document.getElementById('proceed-analysis').addEventListener('click', () => showScreen('insights'));

// Insights → Action
document.getElementById('create-action').addEventListener('click', () => showScreen('action'));
document.getElementById('forward-team').addEventListener('click', () => showToast('📤 Encaminhado para a equipe'));
document.getElementById('mark-reviewed').addEventListener('click', () => {
  showToast('✅ Marcado como analisado');
  setTimeout(() => showScreen('dashboard'), 1000);
});

// Action form
document.getElementById('action-form').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('action-form').classList.add('hidden');
  document.getElementById('success-state').classList.remove('hidden');
  showToast('🎯 Ordem de serviço gerada!');
});

document.getElementById('cancel-action').addEventListener('click', () => showScreen('insights'));
document.getElementById('back-dashboard-success').addEventListener('click', () => showScreen('dashboard'));

// Document cards → Insights (demo)
document.querySelectorAll('.doc-card').forEach(card => {
  card.addEventListener('click', () => showScreen('insights'));
});

// Keyboard navigation (bonus)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') showScreen('dashboard');
});