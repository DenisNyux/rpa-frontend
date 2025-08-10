// Общие классы для контейнеров и макетов
export const layout = {
  // Основные контейнеры страниц
  pageContainer: "my-8 mx-16 lg:mx-6 lg:my-8",
  pageContainerCentered: "my-8 mx-16 lg:mx-6 lg:my-8 flex flex-col items-center lg:items-start",
  
  // Flex контейнеры
  flexCol: "flex flex-col",
  flexRow: "flex flex-row",
  flexCenter: "flex items-center justify-center",
  flexBetween: "flex justify-between",
  flexColCenter: "flex flex-col items-center",
  flexColStart: "flex flex-col items-start",
  
  // Grid контейнеры
  gridCols2: "grid grid-cols-2",
  gridCols3: "grid grid-cols-3",
  gridCols4: "grid grid-cols-4",
  gridGap5: "gap-5",
  gridGap6: "gap-6",
  
  // Responsive grid
  responsiveGrid: "grid grid-cols-2 gap-6 md:grid-cols-1",
  responsiveGrid3: "grid grid-cols-3 gap-5 lg:grid-cols-2 md:grid-cols-1",
  
  // Размеры
  fullWidth: "w-full",
  halfWidth: "w-1/2",
  aspectSquare: "aspect-square",
} as const;

// Классы для отступов и позиционирования
export const spacing = {
  // Отступы
  gap2: "gap-2",
  gap3: "gap-3",
  gap4: "gap-4",
  gap5: "gap-5",
  gap6: "gap-6",
  gap8: "gap-8",
  
  // Внешние отступы
  my8: "my-8",
  my20: "my-20",
  mt6: "mt-6",
  mb4: "mb-4",
  mb5: "mb-5",
  mb6: "mb-6",
  
  // Внутренние отступы
  p4: "p-4",
  p6: "p-6",
  pt4: "pt-4",
  pt7: "pt-7",
  pr6: "pr-6",
  pl5: "pl-5",
} as const;

// Классы для типографики
export const typography = {
  // Заголовки
  h1: "text-4xl font-bold",
  h2: "text-3xl font-bold",
  h3: "text-2xl font-bold",
  h4: "text-lg font-bold",
  
  // Текст
  textBase: "text-base",
  textSm: "text-sm",
  textLg: "text-lg",
  textXl: "text-xl",
  text2xl: "text-2xl",
  text3xl: "text-3xl",
  
  // Вес шрифта
  fontBold: "font-bold",
  fontNormal: "font-normal",
  
  // Выравнивание
  textCenter: "text-center",
  textLeft: "text-left",
  
  // Стили
  uppercase: "uppercase",
  underline: "underline",
  italic: "italic",
} as const;

// Классы для цветов
export const colors = {
  // Основные цвета проекта
  primary: "text-[#5E050D]",
  primaryBg: "bg-[#5E050D]",
  white: "text-white",
  whiteBg: "bg-white",
  red: "text-red-500",
  redBg: "bg-red-500",
  grey: "bg-zinc-400",
  
  // Границы
  borderBlack: "border-black",
  borderGrey: "border-[rgb(229, 231, 235)]",
} as const;

// Классы для кнопок и интерактивных элементов
export const interactive = {
  // Кнопки
  button: "p-2 rounded-md",
  buttonPrimary: "bg-[#5E050D] text-white p-2 rounded-md",
  buttonLarge: "bg-[#5E050D] text-white w-1/4 md:w-full p-4 rounded",
  
  // Ссылки
  link: "text-[#5E050D] text-base leading-5",
  linkUnderline: "text-[#5E050D] p-2 rounded-md self-baseline underline",
  
  // Анимации (из globals.css)
  clickableAnimation: "clickable__animation",
  clickableAnimationNoBrightness: "clickable__animation__no__brightness",
  
  // Тени
  defaultShadow: "default__shadow",
} as const;

// Классы для форм
export const forms = {
  formControl: "flex flex-col gap-0.5rem",
  formInput: "border border-[rgb(229, 231, 235)] rounded p-2",
  formButton: "bg-[#5E050D] text-white p-4 rounded",
} as const;

// Классы для карточек
export const cards = {
  card: "border rounded-lg bg-white p-4",
  cardRounded: "border-radius-20px bg-white",
  cardShadow: "border border-black/10 shadow-lg",
} as const;

// Responsive классы
export const responsive = {
  // Мобильные адаптации
  mobile: {
    flexCol: "md:flex md:flex-col",
    flexCenter: "md:flex md:items-center",
    textCenter: "md:text-center",
    text3xl: "xs:text-3xl",
    textXl: "xs:text-xl",
    textBase: "xs:text-base",
    wFull: "md:w-full",
    wHalf: "md:w-1/2",
    gridCols1: "md:grid-cols-1",
    gridCols2: "md:grid-cols-2",
    gap3: "md:gap-3",
    gap7: "md:gap-7",
    p5: "md:p-5",
    hidden: "md:hidden",
    visible: "md:visible",
    invisible: "md:invisible",
    overflowAuto: "md:overflow-auto",
    hAuto: "md:h-auto",
    opacity100: "md:opacity-100",
  },
  
  // Планшетные адаптации
  tablet: {
    flexCol: "lg:flex-col",
    flexRow: "lg:flex-row",
    flexCenter: "lg:flex lg:items-center",
    justifyCenter: "lg:justify-center",
    textCenter: "lg:text-center",
    textXl: "lg:text-xl",
    wFull: "lg:w-full",
    wHalf: "lg:w-1/2",
    w7_12: "lg:w-7/12",
    w5_12: "lg:w-5/12",
    w1_12: "lg:w-1/12",
    w1_3: "lg:w-1/3",
    w2_3: "lg:w-2/3",
    gridCols1: "lg:grid-cols-1",
    gridCols2: "lg:grid-cols-2",
    gridCols4: "lg:grid-cols-4",
    gridRows1: "lg:grid-rows-1",
    gridRows2: "lg:grid-rows-2",
    gap2: "lg:gap-2",
    gap4: "lg:gap-4",
    gap6: "lg:gap-6",
    p0: "lg:p-0",
    pt0: "lg:pt-0",
    pt4: "lg:pt-4",
    py6: "lg:py-6",
    pr0: "lg:pr-0",
    pl0: "lg:pl-0",
    borderR0: "lg:border-r-0",
    borderL0: "lg:border-l-0",
    colSpan3: "lg:col-span-3",
    rowStart1: "lg:row-start-1",
    rowStart2: "lg:row-start-2",
    colStart1: "lg:col-start-1",
  },
  
  // Десктопные адаптации
  desktop: {
    w11_12: "xl:w-11/12",
    w7_12: "xl:w-7/12",
    w2_3: "xl:w-2/3",
    w1_3: "xl:w-1/3",
  },
} as const;

// Классы для утилит
export const utilities = {
  // Позиционирование
  relative: "relative",
  absolute: "absolute",
  
  // Переполнение
  overflowHidden: "overflow-hidden",
  overflowAuto: "overflow-auto",
  
  // Переходы
  transition: "transition-all",
  transitionTransform: "transition-transform",
  rotate180: "rotate-180",
  
  // Видимость
  visible: "visible",
  invisible: "invisible",
  
  // Размеры
  h0: "h-0",
  hFull: "h-full",
  hAuto: "h-auto",
  wAuto: "w-auto",
  maxWMax: "max-w-max",
  
  // Прозрачность
  opacity0: "opacity-0",
  opacity100: "opacity-100",
  
  // Курсор
  cursorPointer: "cursor-pointer",
  
  // Обрезка текста
  whitespaceNowrap: "whitespace-nowrap",
  textEllipsis: "text-ellipsis",
} as const;

// Комбинированные классы для часто используемых паттернов
export const patterns = {
  // Карточка участника
  memberCard: `${cards.cardRounded} ${interactive.defaultShadow} ${layout.flexCol} ${spacing.gap3} ${layout.aspectSquare}`,
  
  // Кнопка с анимацией
  animatedButton: `${interactive.buttonPrimary} ${interactive.clickableAnimation}`,
  
  // Контейнер с отступами
  sectionContainer: `${spacing.my8} ${layout.fullWidth}`,
  
  // Заголовок с разделителем
  sectionHeader: `${typography.h4} ${spacing.mb5} ${typography.fontBold}`,
  
  // Ссылка с анимацией
  animatedLink: `${interactive.link} ${interactive.clickableAnimation}`,
  
  // Форма
  formContainer: `${layout.flexCol} ${spacing.gap3} ${layout.fullWidth}`,
  
  // Модальное окно
  modalContainer: `${layout.flexCenter} ${spacing.p6} ${layout.fullWidth}`,
} as const;

// Экспорт всех классов в одном объекте для удобства
export const tailwindClasses = {
  layout,
  spacing,
  typography,
  colors,
  interactive,
  forms,
  cards,
  responsive,
  utilities,
  patterns,
} as const;

/*
ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ:

// Импорт классов
import { layout, spacing, typography, colors, interactive, patterns } from '@/styles/tailwindClasses';

// Использование в компоненте
function MyComponent() {
  return (
    <div className={layout.pageContainer}>
      <h1 className={typography.h2}>Заголовок</h1>
      <div className={`${layout.flexCol} ${spacing.gap4}`}>
        <button className={interactive.buttonPrimary}>
          Кнопка
        </button>
        <Link href="/" className={patterns.animatedLink}>
          Ссылка с анимацией
        </Link>
      </div>
    </div>
  );
}

// Или использование через основной объект
import { tailwindClasses } from '@/styles/tailwindClasses';

function AnotherComponent() {
  return (
    <div className={tailwindClasses.layout.pageContainer}>
      <h2 className={tailwindClasses.typography.h3}>
        Другой заголовок
      </h2>
    </div>
  );
}
*/
