import uid from 'uid';

let schedule = {events: [], lines: []}; //list of events and lines with events assigned to lines
//event = {instructor, student, event, duration, line, ETD}

const addevent = (ETD, instructor, student, event, duration, line) => {
    schedule.events.push({ETD, instructor, student, event, duration, line, status: '', ATD: '', ATA: '', uid: uid()});
    schedule.lines.includes(line) || schedule.lines.push(line);
};

/**/
addevent('0815','NEASE, JACOB A [LT]','BROWNING, PAUL J. [ENS]','C4004',1.5,'B01');
addevent('0815','NEASE, JACOB A [LT]','TOLL, SLOANE A [1stLt]','T4001',1.5,'B01');
addevent('1145','SKELLEY, PHILLIP W [LT]','CINQUEPALMI, FRANCESCO . [ENS]','C4202',2,'B01');
addevent('1145','SKELLEY, PHILLIP W [LT]','FINE, ADDISON J [LTJG]','C4202',2,'B01');
addevent('0815','WOOTEN, MICHAEL L [LCDR]','BUTLER, ABRAM M [1stLt]','C4102',2,'B02');
addevent('0815','WOOTEN, MICHAEL L [LCDR]','TRANI, FRANCESCO [ENS]','C4203',2,'B02');
addevent('1245','OUELLETTE, DANIEL B [Capt]','REISER, ALEXANDER W. [LTJG]','C4503',1.7,'B02');
addevent('1245','OUELLETTE, DANIEL B [Capt]','VAUGHAN, LOGAN H [1stLt]','C4103',2,'B02');


addevent('0830','BASTEMEYER, DEVIN J. [LCDR]','ALMOQBEL, IBRAHIM M [LTJG]','I4404',2,'C01');
addevent('0830','BASTEMEYER, DEVIN J. [LCDR]','MEDINA, JOSE G. [ENS]','I4404',2,'C01');
addevent('0815','CROSSLAND, CODY W [LT]','SAUTER, DEVIN N. [ENS]','I4304',1.8,'C02');
addevent('0815','CROSSLAND, CODY W [LT]','TOLEFREE, JORDYN C [LTJG]','I4304',1.8,'C02');
addevent('0900','ISBELL, BRIAN L [LT]','GRILES, ANDREW C [1stLt]','F4001',2,'C03');
addevent('0900','ISBELL, BRIAN L [LT]','MARCUM, EMMA L. [LT]','HT FERRY (Helo)',2,'C03');
addevent('0900','KELLNER, ANDREW W [LtCol]','VANDERAH, RYAN W [1stLt]','F4001',2,'C04');
addevent('0900','KELLNER, ANDREW W [LtCol]','WELLS, OLIVER W [1stLt]','F4001',2,'C04');
addevent('0830','KERZIE, JOSHUA D [Capt]','BAGENT, IAN M. [ENS]','C4202',2,'B03');
addevent('0830','KERZIE, JOSHUA D [Capt]','KEENAN, THEODORE M [ENS]','C4203',2,'B03');
addevent('0845','MCKERREN, SEAN M [LCDR]','VIRDEN, RYAN Z [PO2]','CREW',0,'B04');
addevent('0845','MARTIN, BRADY L. [LT]','ALHARBI, MOHAMMED H. [LTJG]','I4290',1.5,'C05');
addevent('0845','MARTIN, BRADY L. [LT]','AUSTINDATTA, CHRISTIAN P [ENS]','I4290(2)',1.5,'C05');
addevent('0845','MARTIN, BRADY L. [LT]','WHITSON, CHRISTOPHER S [1stLt]','I4290(2)',1.5,'C05');
addevent('0845','MCKERREN, SEAN M [LCDR]','ANDROLEWICZ, ANDREW J [ENS]','T4002',1.5,'B04');
addevent('0845','MCKERREN, SEAN M [LCDR]','WOODRING, BLAKE A [1stLt]','T4002',1.5,'B04');
addevent('0845','KARR, JESSE M [LCDR]','SARTIN, COBY L [LTJG]','N4302',1.8,'C06');
addevent('0845','KARR, JESSE M [LCDR]','TROXELL, GRANT J [1stLt]','N4302',1.8,'C06');
addevent('0900','CHANG, CHUAN A [LT]','PETERSEN, BRIAN M [SCPO]','CREW',0,'B05');
addevent('0900','CHANG, CHUAN A [LT]','AHLGRIMM, AARON J [LTJG]','T4003',1.5,'B05');
addevent('0900','CHANG, CHUAN A [LT]','PEACOCK, JOHN J [1stLt]','T4086',1.5,'B05');
addevent('0915','TEAL, JAMES [LCDR]','BURKEVICS, ALEXANDER C [1stLt]','C4302',1.5,'C07');
addevent('0915','SONGER, ALEXANDRIA M [LT]','LEBLANC, JEREMY B [1stLt]','N4002',1.7,'C08');
addevent('0915','SONGER, ALEXANDRIA M [LT]','LEBLANC, JEREMY B [1stLt]','N4003',1.7,'C08');
addevent('0915','TEAL, JAMES [LCDR]','MCFARLAND, CALEB J [1stLt]','I4103',1.7,'C07');
addevent('0915','TEAL, JAMES [LCDR]','WISE, WILLIAM P [ENS]','I4102',1.7,'C07');
addevent('0930','TOPP, MARIANNE A [LT]','COLLEY, PATRICK T [ENS]','N4401',1.3,'C09');
addevent('0930','TOPP, MARIANNE A [LT]','RITTER, WILLIAM C [ENS]','N4401',1.3,'C09');
addevent('0930','EGAN, BRENDAN C. [LT]','CASSIN, FRANCES R [1stLt]','C4601',1.5,'C10');
addevent('0930','EGAN, BRENDAN C. [LT]','JENNINGS, JULIE A [ENS]','I4001',1.7,'C10');
addevent('1230','HAFENSTEINER, KAITLIN V [LT]','HOLMES, KEITH R [LTJG]','C4502',1.7,'B04');
addevent('1230','HAFENSTEINER, KAITLIN V [LT]','JOHNSON, DANIEL S [LTJG]','C4502',1.7,'B04');
addevent('1230','TRAMMELL, ALAN [Maj]','PACREM, TYLER J [ENS]','I4501',2,'C02');
addevent('1230','TRAMMELL, ALAN [Maj]','PACREM, TYLER J [ENS]','I4502',2,'C02');
/*
*/ 
addevent('1315','ELLWOOD, THOMAS M [LT]','COLLINS, CHRISTOPHER T [1stLt]','I4401',2,'C10');
addevent('1315','ELLWOOD, THOMAS M [LT]','COTTRELL, BRANDON K. [ENS]','I4402',2,'C10');
addevent('1245','SONCINI, CHRISTIAN R [LT]','AYRES, JON P [1stLt]','C4004',1.5,'B05');
addevent('1245','SONCINI, CHRISTIAN R [LT]','BROWN, ANDREW S [LTJG]','C4004',1.5,'B05');
addevent('1245','FRYER, NATHANIEL E [LT]','COTNEY, JACKSON S. [ENS]','I4486',2,'C09');
addevent('1245','FRYER, NATHANIEL E [LT]','REISING, MICHAEL L. [LTJG]','I4401',2,'C09');
addevent('1300','KROLL, BRIAN T [LCDR]','BURKE, BRENDAN M. [LTJG]','N4401',1.3,'C06');
addevent('1300','KROLL, BRIAN T [LCDR]','OBERLE, CHRISTOPHER R [1stLt]','N4401',1.3,'C06');
addevent('1300','COUILLARD, KYLE P [LT]','DAVIDSON, JAMIE L. [ENS]','C4003',1.5,'B03');
addevent('1300','COUILLARD, KYLE P [LT]','SCHNEIDER, MEGAN C [1stLt]','C4003',1.5,'B03');
addevent('1330','UMEMURA, NOBUSHIGE [LCDR]','TUAN, CHARLES P [1stLt]','N4401',1.3,'C04');
addevent('1330','HILL, RICHARD D [LCDR]','ALAQEEL, FERAS K. [LTJG]','C4702',1.5,'C03');
addevent('1330','HILL, RICHARD D [LCDR]','ALLISON, KELLY J [LTJG]','I4690',1.8,'C03');
addevent('1330','UMEMURA, NOBUSHIGE [LCDR]','GARCIA JR, CHARLES A. [ENS]','N4302',1.8,'C04');
addevent('1345','STEARN, ANGELA J. [LT]','COX, REBECCA S [1stLt]','I4304',1.8,'C05');
addevent('1345','STEARN, ANGELA J. [LT]','MCILVENE, ISAAC N [1stLt]','I4303',1.8,'C05');
addevent('1400','GRANCAGNOLO, JASON D [LCDR]','HRVOICH, JAMES E. [ENS]','I4103',1.7,'C01');
addevent('1400','GRANCAGNOLO, JASON D [LCDR]','MONK, PAIGE A. [ENS]','I4303',1.8,'C01');
addevent('1415','PAVELKO, JEFFREY M [Col]','CHOKR, JAMEL H [LT]','N4401',1.3,'C08');
addevent('1600','BREAK, PHILLIP C [Capt]','GELATT, KEVIN F [ENS]','N4402',1.3,'C08');
addevent('1600','BREAK, PHILLIP C [Capt]','GELATT, KEVIN F [ENS]','N4403',1.3,'C08');
addevent('1715','HELGERSON, NATHAN E [Capt]','ALANAZI, WALEED H. [LTJG]','N4003',1.7,'C03');
addevent('1715','HELGERSON, NATHAN E [Capt]','ALANAZI, WALEED H. [LTJG]','N4101',1.7,'C03');
addevent('1900','STOTZ, ANDREW J [LT]','MORGAN, JAMES H. [ENS]','I4503',2,'C07');
addevent('1900','STOTZ, ANDREW J [LT]','MORGAN, JAMES H. [ENS]','I4504',2,'C07');
addevent('2000','DAVIS, NED J [LT]','GRAVES, JAMES D. [ENS]','V4001',1.7,'C06');
addevent('2100','STEWART, THOMAS J [Capt]','JACKSON, KYLE R [LTJG]','V4002',1.7,'C02');
addevent('2100','STEWART, THOMAS J [Capt]','SIMON, JOSHUA D. [ENS]','V4001',1.7,'C02');
addevent('2000','DAVIS, NED J [LT]','WESTERMANN, DENNIS R [LCDR]','V4001',1.8,'C06');

export default schedule;