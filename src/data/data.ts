const data = {
  en: {
    lenguege: 'EN',
    title: 'Asel Alymbaeva',
    pdfResume: 'View PDF summary',
    profession: 'Frontend developer',
    aboutTitle: 'About me.',
    aboutText: {
      text1: `I like to "think out loud" and analyze films and cartoons.
      In my free time I try to walk in nature and play sports.
      I do not like to sit idle and therefore I am always looking for interesting ideas and activities.`,
      text2: `For me, the most precious thing is time and health. That's why I'm punctual and
      I appreciate people giving their time to me. So I'm not wasting time on not
      necessary information on the Internet, I try to spend this time with my
      family. And I lead a healthy lifestyle.`,
    },
    portfolioTitle: 'Portfolio',
    portfolios: [
      {
        title: 'Management System',
        work: 'Study teamwork',
        writingtitle: 'Written:',
        writingLengueges: 'React, TypeScript, Redux toolkit, MUI, Eslint',
        review: `Made on the React platform with TypeScript typing, for styling we used the MUI library, we also used the Redux tools library to manipulate and pass data, we used the React-hook-form library to implement the forms, and we used the drag and drop library
        react-nice-dnd. To connect to the server, we implemented it on Docker. Made an adaptive layout. The minimum width of the application page is 320 px.`,
        comand: 'Team of 3.',
        taskTitle: 'My task: ',
        taskText: [
          `Create a new board - opens a modal window with a form for
          board creation. The requirements for the form are the same as for all
          forms in the application.`,
          `Displays all created boards as a list.`,
          `Boards displayed with a small preview
          available information title, description, etc. Pressing
          element, the user is redirected to the board element
          board route. There should be a button to remove the board.`,
          `When a user tries to delete a board, he/she must
          get a modal confirmation to check if you want to
          user delete board to avoid deleting boards by
          error. The verification method must be general
          component one for the application.`,
          `Global board search.`,
          `View and edit functionality implemented
          tasks.`,
          `The task must have a delete task button. On click:
          confirmation mode.`,
          `A task has creator information and board and column data.`,
        ],
        taskText2: [],
        branches: ['main-page', 'page-404', 'card-create', 'routing', 'edit-modal-fix'],
        linkToPR: 'https://github.com/Darina992/project-management-app/pull/26',
        linkToDeploy: `https://darina992-project-managment-app.netlify.app/`,
      },
      {
        title: 'RS Lang',
        work: 'Study teamwork',
        writingtitle: 'Written:',
        writingLengueges: 'JavaScript, TypeScript, OOP, Eslint, Prettier, SAAS',
        review: `Made in JavaScript with TypeScript typing, for styles the SCSS extension, also used the method of object-oriented programming.
            There was also the use of the Eslint extension to fix minor defects.`,
        comand: 'Team of 3.',
        taskTitle: 'My task: ',
        taskText: [
          `Layout, design, UI pages of the electronic textbook.`,
          `The electronic textbook is generated based on the collection
            source data and consists of six sections, each section 30 pages, each page has 20 words to study.`,
          `The seventh section of the textbook - Compound words is initially empty.
          This section consists of words that the user has marked as
          complex. All words in this section are placed on one
          page. At the discretion of the developers, the words in this section
          are added either in the order in which the user
          marked them as difficult, either / the order in which they
          were in the textbook.`,
        ],
        taskText2: [
          {
            list: 'Each page of the tutorial displays',
            listEl: [
              `menu or menu icon.`,
              `list of 20 words in the section in Compound words of words can
              be more.`,
              `links to Audio Challenge and Sprint mini-games`,
              `Global board search.`,
              `View and edit functionality implemented
              tasks.`,
              `The task must have a delete task button. On click:
              confirmation mode.`,
              `A task has creator information and board and column data.`,
              `page navigation tutorial.`,
              `it is also necessary to implement navigation on seven
              sections of the textbook and provide for small differences
              in the design of each section.`,
              `reloading the page opens the last one
              open application page.`,
            ],
          },
          {
            list: 'For each list of words displayed,',
            listEl: [
              `the word itself, transcription, translation.`,
              `sentence explaining the meaning of the word, translation
              offers.`,
              `a proposal with an example of the use of the studied
              words, sentence translation.`,
              `picture-association to the studied words.`,
              `audio icon, when clicked, it will sequentially
              sounds the pronunciation of the word being studied, pronunciation
              sentences explaining its meaning, pronunciation
              suggestions with an example of its use.`,
            ],
          },
          {
            list: 'Only authorized users will see:',
            listEl: [
              `button, when clicked, the word can be marked as
               complex in the Compound words section in its place a button is displayed that unchecks that this is difficult word and removing it from this section.`,
              `button, when clicked, the word can be marked as studied.`,
              `if a word is marked as compound, it stays on page of the tutorial and is highlighted with a style that indicates that this word is a compound word. Same
                this word is added to the Compound words section.`,
              `if a word is marked as learned, it stays on
              page of the tutorial and is highlighted with a style that indicates
              that the given word belongs to the learned words.`,
              `if all the words on the page belong to the studied
              words or to learned and complex words, such
              the page is considered fully explored and highlighted
              style. The style also highlights the corresponding
              tutorial page navigation button is enough
              highlight the number of the currently open page,
              if it is fully understood). Links to mini-games on this
              pages become inactive.`,
            ],
          },
        ],

        branches: ['book-develop'],
        linkToPR: 'https://github.com/rrroeva/rslang/pull/84',
        linkToDeploy: '',
      },
      {
        title: 'Online-Store',
        work: 'Academic work',
        writingtitle: 'Written:',
        writingLengueges: 'JavaScript, TypeScript, Eslint, SAAS',
        review: `Made in JavaScript with TypeScript typing, SCSS extension for styles. There was also the use of the Eslint extension to fix minor defects.`,
        comand: '',
        taskTitle: 'Requirement:',
        taskText: [
          `Implemented text search for all product data.`,
          `Implemented button to reset all filters`,
          `Storing data in localStorage, data about added products stored in localStorage and on page reload are being restored.`,
        ],
        taskText2: [
          {
            list: 'Implemented product filtering',
            listEl: [
              `there are two blocks of filters, by category and
              brand/name, where the list is implemented with the ability to
              choose a specific category/brand.`,
              `there are two blocks of filters with sliders (dual-slider),
              by price ranges and stock availability. You can
              replace stock availability with another item property
              topic of your choice.`,
              `changing any filters should add to query-parameters relevant data, in order to when reloading the page, the current one was restored page state with applied filters.`,
              `when applying any filter, should dynamically
              recalculate all filters and change state
             elements in them. Text search also applies to filters.
             For example, when choosing a certain product category, in
             other filters should recalculate the number
             goods found, indicating how many were found with such
             filter configurations, as well as how many are available excluding
             all applied filters.`,
            ],
          },
          {
            list: 'Product sorting implemented',
            listEl: [
              `there is a possibility of sorting products at least
              according to 2 criteria, for example, by price and rating (from the lowest
              to more and vice versa)`,
            ],
          },
        ],
        branches: ['book-develop'],
        linkToPR:
          'https://github.com/alimbaeva/rsschool_tasks_stage2_2022/tree/Online-Store/online-store',
        linkToDeploy: 'https://alimbaeva-online-store.netlify.app/',
      },
      {
        title: 'Shelter',
        work: 'Academic work',
        writingtitle: 'Written:',
        writingLengueges: 'JavaScript, HTML, CSS, Perfect Pixel',
        review: `Done on HTML hyper text, layout done with the help of
        Perfect Pixel, made responsive layout up to 320px width.
        Added logic in JavaScript.`,
        comand: '',
        taskTitle: 'Requirement:',
        taskText: [
          `Interactive navigation bar.`,
          `Clicking on Our pets takes us to our pets page`,
          `Clicking on Help the shelter redirects us to the Help block, located on the same page (anchor link).`,
          `Clicking on Contacts takes us to the Footer block,
          located on the same page (anchor link).`,
          `The Make a Friend button should be clickable.`,
          `The left and right buttons must be clickable.`,
          `Pet cards should be interactive when hover over any area of ​​the card. Hover on the card changes the cursor, highlights the Learn more button, and changes the background.`,
          `Learn more buttons should be clickable.`,
          `The Get to know the rest button should be clickable.`,
          `Clicking on Get to know the rest takes us to the page our pets.`,
          `The grid is used to position the block elements. layout (flexbox or grid).`,
          `The burger menu will only be on the page if width < 768px.`,
          `When you click on the burger menu, on the right side it will exit the block is 320px wide, and the height is the full height of the browser window, in which will be vertically arranged and centered menu items. There must be an exit animation (slide-in).`,
          `Each new slide will contain a pseudo-random set
          pets, i.e. be generated from the original objects at random
          OK, with two conditions. First, in the slide block itself
          cards with pets will not be repeated. Secondly, in
          next block, duplicate cards with cards
          the current block will not. For example in a slider with 3 elements,
          the next outgoing slide will contain 3 new
          pet cards, such as were not among the 3 cards on
          the previous slide that left.`,
          `When opening a popup, the vertical scroll should become
          inactive.`,
          `When clicking outside the popup borders, on a shaded area, or on
          button with a cross, the popup and dimming should disappear.`,
          `When the popup is closed, the vertical scroll should become
          active.`,
          `With width < 768px, there is no pet image in the popup design.`,
        ],
        taskText2: [],
        branches: [],
        linkToPR: '',
        linkToDeploy:
          'https://rolling-scopes-school.github.io/alimbaeva-JSFE2022Q1/shelter/pages/main/index.html',
      },
      {
        title: 'portfolio',
        work: 'Academic work',
        writingtitle: 'Written:',
        writingLengueges: 'JavaScript, HTML, CSS, Perfect Pixel',
        review: `Done on HTML hyper text, layout done with the help of
        Perfect Pixel, made responsive layout up to 320px width.
        Added logic in JavaScript.`,
        comand: '',
        taskTitle: 'Requirement:',
        taskText: [
          `It is necessary to lay out the page according to the layout, which is correct
          displayed at a screen width of at least 1440px.`,
          `Validity and semantics of layout are checked, its
          layout match.`,
          `With a page width of 768px, the task of matching the layout is set
          with layout, at other resolutions up to 320px inclusive
          enough to ensure that there is no horizontal stripe
          scroll. Also at this stage, the layout is added
          responsive menu, for which js is used.`,
        ],
        taskText2: [
          {
            list: 'Using JavaScript to add interactivity to the page:',
            listEl: [
              `changing images in the portfolio section`,
              `page translation into two languages`,
              `Ability to switch between light and dark theme`,
            ],
          },
        ],
        branches: [],
        linkToPR: 'https://github.com/alimbaeva/Portfolio_RS-SCHOOL_2022_st0/tree/main/portfolio',
        linkToDeploy:
          'https://alimbaeva.github.io/Portfolio_RS-SCHOOL_2022_st0/portfolio/index.html',
      },
    ],
    taskCodeTitle: 'Code Example',
    taskCodeShow: 'View code',
    taskCodeText_1:
      'Write a function sostavChisla(massivChisel: number[], chislo: number) that would find all possible combinations of numbers from massivChisel whose sum is equal to chislo. At the same time: massivChisel contains only unique positive numbers (> 0) 2- there should not be repetitions of numbers in the combination 3- all combinations must be unique',
    taskCodeText_2: ` chislo: 15, massivChisel: [7, 8, 3, 4, 5, 6, 1, 2], result: [[1, 2, 3, 4, 5], [2, 3, 4, 6], [1, 3, 5, 6], [4, 5, 6], [1, 3, 4, 7], [1, 2, 5, 7], [3, 5, 7], [2, 6 , 7], [1, 2, 4, 8], [3, 4, 8], [2, 5, 8], [1, 6, 8], [7, 8]] `,
    coursesTitle: 'Courses',
    courses: ['Jyldyz Academy (finished)', 'RS-SCHOOL (finished)', 'RS-SCHOOL React (finished)'],
    btnCertificate: 'certificate',
    certificateLink: '',
    btnLernMore: 'To learn more',
    btnLinkPR: 'Link to PR',
    btnLinkDeploy: 'Link to Deploy',
    hardSkillsTitle: 'Hard Skills',
    hardSkillsList: [
      'JavaScript __ advanced',
      'React __ advanced',
      'TypeScript __ advanced',
      'Redux toolkit __ average',
      'Git __ average',
      'HTML __ advanced',
      'CSS __ advanced',
      'SCSS __ advanced',
      'SAAS __ advanced',
      'Webpack __ average',
      'Eslint __ advanced',
      'Perfect Pixel __ advanced',
      'MUI __ average',
      'Tailwind __ average',
      'Bootstrap __ base',
      'Slick __ base',
    ],
    softSkillsTitle: 'Soft Skills',
    softSkillsList: ['Time management', 'Commitment', 'Stability'],
    lenguegesTitle: 'Languages',
    lenguegesList: [
      'English - Pre-Intermediate',
      'Russian - professionally',
      'Kyrgyz - Kyrgyz native',
    ],
    contactsTitle: 'Contact',
    contactsList: [
      {
        image: 'telegram>',
        link: 'https://t.me/aselAl86',
        name: 'aselAl86',
      },
      {
        image: 'mail_emal>',
        link: '',
        name: 'asel.alimbaeva.kk@gmail.com',
      },
      {
        image: 'GITHUB>',
        link: 'https://github.com/alimbaeva',
        name: 'alimbaeva',
      },
      {
        image: 'discord>',
        link: 'https://discord.com/asel.alimbaeva#4817',
        name: 'asel.alimbaeva',
      },
    ],
  },
  ru: {
    lenguege: 'RU',
    title: 'Асель Алымбаева',
    pdfResume: 'Посмотреть PDF резюме',
    profession: 'Фронтенд разработчик',
    aboutTitle: 'Коротко о себе.',
    aboutText: {
      text1: `Люблю "думать в слух" и разбирать фильмы и мультфильмы.
      Свободное время гуляю на природе и занимаюсь спортом. И веду здоровый образ жизни.
      Не люблю сидеть без дела и поэтому всегда ищу интересные идеи и занятия.`,
      text2: `Для меня самым дорогим является время и здоровье. Поэтому я пунктуален и
      ценю людей уделяющей свое время на меня.`,
    },
    portfolioTitle: 'Портфолио',
    portfolios: [
      {
        title: 'Management System',
        work: 'Учебная командная работа',
        writingtitle: 'Написано:',
        writingLengueges: 'React, TypeScript, Redux toolkit, MUI, Eslint',
        review: `Выполнено на React с типизацией TypeScript, для стилей использовали библиотеку MUI, так же для управленья и передачей данных использовали библиотеку Redux toolkit, для реализаций форм использовали библиотеку React-hook-form, а для реализации drag-and-drop использовали библиотеку
        React-beautiful-dnd. Для соединения с сервером реализовали на Docker. Сделана адаптивная верстка. Минимальная ширина страницы приложения 320 px.`,
        comand: 'Команда из 3 человек.',
        taskTitle: 'Mоя задача: ',
        taskText: [
          `Реализовала сайт для работы с задачами,
          выполнила ТЗ (создание новой доски,
          модальное подтверждение один для
          приложения при удалении для заявки,
          просмотр и удаление и редактирование
          задачи)`,
          `Создать новую доску - открывает модальное окно с формой для
          создания доски. Требования к форме такие же, как и ко всем
          формам в заявке.`,
          `Отображает все созданные доски в виде списка.`,
          `Доски отображается с небольшим предварительным просмотром
          доступной информации название, описание и т.д. Нажав на
          элемент, пользователь перенаправляется на элемент доски
          маршрут доски. Должна быть кнопка для удаления доски. ,
          Когда пользователь пытается удалить доску, он / она должен
          получить модальное подтверждение, чтобы проверить хочет ли
          пользователь удалить доску, чтобы избежать удаления доски по
          ошибке. Способ подтверждения должен быть общим
          компонентом один для приложения.`,
          `Глобальный поиск доски.`,
          `Реализована функциональность просмотра и редактирования 
          задачи.`,
          `Задача должна иметь кнопку удаления задачи. По щелчку:
          режим подтверждение.`,
          `Задача имеет информацию о создателе и данные доски и колонки`,
        ],
        taskText2: [],
        branches: ['main-page', 'page-404', 'card-create', 'routing', 'edit-modal-fix'],
        linkToPR: 'https://github.com/Darina992/project-management-app/pull/26',
        linkToDeploy: '',
      },
      {
        title: 'RS Lang',
        work: 'Учебная командная работа',
        writingtitle: 'Написано:',
        writingLengueges: 'JavaScript, TypeScript, OOP, Eslint, Prettier, SAAS',
        review: `Выполнено на языке JavaScript с типизацией TypeScript, для стилей расширение SCSS, так же использовали метод объектно-ориентированное программирование. 
          Также было использование расширение Eslint для устранения мелких дефектов.`,
        comand: 'Команда из 3 человек.',
        taskTitle: 'Mоя задача: ',
        taskText: [
          `Реализован сайт для изучения английского
          языка. Выполнено техническое задание
          (страница "учебник"). Сделала верстку
          сайта и помогла команде написать стили,
          что позволило выполнить его в срок к
          дедлайну.
          `,
          `Вёрстка, дизайн, UI страниц электронного учебник.`,
          `Электронный учебник генерируется на основе коллекции
          исходных данных и состоит из шести разделов, в каждом
          разделе 30 страниц, на каждой странице 20 слов для изучения.`,
          `Седьмой раздел учебника - B <<Cложные слова>> изначально пустой. 
          Этот раздел состоит из слов, которые пользователь отметил как 
          сложные. Все слова в этом разделе размещается на одной 
          странице. На усмотрение разработчиков, слова в данный раздел
          добавляется либо в том порядке. В котором пользователь
          отмечал их, как сложные. Либо в порядке, в котором они
          находились в учебнике.`,
        ],
        taskText2: [
          {
            list: 'На каждой странице учебника отображается',
            listEl: [
              `Меню или иконка меню.`,
              `Список из 20 слов в разделе в <<Сложные слова>> слов может
              быть больше.`,
              `Ссылки на мини-игры: Аудиовызов и в Спринт`,
              `Глобальный поиск доски.`,
              `Реализована функциональность просмотра и редактирования 
              задачи.`,
              `Задача должна иметь кнопку<<удаления задачи>>. По щелчку:
              режим подтверждения.`,
              `Задача имеет информацию о создателе и данные доски и колонки.`,
              `Навигация по страницам учебник.`,
              `Также необходимо реализовать навигацию по семи
              разделам учебника и предусмотреть небольшие различия
              в оформлении каждого раздела.
              `,
              `При перезагрузке страницы открывается последняя 
              открытая страница приложения.`,
            ],
          },
          {
            list: 'Для каждого списка слова отображается,',
            listEl: [
              `Само слово, транскрипция, перевод.`,
              `Предложение с объяснением значения слова, перевод
              предложение.`,
              `Предложение с примером использования изучаемого
              слова, перевод предложение.
              `,
              `Картинка ассоциация к изучаемому слов.`,
              `Иконка аудио, при клике по которой последовательно
              звучит произношение изучаемого слова, произношения
              предложения с объяснением его значения, произношение
              предложения с примером его использования.`,
            ],
          },
          {
            list: 'Только у авторизированных пользователей отображатся:',
            listEl: [
              `Кнопка, при клике по которой слово можно отметить как
              сложное в разделе<<Сложные слова>> на её месте
              отображается кнопка, снимающая отметку, что это сложное
              слово и удаляющая его из данного раздела. ,
              кнопка, при клике по которой слово можно отметить как
              измученно.`,
              `Если слово отмечено как сложное, оно остаётся на 
              странице учебника и выделяется стилем, указывающим, 
              что данное слово относится к сложным словам. Также 
              данное слово добавляется в раздел <<Сложные слова>>.`,
              `Если слово отмечено как изученное, оно остаётся на 
              странице учебника и выделяется стилем, указывающим, 
              что данное слово относится к изученным словам.`,
              `Если все слова на странице относятся к изученным
              словам или к изученным и сложным словам, такая
              страница считается полностью изученной и выделяется
              стилем. Также стилем выделяется соответствующая ей
              кнопка навигации по страницам учебника достаточно
              выделить номер открытой в данный момент страницы,
              если она полностью изучена. Ссылки на мини игры на этой
              странице становятся неактивными.`,
            ],
          },
        ],
        branches: ['book-develop'],
        linkToPR: 'https://github.com/rrroeva/rslang/pull/84',
        linkToDeploy: '',
      },
      {
        title: 'Online-Store',
        work: 'Учебная работа',
        writingtitle: 'Написано:',
        writingLengueges: 'JavaScript, TypeScript, Eslint, SAAS',
        review: `Выполнено на языке JavaScript с типизацией TypeScript, для стилей расширение SCSS. Также было использование расширение Eslint для устранения мелких дефектов.`,
        comand: '',
        taskTitle: 'Требование:',
        taskText: [
          `Реализован текстовый поиск по всем данным продуктов.`,
          `Реализована кнопка сброса всех фильтров`,
          `Хранение данных в localStorage, данные о добавленных продуктах 
          хранятся в localStorage и при перезагрузке страницы 
          восстанавливаются.`,
        ],
        taskText2: [
          {
            list: 'Реализована фильтрация продуктов',
            listEl: [
              `Присутствуют два блока фильтров, по категории и
              брэнду/названию, где реализован список с возможностью 
              выбрать конкретную категорию/брэнд.`,
              `Присутствуют два блока фильтров с ползунками (dual-slider), 
              по диапазонам цены и наличию на складе. Вы можете 
              заменить наличие на складе на другое свойство товара 
              выбранной Вами тематики.`,
              `Изменение любых фильтров должно добавлять в 
              query-параметры соответствующие данные, для того, чтобы
              при перезагрузке страницы восстанавливалось текущее
              состояние страницы с примененными фильтрами.`,
              `При применении любого фильтра, должны динамически 
              пересчитываться все фильтры и меняться состояние 
             элементов в них. Текстовый поиск также относится к фильтрам. 
             Например, при выборе определенной категории товара, в 
             других фильтрах должно пересчитываться количество 
             найденных товаров с указанием сколько найдено при такой 
             конфигурации фильтров, а также сколько доступно без учета 
             всех применённых фильтров.`,
            ],
          },
          {
            list: 'Реализована сортировка продуктов',
            listEl: [
              `Присутствует возможность сортировки продуктов минимум 
              по 2 критериям, например по цене и рейтингу (от наименьшего 
              к большему и наоборот)`,
            ],
          },
        ],
        branches: ['book-develop'],
        linkToPR:
          'https://github.com/alimbaeva/rsschool_tasks_stage2_2022/tree/Online-Store/online-store',
        linkToDeploy: 'https://alimbaeva-online-store.netlify.app/',
      },
      {
        title: 'Shelter',
        work: 'Учебная работа',
        writingtitle: 'Написано:',
        writingLengueges: 'JavaScript, HTML, CSS, Perfect Pixel',
        review: `Выполнено на гипер тексте HTML, верстка выполнена с помошью 
        Perfect Pixel, сделано адаптивная верстка до ширины 320px.
        Добавлена логика на языке JavaScript.`,
        comand: '',
        taskTitle: 'Требование:',
        taskText: [
          `Интерактивная панель навигации.`,
          `Нажатие на <<Our pets>> перебрасывает нас на страницу "our pets"`,
          `Нажатие на <<Help the shelter>> перебрасывает нас на блок "Help", 
          расположенный на этой же странице (якорная ссылка).`,
          `Нажатие на <<Contacts>> перебрасывает нас на блок "Footer", 
          расположенный на этой же странице (якорная ссылка).`,
          `Кнопка <<Make a Friend>> должна быть интерактивной.`,
          `Кнопки "влево" и "вправо" должны быть интерактивными.`,
          `Карточки с питомцами должны быть интерактивными при 
          наведении на любую область карточки. Наведение на карточку 
          меняет курсор, делает подсветку кнопки <<Learn more>> и меняет фон.`,
          `Кнопки <<Learn more>> должны быть интерактивными.`,
          `Кнопка <<Get to know the rest>> должна быть интерактивной.`,
          `Нажатие на <<Get to know the rest>> перебрасывает нас на страницу 
          "our pets."`,
          `Для позиционирования элементов блока используется сеточная 
          верстка (flexbox или grid).`,
          `Бургер меню будет на странице только при width < 768px.`,
          `При нажатии на "бургер" меню, с правой стороны будет выезжать
          блок шириной 320px, и высотой во всю высоту окна браузера, в 
          котором будут вертикально расположенные и центрированные 
          элементы меню. Должна присутствовать анимация выезда 
          (slide-in).`,
          `Каждый новый слайд будет содержать псевдослучайный набор 
          питомцев, т.е. генерироваться из исходных объектов в случайном 
          порядке, с двумя условиями. Во-первых, в самом блоке слайда 
          карточки с питомцами повторяться не будут. Во-вторых, в 
          следующем блоке, дублирующихся карточек с карточками 
          текущего блока, не будет. Например, в слайдере из 3 элементов, 
          следующий выезжающий слайд будет содержать 3 новых 
          карточки питомца, таких, каких не было среди 3-х карточек на 
          предыдущем уехавшем слайде.`,
          `При открытии попапа вертикальный скролл должен стать 
          неактивным.`,
          `При нажатии вне границ попапа, на затемненную область, или на 
          кнопку с крестиком, попап и затемнение должны исчезнуть.`,
          `При закрытии попапа вертикальный скролл должен стать вновь 
          активным.`,
          `При width < 768px в дизайне попапа картинки питомца нет.`,
        ],
        taskText2: [],
        branches: [],
        linkToPR: '',
        linkToDeploy:
          'https://rolling-scopes-school.github.io/alimbaeva-JSFE2022Q1/shelter/pages/main/index.html',
      },
      {
        title: 'portfolio',
        work: 'Учебная работа',
        writingtitle: 'Написано:',
        writingLengueges: 'JavaScript, HTML, CSS, Perfect Pixel',
        review: `Выполнено на гипертексте HTML, верстка выполнена с помощью 
        Perfect Pixel, сделано адаптивная верстка до ширины 320px.
        Добавлена логика на языке JavaScript.`,
        comand: '',
        taskTitle: 'Требование:',
        taskText: [
          `Необходимо сверстать страницу по макету, которая корректно 
          отображается при ширине экрана не меньше 1440рх.`,
          `Проверяется валидность и семантичность вёрстки, её 
          совпадение с макетом.`,
          `При ширине страницы 768рх ставится задача совпадения вёрстки
          с макетом, на остальных разрешениях до 320рх включительно 
          достаточно обеспечить отсутствие горизонтальной полосы 
          прокрутки. Также на этом этапе в вёрстку добавляется
          адаптивное меню, для создания которого используется js.`,
        ],
        taskText2: [
          {
            list: 'Используем JavaScript для добавления странице интерактивности:',
            listEl: [
              `смена изображений в секции portfolio`,
              `перевод страницы на два языка`,
              `возможность переключения светлой и тёмной темы`,
            ],
          },
        ],
        branches: [],
        linkToPR: 'https://github.com/alimbaeva/Portfolio_RS-SCHOOL_2022_st0/tree/main/portfolio',
        linkToDeploy:
          'https://alimbaeva.github.io/Portfolio_RS-SCHOOL_2022_st0/portfolio/index.html',
      },
    ],
    taskCodeTitle: 'Пример кода',
    taskCodeShow: 'Посмотреть код',
    taskCodeText_1:
      'Написать функцию sostavChisla(massivChisel: number[], chislo: number). Которая бы находила все возможные комбинации чисел. Из massivChisel, сумма которых равна chislo. При этом: massivChisel содержит, только уникальные положительные числа (> 0) 2- в комбинации не должно быть повторений чисел 3- все комбинации должны быть уникальными',
    taskCodeText_2: ` chislo: 15, massivChisel: [7, 8, 3, 4, 5, 6, 1, 2], result: [[1, 2, 3, 4, 5], [2, 3, 4, 6], [1, 3, 5, 6], [4, 5, 6], [1, 3, 4, 7], [1, 2, 5, 7], [3, 5, 7], [2, 6, 7], [1, 2, 4, 8], [3, 4, 8], [2, 5, 8], [1, 6, 8], [7, 8]] `,
    coursesTitle: 'Курсы',
    courses: ['Jyldyz Academy (закончила)', 'RS-SCHOOL (закончила)', 'RS-SCHOOL React (закончила)'],
    btnCertificate: 'сертификат',
    certificateLink: '',
    btnLernMore: 'Узнать больше',
    btnLinkPR: 'Ссылка на PR',
    btnLinkDeploy: 'Ссылка на Deploy',
    hardSkillsTitle: 'Основные навыки',
    hardSkillsList: [
      'JavaScript __ продвинутый',
      'React __ продвинутый',
      'TypeScript __ продвинутый',
      'Redux toolkit __ средний',
      'Git __ средний',
      'HTML __ продвинутый',
      'CSS __ продвинутый',
      'SCSS __ продвинутый',
      'SAAS __ продвинутый',
      'Webpack __ продвинутый',
      'Eslint __ продвинутый',
      'Perfect Pixel __ продвинутый',
      'MUI __ средний',
      'Tailwind __ средний',
      'Bootstrap __ база',
      'Slick __ база',
    ],
    softSkillsTitle: 'Мягкие навыки',
    softSkillsList: ['Тайм-менеджмент', 'Целеустремленность', 'Стабильность'],
    lenguegesTitle: 'Языки',
    lenguegesList: [
      'Английский - Pre-Intermediate',
      'Русский - Русский свободно',
      'Кыргызский - Кыргызский родной',
    ],
    contactsTitle: 'Контакт',
    contactsList: [
      { image: '', link: '', name: 'aselAl86' },
      { image: '', link: '', name: 'asel.alimbaeva.kk@gmail.com' },
      { image: '', link: '', name: 'alimbaeva' },
      { image: '', link: '', name: 'asel.alimbaeva' },
    ],
  },
};

export default data;
