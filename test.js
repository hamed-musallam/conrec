'use strict';

const fs = require('fs');
const converter = require('jcampconverter');
const Conrec = require('..');

const data = fs.readFileSync(__dirname + '/data/zhmbc_0.jdx', 'utf8');
const parsed = converter.convert(data, {noContour: true});
const conrec = new Conrec(parsed.minMax.z);

var levels = [-150378636,-148207433.85929647,-146036231.71859297,-143865029.57788944,-141693827.43718594,-139522625.2964824,-137351423.15577888,-135180221.0150754,-133009018.87437186,-130837816.73366834,-128666614.59296483,-126495412.4522613,-124324210.3115578,-122153008.17085427,-119981806.03015076,-117810603.88944724,-115639401.74874371,-113468199.60804021,-111296997.46733668,-109125795.32663317,-106954593.18592966,-104783391.04522613,-102612188.90452261,-100440986.7638191,-98269784.62311558,-96098582.48241207,-93927380.34170854,-91756178.20100503,-89584976.06030151,-87413773.91959798,-85242571.77889448,-83071369.63819095,-80900167.49748744,-78728965.35678393,-76557763.21608041,-74386561.07537688,-72215358.93467337,-70044156.79396985,-67872954.65326634,-65701752.51256281,-63530550.3718593,-61359348.23115578,-59188146.09045227,-57016943.949748755,-54845741.809045225,-52674539.66834171,-50503337.5276382,-48332135.38693468,-46160933.24623117,-43989731.10552764,-41818528.964824125,-39647326.82412061,-37476124.6834171,-35304922.54271357,-33133720.402010053,-30962518.26130654,-28791316.120603025,-26620113.97989951,-24448911.83919598,-22277709.698492467,-20106507.557788953,-17935305.41708544,-15764103.27638191,-13592901.13567841,-11421698.994974881,-9250496.854271352,-7079294.713567853,-4908092.572864324,-2736890.4321608245,-565688.2914572954, 50,1605513.8492462337,3776715.989949733,5947918.130653262,8119120.271356761,10290322.41206029,12461524.55276382,14632726.693467319,16803928.834170848,18975130.974874377,21146333.115577877,23317535.256281406,25488737.396984905,27659939.537688434,29831141.678391963,32002343.819095463,34173545.95979899,36344748.10050249,38515950.24120602,40687152.38190955,42858354.52261305,45029556.66331658,47200758.80402008,49371960.944723606,51543163.085427135,53714365.226130635,55885567.36683416,58056769.50753766,60227971.64824119,62399173.78894472,64570375.92964822,66741578.07035175,68912780.21105528,71083982.35175878,73255184.4924623,75426386.6331658,77597588.77386934,79768790.91457286,81939993.05527636,84111195.1959799,86282397.33668339,88453599.47738692,90624801.61809045,92796003.75879395,94967205.89949748,97138408.04020098,99309610.18090451,101480812.32160804,103652014.46231154,105823216.60301507,107994418.7437186,110165620.8844221,112336823.02512562,114508025.16582912,116679227.30653265,118850429.44723618,121021631.58793968,123192833.72864318,125364035.86934674,127535238.01005024,129706440.15075374,131877642.2914573,134048844.4321608,136220046.5728643,138391248.71356785,140562450.85427135,142733652.99497485,144904855.13567835,147076057.2763819,149247259.4170854,151418461.5577889,153589663.69849247,155760865.83919597,157932067.97989947,160103270.12060302,162274472.26130652,164445674.40201002,166616876.54271352,168788078.68341708,170959280.82412058,173130482.96482408,175301685.10552764,177472887.24623114,179644089.38693464,181815291.5276382,183986493.6683417,186157695.8090452,188328897.94974875,190500100.09045225,192671302.23115575,194842504.37185925,197013706.5125628,199184908.6532663,201356110.7939698,203527312.93467337,205698515.07537687,207869717.21608037,210040919.35678393,212212121.49748743,214383323.63819093,216554525.77889442,218725727.91959798,220896930.06030148,223068132.20100498,225239334.34170854,227410536.48241204,229581738.62311554,231752940.7638191,233924142.9045226,236095345.0452261,238266547.18592966,240437749.32663316,242608951.46733665,244780153.60804015,246951355.7487437,249122557.8894472,251293760.0301507,253464962.17085427,255636164.31155777,257807366.45226127,259978568.59296483,262149770.73366833,264320972.87437183,266492175.01507533,268663377.1557789,270834579.2964824,273005781.4371859,275176983.57788944,277348185.71859294,279519387.85929644,281690590];
var nbLevels = 200;
var timeout = 2000;

console.time('1');
conrec.drawContour({contourDrawer: 'basic', levels, nbLevels, timeout});
console.timeEnd('1');

console.time('1');
conrec.drawContour({contourDrawer: 'shape', levels, nbLevels, timeout});
console.timeEnd('1');