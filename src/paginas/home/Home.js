import './Home.css';
import logo from '../../img/lo.png';
import Simbolo from '../../img/sim.png';
import luffy from '../../img/luffy.jpg';
import Nami from '../../img/nami.jpg'
import Usoop from '../../img/usop.jpg';
import Zoro from '../../img/zoro.jpg';
import Sanji from '../../img/sanji.jpg';
import Chopper from '../../img/chopper.jpg';
import Nico from '../../img/nico.jpg';
import Franky from '../../img/franku.jpg';
import Brook from '../../img/brook.jpg';



function Home() {
  return (
    <div>
      <div className='home-destaque'>
        <div className='home-destaque-op'>
          <div className='home-info'>
            <div className='home-info-img'>
              <img src={logo} />
            </div>
            <div className='home-info-texto'>
              <p>
                A série foca em Monkey D. Luffy, um jovem feito de borracha, que, inspirado em seu ídolo de infância,
                o poderoso pirata Shanks, o Ruivo, parte em uma jornada do mar do East Blue para encontrar o tesouro mítico, o One Piece,
                e proclamar-se o Rei dos Piratas. Em um esforço para organizar sua própria tripulação, os Piratas do Chapéu de Palha, Luffy resgata
                e faz amizade com um caçador de piratas e espadachim chamado Roronoa Zoro, e eles partem em busca do tesouro titular.
                Eles são acompanhados em sua jornada por Nami, uma ladra e navegadora obcecada por dinheiro; Usopp, um franco-atirador
                e mentiroso compulsivo; e Sanji, um cozinheiro amoroso mas cavalheiresco. Eles adquirem um navio, o Going Merry,
                e se envolvem em confrontos com notórios piratas do East Blue.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='info-tripulacao'>
        <div className='divisoria'>
          <img src={Simbolo} />
          <h3>Tripulação do Chapéu de Palha </h3>
        </div>
        <div className='tripulacao'>
          <div className='tripulacao-titulo'>

            {/* Cartaz do Luffy */}
          </div>
          <div className='tripulacao-cartaz'>
            <div className='cartazes'>
              <div className='cartaz-frente'>
                <img src={luffy} />
              </div>
              <div className='cartaz-atras'>
                <p>
                  Luffy ganhou extraordinários poderes elásticos ao comer o Gomu no Mi. Depois de consumir o Gomu Gomu no Mi, o corpo de Luffy se tornou como borracha, dando a ele a capacidade de se esticar e atacar longas distâncias
                </p>
                <p>HABILIDADES</p>
                <li>Gears Second</li>
                <li>Gears Third</li>
                <li>Gears Fourth</li>
                <li>Haki</li>
              </div>
            </div>
          </div>


          <div className='tripulacao-cartaz'>
            <div className='cartazes'>
              <div className='cartaz-frente'>
                <img src={Zoro} />
              </div>
              <div className='cartaz-atras'>
                <p>
                  Roronoa Zoro também conhecido como "Caçador de Piratas". Ele é um dos quatro melhores lutadores da tripulação, ao lado de Luffy, Sanji e Jinbe, e seu sonho é se tornar o maior espadachim do mundo.
                  <br></br>HABILIDADES
                </p>
                <li> Esgrima com 3 espadas</li>
                <li> Flying Slash Attack</li>
                <li> Ittoryu</li>
                <li> Kiki Kyutoryu: Asura</li>
                <li> Haki</li>
              </div>
            </div>
          </div>

          <div className='tripulacao-cartaz'>
            <div className='cartazes'>
              <div className='cartaz-frente'>
                <img src={Nami} />
              </div>
              <div className='cartaz-atras'>
                <p>
                  A "Gata Ladra" Nami é a navegadora dos Piratas do Chapéu de Palha. Ela foi o terceiro membro da tripulação e a segunda a entrar. Ela é a irmã adotiva de Nojiko, desde que as duas ficaram órfãs e foram levadas por Bell-mère.
                  <br></br> HABILIDADES
                </p>
                <li>Navegação</li>
                <li>Cartografia</li>
                <li>Roubo</li>
                <li>Negociação</li>
                <li>Financeiro</li>
              </div>
            </div>
          </div>

          <div className='tripulacao-cartaz'>
            <div className='cartazes'>
              <div className='cartaz-frente'>
                <img src={Usoop} />
              </div>
              <div className='cartaz-atras'>
                <p>
                  "God" Usopp é o Atirador dos Piratas do Chapéu de Palha. Ele é o quarto membro da tripulação e o terceiro a entrar, fazendo isso no final do Arco Vila Syrup. Usopp sonha em se tornar um corajoso guerreiro do mar como seu pai, e vive todos os dias em busca de viver à altura deste sonho.
                  <br></br> HABILIDADES
                </p>
                <li>Kabuto</li>
                <li>Pop Green</li>
                <li>Pop Green</li>
                <li>Haki/Kenbunshoku</li>

              </div>
            </div>
          </div>

          <div className='tripulacao-cartaz'>
            <div className='cartazes'>
              <div className='cartaz-frente'>
                <img src={Sanji} />
              </div>
              <div className='cartaz-atras'>
                <p>
                  "Perna Preta" Sanji, nascido como Vinsmoke Sanji, e também é o cozinheiro dos Piratas do Chapéu de Palha. Ele também é o terceiro filho e a quarta criança da Família Vinsmoke, tornando-o um príncipe do Reino Germa.
                  Ele é oficialmente o quinto membro da tripulação e o quarto a se juntar. <br></br>HABILIDADES
                </p>
                <li>Mutton Shot</li>
                <li>Anti-Manner Kick Course</li>
                <li>Kenbunshoku Haki e Busoshoku Haki.</li>
              </div>
            </div>
          </div>

          <div className='tripulacao-cartaz'>
            <div className='cartazes'>
              <div className='cartaz-frente'>
                <img src={Chopper} />
              </div>
              <div className='cartaz-atras'>
                <p>
                  Tony Tony Chopper é uma rena. Ele é o médico da tripulação dos Piratas do Chapéu de Palha. Chopper é uma rena que, após comer a Hito Hito no Mi, adquiriu a habilidade de se transformar e raciocinar como os humanos, e ele é o sexto membro.
                  <br></br>HABILIDADES
                </p>
                <li>Brain Point</li>
                <li>Jumping Point</li>
                <li>Arm Point</li>
                <li>Monster Point</li>
              </div>
            </div>
          </div>

          <div className='tripulacao-cartaz'>
            <div className='cartazes'>
              <div className='cartaz-frente'>
                <img src={Nico} />
              </div>
              <div className='cartaz-atras'>
                <p>
                  Nico Robin é a arqueóloga dos Piratas do Chapéu de Palha. Robin comeu uma Akuma no Mi do tipo Paramecia chamada Hana Hana no Mi.
                  Ela pode produzir suas partes do corpo em qualquer superfície.
                  <br></br>HABILIDADES
                </p>
                <li> Habilidades arqueólogicas </li>
                <li> Seis Fleur: Twist </li>
                <li> Ocho Fleur: Flip </li>
                <li> Cuerpo Fleur: Doble Clutch </li>
              </div>
            </div>
          </div>

          <div className='tripulacao-cartaz'>
            <div className='cartazes'>
              <div className='cartaz-frente'>
                <img src={Franky} />
              </div>
              <div className='cartaz-atras'>
                <p>
                Franky é o carpinteiro dos Piratas do Chapéu de Palha.
                A pedido da Família Franky, Franky foi permitido se juntar aos Chapéu de Palha para realizar seu sonho. Ele é o oitavo membro da tripulação dos Chapéus de Palha e o sétimo a se juntar ao bando de Luffy
                  <br></br>HABILIDADES
                </p>
                <li>Gênio em construção naval, engenharia e carpintaria </li>
                <li>Corpo-cyborg</li>
              </div>
            </div>
          </div>

          <div className='tripulacao-cartaz'>
            <div className='cartazes'>
              <div className='cartaz-frente'>
                <img src={Brook} />
              </div>
              <div className='cartaz-atras'>
                <p>
                Brook é o Músico dos Piratas do Chapéu de Palha. 
                Ele é um esqueleto!
                Ele é um usuário de Akuma no Mi que comeu a Yomi Yomi no Mi, o que o torna um pseudo-imortal por causa de seus poderes. 
                Ele é o nono membro do Bando do Chapéu de Palha, e o oitavo a se juntar à tripulação de Luffy.
                <br></br> Habilidades
                </p>
                <li>Inteligência tática</li>
              </div>
            </div>
          </div>


        </div>













      </div>
    </div>
  )
}

export default Home