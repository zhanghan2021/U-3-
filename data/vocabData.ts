
import { VocabularyItem } from '../types';

export const vocabularyList: VocabularyItem[] = [
  {
    id: 1,
    word: "decade",
    phonetic: "/ˈdekeɪd/",
    pos: "n.",
    meaning: "十年；十年期",
    usages: ["in the past few decades", "for over a decade"],
    examples: [
      {
        sentence: "China has undergone incredible changes *in the past few decades*.",
        translation: "在过去的几十年里，中国经历了令人难以置信的变化。",
        focusPhrases: ["in the past few decades"]
      }
    ]
  },
  {
    id: 2,
    word: "legendary",
    phonetic: "/ˈledʒəndəri/",
    pos: "adj.",
    meaning: "大名鼎鼎的，传奇式的",
    morphology: [{ derived: "legend (n.)", type: "root", color: "text-blue-600" }],
    usages: ["a legendary figure", "legendary performance"],
    examples: [
      {
        sentence: "The *legendary* figure emerged in this *decade*, leaving a lasting impact on sports history.",
        translation: "这位传奇人物在这个十年里出现，对体育史产生了深远影响。",
        focusPhrases: ["legendary"]
      }
    ]
  },
  {
    id: 3,
    word: "fixture",
    phonetic: "/ˈfɪkstʃə/",
    pos: "n.",
    meaning: "固定存在物；长期在那儿的人",
    morphology: [{ derived: "fix (v.)", type: "root", color: "text-emerald-600" }],
    usages: ["a permanent fixture", "fixture of the local community"],
    quiz: {
      question: "Guess the meaning of 'fix' in these contexts:",
      options: [
        { label: "1. Can you fix my broken watch?", meaning: "修理" },
        { label: "2. We need to fix a date for the meeting.", meaning: "确定/安排" },
        { label: "3. He fixed his eyes on the screen.", meaning: "注视/集中" }
      ]
    },
    examples: [
      {
        sentence: "Smartphone has become a *fixture* in modern life, especially among the younger generation.",
        translation: "智能手机已成为现代生活的固定存在物，尤其是在年轻一代中。",
        focusPhrases: ["fixture"]
      }
    ]
  },
  {
    id: 4,
    word: "elderly",
    phonetic: "/ˈeldəli/",
    pos: "adj.",
    meaning: "年老的",
    usages: ["the elderly (n. 老年人)", "an elderly couple"],
    examples: [
      {
        sentence: "Society should show more **sympathy** to *the elderly* who live alone.",
        translation: "社会应该对独居的老年人表现出更多的同情。",
        focusPhrases: ["the elderly"]
      }
    ]
  },
  {
    id: 5,
    word: "tablet",
    phonetic: "/ˈtæblɪt/",
    pos: "n.",
    meaning: "平板电脑；药片",
    quiz: {
      question: "Guess the meaning of 'tablet' in these contexts:",
      options: [
        { label: "1. The doctor told her to take two tablets a day.", meaning: "药片" },
        { label: "2. He reads the news on his tablet every morning.", meaning: "平板电脑" }
      ]
    },
    examples: [
      {
        sentence: "The *elderly* man is learning how to use a *tablet* to connect with his grandkids.",
        translation: "这位老爷爷正在学习如何使用平板电脑与孙辈交流。",
        focusPhrases: ["tablet"]
      }
    ]
  },
  {
    id: 6,
    word: "sympathy",
    phonetic: "/ˈsɪmpəθi/",
    pos: "n.",
    meaning: "同情",
    morphology: [
      { derived: "sympathetic (adj.)", type: "adj.", color: "text-purple-600" },
      { derived: "sympathize (v.)", type: "verb", color: "text-purple-600" }
    ],
    usages: ["feel sympathy for sb", "be sympathetic to sb", "out of sympathy"],
    examples: [
      {
        sentence: "I **feel deep sympathy for** those who lost their homes in the flood.",
        translation: "我对那些在洪水中失去家园的人深感同情。",
        focusPhrases: ["feel deep sympathy for"]
      },
      {
        sentence: "He helped the homeless man **out of sympathy**.",
        translation: "出于同情，他帮助了那个无家可归的人。",
        focusPhrases: ["out of sympathy"]
      }
    ]
  },
  {
    id: 7,
    word: "bunch",
    phonetic: "/bʌntʃ/",
    pos: "n.",
    meaning: "一群，一伙；束",
    usages: ["a bunch of", "a bunch of flowers"],
    examples: [
      {
        sentence: "A *bunch of* volunteers provided help for the *elderly* residents.",
        translation: "一群志愿者为老年居民提供了帮助。",
        focusPhrases: ["a bunch of"]
      }
    ]
  },
  {
    id: 8,
    word: "dusty",
    phonetic: "/ˈdʌsti/",
    pos: "adj.",
    meaning: "布满灰尘的",
    morphology: [{ derived: "dust (n./v.)", type: "root", color: "text-amber-600" }],
    examples: [
      {
        sentence: "The *bunch* of old books sat on a *dusty* **shelf**.",
        translation: "那叠旧书放在落满灰尘的架子上。",
        focusPhrases: ["dusty"]
      }
    ]
  },
  {
    id: 9,
    word: "shelf",
    phonetic: "/ʃelf/",
    pos: "n.",
    meaning: "搁板，架子",
    morphology: [{ derived: "shelves (pl.)", type: "plural", color: "text-red-500" }],
    examples: [
      {
        sentence: "He put the **stationery** back on the top *shelf*.",
        translation: "他把文具放回了顶层架子。",
        focusPhrases: ["shelf"]
      }
    ]
  },
  {
    id: 10,
    word: "furniture",
    phonetic: "/ˈfɜːnɪtʃə/",
    pos: "n.",
    meaning: "家具 (不可数)",
    morphology: [
      { derived: "furnish (v. 布置/配备)", type: "verb", color: "text-indigo-600" },
      { derived: "furnished (adj. 带家具的)", type: "adj.", color: "text-indigo-600" }
    ],
    usages: ["be furnished with", "a furnished room", "a piece of furniture"],
    examples: [
      {
        sentence: "The newly **reconstructed** room **is furnished with** modern *furniture*.",
        translation: "新重建的房间配备了现代家具。",
        focusPhrases: ["is furnished with", "furniture"]
      }
    ]
  },
  {
    id: 11,
    word: "mist",
    phonetic: "/mɪst/",
    pos: "n.",
    meaning: "薄雾，雾霭",
    morphology: [{ derived: "misty (adj.)", type: "adj.", color: "text-blue-400" }],
    examples: [
      {
        sentence: "The morning *mist* hung over the *dusty* road.",
        translation: "晨雾笼罩在布满灰尘的路上。",
        focusPhrases: ["mist"]
      }
    ]
  },
  {
    id: 12,
    word: "brick",
    phonetic: "/brɪk/",
    pos: "n.",
    meaning: "砖，砖块",
    examples: [
      {
        sentence: "The *exterior* wall of the house is made of red *bricks*.",
        translation: "房子的外墙是由红砖砌成的。",
        focusPhrases: ["bricks"]
      }
    ]
  },
  {
    id: 13,
    word: "exterior",
    phonetic: "/ɪkˈstɪəriə/",
    pos: "n./adj.",
    meaning: "外部，外观",
    usages: ["exterior wall", "interior (反义词: 内部)"],
    examples: [
      {
        sentence: "The *exterior* of the building looks **humble**, but the **furniture** inside is very expensive.",
        translation: "建筑的外观看起来很简陋，但里面的家具非常昂贵。",
        focusPhrases: ["exterior"]
      }
    ]
  },
  {
    id: 14,
    word: "pore over",
    phonetic: "/pɔːr ˈəʊvə/",
    pos: "phrase",
    meaning: "凝视，注视；仔细研读",
    examples: [
      {
        sentence: "The **journalist** spent hours **poring over** old documents to find the truth.",
        translation: "记者花了几个小时仔细研读旧文件以寻找真相。",
        focusPhrases: ["poring over"]
      }
    ]
  },
  {
    id: 15,
    word: "stationery",
    phonetic: "/ˈsteɪʃənəri/",
    pos: "n.",
    meaning: "文具 (不可数)",
    examples: [
      {
        sentence: "The *saleswoman* showed me a variety of *stationery*, including **emoji** stickers.",
        translation: "女销售员向我展示了各种各样的文具，包括表情符号贴纸。",
        focusPhrases: ["stationery"]
      }
    ]
  },
  {
    id: 16,
    word: "saleswoman",
    phonetic: "/ˈseɪlzwʊmən/",
    pos: "n.",
    meaning: "女销售员",
    examples: [
      {
        sentence: "The *saleswoman* was very **sympathetic** to the **elderly** customer.",
        translation: "女销售员对那位老年顾客非常体贴。",
        focusPhrases: ["saleswoman"]
      }
    ]
  },
  {
    id: 17,
    word: "leadership",
    phonetic: "/ˈliːdəʃɪp/",
    pos: "n.",
    meaning: "领导；领导地位",
    morphology: [
      { derived: "lead (v.)", type: "root", color: "text-orange-600" },
      { derived: "leader (n.)", type: "person", color: "text-orange-600" }
    ],
    usages: ["lead to (导致)", "lead into (引入)", "lead sb to do (带头做)"],
    examples: [
      {
        sentence: "Excellent *leadership* can **lead to** the success of the whole team.",
        translation: "卓越的领导力能带领整个团队走向成功。",
        focusPhrases: ["leadership", "lead to"]
      }
    ]
  },
  {
    id: 18,
    word: "organic",
    phonetic: "/ɔːˈɡænɪk/",
    pos: "adj.",
    meaning: "有机的；绿色的",
    morphology: [{ derived: "organ (n. 器官/机构)", type: "root", color: "text-green-600" }],
    examples: [
      {
        sentence: "People now prefer *organic* food to ensure a healthy lifestyle.",
        translation: "人们现在更喜欢有机食物以确保健康的生活方式。",
        focusPhrases: ["organic"]
      }
    ]
  },
  {
    id: 19,
    word: "recital",
    phonetic: "/rɪˈsaɪtl/",
    pos: "n.",
    meaning: "朗诵会；演奏会",
    morphology: [{ derived: "recite (v. 背诵)", type: "verb", color: "text-blue-500" }],
    examples: [
      {
        sentence: "She gave a beautiful piano *recital* last night.",
        translation: "她昨晚举行了一场优美的钢琴演奏会。",
        focusPhrases: ["recital"]
      }
    ]
  },
  {
    id: 20,
    word: "jazz",
    phonetic: "/dʒæz/",
    pos: "n.",
    meaning: "爵士乐",
    extraNotes: "Other types: Rock (摇滚), Classical (古典), Pop (流行), Country (乡村)",
    examples: [
      {
        sentence: "He enjoys listening to *jazz* while **poring over** his books.",
        translation: "他喜欢一边看书一边听爵士乐。",
        focusPhrases: ["jazz"]
      }
    ]
  },
  {
    id: 21,
    word: "pop up",
    phonetic: "/pɒp ʌp/",
    pos: "phrase",
    meaning: "突然出现，冒出来",
    examples: [
      {
        sentence: "New cafes are *popping up* all over the city.",
        translation: "全城各地都在冒出新的咖啡馆。",
        focusPhrases: ["popping up"]
      }
    ]
  },
  {
    id: 22,
    word: "humble",
    phonetic: "/ˈhʌmbl/",
    pos: "adj.",
    meaning: "简陋的/谦虚的",
    quiz: {
      question: "Guess the meaning of 'humble' in these contexts:",
      options: [
        { label: "1. Despite his success, he remains humble.", meaning: "谦虚的" },
        { label: "2. He grew up in a humble farmhouse.", meaning: "简陋的" }
      ]
    },
    examples: [
      {
        sentence: "He remains *humble* despite his **legendary** achievements.",
        translation: "尽管取得了传奇般的成就，他依然保持谦逊。",
        focusPhrases: ["humble"]
      }
    ]
  },
  {
    id: 23,
    word: "compete",
    phonetic: "/kəmˈpiːt/",
    pos: "v.",
    meaning: "竞争",
    morphology: [
      { derived: "competition (n.)", type: "noun", color: "text-red-600" },
      { derived: "competitive (adj.)", type: "adj.", color: "text-red-600" }
    ],
    usages: ["compete with (与...竞争)", "compete for (为...而竞争)"],
    examples: [
      {
        sentence: "Local businesses must **compete with** large corporations for survival.",
        translation: "当地企业必须与大公司竞争以求生存。",
        focusPhrases: ["compete with", "compete for"]
      }
    ]
  },
  {
    id: 24,
    word: "emphasize",
    phonetic: "/ˈemfəsaɪz/",
    pos: "v.",
    meaning: "强调",
    morphology: [{ derived: "emphasis (n.)", type: "noun", color: "text-cyan-600" }],
    usages: ["emphasize the importance of", "lay/put an emphasis on"],
    examples: [
      {
        sentence: "Teachers always **emphasize the importance of** regular review.",
        translation: "老师们总是强调定期复习的重要性。",
        focusPhrases: ["emphasize the importance of"]
      }
    ]
  },
  {
    id: 25,
    word: "reconstruction",
    phonetic: "/ˌriːkənˈstrʌkʃn/",
    pos: "n.",
    meaning: "重建，修复",
    morphology: [
      { derived: "construct (v.)", type: "root", color: "text-teal-600" },
      { derived: "construction (n.)", type: "noun", color: "text-teal-600" }
    ],
    usages: ["be under construction (在建设中)"],
    examples: [
      {
        sentence: "The **reform** policies helped the *reconstruction* of the **economic** system.",
        translation: "改革政策助推了经济体系的重建。",
        focusPhrases: ["reconstruction"]
      }
    ]
  },
  {
    id: 26,
    word: "journalist",
    phonetic: "/ˈdʒɜːnəlɪst/",
    pos: "n.",
    meaning: "新闻工作者；新闻记者",
    morphology: [{ derived: "journal (n. 日记/期刊)", type: "root", color: "text-blue-700" }],
    examples: [
      {
        sentence: "The *journalist* interviewed a **legendary** musician about the new **era**.",
        translation: "记者就新时代采访了一位传奇音乐家。",
        focusPhrases: ["journalist"]
      }
    ]
  },
  {
    id: 27,
    word: "era",
    phonetic: "/ˈɪərə/",
    pos: "n.",
    meaning: "时代，年代",
    examples: [
      {
        sentence: "We are living in a new *era* of high technology.",
        translation: "我们生活在一个高科技的新时代。",
        focusPhrases: ["era"]
      }
    ]
  },
  {
    id: 28,
    word: "reform",
    phonetic: "/rɪˈfɔːm/",
    pos: "n./v.",
    meaning: "改进；改革",
    usages: ["reform and opening-up (改革开放)"],
    examples: [
      {
        sentence: "The *reform and opening-up* policy has changed China profoundly.",
        translation: "改革开放政策深刻地改变了中国。",
        focusPhrases: ["reform and opening-up"]
      }
    ]
  },
  {
    id: 29,
    word: "pave",
    phonetic: "/peɪv/",
    pos: "v.",
    meaning: "铺（路、地面等）",
    usages: ["pave the way for (铺平道路；创造条件)"],
    examples: [
      {
        sentence: "The *reform* has **paved the way for** the rapid **economic** development.",
        translation: "改革为经济的快速发展铺平了道路。",
        focusPhrases: ["paved the way for"]
      }
    ]
  },
  {
    id: 30,
    word: "socialist",
    phonetic: "/ˈsəʊʃəlɪst/",
    pos: "adj./n.",
    meaning: "社会主义的",
    morphology: [
      { derived: "social (adj.)", type: "root", color: "text-rose-600" },
      { derived: "society (n.)", type: "noun", color: "text-rose-600" }
    ],
    examples: [
      {
        sentence: "China is committed to building a *socialist* country with its own characteristics.",
        translation: "中国致力于建设具有自身特色的社会主义国家。",
        focusPhrases: ["socialist"]
      }
    ]
  },
  {
    id: 31,
    word: "alongside",
    phonetic: "/əˌlɒŋˈsaɪd/",
    pos: "prep.",
    meaning: "（与……）一起；在……旁边",
    examples: [
      {
        sentence: "Traditional culture exists *alongside* modern technology in our daily life.",
        translation: "在我们的日常生活中，传统文化与现代科技并存。",
        focusPhrases: ["alongside"]
      }
    ]
  },
  {
    id: 32,
    word: "initiative",
    phonetic: "/ɪˈnɪʃətɪv/",
    pos: "n.",
    meaning: "倡议；主动性",
    usages: ["the Belt and Road Initiative (“一带一路”倡议)"],
    examples: [
      {
        sentence: "**The Belt and Road Initiative** has brought many **economic** benefits to many countries.",
        translation: "“一带一路”倡议为许多国家带来了许多经济利益。",
        focusPhrases: ["The Belt and Road Initiative"]
      }
    ]
  },
  {
    id: 33,
    word: "solid",
    phonetic: "/ˈsɒlɪd/",
    pos: "adj.",
    meaning: "坚实的，固体的；可靠的",
    quiz: {
      question: "Guess the meaning of 'solid' in these contexts:",
      options: [
        { label: "1. The water froze into solid ice.", meaning: "固体的" },
        { label: "2. He has a solid foundation in English.", meaning: "坚实的/牢固的" }
      ]
    },
    examples: [
      {
        sentence: "We need *solid* evidence before we can make a **convincing** argument.",
        translation: "在我们做出令人信服的论证之前，我们需要确凿的证据。",
        focusPhrases: ["solid"]
      }
    ]
  },
  {
    id: 34,
    word: "economic",
    phonetic: "/ˌiːkəˈnɒmɪk/",
    pos: "adj.",
    meaning: "经济（上）的",
    morphology: [
      { derived: "economy (n.)", type: "noun", color: "text-blue-500" },
      { derived: "economical (adj. 节约的)", type: "adj.", color: "text-blue-500" }
    ],
    examples: [
      {
        sentence: "The government is taking measures to boost *economic* growth.",
        translation: "政府正在采取措施促进经济增长。",
        focusPhrases: ["economic"]
      }
    ]
  },
  {
    id: 35,
    word: "occupation",
    phonetic: "/ˌɒkjuˈpeɪʃn/",
    pos: "n.",
    meaning: "工作，职业；占领",
    morphology: [
      { derived: "occupy (v. 占用/占领)", type: "verb", color: "text-indigo-500" }
    ],
    usages: ["be occupied with/in doing (忙于做...)"],
    quiz: {
      question: "Guess the meaning of 'occupy' in these contexts:",
      options: [
        { label: "1. Work occupies most of my time.", meaning: "占用" },
        { label: "2. The army occupied the city.", meaning: "占领" }
      ]
    },
    examples: [
      {
        sentence: "Teaching is a very demanding *occupation*, as teachers are always **occupied with** grading papers.",
        translation: "教学是一项要求很高的职业，因为老师们总是忙于批改试卷。",
        focusPhrases: ["occupation", "occupied with"]
      }
    ]
  },
  {
    id: 36,
    word: "cafeteria",
    phonetic: "/ˌkæfəˈtɪəriə/",
    pos: "n.",
    meaning: "自助餐厅",
    examples: [
      {
        sentence: "I'll meet you in the school *cafeteria* after the **jazz** concert.",
        translation: "爵士音乐会结束后我在学校食堂见你。",
        focusPhrases: ["cafeteria"]
      }
    ]
  },
  {
    id: 37,
    word: "emoji",
    phonetic: "/ɪˈməʊdʒi/",
    pos: "n.",
    meaning: "表情符号",
    examples: [
      {
        sentence: "People often use *emojis* to express their **emotional** state in **textspeak**.",
        translation: "人们经常使用表情符号在短信缩写语中表达他们的情感状态。",
        focusPhrases: ["emojis"]
      }
    ]
  },
  {
    id: 38,
    word: "integral",
    phonetic: "/ˈɪntɪɡrəl/",
    pos: "adj.",
    meaning: "不可缺少的",
    examples: [
      {
        sentence: "Effective communication is an *integral* part of any healthy relationship.",
        translation: "有效的沟通是任何健康关系中不可或缺的一部分。",
        focusPhrases: ["integral"]
      }
    ]
  },
  {
    id: 39,
    word: "component",
    phonetic: "/kəmˈpəʊnənt/",
    pos: "n.",
    meaning: "组成部分",
    morphology: [
      { derived: "compose (v. 组成)", type: "verb", color: "text-violet-600" },
      { derived: "composition (n. 作文/组成)", type: "noun", color: "text-violet-600" }
    ],
    usages: ["be composed of (由...组成)"],
    examples: [
      {
        sentence: "The *components* of the new machine were all produced domestically.",
        translation: "这台新机器的部件全部是国内生产的。",
        focusPhrases: ["components"]
      }
    ]
  },
  {
    id: 40,
    word: "category",
    phonetic: "/ˈkætəɡəri/",
    pos: "n.",
    meaning: "类别",
    examples: [
      {
        sentence: "The books are divided into different *categories* based on their subjects.",
        translation: "这些书根据主题被分为不同的类别。",
        focusPhrases: ["categories"]
      }
    ]
  },
  {
    id: 41,
    word: "expand",
    phonetic: "/ɪkˈspænd/",
    pos: "v.",
    meaning: "（使）扩大，增加",
    morphology: [{ derived: "expansion (n.)", type: "noun", color: "text-orange-500" }],
    examples: [
      {
        sentence: "The company plans to *expand* its business to foreign markets.",
        translation: "公司计划将其业务扩展到国外市场。",
        focusPhrases: ["expand"]
      }
    ]
  },
  {
    id: 42,
    word: "pictograph",
    phonetic: "/ˈpɪktəɡrɑːf/",
    pos: "n.",
    meaning: "象形图",
    examples: [
      {
        sentence: "Ancient languages often started as *pictographs* representing physical objects.",
        translation: "古代语言通常始于代表实物的象形图。",
        focusPhrases: ["pictographs"]
      }
    ]
  },
  {
    id: 43,
    word: "emotional",
    phonetic: "/ɪˈməʊʃənl/",
    pos: "adj.",
    meaning: "情绪（上）的，情感（上）的",
    morphology: [{ derived: "emotion (n.)", type: "root", color: "text-pink-600" }],
    examples: [
      {
        sentence: "She gave an *emotional* speech during the graduation ceremony.",
        translation: "她在毕业典礼上发表了一番感人至深的演讲。",
        focusPhrases: ["emotional"]
      }
    ]
  },
  {
    id: 44,
    word: "gesture",
    phonetic: "/ˈdʒestʃə/",
    pos: "n.",
    meaning: "手势，姿势",
    examples: [
      {
        sentence: "He made a *gesture* to show that he was friendly.",
        translation: "他做了一个手势以显示他的友好。",
        focusPhrases: ["gesture"]
      }
    ]
  },
  {
    id: 45,
    word: "facial",
    phonetic: "/ˈfeɪʃl/",
    pos: "adj.",
    meaning: "脸上的；面部的",
    usages: ["facial expression (面部表情)"],
    examples: [
      {
        sentence: "Her *facial expression* revealed her true feelings.",
        translation: "她的面部表情揭示了她的真实感受。",
        focusPhrases: ["facial expression"]
      }
    ]
  },
  {
    id: 46,
    word: "textspeak",
    phonetic: "/ˈtekstiːk/",
    pos: "n.",
    meaning: "短信缩写语",
    examples: [
      {
        sentence: "Young people often use *textspeak* to communicate quickly on social media.",
        translation: "年轻人经常在社交媒体上使用短信缩写语进行快速沟通。",
        focusPhrases: ["textspeak"]
      }
    ]
  },
  {
    id: 47,
    word: "intend",
    phonetic: "/ɪnˈtend/",
    pos: "v.",
    meaning: "打算",
    morphology: [
      { derived: "intention (n. 意图)", type: "noun", color: "text-emerald-700" },
      { derived: "intentional (adj. 故意的)", type: "adj.", color: "text-emerald-700" }
    ],
    usages: ["intend to do (打算做)", "be intended to do (旨在做)", "be intended for (为...而准备)"],
    examples: [
      {
        sentence: "This new app **is intended for** high school students who want to improve their English.",
        translation: "这款新应用是专门为想提高英语水平的高中生准备的。",
        focusPhrases: ["is intended for"]
      }
    ]
  },
  {
    id: 48,
    word: "adaptation",
    phonetic: "/ˌædæpˈteɪʃn/",
    pos: "n.",
    meaning: "改编版；适应",
    morphology: [{ derived: "adapt (v. 适应/改编)", type: "verb", color: "text-amber-700" }],
    usages: ["adaptation of (对...的改编)", "adapt to (适应)", "adapt from (改自...)", "adapt oneself to (使自己适应...)"],
    examples: [
      {
        sentence: "The movie is an *adaptation* of a famous novel by Lu Xun.",
        translation: "这部电影改编自鲁迅的一部著名小说。",
        focusPhrases: ["adaptation"]
      }
    ]
  },
  {
    id: 49,
    word: "accessible",
    phonetic: "/əkˈsesəbl/",
    pos: "adj.",
    meaning: "易懂的；易接近的",
    morphology: [{ derived: "access (n./v. 接近/通道)", type: "root", color: "text-sky-600" }],
    usages: ["have access to (有权使用/进入)", "be accessible to (对...来说是可接近的)"],
    examples: [
      {
        sentence: "Scientific information should **be accessible to** everyone.",
        translation: "科学信息应该对每个人都是触手可及的。",
        focusPhrases: ["be accessible to"]
      }
    ]
  },
  {
    id: 50,
    word: "soul",
    phonetic: "/səʊl/",
    pos: "n.",
    meaning: "精神；灵魂",
    usages: ["soulmate (灵魂伴侣)"],
    examples: [
      {
        sentence: "Music is food for the *soul*.",
        translation: "音乐是灵魂的食粮。",
        focusPhrases: ["soul"]
      }
    ]
  },
  {
    id: 51,
    word: "tendency",
    phonetic: "/ˈtendənsi/",
    pos: "n.",
    meaning: "趋势",
    morphology: [{ derived: "tend (v. 趋向/照顾)", type: "verb", color: "text-indigo-700" }],
    usages: ["tend to do (往往会做)", "have a tendency to do (有做...的倾向)"],
    quiz: {
      question: "Guess the meaning of 'tend' in these contexts:",
      options: [
        { label: "1. He tends to be late for meetings.", meaning: "趋向/往往" },
        { label: "2. The nurse tended to the wounded soldiers.", meaning: "照料/护理" }
      ]
    },
    examples: [
      {
        sentence: "There is a growing *tendency* for people to work from home.",
        translation: "人们居家办公的趋势正日益增长。",
        focusPhrases: ["tendency"]
      }
    ]
  },
  {
    id: 52,
    word: "facilitate",
    phonetic: "/fəˈsɪlɪteɪt/",
    pos: "v.",
    meaning: "促进；使便利",
    morphology: [{ derived: "facility (n. 设施)", type: "noun", color: "text-teal-700" }],
    examples: [
      {
        sentence: "The new highway will *facilitate* the transport of goods.",
        translation: "新公路将便利货物的运输。",
        focusPhrases: ["facilitate"]
      }
    ]
  },
  {
    id: 53,
    word: "educator",
    phonetic: "/ˈedʒukeɪtə/",
    pos: "n.",
    meaning: "教育工作者",
    morphology: [
      { derived: "educate (v.)", type: "verb", color: "text-lime-600" },
      { derived: "education (n.)", type: "noun", color: "text-lime-600" }
    ],
    examples: [
      {
        sentence: "The *educator* **emphasized the importance of** critical thinking.",
        translation: "这位教育家强调了批判性思维的重要性。",
        focusPhrases: ["educator"]
      }
    ]
  },
  {
    id: 54,
    word: "pictorial",
    phonetic: "/pɪkˈtɔːriəl/",
    pos: "adj.",
    meaning: "图画的",
    morphology: [{ derived: "picture (n.)", type: "root", color: "text-emerald-500" }],
    examples: [
      {
        sentence: "Children often learn better through *pictorial* aids.",
        translation: "孩子通常通过图画辅助工具学得更好。",
        focusPhrases: ["pictorial"]
      }
    ]
  },
  {
    id: 55,
    word: "secondary",
    phonetic: "/ ˈsekəndri/",
    pos: "adj.",
    meaning: "次要的，第二位的；中学的",
    examples: [
      {
        sentence: "The cost is *secondary* to the quality of the product.",
        translation: "与产品质量相比，成本是次要的。",
        focusPhrases: ["secondary"]
      }
    ]
  },
  {
    id: 56,
    word: "comic",
    phonetic: "/ˈkɒmɪk/",
    pos: "n.",
    meaning: "连环漫画",
    examples: [
      {
        sentence: "He spent his childhood reading *comics* and drawing **pictographs**.",
        translation: "他在读漫画和画象形图中度过了童年。",
        focusPhrases: ["comics"]
      }
    ]
  },
  {
    id: 57,
    word: "costume",
    phonetic: "/ˈkɒstjuːm/",
    pos: "n.",
    meaning: "化装服",
    examples: [
      {
        sentence: "Everyone wore a unique *costume* to the Halloween party.",
        translation: "每个人都穿着独特的化装服参加万圣节派对。",
        focusPhrases: ["costume"]
      }
    ]
  },
  {
    id: 58,
    word: "urgently",
    phonetic: "/ ˈɜːdʒəntli/",
    pos: "adv.",
    meaning: "紧急地；急迫地",
    morphology: [
      { derived: "urge (v. 敦促/冲动)", type: "verb", color: "text-red-700" },
      { derived: "urgent (adj. 紧急的)", type: "adj.", color: "text-red-700" }
    ],
    usages: ["urge sb to do (敦促某人做...)", "It is urgent that (重要的是...)", "urgently needed (急需)"],
    examples: [
      {
        sentence: "The government **urged citizens to** save water as it was *urgently needed*.",
        translation: "政府敦促公民节约用水，因为这是急需的。",
        focusPhrases: ["urged citizens to", "urgently needed"]
      }
    ]
  },
  {
    id: 59,
    word: "convincing",
    phonetic: "/kənˈvɪnsɪŋ/",
    pos: "adj.",
    meaning: "有说服力的",
    morphology: [{ derived: "convince (v.)", type: "verb", color: "text-blue-600" }],
    usages: ["convince sb of (使某人相信)", "convince sb to do (说服某人做)"],
    examples: [
      {
        sentence: "He gave a *convincing* argument that **convinced the judge of** his innocence.",
        translation: "他给出了一个有说服力的论点，使法官相信他是清白的。",
        focusPhrases: ["convincing", "convinced the judge of"]
      }
    ]
  }
];
