export const texasNeedFilters = [
  { id: 'all', label: 'All help' },
  { id: 'food', label: 'Food' },
  { id: 'benefits', label: 'Benefits & health' },
  { id: 'housing', label: 'Housing & utilities' },
  { id: 'jobs', label: 'Jobs & childcare' },
  { id: 'school', label: 'Schools' },
  { id: 'legal', label: 'Legal help' }
];

export const texasStatewideResources = [
  {
    id: '211-texas-statewide',
    need: 'all',
    name: '2-1-1 Texas',
    description: 'Free, confidential referrals for food, housing, healthcare, transportation, childcare, disaster help, and other local services anywhere in Texas.',
    phone: '2-1-1 / 877-541-7905',
    website: 'https://www.211texas.org/',
    source: 'Texas Health and Human Services Commission',
    action: 'Search the complete Texas directory'
  },
  {
    id: 'texas-hhs-find-services',
    need: 'benefits',
    name: 'Texas HHS — Find Services',
    description: 'Search by ZIP code or county for aging, disability, behavioral-health, and intellectual or developmental-disability service offices.',
    phone: '855-937-2372',
    website: 'https://resources.hhs.texas.gov/pages/find-services',
    source: 'Texas Health and Human Services',
    action: 'Find a Texas HHS office'
  },
  {
    id: 'your-texas-benefits',
    need: 'benefits',
    name: 'Your Texas Benefits',
    description: 'Official Texas application and account portal for SNAP food benefits, Medicaid, CHIP, TANF cash help, Medicare Savings Programs, and related benefits.',
    phone: '2-1-1 / 877-541-7905',
    website: 'https://www.yourtexasbenefits.com/',
    source: 'Texas Health and Human Services',
    action: 'Review or apply for benefits'
  },
  {
    id: 'texas-workforce-locations',
    need: 'jobs',
    name: 'Workforce Solutions — Find Locations',
    description: 'Find nearby Texas Workforce Solutions offices for job search, training, résumé support, placement, and information about childcare assistance.',
    phone: '512-463-2222',
    website: 'https://www.twc.texas.gov/find-locations',
    source: 'Texas Workforce Commission',
    action: 'Find a workforce office'
  },
  {
    id: 'tdhca-help-for-texans',
    need: 'housing',
    name: 'Help for Texans — Housing & Utilities',
    description: 'Search by city or county for reduced-rent apartments, rental assistance, emergency shelter, utility-bill help, weatherization, home repair, and accessibility programs.',
    phone: '800-525-0657',
    website: 'https://www.tdhca.texas.gov/help-for-texans',
    source: 'Texas Department of Housing and Community Affairs',
    action: 'Find housing and utility help'
  },
  {
    id: 'tea-school-district-finder',
    need: 'school',
    name: 'Texas Education Agency — Find a School',
    description: 'Locate a Texas public school, district, charter school, or education service center and review official enrollment guidance for families.',
    phone: '512-463-9734',
    website: 'https://tea.texas.gov/school-and-district-information',
    source: 'Texas Education Agency',
    action: 'Find a school or district'
  },
  {
    id: 'texas-law-help-directory',
    need: 'legal',
    name: 'TexasLawHelp Legal Help Directory',
    description: 'Search for nonprofit legal-aid organizations by county and legal issue. Availability depends on location, income, case type, and program capacity.',
    website: 'https://texaslawhelp.org/node/7043',
    source: 'Texas Legal Services Center',
    action: 'Find legal help in your area'
  }
];

export const texasFoodBanks = [
  { id: 'brazos-valley-food-bank', name: 'Brazos Valley Food Bank', address: '1501 Independence Ave, Bryan, TX 77803', zip: '77803', phone: '979-779-3663', website: 'https://www.bvfb.org/', counties: 'Brazos, Burleson, Grimes, Madison, Robertson, and Washington' },
  { id: 'central-texas-food-bank', name: 'Central Texas Food Bank', address: '6500 Metropolis Drive, Austin, TX 78744', zip: '78744', phone: '512-282-2111', website: 'https://www.centraltexasfoodbank.org/', counties: 'Bastrop, Bell, Blanco, Burnet, Caldwell, Coryell, Falls, Fayette, Freestone, Gillespie, Hays, Lampasas, Lee, Limestone, Llano, McLennan, Milam, Mills, San Saba, Travis, and Williamson' },
  { id: 'coastal-bend-food-bank', name: 'Coastal Bend Food Bank', address: '826 Krill St, Corpus Christi, TX 78408', zip: '78408', phone: '361-887-6291', website: 'https://coastalbendfoodbank.org/', counties: 'Aransas, Bee, Brooks, Duval, Jim Wells, Kenedy, Kleberg, Live Oak, McMullen, Nueces, and San Patricio' },
  { id: 'east-texas-food-bank', name: 'East Texas Food Bank', address: '3201 Robertson Road, Tyler, TX 75701', zip: '75701', phone: '903-597-3663', website: 'https://www.easttexasfoodbank.org/', counties: 'Anderson, Angelina, Bowie, Camp, Cass, Cherokee, Franklin, Gregg, Harrison, Henderson, Houston, Leon, Marion, Morris, Nacogdoches, Panola, Rains, Red River, Rusk, San Augustine, Shelby, Smith, Titus, Upshur, Van Zandt, and Wood' },
  { id: 'el-pasoans-fighting-hunger', name: 'El Pasoans Fighting Hunger', address: '9541 Plaza Circle, El Paso, TX 79927', zip: '79927', phone: '915-298-0353', website: 'https://elpasoansfightinghunger.org/', counties: 'Culberson, El Paso, and Hudspeth' },
  { id: 'golden-crescent-food-bank', name: 'Food Bank of the Golden Crescent', address: '801 South Laurent, Victoria, TX 77901', zip: '77901', phone: '361-578-0591', website: 'https://www.tfbgc.org/', counties: 'Calhoun, Colorado, DeWitt, Goliad, Gonzales, Jackson, Lavaca, Matagorda, Refugio, Victoria, and Wharton' },
  { id: 'rio-grande-valley-food-bank', name: 'Food Bank of the Rio Grande Valley', address: '724 N Cage Blvd, Pharr, TX 78577', zip: '78577', phone: '956-682-8101', website: 'https://www.foodbankrgv.com/', counties: 'Cameron, Hidalgo, and Willacy' },
  { id: 'west-central-texas-food-bank', name: 'Food Bank of West Central Texas', address: '5505 N 1st St, Abilene, TX 79603', zip: '79603', phone: '325-695-6311', website: 'https://fbwct.org/', counties: 'Brown, Callahan, Coleman, Comanche, Eastland, Fisher, Jones, Mitchell, Nolan, Runnels, Shackelford, Stephens, and Taylor' },
  { id: 'galveston-county-food-bank', name: 'Galveston County Food Bank', address: '624 4th Avenue North, Texas City, TX 77590', zip: '77590', phone: '409-945-4232', website: 'https://www.galvestoncountyfoodbank.org/', counties: 'Galveston County' },
  { id: 'high-plains-food-bank', name: 'High Plains Food Bank', address: '815 S Ross St, Amarillo, TX 79120', zip: '79120', phone: '806-374-8562', website: 'https://www.hpfb.org/', counties: 'Armstrong, Briscoe, Carson, Castro, Childress, Collingsworth, Cottle, Dallam, Deaf Smith, Donley, Gray, Hall, Hale, Hansford, Hardeman, Hartley, Hemphill, Hutchinson, Lipscomb, Moore, Ochiltree, Oldham, Parmer, Potter, Randall, Roberts, Sherman, Swisher, and Wheeler' },
  { id: 'houston-food-bank-texas', name: 'Houston Food Bank', address: '535 Portwall St, Houston, TX 77029', zip: '77029', phone: '713-223-3700', website: 'https://www.houstonfoodbank.org/find-help/', counties: 'Austin, Brazoria, Chambers, Fort Bend, Harris, Liberty, San Jacinto, Trinity, Walker, and Waller' },
  { id: 'montgomery-county-food-bank', name: 'Montgomery County Food Bank', address: '1 Food For Life Way, Harper’s Landing, TX 77385', zip: '77385', phone: '936-271-8800', website: 'https://mcfoodbank.org/', counties: 'Montgomery County' },
  { id: 'north-texas-food-bank', name: 'North Texas Food Bank', address: '3677 Mapleshade Lane, Plano, TX 75075', zip: '75075', phone: '214-330-1396', website: 'https://ntfb.org/', counties: 'Dallas, Collin, Fannin, Rockwall, Hunt, Grayson, Kaufman, Ellis, Navarro, Lamar, Delta, and Hopkins' },
  { id: 'san-antonio-food-bank', name: 'San Antonio Food Bank', address: '5200 Historic Old Hwy 90, San Antonio, TX 78227', zip: '78227', phone: '210-337-3663', website: 'https://safoodbank.org/', counties: 'Atascosa, Bandera, Bexar, Coke, Comal, Concho, Crockett, Edwards, Frio, Guadalupe, Irion, Karnes, Kendall, Kerr, Kimble, La Salle, McCulloch, Mason, Medina, Menard, Reagan, Real, Schleicher, Sterling, Sutton, Tom Green, Uvalde, Wilson, and Zavala' },
  { id: 'south-plains-food-bank', name: 'South Plains Food Bank', address: '5605 MLK Boulevard, Lubbock, TX 79404', zip: '79404', phone: '806-763-3003', website: 'https://www.spfb.org/', counties: 'Bailey, Cochran, Crosby, Dickens, Floyd, Gaines, Garza, Hale, Hockley, Kent, King, Lamb, Lubbock, Lynn, Motley, Scurry, Stonewall, Terry, and Yoakum' },
  { id: 'south-texas-food-bank', name: 'South Texas Food Bank', address: '2121 Jefferson St, Laredo, TX 78040', zip: '78040', phone: '956-726-3120', website: 'https://www.southtexasfoodbank.org/', counties: 'Dimmit, Jim Hogg, Kinney, Maverick, Starr, Val Verde, Webb, and Zapata' },
  { id: 'southeast-texas-food-bank', name: 'Southeast Texas Food Bank', address: '3845 Martin Luther King Parkway, Beaumont, TX 77705', zip: '77705', phone: '409-839-8777', website: 'https://setxfoodbank.org/', counties: 'Hardin, Jasper, Jefferson, Newton, Orange, Polk, Sabine, and Tyler' },
  { id: 'tarrant-area-food-bank', name: 'Tarrant Area Food Bank', address: '2600 Cullen St, Fort Worth, TX 76107', zip: '76107', phone: '817-857-7100', website: 'https://tafb.org/', counties: 'Bosque, Cooke, Denton, Erath, Hamilton, Hill, Hood, Johnson, Palo Pinto, Parker, Somervell, Tarrant, and Wise' },
  { id: 'west-texas-food-bank', name: 'West Texas Food Bank', address: '411 S Pagewood Ave, Odessa, TX 79761', zip: '79761', phone: '432-580-6333', website: 'https://wtxfoodbank.org/', counties: 'Andrews, Borden, Brewster, Crane, Dawson, Ector, Glasscock, Howard, Jeff Davis, Loving, Martin, Midland, Pecos, Presidio, Reeves, Terrell, Upton, Ward, and Winkler' },
  { id: 'wichita-falls-area-food-bank', name: 'Wichita Falls Area Food Bank', address: '1230 Midwestern Parkway, Wichita Falls, TX 76307', zip: '76307', phone: '940-766-2322', website: 'https://www.wfafb.org/', counties: 'Archer, Baylor, Clay, Foard, Haskell, Jack, Knox, Montague, Throckmorton, Wichita, Wilbarger, and Young' }
];

export const texasDataSources = {
  foodBanks: 'https://www.feedingtexas.org/food-banks/?display=all',
  zipData: 'https://www.geonames.org/export/zip/'
};
