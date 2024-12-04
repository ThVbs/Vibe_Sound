document.getElementById('button_voltar_inicio').addEventListener('click', () => {
  window.location.href = 'principal.html';
});

function toggleMenu() {
    const menu = document.getElementById('dropdownMenu');
    menu.classList.toggle('hidden');
}

document.addEventListener('click', function (e) {
    const menu = document.getElementById('dropdownMenu');
    const perfil = document.getElementById('img_pefil');
    if (!menu.contains(e.target) && e.target !== perfil) {
      menu.classList.add('hidden');
    }
});

function carregarPerfil() {
    const areaMusics = document.getElementById('area_musics');
    areaMusics.innerHTML = `
        <div id="area_usuario">
            <img id="img_usuario" src="../Image/imgPerfil.jpeg" alt="Foto do dono do perfil">
            <div id="info_usuario">
                <p id="text_perfil">Perfil</p>
                <h1 id="nome_user">Mike Wazowski</h1>
            </div>
        </div>
        <div id="infos">
            <a href="../Views/login.html" id="cancelar_conta">Deseja cancelar sua conta?</a>
        </div>
    `;
}

function carregarPlaylistSertanejo() {
    const areaMusics = document.getElementById('area_musics');
    areaMusics.innerHTML = `
        <div id="area_musica">
            <img id="img_sertanejo" src="../Image/mais_escutados1.jpeg" alt="Foto da playlist">
            <div id="info_musica">
                <p id="text_sertanejo">Playlist</p>
                <h1 id="nome_sertanejo">Sertanejo</h1>
            </div>
        </div>
        <div id="area_musicas_album">
            <div id="infos_musicas">
                <span id="titulo">Título</span>
                <span>Cantor</span>
                <span>Duração</span>
            </div>
            <div id="linha_separadora"></div>
            <div id="musicas" onclick="abrirMusicaDeslumbrante()">
                <div id="img_titulo">
                    <img id="img_musica" src="../Image/imgDeslumbrante.jpeg" alt="">
                    <span id="text_titulo_musica">Deslumbrante</span>
                </div>
                <span>Hugo & Guilherme</span>
                <span>2:59</span>
            </div>
            <div id="musicas" onclick="abrirMusicaSeuOposto()">
                <div id="img_titulo">
                    <img id="img_musica" src="../Image/imgSeuOposto.jpeg" alt="">
                    <span id="text_titulo_musica">Seu Oposto</span>
                </div>
                <span>George Henrique & Rodrigo</span>
                <span>2:30</span>
            </div>
            <div id="musicas" onclick="abrirMusicaMediaBoa()">
                <div id="img_titulo">
                    <img id="img_musica" src="../Image/imgMediaBoa.jpeg" alt="">
                    <span id="text_titulo_musica">Média Boa</span>
                </div>
                <span>Felipe e Rodrigo</span>
                <span>2:25</span>
            </div>
            <div id="musicas" onclick="abrirMusicaMeBloqueia()">
                <div id="img_titulo">
                    <img id="img_musica" src="../Image/imgMeBloqueia.jpg" alt="">
                    <span id="text_titulo_musica">Me Bloqueia</span>
                </div>
                <span>Zé Neto & Cristiano</span>
                <span>2:39</span>
            </div>
            <div id="musicas" onclick="abrirMusicaDeuMoral()">
                <div id="img_titulo">
                    <img id="img_musica" src="../Image/imgDeuModal.jpg" alt="">
                    <span id="text_titulo_musica">Deu Moral</span>
                </div>
                <span>Zé Neto & Cristiano</span>
                <span>2:05</span>
            </div>
        </div>
    `;
}

function carregarZeNetoCristiano() {
  const areaMusics = document.getElementById('area_musics');
  areaMusics.innerHTML = `
      <div id="area_musica">
          <img id="img_sertanejo" src="../Image/zeNetoCristiano.jpg" alt="Foto da playlist">
          <div id="info_musica">
              <p id="text_sertanejo">Dupla</p>
              <h1 id="nome_sertanejo">Zé Neto & Cristiano</h1>
          </div>
      </div>
      <div id="area_musicas_album">
          <div id="musica_dupla_znc">
              <h3 id="musica_znc">Músicas da Dupla Zé Neto & Cristiano</h3>
          </div>
          <div id="infos_musicas">
              <span id="titulo">Título</span>
              <span>Duração</span>
          </div>
          <div id="linha_separadora"></div>
          <div id="musicas" onclick="abrirMusicaMeBloqueia()">
              <div id="img_titulo">
                  <img id="img_musica" src="../Image/imgMeBloqueia.jpg" alt="">
                  <span id="text_titulo_musica">Me Bloqueia</span>
              </div>
              <span>2:39</span>
          </div>
          <div id="musicas" onclick="abrirMusicaDeuMoral()">
              <div id="img_titulo">
                  <img id="img_musica" src="../Image/imgDeuModal.jpg" alt="">
                  <span id="text_titulo_musica">Deu Moral</span>
              </div>
              <span>2:05</span>
          </div>
      </div>
  `;
}

function abrirMusicaDeuMoral() {
  const areaMusics = document.getElementById('area_musics');
  areaMusics.innerHTML = `
      <div id="reproducao_musica">
          <p id="nome_pasta">Sertanejo</p>
          <div id="reproducao">
              <img src="../Image/imgDeuModal.jpg" alt="" id="img_play">
              <p id="nome_musica">Deu Modal</p>
              <p id="nome_cantor">Zé Neto & Cristiano</p>
          </div>
          <audio id="play" controls>
              <source src="../Musicas/OCeuExplicaTudo.mp3" type="audio/mpeg">
          </audio>            
      </div>
  `
}
function abrirMusicaCeuExplicaTudo() {
  const areaMusics = document.getElementById('area_musics');
  areaMusics.innerHTML = `
      <div id="reproducao_musica">
          <p id="nome_pasta">Sertanejo</p>
          <div id="reproducao">
              <img src="../Image/recent1.jpeg" alt="" id="img_play">
              <p id="nome_musica">O Céu Explica Tudo</p>
              <p id="nome_cantor">Henrique e Juliano</p>
          </div>
          <audio id="play" controls>
              <source src="../Musicas/OCeuExplicaTudo.mp3" type="audio/mpeg">
          </audio>            
      </div>
  `
}
function abrirMusicaDeslumbrante() {
    const areaMusics = document.getElementById('area_musics');
    areaMusics.innerHTML = `
        <div id="reproducao_musica">
            <p id="nome_pasta">Sertanejo</p>
            <div id="reproducao">
                <img src="../Image/imgDeslumbrante.jpeg" alt="" id="img_play">
                <p id="nome_musica">Deslumbrante</p>
                <p id="nome_cantor">Hugo & Guilherme</p>
            </div>
            <audio id="play" controls>
                <source src="../Musicas/Deslumbrante.mp3" type="audio/mpeg">
            </audio>            
        </div>
    `
}
function abrirMusicaSeuOposto() {
    const areaMusics = document.getElementById('area_musics');
    areaMusics.innerHTML = `
        <div id="reproducao_musica">
            <p id="nome_pasta">Sertanejo</p>
            <div id="reproducao">
                <img src="../Image/imgSeuOposto.jpeg" alt="" id="img_play">
                <p id="nome_musica">Seu Oposto</p>
                <p id="nome_cantor">George Henrique & Rodrigo</p>
            </div>
            <audio id="play" controls>
                <source src="../Musicas/SeuOposto.mp3" type="audio/mpeg">
            </audio>            
        </div>
    `
}
function abrirMusicaMediaBoa() {
    const areaMusics = document.getElementById('area_musics');
    areaMusics.innerHTML = `
        <div id="reproducao_musica">
            <p id="nome_pasta">Sertanejo</p>
            <div id="reproducao">
                <img src="../Image/imgMediaBoa.jpeg" alt="" id="img_play">
                <p id="nome_musica">Média Boa</p>
                <p id="nome_cantor">Felipe e Rodrigo</p>
            </div>
            <audio id="play" controls>
                <source src="../Musicas/MediaBoa.mp3" type="audio/mpeg">
            </audio>            
        </div>
    `
}
function abrirMusicaMeBloqueia() {
    const areaMusics = document.getElementById('area_musics');
    areaMusics.innerHTML = `
        <div id="reproducao_musica">
            <p id="nome_pasta">Sertanejo</p>
            <div id="reproducao">
                <img src="../Image/imgMeBloqueia.jpg" alt="" id="img_play">
                <p id="nome_musica">Me Bloqueia</p>
                <p id="nome_cantor">Zé Neto & Cristiano</p>
            </div>
            <audio id="play" controls>
                <source src="../Musicas/MeBloqueia.mp3" type="audio/mpeg">
            </audio>            
        </div>
    `
}