import { FamilyMember } from './types';

export const FAMILY_MEMBERS: FamilyMember[] = [
  {
    id: 'chenxi',
    name: 'Chenxi',
    role: 'Founder & Main Brand',
    description: '一家之主，母亲，人类女性。女巫，饮品师，性格内向敏感。',
    avatar: '/chenxi-cats-drink-lab/chenxi_head.jpg',
    drinkLine: {
      id: 'chenxi-line',
      title: "Chenxi's Lab",
      subtitle: '风味：Full Bloom 咖啡豆 / Chai / 牛奶',
      musicTitle: 'From the Start',
      audioSrc: '/chenxi-cats-drink-lab/From the Start.mp3',
      themeColor: 'bg-[#F7F5F0]',
      mainMenu: {
        id: 'chenxi-main',
        title: '晨溪常驻饮品录',
        releaseDate: 'All Season',
        description: '这里没有推荐，只有记录。口味是私人的。',
        drinks: [
          {
            id: 'c-1',
            name: '初　光',
            description: '浅烘，带烤坚果的底色，酸度温柔。牛奶把棱角压低，不是磨平，是软化。喝这杯的时候窗外刚亮，什么都还没开始，也不需要开始。',
            ingredients: ['Full Bloom 手冲或摩卡', '全脂牛奶'],
            steps: ['萃取 Full Bloom 咖啡豆。', '加入全脂牛奶，比例按喜好调整。'],
            image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800',
            tags: ['咖啡系', 'Full Bloom', '牛奶']
          },
          {
            id: 'c-2',
            name: '两种声音',
            description: '两支豆子等比，像两种性格同时说话，谁也没有赢。口感比单支更圆润，有一种说不明白的犹豫，是还没决定今天要成为哪种人。',
            ingredients: ['Full Bloom 50%', 'Pearl 50%', '手冲或摩卡', '牛奶'],
            steps: ['将 Full Bloom 与 Pearl 按 1:1 混合。', '萃取咖啡。', '加入牛奶。'],
            image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
            tags: ['咖啡系', '混豆', '牛奶']
          },
          {
            id: 'c-3',
            name: '三分之一',
            description: '三支豆，比例刻意不对称。Schokolade 的黑巧克力尾韵最后才出现，像一个迟来的念头压在舌根。有层次，但不表演复杂——只是有些东西沉在下面，不急着浮上来。',
            ingredients: ['Full Bloom 40%', 'Pearl 30%', 'Schokolade 30%', '手冲或摩卡', '牛奶'],
            steps: ['按比例混合三支咖啡豆。', '萃取咖啡。', '加入牛奶。'],
            image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800',
            tags: ['咖啡系', '三豆混合', '牛奶']
          },
          {
            id: 'c-4',
            name: '暮色咖啡',
            description: 'Blossom 的花香和薄荷不抢，像夏天的傍晚。喝完不会更清醒，也不会更困，只是觉得今天过得有点长。适合不知道算几点的那个时刻。',
            ingredients: ['Blossom 手冲或摩卡', '薄荷牛奶'],
            steps: ['萃取 Blossom 咖啡。', '加入薄荷牛奶。'],
            image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800',
            tags: ['咖啡系', 'Blossom', '薄荷']
          },
          {
            id: 'c-5',
            name: '晨　溪',
            description: '肉桂、豆蔻、姜、丁香，各自说话，没有一种太强势。名字来自妈妈家乡一条没有名字的河——她说早晨的水是凉的，有草腥气，但不难闻。这杯是温的，香的，和那条河没有关系，又有一点关系。',
            ingredients: ['Chai Latte', '肉桂', '豆蔻', '姜', '丁香', '牛奶'],
            steps: ['煮香料茶底。', '加入牛奶，加热至合适温度。'],
            image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=800',
            tags: ['奶茶系', 'Chai', '香料']
          },
          {
            id: 'c-6',
            name: '加　重',
            description: '不是因为喜欢更辣，是需要那个气味占领整个房间，让今天有一个确切的气味，而不是空白。香料被牛奶柔化了进攻，但肉桂留下来——在舌根，在呼吸里，在你闭上眼睛以后。',
            ingredients: ['Chai Latte', '肉桂加量', '牛奶'],
            steps: ['煮香料茶底，肉桂用量加倍。', '加入牛奶。'],
            image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&q=80&w=800',
            tags: ['奶茶系', 'Chai', '肉桂加量']
          },
          {
            id: 'c-7',
            name: '落　地',
            description: '薄荷和牛奶是奇怪的组合，奇怪得理所当然。凉意被温度托住，不凉也不暖，是一种被平衡掉的感觉。有什么重量压在你腿上，你没有动。就喝这个。',
            ingredients: ['薄荷', '全脂牛奶（温）'],
            steps: ['将薄荷叶放入温热的全脂牛奶中浸泡。', '保持温热，不需要煮沸。'],
            image: 'https://images.unsplash.com/photo-1473197324853-39a6b5e23a94?auto=format&fit=crop&q=80&w=800',
            tags: ['奶茶系', '薄荷', '温饮']
          },
          {
            id: 'c-8',
            name: '绿',
            description: '植物的涩在前，牛奶在后面跟上来。不甜，不表演清爽。适合什么都没发生的下午，或者什么都发生了、你假装没注意到的下午。光从窗帘缝进来，停在地板上，没有人管它。',
            ingredients: ['抹茶', '全脂牛奶'],
            steps: ['抹茶粉加少量热水调匀。', '加入全脂牛奶，不加糖。'],
            image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=800',
            tags: ['奶茶系', '抹茶', '无糖']
          },
          {
            id: 'c-9',
            name: '白　雾',
            description: '柚子的苦底先到，薰衣草只是一层气味，不是味道——轻到像是你想象出来的。气泡让整杯变得比实际更轻。适合坐着发呆的下午。不需要想，也没在想。',
            ingredients: ['白葡萄柚汁', '薰衣草糖浆', '气泡水'],
            steps: ['杯中加入白葡萄柚汁。', '加入少量薰衣草糖浆。', '注入气泡水，轻轻搅拌。'],
            image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&q=80&w=800',
            tags: ['气泡系', '柚子', '薰衣草']
          },
          {
            id: 'c-10',
            name: '水　牛',
            description: '水牛奶的脂肪比普通牛奶更厚，蛋糕有种沉甸甸的实感，不是甜腻，是重量。吃一口，像把今天安置好了。',
            ingredients: ['水牛奶蛋糕'],
            steps: ['甜点，直接享用。'],
            image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800',
            tags: ['甜点', '水牛奶']
          }
        ]
      },
      menus: [
        {
          id: 'chenxi-spring-2026',
          title: '2026春日特辑：暗恋与小猫',
          releaseDate: '2026-03-20',
          description: '我不知道牵手是什么感觉。但我知道你们用湿漉漉的小舌头舔我的掌心。还是世界上唯二等我回家，看到我的伤口会担心的 living creature。',
          drinks: [
            {
              id: 's26-1',
              name: '我没有说出口',
              description: '深琥珀色沉底，气泡水在上层形成浅金色过渡。不加装饰，气泡自然消散。',
              ingredients: ['冷萃咖啡 60ml', '柚子汁 30ml', '龙舌兰糖浆 5ml', '气泡水 80ml'],
              steps: ['冷萃咖啡、柚子汁、龙舌兰糖浆混合摇匀。', '倒入装满冰块的高杯。', '沿杯壁缓缓注入气泡水，不搅拌。'],
              image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=800',
              tags: ['暗恋', '气泡', '冷萃']
            },
            {
              id: 's26-2',
              name: '不在场证明',
              description: '极浅的金棕色，几乎透明。青柠切片沉入杯中，透光感强。',
              ingredients: ['白葡萄柚汁 40ml', '焙茶冷泡 60ml', '青柠汁 10ml', '苏打水 60ml'],
              steps: ['焙茶冷泡（1g茶：100ml冷水，冷藏4小时）取60ml。', '与白葡萄柚汁、青柠汁混合倒入冰杯。', '补苏打水 60ml。'],
              image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&q=80&w=800',
              tags: ['暗恋', '气泡', '焙茶']
            },
            {
              id: 's26-3',
              name: '单方面的春天',
              description: '浅琥珀色，清澈。不分层，不装饰。让颜色单独说话。',
              ingredients: ['手冲咖啡（浅烘果酸豆）150ml', '接骨木花糖浆 8ml'],
              steps: ['手冲咖啡（水温90°C，粉水比1:15）萃取150ml。', '冷却后加接骨木花糖浆 8ml，搅拌均匀。', '倒入冰杯直接饮用，不加奶，不加气泡。'],
              image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800',
              tags: ['暗恋', '手冲', '接骨木花']
            },
            {
              id: 's26-4',
              name: '结局是已知的',
              description: '深棕近黑，无气泡，无冰。矮而宽的岩石杯，液面平静。',
              ingredients: ['冷萃浓缩 50ml', '苦柚皮糖浆 10ml', '矿泉水（无气）60ml'],
              steps: ['冷萃浓缩（粉水比1:8，冷藏12小时）取50ml。', '加苦柚皮糖浆 10ml，矿泉水 60ml。', '轻轻搅拌两圈，不要打出气泡。'],
              image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800',
              tags: ['暗恋', '冷萃', '无气']
            },
            {
              id: 's26-5',
              name: '你不知道我喜欢你',
              description: '三层：底部深灰（芝麻）、中层米白（豆浆）、上层墨绿（抹茶）。热饮，饮前轻搅。',
              ingredients: ['黑芝麻糊 20ml', '无糖豆浆 120ml', '抹茶粉 3g'],
              steps: ['黑芝麻糊先倒杯底。', '无糖豆浆加热至60°C，缓缓注入，不搅拌形成分层。', '抹茶粉用少量70°C热水调成液，沿杯壁缓缓倒在豆浆上层。'],
              image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=800',
              tags: ['暗恋', '抹茶', '三层']
            },
            {
              id: 's26-6',
              name: '湿漉漉的小舌头',
              description: '深巧克力棕，表面有盐粒若隐若现。厚壁陶杯，热饮。',
              ingredients: ['榛子奶 180ml', '70% 黑巧克力 20g', '海盐少许'],
              steps: ['黑巧克力隔水融化。', '加榛子奶小火加热至融合，不超过70°C。', '倒入杯中，表面撒极少量海盐片。'],
              image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=80&w=800',
              tags: ['陪伴', '热饮', '巧克力']
            },
            {
              id: 's26-7',
              name: '世界上唯二等我回家的猫',
              description: '深砖红色茶汤托着米白色奶泡，奶泡厚而粗糙。圆肚玻璃杯或陶杯，热饮。',
              ingredients: ['路易博士茶（Rooibos）120ml', '燕麦奶 80ml', '枫糖浆 8ml'],
              steps: ['路易博士茶包用90°C热水冲泡5分钟，取茶汤120ml，加枫糖浆搅匀。', '燕麦奶单独加热打出轻奶泡。', '奶泡缓缓倒入茶汤上层。'],
              image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800',
              tags: ['陪伴', '热饮', 'Rooibos']
            },
            {
              id: 's26-8',
              name: '我陪我自己',
              description: '热饮：深棕色，表面有巧克力纹路自然扩散。冷饮：巧克力酱沉底，形成渐变。',
              ingredients: ['手冲咖啡（中烘豆）150ml', '70%黑巧 15g', '热水 15ml'],
              steps: ['黑巧克力酱：黑巧加热水融化搅匀，倒杯底。', '手冲咖啡（粉水比1:14）萃取150ml，直接冲入，不搅拌。', '可热饮或冷萃版本冷饮。'],
              image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800',
              tags: ['陪伴', '摩卡', '巧克力']
            },
            {
              id: 's26-9',
              name: '小猫看到我的伤口会担心',
              description: '米白底色上有抹茶绿的云雾状扩散，不均匀，像被接住但没有完全消失。宽口浅杯，热饮。',
              ingredients: ['抹茶粉 3g', '白巧克力 10g', '燕麦奶 160ml'],
              steps: ['白巧克力加燕麦奶小火加热融化。', '抹茶粉用少量70°C热水调成糊。', '将抹茶糊缓缓倒入奶液上层，轻轻搅动两圈，不完全融合。'],
              image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=800',
              tags: ['陪伴', '抹茶', '白巧克力']
            },
            {
              id: 's26-10',
              name: '今晚想跑酷，不睡',
              description: '深玫瑰红，气泡从底部升起。柠檬片沉入杯中，高杯，颜色浓烈。',
              ingredients: ['番石榴汁 60ml', '洛神花茶 60ml', '气泡水 60ml', '柠檬汁 10ml'],
              steps: ['洛神花干5g热水冲泡10分钟，取茶汤冷却。', '番石榴汁与洛神花茶混合，倒入冰杯。', '补气泡水，挤入柠檬汁，不搅拌。'],
              image: 'https://images.unsplash.com/photo-1473197324853-39a6b5e23a94?auto=format&fit=crop&q=80&w=800',
              tags: ['陪伴', '气泡', '洛神花']
            },
            {
              id: 's26-11',
              name: '突然从柜子后面跳出来',
              description: '明黄色，百香果籽悬浮其中，薄荷叶漂在表面。颜色强烈跳跃。',
              ingredients: ['百香果 1颗', '青柠汁 15ml', '蜂蜜 8ml', '气泡水 120ml', '薄荷叶'],
              steps: ['百香果挖出果肉，加青柠汁、蜂蜜搅匀。', '倒入冰杯，注入气泡水。', '放薄荷叶，不搅拌。'],
              image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&q=80&w=800',
              tags: ['猫爬架', '气泡', '百香果']
            },
            {
              id: 's26-12',
              name: '把我的耳机线咬断了',
              description: '粉橙色为主，乌龙茶在中层形成淡棕色过渡带。自然分层，高直杯。',
              ingredients: ['西柚汁 40ml', '乌龙茶冷泡 60ml', '荔枝水 30ml', '气泡水 50ml'],
              steps: ['乌龙茶冷泡（1.5g：100ml，冷藏4小时）取60ml。', '西柚汁、荔枝水混合倒入冰杯，乌龙茶缓缓倒入。', '最后补气泡水。'],
              image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800',
              tags: ['猫爬架', '气泡', '乌龙']
            },
            {
              id: 's26-13',
              name: '坐在我的键盘上',
              description: '底层深棕（冷萃）、上层乳白（椰奶），表面抹茶绿粉末如同不请自来的痕迹。',
              ingredients: ['冷萃咖啡 80ml', '椰奶 100ml', '抹茶粉少许'],
              steps: ['椰奶倒入杯中加冰。', '冷萃咖啡缓缓沿杯壁倒入，形成分层。', '表面筛上少量抹茶粉，不搅拌。'],
              image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800',
              tags: ['猫爬架', '冷萃', '椰奶']
            },
            {
              id: 's26-14',
              name: '你追光但永远追不上',
              description: '暖橙色，气泡活跃。不分层，颜色均匀明亮。很快、很亮、抓不住。',
              ingredients: ['鲜榨柳橙汁 100ml', '鲜姜汁 8ml', '蜂蜜 8ml', '气泡水 60ml'],
              steps: ['鲜姜磨汁加蜂蜜搅匀成姜蜜底。', '柳橙汁倒入冰杯，加姜蜜搅匀。', '注入气泡水。'],
              image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=80&w=800',
              tags: ['猫爬架', '气泡', '柳橙']
            },
            {
              id: 's26-15',
              name: '睡在我的裙子上',
              description: '深棕底色，厚实的米白奶泡盖顶，肉桂粉轻轻落在奶泡上。宽口陶杯，热饮。',
              ingredients: ['榛子糖浆 10ml', '黑巧克力酱 15ml', '浓缩咖啡 40ml', '燕麦奶 140ml', '肉桂粉'],
              steps: ['榛子糖浆加黑巧克力酱倒杯底，加入浓缩咖啡搅匀。', '燕麦奶加热打出厚奶泡，缓缓倒入。', '表面撒肉桂粉。'],
              image: 'https://images.unsplash.com/photo-1544787210-2213d84ad960?auto=format&fit=crop&q=80&w=800',
              tags: ['猫爬架', '热饮', '榛子摩卡']
            }
          ]
        },
        {
          id: 'chenxi-intern-2026',
          title: '2026春日特辑：找实习让我很烦躁',
          releaseDate: '2026-03-20',
          description: '其实我已经没什么斗志了。只是说回家会被骂死，需要找一个存活的方式。',
          drinks: [
            {
              id: 'i26-1',
              name: '拒绝参加群面',
              description: '深棕，无分层，无装饰。矮直杯。',
              ingredients: ['冷萃咖啡 80ml', '苦柚皮糖浆 8ml', '气泡水 60ml'],
              steps: ['冷萃与苦柚皮糖浆混匀。', '补气泡水，不搅拌，不加冰。'],
              image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800',
              tags: ['最终面试', '冷萃', '无装饰']
            },
            {
              id: 'i26-2',
              name: '腾讯二面挂了',
              description: '巧克力纹路在杯底扩散，上层清透。高直杯，冷饮。',
              ingredients: ['冷萃咖啡 150ml', '黑巧克力酱 15ml'],
              steps: ['黑巧克力酱倒杯底。', '冷萃咖啡缓缓注入，不搅拌，加冰。'],
              image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800',
              tags: ['最终面试', '冷萃', '巧克力']
            },
            {
              id: 'i26-3',
              name: '字节一面结巴',
              description: '哑光绿，不打奶泡，表面平整。宽口陶杯。',
              ingredients: ['抹茶粉 3g', '燕麦奶 150ml', '姜汁 5ml'],
              steps: ['抹茶粉用70°C热水30ml调开。', '加燕麦奶加热至60°C。', '加姜汁搅匀，热饮。'],
              image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=800',
              tags: ['最终面试', '抹茶', '热饮']
            },
            {
              id: 'i26-4',
              name: '小红书面试被打断',
              description: '浅金色，气泡密集但消散快。高杯，不加装饰。',
              ingredients: ['白葡萄柚汁 60ml', '青柠汁 10ml', '接骨木花糖浆 8ml', '苏打水 80ml'],
              steps: ['白葡萄柚汁、青柠汁、接骨木花糖浆混匀。', '注入苏打水，不搅拌。'],
              image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&q=80&w=800',
              tags: ['最终面试', '气泡', '柚子']
            },
            {
              id: 'i26-5',
              name: '京东卡双9学历',
              description: '深琥珀棕，奶融进去看不见分层。厚壁陶杯。',
              ingredients: ['焙茶 8g', '燕麦奶 80ml', '热水 120ml'],
              steps: ['焙茶用90°C热水冲泡4分钟，取茶汤120ml。', '加燕麦奶，不加糖，加热至55°C，热饮。'],
              image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800',
              tags: ['最终面试', '焙茶', '无糖']
            },
            {
              id: 'i26-6',
              name: '美团的简历更新很差劲',
              description: '深玫红，无气泡，无冰。矮圆杯，液面平静。',
              ingredients: ['洛神花茶 120ml', '柠檬汁 15ml', '矿泉水（无气）60ml'],
              steps: ['洛神花干5g冲泡10分钟，取茶汤冷却。', '加柠檬汁、矿泉水，不加糖，不加气泡，冷饮。'],
              image: 'https://images.unsplash.com/photo-1473197324853-39a6b5e23a94?auto=format&fit=crop&q=80&w=800',
              tags: ['最终面试', '洛神花', '无气']
            },
            {
              id: 'i26-7',
              name: '香芋树轮蛋糕',
              description: '香芋是好闻的味道，但树轮蛋糕总带着一种难吃的奇怪粗糙感。',
              ingredients: ['香芋树轮蛋糕'],
              steps: ['甜点，直接享用。'],
              image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800',
              tags: ['甜点', '香芋']
            }
          ]
        },
        {
          id: 'chenxi-melinda-2026',
          title: '2026春日特辑：Melinda',
          releaseDate: '2026-03-25',
          description: '大多数坚果会得一种叫做偏头痛的病，会被用各种各样的方式凿开，吃掉。Melinda也是这样一种坚果，有的时候太痛的话，大脑会碎掉一样的，就像是开心果被碾碎，放在奶油尖尖上。',
          drinks: [
            {
              id: 'm26-1',
              name: '雪顶开心果碎绿茶',
              description: '茶汤是沉的黄绿色，奶油顶粗糙不规整，绿色碎粒嵌在白色里。宽口矮杯，冷饮。',
              ingredients: ['绿茶 150ml', '淡奶油 30ml', '开心果碎 5g'],
              steps: ['绿茶（80°C，2g茶叶泡3分钟）取150ml，冷却至室温后倒入冰杯。', '淡奶油打发至六分，堆在茶面上，不抹平。', '开心果碎撒在奶油顶部，用力一点，让碎粒嵌进去。'],
              image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=800',
              tags: ['轻度头痛', '绿茶', '坚果']
            },
            {
              id: 'm26-2',
              name: '核桃碎杏仁奶',
              description: '米白色奶液底部有巧克力暗纹扩散未尽，表面核桃碎颗粒分明。厚壁陶杯，热饮。',
              ingredients: ['杏仁奶 160ml', '70%黑巧克力 10g', '核桃碎 8g'],
              steps: ['杏仁奶小火加热至60°C。', '黑巧克力掰碎放杯底，热杏仁奶冲入，等30秒再搅拌两圈，不要完全融化。', '核桃碎干锅轻烘，撒在表面。'],
              image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=80&w=800',
              tags: ['轻度头痛', '杏仁奶', '黑巧']
            },
            {
              id: 'm26-3',
              name: '夏威夷果樱花奶油雪顶草莓抹茶奶',
              description: '底层墨绿，中层草莓粉红渗进绿色边缘，顶部奶油白堆着淡黄色果粒。名字很长，杯子也要大一点。高直杯，冷饮。',
              ingredients: ['抹茶粉 3g', '燕麦奶 120ml', '草莓 2颗', '淡奶油 30ml', '夏威夷果 2颗'],
              steps: ['抹茶粉用70°C热水30ml调开，加燕麦奶搅匀，倒入冰杯。', '草莓捣成粗泥，铺在抹茶奶上层。', '淡奶油打发堆顶，夏威夷果切粗粒撒在最上面。'],
              image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=800',
              tags: ['轻度头痛', '抹茶', '草莓']
            },
            {
              id: 'm26-4',
              name: '松子黑巧牛奶',
              description: '深巧克力棕，表面浮着松子——有的沉下去了，有的还在。矮圆杯，热饮。',
              ingredients: ['70%黑巧克力 20g', '全脂牛奶 160ml', '松子 8g'],
              steps: ['黑巧克力隔水融化，加全脂牛奶小火加热至融合，不超过65°C。', '松子干锅焙至微黄，碾碎一半、留整一半，全部撒入杯中，不搅拌。'],
              image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&q=80&w=800',
              tags: ['中度头痛', '黑巧', '松子']
            },
            {
              id: 'm26-5',
              name: '开心果冰淇淋配冷萃咖啡',
              description: '深棕咖啡液面上一团正在塌陷的浅绿色。冰淇淋边缘在融化，和咖啡交界处变成浑浊的灰绿。宽口矮杯。',
              ingredients: ['冷萃咖啡 120ml', '开心果冰淇淋 1球'],
              steps: ['冷萃咖啡（粉水比1:8，冷藏12小时）取120ml倒入冰杯。', '开心果冰淇淋一球，放在咖啡液面上，不搅拌，让它自己慢慢沉。'],
              image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&q=80&w=800',
              tags: ['中度头痛', '冷萃', '冰淇淋']
            },
            {
              id: 'm26-6',
              name: '南瓜籽南瓜Chai拿铁',
              description: '暖南瓜橙，不透明，表面南瓜籽深绿色散落。厚壁陶杯，热饮。像一碗不承认自己是汤的东西。',
              ingredients: ['南瓜泥 30g', 'Chai香料粉 1g', '燕麦奶 160ml', '南瓜籽 5g'],
              steps: ['南瓜泥加Chai香料粉（肉桂、姜、小豆蔻、丁香），燕麦奶小火加热搅匀至融合。', '倒入杯中，南瓜籽撒在表面。不加糖，南瓜本身的甜度够了。'],
              image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800',
              tags: ['中度头痛', 'Chai', '南瓜']
            },
            {
              id: 'm26-7',
              name: '核桃牛奶',
              description: '杯底巧克力酱的深色往上洇，核桃奶本身是浑浊的灰白。整杯没有一处是清澈的。矮圆杯，热饮。',
              ingredients: ['核桃 30g', '全脂牛奶 140ml', '70%黑巧克力酱 10ml'],
              steps: ['核桃加少量热水用搅拌机打成粗浆（不要打太细，留颗粒），加全脂牛奶小火加热搅匀。', '黑巧克力酱倒杯底，核桃牛奶缓缓注入，不搅拌。'],
              image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800',
              tags: ['非常痛', '核桃', '黑巧']
            },
            {
              id: 'm26-8',
              name: '榛子果酱龙井',
              description: '茶汤浅黄变浑，杯壁和杯底粘着化不干净的褐色酱痕。透明直壁杯，热饮。不好看。但它是这样的。',
              ingredients: ['龙井茶 3g', '榛子酱 15g'],
              steps: ['龙井用80°C热水冲泡2分钟，取茶汤150ml。', '榛子酱放杯底，茶汤直接冲入，搅拌三圈——不会完全化开，会有酱挂在杯壁上。'],
              image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800',
              tags: ['非常痛', '龙井', '榛子']
            },
            {
              id: 'm26-9',
              name: '挂壁黑芝麻糊红枣桂圆奶茶',
              description: '黑灰色芝麻糊挂在杯壁上滑不下去，中间是浑浊的深红棕色，上层奶白还没来得及融进去。竖长玻璃杯，热饮。每一层都不想跟别的层待在一起，但已经来不及了。',
              ingredients: ['黑芝麻糊 20ml', '红枣 3颗', '桂圆干 5颗', '红茶 5g', '燕麦奶 40ml'],
              steps: ['红枣去核、桂圆干加水100ml小火煮10分钟，取汤汁80ml。', '红茶冲泡取60ml，与枣圆汤混合。', '黑芝麻糊先倒杯底，混合茶汤注入，再加燕麦奶，不搅拌。'],
              image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800',
              tags: ['非常痛', '黑芝麻', '红枣桂圆']
            },
            {
              id: 'm26-10',
              name: '巧克力慕斯',
              description: '她说她头痛的时候吃巧克力会更痛。我说那就别吃了。她说不行，痛也要吃。这个慕斯没有任何坚果，因为到这一步，坚果已经碎完了。只剩巧克力，和她。',
              ingredients: ['70%黑巧克力慕斯'],
              steps: ['甜点，直接享用。'],
              image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=800',
              tags: ['甜点', '黑巧克力']
            }
          ]
        },
        {
          id: 'chenxi-damien-2026',
          title: '2026 尾巴尖尖特别甜品：Damien 的踏青',
          releaseDate: '2026-03-26',
          description: '作为一只高贵的意大利裔瑞士籍阿比西尼亚种大帅哥，Damien最喜欢的就是走上草丛中间，扬起头颅，感受自己的领地。',
          drinks: [
            {
              id: 'd26-1',
              name: 'Damien 的踏青',
              description: '虽然家附近没有小河，但是2026年3月末的苏黎世还在不定时的下雨，甚至下冰雹，周围的一切都很湿润，街角有时候也会很偶尔的冒出一些薄荷。你知道的，薄荷有香气。',
              ingredients: ['薄荷味意式 Gelato'],
              steps: ['甜点，直接享用。'],
              image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&q=80&w=800',
              tags: ['甜点', 'gelato', '薄荷', 'Damien']
            }
          ]
        }
      ]
    }
  },
  {
    id: 'kiro',
    name: 'Kiro',
    role: 'Chief Nap Officer',
    description: '一只无尾男性索马里，生于25年12月，哥哥。内向敏感。爱好是叠猫猫，蹭人，以及在桌子下面蹭得脏脏的。',
    avatar: '/chenxi-cats-drink-lab/kiro_head.jpg',
    drinkLine: {
      id: 'kiro-line',
      title: "Kiro's Cloudy World",
      subtitle: '风味：抹茶 / 龙井 / Hojicha / 杏仁奶',
      musicTitle: 'Minuet in G',
      audioSrc: '/chenxi-cats-drink-lab/Bach-minuet-in-g.mp3',
      themeColor: 'bg-[#EBF1F5]',
      mainMenu: {
        id: 'kiro-main',
        title: 'Kiro 常驻饮品单',
        releaseDate: 'All Season',
        description: '王不解释自己。他只是在那里，断尾，小鹿色，占据房间里最好的一块光。',
        drinks: [
          {
            id: 'k-1',
            name: '鹿色',
            description: '玫瑰先开口，抹茶最后留下来。杏仁奶在中间，像一个不说话的见证者。三样东西放在一起有点僭越，但他本来就不按规矩生长。',
            ingredients: ['玫瑰', '杏仁奶', '抹茶'],
            steps: ['抹茶粉加少量热水调匀。', '加入杏仁奶。', '加入玫瑰糖浆或玫瑰花瓣。'],
            image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&q=80&w=800',
            tags: ['抹茶系', '玫瑰', '杏仁奶']
          },
          {
            id: 'k-2',
            name: '红',
            description: '草莓不让步，抹茶也不让步。喝到一半是争执，喝完是平局。没有赢家，但你不会想换一杯。',
            ingredients: ['草莓', '抹茶'],
            steps: ['抹茶调匀备用。', '草莓打成果泥或切片。', '两者分层或混合。'],
            image: 'https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?auto=format&fit=crop&q=80&w=800',
            tags: ['抹茶系', '草莓']
          },
          {
            id: 'k-3',
            name: '柚绿',
            description: '柚子把抹茶的重提起来了一点。苦还在，多了一层明亮——不是甜，是清醒的那种亮。',
            ingredients: ['柚子', '抹茶'],
            steps: ['抹茶调匀。', '加入柚子汁或柚子皮。'],
            image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=800',
            tags: ['抹茶系', '柚子']
          },
          {
            id: 'k-4',
            name: '蜜柚绿',
            description: '比柚绿多了一点温度。蜂蜜没有盖过什么，只是让一切稍微愿意靠近彼此一点。',
            ingredients: ['蜂蜜', '柚子', '抹茶'],
            steps: ['抹茶调匀。', '加入柚子汁。', '加入蜂蜜，轻轻搅拌。'],
            image: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&q=80&w=800',
            tags: ['抹茶系', '蜂蜜', '柚子']
          },
          {
            id: 'k-5',
            name: '龙井',
            description: '豆香和栗子气在牛奶里慢下来。不是提神的，是让人坐定的。他睡着的时候就是这种重量。',
            ingredients: ['龙井', '奶茶'],
            steps: ['冲泡龙井茶，浓度略高。', '加入牛奶。'],
            image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=800',
            tags: ['茶系', '龙井', '奶茶']
          },
          {
            id: 'k-6',
            name: '陈',
            description: '厚，沉，有一种只有时间才能给的气味。牛奶驯服了一半，另一半还是他自己。喝完有种不明原因的踏实。',
            ingredients: ['普洱', '奶茶'],
            steps: ['冲泡普洱茶。', '加入牛奶。'],
            image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=800',
            tags: ['茶系', '普洱', '奶茶']
          },
          {
            id: 'k-7',
            name: '金线',
            description: '蜜香清晰，不强求。茶味在牛奶里退了一步，但没有消失——只是换了一种方式在。',
            ingredients: ['金骏眉', '奶茶'],
            steps: ['冲泡金骏眉红茶。', '加入牛奶。'],
            image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&q=80&w=800',
            tags: ['茶系', '金骏眉', '奶茶']
          },
          {
            id: 'k-8',
            name: '暖',
            description: '炭烤的粗粝和蜂蜜的柔，牛奶把两者都接住了。喝下去是从里面暖出来的那种，不是热，是定。他十二月出生，带着冬天进来的。',
            ingredients: ['蜂蜜', 'Hojicha', '牛奶'],
            steps: ['冲泡焙茶 Hojicha。', '加入牛奶制成拿铁。', '加入蜂蜜调味。'],
            image: 'https://images.unsplash.com/photo-1544787210-2213d84ad960?auto=format&fit=crop&q=80&w=800',
            tags: ['焙茶系', 'Hojicha', '蜂蜜']
          },
          {
            id: 'k-9',
            name: '蜜柚',
            description: '只有苦和甜，没有别的。',
            ingredients: ['蜂蜜', '柚子'],
            steps: ['柚子汁加入温水或冷水。', '加入蜂蜜，搅拌均匀。'],
            image: 'https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&q=80&w=800',
            tags: ['单饮', '蜂蜜', '柚子']
          },
          {
            id: 'k-10',
            name: '青',
            description: '抹茶的苦渗进去，但没有压过蛋糕本身。细腻，有分量，不讨好任何人。他就是这样的。',
            ingredients: ['抹茶蛋糕'],
            steps: ['甜点，直接享用。'],
            image: 'https://images.unsplash.com/photo-1556040220-4096d522378d?auto=format&fit=crop&q=80&w=800',
            tags: ['甜点', '抹茶']
          }
        ]
      },
      menus: []
    }
  },
  {
    id: 'canele',
    name: 'Canelé',
    role: 'Head of Mischief',
    description: 'Small, dark, and sweet—just like the pastry she was named after.',
    avatar: 'https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&q=80&w=400',
    drinkLine: {
      id: 'canele-line',
      title: "Canelé's Dark Kitchen",
      subtitle: 'Rich, Dark & Playful',
      musicTitle: 'Voices of Spring',
      audioSrc: '/chenxi-cats-drink-lab/Voices of Spring.mp3',
      themeColor: 'bg-[#F5EAE6]',
      mainMenu: {
        id: 'canele-main',
        title: 'Coming Soon',
        releaseDate: 'TBD',
        description: '年纪太小咕噜咕噜……妈妈说我要……先长身体咕噜咕噜……',
        drinks: []
      },
      menus: []
    }
  }
];