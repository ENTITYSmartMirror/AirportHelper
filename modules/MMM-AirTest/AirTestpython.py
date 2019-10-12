from urllib.request import urlopen
from xml.etree.ElementTree import parse

var_url = urlopen('http://openapi.airport.co.kr/service/rest/FlightStatusList/getFlightStatusList?serviceKey=wHP%2BDtLICbhZ5HS1kuRTV4zXVjyuNgmSelChKsogFgLcXenf4DdlUd5lJmR9vnl4ddrBrtFu%2FaFoxhBxJr23Vg%3D%3D&schLineType=I&schIOType=O&schAirCode=GMP&schStTime=0600&schEdTime=1800')
xmldoc = parse(var_url)

for item in xmldoc.iterfind('body/items/item'):
    airFln = item.findtext('airFln')
    airlineEnglish = item.findtext('airlineEnglish')
    arrivedEng = item.findtext('arrivedEng')
    std = item.findtext('std')
   
    print(airFln+';'+airlineEnglish+';'+arrivedEng+';'+std)
    '''
    print(airFln)
    print(std)
    print(arrivedEng)
    print(std)
    '''