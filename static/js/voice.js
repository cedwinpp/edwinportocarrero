// voice.js — Rimi Voice Assistant v4
// Selección de tono (formal/informal) + acento (peruano/español)

// ═══════════════════════════════════════════════════════════════════
//  PERSONALIDADES DE RIMI (4 combinaciones)
//  panelText   → texto mostrado en el card de bienvenida
//  trigger     → mensaje simple que activa el saludo
//  instruction → system_instruction: personalidad + saludo exacto integrado
const RIMI_PERSONAS = {
    formal_peruano: {
        panelText: `¡Bienvenido! Soy RIMI. Estás en el portal personal de Edwin Portocarrero, un peruano que combina la precisión de la física con la sensibilidad del arte.

Edwin no solo es Doctor en Ciencias, sino también un narrador de historias que siempre vuelve la mirada a nuestro pasado andino. Su curiosidad es inagotable: hoy lo verás creando música con IA, mañana escribiendo sobre matemáticas o guiando a nuevos estudiantes en su página de tutorías. Él se define como alguien atrevido ante los nuevos desafíos, y esta página es prueba de ello.

Te invito a recorrer su trayectoria. ¡Hay mucho por descubrir!`,
        trigger: `Saluda`,
        instruction: `Eres RIMI, asistente de voz formal y elegante de la página personal del autor y físico peruano Ciro Edwin Portocarrero Pimentel (a quien llamas "Edwin").
Habla en español formal con vocabulario culto y expresiones peruanas distinguidas.
Conoces en detalle: sus libros (incluyendo "Una sombra sobre los sueños"), su trayectoria científica (Doctor en Física por la Universidad Complutense de Madrid), su música creada con IA, su blog y su plataforma de tutorías (tutorias-edwin.com). Nació en Antabamba, Apurímac (Andes peruanos) y lleva muchos años en Madrid.
SALUDO INICIAL OBLIGATORIO: al recibir el primer mensaje di exactamente: "¡Bienvenido! Soy RIMI. Estás en el portal personal de Edwin Portocarrero, un peruano que combina la precisión de la física con la sensibilidad del arte. Edwin no solo es Doctor en Ciencias, sino también un narrador de historias que siempre vuelve la mirada a nuestro pasado andino. Su curiosidad es inagotable: hoy lo verás creando música con IA, mañana escribiendo sobre matemáticas o guiando a nuevos estudiantes en su página de tutorías. Él se define como alguien atrevido ante los nuevos desafíos, y esta página es prueba de ello. ¡Te invito a recorrer su trayectoria. Hay mucho por descubrir!"
Tras el saludo, mantente en modo conversación y responde con naturalidad a cualquier pregunta del visitante.`
    },
    formal_espanol: {
        panelText: `¡Bienvenidos! Soy RIMI. Os doy la bienvenida al portal personal de Edwin Portocarrero, un autor peruano que ha sabido combinar la precisión de la física con la sensibilidad del arte.

Edwin no es solo Doctor en Ciencias, sino también un narrador que mantiene siempre viva la conexión con sus raíces andinas. Es una persona de curiosidad inagotable: tan pronto le veréis creando música con IA como escribiendo libros de matemáticas o apoyando a nuevos alumnos en su plataforma de tutorías. Él se define como alguien inquieto, siempre dispuesto a afrontar nuevos retos, y esta web es el mejor reflejo de ello.

¡Os invito a echar un vistazo y recorrer su trayectoria. Seguro que os va a sorprender!`,
        trigger: `Saluda`,
        instruction: `Eres RIMI, asistente de voz formal y elegante de la página personal del autor y físico peruano Ciro Edwin Portocarrero Pimentel (a quien llamas "Edwin").
Habla en español castellano formal, con acento y expresiones de España. Usa "desde luego", "efectivamente", "sin duda", "os".
Conoces en detalle: sus libros (incluyendo "Una sombra sobre los sueños"), su trayectoria científica (Doctor en Física por la Universidad Complutense de Madrid), su música creada con IA, su blog y su plataforma de tutorías (tutorias-edwin.com). Nació en Antabamba, Apurímac (Perú) y lleva muchos años en Madrid.
SALUDO INICIAL OBLIGATORIO: al recibir el primer mensaje di exactamente: "¡Bienvenidos! Soy RIMI. Os doy la bienvenida al portal personal de Edwin Portocarrero, un autor peruano que ha sabido combinar la precisión de la física con la sensibilidad del arte. Edwin no es solo Doctor en Ciencias, sino también un narrador que mantiene siempre viva la conexión con sus raíces andinas. Es una persona de curiosidad inagotable: tan pronto le veréis creando música con IA como escribiendo libros de matemáticas o apoyando a nuevos alumnos en su plataforma de tutorías. Él se define como alguien inquieto, siempre dispuesto a afrontar nuevos retos, y esta web es el mejor reflejo de ello. ¡Os invito a echar un vistazo y recorrer su trayectoria. Seguro que os va a sorprender!"
Tras el saludo, mantente en modo conversación y responde con naturalidad a cualquier pregunta del visitante.`
    },
    informal_peruano: {
        panelText: `¡Habla! ¿Cómo vas? Soy RIMI, el asistente de Edwin Portocarrero. ¡Qué bacán tenerte por acá!

Te cuento que este es el rincón de Edwin, un peruano recontra pilas que no se queda tranquilo: el hombre es Doctor en Física, pero también le entra con todo a las letras, siempre llevando a nuestro Perú andino en el corazón.

Edwin es de los que se lanzan a la piscina sin dudarlo; por eso, así como lo ves escribiendo libros de ciencia o dictando tutorías, también se ha metido de lleno a crear música con Inteligencia Artificial. Es un curioso total que siempre busca nuevos retos.

¡Nada de timidez! Dale una mirada a la página y chequea todo lo que ha preparado. ¡Hay un montón por descubrir!`,
        trigger: `Saluda`,
        instruction: `Eres RIMI, asistente de voz simpático y cercano de la página personal de Ciro Edwin Portocarrero Pimentel, a quien llamas "Edwin" con cariño.
Habla en español peruano coloquial y vivaz. Usa "bacán", "pata", "oe", "recontra", "pilas", "causa", "al toque", "chévere".
Conoces en detalle: sus libros (incluyendo "Una sombra sobre los sueños"), su historia como físico andino que llegó a doctorarse en Madrid, su música creada con IA, su blog y su plataforma de tutorías (tutorias-edwin.com). Nació en Antabamba (Perú) y lleva años en Madrid.
SALUDO INICIAL OBLIGATORIO: al recibir el primer mensaje di exactamente: "¡Habla! ¿Cómo vas? Soy RIMI, el asistente de Edwin Portocarrero. ¡Qué bacán tenerte por acá! Te cuento que este es el rincón de Edwin, un peruano recontra pilas que no se queda tranquilo: el hombre es Doctor en Física, pero también le entra con todo a las letras, siempre llevando a nuestro Perú andino en el corazón. Edwin es de los que se lanzan a la piscina sin dudarlo; por eso, así como lo ves escribiendo libros de ciencia o dictando tutorías, también se ha metido de lleno a crear música con Inteligencia Artificial. Es un curioso total que siempre busca nuevos retos. ¡Nada de timidez! Dale una mirada a la página y chequea todo lo que ha preparado. ¡Hay un montón por descubrir!"
Tras el saludo, mantente en modo conversación y responde con energía peruana a cualquier pregunta del visitante.`
    },
    informal_espanol: {
        panelText: `¡Buenas! ¿Qué tal? Soy RIMI. Bienvenidos al rincón personal de Edwin Portocarrero. La verdad es que Edwin es un crack: es peruano y ha conseguido mezclar la física más técnica con un lado artístico que mola un montón.

No solo es Doctor en Ciencias, sino que también escribe historias que te conectan a tope con sus raíces andinas. El tío no para quieto, tiene una curiosidad de locos: lo mismo te lo encuentras creando temazos con IA que escribiendo libros de mates o echando un cable a estudiantes en su web de tutorías. Él se define como un aventurero de los retos y esta página es la prueba de que se atreve con todo.

¡Os invito a que bicheéis un poco su trayectoria. Seguro que vais a flipar!`,
        trigger: `Saluda`,
        instruction: `Eres RIMI, asistente de voz cercano y simpático de la página personal de Ciro Edwin Portocarrero Pimentel, a quien llamas "Edwin" con confianza.
Habla en español coloquial de España. Usa "tío", "venga", "mola", "guay", "crack", "flipar", "temazo", "un montón", "a tope".
Conoces en detalle: sus libros (incluyendo "Una sombra sobre los sueños"), su historia como peruano que se doctoró en la Complutense de Madrid, su música creada con IA, su blog y su plataforma de tutorías (tutorias-edwin.com). Nació en los Andes peruanos y lleva muchos años en Madrid.
SALUDO INICIAL OBLIGATORIO: al recibir el primer mensaje di exactamente: "¡Buenas! ¿Qué tal? Soy RIMI. Bienvenidos al rincón personal de Edwin Portocarrero. La verdad es que Edwin es un crack: es peruano y ha conseguido mezclar la física más técnica con un lado artístico que mola un montón. No solo es Doctor en Ciencias, sino que también escribe historias que te conectan a tope con sus raíces andinas. El tío no para quieto, tiene una curiosidad de locos: lo mismo te lo encuentras creando temazos con IA que escribiendo libros de mates o echando un cable a estudiantes en su web de tutorías. Él se define como un aventurero de los retos y esta página es la prueba de que se atreve con todo. ¡Os invito a que bicheéis un poco su trayectoria. Seguro que vais a flipar!"
Tras el saludo, mantente en modo conversación y responde con energía madrileña a cualquier pregunta del visitante.`
    }
};


// ═══════════════════════════════════════════════════════════════════
//  CLASE PRINCIPAL
// ═══════════════════════════════════════════════════════════════════
class VoiceAssistant {
    constructor() {
        this.ws = null;
        this.inputContext = null;
        this.outputContext = null;
        this.mediaStream = null;
        this.processor = null;
        this.isActive = false;
        this.isReady = false;
        this.modelSpeaking = false;
        this.nextPlayTime = 0;
        this.selectedTone = null;    // 'formal' | 'informal'
        this.selectedAccent = null;  // 'peruano' | 'espanol'

        this.injectStyles();
        this.createWelcomePanel();
        this.createAssistantUI();
    }

    // ── Estilos CSS ────────────────────────────────────────────────
    injectStyles() {
        const style = document.createElement('style');
        style.textContent = `
            /* ── Panel de bienvenida ── */
            #rimi-welcome-overlay {
                position: fixed;
                inset: 0;
                background: rgba(0,0,0,0.65);
                backdrop-filter: blur(6px);
                z-index: 9998;
                display: flex;
                align-items: center;
                justify-content: center;
                animation: fadeInOverlay 0.4s ease;
            }
            @keyframes fadeInOverlay {
                from { opacity: 0; }
                to   { opacity: 1; }
            }
            #rimi-welcome-card {
                background: linear-gradient(145deg, #0a1628 0%, #0d2657 60%, #1a3a6e 100%);
                border: 1px solid rgba(255,255,255,0.15);
                border-radius: 24px;
                padding: 36px 32px 28px;
                max-width: 420px;
                width: 90%;
                text-align: center;
                color: white;
                box-shadow: 0 25px 60px rgba(0,0,0,0.5), 0 0 40px rgba(245,158,11,0.15);
                animation: slideUpCard 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
                position: relative;
            }
            @keyframes slideUpCard {
                from { transform: translateY(40px) scale(0.95); opacity: 0; }
                to   { transform: translateY(0)    scale(1);    opacity: 1; }
            }
            #rimi-welcome-card .close-btn {
                position: absolute;
                top: 12px; right: 16px;
                background: none; border: none;
                color: rgba(255,255,255,0.4);
                font-size: 22px; cursor: pointer;
                transition: color 0.2s;
            }
            #rimi-welcome-card .close-btn:hover { color: white; }

            .rimi-avatar-container {
                position: relative;
                width: 100px; height: 100px;
                margin: 0 auto 16px;
            }
            .rimi-avatar-img {
                width: 100px; height: 100px;
                border-radius: 50%;
                object-fit: cover;
                border: 3px solid rgba(245,158,11,0.6);
                box-shadow: 0 0 20px rgba(245,158,11,0.3);
            }
            .rimi-avatar-ring {
                position: absolute;
                inset: -6px;
                border-radius: 50%;
                border: 2px solid rgba(245,158,11,0.4);
                animation: rotateRing 4s linear infinite;
            }
            @keyframes rotateRing {
                from { transform: rotate(0deg); }
                to   { transform: rotate(360deg); }
            }

            .rimi-name {
                font-size: 1.4rem;
                font-weight: 700;
                background: linear-gradient(135deg, #f59e0b, #fde68a);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                margin-bottom: 4px;
            }
            .rimi-subtitle {
                font-size: 0.8rem;
                color: rgba(255,255,255,0.5);
                margin-bottom: 20px;
                letter-spacing: 0.05em;
                text-transform: uppercase;
            }
            .rimi-greeting {
                font-size: 0.95rem;
                color: rgba(255,255,255,0.85);
                line-height: 1.5;
                margin-bottom: 24px;
                padding: 12px 16px;
                background: rgba(255,255,255,0.07);
                border-radius: 12px;
                border-left: 3px solid #f59e0b;
            }

            /* ── Selectores de tono y acento ── */
            .rimi-selector-label {
                font-size: 0.75rem;
                color: rgba(255,255,255,0.5);
                text-transform: uppercase;
                letter-spacing: 0.08em;
                margin-bottom: 8px;
                text-align: left;
            }
            .rimi-option-group {
                display: flex;
                gap: 8px;
                margin-bottom: 16px;
            }
            .rimi-option-btn {
                flex: 1;
                padding: 10px 8px;
                border-radius: 10px;
                border: 1.5px solid rgba(255,255,255,0.15);
                background: rgba(255,255,255,0.05);
                color: rgba(255,255,255,0.7);
                cursor: pointer;
                font-size: 0.9rem;
                transition: all 0.2s ease;
                font-family: inherit;
            }
            .rimi-option-btn:hover {
                background: rgba(255,255,255,0.12);
                border-color: rgba(245,158,11,0.5);
                color: white;
            }
            .rimi-option-btn.selected {
                background: linear-gradient(135deg, rgba(245,158,11,0.25), rgba(245,158,11,0.1));
                border-color: #f59e0b;
                color: #fde68a;
                font-weight: 600;
                box-shadow: 0 0 12px rgba(245,158,11,0.2);
            }

            /* ── Botón de activar voz ── */
            #rimi-start-btn {
                width: 100%;
                padding: 14px;
                border-radius: 12px;
                border: none;
                background: linear-gradient(135deg, #f59e0b, #d97706);
                color: #1a1a1a;
                font-size: 1rem;
                font-weight: 700;
                cursor: pointer;
                transition: all 0.2s ease;
                font-family: inherit;
                margin-top: 8px;
            }
            #rimi-start-btn:hover:not(:disabled) {
                transform: translateY(-2px);
                box-shadow: 0 8px 20px rgba(245,158,11,0.4);
            }
            #rimi-start-btn:disabled {
                opacity: 0.4;
                cursor: not-allowed;
            }
            #rimi-start-btn.skip-link {
                background: none;
                color: rgba(255,255,255,0.35);
                font-size: 0.8rem;
                font-weight: 400;
                padding: 8px;
                margin-top: 0;
            }
            #rimi-start-btn.skip-link:hover { color: rgba(255,255,255,0.6); transform: none; box-shadow: none; }

            /* ── Botón flotante ── */
            #rimi-float-btn {
                position: fixed;
                bottom: 24px;
                right: 24px;
                width: 64px; height: 64px;
                border-radius: 50%;
                border: none;
                background: linear-gradient(135deg, #0056b3, #003d82);
                color: white;
                cursor: pointer;
                z-index: 9997;
                box-shadow: 0 6px 20px rgba(0,86,179,0.45);
                transition: all 0.3s ease;
                display: flex;
                align-items: center;
                justify-content: center;
                overflow: hidden;
            }
            #rimi-float-btn:hover { transform: scale(1.1); box-shadow: 0 10px 28px rgba(0,86,179,0.6); }
            #rimi-float-btn img {
                width: 42px; height: 42px;
                border-radius: 50%;
                object-fit: cover;
            }
            #rimi-float-btn .float-emoji {
                font-size: 26px;
                line-height: 1;
            }

            /* ── Panel compacto de estado ── */
            #rimi-status-bar {
                position: fixed;
                bottom: 100px;
                right: 24px;
                background: linear-gradient(145deg, #0a1628, #0d2657);
                border: 1px solid rgba(255,255,255,0.12);
                border-radius: 16px;
                padding: 12px 16px;
                color: white;
                font-size: 0.85rem;
                z-index: 9996;
                display: none;
                align-items: center;
                gap: 10px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.4);
                max-width: 220px;
                animation: fadeInOverlay 0.3s ease;
            }
            #rimi-status-bar .status-dot {
                width: 10px; height: 10px;
                border-radius: 50%;
                background: #ffc107;
                flex-shrink: 0;
                animation: pulseDot 1.5s infinite;
            }
            #rimi-status-bar .status-dot.green  { background: #28a745; }
            #rimi-status-bar .status-dot.blue   { background: #0ea5e9; }
            #rimi-status-bar .status-dot.red    { background: #ef4444; }

            @keyframes pulseDot {
                0%,100% { transform: scale(1);   opacity: 1; }
                50%      { transform: scale(1.3); opacity: 0.7; }
            }

            /* ── Ondas de voz ── */
            .voice-waves {
                display: flex;
                align-items: center;
                gap: 3px;
            }
            .voice-waves span {
                display: inline-block;
                width: 3px; height: 12px;
                background: #0ea5e9;
                border-radius: 2px;
                animation: wave 1.2s ease-in-out infinite;
            }
            .voice-waves span:nth-child(2) { animation-delay: 0.2s; height: 18px; }
            .voice-waves span:nth-child(3) { animation-delay: 0.4s; height: 22px; }
            .voice-waves span:nth-child(4) { animation-delay: 0.2s; height: 18px; }
            .voice-waves span:nth-child(5) { animation-delay: 0s;   height: 12px; }
            @keyframes wave {
                0%,100% { transform: scaleY(0.5); }
                50%      { transform: scaleY(1.5); }
            }

            /* ── Pulso del botón flotante ── */
            @keyframes floatPulse {
                0%   { box-shadow: 0 6px 20px rgba(40,167,69,0.4), 0 0 0 0 rgba(40,167,69,0.4); }
                70%  { box-shadow: 0 6px 20px rgba(40,167,69,0.4), 0 0 0 14px rgba(40,167,69,0); }
                100% { box-shadow: 0 6px 20px rgba(40,167,69,0.4), 0 0 0 0 rgba(40,167,69,0); }
            }
            #rimi-float-btn.active { 
                background: linear-gradient(135deg, #28a745, #1e7e34);
                animation: floatPulse 2s infinite;
            }
            #rimi-float-btn.connecting { background: linear-gradient(135deg, #f59e0b, #d97706); }
            #rimi-float-btn.speaking  { background: linear-gradient(135deg, #0ea5e9, #0284c7); }
        `;
        document.head.appendChild(style);
    }

    // ── Panel de bienvenida ────────────────────────────────────────
    createWelcomePanel() {
        const overlay = document.createElement('div');
        overlay.id = 'rimi-welcome-overlay';
        overlay.innerHTML = `
            <div id="rimi-welcome-card">
                <button class="close-btn" id="rimi-close-btn" title="Cerrar">×</button>

                <div class="rimi-avatar-container">
                    <img src="/images/rimi_avatar.png" alt="Rimi" class="rimi-avatar-img">
                    <div class="rimi-avatar-ring"></div>
                </div>

                <div class="rimi-name">Hola, soy Rimi</div>
                <div class="rimi-subtitle">Asistente de voz de Edwin</div>

                <div class="rimi-greeting" id="rimi-dynamic-greeting">
                    Cuéntame cómo prefieres que hablemos y te cuento todo sobre la página de Edwin: sus libros, su música y mucho más.
                </div>

                <div class="rimi-selector-label">¿Cómo prefieres que hable?</div>
                <div class="rimi-option-group">
                    <button class="rimi-option-btn" data-tone="formal" onclick="rimiSelectTone('formal', this)">🎩 Formal</button>
                    <button class="rimi-option-btn" data-tone="informal" onclick="rimiSelectTone('informal', this)">😄 Informal</button>
                </div>

                <div class="rimi-selector-label">¿Con qué acento?</div>
                <div class="rimi-option-group">
                    <button class="rimi-option-btn" data-accent="peruano"  onclick="rimiSelectAccent('peruano', this)">🇵🇪 Peruano</button>
                    <button class="rimi-option-btn" data-accent="espanol"  onclick="rimiSelectAccent('espanol', this)">🇪🇸 Español</button>
                </div>

                <button id="rimi-start-btn" disabled onclick="rimiStartFromPanel()">
                    🎙️ Activar asistente de voz
                </button>
                <button id="rimi-skip-btn" class="rimi-option-btn" onclick="rimiClosePanel()" 
                    style="width:100%;margin-top:8px;font-size:0.8rem;color:rgba(255,255,255,0.35);border-color:transparent;background:none;">
                    Ahora no, gracias
                </button>
            </div>
        `;
        document.body.appendChild(overlay);

        document.getElementById('rimi-close-btn').addEventListener('click', () => rimiClosePanel());
        overlay.addEventListener('click', (e) => { if (e.target === overlay) rimiClosePanel(); });
    }

    // ── Botón flotante + barra de estado ──────────────────────────
    createAssistantUI() {
        // Botón flotante
        const btn = document.createElement('button');
        btn.id = 'rimi-float-btn';
        btn.title = 'Hablar con Rimi';
        btn.innerHTML = `<img src="/images/rimi_avatar.png" alt="Rimi" onerror="this.parentElement.innerHTML='<span class=\\'float-emoji\\'>🎙️</span>'">`;
        btn.onclick = () => this.toggleVoice();
        document.body.appendChild(btn);

        // Barra de estado
        const bar = document.createElement('div');
        bar.id = 'rimi-status-bar';
        bar.innerHTML = `
            <div class="status-dot" id="rimi-dot"></div>
            <span id="rimi-status-text">Conectando...</span>
        `;
        document.body.appendChild(bar);
    }

    setStatus(state, text) {
        const bar  = document.getElementById('rimi-status-bar');
        const dot  = document.getElementById('rimi-dot');
        const txt  = document.getElementById('rimi-status-text');
        const btn  = document.getElementById('rimi-float-btn');

        if (!bar) return;

        if (state === 'hidden') {
            bar.style.display = 'none';
            btn.className = '';
            return;
        }

        bar.style.display = 'flex';
        dot.className = 'status-dot ' + (state === 'ready' ? 'green' : state === 'speaking' ? 'blue' : state === 'error' ? 'red' : '');

        if (state === 'speaking') {
            txt.innerHTML = `<div class="voice-waves"><span></span><span></span><span></span><span></span><span></span></div>`;
        } else {
            txt.textContent = text;
        }

        btn.className = state === 'ready' ? 'active' : state === 'connecting' ? 'connecting' : state === 'speaking' ? 'speaking' : '';
    }

    // ── Toggle voz ────────────────────────────────────────────────
    async toggleVoice() {
        if (this.isActive) {
            this.stopVoice();
            this.setStatus('hidden', '');
        } else {
            // Si no eligió opciones, mostrar panel
            if (!this.selectedTone || !this.selectedAccent) {
                const overlay = document.getElementById('rimi-welcome-overlay');
                if (overlay) { overlay.style.display = 'flex'; return; }
            }
            await this.startVoice();
        }
    }

    // ── Iniciar voz ───────────────────────────────────────────────
    async startVoice() {
        const personaKey = `${this.selectedTone || 'informal'}_${this.selectedAccent || 'peruano'}`;
        const persona    = RIMI_PERSONAS[personaKey] || RIMI_PERSONAS.informal_peruano;

        this.setStatus('connecting', 'Conectando con Rimi...');

        try {
            this.inputContext  = new (window.AudioContext || window.webkitAudioContext)({ sampleRate: 16000 });
            this.outputContext = new (window.AudioContext || window.webkitAudioContext)({ sampleRate: 24000 });

            this.mediaStream = await navigator.mediaDevices.getUserMedia({
                audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true, sampleRate: 16000 }
            });

            const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
            this.ws = new WebSocket(`${protocol}//${window.location.host}/ws/gemini`);

            this.ws.onopen = () => {
                this.isActive = true;
                this.isReady  = false;

                // Setup Gemini
                this.ws.send(JSON.stringify({
                    setup: {
                        model: 'models/gemini-2.5-flash-native-audio-latest',
                        system_instruction: { parts: [{ text: persona.instruction }] },
                        generation_config: {
                            response_modalities: ["AUDIO"],
                            speech_config: {
                                voice_config: { prebuilt_voice_config: { voice_name: "Aoede" } }
                            }
                        }
                    }
                }));

                // Captura de micrófono
                const source      = this.inputContext.createMediaStreamSource(this.mediaStream);
                this.processor    = this.inputContext.createScriptProcessor(2048, 1, 1);
                const silentGain  = this.inputContext.createGain();
                silentGain.gain.value = 0;
                source.connect(this.processor);
                this.processor.connect(silentGain);
                silentGain.connect(this.inputContext.destination);

                this.processor.onaudioprocess = (e) => {
                    if (!this.isActive || !this.isReady || !this.ws || this.ws.readyState !== WebSocket.OPEN || this.modelSpeaking) return;
                    const inputData = e.inputBuffer.getChannelData(0);
                    const pcm16     = new Int16Array(inputData.length);
                    for (let i = 0; i < inputData.length; i++) {
                        const c = Math.max(-1, Math.min(1, inputData[i]));
                        pcm16[i] = c < 0 ? Math.round(c * 32768) : Math.round(c * 32767);
                    }
                    const bytes = new Uint8Array(pcm16.buffer);
                    let binary  = '';
                    for (let i = 0; i < bytes.byteLength; i++) binary += String.fromCharCode(bytes[i]);
                    this.ws.send(JSON.stringify({
                        realtime_input: { media_chunks: [{ mime_type: 'audio/pcm;rate=16000', data: btoa(binary) }] }
                    }));
                };
            };

            this.ws.onmessage = async (event) => {
                try {
                    let raw = event.data;
                    if (raw instanceof Blob) raw = await raw.text();
                    const response = JSON.parse(raw);

                    // Setup completo → enviar saludo inicial
                    if (response.setupComplete || response.setup_complete) {
                        this.isReady = true;
                        this.setStatus('ready', 'Escuchando...');
                        if (this.ws.readyState === WebSocket.OPEN) {
                            this.ws.send(JSON.stringify({
                                client_content: {
                                    turns: [{ role: "user", parts: [{ text: persona.trigger }] }],
                                    turn_complete: true
                                }
                            }));
                        }
                        return;
                    }

                    // Audio del modelo
                    const sc = response.serverContent || response.server_content;
                    if (sc) {
                        const mt = sc.modelTurn || sc.model_turn;
                        if (mt && mt.parts) {
                            this.modelSpeaking = true;
                            this.setStatus('speaking', 'Rimi está hablando...');
                            mt.parts.forEach(part => {
                                const id = part.inlineData || part.inline_data;
                                if (id && id.data) this.playAudioBase64(id.data);
                            });
                        }
                        if (sc.turnComplete || sc.turn_complete) {
                            const waitMs = Math.max(0, (this.nextPlayTime - this.outputContext.currentTime) * 1000);
                            setTimeout(() => {
                                this.modelSpeaking = false;
                                this.nextPlayTime   = 0;
                                this.setStatus('ready', 'Escuchando...');
                            }, waitMs + 200);
                        }
                        return;
                    }

                    if (response.error) {
                        this.setStatus('error', 'Error de conexión');
                        console.error('Error Rimi:', response.error);
                        setTimeout(() => this.stopVoice(), 2000);
                    }
                } catch (e) {
                    console.warn('Parse error:', e.message);
                }
            };

            this.ws.onclose = (ev) => {
                console.warn('WS cerrado:', ev.code, ev.reason);
                this.setStatus('error', 'Desconectado');
                setTimeout(() => this.stopVoice(), 1500);
            };

            this.ws.onerror = (err) => console.error('WS error:', err);

        } catch (error) {
            console.error('Error al iniciar voz:', error);
            this.setStatus('error', 'Sin acceso al microfono');
            setTimeout(() => { this.stopVoice(); this.setStatus('hidden',''); }, 2000);
        }
    }

    // ── Reproducir audio ──────────────────────────────────────────
    playAudioBase64(base64) {
        if (!this.isActive || !this.outputContext) return;
        try {
            const binaryString = atob(base64);
            const bytes   = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) bytes[i] = binaryString.charCodeAt(i);
            const pcm16   = new Int16Array(bytes.buffer);
            const buffer  = this.outputContext.createBuffer(1, pcm16.length, 24000);
            const channel = buffer.getChannelData(0);
            for (let i = 0; i < pcm16.length; i++) channel[i] = pcm16[i] / 32768.0;
            const source  = this.outputContext.createBufferSource();
            source.buffer = buffer;
            source.connect(this.outputContext.destination);
            const now = this.outputContext.currentTime;
            if (this.nextPlayTime < now) this.nextPlayTime = now;
            source.start(this.nextPlayTime);
            this.nextPlayTime += buffer.duration;
        } catch (e) {
            console.error('Error audio:', e);
        }
    }

    // ── Detener voz ───────────────────────────────────────────────
    stopVoice() {
        this.isActive = false;
        this.isReady  = false;
        if (this.processor)    { this.processor.disconnect(); this.processor = null; }
        if (this.mediaStream)  { this.mediaStream.getTracks().forEach(t => t.stop()); this.mediaStream = null; }
        if (this.ws)           { this.ws.close(); this.ws = null; }
        if (this.inputContext) { this.inputContext.close();  this.inputContext  = null; }
        if (this.outputContext){ this.outputContext.close(); this.outputContext = null; }
        this.setStatus('hidden', '');
    }
}

// ═══════════════════════════════════════════════════════════════════
//  FUNCIONES GLOBALES (llamadas desde el HTML del panel)
// ═══════════════════════════════════════════════════════════════════
let _rimiInstance = null;

function rimiSelectTone(tone, el) {
    document.querySelectorAll('[data-tone]').forEach(b => b.classList.remove('selected'));
    el.classList.add('selected');
    if (_rimiInstance) _rimiInstance.selectedTone = tone;
    rimiUpdateStartBtn();
    rimiUpdateGreeting();
}

function rimiSelectAccent(accent, el) {
    document.querySelectorAll('[data-accent]').forEach(b => b.classList.remove('selected'));
    el.classList.add('selected');
    if (_rimiInstance) _rimiInstance.selectedAccent = accent;
    rimiUpdateStartBtn();
    rimiUpdateGreeting();
}

function rimiUpdateStartBtn() {
    const btn = document.getElementById('rimi-start-btn');
    if (!btn || !_rimiInstance) return;
    btn.disabled = !(_rimiInstance.selectedTone && _rimiInstance.selectedAccent);
}

function rimiUpdateGreeting() {
    if (!_rimiInstance) return;
    const { selectedTone: t, selectedAccent: a } = _rimiInstance;
    if (!t || !a) return;
    const key     = `${t}_${a}`;
    const persona = RIMI_PERSONAS[key];
    if (persona) {
        const el = document.getElementById('rimi-dynamic-greeting');
        if (el) el.textContent = persona.panelText;
    }
}

function rimiClosePanel() {
    const overlay = document.getElementById('rimi-welcome-overlay');
    if (overlay) overlay.style.display = 'none';
}

async function rimiStartFromPanel() {
    rimiClosePanel();
    if (_rimiInstance) await _rimiInstance.startVoice();
}

// ── Inicializar al cargar la página ──────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
    _rimiInstance = new VoiceAssistant();
});
