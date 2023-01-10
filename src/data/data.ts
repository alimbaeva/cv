export const data = {
  en: {
    lenguege: 'EN',
    title: 'Asel Alymbaeva',
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
        branches: ['main-page', 'page-404', 'card-create', 'routing', 'edit-modal-fix'],
        linkToPR: '',
        linkToDeploy: '',
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
        linkToPR: '',
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
          `Implemented text search for all product data.`,
          `Implemented button to reset all filters`,
          `Storing data in localStorage, data about added products stored in localStorage and on page reload are being restored.`,
        ],
        branches: ['book-develop'],
        linkToPR: '',
        linkToDeploy: '',
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
        branches: [],
        linkToPR: '',
        linkToDeploy: '',
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
        linkToPR: '',
        linkToDeploy: '',
      },
    ],
    taskCodeTitle: 'Code Example',
    coursesTitle: 'Courses',
    courses: ['Jyldyz Academy (finished)', 'RS-SCHOOL (finished)', 'RS-SCHOOL React (finished)'],
    btnCertificate: 'certificate',
    certificateLink: '',
    btnLernMore: 'To learn more',
    btnLinkPR: 'Link to PR',
    btnLinkDeploy: 'Link to Deploy',
    hardSkillsTitle: 'Hard Skills',
    hardSkillsList: [
      'JavaScript',
      'TypeScript',
      'Redux toolkit',
      'Git',
      'HTML',
      'CSS',
      'SCSS',
      'SAAS',
      'Webpack',
      'Eslint',
      'Perfect Pixel',
      'MUI',
      'Tailwind',
      'Bootstrap',
      'Slick',
    ],
    softSkillsTitle: 'Soft Skills',
    softSkillsList: ['Time management', 'Time management', 'Commitment', 'Stability'],
    lenguegesTitle: 'Languages',
    lenguegesList: [
      'English - Pre-Intermediate',
      'Russian - professionally',
      'Kyrgyz - professionally',
    ],
    contactsTitle: 'Contact',
    contactsList: [
      { image: '', link: '', name: 'aselAl86' },
      { image: '', link: '', name: 'asel.alimbaeva.kk@gmail.com' },
      { image: '', link: '', name: 'alimbaeva' },
      { image: '', link: '', name: 'asel.alimbaeva' },
    ],
  },
  ru: {
    lenguege: 'RU',
    title: 'Асель Алымбаева',
    profession: 'Фронтенд разработчик',
    aboutTitle: 'Коротко о себе.',
    aboutText: {
      text1: `Люблю "думать в слух" и разбирать фильмы и мультфильмы.
        Свободное время стараюсь гулят на природе и заниматься спортом.
        Не люблю сидеть без дела и поэтому всегда ищу интересные идеи  и занятия.`,
      text2: `Для меня самым дорогим является время и здоровье. Поэтому я пунктуален и 
        ценю людей уделявщей свое время на меня. Так же я не теряя время на не 
        нужные информации в интернете стараюсь это время проводить со своей 
        семьей. И веду здоровый образ жизни.`,
    },
    portfolioTitle: 'Портфолио',
    portfolios: [
      {
        title: 'Management System',
        work: 'Учебная командная работа',
        writingtitle: 'Написано:',
        writingLengueges: 'React, TypeScript, Redux toolkit, MUI, Eslint',
        review: `Выполнено на фрэймворке React с типизацией TypeScript, для стилей использовали библиотеку MUI, так же для упралением и передачей данных использовали библиотеку Redux toolkit, для реализаций форм использовали библиотеку React-hook-form, а для реализации drag-and-drop использовали библиотеку 
            React-beautiful-dnd. Для соединение с сервором реализовали на Docker. Сделана адаптивная верстка. Минимальная ширина страницы приложения 320 px.`,
        comand: 'Команда из 3 человек.',
        taskTitle: 'Mоя задача: ',
        taskText: [
          `Создать нову доску - открывает модальное окно с формой для 
            создания доски. Требования к форме такие же как и ко всем 
            формам в заявке.`,
          `Отображает все созданные доски в виде списка.`,
          `Доски отображается с небольшим предварительным просмотром 
          доступной информации название, описание и т.д. Нажав на 
          элемент, пользователь перенаправляется на элемент доски 
          маршрут доски. Должна быть кнопка для удаления доски.`,
          `Когда пользователь пытается удалить доску, он / она должен
          получить модальное подтверждение, чтобы проверить хочет ли 
          пользователь удалить доску чтобы избежать удаления доски по 
          ошибке. Способ подтверждения должен быть общим 
          компонентом один для приложения.`,
          `Глобальный поиск доски.`,
          `Реализована функциональность просмотра и редактирования 
          задачи.`,
          `Задача должна иметь кнопку удаления задачи. По щелчку: 
          режим подтверждени.`,
          `Задача имеет информаци о создателе и данные доски и колонки.`,
        ],
        branches: ['main-page', 'page-404', 'card-create', 'routing', 'edit-modal-fix'],
        linkToPR: '',
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
          `Вёрстка, дизайн, UI страниц электронного учебник*`,
          `Электронный учебник генерируется на основе коллекции 
          исходных данных и состоит из шести разделов, в каждом 
          разделе 30 страниц, на каждой странице 20 слов для изучени.`,
          `Седьмой раздел учебника - BСложные слова изначально пустой. 
          Этот раздел состоит из слов, которые пользователь отметил как 
          сложные. Все слова в этом разделе размеща тся на одной 
          странице. На усмотрение разработчиков, слова в данный раздел
          добавля тся либо в том порядке, в котором пользователь 
          отмечал их как сложные, либо / порядке, в котором они 
          находились в учебнике'.`,
          {
            list: 'На каждой странице учебника отображается',
            listEl: [
              `меню или иконка меню.`,
              `список из 20 слов в разделе в Сложные слова слов может
              быть больше.`,
              `ссылки на мини-игры Аудиовызов и в Спринт`,
              `Глобальный поиск доски.`,
              `Реализована функциональность просмотра и редактирования 
              задачи.`,
              `Задача должна иметь кнопку удаления задачи. По щелчку: 
              режим подтверждени.`,
              `Задача имеет информаци о создателе и данные доски и колонки.`,
              `навигация по страницам учебник.`,
              `также необходимо реализовать навигаци по семи 
              разделам учебника и предусмотреть небольшие различия 
              в оформлении каждого раздел.`,
              `при перезагрузке страницы открывается последняя 
              открытая страница приложения.`,
            ],
          },
          {
            list: 'Для каждого списка слова отображается,',
            listEl: [
              `само слово, транскрипция, перевод.`,
              `предложение с объяснением значения слова, перевод 
              предложени.`,
              `предложение с примером использования изучаемого 
              слова, перевод предложени.`,
              `картинка-ассоциация к изучаемому слов.`,
              `иконка аудио, при клике по которой последовательно 
              звучит произношение изучаемого слова, произношени
              предложения с объяснением его значения, произношение 
              предложения с примером его использовани.`,
            ],
          },
          {
            list: 'Только у авторизированных пользователей отображатся:',
            listEl: [
              `кнопка, при клике по которой слово можно отметить как 
              сложное в разделе Сложные слова на её месте 
              отображается кнопка, снима щая отметку что это сложное
              слово и удаля щая его из данного раздела.`,
              `кнопка, при клике по которой слово можно отметить как 
              изученно.`,
              `если слово отмечено как сложное, оно остаётся на 
              странице учебника и выделяется стилем, указыва щим, 
              что данное слово относится к сложным словам. Также 
              данное слово добавляется в раздел Сложные слова.`,
              `если слово отмечено как изученное, оно остаётся на 
              странице учебника и выделяется стилем, указыва щим, 
              что данное слово относится к изученным слова.`,
              `если все слова на странице относятся к изученным 
              словам или к изученным и сложным словам, такая 
              страница считается полность изученной и выделяется 
              стилем. Также стилем выделяется соответству щая ей 
              кнопка навигации по страницам учебника достаточно 
              выделить номер открытой в данный момент страницы, 
              если она полность изучена). Ссылки на мини-игры на этой 
              странице становятся неактивными.`,
            ],
          },
        ],
        branches: ['book-develop'],
        linkToPR: '',
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
          {
            list: 'Реализована фильтрация продуктов',
            listEl: [
              `присутствуют два блока фильтров, по категории и
              брэнду/названию, где реализован список с возможностью 
              выбрать конкретную категорию/брэнд.`,
              `присутствуют два блока фильтров с ползунками (dual-slider), 
              по диапазонам цены и наличию на складе. Вы можете 
              заменить наличие на складе на другое свойство товара 
              выбранной Вами тематики.`,
              `изменение любых фильтров должно добавлять в 
              query-параметры соответствующие данные, для того, чтобы
              при перезагрузке страницы восстанавливалось текущее
              состояние страницы с примененными фильтрами.`,
              `при применении любого фильтра, должны динамически 
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
              `присутствует возможность сортировки продуктов минимум 
              по 2 критериям, например по цене и рейтингу (от наименьшего 
              к большему и наоборот)`,
            ],
          },
          `Реализован текстовый поиск по всем данным продуктов.`,
          `Реализована кнопка сброса всех фильтров`,
          `Хранение данных в localStorage, данные о добавленных продуктах 
          хранятся в localStorage и при перезагрузке страницы 
          восстанавливаются.`,
        ],
        branches: ['book-develop'],
        linkToPR: '',
        linkToDeploy: '',
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
          `Нажатие на Our pets перебрасывает нас на страницу our pets`,
          `Нажатие на Help the shelter перебрасывает нас на блок Help, 
          расположенный на этой же странице (якорная ссылка).`,
          `Нажатие на Contacts перебрасывает нас на блок Footer, 
          расположенный на этой же странице (якорная ссылка).`,
          `Кнопка Make a Friend должна быть интерактивной.`,
          `Кнопки "влево" и "вправо" должны быть интерактивными.`,
          `Карточки с питомцами должны быть интерактивными при 
          наведении на любую область карточки. Наведение на карточку 
          меняет курсор, делает подсветку кнопки Learn more и меняет фон.`,
          `Кнопки Learn more должны быть интерактивными.`,
          `Кнопка Get to know the rest должна быть интерактивной.`,
          `Нажатие на Get to know the rest перебрасывает нас на страницу 
          our pets.`,
          `Для позиционирования элементов блока используется сеточная 
          верстка (flexbox или grid).`,
          `Бургер меню будет на странице только при width < 768px.`,
          `При нажатии на бургер меню, с правой стороны будет выезжать
          блок шириной 320px, и высотой во всю высоту окна браузера, в 
          котором будут вертикально расположенные и центрированные 
          элементы меню. Должна присутствовать анимация выезда 
          (slide-in).`,
          `Каждый новый слайд будет содержать псевдослучайный набор 
          питомцев, т.е. генерироваться из исходных объектов в случайном 
          порядке, с двумя условиями. Во-первых, в самом блоке слайда 
          карточки с питомцами повторяться не будут. Во-вторых, в 
          следующем блоке, дублирующихся карточек с карточками 
          текущего блока, не будет. Например в слайдере из 3 элементов, 
          следующий выезжающий слайд будет содержать 3 новых 
          карточки питомца, таких, каких не было среди 3х карточек на 
          предыдущем уехавшем слайде.`,
          `При открытии попапа вертикальный скролл должен стать 
          неактивным.`,
          `При нажатии вне границ попапа, на затемненную область, или на 
          кнопку с крестиком, попап и затемнение должны исчезнуть.`,
          `При закрытии попапа вертикальный скролл должен стать вновь 
          активным.`,
          `При width < 768px в дизайне попапа картинки питомца нет.`,
        ],
        branches: [],
        linkToPR: '',
        linkToDeploy: '',
      },
      {
        title: 'portfolio',
        work: 'Учебная работа',
        writingtitle: 'Написано:',
        writingLengueges: 'JavaScript, HTML, CSS, Perfect Pixel',
        review: `Выполнено на гипер тексте HTML, верстка выполнена с помошью 
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
        linkToPR: '',
        linkToDeploy: '',
      },
    ],
    taskCodeTitle: 'Пример кода',
    coursesTitle: 'Курсы',
    courses: ['Jyldyz Academy (finished)', 'RS-SCHOOL (finished)', 'RS-SCHOOL React (finished)'],
    btnCertificate: 'сертификат',
    certificateLink: '',
    btnLernMore: 'Узнать больше',
    btnLinkPR: 'Ссылка на PR',
    btnLinkDeploy: 'Ссылка на Deploy',
    hardSkillsTitle: 'Основные навыки',
    hardSkillsList: [
      'JavaScript',
      'TypeScript',
      'Redux toolkit',
      'Git',
      'HTML',
      'CSS',
      'SCSS',
      'SAAS',
      'Webpack',
      'Eslint',
      'Perfect Pixel',
      'MUI',
      'Tailwind',
      'Bootstrap',
      'Slick',
    ],
    softSkillsTitle: 'Мягкие навыки',
    softSkillsList: ['Тайм-менеджмент', 'Тайм-менеджмент', 'Целеустремленность', 'Стабильность'],
    lenguegesTitle: 'Языки',
    lenguegesList: [
      'Английский - Pre-Intermediate',
      'Русский - профеционально',
      'Кыргызский - профеционально',
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
