import comp from "C:/Users/Romulo/Desktop/iarte/vuepress-starter/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"Sobre o projeto\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"O que é uma IA?\",\"slug\":\"o-que-e-uma-ia\",\"link\":\"#o-que-e-uma-ia\",\"children\":[]},{\"level\":2,\"title\":\"Como a IA se relaciona com a arte?\",\"slug\":\"como-a-ia-se-relaciona-com-a-arte\",\"link\":\"#como-a-ia-se-relaciona-com-a-arte\",\"children\":[]},{\"level\":2,\"title\":\"Tópico\",\"slug\":\"topico\",\"link\":\"#topico\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"get-started.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
