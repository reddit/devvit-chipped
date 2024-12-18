import type {IMA} from '../types/ima.ts'

export type MinCat = {[ima: IMA]: Mineral}
export type Mineral = {
  deprecated: boolean
  ima: IMA
  localities: string[]
  name: string
  /** dropped when serialized to CSV. */
  q?: QID
}

export type QID = `Q${bigint}`

/** contains deprecated minerals. */
// codegen: csv
export const minCat: Readonly<MinCat> = parseMinCat(`A%aluminite%%Halle
Aado%arsenquatrandorite%%Barika ore deposit
Aalu%ammonioalunite%%
Aam%alamosite%%
Aan%allantoin%%Rowley mine
Aas%anastasenkoite%%Halamish wadi
Aav%alluaivite%%Mount Alluaiv
Ab%albite%%
Abbs%arsenbrackebuschite%%Clara mine|Tsumeb mine
Abc%asbecasite%%
Abd%alabandite%%Săcărâmb
Abe%abellaite%%Eureka mine
Abg%allabogdanite%%Onello
Abh%abhurite%%
Abha%argentobaumhauerite%%Lengenbach quarry
Abk-Ce%abenakiite-(Ce)%%Poudrette quarry
Abl%abelsonite%%
Abm%abramovite%%Kudriavy volcano
Abn%abernathyite%%Temple Mountain
Abo%ammonioborite%%Larderello
Abr%armbrusterite%%Kukisvumchorr
Abs%abswurmbachite%%Andros|Euboea
Abt%albertiniite%%Falò mount
Abu%abuite%%Abu
Aby%amblygonite%%
Aca%acanthite%%Jáchymov
Acb%arcubisite%%Ivigtuut cryolite deposit
Acc%allochalcoselite%%Second scoria cone
Acdl%arsenocrandallite%%
Ace%acetamide%%
Acel%aluminoceladonite%%
Acf-Y%ashcroftine-(Y)%%Narsaarsuk pegmatite
Ach%aurichalcite%%
Acl%alloclasite%%
Acm%acmonidesite%%La Fossa crater
Acn%arcanite%%
Aco%atencioite%%Linópolis
Acoq%aluminocoquimbite%%Porto Levante
Acpi%aluminocopiapite%%Temple Mountain
Acr%alacránite%%Alacrán mine, Alacrán|Uzon
Acrt-Ce%aluminocerite-(CeCa)%%Feriolo, Baveno|Seula mine
Acs%andychristyite%%Aga mine
Acu%acuminite%%Ivigtuut cryolite deposit
Acy-Ce%astrocyanite-(Ce)%%Kamoto mine
Ad%adamite%%Chañarcillo
Ada%ardaite%%
Adb%andreybulakhite%%
Adc%adachiite%%Saiki
Adcz%arsendescloizite%%Tsumeb mine
Add%addibischoffite%%Acfer 214
Ade%adelite%%Kitteln mine,  Nordmark Odal field|Långban
Adg%aldridgeite%%Block 14 opencut, Broken Hill mine
Adi%andreadiniite%%Monte Arsiccio mine
Adl%ardealite%%
Adn%adanite%%North Star
Ado IV%quatrandorite%%
Ado VI%senandorite%%
Adp%adolfpateraite%%Svornost mine
Adr%andradite%%Drammen Municipality
Ads-Y%adamsite-(Y)%%Poudrette quarry
Adt%adrianite%%Allende meteorite
Adu%anduoite%%Anduo chromium deposit
Aduf%argentodufrénoysite%%Lengenbach quarry
Adv%andrianovite%%Koashva open pit
Aed%allendeite%%Allende meteorite
Aedt%alumoedtollite%%Arsenatnaya fumarole
Aeg%aegirine%%Låven island|Øvre Eiker
Ael-Y%atelisite-(Y)%%Stetind pegmatite
Aen%aenigmatite%%Kangerluarsuk fjord, Ilímaussaq|Naujakasik
Aes-Ce%aeschynite-(Ce)%%Ilmen Nature Reserve
Aes-Nd%aeschynite-(Nd)%%Bayan Obo mine
Aes-Y%aeschynite-(Y)%%
Aeu%aleutite%%Yadovitaya fumarole
Afd%alfredopetrovite%%El Dragón mine
Afe%ahlfeldite%%
Afg%afghanite%%Ladjuar Medam
Aflo-Ce%arsenoflorencite-(Ce)%%
Aflo-La%arsenoflorencite-(La)%%Lake Grubependity
Afm%afmite%%Fumade
Afr%alforsite%%Big Creek|Esquire No. 7 claim
Afw%afwillite%%
Ag%native silver%%
Aga%agaite%%Aga mine
Agc%agricolaite%%Jáchymov
Agcx%arsenogorceixite%%Clara mine
Agd%argandite%%Turtmanntal
Age%argesite%%La Fossa crater
Agf%angarfite%%Angarf-South pegmatite
Agh%ameghinite%%
Agi%ariegilatite%%Hatrurim Basin
Agk-Y%agakhanovite-(Y)%%Heftetjern pegmatite
Agl%angelellite%%
Agm%agmantinite%%Uchucchacua
Agn%agrinierite%%
Ago%algodonite%%Mineral Liga de Los Algodones
Agoy%arsenogoyazite%%Clara mine
Agpy%argentopyrite%%Jáchymov
Agr-Ce%agardite-(Ce)%%Clara mine
Agr-La%agardite-(La)%%
Agr-Nd%agardite-(Nd)%%Hilarion mine
Agr-Y%agardite-(Y)%%Bou Skour Mine
Agt%argutite%%
Agu%aguilarite%%San Carlos Mine
Agy%argyrodite%%Himmelsfürst mine
Ah%atheneite%%Itabira
Ahau%arsenohauchecornite%%Vermilion mine
Ahb%ashburtonite%%Ashburton Downs
Ahcal%alumohydrocalcite%%
Ahe%aheylite%%Huanuni tin mine
Ahg%aurihydrargyrumite%%
Ahl%achalaite%%
Ahm%aschamalmite%%
Ahop%arsenohopeite%%Tsumeb mine
Ahp%althupite%%Kobokobo open pit
Ahr%ahrensite%%Tissint meteorite
Ahs%althausite%%Tingelstadtjern quarry
Aht%archerite%%Petrogale Cave
Ahv%achávalite%%Cerro de Cacheuta
Aik%aikinite%%Beryozovskoye deposit
Aio%aiolosite%%La Fossa crater
Air%airdite%%
Ais%aristarainite%%
Aiv%andreyivanovite%%Kaidun meteorite
Aj%ajoite%%New Cornelia mine
Ajd-BaNa%arrojadite-(BaNa)%%
Ajd-KFe%arrojadite-(KFe)%%Keystone|Serra Branca pegmatite
Ajd-KNa%arrojadite-(KNa)%%Rapid creek
Ajd-PbFe%arrojadite-(PbFe)%%Sapucaia mine
Ajd-SrFe%arrojadite-(SrFe)%%
Aka%akaogiite%%Amerdingen|Nördlinger Ries|Otting|Riesbürg
Akd%akdalaite%%Kara-Oba tungsten-molybdenum deposit
Akg%akaganeite%%
Akh%akhtenskite%%
Aki%akimotoite%%Tenham meteorite
Akm%aklimaite%%Mount Lakargi
Akmy%alexkhomyakovite%%Koashva open pit
Akr%akrochordite%%Långban
Aks%aksaite%%Chelkar salt dome
Akt%akatoreite%%
Akv%ankinovichite%%Kara-Chagyr mountain|Kurumsak vanadium deposit
Akyv%alumoklyuchevskite%%Great Fissure eruption
Al%aluminium (native)%%
Ala%allactite%%Moss mine, Nordmark Odal field
Alas%ammoniolasalite%%Burro mine
Alb%alburnite%%Roșia Montană
Alc%alcantarillaite%%Alcantarilla mine
Alct%ammonioleucite%%
Aldm%aldomarinoite%%Valletta mine
Ale%atelestite%%Neustädtel
Alf%alflarsenite%%Tuften quarry
Alg%alunogen%%
Alh%alleghanyite%%Bald Knob deposit
Aliv%argentoliveingite%%Lengenbach quarry
Alk%aleksite%%
Alkr%alumolukrahnite%%
Alm%almandine%%
Aln-Ce%allanite-(Ce)%%Qáqarssuatsiaq
Aln-La%allanite-(La)%%Buca della Vena mine
Aln-Nd%allanite-(Nd)%%Åskagen quarry
Aln-Y%allanite-(Y)%%
Alp%allophane%%
Alr%almarudite%%Caspar quarry
Alt%altaite%%Second Zavodinskii mine
Alv%alvanite%%Balasauskandyk vanadium deposit|Kurumsak vanadium deposit
Alw-Y%alwilkinsite-(Y)%%Blue Lizard mine
Aly%anatolyite%%Arsenatnaya fumarole
Ama%amarantite%%Caracoles
Amat%ammoniomathesiusite%%Burro mine
Amb%ambrinoite%%Signols
Amc%andymcdonaldite%%Wildcat project
Amcb%arsenmarcobaldiite%%
Amd%almeidaite%%Novo Horizonte
Ame%amesite%%
Amed%arsenmedaite%%Molinello mine
Amf%aminoffite%%Långban
Amg%armangite%%Långban
Amgt%amgaite%%
Amhul%aluminomagnesiohulsite%%Kebirnin'ya creek
Ami%amicite%%
Amk%amakinite%%Udachnaya diamond mine
Aml-Ce%armellinoite-(Ce)%%Montaldo di Mondovì mine
Amm%ammineite%%Pabellón de Pica
Amn%armenite%%Armen mine
Amo%amamoorite%%
Amr%amarillite%%Tierra Amarilla
Amrg%anorthominasragrite%%North Mesa mine group
Ams%amstallite%%
Amt%admontite%%
Amvlt%ammoniomagnesiovoltaite%%Köves Hill
Amw%asimowite%%Quebrada Chimborazo 001|Suizhou
Amy%andrémeyerite%%Mount Nyiragongo
An%anorthite%%Mount Somma
Ana%anandite%%
Anb%annabergite%%
Anc-Ce%ancylite-(Ce)%%Narsaarsuk pegmatite
Anc-La%ancylite-(La)%%Kukisvumchorr
And%andalusite%%
Ang%anglesite%%
Anh%anhydrite%%Hall in Tirol
Ani%anilite%%
Ank%ankerite%%
Anl%analcime%%Etna Volcanic complex
Anm%ansermetite%%Fianel mine
Ann%annite%%Rockport
Anp%anapaite%%
Anr%andersonite%%Hillside mine
Ans%arangasite%%
Ant%anatase%%Saint-Christophe-en-Oisans
Antp%antipovite%%
Anttn%arsenatrotitanite%%Arsenatnaya fumarole
Any%anyuiite%%
Anz-Ce%anzaite-(Ce)%%Afrikanda
Aor%alloriite%%Mount Cavalluccio
Aorsm%alumino-oxy-rossmanite%%Hengl quarry
Aov%ashoverite%%Ashover
Apa%apachite%%
Apbø-Ce%alnaperbøeite-(Ce)%%Stetind pegmatite
Apd%aspedamite%%Aspedammen
Ape%apexite%%Apex mine
Apea%argentopearceite%%
Apg%allanpringite%%
Aph%achyrophanite%%Arsenatnaya fumarole
Apj%apjohnite%%
Apl%arseniopleite%%Rällingsberg ore area
Aplb-T2ac%argentopolybasite-T2ac%%
Apm%anorpiment%%
Apn%argentopentlandite%%Khovu-Aksy|Oktyabr'skoe Cu-Ni deposit
Apr%alcaparrosaite%%Alcaparrosa mine
Aps%alpersite%%
Apt%alpeite%%
Apu%apuanite%%Buca della Vena mine
Apv%arapovite%%Darai-Pioz glacier
Apw%aplowite%%
Apy%arsenopyrite%%
Apyr%aluminopyracmonite%%La Fossa crater
Aq%aqualite%%Inagli chrome diopside deposit
Arb%andyrobertsite%%Tsumeb mine
Arc%arctite%%Vuonnemiok river valley
Ard-As%ardennite-(As)%%
Ard-V%ardennite-(V)%%
Are%agrellite%%
Arg%aragonite%%Mexico
Ari-Ce%arisite-(Ce)%%Aris quarries|Poudrette quarry
Ari-La%arisite-(La)%%Aris quarries
Ark%arakiite%%Långban
Arn%adranosite%%La Fossa crater
Arn-Fe%adranosite-(Fe)%%La Fossa crater
Aro%aurorite%%North Aurora mine
Arp%arupite%%
Arr-Ce%arrheniusite-(Ce)%%Östanmossa mine
Ars%alarsite%%Great Fissure eruption
Arsl%anorthoroselite%%Schneeberg ore district
Art%artinite%%
Arv%aravaite%%Hatrurim Basin
Ary%aramayoite%%Chocaya-Animas mines
As%arsenic (native)%%
Asb%asbolane%%
Asbn%asselbornite%%Walpurgis Flacher vein
Asc%arsenoclasite%%Långban
Asd%aleksandrovite%%Darai-Pioz glacier
Asf%albrechtschraufite%%Jáchymov
Asg%armstrongite%%
Ash%artsmithite%%Funderburk prospect
Asi%arsiccioite%%Monte Arsiccio mine
Ask-Zn%alsakharovite-Zn%%Lepkhe-Nel'm mountain
Asl%arsenolamprite%%
Asm%arsmirandite%%Arsenatnaya fumarole
Asn%alstonite%%Acomb|Brownley Hill mine
Aso%arsenolite%%Sankt Andreasberg
Ass%asisite%%Kombat
Assd%arseniosiderite%%
Ast%astrophyllite%%Låven island
Asug%aluminosugilite%%Cerchiara mine
Asz%alfredstelznerite%%
Ata%atacamite%%Atacama Region
Atan%alumotantite%%Voron'i tundry
Atb%athabascaite%%
Atc%antarcticite%%East Antarctica
Ate%artroeite%%Grand Reef mine
Atf%antofagastaite%%Mejillones Peninsula
Ati%altisite%%Olenii Ruchei
Atin%ammoniotinsleyite%%Pabellón de Pica
Atk%attikaite%%Christiana mine
Atl%antlerite%%Antler Mine
Atm%antimonselite%%
Atn%anthoinite%%
Ato%atokite%%
Atp%antipinite%%Pabellón de Pica
Atr%alterite%%Cliff Dwellers Lodge
Atsu%arsentsumebite%%Tsumeb mine
Att%aphthitalite%%Mount Vesuvius
Attr-Cd%argentotetrahedrite-(Cd)%%
Attr-Hg%argentotetrahedrite-(Hg)%%
Attr-Zn%argentotetrahedrite-(Zn)%%Kremnica deposit|Lengenbach quarry
Atu%arthurite%%
Atuč%arsenotučekite%%Tsangli Mine
Atv%atlasovite%%Great Fissure eruption
Aty%anthonyite%%Centennial mine
Au%native gold%%
Aub%aubertite%%Calama
Auc%auricupride%%Zolotaya Gora gold deposit
Audn%arsenudinaite%%Arsenatnaya fumarole
Aue%auerbakhite%%Vorontsovskoe gold deposit
Aug%augite%%
Aul%augelite%%
Aum-K%alum-(K)%%
Aum-Na%alum-(Na)%%
Aur%auriacusite%%Black Pine mine
Aus%austinite%%Gold Hill
Ausb%aurostibite%%
Ause%auroselenide%%
Aut%autunite%%
Auy%arsenuranylite%%
Av%akopovaite%%Karasu-Karavshinskoye Sn-deposit
Avc%avicennite%%
Avd%avdeevite%%
Aves%alumovesuvianite%%Jeffrey mine
Avg%avogadrite%%Mount Vesuvius
Avl%aurivilliusite%%Clear Creek claim
Avlt%ammoniovoltaite%%Kambalny
Avms%arsenovanmeersscheite%%Krunkelbach valley uranium deposit
Avn%avdoninite%%Yadovitaya fumarole
Avp%aravaipaite%%Grand Reef mine
Avsz%arsenoveszelyite%%
Avv%averievite%%Great Fissure eruption
Awag%arsenowagnerite%%Arsenatnaya fumarole
Awr%awaruite%%
Aws-YCe%alicewilsonite-(YCe)%%Poudrette quarry
Aws-YLa%alicewilsonite-(YLa)%%Paratoo copper mine
Ax-Fe%axinite-(Fe)%%Saint-Christophe-en-Oisans
Ax-Mg%axinite-(Mg)%%Mererani
Ax-Mn%axinite-(Mn)%%Franklin
Axe%axelite%%Arsenatnaya fumarole
Axk-Ce%alexkuznetsovite-(Ce)%%
Axk-La%alexkuznetsovite-(La)%%Mochalin Log REE deposit
Azip%ammoniozippeite%%Blue Lizard mine|Burro mine
Azo%azoproite%%
Azu%azurite%%Chessy
Aåk%alumoåkermanite%%Ol Doinyo Lengai
Bab%babingtonite%%
Bac%backite%%Contention-Grand Central mine group
Bad-Y%badakhshanite-(Y)%%Murghob District
Baf%barioferrite%%Har Ye'elim
Bag%bromargyrite%%
Bah%bahariyaite%%Bahariya Oasis
Bai%bairdite%%Bird Nest drift
Bal%balangeroite%%
Bam%baumoite%%
Ban%bannisterite%%Benallt mine|Franklin
Bao%baotite%%Bayan Obo mine
Bar%barnesite%%Thompsons district
Bas%bassetite%%
Bat%batisite%%Inagli chrome diopside deposit
Bato%batoniite%%
Bau%bauranoite%%
Bav%bavsiite%%Gun claim
Bay%bayldonite%%Penberthy Croft mine
Baz%bazhenovite%%
Bb%bilibinskite%%
Bba%buttgenbachite%%Likasi
Bbc%bobcookite%%Blue Lizard mine
Bbf%babefphite%%
Bbg-NdCe%bainbridgeite-(NdCe)%%Poudrette quarry
Bbg-YCe%bainbridgeite-(YCe)%%Poudrette quarry
Bbi%barberiite%%La Fossa crater
Bbk%babkinite%%
Bbl%bluebellite%%Blue Bell mine (Baker)
Bbn%burbankite%%Hill County
Bbo%berborite%%Lupikko iron mine
Bbs%brackebuschite%%
Bbw%bimbowrieite%%Bimbowrie Conservation Park
Bbá%babánekite%%Rovnost mine
Bc%birchite%%Broken Hill
Bcal%barytocalcite%%
Bcc%braccoite%%Valletta mine
Bcd%boscardinite%%Monte Arsiccio mine
Bch%bicchulite%%Fuka mine
Bci%bonacinaite%%Varenche mine
Bck%brockite%%
Bckt%borocookeite%%Malkhan pegmatite field
Bcl%biachellaite%%Sacrofano caldera
Bclb%bismutocolumbite%%Malkhan pegmatite field
Bcn%bianchiniite%%Monte Arsiccio mine
Bcr%borcarite%%Titovskoe boron deposit
Bcrd%beryllocordierite-Na%%
Bct%brochantite%%Mednorudyanskoye copper deposit
Bd%bradleyite%%Green River formation (Sweetwater Co.)
Bdc%bradaczekite%%Second scoria cone
Bdd%bendadaite%%Bendada
Bde%brendelite%%Gueldener Falk mine
Bdf%belendorffite%%Moschel mountain
Bdg-Ce%bridgesite-(Ce)%%Tynebottom Mine
Bdh%brandholzite%%Goldberg
Bdi%bredigite%%Scawt Hill
Bdk%brodtkorbite%%
Bdl%badalovite%%Arsenatnaya fumarole
Bdm%bridgmanite%%Tenham meteorite
Bdr%bederite%%
Bds%berdesinskiite%%
Bdt%brandtite%%Harstigen mine
Bdv%borodaevite%%
Bdw-Y%barrydawsonite-(Y)%%
Bdx%bideauxite%%Mammoth-Saint Anthony mine
Bdy%baddeleyite%%Rakwana
Bdz%badengzhuite%%Luobusa ore district
Bdã%brandãoite%%
Bea%bearsite%%Bota-Burum uranium deposit
Bec%bechererite%%Osborn district
Bee%beershevaite%%
Beh%behoite%%
Bei%beidellite%%Beidell
Bek%beckettite%%Allende meteorite
Bel%beryllonite%%
Ben%benstonite%%Magnet Cove igneous complex
Ber%berlinite%%
Bes%beshtauite%%
Bet%bettertonite%%Penberthy Croft mine
Beu%beusite%%
Beu-Ca%beusite-(Ca)%%
Bev%bernardevansite%%
Bey%beyerite%%Schneeberg ore district
Bez%bezsmertnovite%%
Bf%brattforsite%%
Bfc%bobfinchite%%Burro mine
Bfd%bamfordite%%Bamford Hill
Bfe%batiferrite%%Graulay|Löhley
Bfg%bobfergusonite%%pegmatite No. 22, Gottcha claim
Bgb%belogubite%%
Bgc%biringuccite%%Larderello
Bgd%baghdadite%%Mount Dupezeh, Hero
Bge%burgessite%%Keeley-Frontier mine
Bgg%bøggildite%%Ivigtuut cryolite deposit
Bgi%biagioniite%%Hemlo gold deposit
Bgk%bulgakite%%Darai-Pioz glacier
Bgl%bergslagite%%Långban
Bgn%bergenite%%
Bgr%barringerite%%
Bgs%boggsite%%Neer road
Bgv%bøgvadite%%Ivigtuut cryolite deposit
Bgy%billingsleyite%%
Bha%baumhauerite%%Lengenbach quarry
Bhau%bismutohauchecornite%%Oktyabr'skoe Cu-Ni deposit
Bhd%bornhardtite%%Trogtal quarries, Lautenthal
Bhi%bahianite%%
Bhl%biehlite%%Tsumeb mine
Bhm%böhmite%%
Bhn%běhounekite%%Svornost mine
Bho-Al%barahonaite-(Al)%%La Reconquistada claim
Bho-Fe%barahonaite-(Fe)%%La Reconquistada claim
Bhp%breithauptite%%Sankt Andreasberg
Bhr%buckhornite%%Buckhorn Mine
Bhv%bohuslavite%%Buca della Vena mine
Bi%bismuth (native)%%
Bia-Ce%biraite-(Ce)%%
Bia-La%biraite-(La)%%Mochalin Log REE deposit
Bic%bicapite%%Pickett Corral Number Two Mine
Bie%bieberite%%
Bif%bismutoferrite%%Schneeberg ore district
Big%bigcreekite%%Esquire No. 7 claim
Bij-Y%bijvoetite-(Y)%%Shinkolobwe mine
Bik%bikitaite%%Bikita District
Bil%billietite%%Shinkolobwe mine
Bin%bismuthinite%%
Bir%birnessite%%Birness (Ellon)
Bis%bismite%%
Bit%bismutite%%Schneeberg ore district
Bj%bjarebyite%%Palermo No. 1 mine
Bjm%boojumite%%
Bjon%bobjonesite%%North Mesa mine group
Bka%barikaite%%Barika ore deposit
Bkc%bakhchisaraitsevite%%Kovdor Zheleznyi mine
Bkd%burckhardtite%%Moctezuma mine
Bke%burkeite%%Searles Lake
Bkg%bobkingite%%New Cliffe Hill quarry
Bkh%betekhtinite%%
Bki%brenkite%%Schellkopf
Bkk%belakovskiite%%Blue Lizard mine
Bkkn%bakakinite%%
Bkl%bitikleite%%Mount Lakargi
Bkn%balkanite%%
Bko%bukovite%%
Bks%baksanite%%
Bkt%bokite%%Balasauskandyk vanadium deposit|Kurumsak vanadium deposit
Bkv%belkovite%%Vuoriyarvi alkaline-ultrabasic massif
Bl%bernarlottiite%%Seravezza quarries
Bla%blatterite%%Kitteln mine,  Nordmark Odal field
Blb%bellbergite%%Bellerberg volcano
Blc%baileychlore%%
Bld%bellidoite%%
Ble%bleasdaleite%%Lake Boga granite quarry
Blg%bellingerite%%Chuquicamata
Bli%bílinite%%
Blk%botallackite%%Botallack mine
Bll%belloite%%La Vendida mine
Bln%benleonardite%%Oriental mine
Blo%blossite%%Izalco
Blp%balipholite%%Xianghualing Sn-polymetallic ore field
Blr%balliranoite%%Mount Somma
Bls%balestraite%%Cerchiara mine
Blt%blatonite%%Jomac mine
Bltn%bolotinaite%%
Blu%bluestreakite%%Blue Streak mine
Blv-Ce%belovite-(Ce)%%Mount Malyi Punkaruaiv
Blv-La%belovite-(La)%%Kirovskii apatite mine|Mount Eveslogchorr
Blw%barlowite%%Great Australia mine
Blx%blixite%%Långban
Bly%brindleyite%%
Blz%bluelizardite%%Blue Lizard mine
Blö%blödite%%Ischler Salzberg
Bmb%bambollaite%%Moctezuma mine
Bmc%bismoclite%%
Bmd%brumadoite%%Pedra Preta pit
Bmel%bromellite%%Långban
Bmk%bushmakinite%%Beryozovskoye deposit
Bmlr%brownmillerite%%Bellerberg volcano
Bmr%belomarinaite%%2012-2013 Fissure Tolbachik eruption site
Bms%boromuscovite%%Little Three mine
Bmt%baiamareite%%
Bmul%boromullite%%
Bmy%bobmeyerite%%Mammoth-Saint Anthony mine
Bn%bornite%%Jáchymov
Bna%bonaccordite%%Bon Accord nickel deposit
Bnc%bianchite%%
Bnd%bernardite%%Allchar deposit
Bne%brianite%%Dayton meteorite
Bnet%burnettite%%Allende meteorite
Bnh%bennesherite%%Hatrurim Basin
Bnhs%bounahasite%%
Bni%benitoite%%California State gem mine
Bnk%bortnikovite%%Kondyor massif
Bnl%bernalite%%Broken Hill
Bnm%bannermanite%%Izalco
Bnn%bournonite%%Port Isaac
Bno%bunnoite%%
Bnr%brannerite%%
Bns%banalsite%%Benallt mine
Bnt%braunite%%Friedrichroda
Bnu%benauite%%Clara mine
Bnv%benavidesite%%Uchucchacua
Bny%bandylite%%Calama
Bob%bobierrite%%
Boc%boracite%%Lüneburg
Bod%bodieite%%Mammoth|Pittsburg-Liberty mine
Bog%bogdanovite%%
Boj%bojarite%%Pabellón de Pica
Bojq%bario-orthojoaquinite%%California State gem mine
Bok%bouškaite%%
Bol%boleite%%El Boleo
Bolg%bario-olgite%%Palitra pegmatite, Karnasurt mine
Bon%bonattite%%
Boo%boothite%%
Bor%boralsilite%%Stornes peninsula
Bos%bosiite%%
Bot%bottinoite%%Bottino mine
Bou%boulangerite%%
Bow%bowieite%%
Boy%boyleite%%
Boz%bouazzerite%%Bou Azer district
Bpal%bariopharmacoalumite%%Cap Garonne mine
Bpam%biphosphammite%%
Bpd-CaMg%betpakdalite-CaMg%%Tsumeb mine
Bpd-FeFe%betpakdalite-FeFe%%
Bpd-NaCa%betpakdalite-NaCa%%
Bpd-NaNa%betpakdalite-NaNa%%Chuquicamata
Bprv%barioperovskite%%California State gem mine
Bql%barquillite%%
Bqr%becquerelite%%Shinkolobwe mine
Bra%brannockite%%Foote Lithium Co. mine
Bran%branchite%%
Brb%brinrobertsite%%Nant Ffrancon formation
Brc%brucite%%Hoboken
Brd%bariandite%%Mounana mine
Bre%barrerite%%
Brg%burangaite%%Buranga pegmatite
Brh%berthierine%%
Bri-Ce%britholite-(Ce)%%Naujakasik
Bri-Y%britholite-(Y)%%
Brk%brookite%%
Brl%beryl%%Indian subcontinent|Mons Smaragdus
Brm%bermanite%%Hillside
Bro%barrotite%%Roua mines
Brp%burpalite%%Burpala alkaline Massif
Brr%bararite%%
Brsn%brianroulstonite%%Potash Corporation of Saskatchewan mine
Brt%baryte%%
Brts%barentsite%%Khibiny Mountains
Brv-Ca%burovaite-Ca%%Mount Khibinpakhkchorr
Brw-Ba%brewsterite-Ba%%Cerchiara mine|Diana
Brw-Sr%brewsterite-Sr%%Strontian
Brx%borax%%
Bry%berryite%%Montezuma district|Nordmark Odal field
Brz%berzelianite%%Skrikerum mine
Brü%brüggenite%%
Bs%bosoite%%Minamiboso
Bsa%barbosalite%%Sapucaia mine
Bsc%buseckite%%Zaklodzie meteorite
Bscs%bariosincosite%%Spring Creek mine
Bsd%bonshtedtite%%Kovdor massif|Vuonnemiok river valley
Bse%bunsenite%%Johanngeorgenstadt
Bsf%bischofite%%Staßfurt
Bsg%Boussingaultite%%
Bsh%brushite%%Nueva Esparta
Bsi%brassite%%Jáchymov
Bsk%borisenkoite%%Yadovitaya fumarole
Bsl%barysilite%%Harstigen mine
Bsn-Ce%bastnäsite-(Ce)%%Bastnäs
Bsn-La%bastnäsite-(La)%%
Bsn-Nd%bastnäsite-(Nd)%%Stetind pegmatite
Bsn-Y%bastnäsite-(Y)%%Verkhnee Espe massif
Bsnb-Na%beryllosachanbińskiite-Na%%
Bso%bassoite%%Molinello mine
Bsr%buserite%%
Bss%bassanite%%Mount Vesuvius
Bst%bustamite%%Franklin
Bsv%batisivite%%Pereval marble quarry
Bsw%barstowite%%
Bsy-Ce%bussyite-(Ce)%%Poudrette quarry
Bsy-Y%bussyite-(Y)%%Poudrette quarry
Bta%Bobtraillite%%Poudrette quarry
Btb%botuobinskite%%Internatsionalnaya kimberlite pipe|inclusion(s) in a pyrope
Btc-Ce%braitschite-(Ce)%%Grand County
Btd%bertrandite%%
Bte%brontesite%%La Fossa crater
Btg%batagayite%%
Bth%bearthite%%Gilba valley|Po Valley|Stockhorn
Bti%berndtite%%Cerro Rico
Btk%bartelkeite%%Tsumeb mine
Btl%butlerite%%United Verde mine
Btln%bortolanite%%
Btn%bartonite%%Coyote Peak
Bto%bentorite%%Hatrurim Basin
Btr%berthierite%%
Bts%bertossaite%%Buranga pegmatite
Btt%briartite%%Kipushi mine
Bttl%bismutotantalite%%
Btv%baratovite%%Darai-Pioz glacier
Btw%bostwickite%%Franklin
Bty%bityite%%Sahatany valley
Btz%bytízite%%Háje
Bu%burtite%%
Bub%bubnovaite%%Great Fissure eruption
Bud%buddingtonite%%
Buh%bulachite%%
Buk%bukovskýite%%Kaňk
Bul%bultfonteinite%%Bultfontein mine
Bum%baumstarkite%%
Bun%braunerite%%Svornost mine
Bur%burnsite%%Second scoria cone
Burr%burroite%%Burro mine
Busv%belousovite%%Yadovitaya fumarole
But%butianite%%Allende meteorite
Buy%buryatite%%Solongo boron deposit
Buyn%buynite%%Lengenbach quarry
Bv%britvinite%%Långban
Bvk%borovskite%%
Bvr-Zn%beaverite-(Zn)%%
Bw%browneite%%Zaklodzie meteorite
Bwa%buchwaldite%%Cape York meteorite
Bwd%boltwoodite%%
Bwe%bracewellite%%
Bwi%billwiseite%%
Bwl%bowlesite%%Merensky Reef
Bwn%brownleeite%%26P/Grigg–Skjellerup
Bwo%barwoodite%%
Bwt%braithwaiteite%%Laurani Mine
Byc%benyacarite%%Tanti
Byd%byrudite%%Byrud emerald mine
Bye-Ce%byelorussite-(Ce)%%
Byg%botryogen%%Falun Mine
Byi%breyite%%São Luiz river alluvials|inclusion(s) in a mineral
Byk%balyakinite%%
Byl%baylissite%%Gerstenegg-Sommerloch tunnel
Bym%byströmite%%
Byo%brianyoungite%%Brownley Hill mine
Byr%bayerite%%Hatrurim Basin
Bys%bystrite%%minerals of Slyudyanka
Byt%beryllite%%Natrolite stock, Karnasurt mount
Byv%bykovaite%%Umbozero mine
Byy%bayleyite%%Hillside mine
Byz%byzantievite%%Darai-Pioz glacier
Bz%Bazzite%%Seula mine
Bzc%borzęckiite%%
Bze%berzeliite%%Långban
Bzi%brizziite%%
Bzk%berezanskite%%Darai-Pioz glacier
Bzl%brazilianite%%Córrego Frio mine
Bzn%brezinaite%%Tucson ring meteorite
Bzr%bazirite%%Rockall
Bzt%betzite%%Bellerberg volcano
Bzz%bonazziite%%Alacrán mine, Alacrán|Khaidarkan
Béh%béhierite%%Sahatany valley
Büt%bütschliite%%Grand Canyon National Park|Kaniksu National Forest
Bć%barićite%%Rapid creek
Bžć%balićžunićite%%La Fossa crater
Cab%carboborite%%Da Qaidam Hu
Cabr%cabrerite%%Nickel Mine
Cac%cacoxenite%%
Cad%cadmoindite%%Kudriavy volcano
Caf%cafarsite%%
Cag%chlorargyrite%%
Cah%cahnite%%Franklin
Cak%chistyakovaite%%Bota-Burum uranium deposit
Cal%calcite%%
Calc%calclacite%%
Can%canutite%%Torrecillas mine
Canc-Ce%calcioancylite-(Ce)%%Murmansk Oblast|glacial erratic
Canc-La%calcioancylite-(La)%%
Canc-Nd%calcioancylite-(Nd)%%Seula mine
Cao%caoxite%%Cerchiara mine
Cap-Y%chiappinoite-(Y)%%Água de Pau
Capov%chromo-alumino-povondraite%%Pereval marble quarry
Car%carpholite%%Horní Slavkov
Carb%calcioandyrobertsite%%Tsumeb mine
Cart%chlorartinite%%Northern breakthrough
Caru%cobaltarthurite%%La Reconquistada claim
Cas%cascandite%%Agrano
Cat%cattierite%%Shinkolobwe mine
Cata%clinoatacamite%%Chuquicamata
Cau%calcurmolite%%
Caur%calcioursilite%%
Caus%cobaltaustinite%%Dome Rock copper mine
Cav%cavansite%%Owyhee Dam
Cavp%calcioaravaipaite%%Grand Reef mine
Cay-Y%caysichite-(Y)%%Evans-Lou mine
Caz%calzirtite%%
Cb%carboirite%%
Cba%chanabayaite%%Pabellón de Pica
Cbag%cuboargyrite%%
Cbb%carlosbarbosaite%%Jaguaraçu
Cbbn%calcioburbankite%%Poudrette quarry
Cbc%carbocernaite%%Vuoriyarvi alkaline-ultrabasic massif
Cbcl%carbocalumite%%Hatrurim Basin
Cbe%combeite%%Mount Shaheru
Cbg%carlsbergite%%Cape York meteorite
Cbht%clinobehoite%%Malysheva mine
Cbi%clinobisvanite%%
Cbis%chrombismite%%
Cbit%cuprobismutite%%Montezuma district
Cblö%cobaltoblödite%%Blue Lizard mine
Cbm%cobaltomenite%%Cerro de Cacheuta
Cbn%cubanite%%
Cbo%calciborite%%Novofrolovskoye boron-copper deposit
Cbr%cabriite%%Oktyabr'skoe Cu-Ni deposit
Cbrl%chrysoberyl%%Brazil
Cbs%chambersite%%
Cbt%cobaltite%%
Cbtn%chlorbartonite%%Koashva open pit
Cbv%cabvinite%%Punta de Su Seinargiu
Cbx%cryobostryxite%%First scoria cone
Cbys%carbobystrite%%Koashva open pit
Cbz-Ca%chabazite-Ca%%Fassa Valley
Cbz-K%chabazite-K%%Mount Somma
Cbz-Mg%chabazite-Mg%%Bazsi
Cbz-Na%chabazite-Na%%castle rock, Aci Castello
Cbz-Sr%chabazite-Sr%%Lovozero massif
Cc%chalcocite%%
Cca%chalcoalumite%%Bisbee
Ccal%chlorocalcite%%Mount Vesuvius
Ccb%crocobelonite%%Daba-Siwaqa complex
Ccc%camanchacaite%%Torrecillas mine
Ccel%chromceladonite%%Velikaya Guba uran-vanadium deposit
Ccg%changchengite%%Chengde|Gaositai Cr-PGE deposit
Cch%chinchorroite%%Torrecillas mine
Cchk%cuprocherokeeite%%
Cchr%cochromite%%
Cchs%colchesterite%%Kingsgate
Cci%coccinite%%
Cck%clearcreekite%%Clear Creek claim
Ccl%chrysocolla%%
Ccm%chalcomenite%%Cerro de Cacheuta
Ccn%cancrinite%%Miass Placer Zone
Cco%caracolite%%Caracoles
Ccp%chalcopyrite%%
Ccpi%calciocopiapite%%
Ccr-Al%cerchiaraite-(Al)%%Esquire No. 7 claim|Esquire No. 8 claim|Esquire no. 1 claim
Ccr-Fe%cerchiaraite-(Fe)%%Cerchiara mine|Esquire No. 7 claim|Esquire No. 8 claim
Ccr-Mn%cerchiaraite-(Mn)%%Cerchiara mine
Ccs%cairncrossite%%Wessels mine
Ccsb%chalcostibite%%Graf Jost-Christian mine
Cct%chalcanthite%%Chuquicamata
Ccth%chalcothallite%%Taseq area
Cctp%calciocatapleiite%%Burpala alkaline Massif
Ccu%cloncurryite%%Great Australia mine
Ccvn%clinocervantite%%
Ccy%chalcocyanite%%Mount Vesuvius
Ccya%carbonatecyanotrichite%%Balasauskandyk vanadium deposit
Cd%cadmium (native)%%Ust'-Khann'ya intrusion, Lower Khann'ya river
Cda%cassedanneite%%Beryozovskoye deposit
Cdb%chudobaite%%Tsumeb mine
Cdc%cuprodongchuanite%%Village of Sanguozhuang
Cdd%criddleite%%
Cde%corderoite%%
Cdi%cardite%%Broken Hill
Cdlr%calciodelrioite%%West Sunday mine
Cdm%chaidamuite%%Xitieshan mine
Cdn%calderónite%%Santa Marta
Cdo%caledonite%%Leadhills
Cdr%calderite%%
Cds%cadmoselite%%
Cdt%claudetite%%
Cdu%carducciite%%Pollone mine
Cdvo%cuprodobrovolskyite%%
Cdw%chadwickite%%Sophia mine
Cdy%cassidyite%%Wolfe Creek Crater
Cea%crerarite%%
Ceb-Ce%cebaite-(Ce)%%Bayan Obo mine
Ced%cesiodymite%%Arsenatnaya fumarole
Cee%creedite%%
Cei-Ce%cerianite-(Ce)%%Lackner
Cel%celadonite%%Brentonico|Mori|Planitz
Cen%clinoenstatite%%
Cer%cerussite%%Province of Vicenza
Cet%cetineite%%
Ceu%cleusonite%%
Cex%chessexite%%
Cfc%carlfrancisite%%Kombat
Cfd%crawfordite%%Koashva open pit
Cfe%chromferide%%
Cff%cliffordite%%Moctezuma
Cfgs-Ce%clinofergusonite-(Ce)%%Bayan Obo mine
Cfgs-Nd%clinofergusonite-(Nd)%%Bayan Obo mine
Cfgs-Y%clinofergusonite-(Y)%%
Cfhlm%clino-ferri-holmquistite%%
Cfi%canfieldite%%
Cfr%calcioferrite%%
Cfs%clinoferrosilite%%
Cft%cafetite%%Afrikanda
Cga%capgaronnite%%Cap Garonne mine
Cgd%chengdeite%%Gaositai Cr-PGE deposit
Cge%cumengeite%%El Boleo
Cgh%callaghanite%%
Cgl%congolite%%
Cgm%chegemite%%Mount Lakargi
Cgn%compreignacite%%
Cgo%changoite%%Sierra Gorda district
Cgs-Y%changesite-(Y)%%Statio Tianchuan
Cgu%chenguodaite%%
Ch%chaoite%%
Cha%charoite%%Murunskii massif
Char%charmarite%%Poudrette quarry
Chc%challacolloite%%Lolon mine
Chd%childrenite%%
Che%chenite%%Susanna mine
Chg%changbaiite%%
Chh%charleshatchettite%%Poudrette quarry
Chi-Nd%chinleite-(Nd)%%
Chi-Y%chinleite-(Y)%%Blue Lizard mine
Chk-Ca%chukhrovite-(Ca)%%
Chk-Ce%chukhrovite-(Ce)%%
Chk-Nd%chukhrovite-(Nd)%%Kara-Oba tungsten-molybdenum deposit
Chk-Y%chukhrovite-(Y)%%Kara-Oba tungsten-molybdenum deposit
Chlr%calciohilairite%%Washington pass
Chm%chamosite%%Haut de Cry
Chn%chondrodite%%
Chna%chalconatronite%%Egypt
Cho%choloalite%%Oriental mine
Chp%chalcophyllite%%
Chr%chromite%%
Chrk%cherokeeite%%
Chrl%charlesite%%Franklin
Chs%chesterite%%Chester
Cht%chantalite%%
Chtt%calciohatertite%%Arsenatnaya fumarole
Chu%clinohumite%%Mount Somma
Chv-Y%chernovite-(Y)%%
Chz%carlhintzeite%%Cornelia shaft, Hagendorf South open cut
Cia%cianciulliite%%Franklin
Cib%chibaite%%Minamiboso
Cic%crichtonite%%Saint-Christophe-en-Oisans
Cice%cubo-ice%%inclusion(s) in a mineral
Cih%chihuahuaite%%Allende meteorite
Cil%chiluite%%Chilu molybdenum deposit
Cim%chihmingite%%
Cin%cinnabar%%
Cio%chiolite%%Ilmen Nature Reserve
Cir%cuproiridsite%%Kondyor massif
Cis%christelite%%Caracoles
Cit%ciriottiite%%Tavagnasco mines
Cjar%calcjarlite%%
Cjhl%calciojohillerite%%Arsenatnaya fumarole
Cjim%clinojimthompsonite%%Chester
Ck%chesnokovite%%Karnasurt mine, Karnasurt mount
Cka%chelkarite%%Chelkar salt dome
Ckal%cuprokalininite%%Pereval marble quarry
Ckc%chukochenite%%
Cke%clarkeite%%Penland
Ckh%chekhovichite%%
Ckht%clinokurchatovite%%
Ckk%chukotkaite%%
Ckl%chkalovite%%Mount Malyi Punkaruaiv
Ckn%chukanovite%%Dronino meteorite
Ckor%cobaltkoritnigite%%
Ckpcl%cesiokenopyrochlore%%
Ckr-Ce%coskrenite-(Ce)%%Alum Cave Bluff
Cksr%cobaltkieserite%%Bastnäs
Ckt%cookeite%%
Cktb%carbokentbrooksite%%Darai-Pioz glacier
Ckv%chernikovite%%
Cky%chlorkyuygenite%%Mount Lakargi
Cla%chloraluminite%%Mount Vesuvius
Clai%clairite%%
Clap%chlorapatite%%
Clb-Fe%columbite-(Fe)%%Haddam
Clb-Mg%columbite-(Mg)%%
Clb-Mn%columbite-(Mn)%%
Clc%clinochlore%%
Cld%chloritoid%%Kosoi Brod
Cle%clerite%%Vorontsovskoe gold deposit
Clel%chlorellestadite%%Shadil-Khokh volcano
Clf%carlfriesite%%Oriental mine
Clg%coalingite%%
Clgb%calciolangbeinite%%Yadovitaya fumarole
Cli%carrollite%%Finksburg
Clk-Ce%calkinsite-(Ce)%%Hill County
Cll%celleriite%%San Piero in Campo
Clm%calamaite%%Alcaparrosa mine
Clmy%cobaltlotharmeyerite%%Roter Berg
Cln%clintonite%%Amity
Clo%calomel%%Moschel mountain
Clr%coloradoite%%Keystone mine
Cls%celsian%%Jakobsberg mine
Clt%celestine%%Bellwood
Clv%calaverite%%
Clz%cabalzarite%%Falotta
Cma%chlormagaluminite%%
Cmak%cupromakovickyite%%Western ore field, scheelite deposit
Cmb%coombsite%%
Cmbo%clinometaborite%%La Fossa crater
Cme%cameronite%%Good Hope mine
Cmg%camgasite%%Wittichen
Cmh%carmichaelite%%Dennehotso
Cmi%caminite%%
Cmj%cerromojonite%%El Dragón mine
Cmk%chlormanganokalite%%Mount Vesuvius
Cml%cryptomelane%%Tombstone
Cmn%chloromenite%%Novaya fumarole
Cmo%carletonmooreite%%Norton County meteorite
Cmpav%cupromakopavonite%%Western ore field, scheelite deposit
Cmr%camaronesite%%Cuya
Cms%crimsonite%%Silver Coin mine
Cmt%carminite%%
Cmyb%cupromolybdite%%Yadovitaya fumarole
Cmé%camérolaite%%Cap Garonne mine
Cna%carnallite%%Staßfurt
Cnb%cornubite%%
Cnc%cancrisilite%%Mount Alluaiv
Cne%cornetite%%
Cneu%cobaltneustädtelite%%Gueldener Falk mine
Cney%cuproneyite%%Băița
Cng%chongite%%Torrecillas mine
Cnh%clinohedrite%%Franklin
Cni%carlinite%%Carlin mine
Cnk%calcinaksite%%Bellerberg volcano
Cnl%connellite%%
Cnm%chenmingite%%Tissint meteorite
Cnn%cannonite%%
Cno%clinoclase%%Wheal Gorland
Cnp%canaphite%%
Cnr%crednerite%%Glücksstern mine, Gottlob hill
Cns%canasite%%Material'naya adit
Cnt%carnotite%%
Cnu%cronusite%%Norton County meteorite
Cnv%canavesite%%
Cnw%cornwallite%%Wheal Gorland
Cny%cheremnykhite%%Kuranakh mine
Cnz%cannizzarite%%La Fossa crater
Cob%comblainite%%Shinkolobwe mine
Coc%coconinoite%%
Cod-Ce%cordylite-(Ce)%%Narsaarsuk pegmatite
Cod-La%cordylite-(La)%%
Coe%coesite%%
Cof%coffinite%%
Coh%cohenite%%
Coi%coiraite%%Pirquitas Ag-Sn deposit
Cokp%clino-oscarkempffite%%Chocaya-Animas mines
Col%colusite%%East Colusa mine
Cole%colemanite%%Furnace Creek district
Coll%collinsite%%
Colo%colomeraite%%Colomera
Com%colimaite%%Colima
Con%conichalcite%%
Cop%coparsite%%Yadovitaya fumarole
Copn%cobaltpentlandite%%Outokumpu
Cor%Coronadite%%
Corr%correianevesite%%Conselheiro Pena
Cos%cosalite%%
Cot%cotunnite%%Mount Vesuvius
Cov%chovanite%%Dúbrava
Cow%cowlesite%%Neer road
Coy%coyoteite%%Coyote Peak
Cp%cryptophyllite%%Tsentral'nyi mine
Cpa%carpathite%%
Cpav%cupropavonite%%
Cpc%capranicaite%%Lake Vico
Cpch%cryptochalcite%%Arsenatnaya fumarole
Cpea%cupropearceite%%
Cpg%campigliaite%%Campiglia Marittima
Cph%chalcophanite%%Sterling Hill
Cphl%cryptohalite%%Mount Vesuvius
Cpi%copiapite%%
Cpl%caryopilite%%Harstigen mine
Cplb%cupropolybasite%%Stewart
Cpm%chapmanite%%Keeley-Frontier mine
Cpn%chopinite%%East Antarctica
Cpo%chlorophoenicite%%Buckwheat pit
Cpp-Y%cappelenite-(Y)%%Vesle Arøy island
Cpr%cuprite%%
Cps%campostriniite%%La Fossa crater
Cpsd%caesiumpharmacosiderite%%Tambo mine
Cpsi%clinophosinaite%%Koashva open pit|Material'naya adit
Cpt-Ca%clinoptilolite-Ca%%
Cpt-K%clinoptilolite-K%%Park County
Cpt-Na%clinoptilolite-Na%%
Cptan%cesplumtantite%%
Cpts%calciopetersite%%
Cpv%cherepanovite%%
Cqd%coquandite%%
Cqr%colquiriite%%
Cr%chromium (native)%%Anduo chromium deposit
Cra%carraraite%%Massa
Crb%carobbiite%%Mount Vesuvius
Crc%crocoite%%Beryozovskoye deposit
Crd%cordierite%%
Cre%caresite%%Mount Royal|Poudrette quarry
Cri%christite%%
Crk%crookesite%%Skrikerum mine
Crl%cryolite%%Ivigtuut cryolite deposit
Crll%coralloite%%Monte Nero mine
Crm%chromatite%%northeastern Hatrurim formation, Jordan
Crn%corundum%%
Cro%cronstedtite%%Příbram District
Crp%chromphyllite%%minerals of Slyudyanka
Crr%corrensite%%
Crs%cristobalite%%Mount San Cristóbal
Crt-Ce%cerite-(CeCa)%%Bastnäs
Cru%ceruleite%%
Crv%chervetite%%Mounana mine
Cry%chrysothallite%%Pyatno fumarole|Tenoritovaya fumarole
Crz%carlosruizite%%San Antonio de Zapiga
Csa%cesanite%%
Csaf%clinosafflorite%%
Csb%costibite%%Broken Hill
Csd%chalcosiderite%%
Cse%creaseyite%%
Csf-Ce%christofschäferite-(Ce)%%Laach lake volcanic complex
Csfl%chromschieffelinite%%Bird Nest drift
Csg%cassagnaite%%Cassagna mine
Csh%crowningshieldite%%Letseng diamond mine|inclusion(s) in a mineral
Csi%chursinite%%Khaidarkan
Csk-Nd%carlgieseckeite-(Nd)%%Kvanefjeld
Cskl%cuprosklodowskite%%Great Bear Lake
Csl%chrisstanleyite%%
Csm%chestermanite%%
Csn%carlsonite%%Milan
Cso%canosioite%%Valletta mine
Csp%cuspidine%%Mount Somma
Cspl%cuprospinel%%
Csr%carlosturanite%%
Css%cossaite%%La Fossa crater
Cst%cassiterite%%
Csu%clinosulphur%%La Fossa crater
Csue%clino-suenoite%%
Csy%caseyite%%Burro mine|Packrat mine, Gateway|West Sunday mine
Csà%cesàrolite%%
Ct%catalanoite%%Laguna Santa Maria
Ctan%calciotantite%%Voron'i tundry
Ctc-K%cuatrocapaite-(K)%%Torrecillas mine
Ctc-NH4%cuatrocapaite-(NH4)%%Torrecillas mine
Cte%centennialite%%Centennial mine
Ctg%cortesognoite%%Molinello mine
Ctgs%cuprotungstite%%
Cth%clausthalite%%St Lorenz mine
Cti%coutinhoite%%
Ctk%chatkalite%%
Ctm%catamarcaite%%Capillitas mine
Ctn%chlorothionite%%Mount Vesuvius
Cto%carletonite%%Poudrette quarry
Ctp%catapleiite%%Låven island
Ctpb%cubothioplumbite%%Redmond Mine
Ctr%castellaroite%%Monte Nero mine|Valletta mine
Ctsm%cobalttsumcorite%%Roter Berg
Ctt%cattiite%%Kovdor Zheleznyi mine
Ctz%carmeltazite%%
Cu%native copper%%
Cub%chubarovite%%Arsenatnaya fumarole
Cucpi%cuprocopiapite%%Chuquicamata
Cud%cloudite%%Iron Monarch mine
Cue%curienite%%Mounana mine
Cug%clinoungemachite%%Chuquicamata
Cuh-Y%churchite-(Y)%%
Cui%curite%%Shinkolobwe mine
Cun%calciouranoite%%
Cup%cupalite%%Khatyrka meteorite
Cur%currierite%%Torrecillas mine
Cusb%cuprostibite%%Taseq area
Cut%curetonite%%
Cuy%cuyaite%%
Cuz%cuzticite%%Moctezuma mine
Cv%covellite%%Mount Vesuvius
Cva%chvaleticeite%%
Cvd-Ce%cervandonite-(Ce)%%Scherbadung
Cve%chiavennite%%Chiavenna
Cvea%calcioveatchite%%Nepskoe  potassium  salt  deposit
Cvi%chvilevaite%%
Cvk-Ce%chevkinite-(Ce)%%Ilmen Nature Reserve
Cvl%cervelleite%%Oriental mine
Cvo%cavoite%%Valgraveglia mine
Cvr%chivruaiite%%Lovozero massif
Cvs%chirvinskyite%%Mount Takhtarvumchorr
Cvt%calvertite%%Tsumeb mine
Cvu%corvusite%%La Sal Mountains|San Miguel County
Cvx%chenevixite%%Wheal Gorland
Cwk%cranswickite%%Calingasta
Cwl%coldwellite%%Coldwell complex
Cwn%colinowensite%%Wessels mine
Cws%caswellsilverite%%Norton County meteorite
Cxp%chloroxiphite%%
Cy%cylindrite%%
Cya%cyanotrichite%%
Cyc%cyanochroite%%Mount Vesuvius
Cyh%caryochroite%%Umbozero mine
Cyk%chernykhite%%Balasauskandyk vanadium deposit
Cyl-Y%cayalsite-(Y)%%Stetind pegmatite|Øvre Lapplægeret quarry
Cyln%cryolithionite%%Ivigtuut cryolite deposit
Cym%cymrite%%Benallt mine
Cyn%caryinite%%Långban
Cyo%chiyokoite%%Fuka mine
Cyp%cyprine%%Wessels mine
Cyr%cyrilovite%%
Cys%chayesite%%
Cz%czochralskiite%%Morasko
Czh%cuprozheshengite%%
Czip%cobaltzippeite%%White Canyon
Czo%clinozoisite%%
Céa%chaméanite%%
Céf%césarferreiraite%%Conselheiro Pena
D'an%d'ansite%%Hall in Tirol
D'an-Fe%d'ansite-(Fe)%%La Fossa crater
D'an-Mn%d'ansite-(Mn)%%Somma-Vesuvius complex
Da%daliranite%%
Dac-Ca%dachiardite-Ca%%San Piero in Campo
Dac-K%dachiardite-K%%
Dac-Na%dachiardite-Na%%
Dad%dadsonite%%Giant Mine|Graf Jost-Christian mine|Lovelock|Taylor pit
Dag%dagenaisite%%
Dal%deltalumite%%2012-2013 Fissure Tolbachik eruption site
Dam%damiaoite%%
Dan%danalite%%Rockport
Dao%daomanite%%
Daq-Ce%daqingshanite-(Ce)%%Bayan Obo mine
Dar%darapiosite%%Darai-Pioz glacier
Dat%datolite%%Arendal
Dau%daubréeite%%
Dav%davisite%%Allende meteorite
Dba%danbaite%%Danba County
Dbn-NH4%davidbrownite-(NH4)%%Rowley mine
Dbol%diaboleite%%
Dbr%daubréelite%%
Dbs%donbassite%%Donbas
Dbt%debattistiite%%Lengenbach quarry
Dbu%danburite%%Danbury
Dby%derbylite%%Tripuí
Dc%dongchuanite%%Village of Sanguozhuang
Dck%dickite%%Amlwch
Dcn-KMnNa%dickinsonite-(KMnNa)%%Fillow quarry
Dcp-Y%decrespignyite-(Y)%%Paratoo copper mine
Dcz%descloizite%%
Ddad%disulfodadsonite%%Seravezza quarries
Ddc%diadochite%%
Ddh-Ce%dingdaohengite-(Ce)%%Bayan Obo mine
Ddl%dondoellite%%Rapid creek
Dec%decagonite%%Khatyrka meteorite
Dee%deerite%%Laytonville
Def%defernite%%
Del%delafossite%%Mednorudyanskoye copper deposit
Dem-Br%demicheleite-(Br)%%La Fossa crater
Dem-Cl%demicheleite-(Cl)%%La Fossa crater
Dem-I%demicheleite-(I)%%La Fossa crater
Den-NH4%dendoraite-(NH4)%%Rowley mine
Dep%depmeierite%%Mount Karnasurt
Des%desautelsite%%
Dev%devilline%%
Dew%dewindtite%%Shinkolobwe mine
Dfm%dorfmanite%%Koashva open pit|Material'naya adit
Dfr%dufrénite%%
Dft%duftite%%Tsumeb mine
Dg%digenite%%
Dga%diegogattaite%%Wessels mine
Dgl%douglasite%%Douglashall
Dgt%dellagiustaite%%
Dhr%donharrisite%%Schwarzleograben
Dhry%darrellhenryite%%
Dhu-Ce%delhuyarite-(Ce)%%
Dhy%delhayelite%%Mount Shaheru
Di%diopside%%Ala valley|Brosso
Dia%diamond%%
Die%dietzeite%%
Dim%dimorphite%%Pozzuoli
Din%dinite%%
Dio%dioskouriite%%Arsenatnaya fumarole
Dis-Ce%dissakisite-(Ce)%%East Antarctica
Dis-La%dissakisite-(La)%%
Div%dmitryivanovite%%Northwest Africa 470
Djr%djerfisherite%%Kota-Kota meteorite|St. Mark's meteorite
Dju%djurleite%%
Dkp%driekopite%%
Dkv%dashkovaite%%Korshunovskoye iron-boron skarn deposit
Dld%davidlloydite%%Tsumeb mine
Dli%deliensite%%Lodève
Dll%dellaite%%
Dlo%deloryite%%Cap Garonne mine
Dlr%doloresite%%
Dly%dalyite%%Ascension Island
Dm%damaraite%%Kombat
Dma%demartinite%%La Fossa crater
Dmg%demagistrisite%%Cerchiara mine
Dmm%demesmaekerite%%Musonoi mine
Dmr%dittmarite%%
Dmt%dumontite%%Shinkolobwe mine
Dna-Y%donnayite-(Y)%%Poudrette quarry
Dng%dalnegorskite%%
Dnk%deynekoite%%Daba-Siwaqa complex
Dnn%denningite%%Moctezuma mine
Dnr%dalnegroite%%Lengenbach quarry
Dns%danielsite%%
Dnt%dantopaite%%Erzwies area
Dnv%denisovite%%Mount Eveslogchorr|Mount Yukspor
Dnw%donowensite%%
Dny%downeyite%%
Do%domeykite%%
Dob%dobšináite%%Dobšiná
Dok%dokuchaevite%%Yadovitaya fumarole
Dol%dolomite%%
Dom%domerockite%%Dome Rock copper mine
Don%donpeacorite%%ZCA No. 4 mine
Dor%dorrite%%
Dov%dovyrenite%%Yoko-Dovyrensky massif
Doy%doyleite%%Francon quarry|Poudrette quarry
Doz%dozyite%%
Dph%dolerophanite%%Mount Vesuvius
Dpj%despujolsite%%Tachgagalt mine
Dpr%diaphorite%%Bräunsdorf|Příbram District
Dpt%dioptase%%Karaganda Region
Dr%droninoite%%Dronino
Dra%dravertite%%Arsenatnaya fumarole
Drc%dorallcharite%%Allchar deposit
Dre%drechslerite%%Lengenbach quarry
Drg%dargaite%%northeastern Hatrurim formation, Jordan
Drk%derriksite%%Musonoi mine
Dro%drobecite%%Esperanza mine
Drt%dritsite%%
Dru%drugmanite%%
Drv%dravite%%
Drx%davreuxite%%Ottré
Dry%drysdallite%%
Drz%direnzoite%%
Dsat%dekatriasartorite%%Lengenbach quarry
Dsb%dmisteinbergite%%Kopeysk
Dsh%deanesmithite%%Clear Creek claim
Dsk%dmisokolovite%%Arsenatnaya fumarole
Dsm%davidsmithite%%Liset eclogite pod
Dsp%diaspore%%Kosoi Brod
Dsr%dresserite%%Francon quarry
Dss-Y%dessauite-(Y)%%Buca della Vena mine
Dth%dickthomssenite%%
Dtn%duttonite%%
Dtr%dietrichite%%
Dtw%dutrowite%%Fornovolasco
Du%duranusite%%
Dua%dualite%%Mount Alluaiv
Duf%dufrénoysite%%Lengenbach quarry
Dug%dugganite%%Tombstone Historic District
Duk%dukeite%%Conceição do Mato Dentro
Dun%dundasite%%Dundas mineral field
Dur%durangite%%
Dus%dusmatovite%%Darai-Pioz glacier
Dut-Ce%dutkevichite-(Ce)%%
Dvc%davinciite%%Khibiny Mountains
Dvd-Ce%davidite-(Ce)%%
Dvd-La%davidite-(La)%%
Dvi%devilliersite%%Har Parsa
Dvm%davemaoite%%Orapa diamond mine|inclusion(s) in a mineral
Dvn%davanite%%Murunskii massif
Dvo%dobrovolskyite%%Second scoria cone
Dvr-Ce%deveroite-(Ce)%%Scherbadung
Dvs-Ce%diversilite-(Ce)%%Mount Yukspor
Dvt%devitoite%%Esquire No. 8 claim
Dvy%davyne%%Mount Somma
Dwh%donwilhelmsite%%Oued Awlitis 001
Dwn%downsite%%
Dwo%dwornikite%%
Dws%dawsonite%%Mount Royal
Dwt%dewitite%%Jas Roux
Dxn%dixenite%%Långban
Dyd%diaoyudaoite%%Senkaku Islands
Dye%dreyerite%%
Dym%dymkovite%%
Dyp%dypingite%%
Dyr-La%dyrnaesite-(La)%%Taseq area
Dys%dyscrasite%%
Dz%dzhalindite%%
Dzh%dzharkenite%%Dzharkenskaya depression
Dzl%dzhuluite%%Mount Lakargi
Dża%dzierżanowskite%%northeastern Hatrurim formation, Jordan
Ea%eakerite%%Foote Lithium Co. mine
Eal%elaliite%%
Ear%earlandite%%
Ebl%edgarbaileyite%%Clear Creek claim
Ebn%eskebornite%%Tilkerode
Ebr%ebnerite%%
Ebs%elbrusite%%Mount Lakargi
Ebu%ernstburkeite%%East Antarctica
Ec%ecandrewsite%%
Eca%eucairite%%Skrikerum mine
Ecd%ecdemite%%Långban
Ech%eriochalcite%%Mount Vesuvius
Eck%eckermannite%%Hpakant-Tawmaw jade tract
Ecl%eclarite%%
Ecp%eucryptite%%Fillow quarry
Ecr%euchlorine%%Mount Vesuvius
Ecs%euclase%%Ouro Preto
Edd%epididymite%%Narsaarsuk pegmatite
Edf%eldfellite%%Eldfell
Edg%edgarite%%Mount Kaskasnyunchorr
Edi%edingtonite%%Strathclyde
Edn-Ce%esdanaite-(Ce)%%Poudrette quarry
Edt%edtollite%%Arsenatnaya fumarole
Edv%eddavidite%%Bisbee
Edw%edwardsite%%Block 14 opencut, Broken Hill mine
Edy%eudidymite%%Little Årøya
Efb%effenbergerite%%Wessels mine
Efr%efremovite%%Kopeysk
Efv%epifanovite%%Kester tin deposit
Egg%eggletonite%%
Egh%engelhauptite%%Daun
Egl%eglestonite%%Terlingua district
Ego%elgoresyite%%Suizhou
Egr%edgrewite%%Mount Lakargi
Egs%englishite%%Clay canyon, Fairfield
Egt%eugsterite%%
Ehd%eckhardite%%Aga mine|Bird Nest drift
Ehr%ehrleite%%Tip Top mine
Eht%edenharterite%%Lengenbach quarry
Eic%ericaite%%
Eif%eifelite%%Caspar quarry
Eir%eirikite%%Vesle Arøy island
Eit%eitelite%%
Ejs%erikjonssonite%%Kombat
Ek%ekanite%%Ratnapura
Eka%ekaterinite%%Korshunovskoye iron-boron skarn deposit
Ekb%ekebergite%%In den Dellen quarries
Ekm%eskimoite%%Ivigtuut cryolite deposit
Ekp%ekplexite%%Mount Kaskasnyunchorr
Ekr%eckerite%%Lengenbach quarry
Ekt%ekatite%%Tsumeb mine
Ekv%ermakovite%%Ravat Kishlak
El%ellinaite%%Hatrurim Basin
Ela%elasmochloite%%Arsenatnaya fumarole
Elb%elbaite%%San Piero in Campo
Eld%eldragónite%%El Dragón mine
Elg%ellingsenite%%Aris quarries
Eli%elliottite%%Tom's phosphate quarry
Elk%elkinstantonite%%
Ell%ellenbergerite%%Case Parigi
Elm%eleomelanite%%Arsenatnaya fumarole
Elp%elpasolite%%St Peters Dome
Els%ellisite%%
Elt%eltyubyuite%%Mount Lakargi
Elx%ericlaxmanite%%Arsenatnaya fumarole
Ely%elyite%%
Emb%embreyite%%Beryozovskoye deposit
Eme%emeleusite%%
Emi%emilite%%Western ore field, scheelite deposit
Emp%emplectite%%
Ems%emmonsite%%Tombstone
En%enstatite%%
Enf%enricofrancoite%%
Eng%enargite%%
Eni%erniggliite%%Lengenbach quarry
Enk%ernienickelite%%
Ens%ernstite%%
Eos%eosphorite%%Fillow quarry
Eoy%edoylerite%%Clear Creek claim
Ep%epidote%%Le Bourg-d'Oisans
Ep-Sr%epidote-(Sr)%%Nankoku
Epd%elpidite%%
Eph%ephesite%%Ephesus
Epo%eliopoulosite%%Aghio Stefanos mine
Epr%esperite%%Parker shaft
Epz%esperanzaite%%La Esperanza mine, Durango
Erc%ercitite%%Tanco mine
Erd%erdite%%Coyote Peak
Erg%eringaite%%Eringa river mouth
Eri-Ca%erionite-Ca%%
Eri-K%erionite-K%%
Eri-Na%erionite-Na%%
Erk%erikapohlite%%Tsumeb mine
Erl%erlichmanite%%
Erm%ermeloite%%
Ern%erlianite%%Erenhot
Ert%ertixiite%%
Ery%erythrite%%Daniel mine
Erz%erazoite%%El Guanaco ore deposit
Esat%enneasartorite%%Lengenbach quarry
Esc%escheite%%Aris quarries
Esd%erythrosiderite%%Mount Vesuvius
Esh%ershovite%%Koashva open pit|Mount Rasvumchorr
Esk%eskolaite%%Outokumpu
Esm%epsomite%%Epsom
Esn%earlshannonite%%Foote Lithium Co. mine
Eso%erssonite%%Långban
Esp%espadaite%%Torrecillas mine
Esq%esquireite%%Esquire no. 1 claim|Trumbull peak
Ess%esseneite%%
Est%edscottite%%Wedderburn meteorite
Estb%epistilbite%%
Esv%eliseevite%%Mount Alluaiv
Ett%ettringite%%Bellerberg volcano
Euc%euchroite%%Ľubietová
Eud%eudialyte%%Kangerluarsuk fjord, Ilímaussaq
Eug%eugenite%%
Eul%eulytine%%Schneeberg ore district
Eur%eurekadumpite%%Centennial Eureka mine
Ev%eveite%%Långban
Eva%evanichite%%
Evd%evdokimovite%%First scoria cone
Evk%evenkite%%Evenkiysky District
Evl%eveslogite%%Mount Eveslogchorr
Evn%evansite%%Železník
Evs%evseevite%%Arsenatnaya fumarole
Ew%ewaldite%%Green River formation (Sweetwater Co.)
Ewd%edwindavisite%%Rowley mine
Ewg%ewingite%%Plavno mine
Eyl%eylettersite%%Kobokobo open pit
Eys%eyselite%%Tsumeb mine
Ezc%ezcurrite%%
Ezo%ezochiite%%Tomamae
Ezw%erzwiesite%%Erzwies area
Fa%fayalite%%Faial Island
Fab%fabrièsite%%Hpakant-Tawmaw jade tract
Facel%ferroaluminoceladonite%%Hokonui Hills
Fafr%fluoralforsite%%Hatrurim formation
Fah%faheyite%%Sapucaia mine
Fai%faizievite%%Darai-Pioz glacier
Fajd-BaFe%fluorarrojadite-(BaFe)%%
Fajd-BaNa%fluorarrojadite-(BaNa)%%
Fak-Ce%ferriakasakaite-(Ce)%%
Fak-La%ferriakasakaite-(La)%%Unnamed manganese deposit, Shobu
Fal%falgarite%%
Fald%ferroalluaudite%%
Faln-Ce%ferriallanite-(Ce)%%Neprimetnyi pegmatite
Faln-La%ferriallanite-(La)%%In den Dellen quarries
Fam%famatinite%%
Fan%francoanellite%%
Fann%fluorannite%%Suzhou
Fap%fluorapatite%%
Fapo-Cs%fluorapophyllite-(Cs)%%Darai-Pioz glacier
Fapo-K%fluorapophyllite-(K)%%India
Fapo-NH4%fluorapophyllite-(NH₄)%%Vranov nad Topľou District
Fapo-Na%fluorapophyllite-(Na)%%
Far%farneseite%%Farnese
Fas%fassinaite%%Trentini mine
Fau-Ca%faujasite-Ca%%
Fau-Mg%faujasite-Mg%%
Fau-Na%faujasite-Na%%
Fav%favreauite%%El Dragón mine
Fbd%freboldite%%Trogtal quarries, Lautenthal
Fbfg%ferrobobfergusonite%%
Fbg%fulbrightite%%Packrat mine, Gateway
Fblmp%fluorbarytolamprophyllite%%
Fbmk%ferribushmakinite%%Silver Coin mine
Fbn%fabianite%%
Fbo%fluoborite%%
Fbos%ferro-bosiite%%
Fbri-Ce%fluorbritholite-(Ce)%%Poudrette quarry
Fbri-Nd%fluorbritholite-(Nd)%%Malmkärra mine
Fbri-Y%fluorbritholite-(Y)%%Hamarøy Municipality|Kråkmo|Mount Vyuntspakhk
Fbru%ferroberaunite%%Gravel Hill mine
Fbst%ferrobustamite%%
Fbt%felbertalite%%Western ore field, scheelite deposit
Fbz%fabritzite%%Hilarion mine
Fcar%ferrocarpholite%%
Fcbri%fluorcalciobritholite%%Tuliok river head, East slope
Fcc%franciscanite%%
Fcd%falcondoite%%Loma La Peguera
Fcel%ferroceladonite%%Hokonui Hills
Fcg%fengchengite%%Fengcheng
Fcgm%fluorchegemite%%Mount Lakargi
Fch%fairchildite%%Grand Canyon National Park|Kaniksu National Forest
Fck%fluckite%%Mount Neuenberg silver mines
Fcm-BaNa%fluorcarmoite-(BaNa)%%
Fcmic%fluorcalciomicrolite%%Volta Grande mine
Fcns%fluorcanasite%%Kukisvumchorr
Fco%fencooperite%%Trumbull peak
Fcor%ferricoronadite%%
Fcp%fluorcaphite%%Koashva open pit
Fcpcl%fluorcalciopyrochlore%%Bayan Obo mine
Fcpi%ferricopiapite%%
Fcr%ferchromide%%
Fcrm%fluorcalcioroméite%%Starlera mine
Fcrt-Ce%fluocerite-(Ce)%%
Fcrt-La%fluocerite-(La)%%
Fcs%francisite%%Iron Monarch mine
Fcto%fluorcarletonite%%
Fcve%ferrochiavennite%%Kokkersvold E18 roadcuts|Tuften quarry
Fdb%freudenbergite%%
Fdk%fredrikssonite%%Långban
Fdl%friedelite%%
Fdmol%ferrodimolybdenite%%Daba-Siwaqa complex
Fdo%fedorovskite%%Solongo boron deposit
Fdr%fedorite%%
Fdrv%fluor-dravite%%Crabtree Mine
Fds%frankdicksonite%%
Fdt%fedotovite%%Great Fissure eruption
Fdw%ferdowsiite%%Barika ore deposit
Fdy%feodosiyite%%Glavnaya Tenoritovaya fumarole
Fea-Ce%ferriandrosite-(Ce)%%
Fea-La%ferriandrosite-(La)%%Unnamed manganese deposit, Shobu
Feb%ferberite%%
Fecrt-La%ferricerite-(LaCa)%%Hackman valley|Mount Yukspor
Fefr%ferroefremovite%%Solfatara
Feh%fehrite%%
Fei%feiite%%Shergotty meteorite
Fek%feklichevite%%Kovdor phlogopite mine
Felb%fluor-elbaite%%Itinga
Fer%ferrarisite%%Mount Neuenberg silver mines
Fers%ferroericssonite%%Esquire No. 7 claim|Esquire No. 8 claim
Fet%fetiasite%%Binn valley|Scherbadung
Fey%feynmanite%%Blue Lizard mine|Markey mine
Ffa%fanfaniite%%Cornelia shaft, Hagendorf South open cut|Foote Lithium Co. mine
Ffd%fairfieldite%%Fillow quarry
Ffed%ferro-fluoro-edenite%%La Fossa crater
Ffhbl%ferro-ferri-hornblende%%
Ffhlm%ferro-ferri-holmquistite%%Iwagi islet
Ffktp%ferro-ferri-katophorite%%
Fflktp%ferri-fluoro-katophorite%%
Ffnyb%ferro-ferri-nybøite%%Poudrette quarry
Ffr%fibroferrite%%Tierra Amarilla
Fftt%ferrofettelite%%Nieder-Beerbach
Fg%fangite%%
Fgg%foggite%%Palermo No. 1 mine
Fgl%feinglosite%%Tsumeb mine
Fgr%fingerite%%Izalco
Fgs-Y%fergusonite-(Y)%%
Fhhy%ferrohexahydrite%%
Fhl%fahleite%%Tsumeb mine
Fhld-Ce%ferri-hellandite-(Ce)%%
Fhol%ferrihollandite%%
Fht%frankhawthorneite%%Centennial Eureka mine
Fhy%ferrihydrite%%
Fhög-2N2S%ferrohögbomite-2N2S%%Aïn Taïba
Fi-trm%ferri-taramite%%
Fic%fichtelite%%
Fin%finchite%%
Find%ferroindialite%%Caspar quarry
Fis%fischesserite%%Předbořice
Fiv%fivegite%%Tsentral'nyi mine
Fiz%fizélyite%%
Fk%fukalite%%Fuka mine
Fke%franckeite%%Chocaya-Animas mines
Fkf%franklinfurnaceite%%Franklin
Fkm%frankamenite%%Murunskii massif
Fkn%feitknechtite%%Franklin
Fkns%ferrokinoshitalite%%
Fkp%franklinphilite%%Buckwheat pit
Fkrs%ferri-kaersutite%%Harrow Peaks
Fktb%ferrokentbrooksite%%Poudrette quarry
Fky%fluorkyuygenite%%Hatrurim formation
Fkës%ferrokësterite%%
Flae%ferrolaueite%%
Flb%freieslebenite%%Himmelsfürst mine
Flc%fluorocronite%%
Fle%fleetite%%Miass Placer Zone
Flg%flaggite%%Contention-Grand Central mine group
Flkns%fluorokinoshitalite%%Bayan Obo mine
Fll%fluellite%%
Flmy%ferrilotharmeyerite%%Tsumeb mine
Fln%flinkite%%Harstigen mine
Flo-Ce%florencite-(Ce)%%
Flo-La%florencite-(La)%%Likasi
Flo-Nd%florencite-(Nd)%%Sausalito
Flo-Sm%florencite-(Sm)%%Lake Grubependity
Flr%fluorite%%Jáchymov
Fls%falsterite%%Palermo No. 1 mine
Flt%falottaite%%Falotta
Flv%frolovite%%Novofrolovskoye boron-copper deposit
Flw%fluorluanshiweiite%%
Flö%flörkeite%%Caspar quarry
Fmc%formicaite%%Solongo boron deposit
Fmer%ferromerrillite%%Shergotty meteorite
Fmi%fermiite%%Blue Lizard mine
Fmm%fiemmeite%%San Lugano Pass
Fmn%falkmanite%%
Fmot-Ce%ferri-mottanaite-(Ce)%%Tre Croci railway halt
Fmr%fourmarierite%%Shinkolobwe mine
Fmt%flamite%%Hatrurim Basin
Fmy%fluormayenite%%Jabel Harmun
Fmyb%ferrimolybdite%%
Fnat%ferrinatrite%%
Fnc%fluornatrocoulsellite%%Mount Cleveland tin mine, Luina
Fnck%finescreekite%%
Fnd%frondelite%%Sapucaia mine
Fng-2N1S%ferronigerite-2N1S%%
Fng-6N6S%ferronigerite-6N6S%%Kimito island
Fnk%fenaksite%%Material'naya adit
Fnl%fianelite%%Fianel mine
Fnmic%fluornatromicrolite%%
Fnn%finnemanite%%Långban
Fno%fresnoite%%Esquire No. 7 claim
Fnor-Ce%ferronordite-(Ce)%%Chinglusuai river valley|Mount Karnasurt
Fnor-La%ferronordite-(La)%%Lovozero massif
Fnpcl%fluornatropyrochlore%%
Fnpt%ferronickelplatinum%%
Fns%franksousaite%%El Dragón mine
Fnt%flinteite%%First scoria cone
Fo%forsterite%%Mount Somma
Fob%ferri-obertiite%%Rothenberg basalt quarry
Foi%foitite%%California
Fon%fontarnauite%%
Foo%foordite%%
Fopd%ferro-pedrizite%%Sangilen Upland
For%fornacite%%Reneville
Forck%ferrorockbridgeite%%Cornelia shaft, Hagendorf South open cut
Fos%foshagite%%Commercial quarry, Sky Blue Hill
Fostz%ferrostrunzite%%
Fox%feroxyhyte%%
Fpa%ferro-papikeite%%Filipstad Municipality
Fpbø-Ce%ferriperbøeite-(Ce)%%Bastnäs
Fpbø-La%ferriperbøeite-(La)%%Mochalin Log REE deposit
Fphdy%fluorphosphohedyphane%%Blue Bell mine (Baker)
Fphl%fluorophlogopite%%Mount Calvario, Biancavilla
Fprh%ferriprehnite%%
Fprl%ferripyrophyllite%%Eibenstock
Fpt%fraipontite%%East Kazakhstan Region|Kelmis|Sterling Hill
Fpym%fluorpyromorphite%%
Fqin%ferroqingheiite%%Linópolis
Fra%franconite%%Francon quarry
Frb%frohbergite%%Robb-Montbray mine
Frck%ferrirockbridgeite%%Palermo No. 1 mine
Frd%friedrichite%%
Frdn%ferrorhodonite%%Broken Hill
Fre%freedite%%Långban
Frg%furongite%%
Frh%ferhodsite%%Aleksandrov Log platinum deposit, Solov'eva mountain|Kondyor massif
Fri%friedrichbeckeite%%Caspar quarry
Frk%franklinite%%Franklin|Sterling Hill|Trotter mine
Frl%ferraioloite%%Foote Lithium Co. mine
Frm-Y%formanite-(Y)%%
Frmy%ferrorosemaryite%%
Fro%froodite%%Frood mine
Frr-K%ferrierite-K%%
Frr-Mg%ferrierite-Mg%%
Frr-NH4%ferrierite-NH4%%
Frr-Na%ferrierite-Na%%
Frs%florensovite%%Pereval marble quarry
Frt%farringtonite%%
Fru%ferruccite%%Mount Vesuvius
Frz%franzinite%%Case Collina
Frç-Ce%françoisite-(Ce)%%La Creusaz uranium prospect|Mount Painter
Frç-Nd%françoisite-(Nd)%%Kamoto mine
Frê%forêtite%%Cap Garonne mine
Fs%ferrosilite%%
Fsa%ferrisanidine%%Arsenatnaya fumarole
Fsap%ferrosaponite%%Evenkiysky District
Fsb%felsőbányaite%%
Fse%ferroselite%%
Fsep%ferrisepiolite%%Saishitang Mine
Fsf%flagstaffite%%Flagstaff
Fsh%fleischerite%%Tsumeb mine
Fsig%fluorsigaiite%%
Fsk%florenskyite%%Kaidun meteorite
Fskt%ferroskutterudite%%Komsomol'skii mine
Fsl%fransoletite%%Tip Top mine
Fsn%fersmanite%%Mount Eveslogchorr
Fsrl%fluor-schorl%%Franzensfeste|Zschorlau
Fss%fleisstalite%%Fleisstal
Fst%faustite%%
Fstd%ferrostalderite%%Lengenbach quarry
Fstr%fluorstrophite%%Inagli chrome diopside deposit
Fstz%ferristrunzite%%
Fsur%ferrisurite%%
Fta%freitalite%%
Ftc%fletcherite%%Fletcher mine
Ftch%ferrotochilinite%%Oktyabr'skoe Cu-Ni deposit
Ftf-2N'2S%ferrotaaffeite-2N'2S%%Xianghualing Sn-polymetallic ore field
Ftf-6N'3S%ferrotaaffeite-6N'3S%%Kimito island
Ftfphl%fluorotetraferriphlogopite%%Bayan Obo mine
Ftl%fluor-tsilaisite%%San Piero in Campo
Ftm%footemineite%%Foote Lithium Co. mine
Ftn%fontanite%%Rabejac, Lodève
Ftp%fantappièite%%Stracciacappe caldera
Ftr%fluoro-tremolite%%Sparta Township
Fts%ferro-tschermakite%%La Clarté, Perros-Guirec
Ftt%fettelite%%
Ftv%filatovite%%Second scoria cone
Ftwdg%ferrotitanowodginite%%
Ftyc%ferrotychite%%Olenii Ruchei
Ftyw%ferrotorryweiserite%%
Fue%fuettererite%%Otto mountain
Fuk%fukuchilite%%
Fur%furutobeite%%
Fuvt%feruvite%%Cuvier Island (Repanga Island)
Fval%ferrovalleriite%%Oktyabr'skoe Cu-Ni deposit
Fves%fluorvesuvianite%%Lupikko iron mine
Fvk%folvikite%%Kitteln mine,  Nordmark Odal field
Fvl%Francevillite%%Mounana mine
Fvn%fervanite%%Grand County|San Miguel County
Fvor%ferrovorontsovite%%Vorontsovskoe gold deposit
Fvx%ferrivauxite%%Siglo Veinte mine
Fwav%fluorwavellite%%Silver Coin mine|Wood mine
Fwd%fluorowardite%%Silver Coin mine
Fwdg%ferrowodginite%%
Fwyl%ferrowyllieite%%
Fzl%fuenzalidaite%%Mines of Canchas
Fzs%fritzscheite%%Johanngeorgenstadt|Ore Mountains
Fül%fülöppite%%
Gab%gabrielite%%Lengenbach quarry
Gac%gachingite%%
Gad-Ce%gadolinite-(Ce)%%
Gad-Nd%gadolinite-(Nd)%%Malmkärra mine
Gad-Y%gadolinite-(Y)%%Ytterby mine
Gag-Y%gagarinite-(Y)%%Verkhnee Espe massif
Gai%gaildunningite%%
Gaj%gajardoite%%Torrecillas mine
Gak%gearksutite%%Ivigtuut cryolite deposit
Gal%gallite%%Kipushi mine|Tsumeb mine
Gam%gamagarite%%
Gan%gananite%%
Gao%gaotaiite%%Gaositai Cr-PGE deposit
Gar%garutiite%%Loma La Peguera
Gas%garyansellite%%Rapid creek
Gat-Ce%gatelite-(Ce)%%
Gau%gaultite%%Poudrette quarry
Gaz%gazeevite%%Hatrurim Basin|Jabel Harmun|Shadil-Khokh volcano|northeastern Hatrurim formation, Jordan
Gba%georgbarsanovite%%Khibiny Mountains
Gbb%gobbinsite%%Gobbins path
Gbdn%gallobeudantite%%Tsumeb mine
Gbit%galenobismutite%%Nordmark Odal field
Gbk%georgbokiite%%Great Fissure eruption
Gbl%günterblassite%%Rother Kopf
Gbs%gibbsite%%
Gbv%gorbunovite%%Darai-Pioz glacier
Gc%glaucocerinite%%Serpieri mine
Gch%georgechaoite%%
Gck%goosecreekite%%New Goose Creek quarry
Gcl%galeaclolusite%%Cap Garonne mine
Gclu%germanocolusite%%Maikain gold deposit|Urup copper deposit
Gcn%grischunite%%Falotta
Gcv%grechishchevite%%Kadyrel' Hg occurrence
Gcx%gorceixite%%Ouro Preto
Gda%gordaite%%Caracoles
Gdd%grandidierite%%
Gdf%gersdorffite%%
Gdh%goldhillite%%Gold Hill
Gdi%guildite%%United Verde mine
Gdm%grundmannite%%El Dragón mine
Gdn%gaidonnayite%%Poudrette quarry
Gdo%gordonite%%Clay canyon, Fairfield
Gdr%gortdrumite%%
Gds%gladiusite%%Kovdor massif
Gdt%guidottiite%%Nchwaning mines
Gdy%goudeyite%%
Geb%gebhardite%%Tsumeb mine
Gee%geerite%%
Gef%geffroyite%%
Gek%george-ericksenite%%
Gel%gelosaite%%Punta de Su Seinargiu
Gem%geminite%%Cap Garonne mine
Geo%geocronite%%
Ger%germanite%%Tsumeb mine
Get%getchellite%%Getchell mine
Gev%geversite%%Bushveld igneous complex
Gfn%griffinite%%Mount Carmel|inclusion(s) in a mineral
Gfs%greifensteinite%%Greifensteine
Gft-Ca%graftonite-(Ca)%%
Gft-Mn%graftonite-(Mn)%%
Gfy%gaudefroyite%%Tachgagalt mine
Ggb-Ce%galgenbergite-(Ce)%%railroad tunnel Galgenberg
Ggd%georgiadesite%%Laurium
Gge%gageite%%Franklin
Ggl%glagolevite%%Kovdor phlogopite mine
Ggr%geigerite%%Falotta
Ggu%grguricite%%
Ggv%grigorievite%%Second scoria cone
Ggy%gregoryite%%Ol Doinyo Lengai
Gh%gehlenite%%
Ghd%gerhardtite%%United Verde mine
Ghi%ghiaraite%%Mount Vesuvius
Ghn%gahnite%%Falun Mine
Ghs%gatehouseite%%Iron Monarch mine
Ghv%genthelvite%%El Paso County
Ghy%grokhovskyite%%Uakit meteorite
Gia%gianellaite%%Mariposa mine
Gie%giessenite%%
Gif%giftgrubeite%%Giftgrube mine
Gil%gilalite%%
Gin%giniite%%
Gis-Ca%gismondine-Ca%%
Git%gittinsite%%
Giu%giuseppettite%%Sacrofano caldera
Gj%guanajuatite%%
Gje-Ca%gjerdingenite-Ca%%Natrolite stock, Karnasurt mount
Gje-Fe%gjerdingenite-Fe%%Gjerdingselva outcrops
Gje-Mn%gjerdingenite-Mn%%Gjerdingselva outcrops
Gje-Na%gjerdingenite-Na%%Poudrette quarry
Gk%geikielite%%Rakwana
Gkh%galkhaite%%Khaidarkan
Gki%genkinite%%
Gkn%galuskinite%%Birkhin gabbro massif
Gko-Mn%gutkovaite-Mn%%Mount Maly Mannepakhk
Gks%glaukosphaerite%%Kambalda mines
Gkv%gladkovskyite%%Vorontsovskoe gold deposit
Gl%glaucodot%%
Gla%gillardite%%Widgiemooltha
Glb%glauberite%%Villarrubia de Santiago
Glc%glaucochroite%%Franklin
Gld%gladite%%
Gle%galeite%%Searles Lake
Glf%ginelfite%%
Gli%glikinite%%Arsenatnaya fumarole
Glk%galliskiite%%Gigante pegmatite
Glm%goldmanite%%
Gls%gillespite%%
Glu%glucine%%
Glx%galaxite%%Bald Knob deposit
Gly%gillulyite%%South Mercur Pit
Glz%greenlizardite%%Green Lizard mine
Gm%gormanite%%Rapid creek
Gma%gmalimite%%Halamish wadi
Gmc-Y%gramaccioliite-(Y)%%
Gmd%grimaldiite%%
Gme-Ca%gmelinite-Ca%%San Pietro Mussolino
Gme-K%gmelinite-K%%Mount Alluaiv
Gme-Na%gmelinite-Na%%San Pietro Mussolino
Gmi%graemite%%Bisbee
Gmk%grammatikopoulosite%%Aghio Stefanos mine
Gmm%grimmite%%Příbram District
Gmn%gerstmannite%%Sterling Hill
Gmr%gilmarite%%Roua mines
Gms%gerasimovskite%%Mount Malyi Punkaruaiv
Gmt%grumantite%%Mount Alluaiv
Gn%galena%%
Gnb%gengenbachite%%Silberbrünnle mine
Gnc%guanacoite%%El Guanaco ore deposit
Gng%gungerite%%Vorontsovskoe gold deposit
Gni%guanine%%
Gnk%greenockite%%Strathclyde
Gnm%ganomalite%%Långban
Gnn%gunningite%%Mayo ore district
Gnp%ganophyllite%%Harstigen mine
Gnr%ginorite%%Sasso Pisano
Gns%gainesite%%
Gnt-Y%gerenite-(Y)%%
Go%godlevskite%%Mayak mine|Norilsk|Talnakh ore field
Goa%groatite%%Tanco mine
Gob%gobelinite%%Cap Garonne mine
God%godovikovite%%Kopeysk
Goe%goedkenite%%Palermo No. 1 mine
Gol%goldichite%%
Gor%gorerite%%Hatrurim Basin
Gos%goslarite%%
Got%gottlobite%%Glücksstern mine, Gottlob hill
Gow%gowerite%%Furnace Creek district
Gp%gypsum%%
Gpb%garpenbergite%%
Gpbg%galloplumbogummite%%Tsumeb mine
Gpc%grumiplucite%%
Gph%griphite%%
Gpl%genplesite%%Oktyabr'skoe Cu-Ni deposit
Gpé%gaspéite%%
Gqy%goldquarryite%%Gold quarry mine
Gr%graphite%%
Gra%grattarolaite%%Santa Barbara ore district
Grb%georgerobinsonite%%Mammoth-Saint Anthony mine
Grd%grandaite%%Valletta mine
Gre%greenalite%%Mesabi Range
Grf%grandreefite%%Grand Reef mine
Grg%greigite%%
Gri%griceite%%Poudrette quarry
Grl-Ce%graulichite-(Ce)%%Hourt quarry
Grl-La%graulichite-(La)%%Patte d'Oie mine
Grm%garmite%%Darai-Pioz glacier
Grn-Ca%garronite-Ca%%
Grn-Na%garronite-Na%%Poudrette quarry
Gro%groutite%%Cuyuna Range
Grr%garrelsite%%
Grs%grossular%%Akhtaragda river mouth
Grv%garavellite%%Massa
Gry%grayite%%
Grz%gurzhiite%%
Grã%guimarãesite%%Itinga
Gs%grantsite%%Thompsons district
Gsb%geschieberite%%Svornost mine
Gsc%goldschmidtite%%Koffiefontein mine|inclusion(s) in a mineral
Gsl%grimselite%%Gerstenegg-Sommerloch tunnel
Gsm%grossmanite%%Allende meteorite
Gsp-Ce%gasparite-(Ce)%%Scherbadung
Gsp-La%gasparite-(La)%%
Gsr%graeserite%%Binn valley
Gss%grossite%%Acfer 182|Hatrurim Basin
Gst%gerstleyite%%Pacific Coast Borax Company
Gsv%golyshevite%%Kovdor phlogopite mine
Gt%gaitite%%Tsumeb mine
Gtb%gatumbaite%%Buranga pegmatite
Gtd%gatedalite%%Långban
Gtf%grootfonteinite%%Kombat
Gth%goethite%%Dermbach, Herdorf
Gtm%gerdtremmelite%%Tsumeb mine
Gtn%gratonite%%
Gtr%ganterite%%Wasenalp
Gtt%gottardiite%%Adamson
Gu%gudmundite%%
Gua%guarinoite%%Cap Garonne mine
Gue%guettardite%%Taylor pit
Gug%gugiaite%%Suzhou
Gui%guite%%Kolwezi
Gul%guilleminite%%Musonoi mine
Gum%gunmaite%%
Gup%gupeiite%%Placer occurrences (Yanshan meteorite)
Gur%gurimite%%Gurim anticline
Gus%gustavite%%Ivigtuut cryolite deposit
Gut%gauthierite%%Shinkolobwe mine
Guy%guyanaite%%
Gué%guérinite%%Daniel mine
Gvg%gravegliaite%%Valgraveglia mine
Gvs%girvasite%%Kovdor Zheleznyi mine
Gvz%giacovazzoite%%Monte Arsiccio mine
Gwd%greenwoodite%%
Gwi%gwihabaite%%Gcwihaba caves
Gwy%gatewayite%%Packrat mine, Gateway
Gy%gayite%%Gigante pegmatite
Gye%gonyerite%%Långban
Gyl%gaylussite%%
Gyn%guangyuanite%%El Dragón mine
Gyr%gyrolite%%The Storr
Gys-Ce%gysinite-(Ce)%%
Gys-La%gysinite-(La)%%
Gys-Nd%gysinite-(Nd)%%Kasompi mine
Gyv%goryainovite%%
Gzd%gruzdevite%%
Gög%görgeyite%%Ischler Salzberg
Gţi%graţianite%%Băița
Ha%haapalaite%%Outokumpu
Haf%hafnon%%
Hag%hagendorfite%%Cornelia shaft, Hagendorf South open cut
Haga%hochelagaite%%Francon quarry|Poudrette quarry
Hak-Cd%hakite-(Cd)%%
Hak-Fe%hakite-(Fe)%%
Hak-Zn%hakite-(Zn)%%
Han%hannayite%%
Hap%hydroxylapatite%%
Hapo-K%hydroxyapophyllite-(K)%%
Har%harstigite%%Harstigen mine
Has%hasanovite%%Ravat Kishlak
Hat%hatchite%%Lengenbach quarry
Hax%haxonite%%Canyon Diablo meteorite|Toluca meteorite
Hay%haynesite%%Repete mine
Hb%hambergite%%Langesundsfjord
Hba%hydrobasaluminite%%
Hbc%hannebachite%%Brohltal
Hbd%humboldtine%%
Hbe%humberstonite%%
Hbk%hansblockite%%El Dragón mine
Hbo%hydroboracite%%Inder Lake
Hbr%hübnerite%%
Hbsn-Ce%hydroxylbastnäsite-(Ce)%%Mochalin Log REE deposit|Vuoriyarvi alkaline-ultrabasic massif
Hbsn-La%hydroxylbastnäsite-(La)%%
Hbsn-Nd%hydroxylbastnäsite-(Nd)%%
Hbw%hylbrownite%%Dome Rock copper mine
Hbá%hrabákite%%
Hc%hercynite%%
Hcb%hydrochlorborite%%
Hccn%hydroxycancrinite%%Mount Karnasurt
Hcer%hydrocerussite%%Långban
Hch%hungchaoite%%Da Qaidam Hu
Hchn%hydroxylchondrodite%%
Hchu%hydroxylclinohumite%%
Hcin%hypercinnabar%%
Hck%hauckite%%Sterling Hill
Hcl%hydrocalumite%%Scawt Hill
Hcls%hexacelsian%%Hatrurim formation
Hcmic%hydroxycalciomicrolite%%Volta Grande mine
Hcn%hunchunite%%
Hcpcl%hydroxycalciopyrochlore%%Maoniuping mine
Hd%hedenbergite%%
Hde%holdenite%%Franklin
Hdg%hodgesmithite%%Block 14 opencut, Broken Hill mine
Hdh%heyerdahlite%%
Hdhy%hydrodelhayelite%%Apatitovyi tsirk
Hdi%haidingerite%%Jáchymov
Hdl%hedleyite%%
Hdn%heidornite%%
Hdp%hedyphane%%Långban
Hdr%hendersonite%%
Hdrs%hydrodresserite%%Francon quarry
Hds%hendricksite%%Buckwheat pit|Franklin
Hdv%howardevansite%%Izalco
Hdw%holdawayite%%Kombat
Hdy%hardystonite%%Franklin
Hea-Ce%heamanite-(Ce)%%Gahcho Kue Diamond Mine|inclusion(s) in a mineral
Heb%hechtsbergite%%
Hed%hedegaardite%%
Hef%heftetjernite%%Heftetjern pegmatite
Hegr%hydroxyledgrewite%%Mount Lakargi
Hei%heideite%%Bustee meteorite
Hek%heklaite%%Hekla
Hel%hydroxylellestadite%%Crestmore quarries
Hem%hematite%%
Hen%henmilite%%Fuka mine
Hep%hephaistosite%%La Fossa crater
Her%herbertsmithite%%Caracoles
Hes%hessite%%Second Zavodinskii mine
Het%heterosite%%
Hew%hewettite%%
Hez%hezuolinite%%Fengcheng
Hfe%hexaferrum%%
Hfk%heflikite%%
Hfl%hectorfloresite%%
Hfr%hydroxyferroroméite%%Oms
Hg%mercury (native)%%
Hga%haigerachite%%Silberbrünnle mine
Hgg%häggite%%
Hgh%hongheite%%
Hgk%hodgkinsonite%%Franklin
Hglb%hydroglauberite%%
Hgn%hoganite%%Broken Hill
Hgr%hilgardite%%Plaquemine
Hgs%hagstromite%%Bird Nest drift|Southwest Cut, Otto Mountain
Hgt%haggertyite%%
Hgug%hydroxylgugiaite%%Kokkersvold E18 roadcuts|Saga 1 quarry, Sagåsen
Hhb%hexahydroborite%%Solongo boron deposit
Hhd%hydroxylherderite%%
Hhdy%hydroxylhedyphane%%Långban
Hhe%hemihedrite%%
Hhl%hydrohalite%%Bad Dürrnberg
Hhm-Y%hundholmenite-(Y)%%Hundholmen, Tysfjord
Hho-Ce%huanghoite-(Ce)%%Bayan Obo mine
Hhon%hydrohonessite%%Kambalda mines
Hhy%hexahydrite%%
Hi%hillite%%Reaphook Hill
Hib%hibbingite%%Hibbing
Hie%hieratite%%La Fossa crater
Hil%hillebrandite%%
Him%heimite%%
Hin-Ce%hingganite-(Ce)%%
Hin-Nd%hingganite-(Nd)%%
Hin-Y%hingganite-(Y)%%
Hin-Yb%hingganite-(Yb)%%Mount Ploskaya
Hir%hiroseite%%Suizhou
Hit%hitachiite%%Hitachi mine
Hiz-Y%hizenite-(Y)%%
Hja%hjalmarite%%Långban
Hjh%hermannjahnite%%Naboko cinder cone
Hji%hanjiangite%%Shiti mine
Hkd%hokkaidoite%%Aibetsu|Shikaoi
Hkmic%hydrokenomicrolite%%Volta Grande mine
Hkpcl%hydrokenopyrochlore%%Antandrokomby pegmatite
Hkra%hydrokenoralstonite%%Ivigtuut cryolite deposit
Hks%hanksite%%Searles Lake
Hksat%hendekasartorite%%Lengenbach quarry
Hl%halite%%
Hla%halamishite%%Halamish wadi
Hlb%holubite%%
Hld-Ce%hellandite-(Ce)%%Lake Vico
Hle%hemleyite%%Suizhou
Hlf%holfertite%%
Hlg%halurgite%%Chelkar salt dome
Hlh%hillesheimite%%Graulay
Hli%hollisterite%%Khatyrka meteorite
Hll%hallimondite%%Michael mine, Weiler
Hln%hochleitnerite%%
Hlo%hemloite%%
Hlr%hilairite%%Poudrette quarry
Hls%hulsite%%
Hlv%helvine%%
Hlw%hollingworthite%%Bushveld igneous complex
Hly%halloysite%%Angleur
Hly-10Å%hydrohalloysite%%Angleur
Hm%hemusite%%
Hma%hennomartinite%%Wessels mine
Hmbb%hydrombobomkulite%%Mbobo Mkulu cave
Hmg%hydroxymcglassonite-(K)%%Wessels mine
Hmgs%hydromagnesite%%Hoboken
Hmk%hansesmarkite%%Tuften quarry
Hml%huemulite%%
Hmn%horomanite%%Horoman mine, Horoman peridotite body
Hmo%hexamolybdenum%%Allende meteorite
Hmp%hemimorphite%%Băița
Hmpcl%hydroxymanganopyrochlore%%In den Dellen quarries
Hmr%hammarite%%
Hmt%hematolite%%Moss mine, Nordmark Odal field
Hmu%harmunite%%Jabel Harmun
Hmy%henrymeyerite%%Kovdor Zheleznyi mine
Hn%heneuite%%Tingelstadtjern quarry
Hna%hanauerite%%Dernbach|Friedrichssegen mine
Hnc%hancockite%%Franklin|Parker shaft
Hne%honeaite%%
Hng%hongshiite%%
Hnh%hanahanite%%
Hnpcl%hydroxynatropyrochlore%%Kovdor massif
Hns%hörnesite%%
Hnt%haineaultite%%Poudrette quarry
Hnvč%hydronováčekite%%Walpurgis Flacher vein
Hnw%hanawaltite%%Clear Creek claim
Hoc%hocartite%%Chocaya-Animas mines
Hod%hodrušite%%
Hoe%hoelite%%
Hog%hogarthite%%Poudrette quarry
Hoh%hohmannite%%Sierra Gorda district
Hom%homilite%%Langesundsfjord
Hon%honessite%%
Hop%hopeite%%Kelmis
Hor%horákite%%Rovnost mine
Hot%hotsonite%%
Hou%housleyite%%Aga mine|Bird Nest drift
How%howlite%%
Hpal%hydroniumpharmacoalumite%%Rodalquilar
Hpas%hydropascoite%%Packrat mine, Gateway
Hph%hematophanite%%Jakobsberg mine
Hpk%hapkeite%%
Hpm%hydroxylpyromorphite%%Copps mine
Hppcl%hydroxyplumbopyrochlore%%
Hpsd%hydroniumpharmacosiderite%%Cornwall
Hr%hauerite%%
Hra%haradaite%%
Hrb%hurlbutite%%
Hrc%heinrichite%%Lakeview
Hrd%herderite%%
Hrdm%hydroredmondite%%Redmond Mine
Hre%hereroite%%Kombat
Hri%henritermierite%%Tachgagalt mine
Hrm%harmotome%%Sankt Andreasberg
Hrn%hilarionite%%Hilarion mine
Hro%hermannroseite%%Tsumeb mine
Hrom%hydroromarchite%%
Hrr%hatrurite%%Hatrurim Basin
Hrs%harrisonite%%
Hrv-Y%horváthite-(Y)%%Poudrette quarry
Hry%henryite%%Bisbee
Hsat%heptasartorite%%Lengenbach quarry
Hsb%heisenbergite%%Krunkelbach valley uranium deposit
Hsc%hielscherite%%Graulay
Hsg%hisingerite%%Riddarhyttan
Hsh%hashemite%%Lisdan-Siwaga fault
Hsi%hsianghualite%%Xianghualing Sn-polymetallic ore field
Hsl%hentschelite%%
Hsm%hausmannite%%
Hsp%halilsarpite%%
Hsw%hanswilkeite%%
Ht%huttonite%%
Hta%hetaerolite%%Sterling Hill
Htc%hydrotalcite%%
Htd%holtedahlite%%Tingelstadtjern quarry
Hter%hydroterskite%%Demix-Varennes quarry, Saint-Amable sill
Htg%heterogenite%%Wolfgang Maassen mine field
Htgs%hydrotungstite%%Oruro Department
Hth%halotrichite%%
Hti-La%haitaite-(La)%%Haita town
Htm%heteromorphite%%
Htn%hutcheonite%%Allende meteorite
Htpb%hexathioplumbite%%Redmond Mine
Hts%holtstamite%%Wessels mine
Htt%hatertite%%Northern breakthrough
Htu%høgtuvaite%%
Hu%humite%%Mount Somma
Hua%huangite%%Tambo mine
Hub%hubeite%%Fengjiashan mine
Hue%huenite%%
Hug%hughesite%%West Sunday mine
Hui-Al%huizingite-(Al)%%
Hul-Ba%heulandite-Ba%%
Hul-Ca%heulandite-Ca%%Strathclyde
Hul-K%heulandite-K%%Santorso
Hul-Na%heulandite-Na%%
Hul-Sr%heulandite-Sr%%
Hum%hummerite%%Jo Dandy Hill
Hun%huntite%%
Hur%hureaulite%%Les Hureaux
Hut%hutchinsonite%%Lengenbach quarry
Hw%howieite%%Laytonville
Hwag%hydroxylwagnerite%%Dora Maira coesite-bearing unit
Hwe%haiweeite%%
Hwk%helmutwinklerite%%Tsumeb mine
Hwl%hawleyite%%Mayo ore district
Hwt%hawthorneite%%Bultfontein mine
Hwwd%hydrowoodwardite%%
Hy%hellyerite%%
Hya%hyalotekite%%Långban
Hyb%hydroxylborite%%Titovskoe boron deposit
Hyc%haycockite%%Lydenburg
Hyd%haydeeite%%Haydee mine
Hyj%hyttsjöite%%Långban
Hykm%hydroxykenoelsmoreite%%Masaka gold mine
Hykpcl%hydroxykenopyrochlore%%
Hyl%hayelasdiite%%
Hyn%haüyne%%Lake Nemi
Hyr%hyršlite%%Uchucchacua
Hyt%heyite%%
Hyv%heyrovskýite%%
Hyy%hayyanite%%Barika ore deposit
Hz%hazenite%%Mono Lake
Hza%huanzalaite%%Huanzala mine
Hzb%herzenbergite%%
Hzl%heazlewoodite%%
Hznc%hydrozincite%%
Hzt%honzaite%%Jáchymov
Hål-Ce%håleniusite-(Ce)%%Água de Pau
Hål-La%håleniusite-(La)%%Bastnäs
Hös%höslite%%
Hüg%hügelite%%Michael mine, Weiler
Hšk%hloušekite%%Rovnost mine
Iag%iodargyrite%%Mazapil
Ian%ianthinite%%Shinkolobwe mine
Ibc%ianbruceite%%Tsumeb mine
Ibk%innsbruckite%%Staffelsee
Ibo%inderborite%%Inder Lake
Icb%isocubanite%%East Pacific Rise
Ice%ice%%
Ich%ichnusaite%%Punta de Su Seinargiu
Id%idrialite%%Idrija mine
Ida%idaite%%
Idg%indigirite%%
Idr%inderite%%Inder Lake
Idt%indite%%
Ifpt%isoferroplatinum%%Stillwater igneous complex
Ig%igelströmite%%Långban
Igs%ingersonite%%Långban
Igy%iangreyite%%Huber stock|Silver Coin mine
Ihd%icosahedrite%%Khatyrka meteorite
Iim-Y%iimoriite-(Y)%%Kawamata
Ijk-Ce%ilmajokite-(Ce)%%Karnasurt mine, Karnasurt mount
Ik%ikunolite%%Ikuno Mine
Ika%ikaite%%
Iko%ikorskyite%%Kirovskii apatite mine
Ikr%ikranite%%Mount Karnasurt
Ile%ilesite%%Montezuma district
Iliv%interliveingite%%Lengenbach quarry
Ilm%ilmenite%%Ilmen Nature Reserve
Ilo-Ce%illoqite-(Ce)%%Taseq area
Ilv%ilvaite%%Elba
Ily%ilyukhinite%%Kukisvumchorr
Ilí-Ce%ilímaussite-(Ce)%%Taseq area
Ima%imandrite%%Vuonnemiok river valley
Imh%imhofite%%Lengenbach quarry
Imi%imiterite%%Imiter mine
In%indium (native)%%
Ina%inaglyite%%Aldansky District|Aleksandrov Log platinum deposit, Solov'eva mountain
Ind%indialite%%
Ing%ingodite%%
Inr%irinarassite%%Mount Lakargi
Ins%inesite%%Oberscheld
Iny%ilirneyite%%Sentyabr’skoe deposit
Iow%iowaite%%Sioux County
Iqu%iquiqueite%%San Antonio de Zapiga
Ird%iridarsenite%%New Guinea
Irg%iriginite%%Chara and Tokko rivers confluence
Irh%irhtemite%%Irhtem mine
Irn%iranite%%Anarak District
Irq-La%iraqite-(La)%%Shakhi-Rash mountains
Irs%irarsite%%
Irt%irtyshite%%Kalba range
Is%iseite%%Unnamed manganese deposit, Shobu
Isat%incomsartorite%%Lengenbach quarry
Ish%ishiharaite%%Capillitas mine
Isi%intersilite%%Mount Alluaiv
Isk%ilinskite%%Second scoria cone|southern breakthrough
Iska%iskandarovite%%
Isl%isolueshite%%Kirovskii apatite mine
Ism%isomertieite%%Itabira
Iso%isokite%%Isoka
Iss%isselite%%Lagoscuro mine
Isv%isovite%%Isovsky area
Isw%insizwaite%%Insizwa
It%itoite%%Tsumeb mine
Iti%iltisite%%Cap Garonne mine
Itm%itelmenite%%Naboko cinder cone
Ito%itoigawaite%%Ohmi, Itoigawa City
Its%itsiite%%Gun claim
Iv-Cu%ivanyukite-Cu%%Koashva open pit
Iv-K%ivanyukite-K%%Koashva open pit
Iv-Na%ivanyukite-Na%%Koashva open pit
Ivs%ivsite%%Great Fissure eruption
Iw%iwateite%%Tanohata mine
Iwa-Y%iwashiroite-(Y)%%
Iy%iyoite%%Sadamisaki Peninsula
Iyo%inyoite%%Mount Blanco mine
Iys%imayoshiite%%Ise
Iz%izoklakeite%%Izok Lake
Ja%jamesonite%%Cornwall
Jac%jacutingaite%%Itabira
Jad%jadarite%%Jadar
Jaf%jaffeite%%Kombat
Jag%jagüéite%%
Jah-CaFeMg%jahnsite-(CaFeMg)%%Tom's phosphate quarry
Jah-CaMnMn%jahnsite-(CaMnMn)%%
Jah-CaMnZn%jahnsite-(CaMnZn)%%Cornelia shaft, Hagendorf South open cut
Jah-MnMnFe%jahnsite-(MnMnFe)%%
Jah-MnMnMg%jahnsite-(MnMnMg)%%Sapucaia do Norte
Jah-MnMnZn%jahnsite-(MnMnZn)%%
Jah-NaFeMg%jahnsite-(NaFeMg)%%Tip Top mine
Jah-NaMnMg%jahnsite-(NaMnMg)%%Bimbowrie Conservation Park|Sapucaia mine
Jah-NaMnMn%jahnsite-(NaMnMn)%%Wiperaminga Hill West Quarry
Jak%jakobssonite%%Eldfell|Hekla
Jal%jalpaite%%
Jan%janchevite%%Kombat
Jar%jarlite%%Ivigtuut cryolite deposit
Jas%jasmundite%%Bellerberg volcano
Jav%javorieite%%Detva
Jbd%jeanbandyite%%Siglo Veinte mine
Jbg%joëlbruggerite%%Black Pine mine
Jbm%johnbaumite%%Franklin
Jbo%jimboite%%
Jbr%jamborite%%
Jcb%jacobsite%%Jakobsberg mine
Jd%jadeite%%
Jdo%jarandolite%%Jarandol basin
Jds%jordisite%%Himmelsfürst mine
Jdt%jacquesdietrichite%%Tachgagalt mine
Je%jervisite%%Agrano
Jed%jedwabite%%Avrorinskii placer, Aktai river, Baranchinsky massif
Jef%jeffbenite%%São Luiz river alluvials|inclusion(s) in a mineral
Jen%jensenite%%Centennial Eureka mine
Jep%jeppeite%%
Jer%jeremejevite%%
Jež%ježekite%%Svornost mine
Jfy%jeffreyite%%Jeffrey mine
Jg%jagoite%%Långban
Jgb%jerrygibbsite%%Franklin
Jgd%juangodoyite%%Santa Rosa mine
Jgg%johanngeorgenstadtite%%
Jgk%jörgkellerite%%Ol Doinyo Lengai
Jgn%janggunite%%Janggun mine
Jgs%joegoldsteinite%%Social Circle meteorite
Jgw%jagowerite%%Mayo ore district
Jh%johannite%%Elias mine
Jhg%janhaugite%%Gjerdingselva outcrops
Jhl%johillerite%%Tsumeb mine
Jhn%johannsenite%%Campiglia Marittima|Franklin|Recoaro Terme
Ji%jingsuiite%%Luobusa ore district
Jia%jianshuiite%%Jianshui County
Jim%jimthompsonite%%Chester
Jin%johninnesite%%Kombat
Jit%junitoite%%
Jkg%jimkrieghite%%
Jkp%jeankempite%%
Jks%jaskólskiite%%
Jkv%jankovićite%%Allchar deposit
Jlf%jolliffeite%%
Jln%julienite%%
Jms%jamesite%%Tsumeb mine
Jmu%jianmuite%%Lababsa
Jni%juanitaite%%Gold Hill
Jnn%jennite%%Crestmore quarries
Jnt%junoite%%Juno mine
Jo%jonassonite%%Nagybörzsöny
Joa%joanneumite%%Pabellón de Pica
Joh%johnkoivulaite%%Pein Pyit area
Jol%joliotite%%Krunkelbach valley uranium deposit
Jon%jonesite%%California State gem mine
Joo%joosteite%%
Jot%joteite%%Jote mine
Jou%jouravskite%%Tachgagalt mine
Jrd%jordanite%%Lengenbach quarry
Jrw%jarosewichite%%Buckwheat pit
Jrx%jasrouxite%%Jas Roux
Jsl%juansilvaite%%Torrecillas mine
Jsm%jasonsmithite%%Foote Lithium Co. mine
Jsn-Ce%johnsenite-(Ce)%%Poudrette quarry
Jtm%johntomaite%%Spring Creek mine
Jts%jentschite%%Lengenbach quarry
Jua%juabite%%Centennial Eureka mine
Jul-Fe2+%julgoldite-(Fe2+)%%Långban
Jul-Fe3+%julgoldite-(Fe3+)%%Långban
Jul-Mg%julgoldite-(Mg)%%
Jun%jungite%%Cornelia shaft, Hagendorf South open cut
Juo%juonniite%%Kovdor Zheleznyi mine
Jur%jurbanite%%
Jw-Y%jingwenite-(Y)%%
Jwk%johnwalkite%%
Jzz%jaszczakite%%Nagybörzsöny
Jác%jáchymovite%%Jáchymov
Jôk%jôkokuite%%Johkoku mine
Jør%jørgensenite%%Ivigtuut cryolite deposit
Ka%karlite%%
Kaa%kaatialaite%%
Kab%karibibite%%
Kad%kadyrelite%%Kadyrel' Hg occurrence
Kah%kahlerite%%
Kai%kainite%%Leopoldshall
Kal%kalininite%%Pereval marble quarry
Kalu-Ce%kalyuzhnyite-(Ce)%%Darai-Pioz glacier
Kam%kamaishilite%%
Kan%kanonaite%%Kanona
Kap%kapellasite%%Laurium
Kar%karelianite%%Outokumpu
Kas%kassite%%Afrikanda
Kat%katsarosite%%Esperanza mine
Katnt-Fe%kenoargentotennantite-(Fe)%%Pollone mine
Kattr-Zn%kenoargentotetrahedrite-(Zn)%%
Kaw%kawazulite%%Kawazu mine
Kay%kayrobertsonite%%Cornelia shaft, Hagendorf South open cut|Foote Lithium Co. mine
Kaz%kazakhstanite%%Balasauskandyk vanadium deposit
Kb%kombatite%%Kombat
Kbd%kambaldaite%%Kambalda mines
Kbe%kolbeckite%%
Kbg%kribergite%%Kristineberg Zn-Cu mine
Kbi%korobitsynite%%Mount Alluaiv|Mount Karnasurt|Umbozero mine
Kbk%kobokoboite%%Kobokobo open pit
Kbl%kobellite%%
Kbo%kaliborite%%Aschersleben
Kbr%kleberite%%
Kbs%kalborsite%%Apatitovyi tsirk
Kbv%kabalovite%%
Kby%kobyashevite%%Vishnevye mountains
Kch%kaliochalcite%%Arsenatnaya fumarole|Yadovitaya fumarole
Kck%kiddcreekite%%Bisbee
Kcl%koechlinite%%Daniel mine
Kcn%kalicinite%%Sierre
Kcr%kircherite%%Sacrofano caldera
Kct%kokchetavite%%Kumdykol (Burabay District)
Kcv%karchevskyite%%Kovdor Zheleznyi mine
Kdk%khaidarkanite%%Khaidarkan
Kdn%kladnoite%%
Kdr%konderite%%Kondyor massif
Kdt%karlditmarite%%
Kdv%kudriavite%%Kudriavy volcano
Kdw%kidwellite%%Fodderstack Mountain
Kdy%kumdykolite%%Kumdykol (Burabay District)
Ke%keilite%%Abee meteorite
Kec%keckite%%Cornelia shaft, Hagendorf South open cut
Kei%keithconnite%%Stillwater igneous complex
Kel%keldyshite%%Mount Alluaiv
Kem%kermesite%%Bräunsdorf
Ken%kentrolite%%Chile
Kep%keplerite%%Marjalahti meteorite
Ker%kernite%%Kramer district
Kes%krieselite%%Tsumeb mine
Ket%kettnerite%%
Keu%keutschite%%Uchucchacua
Key%keyite%%Tsumeb mine
Kfn%kolfanite%%Voron'i tundry
Kg%kangite%%Allende meteorite
Kgg%kingsgateite%%Kingsgate
Kgh%kitagohaite%%Kitagoha river
Kgi%kingite%%
Kgl%kalgoorlieite%%Golden Mile mines
Kgn%kegginite%%Packrat mine, Gateway
Kgo%koragoite%%Shakhdara Range
Kgs%kingstonite%%
Kgt%kenngottite%%
Kgy%kennygayite%%
Kh-Ce%khristovite-(Ce)%%
Kha%khanneshite%%
Khe%khesinite%%Gurim anticline
Khf%kirchhoffite%%Darai-Pioz glacier
Khg-Y%kamphaugite-(Y)%%
Khi%khibinskite%%Hackman valley
Khk%kröhnkite%%Chuquicamata
Khm%kottenheimite%%Caspar quarry
Khn%khinite%%Tombstone Historic District
Kho%khorixasite%%Mesopotamia mine
Khr%khrenovite%%Arsenatnaya fumarole
Khs%kenhsuite%%McDermitt mercury mine
Kht%kurchatovite%%Solongo boron deposit
Khu%khurayyimite%%Daba-Siwaqa complex
Khv%khvorovite%%Darai-Pioz glacier
Ki%kilchoanite%%
Kie%kieftite%%
Kih-Ce%kihlmanite-(Ce)%%Khibiny Mountains
Kil%killalaite%%
Kim%kimrobinsonite%%
Kin%kinoite%%
Kip%kipushite%%Kipushi mine
Kir%kirschsteinite%%Mount Shaheru
Kis%kishonite%%Kishon Mid Reach zone 2
Kit%kittatinnyite%%Franklin
Kje%kruijenite%%Hinterweiler
Kjl%kangjinlaite%%
Kjn%kristjánite%%
Kk%kitkaite%%
Kkh%kuranakhite%%Kuranakh mine
Kki%kukisvumite%%Kirovskii apatite mine
Kkk-Ce%kukharenkoite-(Ce)%%Demix-Varennes quarry, Saint-Amable sill|Kirovskii apatite mine|Poudrette quarry|Vuoriyarvi alkaline-ultrabasic massif
Kkk-La%kukharenkoite-(La)%%Kirovskii apatite mine
Kkn%kokinosite%%St Jude mine, Gypsum valley
Kko%kurnakovite%%Inder Lake
Kkp%krauskopfite%%Esquire no. 1 claim
Kks%kaskasite%%Mount Kaskasnyunchorr
Kkt%koktaite%%
Kkv%komkovite%%Vuoriyarvi alkaline-ultrabasic massif
Kl%klockmannite%%Las Asperezas mine
Kla%kolarite%%
Klb%kahlenbergite%%
Kle%kleinite%%Terlingua district
Klf%kalifersite%%Kukisvumchorr
Klg%kuliginite%%Udachnaya diamond mine
Klh%kharaelakhite%%Komsomol'skii mine
Klj%klajite%%
Klk%kulkeite%%
Klm%kleemanite%%Iron Monarch mine
Kln%kaolinite%%
Klo-Y%kuliokite-(Y)%%Mount Ploskaya
Klp%kaliophilite%%Mount Somma
Klr%kollerite%%Köves Hill
Kls%kalsilite%%
Klt%kolitschite%%Kintore opencut, Broken Hill South mine
Klu%kalungaite%%Buraco do Ouro mine
Kly%kellyite%%Bald Knob deposit
Klö%klöchite%%Klöch
Km%kremersite%%Mount Vesuvius
Kma%khmaralite%%Khmara Bay
Kmc%kamchatkite%%Yadovitaya fumarole
Kmk%kamiokite%%Kamioka mine
Kmr%kamarizaite%%Kamariza Mines
Kms%kerimasite%%Kerimasi volcano
Kmt-Y%kamotoite-(Y)%%Kamoto mine
Kmu-Y%kimuraite-(Y)%%
Kmv%komarovite%%Natrolite stock, Karnasurt mount
Kmy%khomyakovite%%Poudrette quarry
Kmz%kimzeyite%%Magnet Cove igneous complex
Kmø-Ca%karupmøllerite-Ca%%Kangerluarsuk fjord, Ilímaussaq
Kna%kannanite%%
Knc%krettnichite%%
Kne%kamenevite%%Mount Suoluaiv
Kng%kastningite%%
Knh%krasnoshteinite%%
Kni%kinichilite%%Kawazu mine
Knl%kornelite%%
Knm%kanemite%%
Knn%krennerite%%Săcărâmb
Kno-Y%kainosite-(Y)%%
Knr%kanonerovite%%
Kns%kinoshitalite%%Noda-Tamagawa mine
Knt%kanoite%%
Knv%kononovite%%Arsenatnaya fumarole
Knw%kernowite%%Wheal Gorland
Kny%konyaite%%
Ko%kotoite%%
Koa%koashvite%%Koashva open pit
Kob-Y%kobeite-(Y)%%
Koc%kochkarite%%Kochkar' gold deposit
Kod%kodamaite%%Poudrette quarry
Koe%koenenite%%
Kog%kogarkoite%%Mount Alluaiv
Koj%kojonenite%%Stillwater igneous complex
Kok%koksharovite%%Bezymianny
Kol%kolicite%%Sterling Hill
Kon%koninckite%%
Kor%koritnigite%%Tsumeb mine
Kos%kosmochlor%%Toluca meteorite
Kou%koutekite%%
Kov%kovdorskite%%Kovdor Zheleznyi mine
Kox%kyanoxalite%%Mount Karnasurt
Koz-La%kozoite-(La)%%
Koz-Nd%kozoite-(Nd)%%
Kp%kempite%%
Kpa%kroupaite%%Svornost mine
Kpd%kapundaite%%Tom's phosphate quarry
Kpf%kampfite%%Esquire no. 1 claim
Kpk%karpenkoite%%Little Eva mine
Kpl%kampelite%%Kovdor Zheleznyi mine
Kpmic%kenoplumbomicrolite%%Mount Ploskaya
Kpo%katerinopoulosite%%Esperanza mine
Kpr%klaprothite%%Blue Lizard mine
Kpt%kupletskite%%Lepkhe-Nel'm mountain|Lovozero massif
Kpt-Cs%kupletskite-(Cs)%%Darai-Pioz glacier
Kpu%kapustinite%%Palitra pegmatite, Karnasurt mine
Kpv%karpovite%%First scoria cone
Kpč%krupičkaite%%Rovnost mine
Kra%krautite%%Săcărâmb
Krb%khamrabaevite%%
Krd%kullerudite%%
Kre%kreiterite%%Darai-Pioz glacier
Krg%karasugite%%Karasug REE-Sr-Ba-Fe-fluorite deposit
Krh%krasheninnikovite%%Second scoria cone
Kri%kurilite%%Kunashir Island
Krk%kirkiite%%
Krn%kornerupine%%
Kro%krotite%%Northwest Africa 1934
Kroz-Fe%kenorozhdestvenskayaite-(Fe)%%
Krp%krupkaite%%
Krr%knorringite%%
Krt%krut'aite%%
Kru%krutovite%%Ore Mountains
Krw%karwowskiite%%Daba-Siwaqa complex
Kry%kryzhanovskite%%Kalba range
Ks%kushiroite%%Allan Hills 85085
Ksa-Y%kapitsaite-(Y)%%Darai-Pioz glacier
Ksb-Ce%kesebolite-(Ce)%%Kesebol Mn-(Fe-Cu) deposit
Ksd%kochsándorite%%Mány
Kse%kristiansenite%%Heftetjern pegmatite
Ksf%knasibfite%%La Fossa crater
Ksh%kashinite%%Aleksandrov Log platinum deposit, Solov'eva mountain
Ksi%krausite%%Calico
Ksk%kasatkinite%%
Ksl%kraisslite%%Sterling Hill
Ksn%kosnarite%%
Kso%kasolite%%Shinkolobwe mine
Ksr%kieserite%%Staßfurt
Kss%korshunovskite%%Korshunovskoye iron-boron skarn deposit
Kst%kalistrontite%%
Ksv%kostylevite%%Vuonnemiok river valley
Kt%kintoreite%%Block 14 opencut, Broken Hill mine|Kintore opencut, Broken Hill South mine
Ktb%kentbrooksite%%
Ktbm%kenotobermorite%%Nchwaning mines
Ktc%kratochvílite%%
Kte%ktenasite%%Kamariza Mines
Ktg%kamitugaite%%Kobokobo open pit
Kth%kalithallite%%First scoria cone
Kti%kutinaite%%
Ktk%khatyrkite%%Khatyrka meteorite
Ktn%kaitianite%%Allende meteorite
Kto%katoite%%
Ktp%katophorite%%Hpakant-Tawmaw jade tract
Ktr%kainotropite%%Yadovitaya fumarole
Kts%katiarsite%%Arsenatnaya fumarole
Ktt%katoptrite%%Brattfors mine, Nordmark Odal field
Ktu%kotulskite%%
Ktv%kostovite%%
Kty%kumtyubeite%%Mount Lakargi
Ktz%kanatzidisite%%
Ku%kuramite%%
Kua-Ce%kuannersuite-(Ce)%%Kvanefjeld
Kud%kudryavtsevaite%%
Kuf%kufahrite%%Spring Creek mine
Kuk%kuksite%%Kuranakh mine
Kul%kulanite%%Rapid creek
Kum%kummerite%%Cornelia shaft, Hagendorf South open cut
Kun%kunatite%%Huber stock|Lake Boga granite quarry
Kup%kupčíkite%%Western ore field, scheelite deposit
Kur%kuratite%%D'Orbigny meteorite
Kus%kusachiite%%Fuka mine
Kut%kutnohorite%%Kutná Hora District
Kuv%kuvaevite%%
Kuz%kuzelite%%
Kv%krasnovite%%Kovdor Zheleznyi mine
Kva%kvanefjeldite%%Kvanefjeld
Kvi%krinovite%%Canyon Diablo meteorite
Kvi-Y%keiviite-(Y)%%Mount Ploskaya
Kvi-Yb%keiviite-(Yb)%%Mount Ploskaya
Kvt%kravtsovite%%Komsomol'skii mine
Kvv%krivovichevite%%Lepkhe-Nel'm mountain
Kwb%karenwebberite%%
Kwz%kolwezite%%Musonoi mine
Ky%kyanite%%Austria
Kya%kenyaite%%Lake Magadi
Kyh%kryachkoite%%Khatyrka meteorite
Kyk%koryakite%%Yadovitaya fumarole
Kyl%katayamalite%%Iwagi islet
Kym%kolymite%%
Kyn%kelyanite%%
Kyp%kayupovaite%%
Kyr%kyrgyzstanite%%
Kys%keystoneite%%Keystone mine
Kyu%kiryuite%%Kiryū
Kyv%klyuchevskite%%Great Fissure eruption
Kyw%kyawthuite%%Mogok Township
Kyz%kyzylkumite%%
Kz-Mn%kuzmenkoite-Mn%%Mount Selsurt
Kz-Zn%kuzmenkoite-Zn%%Lepkhe-Nel'm mountain|Mount Karnasurt|Mount Kedykverpakhk
Kzh%korzhinskite%%Novofrolovskoye boron-copper deposit
Kzk%kazakovite%%Mount Karnasurt
Kzm%kuzminite%%Kadyrel' Hg occurrence
Kzn%kuznetsovite%%Khaidarkan
Kzt%kaznakhtite%%Kaznakhtinskiy ultrabasic massif
Kzw%kozłowskiite%%
Kzy%kozyrevskite%%Arsenatnaya fumarole
Kës%kësterite%%Kester tin deposit
Köt%köttigite%%Daniel mine
Kňk%kaňkite%%Kaňk
Laa%laachite%%In den Dellen quarries
Lab-Fe%labuntsovite-Fe%%Kirovskii apatite mine
Lab-Mg%labuntsovite-Mg%%Kovdor Zheleznyi mine
Lab-Mn%labuntsovite-Mn%%Khibiny Mountains|Lovozero massif
Lac%lacroixite%%Greifensteine
Lae%laueite%%Cornelia shaft, Hagendorf South open cut
Laf%laforêtite%%
Lag%lagalyite%%Aufgeklärtes Glück mine|Christbescherung mine
Lah%lahnsteinite%%Friedrichssegen mine
Lai%laihunite%%
Lak%lakargiite%%Mount Lakargi
Lal%lalondeite%%Poudrette quarry
Lam%leadamalgam%%
Lan%lanarkite%%Susanna mine
Lap%lapieite%%Watson Lake
Lar%larosite%%
Las%lasalite%%Vanadium Queen mine (La Sal)
Lat%latiumite%%Alban Hills
Lau%launayite%%Taylor pit
Law%lawrencite%%
Laz%lazarenkoite%%Khovu-Aksy
Lb%lingbaoite%%S60 gold-bearing quartz vein
Lbb%liebenbergite%%Bon Accord nickel deposit
Lbd%lucabindiite%%La Fossa crater
Lbg%lakebogaite%%Lake Boga granite quarry
Lbi%liebigite%%
Lbm%liebermannite%%Zagami
Lbn%langbeinite%%Wilhelmshall, Halberstadt
Lbr%liberite%%Xianghualing Sn-polymetallic ore field
Lbs%långbanshyttanite%%Långban
Lbu%lüneburgite%%
Lbv%lobanovite%%Kukisvumchorr|Mount Yukspor
Lby%labyrinthite%%Khibiny Mountains|Koashva open pit
Lbž%luboržákite%%Vorontsovskoe gold deposit
Lca-Ce%lucasite-(Ce)%%
Lcb%lipscombite%%Sapucaia mine
Lcc%lucchesiite%%Ratnapura
Lck%lonecreekite%%
Lcn%lecontite%%
Lct%leucite%%Mount Somma
Lda%landauite%%Burpala alkaline Massif
Ldb%lindbergite%%Sapucaia do Norte
Ldd%luddenite%%
Ldh%liudongshengite%%79 mine, Chilito
Ldj%ludjibaite%%
Ldl%ludlockite%%Tsumeb mine
Ldn%londonite%%Antandrokomby pegmatite
Ldo%loudounite%%New Goose Creek quarry
Ldr%larderellite%%Larderello
Ldw%ludwigite%%
Ldy%lindsleyite%%Bultfontein mine
Lec-Y%lecoqite-(Y)%%Poudrette quarry
Lee%leesite%%Jomac mine
Lef%lefontite%%Linópolis
Leg%legrandite%%
Leh%lehmannite%%Arsenatnaya fumarole
Lei%leisingite%%Centennial Eureka mine
Lem-Ba%lemmleinite-Ba%%Kukisvumchorr
Lem-K%lemmleinite-K%%Koashva open pit
Len%lengenbachite%%Lengenbach quarry
Leo%leonite%%Westeregeln
Lep%lepageite%%Szklary pegmatite
Ler%lermontovite%%
Let%letovicite%%
Lev%levantite%%Har Parsa
Ley%leydetite%%Lodève
Lfd%lansfordite%%
Lfl%laflammeite%%
Lfs%lafossaite%%La Fossa crater
Lft%laffittite%%Jas Roux
Lfu%louisfuchsite%%
Lg%leguernite%%La Fossa crater
Lgb%långbanite%%Långban
Lgf%luogufengite%%Menan volcanic complex
Lgg%leogangite%%Schwarzleograben
Lgh%leightonite%%Chuquicamata
Lgi%langisite%%Langis Mine
Lgn%lingunite%%Sixiangkou meteorite
Lgr%lindgrenite%%Chuquicamata
Lgt%langite%%
Lgw%liguowuite%%
Lh%lehnerite%%Cornelia shaft, Hagendorf South open cut
Lhf%langhofite%%Långban
Lhi%leadhillite%%Susanna mine
Lho%lithosite%%Vuonnemiok river valley
Lhp%lithiophilite%%Fillow quarry
Lia%liandratite%%Betsiboka
Lian%lianbinite%%
Lib%libethenite%%Ľubietová
Lie%liebauite%%Andernach
Lik%likasite%%Likasi
Lil%lillianite%%Lillian Mines
Lin%linnaeite%%Bastnäs
Lio%liottite%%Case Collina
Lip%lithiophosphate%%Voron'i tundry
Lir%liraite%%Pocho Department
Lis%lisetite%%Liset eclogite pod
Lit%litharge%%Cucamonga Peak
Liu%liuite%%Shergotty meteorite
Liv%liveingite%%Lengenbach quarry
Lji%lunijianlaite%%
Lju%liangjunite%%
Lkk%lukkulaisvaaraite%%Lukkulaisvaara ultrabasic massif
Lkn%lislkirchnerite%%Capillitas mine
Lkr%lukrahnite%%Tsumeb mine
Lkv-Ce%letnikovite-(Ce)%%Darai-Pioz glacier
Lla%llantenesite%%
Lm%lime (mineral)%%
Lmb%lombardoite%%Valletta mine
Lmh%lanmuchangite%%
Lmi%loomisite%%
Lmk%lemanskiite%%El Guanaco ore deposit
Lmn%lasmanisite%%
Lmo%lemoynite%%Poudrette quarry
Lmr%lammerite%%Laurani Mine
Lms%limousinite%%Vilatte-Haute quarry
Lmsr%lithiomarsturite%%Foote Lithium Co. mine
Lmt%laumontite%%Huelgoat
Ln%lenaite%%
Lna%linarite%%Linares
Lnb%lenoblite%%Mounana mine
Lnd%leonardsenite%%Eldfell|Hekla
Lng%leningradite%%Second scoria cone
Lnk%línekite%%Svornost mine
Lnl%lennilenapeite%%Franklin
Lnn%lannonite%%Lone Pine mine
Lnr%lasnierite%%Ibity
Lok-Y%lokkaite-(Y)%%
Lon%lonsdaleite%%Canyon Diablo meteorite
Lop-Ce%loparite%%Mount Maly Mannepakhk
Lor%lorándite%%Allchar deposit
Los%loseyite%%Franklin
Lou%loughlinite%%Westvaco mine
Lov%lovdarite%%Karnasurt mine, Karnasurt mount
Lp%lipuite%%Nchwaning mines
Lpc%lepidocrocite%%Zlaté Hory
Lph%leucophanite%%Låven island
Lpk%lopatkaite%%Madoc area
Lpl-Ce%laplandite-(Ce)%%Karnasurt mine, Karnasurt mount
Lpm%laphamite%%
Lpn-Zn%lepkhenelmite-Zn%%Lepkhe-Nel'm mountain
Lpo%leucophoenicite%%Buckwheat pit|Franklin
Lpp%leucophosphite%%
Lpr%lithiophorite%%Schneeberg
Lps-Gd%lepersonnite-(Gd)%%Shinkolobwe mine
Lps-Nd%lepersonnite-(Nd)%%
Lpt-Ce%laptevite-(Ce)%%Darai-Pioz glacier
Lpy%lapeyreite%%Roua mines
Lpz%lópezite%%Huara
Lqv%lindqvistite%%Jakobsberg mine
Lra%lauraniite%%Laurani Mine
Lrd%lazaridisite%%Esperanza mine
Lre%laurentianite%%Poudrette quarry
Lri%laurionite%%Laurium
Lrl%laurelite%%Grand Reef mine
Lrn%larnite%%Scawt Hill
Lro%liroconite%%Wheal Gorland
Lrs-Y%loranskite-(Y)%%
Lrt%laurite%%
Lrw%lourenswalsite%%Magnet Cove igneous complex
Lrz%lorenzenite%%Narsaarsuk pegmatite
Ls%larisaite%%Repete mine
Lsa%lisanite%%Halamish wadi
Lsd%liversidgeite%%Block 14 opencut, Broken Hill mine
Lse%lausenite%%United Verde mine
Lsg%lisiguangite%%
Lsh%lishizhenite%%Xitieshan mine
Lsi%lussierite%%Blue Lizard mine
Lsk%liskeardite%%
Lsm%lindströmite%%
Lsn%larsenite%%Franklin
Lsp%leucosphenite%%Narsaarsuk pegmatite
Lsr%leucostaurite%%Caracoles
Lss%lisitsynite%%Koashva open pit
Lst%livingstonite%%
Lsw%luanshiweiite%%
Lsz%leószilárdite%%Markey mine
Lt%leiteite%%Tsumeb mine
Ltan%lithiotantite%%Kalba range
Ltd%litidionite%%Mount Vesuvius
Lth%lautenthalite%%
Ltk%laitakarite%%
Ltm%laurentthomasite%%
Ltn-Ce%lanthanite-(Ce)%%
Ltn-La%lanthanite-(La)%%Bastnäs
Ltn-Nd%lanthanite-(Nd)%%Curitiba
Lto%litochlebite%%Zálesí (Javorník)
Ltr%lautarite%%
Lts%lintisite%%
Ltt%lautite%%
Ltv%litvinskite%%Umbozero mine
Lua%luanheite%%Luanhe valley
Lub%luberoite%%Lubero Territory
Lud%ludlamite%%
Lue%lueshite%%
Luk-Ce%lukechangite-(Ce)%%Poudrette quarry
Lul%lulzacite%%Saint-Aubin-des-Châteaux
Lum%lumsdenite%%Packrat mine, Gateway
Lun%lun'okite%%Voron'i tundry
Luo%luobusaite%%Luobusa ore district
Lus-Y%lusernaite-(Y)%%Luserna stone quarries
Lut%luetheite%%
Lux%luxembourgite%%Bivels
Luz%luzonite%%
Lvc%lévyclaudite%%
Lvd%lavendulan%%Jáchymov
Lve%leverettite%%Torrecillas mine
Lvg%loveringite%%
Lvi-Y%levinsonite-(Y)%%Alum Cave Bluff
Lvo%lavoisierite%%
Lvr%lavrentievite%%Kadyrel' Hg occurrence
Lvs%lavinskyite%%Wessels mine
Lvv%laverovite%%Poudrette quarry
Lvz%lovozerite%%Lovozero massif
Lwb%lawsonbauerite%%Sterling Hill
Lwdg%lithiowodginite%%Kalba range
Lws%lawsonite%%
Ly%libbyite%%
Lyo%lyonsite%%Izalco
Lz%lizardite%%
Lza%lazaraskeite%%Pusch Ridge
Lze%lazerckerite%%Kutná Hora
Lzh%linzhiite%%Luobusa ore district
Lzl%lazulite%%Fressnitzgraben
Låv%låvenite%%Låven island
Lév-Ca%lévyne-Ca%%Sandoy
Lév-Na%lévyne-Na%%
Lö%löllingite%%
Löw%löweite%%Ischler Salzberg
Ma%meta-aluminite%%Temple Mountain
Mab%moabite%%Daba-Siwaqa complex
Mac%markascherite%%
Mad%martinandresite%%Wasenalp
Mae%moraesite%%Sapucaia mine
Mag%magnetite%%
Mah%mahnertite%%Cap Garonne mine
Mai%maikainite%%Maikain gold deposit|Tsumeb mine
Maj%majorite%%
Majd-KNa%manganoarrojadite-(KNa)%%
Mak%meta-ankoleite%%Ankole pegmatite field
Mako%makotoite%%
Mal%mallardite%%
Mam%mambertiite%%Punta de Su Seinargiu
Man%mannardite%%
Mao-Ce%maoniupingite-(Ce)%%Maoniuping mine
Map%mcalpineite%%
Mar%marialite%%Phlegraean Fields
Marf%magnesio-arfvedsonite%%Hpakant-Tawmaw jade tract
Mari%mariakrite%%Hatrurim Basin
Mas%mcauslanite%%
Matr%magnesioalterite%%Cliff Dwellers Lodge
Mau%magnioursilite%%
Maub%magnesioaubertite%%Porto Levante
Maut%meta-autunite%%
Mav%mavlyanovite%%
Maw%mawsonite%%
Max%maxwellite%%
May%miargyrite%%Bräunsdorf
Maz-Mg%mazzite-Mg%%
Maz-Na%mazzite-Na%%Pacific Coast Borax Company
Mb%mundrabillaite%%Petrogale Cave
Mbab%manganbabingtonite%%
Mbb%mbobomkulite%%Mbobo Mkulu cave
Mbdl%manganobadalovite%%Arsenatnaya fumarole
Mbk%middlebackite%%Iron Monarch mine
Mblö%manganoblödite%%Blue Lizard mine
Mbn%mcbirneyite%%Izalco
Mbo%metaborite%%Chelkar salt dome
Mbr%matsubaraite%%
Mbrm%magnesiobermanite%%Bimbowrie Conservation Park
Mbs%montebrasite%%Mines of Montebras
Mbt-2N3S%magnesiobeltrandoite-2N3S%%
Mby%mawbyite%%Kintore opencut, Broken Hill South mine
Mbzl%manganberzeliite%%Långban
Mcan%magnesiocanutite%%Torrecillas mine
Mcar%magnesiocarpholite%%
Mcb%marcobaldiite%%Pollone mine
Mcc%microcline%%
Mcd%macdonaldite%%Big Creek|Esquire No. 7 claim|Esquire no. 1 claim
Mce%macedonite%%
Mcel%manganiceladonite%%Cerchiara mine
Mcf%macfallite%%Keweenaw County
Mcg%mcgillite%%
Mchr%magnesiochromite%%
Mci%machiite%%Murchison meteorite
Mcin%metacinnabar%%Redington mine
Mck%mckinstryite%%
Mcl%mcallisterite%%Furnace Creek district
Mcld%magnesiochloritoid%%Allalin Glacier
Mcn%mcconnellite%%
Mco%marécottite%%La Creusaz uranium prospect
Mcou%magnesiocoulsonite%%Pereval marble quarry
Mcp%markcooperite%%Aga mine
Mcpi%magnesiocopiapite%%
Mcq%macquartite%%Mammoth-Saint Anthony mine
Mcr%mccrillisite%%
Mcs%michalskiite%%Lichtenberg open pit
Mct%machatschkiite%%Wittichen
Mcu%metacalciouranoite%%
Mcx%mikecoxite%%McDermitt mercury mine
Mcy%macaulayite%%
Mda%mandarinoite%%
Mdb%medenbachite%%
Mdc%madocite%%Taylor pit
Mdd%middendorfite%%Kirovskii apatite mine
Mde%madeiraite%%Porto da Cruz
Mdg%mendigite%%In den Dellen quarries
Mdh%murdochite%%Mammoth-Saint Anthony mine
Mdi%mendipite%%
Mdl-Ce%mendeleevite-(Ce)%%Darai-Pioz glacier
Mdl-Nd%mendeleevite-(Nd)%%Darai-Pioz glacier
Mdlr%metadelrioite%%Jo Dandy Hill
Mdm%molybdomenite%%Cerro de Cacheuta
Mdn%meridianiite%%Venables Valley
Mdo%maldonite%%
Mdp%molybdophyllite%%Långban
Mdtw%magnesio-dutrowite%%Rędziny
Mdz-KCa%mendozavilite-KCa%%Chuquicamata
Mdz-NaCu%mendozavilite-NaCu%%
Mdz-NaFe%mendozavilite-NaFe%%
Me%meionite%%Mount Somma
Mea%melanarsite%%Arsenatnaya fumarole
Mec%mercallite%%Mount Vesuvius
Meck%mangani-eckermannite%%Tanohata mine
Med%medaite%%Molinello mine
Mee%meerschautite%%Pollone mine
Meg%meneghinite%%Bottino mine
Mei%meieranite%%Wessels mine
Mej%mejillonesite%%Cerro Mejillones
Mel%mellite%%
Men%menchettiite%%Uchucchacua
Mes%mesolite%%
Met%mertieite%%
Meu-K%meurigite-K%%
Meu-Na%meurigite-Na%%Silver Coin mine
Meud%manganoeudialyte%%Poços de Caldas
Mev-Y%mineevite-(Y)%%Mount Alluaiv
Mey%meyrowitzite%%Markey mine
Mf%meifuite%%
Mfck%magnesiofluckite%%Torrecillas mine
Mfd%mansfieldite%%Lane County
Mffhbl%magnesio-ferri-fluoro-hornblende%%Portoscuso
Mfhbl%magnesio-ferri-hornblende%%
Mflu%manganflurlite%%Cornelia shaft, Hagendorf South open cut
Mfor%molybdofornacite%%Tsumeb mine
Mfr%magnesioferrite%%Mount Vesuvius
Mfv%mitrofanovite%%
Mga%margarosanite%%Parker shaft
Mgb%magbasite%%Bayan Obo mine
Mgc%megacyclite%%Mount Rasvumchorr
Mgd%magadiite%%Lake Magadi
Mgdo%mangangordonite%%Dunton Gem quarry|Foote Lithium Co. mine
Mge%mengeite%%Spring Creek mine
Mgg%magganasite%%Arsenatnaya fumarole
Mgi%mgriite%%
Mgl%mongolite%%
Mgm%montgomeryite%%Clay canyon, Fairfield
Mgn%magnanelliite%%Monte Arsiccio mine
Mgng-2N1S%magnesionigerite-2N1S%%
Mgng-6N6S%magnesionigerite-6N6S%%
Mgo%mogovidite%%Kovdor Zheleznyi mine
Mgs%magnesite%%Bettolino|Magnesia Prefecture
Mgt%margaritasite%%
Mgu%mcguinnessite%%
Mgv%mcgovernite%%Sterling Hill
Mgw%megawite%%Mount Lakargi
Mgx%mengxianminite%%Xianghualing Sn-polymetallic ore field
Mgz%mangazeite%%
Mh%moorhouseite%%
Mhb%maghrebite%%Bou Azer district
Mhbl%magnesio-hornblende%%
Mhcal%monohydrocalcite%%
Mhd%mattheddleite%%Leadhills
Mhe%mathesiusite%%Svornost mine
Mhew%metahewettite%%Thompsons district
Mhf%meyerhofferite%%Mount Blanco mine
Mhi%mushistonite%%Mushiston tin deposit
Mhk%maohokite%%
Mhl%minehillite%%Franklin
Mhns%manganohörnesite%%Långban
Mho%mooihoekite%%Lydenburg
Mhoh%metahohmannite%%Chuquicamata
Mhr%mohrite%%Travale
Mhrc%metaheinrichite%%Lakeview|Wittichen
Mhs-Cu%michitoshiite-(Cu)%%Misato
Mht%marchettiite%%Scherbadung
Mhtt%magnesiohatertite%%Arsenatnaya fumarole
Mhu%merrihueite%%Mezö-Madaras meteorite
Mhul%magnesiohulsite%%
Mhw%mikehowardite%%
Mhwe%metahaiweeite%%
Mhz%marthozite%%Musonoi mine
Mhög-2N2S%magnesiohögbomite-2N2S%%
Mhög-2N3S%magnesiohögbomite-2N3S%%
Mhög-2N4S%magnesiohögbomite-2N4S%%East Antarctica
Mhög-6N12S%magnesiohögbomite-6N12S%%Tay Valley
Mhög-6N6S%magnesiohögbomite-6N6S%%
Mi-Y%mieite-(Y)%%Komono
Mia%miassite%%Miass Placer Zone
Mie%miessiite%%
Mier%miersite%%Broken Hill
Mig%miguelromeroite%%Gozaisho mine|Ojuela mine|Sterling Hill
Mih%miharaite%%
Mii%mariinskite%%Malysheva mine
Mik%mikasaite%%
Mil%milarite%%Giuv valley
Milk%milkovoite%%
Mill%millisite%%Clay canyon, Fairfield
Mim%mimetite%%Johanngeorgenstadt
Min%mianningite%%
Mio%milotaite%%Předbořice
Mir%meierite%%Gun claim
Mis%miserite%%
Mit%mitridatite%%
Mits%mitscherlichite%%Mount Vesuvius
Mix%mixite%%Jáchymov
Miy%miyahisaite%%
Mjd%majindeite%%Allende meteorite
Mjg%minjiangite%%Xikeng mine
Mji%manjiroite%%
Mjk%majakite%%Mayak mine
Mjo%mélonjosephite%%Angarf-South pegmatite
Mjz%majzlanite%%Yadovitaya fumarole
Mk%markeyite%%Markey mine
Mka%minakawaite%%Misato
Mkah%metakahlerite%%Sophia mine
Mkat%munakataite%%Munakata
Mke%mountkeithite%%Mount Keith mine
Mkh%markhininite%%First scoria cone
Mki%metakirchheimerite%%Sophia mine
Mkki%manganokukisvumite%%Poudrette quarry
Mkks%manganokaskasite%%Mount Kaskasnyunchorr
Mkl%marklite%%
Mkm%murakamiite%%Iwagi islet
Mkmy%manganokhomyakovite%%Poudrette quarry
Mkn%mäkinenite%%
Mko%melkovite%%
Mkor%magnesiokoritnigite%%Torrecillas mine
Mkr%makarochkinite%%Ilmen Nature Reserve
Mks%megakalsilite%%Koashva open pit
Mkt%makatite%%Lake Magadi
Mkv-Nd%mckelveyite-(Nd)%%Kukisvumchorr
Mkw%mackinawite%%
Mky%mackayite%%
Mköt%metaköttigite%%Ojuela mine
Ml%merelaniite%%Mererani
Mlb%moschellandsbergite%%Moschel mountain
Mlc%malachite%%
Mlcc%magnesio-lucchesiite%%
Mld%malladrite%%Mount Vesuvius
Mldt%morelandite%%Jakobsberg mine
Mldv%metalodèvite%%Lodève
Mle%maleevite%%Darai-Pioz glacier
Mley%magnesioleydetite%%Markey mine
Mlg%mallestigite%%Mallestiger Mittagskogel
Mlgb%manganolangbeinite%%Mount Vesuvius
Mlh%melcherite%%Jacupiranga mine
Mli%melliniite%%Northwest Africa 1054
Mlk%malinkoite%%Mount Karnasurt
Mlmy%manganlotharmeyerite%%Starlera mine
Mln%melanterite%%
Mlo%maslovite%%Oktyabr'skoe Cu-Ni deposit
Mlr%millerite%%Jáchymov
Mlrd%milanriederite%%Kombat
Mls%millsite%%Oppdal
Mlsb%melanostibite%%Rällingsberg ore area
Mlt%melonite%%
Mlth%melanothallite%%Mount Vesuvius
Mlu%moluranite%%Chara and Tokko rivers confluence
Mlv%manganilvaite%%
Mly%malayaite%%
Mm%mammothite%%Mammoth-Saint Anthony mine
Mma%muthmannite%%Săcărâmb
Mmi%maurogemmiite%%
Mmni%metamunirite%%Burro mine
Mmo%malhmoodite%%
Mmt%morimotoite%%Fuka mine
Mna%manganarsite%%Långban
Mna-Ce%manganiandrosite-(Ce)%%
Mna-La%manganiandrosite-(La)%%
Mnak-La%manganiakasakaite-(La)%%Bellino
Mnat%metasideronatrite%%Sierra Gorda district
Mnaut%metanatroautunite%%
Mnc%maneckiite%%Michałkowa
Mnchr%manganochromite%%
Mnd%manandonite%%Antandrokomby pegmatite
Mne%meitnerite%%Green Lizard mine
Mng%manganosite%%
Mnh%minohlite%%
Mnhu%manganhumite%%Brattfors mine, Nordmark Odal field
Mni%munirite%%
Mnj%manganonaujakasite%%Lovozero massif
Mnk%manaksite%%Mount Alluaiv
Mnl%molinelloite%%Molinello mine
Mnli%magnéliite%%Mount Carmel|inclusion(s) in a mineral
Mnm%minium%%
Mnn%manganite%%
Mnnpt%manganoneptunite%%Mount Maly Mannepakhk
Mno%magnolite%%Keystone mine
Mnor-Ce%manganonordite-(Ce)%%Mount Karnasurt|Mount Kedykverpakhk
Mnp%monipite%%Allende meteorite
Mnpt%magnesioneptunite%%Mount Lakargi
Mnr%mcnearite%%Mount Neuenberg silver mines
Mnrs%manuelarossiite%%
Mns%minnesotaite%%Cuyuna Range|Mesabi Range
Mnsb%manganostibite%%Brattfors mine, Nordmark Odal field
Mnt%montmorillonite%%
Mnti%Monetite%%
Mnv%menshikovite%%Chineyskoye Fe-Ti-V deposit|Lukkulaisvaara ultrabasic massif
Mnves%manganvesuvianite%%Nchwaning mines|Wessels mine
Mnvč%metanováčekite%%Wittichen
Mnw%mikenewite%%
Mny%mirnyite%%Internatsionalnaya kimberlite pipe|inclusion(s) in a pyrope
Mnz-Ce%monazite-(Ce)%%Ilmen Nature Reserve
Mnz-Gd%monazite-(Gd)%%
Mnz-La%monazite-(La)%%
Mnz-Nd%monazite-(Nd)%%Monte Giove
Mnz-Sm%monazite-(Sm)%%
Moa%moreauite%%Kobokobo open pit
Moc%moctezumite%%Moctezuma mine
Mod%modderite%%
Mog%mogánite%%
Moh%mohite%%
Moi%moissanite%%Canyon Diablo meteorite
Moj%mojaveite%%Aga mine|Bird Nest drift|Blue Bell mine (Baker)
Mok%moraskoite%%Morasko
Mol%molybdenite%%
Mom%momoiite%%Saijo
Mon%moncheite%%Monche-tundra
Moo%moolooite%%
Mop%mopungite%%
Mor%mordenite%%
Mori%morinite%%
Mos%mosesite%%Terlingua district
Mott%mottramite%%
Mou%mourite%%
Moy-Y%moydite-(Y)%%Evans-Lou mine
Moz%mozartite%%Cerchiara mine
Moë%moëloite%%Seravezza quarries
Mpas%magnesiopascoite%%Blue Cap mine
Mph%meliphanite%%Langesundsfjord|Stavern
Mpm%mapimite%%Ojuela mine
Mpo%mpororoite%%
Mpq%mapiquiroite%%Buca della Vena mine|Monte Arsiccio mine
Mprg%mangani-pargasite%%Långban
Mps%macphersonite%%Susanna mine
Mpv%montpelvouxite%%
Mpy%murphyite%%Contention-Grand Central mine group
Mqd%manganoquadratite%%Uchucchacua
Mqin%magnesioqingheiite%%Stockhorn
Mr%marinaite%%2012-2013 Fissure Tolbachik eruption site
Mra%minasragrite%%
Mrat-Y%murataite-(Y)%%St Peters Dome
Mrau%metarauchite%%Jáchymov
Mrb%mirabilite%%
Mrc%marcasite%%
Mrd%minrecordite%%Tsumeb mine
Mre%mooreite%%Sterling Hill
Mreg-Y%monteregianite-(Y)%%Poudrette quarry
Mren%morenosite%%
Mrg%margarite%%Grosser Greiner
Mrh%mereheadite%%Torr Works
Mris%morrisonite%%Packrat mine, Gateway
Mrk%merenskyite%%
Mrkb%manganrockbridgeite%%
Mrl%merlinoite%%
Mrm%marumoite%%Lengenbach quarry
Mrn%marinellite%%Sacrofano caldera
Mro%marokite%%Tachgagalt mine
Mros%mroseite%%Moctezuma mine
Mrow-Y%magnesiorowlandite-(Y)%%
Mrp%maricopaite%%Osborn district
Mrr%marrite%%Lengenbach quarry
Mrs%metarossite%%San Miguel County
Mrt%martinite%%Poudrette quarry
Mru%marrucciite%%Buca della Vena mine
Mry%maruyamaite%%
Mrz%mrázekite%%Ľubietová
Mrć%marićite%%
Ms%muscovite%%Gilead|Llandybie|Mariposa County
Msa%mesaite%%Packrat mine, Gateway
Msb%mössbauerite%%
Msbn%metastibnite%%
Msc%mascagnite%%Travale
Msch%moschelite%%Moschel mountain
Msdr%metaschoderite%%Eureka County
Mse%misenite%%Phlegraean Fields
Msfz%manganoschafarzikite%%Långban
Msgl%manganosegelerite%%Voron'i tundry
Msh%marshite%%Broken Hill
Mshp%metaschoepite%%Shinkolobwe mine
Msi%massicot%%
Msk%misakiite%%Sadamisaki Peninsula
Mskv-Y%moskvinite-(Y)%%Darai-Pioz glacier
Msl%messelite%%
Mslé%metasaléeite%%Shinkolobwe mine
Msm%microsommite%%Mount Somma
Msn%micheelsenite%%Igaliku|Poudrette quarry
Mso%melansonite%%Poudrette quarry
Msr%marsturite%%Franklin
Mss%meisserite%%Blue Lizard mine
Mst%magnesiostaurolite%%Gilba valley
Msts%masaitisite%%Yadovitaya fumarole
Mstu%metastudtite%%Shinkolobwe mine
Msu%masutomilite%%
Msv%millosevichite%%Porto Levante
Msy%Masuyite%%Shinkolobwe mine
Mtb%manitobaite%%pegmatite No. 22, Gottcha claim
Mtc%monticellite%%Mount Somma
Mtd%matildite%%Matilda mine
Mtdr%monchetundraite%%Monchetundra ore field
Mte%monteneroite%%Monte Nero mine
Mtf-2N'2S%magnesiotaaffeite-2N'2S%%Niriella
Mtf-6N'3S%magnesiotaaffeite-6N'3S%%
Mtg%mattagamite%%
Mth%marathonite%%Marathon deposit
Mthn%metathénardite%%Glavnaya Tenoritovaya fumarole
Mti%matioliite%%Mendes Pimentel
Mtin%mantienneite%%
Mtk%melanotekite%%Långban
Mtl%matlockite%%
Mtm%metatamboite%%Tambo mine
Mtn%mountainite%%Bultfontein mine
Mto%montroseite%%
Mtor%metatorbernite%%Schneeberg ore district
Mtp%monteponite%%
Mtr%mereiterite%%Hilarion mine
Mts%mathiasite%%Bultfontein mine
Mtso%montesommaite%%Mount Somma
Mtt%matteuccite%%Mount Vesuvius
Mttr%montetrisaite%%Monte Trisa mines
Mtv%monteneveite%%Schneeberg
Mtw%matthiasweilite%%
Mty%maletoyvayamite%%Maletoyvayam ore field
Mtyc%manganotychite%%Mount Alluaiv
Mtyd%montroydite%%Terlingua district
Mtyl%montroyalite%%Francon quarry
Mtyu%metatyuyamunite%%
Mu%murunskite%%Murunskii massif
Muc%maucherite%%
Mud%mundite%%Kobokobo open pit
Muh%murashkoite%%Halamish wadi
Mui%muirite%%Esquire No. 7 claim
Muk%mukhinite%%Tashelginskoe formation
Mul%mullite%%Isle of Mull
Mum%mummeite%%
Mun%mounanaite%%Mounana mine
Muo%muonionalustaite%%Muonionalusta
Mup%metauranopilite%%Jáchymov
Mur%murchisite%%Murchison meteorite
Murc%metauranocircite%%Krunkelbach valley uranium deposit
Murx%metauroxite%%Burro mine
Mus%museumite%%Săcărâmb
Mut%mutinaite%%Adamson
Mv-Ce%manaevite-(Ce)%%Kovdor massif
Mvar%metavariscite%%Lucin
Mvd%melanovanadite%%
Mvdd%metavandendriesscheite%%Shinkolobwe mine
Mves%magnesiovesuvianite%%
Mviv%metavivianite%%
Mvk%makovickyite%%Băița|Western ore field, scheelite deposit
Mvlt%magnesiovoltaite%%Alcaparrosa mine
Mvms%metavanmeersscheite%%Kobokobo open pit
Mvnr%metavanuralite%%Mounana mine
Mvs%mutnovskite%%Mutnovsky
Mvt%metavoltine%%
Mvv%medvedevite%%2012-2013 Fissure Tolbachik eruption site
Mvx%metavauxite%%Siglo Veinte mine
Mw%merwinite%%Wet Weather quarry, Sky Blue Hill
Mxn%meixnerite%%
My%molysite%%Mount Vesuvius
Myg%mayingite%%Maying
Myh%matyhite%%D'Orbigny meteorite
Myi%martyite%%Blue Cap mine
Myl%meniaylovite%%First scoria cone|Second scoria cone
Mys%malyshevite%%Velikaya Guba uran-vanadium deposit
Myv%mitryaevaite%%
Mz%mendozite%%
Mzd%mauriziodiniite%%Torrecillas mine
Mze%menezesite%%Jacupiranga mine
Mzel%metazellerite%%
Mzeu%metazeunerite%%Walpurgis Flacher vein
Mzg%mozgovaite%%La Fossa crater
Mzk%mellizinkalite%%Glavnaya Tenoritovaya fumarole
Mzo%mazorite%%
Mzr-Y%menzerite-(Y)%%Bonnet Island
Mzt%mazzettiite%%
Mzv%morozeviczite%%
Mzz%minguzzite%%
Möh%möhnite%%Pabellón de Pica
Müc%mückeite%%Grüne Au Mine
Mül%müllerite%%Aga mine|Bird Nest drift|Otto mountain
Naa%naalasite%%Torrecillas mine
Nab%nabokoite%%Yadovitaya fumarole
Nad%nadorite%%
Naes-Ce%nioboaeschynite-(Ce)%%Vishnevye mountains
Naes-Y%nioboaeschynite-(Y)%%
Naf%nafertisite%%Kukisvumchorr
Nah%nahcolite%%Mount Vesuvius
Nak%nakauriite%%
Nal%nickelalumite%%
Nan%nanlingite%%
Nap%natrophosphate%%Material'naya adit
Naq%naquite%%Luobusa ore district
Nar%narsarsukite%%Narsaarsuk pegmatite
Nas%nasinite%%Larderello
Nat%natrite%%Mount Karnasurt|Mount Rasvumchorr|Olenii Ruchei
Natt%natroaphthitalite%%Arsenatnaya fumarole
Nau%naumannite%%Tilkerode
Naus%nickelaustinite%%Bou Azer district
Naz%nazarovite%%Halamish wadi|Marjalahti meteorite
Nba%nitrobarite%%Chile
Nbao%Niobobaotite%%Bayan Obo mine
Nbh%nabaphite%%Material'naya adit
Nbi%nabiasite%%
Nbix-Mn²⁺%nioboixiolite-(Mn²⁺)%%
Nbix-[]%nioboixiolite-(◻)%%
Nbk%niobokupletskite%%Poudrette quarry
Nbl%nambulite%%
Nblö%nickelblödite%%Carr Boyd Rocks mine|Kambalda mines
Nbm%nabimusaite%%Jabel Harmun
Nbo%neighborite%%
Nbp%niobophyllite%%Letitia Lake
Nbr%nielsbohrite%%Krunkelbach valley uranium deposit
Nbs%nabesite%%Kvanefjeld
Nbsf%nickelbischofite%%
Nbsg%nickelboussingaultite%%Talnakh ore field
Nbt%nabateaite%%Halamish wadi
Nbv%nishanbaevite%%Arsenatnaya fumarole
Nbwd%natroboltwoodite%%
Nc%nickeline%%
Ncal%nitrocalcite%%
Ncb%niobocarbide%%Avrorinskii placer, Aktai river, Baranchinsky massif
Nch%natrochalcite%%Chuquicamata
Ncp%nacaphite%%Mount Rasvumchorr
Ncr%nacrite%%Brand-Erbisdorf
Ndf%natrodufrénite%%
Ndg%nordgauite%%Cornelia shaft, Hagendorf South open cut
Ndm%niedermayrite%%Esperanza mine
Nea%nealite%%Laurium
Nef%nefedovite%%Kuniok river valley|Material'naya adit
Neg%negevite%%Halamish wadi
Nek%nekrasovite%%
Nel%neltnerite%%Tachgagalt mine
Neo%neotocite%%
Nep%nepskoeite%%Nepskoe  potassium  salt  deposit
Nes%nesquehonite%%
Neu%neustädtelite%%Gueldener Falk mine
Nev%nevadaite%%Gold quarry mine
New%newberyite%%
Ney%neyite%%
Nfa%nafeasite%%Torrecillas mine
Ngb%novograblenovite%%2012-2013 Fissure Tolbachik eruption site
Ngs%nagashimalite%%
Ngy%nagyágite%%Săcărâmb
Nhef%nioboheftetjernite%%Beronono
Nhhy%nickelhexahydrite%%Severniy mine
Nhi%niahite%%
Nhlt%nioboholtite%%Szklary pegmatite
Nhp%nahpoite%%
Ni%nickel (native)%%
Nia%niasite%%
Nic%nickelphosphide%%Butler meteorite
Nie%nielsenite%%Skaergaard intrusion
Nif%nifontovite%%Novofrolovskoye boron-copper deposit
Nig%niggliite%%Insizwa
Nih%nitscheite%%Green Lizard mine
Nii%niigataite%%Ohmi, Itoigawa City
Nik%nikischerite%%Huanuni tin mine
Nim%nimite%%Bon Accord nickel deposit
Nin%ningyoite%%
Nio%niocalite%%Oka
Nip%nipalarsite%%Monchetundra ore field
Nis%nisbite%%
Nit%niter%%
Nix%nixonite%%Darby kimberlite field
Niz%nizamoffite%%Palermo No. 1 mine
Nizip%nickelzippeite%%Jáchymov
Nj%naujakasite%%Naujakasik
Nk%nekoite%%Wet Weather quarry, Sky Blue Hill
Nka%nakkaalaaqite%%Nakkaalaaq
Nkk%nataliakulikite%%Hatrurim Basin
Nkl%nickolayite%%Daba-Siwaqa complex
Nkn%nickenichite%%Andernach
Nkv%nenadkevichite%%Natrolite stock, Karnasurt mount
Nld%naldrettite%%Mesamax Northwest deposit
Nlg%nullaginite%%Otway nickel deposit
Nlm%natrolemoynite%%Poudrette quarry
Nlmy%nickellotharmeyerite%%Wolfgang Maassen mine field
Nln%nelenite%%Trotter mine
Nlp%nalipoite%%Poudrette quarry
Nlv%nalivkinite%%Darai-Pioz glacier
Nlz%nolzeite%%Poudrette quarry
Nmb%namibite%%Mesopotamia mine
Nmd%normandite%%Poudrette quarry
Nmgs%nitromagnesite%%
Nmk%natromarkeyite%%Markey mine
Nml%nataliyamalikite%%Avachinsky
Nmn%nikmelnikovite%%Kovdor massif
Nms%namansilite%%
Nmw%namuwite%%
Nmyb%natromolybdite%%Arsenatnaya fumarole
Nmz%nollmotzite%%Clara mine
Nn%nisnite%%Jeffrey mine
Nnbl%natronambulite%%Tanohata mine
Nng%niningerite%%Abee meteorite|Indarch meteorite
Nnp%novodneprite%%Novodneprovskoe deposit
Nns-Y%nacareniobsite-(Y)%%
Nob%nobleite%%Furnace Creek district
Nol%nolanite%%
Non%nontronite%%
Noo%noonkanbahite%%Löhley|Murunskii massif
Nor-Ce%nordite-(Ce)%%Mount Sengischorr
Nor-La%nordite-(La)%%Chinglusuai river valley
Nov%novgorodovaite%%Chelkar salt dome
Now%nowackiite%%Lengenbach quarry
Npal%natropharmacoalumite%%Rodalquilar
Npb%nitroplumbite%%Burro mine
Npg%nanpingite%%Xikeng mine
Npi%napoliite%%
Npl%natropalermoite%%Palermo No. 1 mine
Npmr%nickelpicromerite%%Kyshtym
Npo%népouite%%Népoui
Npsd%natropharmacosiderite%%
Npt%neptunite%%Narsaarsuk pegmatite
Nr%nierite%%Indarch meteorite
Nrb%norbergite%%
Nrr%norrishite%%Hoskins mine
Nrs%norilskite%%Mayak mine
Ns%natrosilite%%Mount Karnasurt
Nsb%nicksobolevite%%Second scoria cone
Nsc%nagelschmidtite%%Hatrurim Basin
Nsd%nordstrandite%%
Nsf%natrosulfatourea%%Rowley mine
Nsg%niksergievite%%
Nsh%nashite%%Little Eva mine|St Jude mine, Gypsum valley
Nsk%nordenskiöldine%%Langesundsfjord
Nskt%nickelskutterudite%%Schneeberg ore district
Nsm%nordströmite%%Falun Mine
Nsn%nosean%%Laach lake volcanic complex
Nsnb%nickelschneebergite%%Roter Berg
Nso%nasonite%%Parker shaft
Nsp%nastrophite%%Mount Alluaiv|Mount Karnasurt
Nsr%northstarite%%North Star
Nss%nissonite%%
Nst%norsethite%%Westvaco mine
Nsu%nsutite%%
Nsv-Fe%neskevaaraite-Fe%%Kirovskii apatite mine|Vuoriyarvi alkaline-ultrabasic massif
Nt%natron%%
Nta%natalyite%%Pereval marble quarry
Ntan%natrotantite%%Voron'i tundry
Ntk%nantokite%%
Ntl%nestolaite%%Little Eva mine
Ntlm%nickeltalmessite%%Bou Azer district
Ntn%natanite%%Mushiston tin deposit
Ntp%natrophilite%%Fillow quarry
Ntr%natrolite%%Hohentwiel
Nts%natisite%%Mount Karnasurt
Ntsm%nickeltsumcorite%%Lavrio
Ntt%nitratine%%Tarapacá Region
Nttn%natrotitanite%%Verkhnee Espe massif
Nty%nickeltyrrellite%%El Dragón mine
Nuf%nuffieldite%%
Nuk%nukundamite%%Undu mine
Num%numanoite%%Fuka mine
Nup%northupite%%Searles Lake
Nur%nuragheite%%Punta de Su Seinargiu
Nuw%nuwaite%%Allende meteorite
Nvi%novikovite%%
Nvj%navajoite%%
Nvk%nevskite%%
Nvl%niveolanite%%Poudrette quarry
Nvr%navrotskyite%%Blue Lizard mine
Nvá%novákite%%
Nvč%nováčekite%%
Nwal%natrowalentaite%%Shire of Lake Grace
Nwg%nchwaningite%%Nchwaning mines
Nx%natroxalate%%Mount Alluaiv
Nye%nyerereite%%Ol Doinyo Lengai
Nyh%nyholmite%%Block 14 opencut, Broken Hill mine
Nzip%natrozippeite%%White Canyon
Nzr%nazarchukite%%
Nög-Ce%nöggerathite-(Ce)%%In den Dellen quarries
Obmic%oxybismutomicrolite%%
Obn%osbornite%%Bustee meteorite
Obnr%orthobrannerite%%
Obr-KCu%obradovicite-KCu%%Chuquicamata
Obr-NaCu%obradovicite-NaCu%%Chuquicamata
Obr-NaNa%obradovicite-NaNa%%Chuquicamata
Obt%oberthürite%%Marathon deposit
Obu%ogdensburgite%%Sterling Hill
Obw%oberwolfachite%%
Ocdrv%oxy-chromium-dravite%%Pereval marble quarry
Ocmic%oxycalciomicrolite%%
Ocpt%orthocuproplatinum%%Lubero Territory
Ocr%oxycalcioroméite%%Buca della Vena mine
Oda%o'danielite%%Tsumeb mine
Odi%odigitriaite%%Darai-Pioz glacier
Odk%odikhinchaite%%
Odn%odinite%%Îles de Los
Odrv%oxy-dravite%%
Ods%oldsite%%
Odt%odintsovite%%Malyi Murun massif
Oen%oenite%%
Off%offretite%%
Ofoi%oxy-foitite%%
Oft%oftedalite%%Heftetjern pegmatite
Ogdf%orthogersdorffite%%
Ogn%ognitite%%
Oh%ohmilite%%
Ohm%oppenheimerite%%Blue Lizard mine
Ohn%ottohahnite%%Blue Lizard mine
Ojl%ojuelaite%%Ojuela mine
Ojq-Ce%orthojoaquinite-(Ce)%%California State gem mine
Ok%osakaite%%
Oka-Y%okanoganite-(Y)%%Washington pass
Oke%okenite%%Disko Island
Okg%okruginite%%
Okh%okhotskite%%
Oki%okieite%%Burro mine|Jo Dandy Hill
Okm%olekminskite%%Murunskii massif
Okns%oxykinoshitalite%%Fernando de Noronha
Okp%oscarkempffite%%Chocaya-Animas mines
Okr%okruschite%%Fuchs quarry, Hartkoppe
Oky%okayamalite%%Fuka mine
Ola%orlandiite%%
Old%oldhamite%%Bustee meteorite
Ole%olenite%%Olenii ridge
Olg%olgite%%Mount Karnasurt
Oli%olivenite%%
Olk%olkhonskite%%
Olm%olmiite%%Nchwaning mines
Ols%olsacherite%%
Olv%orlovite%%Darai-Pioz glacier
Oly%olympite%%Mount Rasvumchorr
Om%omsite%%Oms
Oma%omariniite%%Capillitas mine
Ome%omeiite%%Danba County
Omi%ominelite%%
Omlk%oxo-mangani-leakeite%%Hoskins mine
Omo%omongwaite%%Omongwa salt pan
Omp%omphacite%%
Omrg%orthominasragrite%%North Mesa mine group
Ond%ondrušite%%Jáchymov
One%oneillite%%Poudrette quarry
Onmic%oxynatromicrolite%%
Ono%onoratoite%%
Oos%oosterboschite%%Musonoi mine
Oph%ophirite%%Ophir
Ophl%oxyphlogopite%%Rothenberg basalt quarry
Opki%orthopinakiolite%%Långban
Opl%opal%%
Opr%oxyplumboroméite%%Harstigen mine
Or%orthoclase%%
Orc%orcelite%%
Ord%ordoñezite%%
Ore%oregonite%%
Org-Mn%organovaite-Mn%%Mount Karnasurt
Org-Zn%organovaite-Zn%%Mount Karnasurt
Orh%orishchinite%%
Ori%orickite%%Coyote Peak
Orl%orlymanite%%Wessels mine
Orn%orientite%%Bueycito
Orp%orpiment%%
Ors%orschallite%%Brohltal
Ory%oreillyite%%
Osa%osarsite%%
Osd%olmsteadite%%
Ose%olsenite%%
Osh%olshanskyite%%Titovskoe boron deposit
Osk%oskarssonite%%Eldfell
Osm%osumilite%%
Osm-Mg%osumilite-(Mg)%%Caspar quarry
Osn%oursinite%%Shinkolobwe mine
Ospe%orthoserpierite%%Chessy
Osrl%oxy-schorl%%Kutná Hora District
Osw%oswaldpeetersite%%Jomac mine
Ota%Otavite%%Tsumeb mine
Otj%otjisumeite%%Tsumeb mine
Oto%ottoite%%Aga mine|Bird Nest drift
Otr%ottrélite%%Ottré
Ots%ottensite%%
Ott%ottemannite%%Cerro Rico
Otw%otwayite%%Otway nickel deposit
Oul%oulankaite%%Lukkulaisvaara ultrabasic massif
Our%ourayite%%
Ova%ovamboite%%Maikain gold deposit|Tsumeb mine
Ove%overite%%Clay canyon, Fairfield
Owal%orthowalpurgite%%Wittichen
Owe%owensite%%
Owy%owyheeite%%
Oxa%oxammite%%
Oxy%oxyvanite%%minerals of Slyudyanka
Oyb-Y%oxyyttrobetafite-(Y)%%
Oye%oyelite%%Fuka mine
Oyo%oyonite%%Uchucchacua
Oze%ozerovaite%%Second scoria cone
Ozn%ozernovskite%%Ozernovskoe deposit
Paa%paarite%%Western ore field, scheelite deposit
Pab%pabstite%%Santa Cruz
Pac%paceite%%Broken Hill
Pad%pauladamsite%%
Pagr%plumboagardite%%
Pah%pahasapaite%%Tip Top mine
Pahcal%para-alumohydrocalcite%%
Pai%painite%%Mogok Township
Pak-Ce%polyakovite-(Ce)%%Ilmen Nature Reserve
Pal%pharmacoalumite%%
Pam%phosphammite%%
Pan%peterandresenite%%Tuften quarry
Pap%papagoite%%New Cornelia mine
Paq%paqueite%%Allende meteorite
Par%polyarsite%%Arsenatnaya fumarole
Pas%pascoite%%
Pasl%pararsenolamprite%%
Pasn%paralstonite%%
Pat%patrónite%%
Pata%paratacamite%%Caracoles
Pata-Mg%paratacamite-(Mg)%%Cuya
Pata-Ni%paratacamite-(Ni)%%Carr Boyd Rocks mine
Patt%pattersonite%%Eisenbach, Taunus
Pau-Ca%paulingite-Ca%%
Pau-K%paulingite-K%%
Pav%pavonite%%
Pax%paxite%%
Pb%lead%%
Pba%palladobismutharsenide%%Stillwater igneous complex
Pbc%penberthycroftite%%Penberthy Croft mine
Pbdt%parabrandtite%%Sterling Hill
Pbl%pyrobelonite%%Långban
Pbm%příbramite%%Háje
Pbn%philipsbornite%%Red Lead mine
Pbol%pseudoboleite%%El Boleo
Pbp%plumbophyllite%%Blue Bell mine (Baker)
Pbr%probertite%%Pacific Coast Borax Company
Pbs%plumboselite%%Tsumeb mine
Pbt%pilanesbergite%%Pilanesberg
Pbtl%parabutlerite%%Alcaparrosa mine|Chuquicamata
Pbtlr%plumbotellurite%%
Pby%peterbaylissite%%Clear Creek claim
Pbz%preobrazhenskite%%Inder Lake
Pbzl%paraberzeliite%%Arsenatnaya fumarole
Pbø-Ce%perbøeite-(Ce)%%Hundholmen, Tysfjord|Nedre Eivollen|Stetind pegmatite
Pbø-La%perbøeite-(La)%%Mochalin Log REE deposit
Pc-Fe%phosphocyclite-(Fe)%%Halamish wadi
Pc-Ni%phosphocyclite-(Ni)%%Halamish wadi
Pcar%potassiccarpholite%%Sawtooth Range
Pcc%piccoliite%%
Pce%priceite%%
Pck-Y%proshchenkoite-(Y)%%
Pcls%paracelsian%%Candoglia
Pcn%peterchinite%%Franklin Furnace
Pco%pecoraite%%Wolfe Creek Crater
Pcp%picotpaulite%%Allchar deposit
Pcsb%paracostibite%%
Pct%pectolite%%
Pcv-Ce%percleveite-(Ce)%%Bastnäs
Pcv-La%percleveite-(La)%%Mochalin Log REE deposit
Pcy%protocaseyite%%Burro mine
Pcz%perchiazziite%%
Pcř%prachařite%%
Pd%palladium (native)%%Minas Gerais
Pda%palladoarsenide%%Komsomol'skii mine
Pdc%paradocrasite%%Broken Hill
Pdd%palladodymite%%Miass Placer Zone
Pdec%proxidecagonite%%Khatyrka meteorite
Pdg%palladogermanide%%Marathon deposit
Pdi%proudite%%Juno mine
Pdim%paradimorphite%%Solfatara
Pdk%pyradoketosite%%Monte Arsiccio mine
Pdm%padmaite%%Velikaya Guba uran-vanadium deposit
Pdo-Ba%pandoraite-Ba%%Pandora mine
Pdo-Ca%pandoraite-Ca%%Pandora mine
Pdr%priderite%%
Pds%palladseite%%Itabira
Pdt%palladothallite%%Monchetundra ore field
Pdth%pseudodickthomssenite%%Mount Karnasurt
Pdu%petedunnite%%Buckwheat pit
Pdv%poldervaartite%%Wessels mine
Pdw%paddlewheelite%%Svornost mine
Pdĕ%padĕraite%%Băița
Pe%perite%%Långban
Peg%pengite%%
Pei%peisleyite%%Tom's phosphate quarry
Pek%pekoite%%Juno mine
Pell%phosphoellenbergerite%%Dora Maira coesite-bearing unit
Pen%penroseite%%
Per%periclase%%Mount Somma
Pert%pertoldite%%
Pet-Ce%petersenite-(Ce)%%Poudrette quarry
Pez%pezzottaite%%
Pfb%phosphofibrite%%Clara mine
Pfd%penfieldite%%Laurium
Pfl%pauflerite%%Tolbachik
Pfn%parafiniukite%%Szklary pegmatite
Pfsl%parafransoletite%%Tip Top mine
Pg%paragonite%%Pizzo Forno
Pgbk%parageorgbokiite%%Second scoria cone
Pgdf%paragersdorffite%%
Pgdn%plumbogaidonnayite%%
Pgh%poughite%%Moctezuma mine
Pgi%plagionite%%Graf Jost-Christian mine
Pgj%paraguanajuatite%%
Pgl%pitiglianoite%%Case Collina
Pgn%paganoite%%Johanngeorgenstadt
Pgo-Ce%piergorite-(Ce)%%Tre Croci railway halt
Pgr-Y%priscillagrewite-(Y)%%Daba marble quarry
Pgrf%pseudograndreefite%%Grand Reef mine
Pgt%pigeonite%%
Pgtl%phosphogartrellite%%
Pgu%panguite%%Allende meteorite
Pgv%popugaevaite%%
Pha%phuralumite%%Kobokobo open pit
Phb%pentahydroborite%%Novofrolovskoye boron-copper deposit
Phc%phoenicochroite%%Beryozovskoye deposit
Phdy%phosphohedyphane%%
Phe%polhemusite%%
Phi%philolithite%%Långban
Phib%parahibbingite%%Karee mine
Phk%phenakite%%Malysheva
Phl%phlogopite%%
Phm%perhamite%%Dunton Gem quarry|Newry
Phn%pachnolite%%Ivigtuut cryolite deposit
Pho%phosgenite%%
Phop%parahopeite%%Kabwe
Php-Ca%phillipsite-Ca%%
Php-K%phillipsite-K%%
Php-Na%phillipsite-Na%%castle rock, Aci Castello
Phr%philrothite%%Lengenbach quarry
Phsd%phosphosiderite%%
Phst%potassic-hastingsite%%
Phu%phurcalite%%
Phv%pakhomovskyite%%Kovdor massif
Phx%phoxite%%Rowley mine
Phy%pentahydrite%%
Pi%pirquitasite%%Pirquitas Ag-Sn deposit
Pic%picaite%%Torrecillas mine
Pie%pierrotite%%Jas Roux
Pil%pillaite%%Buca della Vena mine
Pin%pinchite%%Terlingua district
Pinn%phosphoinnelite%%Kovdor phlogopite mine
Pir%piretite%%Shinkolobwe mine
Pit%pittongite%%Pittong
Piy%piypite%%Great Fissure eruption
Piz%pizgrischite%%Piz Grisch
Pjh%pseudojohannite%%Rovnost mine
Pjl%potassic-jeanlouisite%%Zirkle Mesa
Pjn%petitjeanite%%
Pjtm%plumbojohntomaite%%
Pk%polkovicite%%
Pka%punkaruaivite%%Mount Malyi Punkaruaiv
Pke%paulkerrite%%
Pkel%parakeldyshite%%Mount Alluaiv|Mount Takhtarvumchorr
Pkg%pickeringite%%
Pkh%polekhovskyite%%Halamish wadi
Pki%pinakiolite%%Långban
Pkl%paulkellerite%%Neustädtel
Pkn%parkinsonite%%Torr Works
Pko%pekovite%%Darai-Pioz glacier
Pkr%pokrovskite%%
Pks%penikisite%%Rapid creek
Pkt%packratite%%Packrat mine, Gateway
Pkv%polkanovite%%Miass Placer Zone
Pky%panskyite%%Kievey  Fedorovo-Pana  layered  intrusion
Pkz-Fe%parakuzmenkoite-Fe%%Mount Kedykverpakhk
Pla%pauloabibite%%Jacupiranga mine
Plab-Mg%paralabuntsovite-Mg%%Green River formation (Sweetwater Co.)
Plae%pseudolaueite%%Cornelia shaft, Hagendorf South open cut
Pld%polydymite%%Grüne Au Mine
Ple%palermoite%%Palermo No. 1 mine
Pley%pleysteinite%%
Plf%perloffite%%
Plg%palygorskite%%
Plgr%paulgrothite%%Arsenatnaya fumarole
Plhl%polyhalite%%Ischler Salzberg
Pli%pliniusite%%Hatrurim Basin|Tolbachik
Plk%pertlikite%%
Pll%perlialite%%Mount Yukspor|Vuonnemiok river valley
Plmr%paralammerite%%Tolbachik
Pln%polylithionite%%Kangerluarsuk fjord, Ilímaussaq
Plo%polloneite%%Pollone mine
Plom%paralomonosovite%%Lovozero massif
Plp%pilipenkoite%%
Plr%polarite%%Mayak mine
Plri%paralaurionite%%Laurium
Pls%palarstanide%%Mayak mine
Plv%paolovite%%Oktyabr'skoe Cu-Ni deposit
Plw-Y%pilawite-(Y)%%Piława Górna quarry
Plx%pellouxite%%Buca della Vena mine
Ply%pellyite%%Gun claim
Plyo%pseudolyonsite%%Tolbachik
Plz%palenzonaite%%Molinello mine
Plš%paulišite%%Kutná Hora
Pma%paramarkeyite%%Markey mine
Pmarf%potassic-magnesio-arfvedsonite%%
Pmc%pharmacolite%%Sophia mine
Pmdm%paramolybdomenite%%Tolbachik
Pmdz%paramendozavilite%%
Pme%plimerite%%Block 14 opencut, Broken Hill mine
Pmet%pseudomertieite%%
Pmg%permingeatite%%Předbořice
Pmi%palmierite%%Mount Vesuvius
Pmk%pseudomarkeyite%%Markey mine
Pml%paramelaconite%%Bisbee
Pmlc%pseudomalachite%%Rheinbreitbach
Pmo%paulmooreite%%Långban
Pmp-Al%pumpellyite-(Al)%%
Pmp-Fe2+%pumpellyite-(Fe²⁺)%%Norilsk
Pmp-Fe3+%pumpellyite-(Fe³⁺)%%
Pmp-Mg%pumpellyite-(Mg)%%Keweenaw County
Pmp-Mn2+%pumpellyite-(Mn²⁺)%%
Pmr%picromerite%%Mount Vesuvius
Pmsd%pharmacosiderite%%Carn Brea Village|Gwennap
Pmss-NH4%pseudomeisserite-(NH4)%%Blue Lizard mine
Pmt%piemontite%%
Pmt-Pb%piemontite-(Pb)%%
Pmt-Sr%piemontite-(Sr)%%Cassagna mine|Molinello mine
Pmto%paramontroseite%%
Pmw%petermegawite%%El Dragón mine
Pn%pentlandite%%
Pna%parnauite%%
Pnb%penobsquisite%%Potash Corporation of Saskatchewan mine
Pnc%panichiite%%La Fossa crater
Pne%panethite%%Dayton meteorite
Png%pingguite%%
Pni%putnisite%%
Pnk%posnjakite%%
Pnl%pinalite%%Mammoth-Saint Anthony mine
Pnn%pennantite%%Benallt mine
Pno%pinnoite%%Staßfurt
Pns%pansnerite%%Arsenatnaya fumarole
Pntr%paranatrolite%%Poudrette quarry
Pnts%paranatisite%%Material'naya adit|Mount Rasvumchorr
Pnv-Y%pendevilleite-(Y)%%
Pnx%phaunouxite%%Mount Neuenberg silver mines
Pnz%panunzite%%Mount Somma
Pod%podlesnoite%%Kirovskii apatite mine
Poe%poellmannite%%Hatrurim Basin
Poh%pohlite%%
Poi%poirierite%%
Pok%pokhodyashinite%%Vorontsovskoe gold deposit
Pol%pollucite%%San Piero in Campo
Pom%pomite%%Blue Streak mine
Pon%ponomarevite%%First scoria cone
Pop%poppiite%%Valgraveglia mine
Por%portlandite%%Scawt Hill
Pos%postite%%Blue Cap mine|Vanadium Queen mine (La Sal)
Pot%pottsite%%
Potw%paraotwayite%%Otway nickel deposit
Pou%poudretteite%%Poudrette quarry
Pov%povondraite%%
Poy%poyarkovite%%Khaidarkan
Pp%phosphophyllite%%Hagendorf North pegmatite
Ppdn%plumbopalladinite%%Mayak mine
Ppe%prosperite%%Tsumeb mine
Pph%pyrophanite%%Harstigen mine
Ppie%parapierrotite%%Allchar deposit
Ppk%papikeite%%Ærøya
Ppl%pampaloite%%Pampalo mine
Pplf%plumboperloffite%%Wiperaminga Hill West Quarry
Ppm%picropharmacolite%%
Ppom%pseudopomite%%Blue Streak mine
Ppsd%plumbopharmacosiderite%%
Ppv%popovite%%Arsenatnaya fumarole
Pra%petarasite%%Poudrette quarry
Prb%pararobertsite%%Tip Top mine
Prbs%paulrobinsonite%%
Prc%penriceite%%Penrice
Prct%potassic-richterite%%Harstigen mine|Stora Pajsberg mine
Prd%paradamite%%
Prh%prehnite%%Cradock
Pri%pringleite%%Potash Corporation of Saskatchewan mine
Prk%parkerite%%Frood mine|Insizwa
Prl%pyrophyllite%%Beryozovskoye deposit
Prlg%pararealgar%%
Prmb%pararammelsbergite%%Coleman|James|Keeley-Frontier mine
Prn-Y%paraniite-(Y)%%Scherbadung
Pro%perroudite%%Cap Garonne mine
Prp%pyrope%%Czech Republic
Prr-Ce%perrierite-(Ce)%%
Prr-La%perrierite-(La)%%In den Dellen quarries
Prs%proustite%%
Prsa%pararaisaite%%Mammoth
Prv%perovskite%%
Prw%parwanite%%Parwan
Pry%perryite%%Horse Creek meteorite|Kota-Kota meteorite|South Oman meteorite
Prö%phosphorrösslerite%%
Ps%protasite%%Shinkolobwe mine
Psc%paulscherrerite%%Mount Painter
Pscd%parascorodite%%Kaňk
Psd%parascandolaite%%Mount Vesuvius
Psg%preisingerite%%San Francisco de los Andes mine
Psh%paraershovite%%Mount Yukspor
Pshl%pseudosinhalite%%Aldansky District
Pshn%paraschachnerite%%Moschel mountain
Psi-Ce%phosinaite-(Ce)%%Koashva open pit|Mount Karnasurt
Psib%parasibirskite%%Fuka mine
Psk%petscheckite%%Betsiboka
Psl%palladosilicide%%Bushveld igneous complex|Kapalagulu intrusion
Pslz%parascholzite%%Cornelia shaft, Hagendorf South open cut
Psn%parsettensite%%Parsettens Alp
Pso%parsonsite%%Shinkolobwe mine
Psp%prosopite%%
Psq%panasqueiraite%%Panasqueira
Psr%paseroite%%Molinello mine
Pss%pirssonite%%Searles Lake
Pst-Ce%parisite-(Ce)%%
Pst-La%parisite-(La)%%Novo Horizonte
Psti%pyrostilpnite%%
Psty%parasterryite%%Pollone mine
Psv%parádsasvárite%%Parádsasvár
Psv-F%pertsevite-(F)%%Kebirnin'ya creek
Psv-OH%pertsevite-(OH)%%Titovskoe boron deposit
Psym%parasymplesite%%Saiki
Pt%platinum (native)%%
Pta%peretaite%%
Ptbm%paratobermorite%%
Pte%petterdite%%Red Lead mine
Pten%protoenstatite%%
Ptg%pentagonite%%Owyhee Dam
Ptgs%phyllotungstite%%Clara mine
Pth%parthéite%%
Pti-Y%peatite-(Y)%%Poudrette quarry
Ptim%paratimroseite%%Aga mine
Ptk%petrukite%%
Ptl%petalite%%Utö nature reserve
Ptlr%paratellurite%%Moctezuma mine
Ptm%plumbotsumite%%Tsumeb mine
Ptn%plattnerite%%Leadhills
Pto-La%paratooite-(La)%%Paratoo copper mine
Ptp%puttapaite%%Beltana Mine
Ptr%potarite%%Kaieteur Falls
Pts-Ce%petersite-(Ce)%%
Pts-La%petersite-(La)%%
Pts-Y%petersite-(Y)%%
Ptse-Ba%paratsepinite-Ba%%Lepkhe-Nel'm mountain
Ptse-Na%paratsepinite-Na%%Mount Khibinpakhkchorr
Ptt-Y%perettiite-(Y)%%
Ptu%pretulite%%Fressnitzgraben
Ptv%pautovite%%Palitra pegmatite, Karnasurt mine
Pty%patynite%%Patyn Mount Massif
Ptz%petzite%%Săcărâmb
Pub%poubaite%%
Puc%pucherite%%Wolfgang Maassen mine field
Pumb%paraumbite%%Mount Eveslogchorr
Pun%puninite%%Glavnaya Tenoritovaya fumarole
Pur%purpurite%%
Purp%parauranophane%%Jáchymov
Pus%pushcharovskite%%Cap Garonne mine
Put%putoranite%%Oktyabr'skoe Cu-Ni deposit
Puy%phosphuranylite%%
Pv%petrovite%%Second scoria cone
Pva%princivalleite%%Curiglia
Pvc%petrovicite%%Petrovice
Pvd-Ba%phosphovanadylite-Ba%%
Pvd-Ca%phosphovanadylite-Ca%%
Pvgd%paravinogradovite%%Kukisvumchorr
Pvi%poitevinite%%
Pvk%petrovskaite%%Maikain gold deposit
Pvl%penkvilksite%%Karnasurt mine, Karnasurt mount
Pvn%plavnoite%%Plavno mine
Pvs%pavlovskyite%%Birkhin gabbro massif|Mount Lakargi
Pvx%paravauxite%%Siglo Veinte mine
Pwal%phosphowalpurgite%%Smrkovec
Pwe%parwelite%%Långban
Pwi%petewilliamsite%%Johanngeorgenstadt
Pwk%preiswerkite%%Binn valley
Pwl%powellite%%
Pwlf%parawulffite%%Yadovitaya fumarole
Pwo%pseudowollastonite%%
Pwt%prewittite%%Northern breakthrough
Pxf%pyroxferroite%%
Pxm%pyroxmangite%%
Pxn%philoxenite%%Yadovitaya fumarole
Py%pyrite%%
Pyc%pyrochroite%%Stora Pajsberg mine
Pyf%playfairite%%Taylor pit
Pyg%pyrargyrite%%
Pyh%pyrrhotite%%
Pyl%pyrolusite%%
Pym%pyromorphite%%Heilige Dreifaltigkeit mine
Pyr%pyracmonite%%La Fossa crater
Pys-Fe%pyrosmalite-(Fe)%%Nordmark Odal field
Pys-Mn%pyrosmalite-(Mn)%%Sterling Hill
Pyt-Y%pyatenkoite-(Y)%%Mount Alluaiv
Pzh%penzhinite%%
Pzi%putzite%%Capillitas mine
Pzk%pieczkaite%%pegmatite No. 22, Gottcha claim
Pznc%pharmazincite%%Arsenatnaya fumarole
Pzv-Ce%polezhaevaite-(Ce)%%Koashva open pit
Pä%pääkkönenite%%
Pél%péligotite%%Blue Lizard mine
Pčk%petříčekite%%Předbořice
Pšl%plášilite%%Blue Lizard mine
Pšv%pašavaite%%Talnakh ore field
Pšý%pošepnýite%%Háje
Qat%qatranaite%%
Qd%quadratite%%Lengenbach quarry
Qdv%quadridavyne%%Mount Somma
Qil%qilianshanite%%Delingha
Qin%qingheiite%%
Qlt%qeltite%%Nabi Musa
Qnd%qandilite%%Mount Dupezeh, Hero
Qns%quenselite%%Långban
Qq-Ce%qaqarssukite-(Ce)%%Qaqqaarsuk deposit
Qsg%qingsongite%%Luobusa ore district
Qst%quenstedtite%%Tierra Amarilla
Qtn%quintinite%%Jacupiranga mine|Poudrette quarry
Que%queitite%%Tsumeb mine
Qui%quijarroite%%El Dragón mine
Qus%qusongite%%Luobusa ore district
Qz%quartz%%
Qzl%quetzalcoatlite%%Oriental mine
Raa%raadeite%%Tingelstadtjern quarry
Rab%rabbittite%%Lucky Strike Mine
Rad%radvaniceite%%
Rai%raite%%Karnasurt mine, Karnasurt mount
Raj%rajite%%Lone Pine mine
Ram-Cs%ramanite-(Cs)%%San Piero in Campo
Ram-Rb%ramanite-(Rb)%%San Piero in Campo
Ran%rossiantonite%%
Rap%rappoldite%%Rappold mine
Raq%rodalquilarite%%Rodalquilar
Ras%ruthenarsenite%%
Rat%rathite%%Lengenbach quarry
Rau%rauchite%%
Rav%ravatite%%Yaghnob River
Ray%rayite%%
Rbc%rhomboclase%%
Rbe%ramsbeckite%%
Rbg%rambergite%%Garpenberg
Rbh%reichenbachite%%
Rbi%rubinite%%Allende meteorite|Vigarano meteorite
Rbj%rabejacite%%
Rbl%roubaultite%%Shinkolobwe mine
Rbn%reinhardbraunsite%%Caspar quarry
Rbo-Mo%rhabdoborite-(Mo)%%
Rbo-V%rhabdoborite-(V)%%Arsenatnaya fumarole
Rbo-W%rhabdoborite-(W)%%Arsenatnaya fumarole
Rbr%raberite%%Lengenbach quarry
Rbt%robertsite%%Tip Top mine
Rbu%ronneburgite%%Lichtenberg open pit
Rbä%roterbärite%%Roter Bär Pit
Rch%roshchinite%%
Rck%rapidcreekite%%Rapid creek
Rcl%roscoelite%%
Rcn%ralphcannonite%%Lengenbach quarry
Rcy%redcanyonite%%Blue Lizard mine
Rd%rudenkoite%%Aldansky District
Rda%rhodarsenide%%
Rdb%rudabányaite%%Adolf mine
Rde-Y%reederite-(Y)%%Poudrette quarry
Rdf%richelsdorfite%%
Rdg%rüdlingerite%%Fianel mine|Valletta mine
Rdh%ramdohrite%%Chocaya-Animas mines
Rdk%radtkeite%%McDermitt mercury mine
Rdl%rodolicoite%%Santa Barbara ore district
Rdm%redmondite%%Redmond Mine
Rdr%roedderite%%Indarch meteorite
Rds%rhodochrosite%%Cavnic mine
Rdv%radovanite%%Roua mines
Rdz%rhodizite%%
Rea%reaphookhillite%%
Rec%rectorite%%
Red%redledgeite%%Red Ledge mine
Ref%refikite%%
Reg%regerite%%
Rei%reidite%%
Rel-K%relianceite-(K)%%Rowley mine
Ren%renierite%%Kipushi mine
Rep%reppiaite%%Valgraveglia mine
Rev%revdite%%Mount Karnasurt
Rey%reyerite%%Nuussuaq Peninsula
Rfd%rutherfordine%%
Rgb%rongibbsite%%Big Horn Mountains
Rge%rengeite%%Ohmi, Itoigawa City
Rgl%redgillite%%Silver Gill, Roughton Gill
Rgr%raygrantite%%Osborn district
Rgu%raguinite%%
Rh%rhodium (native)%%Stillwater igneous complex
Rha-Ce%rhabdophane-(Ce)%%
Rha-La%rhabdophane-(La)%%
Rha-Nd%rhabdophane-(Nd)%%
Rha-Y%rhabdophane-(Y)%%
Rhh%rosenhahnite%%
Rhk%radhakrishnaite%%
Rhn%rheniite%%Kudriavy volcano
Rhp%rhodplumsite%%
Rhr%rudolfhermannite%%Ozernovskoe deposit
Rht%Richetite%%Shinkolobwe mine
Rhö%rhönite%%
Rib%ribbeite%%Kombat
Ric%richardsite%%Mererani
Rie%riesite%%Nördlinger Ries
Rin-Y%rinkite-(Y)%%Darai-Pioz massif
Rio%riotintoite%%La Vendida mine
Rip%rippite%%
Rit%rittmannite%%
Riv%rivadavite%%
Rka%rankachite%%Clara mine
Rkb%rockbridgeite%%
Rkd%rickardite%%Good Hope mine
Rkm%rankamaite%%
Rko%rusakovite%%Balasauskandyk vanadium deposit
Rký%rosickýite%%
Rlg%realgar%%
Rll%russellite%%
Rm%reedmergnerite%%
Rma%roumaite%%Rouma Island
Rmb%rammelsbergite%%Schneeberg ore district
Rmc%ramaccioniite%%
Rmd%ramsdellite%%
Rme%rameauite%%
Rmi-Y%ramikite-(Y)%%Poudrette quarry
Rmn%romanèchite%%
Rmo%rumoiite%%Minamichiyoda
Rmr%riomarinaite%%
Rms%ramosite%%Uchucchacua
Rmt%rogermitchellite%%Poudrette quarry
Rmy%rosemaryite%%
Rmz%ramazzoite%%
Rnc%ranciéite%%Le Rancié Mine
Rne%rinneite%%
Rng-Ce%röntgenite-(Ce)%%Narsaarsuk pegmatite
Rnk%rankinite%%Scawt Hill
Rnm%rinmanite%%Garpenberg
Rnm-Zn%Zincorinmanite-(Zn)%%
Rnr%reinerite%%Tsumeb mine
Rns%ransomite%%United Verde mine
Rnu%ranunculite%%Kobokobo open pit
Rnv%rusinovite%%Mount Lakargi
Ro%roquesite%%
Roa%roaldite%%Youndegin meteorite
Rob%robinsonite%%
Rod%rhodesite%%Bultfontein mine
Roe%roeblingite%%Parker shaft
Rog%roggianite%%
Roh%rohaite%%Kvanefjeld
Rok%rokühnite%%
Rol%rollandite%%Roua mines
Rolg%rimkorolgite%%Kovdor Zheleznyi mine
Rom%romarchite%%
Ron%rondorfite%%Caspar quarry
Roo%rooseveltite%%
Ror%romanorlovite%%Glavnaya Tenoritovaya fumarole
Ros%rosenbergite%%
Rou%rouaite%%Roua mines|Sterling Hill
Row-Y%rowlandite-(Y)%%
Rox%roxbyite%%
Roy%roymillerite%%Kombat
Rpe%ronpetersonite%%Gun claim
Rrs%rorisite%%Kopeysk
Rs%rossite%%San Miguel County
Rsa%raisaite%%Sentyabr’skoe deposit
Rsb%rustenburgite%%Rustenburg
Rsc%roscherite%%Greifensteine
Rse%ríosecoite%%Torrecillas mine
Rsi%rosiaite%%
Rsk%raslakite%%Mount Karnasurt
Rsl%roselite%%Rappold mine
Rsm%rossmanite%%
Rso%russoite%%Pozzuoli
Rsp%raspite%%Broken Hill
Rss%rosasite%%
Rsv%rasvumite%%Apatitovyi tsirk|Kirovskii apatite mine
Rsy%richardsollyite%%Lengenbach quarry
Rt%rutile%%Horcajuelo de la Sierra
Rtb%ruitenbergite%%Potash Corporation of Saskatchewan mine
Rtg%retgersite%%
Rth%rauenthalite%%Mount Neuenberg silver mines
Rtm%rustumite%%
Rtn%rickturnerite%%Torr Works
Rtr%routhierite%%Jas Roux
Rtz-La%retzian-(La)%%Sterling Hill
Rtz-Nd%retzian-(Nd)%%Sterling Hill
Ru%ruthenium (native)%%
Rua%ruarsite%%Anduo chromium deposit
Rub%rubicline%%San Piero in Campo
Rud%rudashevskyite%%Indarch meteorite
Ruf%rruffite%%Tierra Amarilla
Rui%ruifrancoite%%Sapucaia mine
Ruk%rucklidgeite%%Kochkar' gold deposit|Robb-Montbray mine
Rum%rumseyite%%Torr Works
Rus%rouseite%%Långban
Rvd%rietveldite%%Giveway-Simplot mine|Jáchymov|Willi Agatz mine
Rvs%reevesite%%Wolfe Creek Crater
Rvt%rastsvetaevite%%Mount Rasvumchorr
Rvy%rossovskyite%%
Rwd%ringwoodite%%Tenham meteorite
Rwe%roweite%%Franklin
Rwl%rowleyite%%Rowley mine
Rwz%rewitzerite%%
Rxl%rouxelite%%Buca della Vena mine
Ryb%ryabchikovite%%
Ryd%raydemarkite%%
Ryn%reynoldsite%%Blue Bell mine (Baker)|Red Lead mine
Rys%rynersonite%%
Rz%ruizite%%Christmas
Rzs%reznitskyite%%Arsenatnaya fumarole
Rém-Ce%rémondite-(Ce)%%
Rém-La%rémondite-(La)%%Koashva open pit
Rö%rösslerite%%
Röm%römerite%%
Ršk-Ce%radekškodaite-(Ce)%%Mochalin Log REE deposit
Ršk-La%radekškodaite-(La)%%Mochalin Log REE deposit
S%sulphur%%
Sa%sanidine%%Drachenfels
Sab%sabatierite%%
Sabn%sanbornite%%Trumbull peak
Sac%saccoite%%Nchwaning mines
Sad%stronadelphite%%Kirovskii apatite mine
Saf%safflorite%%Daniel mine
Sag%suseinargiuite%%Punta de Su Seinargiu
Sah%sahlinite%%Långban
Sai%sainfeldite%%Mount Neuenberg silver mines
Sak%sakuraiite%%
Sal%saliotite%%
Sam%salammoniac%%Italy
Samr%samraite%%Halamish wadi
San%santanaite%%Caracoles
Sap%saponite%%
Sar%sarcopside%%Michałkowa
Sas%sasaite%%
Sat%sartorite%%Lengenbach quarry
Sati%satimolite%%
Sau%sauconite%%
Sav%slavkovite%%Svornost mine
Sb%antimony (native)%%
Sba%sabinaite%%Francon quarry
Sbab%scandiobabingtonite%%Seula mine
Sbb%santabarbaraite%%Santa Barbara ore district|Taman Peninsula
Sbe%stoiberite%%Izalco
Sbg%sabugalite%%
Sbgf%stibiogoldfieldite%%
Sbi%sabieite%%
Sbk%shcherbakovite%%Apatitovyi tsirk
Sbl%sabelliite%%
Sbm%sphaerobismoite%%Wittichen
Sbn%stibnite%%
Sbo%sulfoborite%%Westeregeln
Sbr%stibarsen%%Varuträsk
Sbs%sarrabusite%%
Sbt-Nd%shabaite-(Nd)%%Kamoto mine
Sbu%sarabauite%%
Sby%shabynite%%Korshunovskoye iron-boron skarn deposit
Sca%scacchite%%Mount Vesuvius
Scb%schreibersite%%
Scc%sbacchiite%%Mount Vesuvius
Scd%scorodite%%Graul
Sce%scenicite%%Green Lizard mine|Scenic mine
Scf%sacrofanite%%Sacrofano caldera
Scg%schlegelite%%Wolfgang Maassen mine field
Sch%scheelite%%
Sci%schmitterite%%Moctezuma mine
Sck%springcreekite%%Spring Creek mine
Scl%santaclaraite%%
Sclb%stibiocolumbite%%
Scld%stibioclaudetite%%Tsumeb mine
Sclu%stibiocolusite%%
Scm%schmiederite%%
Scn%scainiite%%Buca della Vena mine
Scnt%silicocarnotite%%Hatrurim Basin
Sco%sarcolite%%Mount Somma
Scr%scarbroite%%Scarborough
Scrt%spencerite%%
Scs%sincosite%%
Sct%scotlandite%%Susanna mine
Scvk%strontiochevkinite%%
Scw%scawtite%%Scawt Hill
Scy%steacyite%%Poudrette quarry
Scz%scorzalite%%Córrego Frio mine
Sd%siderite%%
Sda%scordariite%%Monte Arsiccio mine
Sdb%sudburyite%%Copper Cliff South mine
Sdd%saddlebackite%%Boddington Gold Mine
Sde%schoderite%%Eureka County
Sdh%sederholmite%%
Sdi%sardignaite%%Punta de Su Seinargiu
Sdk%sheldrickite%%Poudrette quarry
Sdl%sodalite%%Ilimmaasaq
Sdn%studenitsite%%Jarandol basin
Sdo%sidorenkite%%Mount Alluaiv
Sdp%sidpietersite%%Tsumeb mine
Sdr%sanderite%%
Sdrs%strontiodresserite%%Francon quarry
Sds%sklodowskite%%Shinkolobwe mine
Sdv%sedovite%%
Sdw%sidwillite%%
Sdy%slyudyankaite%%
Se%selenium%%
Sea%seaborgite%%Blue Lizard mine
Sed%steedeite%%Poudrette quarry
See%seelite%%Rabejac, Lodève|Talmessi mine
Seg%siegenite%%
Sei-Ce%seidite-(Ce)%%Karnasurt mine, Karnasurt mount
Sej-Y%sejkoraite-(Y)%%Rovnost mine
Sek%steklite%%Yadovitaya fumarole
Sel%sellaite%%
Seli%seligmannite%%Lengenbach quarry
Sem%seamanite%%Iron County
Sen%senarmontite%%
Sep%sepiolite%%Bettolino
Ser%serendibite%%
Sev%senkevichite%%Darai-Pioz glacier
Sew%sewardite%%Tsumeb mine
Sfd%swinefordite%%Foote Lithium Co. mine
Sfe%santafeite%%
Sff%stöfflerite%%Northwest Africa 856
Sfg%shuangfengite%%
Sfl%schieffelinite%%Joe mine
Sflr%strontiofluorite%%Koashva open pit
Sfn%shafranovskite%%Karnasurt mine, Karnasurt mount|Mount Rasvumchorr
Sfr%schäferite%%Caspar quarry
Sfs%schoenfliesite%%
Sft%seifertite%%Shergotty meteorite
Sfw%samfowlerite%%Franklin
Sfz%schafarzikite%%
Sga%shigaite%%
Sgar%sangenaroite%%San Genaro mine
Sge%sergeevite%%
Sgg%spriggite%%Mount Painter
Sgh%stringhamite%%
Sgi%sengierite%%
Sgk%sugakiite%%Horoman mine, Horoman peridotite body
Sgl%segelerite%%Tip Top mine
Sgm%shagamite%%Hatrurim Basin
Sgn%syngenite%%
Sgnr%strontioginorite%%
Sgo%stergiouite%%
Sgr%steigerite%%San Miguel County
Sgs%stangersite%%
Sgt%segnitite%%Kintore opencut, Broken Hill South mine
Sgu%sanguite%%Tenoritovaya fumarole
Sgv%sergevanite%%Mount Karnasurt
Sh%schuetteite%%
Shb%schubnelite%%Mounana mine
Shbys%sulfhydrylbystrite%%minerals of Slyudyanka
Shc%shcherbinaite%%Bezymianny
Shd%steinhardtite%%Khatyrka meteorite
She%schertelite%%
Shg-Nd%schuilingite-(Nd)%%Kasompi mine
Shh%schumacherite%%Wolfgang Maassen mine field
Shil%shilovite%%Pabellón de Pica
Shk%shirokshinite%%Kirovskii apatite mine
Shl%sinhalite%%Sri Lanka
Shm-Ce%sahamalite-(Ce)%%
Shmn%shimenite%%
Shn%schachnerite%%Moschel mountain
Sho%schoepite%%Shinkolobwe mine
Shom-Y%shomiokite-(Y)%%Umbozero mine
Shp%Sharpite%%Shinkolobwe mine
Shr%schairerite%%Searles Lake
Shrb%strontiohurlbutite%%Xikeng mine
Shs%shasuite%%Halamish wadi
Sht%schaurteite%%Tsumeb mine
Shu%stenhuggarite%%Långban
Shv%schiavinatoite%%
Shy%silhydrite%%
Shz%scheuchzerite%%Fianel mine
Si%silicon (native)%%
Sib%sibirskite%%
Sic%sicherite%%Lengenbach quarry
Sid%siderophyllite%%Pikes Peak
Sido%sidorovite%%
Sie%sieleckiite%%
Sig%sigloite%%Siglo Veinte mine
Sigm%sigismundite%%
Sii%siidraite%%Broken Hill
Sil%sillimanite%%
Sim%simmonsite%%
Sin%sinnerite%%Lengenbach quarry
Sit%sitinakite%%Kirovskii apatite mine|Mount Yukspor
Siu%siudaite%%Mount Eveslogchorr
Siw%siwaqaite%%Daba-Siwaqa complex
Sjal%selenojalpaite%%Skrikerum mine
Sjk%seinäjokite%%
Sjn%sanjuanite%%
Sk%shakhovite%%Khaidarkan
Ska%sinkankasite%%
Skc%smrkovecite%%Smrkovec
Skd-Y%shakhdaraite-(Y)%%Leskhozovskiy granitic pegmatite
Ske%starkeyite%%
Skg%skaergaardite%%Skaergaard intrusion
Skhv%strakhovite%%
Ski%skinnerite%%Kangerluarsuk fjord, Ilímaussaq
Skk%shkatulkalite%%Umbozero mine
Skl%simonkolleite%%
Skn%sekaninaite%%
Sko%shibkovite%%Darai-Pioz glacier
Skp%skippenite%%
Skr%skorpionite%%Skorpion zinc deposit
Sks%stokesite%%
Skt%skutterudite%%Skutterud mines
Skv%shlykovite%%Tsentral'nyi mine
Skw%Shinkolobweite%%Shinkolobwe mine
Sky%szklaryite%%Szklary pegmatite
Sl%sclarite%%Franklin
Sla%shulamitite%%Hatrurim formation
Slb%schulenbergite%%
Slc%scolecite%%
Sld%stalderite%%Lengenbach quarry
Sle%searlesite%%Searles Lake
Slf%sailaufite%%Fuchs quarry, Hartkoppe|Starlera mine
Slg%sterlinghillite%%Sterling Hill
Slh%schöllhornite%%Norton County meteorite
Slhl%sulphohalite%%Searles Lake
Sli%seeligerite%%Caracoles
Slk%strelkinite%%Bota-Burum uranium deposit|Kendyktas Mountains
Sll%stilleite%%Shinkolobwe mine
Slm%schlemaite%%Shaft 371
Sln%silinaite%%Poudrette quarry
Slo%schorlomite%%Magnet Cove igneous complex
Slp%stolperite%%Khatyrka meteorite
Slr%schallerite%%Franklin
Slrt%selenolaurite%%
Sls%salesite%%Chuquicamata
Slt%schultenite%%Tsumeb mine
Slu%shadlunite%%Mayak mine
Slv%silvialite%%
Slw%stillwaterite%%Stillwater igneous complex
Sly%satterlyite%%
Slz%scholzite%%Cornelia shaft, Hagendorf South open cut
Slé%saléeite%%Weisser Hirsch mine
Slü-Y%schlüterite-(Y)%%Stetind pegmatite
Sma%sanmartinite%%
Smd%schmidite%%Cornelia shaft, Hagendorf South open cut
Smf%simferite%%
Smi%sarmientite%%Calingasta
Sml%strontiomelane%%
Smm%smamite%%Giftgrube mine
Smn%samaniite%%Horoman mine, Horoman peridotite body
Smo%simonite%%Allchar deposit
Smp%sampleite%%Chuquicamata
Smr%smirnite%%
Sms%samuelsonite%%Palermo No. 1 mine
Smt%smithsonite%%
Smv-Ce%semenovite-(Ce)%%Taseq area
Smw%shumwayite%%Giveway-Simplot mine|Green Lizard mine
Smy%stromeyerite%%
Smz%shimazakiite%%Fuka mine
Sn%tin (native)%%Miass Placer Zone
Sna%senaite%%
Snat%sideronatrite%%
Snb%schneebergite%%Roter Berg
Snc%spheniscidite%%
Snd%shandite%%
Sne%simonellite%%
Sng%senegalite%%
Snh%schneiderhöhnite%%Tsumeb mine
Sni%spertiniite%%Jeffrey mine
Snj%sinjarite%%
Snl%sonolite%%
Snm%steinmetzite%%Cornelia shaft, Hagendorf South open cut
Snn%shannonite%%Grand Reef mine
Sno%sinoite%%
Snr%saneroite%%Valgraveglia mine
Sns%stronalsite%%
Snt%santite%%Larderello
Sny%scrutinyite%%
Snz%strunzite%%Cornelia shaft, Hagendorf South open cut
Sod%soddyite%%Shinkolobwe mine
Sof%sofiite%%Tolbachik
Sog%sogdianite%%Darai-Pioz glacier
Sok%sokolovaite%%Darai-Pioz glacier
Sol%solongoite%%Solongo boron deposit
Son%sonoraite%%Moctezuma mine
Soo%schoonerite%%Palermo No. 1 mine
Sop%sopcheite%%Monche-tundra
Sor%sorosite%%
Sos%sosedkoite%%Voron'i tundry
Sot%shortite%%Green River formation (Sweetwater Co.)
Sou%souzalite%%Córrego Frio mine
Sov%sobolevskite%%Oktyabr'skoe Cu-Ni deposit
Sp%sphalerite%%
Spd%spodumene%%Utö nature reserve
Spdn%stannopalladinite%%Norilsk
Spe%serpierite%%Serpieri mine
Spf%spiroffite%%Moctezuma mine
Spg%spangolite%%
Sph%stephanite%%
Spi%spionkopite%%Yarrow Creek-Spionkop Creek deposit
Spl%espinela%%
Splb%selenopolybasite%%Owyhee County
Splf%strontioperloffite%%Spring Creek mine
Spn%simpsonite%%
Spo%simplotite%%Peanut Mine
Spp%stoppaniite%%Lake Vico
Spr%sapphirine%%
Sps%spessartine%%
Spsd%strontiopharmacosiderite%%
Spti%spaltiite%%Lengenbach quarry
Spu%spurrite%%
Spy%sperrylite%%Vermilion mine
Spz%sapozhnikovite%%Mount Karnasurt
Sra%serrabrancaite%%Serra Branca pegmatite
Srb%sorbyite%%Taylor pit
Srbo%strontioborite%%Chelkar salt dome
Src%saranchinaite%%Naboko cinder cone
Srd%serandite%%Rouma Island
Srdm%sulfatoredmondite%%Redmond Mine
Sre%srebrodolskite%%Kopeysk
Srg%sborgite%%Larderello
Sri%srilankite%%Rakwana
Srk%sarkinite%%Harstigen mine
Srl%schorl%%
Srm%sanrománite%%Santa Rosa mine
Srn%sternbergite%%Jáchymov
Sro%starovaite%%Yadovitaya fumarole
Srr%sterryite%%Taylor pit
Srs%santarosaite%%Santa Rosa mine
Srt%scorticoite%%Scortico Mn ore deposit
Sru%shinarumpite%%Scenic mine
Srv%spiridonovite%%Good Hope mine
Sry%schreyerite%%
Srz%strontioruizite%%
Srä%strätlingite%%Bellerberg volcano
Srö%schröckingerite%%Svornost mine
Ss%sursassite%%Parsettens Alp
Ssa%silesiaite%%Szklarska Poręba Huta quarry
Ssb%shosanbetsuite%%Minamichiyoda
Sse%somersetite%%Torr Works
Ssh%strashimirite%%
Ssk%stranskiite%%Tsumeb mine
Ssn%samsonite%%Samson Pit
Sso%sassolite%%Sasso Pisano
Ssp-Ce%steenstrupine-(Ce)%%Kangerluarsuk fjord, Ilímaussaq
Ssph%selenostephanite%%
Ssr%segerstromite%%
Sss%suessite%%
Sst%stistaite%%
Ssv%sergeysmirnovite%%Kester tin deposit
Ssx%sussexite%%Franklin|Trotter mine
Ssy%semseyite%%
St%staurolite%%
Sta%stannoidite%%
Stb-Ca%stilbite-Ca%%France|Germany|Iceland|Norway
Stb-Na%stilbite-Na%%
Stbv%stibivanite%%Buca della Vena mine
Stc%stercorite%%
Std-Ce%stetindite-(Ce)%%Stetind pegmatite
Stdl%steudelite%%
Ste%stellerite%%
Sten%stenonite%%Ivigtuut cryolite deposit
Stf%stanfieldite%%Estherville
Stg%strengite%%Eleonore mine
Sth%smithite%%Lengenbach quarry
Sti%stishovite%%
Stk%staněkite%%
Stl%stanleyite%%
Stm%stumpflite%%Bushveld igneous complex
Stn%stannite%%
Sto%stottite%%Tsumeb mine
Stp%stilpnomelane%%
Stpdn%stibiopalladinite%%Bushveld igneous complex
Stpn%stepanovite%%
Str%strontianite%%Strontian
Stra%stracherite%%Hatrurim Basin
Strm%sturmanite%%
Strp%steropesite%%La Fossa crater
Sts%saltonseaite%%Salton Sea
Stsm%sulphotsumoite%%
Sttl%stibiotantalite%%
Stu%studtite%%Shinkolobwe mine
Stw%stewartite%%Stewart mine
Sty%scottyite%%Wessels mine
Su%suredaite%%Pirquitas Ag-Sn deposit
Sua%suanite%%
Sue%suenoite%%Scortico Mn ore deposit
Sug%sugilite%%Iwagi islet
Suh%suhailite%%Fuengirola
Sui-Cr%shuiskite-(Cr)%%Saranovskii Mine
Sui-Mg%shuiskite-(Mg)%%
Sul%sulvanite%%
Sum%surinamite%%
Sun%sundiusite%%Långban
Suo%suolunite%%
Sur%surite%%Cruz del Sur mine
Sus%susannite%%Susanna mine
Suv%struvite%%
Suv-K%struvite-(K)%%Lengenbach quarry
Suz%suzukiite%%
Sv%sveite%%Cerro Autana
Sva%svabite%%Harstigen mine
Sve%sveinbergeite%%
Svg%sverigeite%%Långban
Svi%sudovikovite%%Velikaya Guba uran-vanadium deposit
Svk%shchurovskyite%%Arsenatnaya fumarole
Svl%svetlanaite%%Ozernovskoe deposit
Svlv%savelievaite%%
Svn%selivanovaite%%Mount Alluaiv
Svo%svornostite%%Svornost mine
Svr%steverustite%%Frongoch mine
Svs%saranovskite%%Saranovskii Mine
Svt-La%stavelotite-(La)%%Salmchâteau
Svv%shuvalovite%%Arsenatnaya fumarole
Svy%svyatoslavite%%Kopeysk
Svz%svyazhinite%%Ilmen Nature Reserve
Sw%sweetite%%Ashover
Swb%schwartzembergite%%
Swd%sherwoodite%%
Swe%swedenborgite%%Långban
Swht%strontiowhitlockite%%Kovdor Zheleznyi mine
Swi%stefanweissite%%
Swk%swaknoite%%
Swl-Ce%stillwellite-(Ce)%%
Swm%schwertmannite%%
Swnc%scandio-winchite%%
Sws%slawsonite%%
Swy%selwynite%%Wycheproof
Swz%swartzite%%Hillside mine
Sy%symesite%%Torr Works
Sya%smolyaninovite%%Khovu-Aksy
Syd%synadelphite%%Moss mine, Nordmark Odal field
Syg%sharyginite%%Caspar quarry
Syi%spryite%%Uchucchacua
Syk-Y%saryarkite-(Y)%%
Syl%sylvite%%Mount Vesuvius
Sym%symplesite%%
Syn-Ce%synchysite-(Ce)%%Narsaarsuk pegmatite
Syn-Nd%synchysite-(Nd)%%
Syn-Y%synchysite-(Y)%%
Syr%sayrite%%Shinkolobwe mine
Syt%smythite%%
Syv%sylvanite%%
Sz%stolzite%%
Sza%szaibélyite%%Băița
Szb%salzburgite%%Western ore field, scheelite deposit
Sze%szenicsite%%
Szh%shenzhuangite%%Suizhou
Szhi%sluzhenikinite%%Norilsk
Szi-Ce%sazhinite-(Ce)%%Karnasurt mine, Karnasurt mount
Szi-La%sazhinite-(La)%%Aris quarries
Szk%straczekite%%
Szl%schizolite%%Wessels mine
Szm%szmikite%%
Szn-Y%sazykinaite-(Y)%%Koashva open pit
Szo%szomolnokite%%
Szu%shirozulite%%Taguchi mine
Szy%szymańskiite%%Clear Creek claim
Sßm%straßmannite%%Green Lizard mine
Sén%sillénite%%
Söh%söhngeite%%Tsumeb mine
Sør%sørensenite%%Kvanefjeld|Taseq area
Súč%stibioústalečite%%
Sče%součekite%%
Sčk%staročeskéite%%Kutná Hora District
Tad-Ce%tadzhikite-(Ce)%%Darai-Pioz glacier
Tae%taenite%%
Taes-Y%tantalaeschynite-(Y)%%
Tag%thermaerogenite%%Arsenatnaya fumarole
Tai%tainiolite%%Narsaarsuk pegmatite
Tam%tamaite%%Shiromaru mine
Tan%tantite%%
Tap-Fe%tapiolite-(Fe)%%
Tap-Mn%tapiolite-(Mn)%%
Tar%taranakite%%
Tas%tassieite%%Johnston Firth
Tat%tatarinovite%%
Tau%tausonite%%Murunskii massif
Taur%tetra-auricupride%%
Tav%tavorite%%Sapucaia mine
Taz%tazheranite%%
Tba%trembathite%%Clover Hill deposit
Tbc%tolbachite%%First scoria cone
Tbd%tiberiobardiite%%
Tbg%tarbagataite%%Verkhnee Espe massif
Tbh-Ce%törnebohmite-(Ce)%%Bastnäs
Tbh-La%törnebohmite-(La)%%Mochalin Log REE deposit
Tbi%tellurobismuthite%%
Tbk%trebiskyite%%Pickett Corral Number Two Mine
Tbl%tobelite%%
Tbs%tombstoneite%%Contention-Grand Central mine group
Tbsn%thorbastnäsite%%Sangilen Upland
Tbt%tarbuttite%%Kabwe
Tby%thunderbayite%%Hemlo gold deposit
Tca-Ce%tancaite-(Ce)%%Punta de Su Seinargiu
Tcb%tantalcarbide%%Avrorinskii placer, Aktai river, Baranchinsky massif
Tcg%tengchongite%%
Tch%tacharanite%%Portree
Tck%terlinguacreekite%%Mariposa mine
Tcl-Y%thomasclarkite-(Y)%%Poudrette quarry
Tco%tancoite%%
Tdf%tischendorfite%%Tilkerode
Tdg%threadgoldite%%Kobokobo open pit
Tdn%tangdanite%%Tangdan and Nanniping mines
Tdo%trigodomeykite%%
Tdr%todorokite%%
Tdx%tredouxite%%Bon Accord nickel deposit
Te%tellurium%%Zlatna
Tea%tellurantimony%%
Ted%tedhadleyite%%Clear Creek claim
Tee%teepleite%%
Tei%teineite%%Teine mine
Tel%teallite%%
Tem%temagamite%%Copperfields mine
Tep%tephroite%%Sterling Hill
Ter%terskite%%Karnasurt mine, Karnasurt mount|Mount Alluaiv
Tfann%tetraferriannite%%
Tfn%thalfenisite%%Oktyabr'skoe Cu-Ni deposit
Tfphl%tetraferriphlogopite%%Kovdor Zheleznyi mine
Tfpt%tetraferroplatinum%%
Tg%tangeite%%
Tga%tiragalloite%%Molinello mine
Tgb%tongbaite%%Tongbai County
Tge%trögerite%%Walpurgis Flacher vein
Tgg%teruggite%%
Tgl%tsumgallite%%Tsumeb mine
Tgn%trigonite%%Långban
Tgs%tungstite%%
Tgt%tungstenite%%
Tgu%tungusite%%Evenkiysky District
Tha%thalhammerite%%Komsomol'skii mine
Thau%tellurohauchecornite%%Strathcona mine
Thb-NH4%thebaite-(NH4)%%Rowley mine
Thd%thadeuite%%Panasqueira
The%therasiaite%%La Fossa crater
Thg%tashelgite%%Tashelginskoe formation
Thi%tochilinite%%
Thk%thorikosite%%Laurium
Thl%thalcusite%%Mayak mine
Thlt%titanoholtite%%Szklary pegmatite
Thm-Ca%thomsonite-Ca%%Old Kilpatrick
Thm-Sr%thomsonite-Sr%%Mount Rasvumchorr|Mount Yukspor
Thn%thénardite%%
Tho%thorianite%%Ratnapura district
Thp%theoparacelsite%%Roua mines
Thr%thorite%%
Ths%theisite%%
Tht%tschörtnerite%%Caspar quarry
Thu%thorutite%%
Thy%tachyhydrite%%Staßfurt
Ti%titanium (native)%%Luobusa ore district
Tik%tikhonenkovite%%Karasug REE-Sr-Ba-Fe-fluorite deposit
Til%tilasite%%Långban
Till%tillmannsite%%Roua mines
Tim%timroseite%%Aga mine|Bird Nest drift
Tin%tinsleyite%%Tip Top mine
Tis%tisinalite%%Koashva open pit
Tiv%tivanite%%Golden Mile mines
Tjc%taniajacoite%%Nchwaning mines
Tjrd%transjordanite%%Halamish wadi|northeastern Hatrurim formation, Jordan
Tka%taikanite%%
Tkd%takedaite%%Fuka mine
Tkn%takanelite%%
Tkr%tilkerodeite%%Tilkerode
Tks%trikalsilite%%
Tkt%turkestanite%%Darai-Pioz glacier
Tkv%takovite%%Takovo
Tkw-Y%takanawaite-(Y)%%
Tky%tokyoite%%Shiromaru mine
Tké%takéuchiite%%Långban
Tla%tlalocite%%Oriental mine
Tlc%talc%%
Tlg%terlinguaite%%Terlingua district
Tli%tuliokite%%Kirovskii apatite mine
Tlk%talnakhite%%Severniy mine|Talnakh ore field
Tll%trolleite%%
Tlm%talmessite%%Talmessi mine
Tlp%telargpalite%%Komsomol'skii mine
Tlr%tellurite%%
Tls%tolstykhite%%
Tlu%tululite%%Tulul al Hammam
Tly%tilleyite%%Crestmore quarries
Tma%thaumasite%%Åreskutan
Tmb%tamboite%%Tambo mine
Tmc%tsumcorite%%Tsumeb mine
Tmda%telluromandarinoite%%Tambo mine
Tme%trimerite%%Harstigen mine
Tmel%taramellite%%Candoglia
Tmh%teschemacherite%%
Tmi%tschermigite%%
Tml%thalliomelane%%Zalas, Lesser Poland Voivodeship
Tmm%tomamaeite%%Tomamae
Tmn%tiemannite%%St Lorenz mine
Tmo-Y%trimounsite-(Y)%%
Tmr%tamarugite%%
Tms%thermessaite%%La Fossa crater
Tms-NH4%thermessaite-(NH4)%%La Fossa crater
Tmu%tamuraite%%
Tmy%taimyrite%%Mayak mine
Tmz%thometzekite%%Tsumeb mine
Tn%trona%%
Tna%thornasite%%Poudrette quarry
Tnat%thermonatrite%%Russia
Tnc%tincalconite%%Searles Lake
Tnd-Ce%tundrite-(Ce)%%Lepkhe-Nel'm mountain
Tnd-Nd%tundrite-(Nd)%%
Tne%thorneite%%Bird Nest drift
Tng%tsnigriite%%
Tnh%tanohataite%%Tanohata mine
Tni%tschernichite%%Neer road
Tnk%tinaksite%%Murunskii massif
Tnl%tunellite%%Pacific Coast Borax Company
Tnn%tinnunculite%%Mount Rasvumchorr
Tno%ternovite%%Vuoriyarvi alkaline-ultrabasic massif
Tnph%trinepheline%%Hpakant-Tawmaw jade tract
Tnr%tenorite%%Mount Vesuvius
Tns%ternesite%%Caspar quarry
Tnt-Cd%tennantite-(Cd)%%
Tnt-Cu%tennantite-(Cu)%%
Tnt-Hg%tennantite-(Hg)%%Lengenbach quarry
Tnt-Ni%tennantite-(Ni)%%Luobusa ore district
Tnv%terranovaite%%Adamson
Tnvk%telluronevskite%%Poruba pod Vihorlatom
Tny%taneyamalite%%
Toe%tooeleite%%
Toi%tomiolloite%%Moctezuma mine
Tok%tokkoite%%Murunskii massif
Tol%tolovkite%%
Tom%tomichite%%Golden Mile mines
Ton%tondiite%%Mount Vesuvius
Top%topsøeite%%Hekla
Tor%torbernite%%Johanngeorgenstadt
Tos%tosudite%%
Tot%toturite%%Mount Lakargi
Tou%tounkite%%minerals of Slyudyanka
Tp%thorasphite%%Elsmore tin mine
Tpc%tarapacáite%%Oficina Maria Elena
Tpd%triploidite%%Fillow quarry
Tpdn%telluropalladinite%%Stillwater igneous complex
Tpg-Ce%taipingite-(CeCa)%%Taiping town deposit
Tph%theophrastite%%
Tpi%tapiaite%%Jote mine
Tpk%trippkeite%%
Tpl%tlapallite%%Oriental mine
Tpo%tsangpoite%%D'Orbigny meteorite
Tpr%telluroperite%%Bird Nest drift
Tpsd%thalliumpharmacosiderite%%Allchar deposit
Tpt%tiptopite%%Tip Top mine
Tpz%topaz%%
Tqu%turquoise%%
Tra%trattnerite%%Stradner Kogel
Trb%trabzonite%%
Trc%torrecillasite%%Torrecillas mine
Trd%tridymite%%Mount San Cristóbal
Tre%thoreaulite%%
Trg%trogtalite%%Trogtal quarries, Lautenthal
Trh%trechmannite%%Lengenbach quarry
Tri%triangulite%%Kobokobo open pit
Trk%tarkianite%%Hitura mine
Trl%triplite%%Razès
Trn%turanite%%
Tro%troilite%%Albareto meteorite
Troo%tetrarooseveltite%%
Trp%triphylite%%Hennenkobel
Trq%tranquillityite%%
Trr%turneaureite%%Franklin|Långban|ZCA No. 4 mine
Trs%törnroosite%%
Trv%trevorite%%Bon Accord nickel deposit
Try%torreyite%%Sterling Hill
Tré%trébeurdenite%%
Trü%trüstedtite%%
Tsa%tsaregorodtsevite%%
Tsb%tungstibite%%Clara mine
Tsc%tschaunerite%%Shergotty meteorite
Tse%thomsenolite%%Ivigtuut cryolite deposit
Tsh%Tienshanite%%Darai-Pioz glacier
Tsi%tsikourasite%%Aghio Stefanos mine
Tsk%traskite%%Esquire no. 1 claim
Tsl%tsilaisite%%San Piero in Campo
Tsm%tsumoite%%
Tsn%tusionite%%Tusion river valley
Tsp-Ca%tsepinite-Ca%%Hackman valley
Tsp-K%tsepinite-K%%Mount Karnasurt
Tsp-Na%tsepinite-Na%%Lepkhe-Nel'm mountain|Mount Khibinpakhkchorr
Tsp-Sr%tsepinite-Sr%%Mount Eveslogchorr
Tsq%taseqite%%Taseq area
Tss%tissintite%%Tissint meteorite
Tssp%thorosteenstrupine%%
Tst%truscottite%%
Tsu%tsumebite%%Tsumeb mine
Tsur%treasurite%%Treasury Vault mine
Tsy%tsygankoite%%Vorontsovskoe gold deposit
Tt%turtmannite%%Turtmanntal
Tta%tistarite%%Allende meteorite
Ttae%tetrataenite%%Estherville
Ttc%tinticite%%Tintic Standard mines
Ttd%tetradymite%%
Tti%tintinaite%%Watson Lake
Ttl-Fe%tantalite-(Fe)%%
Ttl-Mg%tantalite-(Mg)%%
Ttl-Mn%tantalite-(Mn)%%Utö nature reserve
Ttm%tristramite%%
Ttmel%titantaramellite%%Baumann prospect, Dumtah|Esquire No. 7 claim|Esquire no. 1 claim|Gun claim|Madrelena mine, Tres Pozos|Santa Cruz|Trumbull peak
Ttn%titanite%%Hauzenberg|Putnam County|St. Lawrence County
Tto-Ce%tritomite-(Ce)%%Låven island
Tto-Y%tritomite-(Y)%%
Ttp%tugtupite%%Tunulliarfik fjord
Ttr-Hg%tetrahedrite-(Hg)%%Buca della Vena mine|Jedová hora deposit|Rožňava deposit
Ttr-Mn%tetrahedrite-(Mn)%%Teine mine
Ttr-Ni%tetrahedrite-(Ni)%%Luobusa ore district
Ttrs%tartarosite%%
Tts%tatarskite%%Chelkar salt dome
Ttt-Y%tveitite-(Y)%%
Ttwdg%tantalowodginite%%
Ttx-Y%tanteuxenite-(Y)%%
Tty%tatyanaite%%Oktyabr'skoe Cu-Ni deposit
Tu%tuite%%Suizhou
Tub%tubulite%%Borgofranco d'Ivrea|Peyrebrune
Tug%tugarinovite%%
Tuh%tuhualite%%
Tul%tulameenite%%
Tum%tumchaite%%Vuoriyarvi alkaline-ultrabasic massif
Tun%tunisite%%
Tup%tuperssuatsiaite%%Tuperssuatsiat bay
Tus%tuscanite%%Case Collina
Tuz%tuzlaite%%
Tuč%tučekite%%
Tva%tvalchrelidzeite%%
Tve%tvedalite%%Tvedalen
Tvg%tavagnascoite%%Tavagnasco mines
Tvr%tvrdýite%%Huber stock
Tvt%thortveitite%%
Tw%tewite%%
Twdg%titanowodginite%%Tanco mine
Twe%tweddillite%%Wessels mine
Twi%twinnite%%Taylor pit
Twl%terrywallaceite%%
Twm%tetrawickmanite%%Foote Lithium Co. mine
Twn%townendite%%Kvanefjeld
Ty%tyrrellite%%Beaverlodge Lake
Tyc%tychite%%Searles Lake
Tyl%tyrolite%%
Tyr%tyretskite%%
Tys%telyushenkoite%%Darai-Pioz glacier
Tyu%tyuyamunite%%
Tyw%torryweiserite%%Marathon deposit
Tzf%tazieffite%%Mutnovsky
Tzl%triazolite%%Pabellón de Pica
Tzo%tazzoliite%%
Uaa%uramarsite%%Bota-Burum uranium deposit
Uak%uakitite%%Uakit meteorite
Uap%uramphite%%
Ubn%umbrianite%%Vispi quarry, Pian di Celle volcano
Ubo%uralborite%%Novofrolovskoye boron-copper deposit
Ubz%umbozerite%%Mount Karnasurt
Uca%urancalcarite%%Shinkolobwe mine
Uch%uchucchacuaite%%Uchucchacua
Udn%udinaite%%Arsenatnaya fumarole
Ued-Ce%uedaite-(Ce)%%Shōdo Island
Ugm%ungemachite%%Chuquicamata
Ugv%ungavaite%%Mesamax Northwest deposit
Ukv%ushkovite%%Bol'shoi Tatkul' lake
Ulf-Ce%ulfanderssonite-(Ce)%%Malmkärra mine
Ull%ullmannite%%
Ulr%ulrichite%%Lake Boga granite quarry
Ulx%ulexite%%Iquique Province
Um%umangite%%Las Asperezas mine|Trogtal quarries, Lautenthal
Umb%umbite%%Vuonnemiok river valley
Umo%umohoite%%
Up%uranopilite%%Johanngeorgenstadt|Jáchymov
Upa%upalite%%Kobokobo open pit
Uplc%uranopolycrase%%San Piero in Campo
Ur%urea%%Lake Rason
Urc%uranocircite%%Bergen
Uri%uricite%%Dingo Donga cave
Url%uralolite%%
Urn%uraninite%%Jáchymov
Uro%uranoclite%%Blue Lizard mine
Urp%uranophane%%Miedzianka, Lower Silesian Voivodeship
Urv%urvantsevite%%Mayak mine
Urx%uroxite%%Burro mine|Markey mine
Us%uranosphaerite%%Walpurgis Flacher vein
Usg%ussingite%%Kangerluarsuk fjord, Ilímaussaq
Ush%uranospathite%%
Usi%uranosilite%%Krunkelbach valley uranium deposit
Usp%uranospinite%%Walpurgis Flacher vein
Uspl%ulvöspinel%%
Ust%usturite%%Mount Lakargi
Usv%usovite%%Yenisei Range
Utgs%uranotungstite%%Clara mine|Krunkelbach valley uranium deposit
Uusv%urusovite%%Novaya fumarole
Uv%uvarovite%%Saranovskii Mine
Uvt%uvite%%Facciatoia quarry
Uyt%uytenbogaardtite%%Storey County|Tambang Saweak|Zmeinogorsky District
Uzn%uzonite%%Uzon
V%vanadium (native)%%Colima
Va%vaesite%%Kasompi mine
Vaj%vajdakite%%Svornost mine
Val%valleriite%%
Valn-La%vanadoallanite-(La)%%Unnamed manganese deposit, Shobu
Var%variscite%%
Vas%vasilseverginite%%Arsenatnaya fumarole
Vav%vavřínite%%
Vbd%vandenbrandeite%%
Vbk%verbeekite%%Musonoi mine
Vbo%volborthite%%
Vbr%verbierite%%Savoleyres
Vbz%vonbezingite%%Wessels mine
Vcar%vanadiocarpholite%%Molinello mine
Vcn%vinciennite%%
Vda-Ce%vanadoandrosite-(Ce)%%
Vdd%vandendriesscheite%%Shinkolobwe mine
Vdy%vladykinite%%Malyi Murun massif|Murunskii massif
Vea%veatchite%%
Veb%veblenite%%Letitia Lake
Vee%veenite%%Taylor pit
Vel%velikite%%Khaidarkan
Ven%vendidaite%%La Vendida mine
Ver%verneite%%Eldfell|Hekla|Mount Vesuvius
Ves%vesuvianite%%Mount Somma
Vg%vargite%%Långban
Vgd%vinogradovite%%Lepkhe-Nel'm mountain
Vgh%vaughanite%%
Vgl%voglite%%Elias mine
Vgn%vuagnatite%%
Vgs%vergasovaite%%Second scoria cone
Vgz%vigezzite%%
Vhf%vanthoffite%%Wilhelmshall, Halberstadt
Vhg%vashegyite%%Železník
Vhn%vishnevite%%Ilmen Nature Reserve|Vishnevye mountains
Vhy%vanderheydenite%%Block 14 opencut, Broken Hill mine
Via%viaeneite%%
Vic-Ce%vicanite-(Ce)%%Tre Croci railway halt
Vih%vihorlatite%%Poruba pod Vihorlatom
Vim%vimsite%%Novofrolovskoye boron-copper deposit
Vin%vincentite%%
Vio%violarite%%Kryvbas|Vermilion mine
Vir%virgilite%%
Vis%vismirnovite%%Mushiston tin deposit
Vit%viteite%%Monchetundra ore field
Viv%vivianite%%
Vkg%vikingite%%Ivigtuut cryolite deposit
Vkv%vladkrivovichevite%%Kombat
Vla%vladimirivanovite%%Shakhdara Range|minerals of Slyudyanka
Vlk%volkovskite%%Clover Hill deposit|Inder Lake
Vll%villiaumite%%Rouma Island
Vln%valentinite%%
Vlo%vlodavetsite%%Second scoria cone
Vls%voloshinite%%Voron'i tundry
Vlt%voltaite%%Pozzuoli
Vlv%veselovskýite%%Jáchymov
Vly%valleyite%%Menan volcanic complex
Vme%vandermeerscheite%%Schellkopf
Vml-Ce%västmanlandite-(Ce)%%Malmkärra mine
Vmly%vanadomalayaite%%Valgraveglia mine
Vms%vanmeersscheite%%Kobokobo open pit
Vna%vanadinite%%Zimapán
Vnk%vanackerite%%Tsumeb mine
Vnl%vanalite%%Kurumsak vanadium deposit
Vnn%vaniniite%%Falotta
Vnr%vanuralite%%Mounana mine
Vns%vanarsite%%Packrat mine, Gateway
Vnx%vanoxite%%Jo Dandy Hill|Wild Steer canyon
Voc%vochtenite%%
Vocdrv%vanadio-oxy-chromium-dravite%%Pereval marble quarry
Vodrv%vanadio-oxy-dravite%%Pereval marble quarry
Vog%voggite%%Francon quarry
Vol%volynskite%%
Von%vonsenite%%
Vor%vorontsovite%%Vorontsovskoe gold deposit
Vou%voudourisite%%Esperanza mine
Voz%vozhminite%%Vozhminskii massif
Vpk%verplanckite%%Big Creek|Esquire No. 7 claim
Vpn%vapnikite%%Jabel Harmun
Vprg%vanadio-pargasite%%Pereval marble quarry
Vql%vauquelinite%%Beryozovskoye deposit
Vrb%vrbaite%%Allchar deposit
Vrk%voronkovite%%Mount Alluaiv
Vrl%vorlanite%%Mount Lakargi
Vrm%vermiculite%%Millbury
Vrn%varennesite%%Demix-Varennes quarry, Saint-Amable sill
Vrá%vránaite%%Sahatany valley
Vs%vasilite%%
Vsg%vésigniéite%%Glücksstern mine, Gottlob hill
Vsh%volaschioite%%Fornovolasco
Vsl%versiliaite%%Buca della Vena mine
Vst%vestaite%%Northwest Africa 8003
Vsv%vlasovite%%Lovozero massif
Vsy%vasilyevite%%Clear Creek claim
Vsz%veszelyite%%
Vti%vitimite%%Solongo boron deposit
Vtk%vittinkiite%%Vittinki iron mines
Vtm%viitaniemiite%%Viitaniemi granite pegmatite
Vtn%vertumnite%%
Vtp%vistepite%%
Vtr%vaterite%%
Vts%vantasselite%%
Vtu-Ce%vitusite-(Ce)%%Karnasurt mine, Karnasurt mount|Kvanefjeld
Vul%vulcanite%%Good Hope mine
Vuo%vuorelainenite%%
Vur%vurroite%%La Fossa crater
Vx%vauxite%%Siglo Veinte mine
Vy%villyaellenite%%
Vya%vyacheslavite%%
Vyl%vyalsovite%%Komsomol'skii mine
Vym%vymazalováite%%Komsomol'skii mine
Vys%vysokýite%%Svornost mine
Vyu-Y%vyuntspakhkite-(Y)%%Mount Ploskaya
Vyv-K%vuoriyarvite-K%%Vuoriyarvi alkaline-ultrabasic massif
Väy%väyrynenite%%Viitaniemi granite pegmatite
W%tungsten (native)%%
Wa%watanabeite%%
Wad%wadeite%%
Wai-Y%waimirite-(Y)%%Pitinga mine
Wak%wakabayashilite%%
Wal%wallisite%%Lengenbach quarry
War%warikahnite%%Tsumeb mine
Was%wassonite%%Yamato 691
Wat%watkinsonite%%
Wav%wavellite%%Filleigh
Waw%wawayandaite%%Franklin
Way%waylandite%%
Wbh%wayneburnhamite%%Crestmore quarries
Wbn%weinebeneite%%spodumene prospect
Wbu%wickenburgite%%
Wck%wilancookite%%Itinga
Wcp%whitecapsite%%White Caps mine
Wct%wildcatite%%Wildcat project
Wcx%wilcoxite%%Lone Pine mine
Wd%wardite%%Clay canyon, Fairfield
Wda%wildenauerite%%Cornelia shaft, Hagendorf South open cut
Wdd%wangdaodeite%%Suizhou
Wdg%wodginite%%Tanco mine|Wodgina mine
Wdl%wadalite%%
Wdm%widenmannite%%Michael mine, Weiler
Wdr%woodruffite%%Sterling Hill
Wds%wadsleyite%%Peace River meteorite
Wdw%wendwilsonite%%Bou Azer district|Sterling Hill
Web%weberite%%Ivigtuut cryolite deposit
Wed%weddellite%%
Weg%wegscheiderite%%Green River formation (Sweetwater Co.)
Wei%weilite%%Mount Neuenberg silver mines|Schneeberg ore district|Wittichen
Wel%welshite%%Långban
Wen%wenkite%%Candoglia
Wes%wesselsite%%Wessels mine
Wet%wetherillite%%Blue Lizard mine
Wf-Ce%wakefieldite-(Ce)%%Kobokobo open pit
Wf-La%wakefieldite-(La)%%Glücksstern mine, Gottlob hill
Wf-Nd%wakefieldite-(Nd)%%Kōchi Prefecture
Wf-Y%wakefieldite-(Y)%%Evans-Lou mine
Wfd%walfordite%%Tambo mine
Wfg%wülfingite%%
Wgh%wrightite%%Second scoria cone
Wgj%wodegongjieite%%
Wgü%wilhelmgümbelite%%Cornelia shaft, Hagendorf South open cut
Whd%willhendersonite%%Vispi quarry, Pian di Celle volcano
Whe%whewellite%%
Whk%windhoekite%%Aris quarries
Whm%whitmoreite%%Palermo No. 1 mine
Whn%weishanite%%Weishancheng ore field
Whr%wherryite%%Mammoth-Saint Anthony mine
Whs%waterhouseite%%Iron Monarch mine
Wht%whitlockite%%Palermo No. 1 mine
Wic%wicksite%%
Wik%wiklundite%%Långban
Wil%wiluite%%Akhtaragda river mouth|Vilyui river basin
Wis%wiserite%%Gonzen iron mine
Wk%walkerite%%Potash Corporation of Saskatchewan mine
Wki%warkite%%Murchison meteorite|Vigarano meteorite
Wkl%wilhelmkleinite%%Tsumeb mine
Wkm%wilkmanite%%
Wkn%wilkinsonite%%Warrumbungle Mountains
Wkr%wernerkrauseite%%Caspar quarry
Wks%weeksite%%
Wla%whelanite%%
Wld%wermlandite%%Långban
Wlf%wulffite%%Arsenatnaya fumarole
Wlg%weloganite%%Francon quarry
Wlk%wallkilldellite%%Sterling Hill
Wlk-Fe%wallkilldellite-(Fe)%%Roua mines
Wlm%willemite%%Kelmis
Wls%willemseite%%Bon Accord nickel deposit
Wm%wickmanite%%Långban
Wmn%wightmanite%%Commercial quarry, Sky Blue Hill
Wmo%widgiemoolthalite%%Widgiemooltha
Wmt%windmountainite%%Wind Mountain
Wnj%wenjiite%%
Wns%wonesite%%
Wo%wollastonite%%
Wod%woodallite%%Mount Keith mine
Wol%wolfeite%%Palermo No. 1 mine
Woo%wooldridgeite%%
Wop%wopmayite%%Tanco mine
Wpg%walpurgite%%Walpurgis Flacher vein
Wpn%wampenite%%Wampen
Wpo%waipouaite%%Aranga
Wra%wairauite%%
Wrc%whiterockite%%Bimbowrie Conservation Park
Wrd%werdingite%%
Wrk%wairakite%%Lake Taupō
Wrm%wilhelmramsayite%%Koashva open pit
Ws%walstromite%%Esquire No. 7 claim
Wsb%weissbergite%%
Wsd%wölsendorfite%%
Wsm%wardsmithite%%Furnace Creek district
Wsn%winstanleyite%%Contention-Grand Central mine group
Wst%weissite%%Good Hope mine
Wt-CaFeMg%whiteite-(CaFeMg)%%Itinga
Wt-CaMgMg%whiteite-(CaMgMg)%%
Wt-CaMnMg%whiteite-(CaMnMg)%%Tip Top mine
Wt-CaMnMn%whiteite-(CaMnMn)%%Cornelia shaft, Hagendorf South open cut
Wt-MnFeMg%whiteite-(MnFeMg)%%Itinga
Wt-MnMnMg%whiteite-(MnMnMg)%%Iron Monarch mine
Wt-MnMnMn%whiteite-(MnMnMn)%%Foote Lithium Co. mine
Wtc%wittichenite%%Wittichen
Wte%wattersite%%Clear Creek claim
Wth%witherite%%Brownley Hill mine
Wtr%walthierite%%Tambo mine
Wts%watatsumiite%%Tanohata mine
Wty%wheatleyite%%Wheatley mines
Wul%wulfenite%%
Wum%wumuite%%
Wup%wupatkiite%%
Wur%wurtzite%%
Wuy%wuyanzhiite%%Bofang copper mine
Wvd%westerveldite%%
Wvl%wilhelmvierlingite%%Cornelia shaft, Hagendorf South open cut
Wwd%woodwardite%%
Wwf%wroewolfeite%%
Wwk%warwickite%%Warwick
Wya%wyartite%%Shinkolobwe mine
Wyc%wycheproofite%%Wycheproof
Wyl%wyllieite%%
Wzk%witzkeite%%
Wöh%wöhlerite%%
Wüs%wüstite%%
Xcn%xanthoconite%%Himmelsfürst mine
Xco%xocomecatlite%%Oriental mine
Xi%xieite%%Suizhou
Xif%xifengite%%Placer occurrences (Yanshan meteorite)
Xil%xilingolite%%
Xim%ximengite%%Ximeng Va Autonomous County
Xit%xitieshanite%%Xitieshan mine
Xjg%xiangjiangite%%
Xoc%xocolatlite%%Moctezuma mine
Xon%xonotlite%%Tetela de Xonotla
Xp%xenophyllite%%Augustinovka meteorite
Xtm-Y%xenotime-(Y)%%
Xtm-Yb%xenotime-(Yb)%%Bernic Lake
Xu%xuite%%Menan volcanic complex
Xuw%xuwenyuanite%%
Yaf%yafsoanite%%Kuranakh mine
Yag%yagiite%%
Yak-Y%yakovenchukite-(Y)%%Kirovskii apatite mine
Yan%yanomamite%%Monte Alegre de Goiás
Yar%yarrowite%%Yarrow Creek-Spionkop Creek deposit
Yav%yavapaiite%%United Verde mine
Yaz%yazganite%%
Ybv%yakubovichite%%Daba-Siwaqa complex
Ycw%yancowinnaite%%Kintore opencut, Broken Hill South mine
Ye%ye'elimite%%Har Ye'elim
Yec%yecoraite%%Yécora
Yed%yedlinite%%Mammoth-Saint Anthony mine
Yeg%yegorovite%%Palitra pegmatite, Karnasurt mine
Yeo%yeomanite%%Torr Works
Yfl%yuanfuliite%%Kuandian Manchu Autonomous County
Ygi%yangite%%Kombat
Ygs%yurgensonite%%Arsenatnaya fumarole
Yin%yingjiangite%%Tongbiguan Township
Yix%yixunite%%Yixun River
Yjg%yuanjiangite%%Yuanling County
Ykh%yakhontovite%%Komsomolsky District, Khabarovsk Krai
Yks%yuksporite%%Hackman valley
Ylg%yarlongite%%Luobusa ore district
Ymr%yurmarinite%%Arsenatnaya fumarole
Yod%yoderite%%
Yof%yofortierite%%Poudrette quarry
Yos%yoshiokaite%%
Ypv%yusupovite%%Darai-Pioz glacier
Yro%yaroshevskite%%Yadovitaya fumarole
Ysl%yaroslavite%%Yaroslavskoye tin deposit
Yt-Y%yttriaite-(Y)%%
Ytgs-Ce%yttrotungstite-(Ce)%%Kramat Pulai
Ytgs-Y%yttrotungstite-(Y)%%Kramat Pulai
Ytm%yeatmanite%%Buckwheat pit
Ytt-Y%yttrialite-(Y)%%
Yug%yugawaralite%%Yugawara Onsen
Yuk%yukonite%%Tagish Lake
Yus%yushkinite%%
Yuz%yuzuxiangite%%Wessels mine
Yv%yvonite%%Salsigne mine
Yzh%yangzhumingite%%Bayan Obo mine
Yzm%yarzhemskiite%%Chelkar salt dome
Zab%zabuyelite%%Zabuye lake
Zac%zaccagnaite%%Carrara
Zad%zadovite%%Gurim anticline
Zag%zagamiite%%Zagami
Zah%zaherite%%
Zak%zakharovite%%Mount Karnasurt|Mount Yukspor
Zan%zanazziite%%Itinga
Zap%zapatalite%%
Zas%zincalstibite%%Carrara
Zav%zavaritskite%%
Zay%zaykovite%%
Zaï%zaïrite%%
Zbb%zimbabweite%%
Zbdc%zincobradaczekite%%Yadovitaya fumarole
Zbru%zincoberaunite%%Cornelia shaft, Hagendorf South open cut
Zbtt%zincobriartite%%Kipushi mine
Zbyg%zincobotryogen%%Xitieshan mine
Zchr%zincochromite%%Velikaya Guba uran-vanadium deposit
Zcpi%zincocopiapite%%Xitieshan mine
Zcr%zaccariniite%%Loma La Peguera
Zcv-6N6S%zincovelesite-6N6S%%Nezhilovo
Zde%zdenĕkite%%Cap Garonne mine
Zek%zektzerite%%Washington pass
Zel%zellerite%%Fremont County
Zem%zemannite%%Moctezuma mine
Zen%zenzénite%%Långban
Zer%zeravshanite%%Darai-Pioz glacier
Zeu%zeunerite%%Walpurgis Flacher vein
Zgb%zangboite%%Luobusa ore district
Zgtl%zincgartrellite%%Tsumeb mine
Zgv%zinkgruvanite%%Askersund Municipality
Zha%zharchikhite%%Zharchikha molybdenum deposit
Zhe%zhemchuzhnikovite%%
Zhf%zhanghuifenite%%
Zhg%zhanghengite%%
Zhi%zhiqinite%%Luobusa ore district
Zhög-2N2S%zincohögbomite-2N2S%%
Zhög-2N6S%zincohögbomite-2N6S%%
Zie%ziesite%%Izalco
Zig%zigrasite%%Dunton Gem quarry
Zim%ziminaite%%Bezymianny
Zin%zinkosite%%Jaroso Ravine
Zir-Ce%zirsilite-(Ce)%%Darai-Pioz glacier
Zkn%zinkenite%%Graf Jost-Christian mine
Zla%zlatogorite%%Zolotaya Gora gold deposit
Zlcb%zinclipscombite%%Silver Coin mine
Zlib%zincolibethenite%%Kabwe
Zlo%zolotarevite%%Mount Alluaiv
Zmk%zemkorite%%Udachnaya diamond mine
Zmln%zincmelanterite%%Good Hope mine
Zms%znamenskyite%%Kudriavy volcano
Zn%native zinc%%
Znc%zincite%%Franklin|Sterling Hill
Zng-2N1S%zinconigerite-2N1S%%
Zng-6N6S%zinconigerite-6N6S%%Xianghualing Sn-polymetallic ore field
Znm%zincomenite%%First scoria cone
Znu%znucalite%%Příbram VI-Březové Hory
Zo%zoisite%%Saualpe|Sauland
Zo-Pb%zoisite-(Pb)%%Jakobsberg mine
Zod%zodacite%%
Zoh%zoharite%%Hatrurim Basin
Zol%zoltaiite%%
Zoli%zincolivenite%%Agios Konstantinos, East Attica
Zor%zorite%%Karnasurt mine, Karnasurt mount
Zou%zoubekite%%Příbram District
Zp%zeophyllite%%
Zph%zhangpeishanite%%Bayan Obo mine
Zrn%zircon%%Arendal
Zrs%zircosulfate%%Sangilen Upland
Zrsl%zincroselite%%Tsumeb mine
Zsk%zolenskyite%%Indarch meteorite
Zsl%zirsinalite%%Koashva open pit
Zspf%zincospiroffite%%Zhongshangou gold deposit
Zst%zincostaurolite%%Brunegg pass
Zstz%zincostrunzite%%Cornelia shaft, Hagendorf South open cut|Folgosinho
Zub%zubkovaite%%Arsenatnaya fumarole
Zug-Ce%zugshunstite-(Ce)%%Alum Cave Bluff
Zuk%zuktamrurite%%Halamish wadi
Zun%zunyite%%Zuni mine
Zus%zussmanite%%Laytonville
Zv%zvyagintsevite%%Talnakh ore field
Zvl%zavalíaite%%
Zvlt%zincovoltaite%%Xitieshan mine
Zvĕ-Zn%zvĕstovite-(Zn)%%Zvěstov
Zwwd%zincowoodwardite%%Christiana mine|Hilarion mine
Zzip%zinczippeite%%Hillside mine
Zál%zálesíite%%Zálesí (Javorník)
Zýk%zýkaite%%Kaňk
Áge%ángelaite%%
Åk%åkermanite%%
Åsk-Nd%åskagenite-(Nd)%%Åskagen quarry
Écr%écrinsite%%Jas Roux
Öbr%örebroite%%Rällingsberg ore area
Čec%čechite%%Vrančice
Čej%čejkaite%%Svornost mine
Čný%černýite%%Tanco mine
Škác%škáchaite%%
Šlk%šlikite%%
Šrn%šreinite%%Horní Halže
Ště%štěpite%%Svornost mine
Švn%švenekite%%Jáchymov
Żbk%żabińskiite%%Piława Górna quarry
δN%deltanitrogen%%São Luiz river alluvials
Nbix-Mn%nioboixiolite-(Mn²⁺)%D%
`)

// to-do: rename.
// to-do: think about a better to handle deterministic post generation and
//        new / deprecated minerals.
/** warning: does not contain deprecated minerals. */
export const minCatSet: readonly Readonly<Mineral>[] = Object.values(
  minCat
).filter(min => !min.deprecated)

function parseMinCat(csv: string): MinCat {
  const cat: MinCat = {}
  for (const row of csv.trim().split('\n')) {
    const [ima, name, deprecated, localities] = row.split('%') as [
      IMA,
      string,
      string,
      string
    ]
    cat[ima] = {
      deprecated: deprecated === 'D',
      ima,
      localities: localities ? localities.split('|') : [],
      name
    }
  }
  return cat
}
