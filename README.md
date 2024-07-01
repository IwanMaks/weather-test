# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

## Пояснение к своему решению

- Для работы с погоды используется api openweather
- Выбранные города и хранятся в local storage
- Список городов захардкожен, так как не получилось найти api по предоставлению списка городов. Из-за сего селект городов может тормозить
- Фильтрация городов выполняется на стороне клиента
- Для стилизации использовался TailwindCSS
- Тестирование утилиты classNames происходит с помощью библиотеки Jest

## Документирование кода и архитектуры приложений

### Документирование архитектуры

Архитектура проекта включает следующие ключевые компоненты и файлы:

1. **Конфигурационные файлы и метаданные проекта:**

   - `.eslintrc.cjs`: Конфигурация ESLint для поддержания качества кода.
   - `.gitignore`: Файлы и директории, игнорируемые системой контроля версий Git.
   - `.prettierrc`: Конфигурация Prettier для форматирования кода.
   - `package.json`: Список зависимостей и скриптов проекта.\
   - `postcss.config.js`: Конфигурация PostCSS.
   - `tailwind.config.js`: Конфигурация Tailwind CSS.
   - `tsconfig.app.json`, `tsconfig.json`, `tsconfig.node.json`: Конфигурации TypeScript.
   - `vite.config.ts`: Конфигурация сборщика Vite.
   - `README.md`: Документация проекта.

2. **Файлы для публичного доступа:**

   - `index.html`: Главный HTML файл приложения.
   - `public/vite.svg`: Логотип для публичного доступа.

3. **Исходный код:**

   - `src/App.tsx`: Главный компонент приложения.
   - `src/appConstants.tsx`: Константы, используемые в приложении.
   - `src/custom.d.ts`: Типы TypeScript для работы с картинками и svg форматом.
   - `src/index.css`: Основные стили приложения.
   - `src/main.tsx`: Точка входа в приложение.
   - `src/vite-env.d.ts`: Типы окружения для Vite.

4. **API:**

   - `src/api/weatherApi.ts`: Модуль для взаимодействия с API погоды.

5. **Изображения:**

   - `src/assets/`: Иконки и изображения, используемые в приложении.

6. **Компоненты:**

   - `src/components/ChangeUnits.tsx`: Компонент для изменения единиц измерения.
   - `src/components/CitySelector.tsx`: Компонент для выбора города.
   - `src/components/ErrorState.tsx`: Компонент для отображения ошибок.
   - `src/components/HoursList.tsx`: Компонент для отображения списка погоды по часам.
   - `src/components/HoursListItem.tsx`: Компонент для элемента списка погоды по часам.
   - `src/components/Loading.tsx`: Компонент для отображения состояния загрузки.
   - `src/components/SavedCities.tsx`: Компонент для отображения сохраненных городов.
   - `src/components/Stat.tsx`: Компонент для отображения статистики погоды.
   - `src/components/WeatherCard.tsx`: Компонент для отображения главной карточки погоды.

7. **Features redux:**

   - `src/features/cities/citiesSlice.ts`: Слайс состояния для работы с городами.
   - `src/features/cities/citiesTypes.ts`: Типы данных для работы с городами.
   - `src/features/weather/weatherSlice.ts`: Слайс состояния для работы с погодой.
   - `src/features/weather/weatherTypes.ts`: Типы данных для работы с погодой.

8. **Хелперы и утилиты:**

   - `src/helpers/utils.ts`: Вспомогательные функции и утилиты.

9. **Хранилище состояния:**
   - `src/store/store.ts`: Конфигурация и создание глобального хранилища состояния.
