var Personagem = new Object ();
Personagem.Dados_Age = 25;
Personagem.Dados_Name = "Aniak";
Personagem.Dados_Class = "Alsaif";
Personagem.Dados_Especie = "Dovah";
Personagem.Dados_Langage = "Ingland" , "Dovah" ;
Personagem.Dados_Player = "Tamer";
Personagem.Dados_XP = 2670 ;
Personagem.Dados_Level = 
if Personagem.Dados_XP < 1000 THEN Personagem.Dados_XP == 1 ;
if Personagem.Dados_XP < 3000 THEN Personagem.Dados_XP == 2 ;
if Personagem.Dados_XP < 6000 THEN Personagem.Dados_XP == 3 ;
if Personagem.Dados_XP < 10000 THEN Personagem.Dados_XP == 4 ;
if Personagem.Dados_XP < 15000 THEN Personagem.Dados_XP == 5 ;
if Personagem.Dados_XP < 21000 THEN Personagem.Dados_XP == 6 ;
if Personagem.Dados_XP < 28000 THEN Personagem.Dados_XP == 7 ;
if Personagem.Dados_XP < 36000 THEN Personagem.Dados_XP == 8 ;
if Personagem.Dados_XP < 45000 THEN Personagem.Dados_XP == 9 ;
if Personagem.Dados_XP < 55000 THEN Personagem.Dados_XP == 10 ;
if Personagem.Dados_XP <66.000	THEN Personagem.Dados_XP == 11 ;	
if Personagem.Dados_XP <78.000	THEN Personagem.Dados_XP == 12 ;	
if Personagem.Dados_XP <91.000	THEN Personagem.Dados_XP == 13 ;	
if Personagem.Dados_XP <105.000	THEN Personagem.Dados_XP == 14 ;	
if Personagem.Dados_XP <120.000	THEN Personagem.Dados_XP == 15 ;	
if Personagem.Dados_XP <136.000	THEN Personagem.Dados_XP == 16 ;	
if Personagem.Dados_XP <153.000	THEN Personagem.Dados_XP == 17 ;	
if Personagem.Dados_XP <171.000	THEN Personagem.Dados_XP == 18 ;	
if Personagem.Dados_XP <190.000	THEN Personagem.Dados_XP == 19 ;	
if Personagem.Dados_XP >= 190.000	THEN Personagem.Dados_XP == 20 ;	

Personagem.Levelup = 
// para o level up colocaria o nivel do XP e quanto de vida extra ele ganha//

Personagem.Atributo_Força = 3;
Personagem.Atributo_Resistencia = 2;
Personagem.Atributo_Agilidade = 0;
Personagem.Atributo_Persepcao = 0;
Personagem.Atributo_Presisao = 0;
Personagem.Atributo_Inteligencia = 0;
Personagem.Atributo_Sopro = 2;
Personagem.Atributo_Coragem = 3;
Personagem.Atributo_Carisma = 0;


Personagem.Talento_Historia = 0 ;
// aniak possui talento de historia.

Personagem.Aptidoes_Cartografia 
Personagem.Aptidoes_Navegante
Personagem.Aptidoes_Domar
Personagem.Aptidoes_Nadar
Personagem.Aptidoes_Ferreiro_1
Personagem.Aptidoes_Ciencia_sopro_1

// adicionar todas as aptidoes e logica de bonus//

Personagem.Pericias_Ferreiro
Personagem.Pericias_Two_Hand
Personagem.Pericias_Inducao
Personagem.Pericias_Alteracao
Personagem.Pericias_Espectrometropia
// adicionar todas as cartas e cada selo de carta sendo identificado por um numero.//

Dano (V.equip + Força)
Defesa (V.equip + Resistência)
// introduzir formula para calculo automatico//

Personagem.Modificadores_Ventura = 1;
Personagem.Modificadores_Vontade = 0;
Personagem.Modificadores_Estresse = 120;
Personagem.Modificadores_Medo = 0;
Personagem.Modificadores_Tendencia = 0;

Personagem.Modificadores_Dinheiro = 1625;
// necessario ainda editar o dinheiro para por 3 tipos, Kallogs, Tifac,  Cidars ...

Personagem.Modificadores_Status = 4;
// acrescentar modificador de preços e compras.

Personagem.Hitpoint = Personagem.Vitalidade + Personagem.Dados_Especie + Personagem.Levelup
// seria a vitalidade + o quanto a especie dele tem de HP de base + o personagem levelup//