document.addEventListener("click", () => {
    return import(/* webpackPrefetch: true */ "./inner").then(({default: func}) => {
        func();
    })
})