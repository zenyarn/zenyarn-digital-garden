import websiteConfig from "../../website.config.mjs";

export const languages = {
  en: "English",
  es: "Spanish",
  zh: "中文",
};

export const defaultLang = websiteConfig.defaultLanguage;

export const ui = {
  en: {
    "article.author.name": "by {name}",
    "footer.readingTime": "Tiempo de Lectura: {readingTime}",
    "footer.charactersCount": "{characters} characters",
    "footer.wordsCount": "{words} words",
    "format.minute": "{minute} minute",
    "format.minutes": "{minutes} minutes",
    "format.seconds": "{seconds} seconds",
    "format.milliseconds": "{milliseconds} milliseconds",
    "nav.links": "Links",
    "nav.linkedMentions": "Linked Mentions",
    "nav.tableOfContents": "Table of Contents",
    "404.title": "Document not found",
    "404.description": "The document you are looking for does not exist.",
  },
  es: {
    "article.author.name": "por {name}",
    "footer.readingTime": "Tiempo de Lectura: {readingTime}",
    "footer.charactersCount": "{characters} caracteres",
    "footer.wordsCount": "{words} palabras",
    "format.minute": "{minute} minuto",
    "format.minutes": "{minutes} minutos",
    "format.seconds": "{seconds} segundos",
    "format.milliseconds": "{milliseconds} milisegundos",
    "nav.links": "Enalces",
    "nav.linkedMentions": "Menciones",
    "nav.tableOfContents": "Tabla de Contenidos",
    "404.title": "Documento no encontrado",
    "404.description": "El documento que buscas no existe.",
  },
  zh: {
    "article.author.name": "作者：{name}",
    "footer.readingTime": "阅读时间：{readingTime}",
    "footer.charactersCount": "{characters} 字符",
    "footer.wordsCount": "{words} 字",
    "format.minute": "{minute} 分钟",
    "format.minutes": "{minutes} 分钟",
    "format.seconds": "{seconds} 秒",
    "format.milliseconds": "{milliseconds} 毫秒",
    "nav.links": "链接",
    "nav.linkedMentions": "引用",
    "nav.tableOfContents": "目录",
    "404.title": "未找到文档",
    "404.description": "您查找的文档不存在。",
  },
} as const;
