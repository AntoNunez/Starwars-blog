import Swal from 'sweetalert2'
import 'animate.css';
const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            c: 0,
            people: null,
            planets: null,
            naves: null,
            favorite: [],
           
        },
        actions: {
            getDataPeople: async (url) => {
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
                const resp = await fetch(url)
                const dataPeople = await resp.json();
                setStore({
                    people: dataPeople
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
                setStore({
                    naves: dataNave
                })
            },
            addFavorite: (personaje) => {
                if (getStore().favorite.includes(personaje)) {
                    Swal.fire({
                        title: 'Ya está en tus favoritos!!!',
                        color: '#ffcc00',
                        background: 'black',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__zoomOutDown'
                        }
                    })
                } else {
                    setStore({
                        favorite: getStore().favorite.concat(personaje)

                    })
                    getActions().saveFav()
                }
            },

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
                    setStore({ favorite: JSON.parse(data) })
                }
            }
        }
    }
}

export default getState;
