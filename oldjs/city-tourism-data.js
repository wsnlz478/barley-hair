/**
 * City Tourism Data
 * 城市旅游数据：每个城市的6个著名景点
 */

var CITY_TOURISM_DATA = {
    'beijing': [
        { name: 'Forbidden City', desc: 'Imperial palace complex from Ming Dynasty' },
        { name: 'Great Wall', desc: 'Iconic ancient defensive structure' },
        { name: 'Temple of Heaven', desc: 'Sacred complex for imperial ceremonies' },
        { name: 'Summer Palace', desc: 'Royal garden with lakes and pavilions' },
        { name: 'Tiananmen Square', desc: 'Historic political center of China' },
        { name: 'Hutong Alleys', desc: 'Traditional narrow streets and courtyards' }
    ],
    'shanghai': [
        { name: 'The Bund', desc: 'Iconic waterfront with colonial architecture' },
        { name: 'Yu Garden', desc: 'Classical Chinese garden from Ming Dynasty' },
        { name: 'Oriental Pearl Tower', desc: 'Futuristic TV tower with observation deck' },
        { name: 'Jing\'an Temple', desc: 'Ancient Buddhist temple in modern center' },
        { name: 'Nanjing Road', desc: 'Famous shopping street and pedestrian mall' },
        { name: 'Shanghai Disney', desc: 'Magical theme park for all ages' }
    ],
    'guangzhou': [
        { name: 'Canton Tower', desc: 'Tall TV tower with city views' },
        { name: 'Chen Clan Academy', desc: 'Historic ancestral temple with art' },
        { name: 'Baiyun Mountain', desc: 'Scenic mountain with hiking trails' },
        { name: 'Shamian Island', desc: 'Colonial-era island with European style' },
        { name: 'Yuexiu Park', desc: 'Large park with Five Rams Statue' },
        { name: 'Guangzhou Zoo', desc: 'Home to pandas and rare animals' }
    ],
    'shenzhen': [
        { name: 'Window of the World', desc: 'Miniature replicas of world landmarks' },
        { name: 'Splendid China', desc: 'Theme park showcasing Chinese culture' },
        { name: 'Dameisha Beach', desc: 'Popular beach with golden sand' },
        { name: 'Wutong Mountain', desc: 'Highest peak with panoramic views' },
        { name: 'OCT East', desc: 'Eco-themed resort and entertainment' },
        { name: 'Dafen Oil Painting Village', desc: 'Famous for replica artwork' }
    ],
    'chengdu': [
        { name: 'Panda Base', desc: 'Giant panda breeding and research center' },
        { name: 'Jinli Street', desc: 'Ancient street with traditional snacks' },
        { name: 'Wuhou Shrine', desc: 'Memorial temple of Three Kingdoms' },
        { name: 'Dujiangyan', desc: 'Ancient irrigation system UNESCO site' },
        { name: 'Mount Qingcheng', desc: 'Sacred Taoist mountain retreat' },
        { name: 'Kuanzhai Alley', desc: 'Historic wide and narrow alleys' }
    ],
    'chongqing': [
        { name: 'Ciqikou Ancient Town', desc: 'Historic port town with Ming architecture' },
        { name: 'Three Gorges Museum', desc: 'Museum showcasing Yangtze culture' },
        { name: 'Fengdu Ghost City', desc: 'Mythological underworld theme park' },
        { name: 'Dazu Rock Carvings', desc: 'UNESCO ancient Buddhist sculptures' },
        { name: 'Wulong Karst', desc: 'Natural stone arches and caves' },
        { name: 'Hongya Cave', desc: 'Stilted buildings with night views' }
    ],
    'hangzhou': [
        { name: 'West Lake', desc: 'UNESCO scenic lake with pagodas' },
        { name: 'Lingyin Temple', desc: 'Ancient Buddhist temple from 328 AD' },
        { name: 'Leifeng Pagoda', desc: 'Historic tower with lake views' },
        { name: 'Longjing Tea Village', desc: 'Famous green tea plantations' },
        { name: 'Xixi Wetland', desc: 'National wetland park with boats' },
        { name: 'Hefang Street', desc: 'Traditional shopping and food street' }
    ],
    'wuhan': [
        { name: 'Yellow Crane Tower', desc: 'Ancient tower with Yangtze views' },
        { name: 'East Lake', desc: 'Large scenic lake with parks' },
        { name: 'Wuhan University', desc: 'Beautiful campus with cherry blossoms' },
        { name: 'Hubei Provincial Museum', desc: 'Home to ancient chime bells' },
        { name: 'Yangtze River Bridge', desc: 'First bridge across the Yangtze' },
        { name: 'Guiyuan Temple', desc: 'Buddhist temple with 500 arhats' }
    ],
    'nanjing': [
        { name: 'Sun Yat-sen Mausoleum', desc: 'Tomb of first ROC president' },
        { name: 'Confucius Temple', desc: 'Ancient temple and learning center' },
        { name: 'Ming Xiaoling', desc: 'Ming Dynasty emperor tomb complex' },
        { name: 'Nanjing Massacre Memorial', desc: 'Historic memorial hall' },
        { name: 'Qinhuai River', desc: 'Historic river with night markets' },
        { name: 'City Wall', desc: 'Ancient Ming Dynasty fortification' }
    ],
    'xian': [
        { name: 'Terracotta Army', desc: 'UNESCO ancient warrior sculptures' },
        { name: 'Ancient City Wall', desc: 'Well-preserved Ming Dynasty wall' },
        { name: 'Big Wild Goose Pagoda', desc: 'Buddhist pagoda from 652 AD' },
        { name: 'Muslim Quarter', desc: 'Historic area with street food' },
        { name: 'Huaqing Palace', desc: 'Ancient imperial hot springs' },
        { name: 'Shaanxi History Museum', desc: 'Provincial museum with artifacts' }
    ],
    'tianjin': [
        { name: 'Ancient Culture Street', desc: 'Traditional architecture and crafts' },
        { name: 'Italian Style Quarter', desc: 'European-style buildings and cafes' },
        { name: 'Eye of Tianjin', desc: 'Giant Ferris wheel over Hai River' },
        { name: 'Dagu Fort', desc: 'Historic coastal defense fort' },
        { name: 'Huangyaguan Great Wall', desc: 'Restored section of Great Wall' },
        { name: 'Binjiang Dao', desc: 'Famous pedestrian shopping street' }
    ],
    'suzhou': [
        { name: 'Humble Administrator Garden', desc: 'UNESCO classical Chinese garden' },
        { name: 'Tiger Hill', desc: 'Historic hill with pagoda and tombs' },
        { name: 'Zhouzhuang Water Town', desc: 'Ancient canal town with bridges' },
        { name: 'Suzhou Museum', desc: 'Modern museum with traditional art' },
        { name: 'Lion Grove Garden', desc: 'Rock garden with maze-like paths' },
        { name: 'Tongli Water Town', desc: 'Well-preserved water town' }
    ],
    'changsha': [
        { name: 'Yuelu Mountain', desc: 'Scenic mountain with ancient academy' },
        { name: 'Orange Island', desc: 'Island park in Xiang River' },
        { name: 'Hunan Museum', desc: 'Home to Mawangdui artifacts' },
        { name: 'Tianxin Pavilion', desc: 'Ancient city gate tower' },
        { name: 'Kaifu Temple', desc: 'Buddhist temple from Tang Dynasty' },
        { name: 'World Window', desc: 'Theme park with world landmarks' }
    ],
    'shenyang': [
        { name: 'Mukden Palace', desc: 'UNESCO Qing Dynasty palace' },
        { name: 'Beiling Park', desc: 'Imperial tomb with pine forests' },
        { name: 'Zhaoling Tomb', desc: 'Tomb of Qing Emperor Taizong' },
        { name: 'Shenyang Imperial Palace', desc: 'Early Qing royal residence' },
        { name: 'Liaoning Provincial Museum', desc: 'Provincial museum with artifacts' },
        { name: 'Qipanshan', desc: 'Scenic mountain resort area' }
    ],
    'qingdao': [
        { name: 'Zhanqiao Pier', desc: 'Iconic century-old pier' },
        { name: 'Badaguan', desc: 'Historic European-style villas' },
        { name: 'Laoshan Mountain', desc: 'Sacred Taoist mountain by sea' },
        { name: 'May Fourth Square', desc: 'Modern waterfront plaza' },
        { name: 'Qingdao Beer Museum', desc: 'History of Tsingtao beer' },
        { name: 'Xiaoyu Hill', desc: 'Hill with panoramic city views' }
    ],
    'dalian': [
        { name: 'Xinghai Square', desc: 'Largest city square in Asia' },
        { name: 'Tiger Beach', desc: 'Scenic coastal resort area' },
        { name: 'Golden Pebble Beach', desc: 'Beautiful beach with rock formations' },
        { name: 'Dalian Forest Zoo', desc: 'Large zoo with marine animals' },
        { name: 'Binhai Road', desc: 'Coastal scenic driving route' },
        { name: 'Labor Park', desc: 'Historic park with monuments' }
    ],
    'jinan': [
        { name: 'Baotu Spring', desc: 'Famous artesian spring since Shang Dynasty' },
        { name: 'Daming Lake', desc: 'Historic lake with lotus flowers' },
        { name: 'Thousand Buddha Mountain', desc: 'Mountain with Buddhist statues' },
        { name: 'Black Tiger Spring', desc: 'Ancient spring with tiger head' },
        { name: 'Quancheng Square', desc: 'Modern square with fountains' },
        { name: 'Shandong Provincial Museum', desc: 'Provincial museum with artifacts' }
    ],
    'harbin': [
        { name: 'Saint Sophia Cathedral', desc: 'Russian Orthodox church from 1907' },
        { name: 'Central Street', desc: 'European-style pedestrian street' },
        { name: 'Ice and Snow World', desc: 'Winter festival ice sculptures' },
        { name: 'Zhaolin Park', desc: 'Park with ice lantern shows' },
        { name: 'Siberian Tiger Park', desc: 'Largest Siberian tiger reserve' },
        { name: 'Songhua River', desc: 'Major river with winter activities' }
    ],
    'zhengzhou': [
        { name: 'Shaolin Temple', desc: 'Famous Buddhist and kung fu temple' },
        { name: 'Yellow River Scenic', desc: 'Mother River with cultural sites' },
        { name: 'Henan Museum', desc: 'Provincial museum with ancient artifacts' },
        { name: 'Zhengzhou Shang City', desc: 'Ancient Shang Dynasty ruins' },
        { name: 'Songshan Mountain', desc: 'Sacred mountain with temples' },
        { name: 'Zhengzhou Botanical Garden', desc: 'Large garden with rare plants' }
    ],
    'kunming': [
        { name: 'Stone Forest', desc: 'UNESCO limestone karst formations' },
        { name: 'Dianchi Lake', desc: 'Large lake with西山 views' },
        { name: 'Golden Temple', desc: 'Taoist temple with bronze hall' },
        { name: 'Yunnan Nationalities Village', desc: 'Ethnic minority culture park' },
        { name: 'Western Hills', desc: 'Scenic hills with Dragon Gate' },
        { name: 'Green Lake Park', desc: 'Urban park with winter seagulls' }
    ],
    'fuzhou': [
        { name: 'Drum Mountain', desc: 'Scenic mountain with ancient temples' },
        { name: 'West Lake Park', desc: 'Historic lake with gardens' },
        { name: 'Linze Temple', desc: 'Buddhist temple from Liang Dynasty' },
        { name: 'Fuzhou Forest Zoo', desc: 'Large zoo in natural setting' },
        { name: 'Three Lanes Seven Alleys', desc: 'Historic district with Ming architecture' },
        { name: 'Jinshan Temple', desc: 'Temple on Min River island' }
    ],
    'nanning': [
        { name: 'Qingxiu Mountain', desc: 'Scenic mountain with pagodas' },
        { name: 'Nanning Zoo', desc: 'Large zoo with rare animals' },
        { name: 'Yangmei Ancient Town', desc: 'Preserved Qing Dynasty town' },
        { name: 'Detian Waterfall', desc: 'Largest transnational waterfall in Asia' },
        { name: 'Guangxi Museum', desc: 'Museum of Zhuang culture' },
        { name: 'Nanhu Lake', desc: 'Urban lake with parks' }
    ],
    'guiyang': [
        { name: 'Huangguoshu Waterfall', desc: 'Largest waterfall in China' },
        { name: 'Qianling Mountain', desc: 'Urban mountain with temples' },
        { name: 'Tianhe Pool', desc: 'Scenic lake with karst landscape' },
        { name: 'Guizhou Provincial Museum', desc: 'Museum of Miao and Dong culture' },
        { name: 'Qingyan Ancient Town', desc: 'Ming Dynasty military town' },
        { name: 'Xifeng Concentration Camp', desc: 'Historic revolutionary site' }
    ],
    'taiyuan': [
        { name: 'Jinci Temple', desc: 'Ancient ancestral temple complex' },
        { name: 'Yingze Park', desc: 'Historic park with museums' },
        { name: 'Shuangta Temple', desc: 'Twin pagodas from Ming Dynasty' },
        { name: 'Longtan Park', desc: 'Large park with lakes' },
        { name: 'Shanxi Museum', desc: 'Provincial museum with artifacts' },
        { name: 'Mengshan Giant Buddha', desc: 'Ancient carved Buddha statue' }
    ],
    'nanchang': [
        { name: 'Tengwang Pavilion', desc: 'Famous pavilion from Tang Dynasty' },
        { name: 'Bayi Square', desc: 'Commemorates Nanchang Uprising' },
        { name: 'Poyang Lake', desc: 'Largest freshwater lake in China' },
        { name: 'Meiling', desc: 'Scenic mountain resort area' },
        { name: 'Jiangxi Provincial Museum', desc: 'Provincial museum with artifacts' },
        { name: 'Shengjin Tower', desc: 'Historic tower with city views' }
    ],
    'hefei': [
        { name: 'Chaohu Lake', desc: 'One of China\'s five largest lakes' },
        { name: 'Xiao Yao Jin', desc: 'Historic site of Three Kingdoms' },
        { name: 'Hefei Botanical Garden', desc: 'Large garden with rare plants' },
        { name: 'Anhui Museum', desc: 'Provincial museum with artifacts' },
        { name: 'Bao Zheng Temple', desc: 'Temple honoring Judge Bao' },
        { name: 'Shushan Forest Park', desc: 'Urban forest with hiking trails' }
    ],
    'shijiazhuang': [
        { name: 'Zhaozhou Bridge', desc: 'Ancient stone arch bridge from Sui Dynasty' },
        { name: 'Linji Temple', desc: 'Important Buddhist temple' },
        { name: 'Cangyan Mountain', desc: 'Scenic mountain with temples' },
        { name: 'Hebei Provincial Museum', desc: 'Museum with ancient artifacts' },
        { name: 'Xibaipo Memorial', desc: 'Revolutionary historic site' },
        { name: 'Longxing Temple', desc: 'Ancient Buddhist temple from Sui' }
    ],
    'wuxi': [
        { name: 'Liyuan Garden', desc: 'Classical garden on Taihu Lake' },
        { name: 'Yuantouzhu', desc: 'Turtle Head Peninsula on Taihu' },
        { name: 'Huishan Ancient Town', desc: 'Historic town with ancestral halls' },
        { name: 'Nanzhang Temple', desc: 'Ancient Buddhist temple' },
        { name: 'Wuxi Museum', desc: 'Modern museum with local history' },
        { name: 'Xihui Park', desc: 'Park with gardens and temples' }
    ],
    'wenzhou': [
        { name: 'Yandang Mountain', desc: 'UNESCO scenic mountain range' },
        { name: 'Nanxi River', desc: 'Scenic river with bamboo rafts' },
        { name: 'Jiangxin Island', desc: 'Island in Ou River with pagodas' },
        { name: 'Wenzhou Zoo', desc: 'Large zoo with rare animals' },
        { name: 'Xitong Village', desc: 'Ancient village with Ming architecture' },
        { name: 'Wenzhou Museum', desc: 'Museum of local culture' }
    ],
    'foshan': [
        { name: 'Ancestral Temple', desc: 'Taoist temple with martial arts history' },
        { name: 'Xiqiao Mountain', desc: 'Scenic mountain with Buddha statue' },
        { name: 'Qinghui Garden', desc: 'Classical Lingnan garden' },
        { name: 'Nanfeng Ancient Kiln', desc: '500-year-old pottery kiln' },
        { name: 'Foshan Martial Arts Museum', desc: 'Home of Wing Chun and Wong Fei-hung' },
        { name: 'Chancheng District', desc: 'Historic city center' }
    ],
    'ningbo': [
        { name: 'Tiantong Temple', desc: 'Ancient Buddhist temple since Jin Dynasty' },
        { name: 'Dongqian Lake', desc: 'Large lake with scenic views' },
        { name: 'Tahou Island', desc: 'Island with fishing village culture' },
        { name: 'Ningbo Old Bund', desc: 'Historic waterfront area' },
        { name: 'Yuehu Park', desc: 'Historic park with gardens' },
        { name: 'Baoguo Temple', desc: 'Ancient temple from Song Dynasty' }
    ],
    'nantong': [
        { name: 'Langshan Mountain', desc: 'One of eight small mountains' },
        { name: 'Haohe River', desc: 'Historic moat with parks' },
        { name: 'Nantong Museum', desc: 'First museum built by Chinese' },
        { name: 'Shuihui Garden', desc: 'Classical garden from Ming Dynasty' },
        { name: 'Zhang Jian Memorial', desc: 'Museum honoring industrialist' },
        { name: 'Tongzhou Ancient Town', desc: 'Historic town with canals' }
    ],
    'taizhou': [
        { name: 'Taizhou Ancient Wall', desc: 'Well-preserved city wall' },
        { name: 'Linhai Old Town', desc: 'Historic town with Ming streets' },
        { name: 'Xianju Scenic Area', desc: 'Mountains with glass bridge' },
        { name: 'Tiantai Mountain', desc: 'Sacred Buddhist mountain' },
        { name: 'Jiangnan Great Wall', desc: 'Ancient wall in Taizhou' },
        { name: 'Taizhou Museum', desc: 'Museum of local culture' }
    ],
    'yangzhou': [
        { name: 'Slender West Lake', desc: 'UNESCO scenic lake with bridges' },
        { name: 'Ge Garden', desc: 'Classical garden with rockeries' },
        { name: 'He Garden', desc: 'Well-preserved private garden' },
        { name: 'Dongguan Street', desc: 'Historic street with snacks' },
        { name: 'Daming Temple', desc: 'Ancient Buddhist temple' },
        { name: 'Yangzhou Museum', desc: 'Museum of local history' }
    ]
};
