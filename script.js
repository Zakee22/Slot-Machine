// Static data for City, Showroom, and Showroom Manager Number
const data = [
  ["Agalawatta","Abans Agalawatta","770680676"],["Ahangama","Abans Ahangama","714655503"],["Akkaraipattu","Abans Akkaraipattu","779583151"],["Akuressa","Abans Akuressa","777417857"],["Alawwa","Abans Alawwa","705026719"],["Aluthgama","Abans Aluthgama","773093393"],["Aluthgama","Abans Aluthgama Mobile Unlimited","772950739"],["Ambalangoda","Abans Ambalangoda","777115512"],["Ambalangoda","Abans Ambalangoda Mobile & IT","778595000"],["Ambalantota","Abans Ambalantota Limited","707341453"],["Ambalantota","Abans Ambalantota Unlimited","703679609"],["Ampara","Abans Ampara","777520903"],["Ampara","Abans Ampara Mobile","777158460"],["Angunakolapelessa","Abans Angunukolapelessa","773854909"],["Anuradhapura","Abans Anuradhapura Unlimited","777314708"],["Anuradhapura","Abans Anuradhapura Limited","763763052"],["Aralaganwila","Abans Aralaganwila Limited","741973302"],["Atchuveli","Abans Atchchuvali","772846754"],["Athurugiriya","Abans Athurugiriya","753444777"],["Avissawella","Abans Avissawella B Limited","773519518"],["Avissawella","Abans Avissawella Unlimited","768950482"],["Badalkumbura","Abans Badalkumbura","773442750"],["Baddegama","Abans Baddegama","777758984"],["Baddegama","Abans Baddegama Mobile & IT","702761238"],["Badulla","Abans Badulla Limited","712846256"],["Badulla","Abans Badulla Unlimited","719235529"],["Bakamuna","Abans Bakamuna","761678001"],["Balangoda","Abans Balangoda Unlimited","718794194"],["Balangoda","Abans Balangoda Limited","703420034"],["Bandaragama","Abans Bandaragama","759495352"],["Bandarawela","Abans Bandarawela Limited","714476458"],["Bandarawela","Abans Bandarawela Unlimited","763337537"],["Batapola","Abans Batapola","779820325"],["Battaramulla","Abans Battaramulla","773340909"],["Batticaloa","Abans Batticaloa","779628292"],["Beliatta","Abans Beliatta","774214813"],["Beruwala","Abans Beruwala Unlimited","752696616"],["Beruwala","Abans Beruwala Limited","776283354"],["Beruwala","Abans Beruwala Mobile","774919110"],["Beruwala","Abans Beruwala Mobile","756553652"],["Bibile","Abans Bibile Unlimited","769358513"],["Bibile","Abans Bibile Limited","772013538"],["Bingiriya","Abans Bingiriya","772921488"],["Boralesgamuwa","Abans Boralesgamuwa","772809071"],["Bulathkohupitiya","Abans Bulathkohupitiya","711607673"],["Bulathsinhala","Abans Bulathsinghala","779795195"],["Buttala","Abans Buttala","771833257"],["Buttala","Abans Buttala Mobile Limited","714717067"],["Chankanai","Abans Chankanai","773763503"],["Chavakachcheri","Abans Chavakachcheri","777252635"],["Chenkalady","Abans Chenkalady","770698316"],["Chilaw","Abans Chilaw Limited","777857536"],["Chilaw","Abans Chilaw Unlimited","771652340"],["Chunnakam","Abans Chunnagam Limited","772208242"],["Chunnakam","Abans Chunnagam Mobile & IT","774023985"],["Dambulla","Abans Dambulla","760018303"],["Dankotuwa","Abans Dankotuwa","777126896"],["Dehiattakandiya","Abans Dehiattakandiya Limited","717798631"],["Dehiattakandiya","Abans Dehiattakandiya Unlimited","775280503"],["Dehiattakandiya","Abans Dehiattakandiya Mobile & IT","715691617"],["Dehiovita","Abans Dehiowita","761891261"],["Delgoda","Abans Delgoda","772553864"],["Dematagoda","Abans Dematagoda","750482848"],["Deniyaya","Abans Deniyaya","766785713"],["Deraniyagala","Abans Deraniyagala","717798334"],["Digana","Abans Digana","764375833"],["Digana","Abans Digana Mobile","772414839"],["Dikwella","Abans Dikwella","705573889"],["Divulapitiya","Abans Divulapitiya","773064541"],["Eheliyagoda","Abans Eheliyagoda Limited","712074680"],["Eheliyagoda","Abans Eheliyagoda Unlimited","711364636"],["Eheliyagoda","Abans Ehaliyagoda Mobile","768387386"],["Elpitiya","Abans Elpitiya","773467862"],["Elpitiya","Abans Elpitiya Mobile B","787275382"],["Embilipitiya","Abans Embilipitiya Unlimited","715810019"],["Embilipitiya","Abans Embilipitiya Limited","714786091"],["Eppawala","Abans Eppawala","765997341"],["Ettampitiya","Abans Ettampitiya","719565831"],["Galaha","Abans Galaha","777120513"],["Galewela","Abans Galewela","775849843"],["Galgamuwa","Abans Galgamuwa","768650055"],["Galle","Abans Galle Limited","718108830"],["Galle","Abans Galle Mobile Limited","777061818"],["Galnewa","Abans Galnewa","773949167"],["Gampaha","Abans Gampaha","741672205"],["Gampola","Abans Gampola Unlimited","788333071"],["Gampola","Abans Gampola Limited","719942180"],["Gampola","Abans Gampola Mobile","768423941"],["Ganemulla","Abans Ganemulla","715617692"],["Gelioya","Abans Gelioya","773669224"],["Ginigathena","Abans Ginigathhena","778940971"],["Girandurukotte","Abans Girandurukotte","727670671"],["Giriulla","Abans Giriulla","779981633"],["Godagama","Abans Godagama","759117909"],["Godagama","Abans Godagama Mobile","752577343"],["Godakawela","Abans Godakawela Unlimited","777755427"],["Godakawela","Abans Godakawela Limited","770633618"],["Godakawela","Abans Godakawela Mobile","774286687"],["Hakmana","Abans Hakmana","778458959"],["Hambantota","Abans Hambantota","712346873"],["Hanwella","Abans Hanwella Limited","777957426"],["Hanwella","Abans Hanwella Unlimited","777284738"],["Hanwella","Abans Hanwella Mobile Unlimited","717711236"],["Haputale","Abans Haputale","756443447"],["Hatton","Abans Hatton Unlimited","776330902"],["Hatton","Abans Hatton Limited","777283238"],["Hettipola","Abans Hettipola","706499498"],["Hikkaduwa","Abans Hikkaduwa","769395928"],["Hingurakgoda","Abans Hingurakgoda","712122432"],["Hiripitiya","Abans Hiripitiya","703916553"],["Homagama","Abans Homagama","771441149"],["Horana","Abans Horana Unlimited","776623994"],["Horana","Abans Horana Limited","711215738"],["Ibbagamuwa","Abans Ibbagamuwa","775481988"],["Imaduwa","Abans Imaduwa","773638282"],["Ingiriya","Abans Ingiriya","772845316"],["Ja-Ela","Abans Ja Ela","776479579"],["Jaffna","Abans Jaffna A Limited","773179593"],["Jaffna","Abans Jaffna B","774676578"],["Jaffna","Abans Jaffna","762645555"],["Jaffna","Abans Jaffna Elite HP","789072666"],["Jaffna","Abans Digital Center Jaffna","750466906"],["Jaffna","Abans Jaffna Mobile A","757274891"],["Kadawatha","Abans Kadawatha","777368396"],["Kaduwela","Abans Kaduwela","753984985"],["Kaduwela","Abans Kaduwela Limited","754677377"],["Kaduwela","Abans Kaduwela Mobile Unlimited","768620534"],["Kaduwela","Abans Kaduwela Mobile","768697841"],["Kahatagasdigiliya","Abans Kahatagasdigiliya Limited","763840912"],["Kahawatta","Abans Kahawatta","713278698"],["Kalawana","Abans Kalawana","775116100"],["Kalmunai","Abans Kalmunai Limited","773959628"],["Kalmunai","Abans Kalmunai Unlimited","757122125"],["Kalutara","Abans Kalutara","777641876"],["Kalutara","Abans Kalutara Mobile Limited","763920077"],["Kaluwanchikudy","Abans Kaluwanchikudy","778424864"],["Kamburupitiya","Abans Kamburupitiya","713870667"],["Kandana","Abans Kandana Limited","774514981"],["Kandana","Abans Kandana Unlimited","772166753"],["Kandy","Abans Kandy","777565655"],["Kandy","Abans Kandy City Centre","773889257"],["Kandy","Abans KCC Mobile Limited","770176479"],["Kantale","Abans Kantale","702952611"],["Karandeniya","Abans Karandeniya","779378255"],["Karapitiya","Abans Karapitiya","765209649"],["Karapitiya","Abans Karapitya JVC Limited","774150143"],["Kattankudy","Abans Kattankudy","772326101"],["Katugastota","Abans Katugastota","777367705"],["Katugastota","Abans Katugastota Mobile","716262826"],["Kebithigollewa","Abans Kebithigollewa","774875962"],["Kegalle","Abans Kegalle Limited","714968040"],["Kegalle","Abans Kegalle Unlimited","719275280"],["Kegalle","Abans Kegalle JVC Mobile","714671090"],["Kegalle","Abans Kegalle Mobile Limited","702466562"],["Kekirawa","Abans Kekirawa","761883208"],["Kekirawa","Abans Kekirawa B Limited","778848008"],["Keppetipola","Abans Keppetipola Limited","717940940"],["Kesbewa","Abans Kesbewa","755002025"],["Kilinochchi","Abans Kilinochchi Limited","773575487"],["Kilinochchi","Abans Kilinochchi Unlimited","775451421"],["Kiribathgoda","Abans Kiribathgoda","761091101"],["Kiribathgoda","Abans Kiribathgoda Mobile A","760026131"],["Kirindiwela","Abans Kirindiwela","787453241"],["Kobeigane","Abans Kobeigane","776047991"],["Kochchikade","Abans Kochchikade","775344308"],["Kodikamam","Abans Kodikamam","777933037"],["Kolonnawa","Abans Kolonnawa Limited","752903935"],["Kotahena","Abans Kotahena","776118944"],["Kotikawatta","Abans Kotikawatta","768879217"],["Kottawa","Abans Kottawa","759514704"],["Kuliyapitiya","Abans Kuliyapitiya","773972191"],["Kundasale","Abans Kundasale","767657213"],["Kurunegala","Abans Kurunegala B","779955500"],["Kurunegala","Abans Kurunegala C","773358866"],["Kurunegala","Abans Kurunegala Mobile C","713209427"],["Kuruwita","Abans Kuruwita","779227669"],["Madirigiriya","Abans Medirigiriya Unlimited","779028370"],["Maharagama","Abans Maharagama Elite HP","772636999"],["Maharagama","Abans Maharagama 2nds Limited","759610230"],["Maharagama","Abans Maharagama","714604485"],["Mahawewa","Abans Mahawewa","772922026"],["Mahiyanganaya","Abans Mahiyangana Limited","773221961"],["Mahiyanganaya","Abans Mahiyangana Unlimited","762772811"],["Mahiyanganaya","Abans Mahiyanganaya Mobile","717177071"],["Maho","Abans Maho","715497711"],["Makola","Abans Makola","718780658"],["Malabe","Abans Malabe","762266709"],["Malabe","Abans Malabe Mobile","768519706"],["Manippai","Abans Manipay","773358560"],["Mannar","Abans Mannar","766415481"],["Mannar","Abans Mannar Limited","750653830"],["Marawila","Abans Marawila","779638858"],["Matale","Abans Matale Limited","759142394"],["Matale","Abans Matale Unlimited","773849688"],["Matale","Abans Matale Mobile & IT","766396820"],["Matara","Abans Matara B Kingswatta","705051000"],["Matara","Abans Matara A","776822459"],["Matara","Abans Matara B Mobile","710741751"],["Matugama","Abans Mathugama","767457136"],["Mawanella","Abans Mawanella","719323332"],["Mawanella","Abans Mawanella Mobile Limited","772201479"],["Mawathagama","Abans Mawathagama","773134901"],["Medawachchiya","Abans Medawachchiya Unlimited","774649218"],["Menikhinna","Abans Menikhinna","759310762"],["Middeniya","Abans Middeniya","767448100"],["Minuwangoda","Abans Minuwangoda","755743831"],["Mirigama","Abans Mirigama Unlimited","775644655"],["Mirigama","Abans Mirigama Limited","741710607"],["Monaragala","Abans Monaragala Limited","706010101"],["Moratuwa","Abans Moratuwa","773420453"],["Moratuwa","Abans Moratuwa Mobile","757166141"],["Morawaka","Abans Morawaka","710334002"],["Mulgampola","Abans Mulgampola","776647526"],["Mulliyavalai","Abans Mulliyawalai Limited","766857722"],["Murunkan","Abans Murunkan","776749641"],["Muttur","Abans Muttur","769767165"],["Narammala","Abans Narammala","767210620"],["Nattandiya","Abans Nattandiya","777423817"],["Nawalapitiya","Abans Nawalapitiya Limited","777066654"],["Negombo","Abans Negombo Limited","777529450"],["Negombo","Abans Negombo Unlimited","772955576"],["Negombo","Abans Negombo Elite HP","773790082"],["Nelliady","Abans Nelliady","779554229"],["Neluwa","Abans Neluwa","782886842"],["Nikaweratiya","Abans Nikaweratiya","771018438"],["Nittambuwa","Abans Nittambuwa","773346344"],["Nittambuwa","Abans Nittambuwa B","779777773"],["Nittambuwa","Abans Nittambuwa Mobile B","712608240"],["Nivitigala","Abans Nivithigala","779675535"],["Nugegoda","Abans Nugegoda","776450350"],["Nuwara Eliya","Abans Nuwara Eliya Limited","712322575"],["Nuwara Eliya","Abans Nuwara Eliya B Limited","779878787"],["Padaviya","Abans Padawiya","712607776"],["Padukka","Abans Padukka","777498079"],["Padukka","Abans Padukka Mobile","777115635"],["Palai","Abans Palai","763956071"],["Panadura","Abans Panadura","758645584"],["Panadura","Abans Panadura Mobile","777217448"],["Pannala","Abans Pannala","768039795"],["Passara","Abans Passara","713023165"],["Pelawatta","Abans Pelawatta","774125066"],["Peliyagoda","Abans Dalugama Elite HP","774813977"],["Pelmadulla","Abans Pelmadulla","714744401"],["Pelmadulla","Abans Pelmadulla Mobile","779249319"],["Pilimatalawa","Abans Pilimathalawa","778437699"],["Piliyandala","Abans Piliyandala B","766768754"],["Piliyandala","Abans Piliyandala","777538152"],["Piliyandala","Abans Piliyandala Mobile","778310476"],["Pitabeddara","Abans Pitabeddara","707833303"],["Pitigala","Abans Pitigala","715556050"],["Point Pedro","Abans Point Pedro","771093730"],["Polgahawela","Abans Polgahawela","771434298"],["Polonnaruwa","Abans Polonnaruwa","760666714"],["Polpithigama","Abans Polpithigama","772040806"],["Pothuvil","Abans Pothuwil","718371122"],["Pugoda","Abans Pugoda","719534118"],["Punduloya","Abans Poodaluoya","765410096"],["Pussellawa","Abans Pussellawa","759136305"],["Puthukkudiyiruppu","Abans Puthukkudiyiruppu","770185692"],["Puttalam","Abans Puttalam Limited","751662178"],["Puttalam","Abans Puttalam un ltd","772604349"],["Ragala","Abans Ragala","772769769"],["Ragama","Abans Ragama","772264699"],["Rajagiriya","Abans Rajagiriya Elite B HP","779890072"],["Rakwana","Abans Rakwana","715496263"],["Rambukkana","Abans Rambukkana","754447072"],["Ratnapura","Abans Ratnapura A","773255876"],["Ratnapura","Abans Ratnapura B","771001121"],["Rideegama","Abans Ridigama","776782981"],["Rikillagaskada","Abans Rikillagaskada","750656463"],["Ruwanwella","Abans Ruwanwella","770498806"],["Seeduwa","Abans Seeduwa","777002742"],["Siyambalanduwa","Abans Siyambalanduwa","779708739"],["Sooriyawewa","Abans Sooriyawewa","765786005"],["Tangalle","Abans Tangalle","776358107"],["Thambuttegama","Abans Thambuttegama Unlimited","772250696"],["Thambuttegama","Abans Thambuttegama Limited","714718484"],["Thambuttegama","Abans Thambuttegama Mobile","767733473"],["Thanamalwila","Abans Thanamalwila","740777089"],["Tirunelveli","Abans Thirunelvely","773599000"],["Tirunelveli","Abans Thirunalvali Mobile","777956470"],["Tissamaharama","Abans Tissamaharama Limited","719414701"],["Tissamaharama","Abans Tissamaharama Unlimited","773570533"],["Tissamaharama","Abans Tissamaharama Mobile","769392244"],["Trincomalee","Abans Trincomalee A","715441076"],["Trincomalee","Abans Trincomalee","764449830"],["Trincomalee","Abans Trincomalee B","773677649"],["Ududumbara","Abans Ududumbara","776405629"],["Udugama","Abans Udugama","762350023"],["Uhana","Abans Uhana","777520903"],["Uragasmanhandiya","Abans Uragasmanhandiya","768010623"],["Urubokka","Abans Urubokka","767212003"],["Vavuniya","Abans Vavuniya Limited","771092102"],["Vavuniya","Abans Vavuniya Unlimited","759116500"],["Vavuniya","Abans Vavuniya Mobile","768911973"],["Veyangoda","Abans Veyangoda","779780997"],["Wadduwa","Abans Wadduwa","716338800"],["Wanduramba","Abans Wanduramba Unlimited","771024610"],["Wanduramba","Abans Wanduramba Mobile","742234534"],["Warakapola","Abans Warakapola","758110789"],["Warakapola","Abans Warakapola Mobile","702304075"],["Wariyapola","Abans Wariyapola","710724986"],["Wattala","Abans Wattala Limited","774763081"],["Wattegama","Abans Wattegama","777195880"],["Weeraketiya","Abans Weeraketiya","762476877"],["Weligama","Abans Weligama Limited","779048301"],["Welimada","Abans Welimada","771762121"],["Weliveriya","Abans Weliweriya Unlimited","773420801"],["Weliveriya","Abans Weliweriya Limited","703636858"],["Wellawatta","Abans Wellawatta Limited","778513131"],["Wellawaya","Abans Wellawaya Unlimited","711500576"],["Wellawaya","Abans Wellawaya Limited","762229877"],["Wennappuwa","Abans Wennappuwa Limited","778956181"],["Wennappuwa","Abans Wennappuwa Unlimited","777424426"],["Yakkala","Abans Yakkala","754051044"],["Yakkalamulla","Abans Yakkalamulla Limited","773355844"],["Yatiyantota","Abans Yatiyantota","773414138"]


];

// Render the table with static data
renderTable(data);

// Render the table with headers and rows
function renderTable(data) {
    const tableHeaders = document.getElementById('tableHeaders');
    const tableBody = document.getElementById('tableBody');

    // Clear existing table content
    tableHeaders.innerHTML = '';
    tableBody.innerHTML = '';

    // Add the table headers
    const headers = ["City", "Showroom", "Showroom Manager Number"];
    headers.forEach(header => {
        const th = document.createElement('th');
        th.innerText = header;
        tableHeaders.appendChild(th);
    });

    // Add the table rows
    data.forEach(row => {
        const tr = document.createElement('tr');
        row.forEach(cell => {
            const td = document.createElement('td');
            td.innerText = cell;
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
}

// Filter table data based on input (search by city only)
document.getElementById('filterInput').addEventListener('input', filterTable);

function filterTable() {
    const filterValue = document.getElementById('filterInput').value.toLowerCase();

    // Filter the static data based on the filter input
    const filteredData = data.filter(row => {
        // Check if the city (first column) contains the filter string
        return row[0].toLowerCase().includes(filterValue);
    });

    renderTable(filteredData); // Re-render the table with filtered data
}
