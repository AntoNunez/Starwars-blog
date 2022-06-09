const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            c:0,
            characters: null,
            planets: null,
            naves:null,
            favorite: [],
            /* lista:[], */
        },
        actions: {
            getDataCharacters: async (url) => {
                if (url.includes("page")) {
                    let page = url.split("=")[1];
                    if (page > 1) {
                        setStore({
                            c: parseInt(page) * 10 - 10
                        })
                    } else {
                        setStore({
                            c: 0
                        })
                    }
                } else {
                    setStore({
                        c: 0
                    })
                }
                const response = await fetch(url)
                const data = await response.json();
                setStore({
                    characters: data,
                })
            },
           
            getDataPlanets: async (url) => {
                if (url.includes("page")) {
                    let page = url.split("=")[1];
                    if (page > 1) {
                        setStore({
                            c: parseInt(page) * 10 - 10
                        })
                    } else {
                        setStore({
                            c: 0
                        })
                    }
                } else {
                    setStore({
                        c: 0
                    })
                }
                const resp = await fetch(url);
                const dataPlanets = await resp.json()
                setStore({
                    planets: dataPlanets
                })
            },
            getDataNave: async (url) => {
                if (url.includes("page")) {
                    let page = url.split("=")[1];
                    if (page > 1) {
                        setStore({
                            c: parseInt(page) * 10 - 10
                        })
                    } else {
                        setStore({
                            c: 0
                        })
                    }
                } else {
                    setStore({
                        c: 0
                    })
                }
                const resp = await fetch(url);
                const dataNave = await resp.json();
                setStore ({
                    naves: dataNave
                })
            },
            addFavorite: (personaje) => {
                if (getStore().favorite.includes(personaje)){
                    alert("Ya se encuentra en tus favoritos")
                } else {
                setStore({
                    favorite: getStore().favorite.concat(personaje)

                })
                getActions().saveFav()
            }},
        
            deleteFavorite: (personaje) => {
                setStore({
                    favorite: getStore().favorite.filter(fav => fav !== personaje)
                })
                getActions().saveFav()
            },
            saveFav: () => {
                localStorage.setItem('lista', JSON.stringify(getStore().favorite))
            },
            getList: () => {
                if (localStorage.getItem('lista')) {
                    let data = localStorage.getItem('lista');
                    setStore({ favorite: JSON.parse(data)})
                }
            }
        }
    }
}

export default getState;
