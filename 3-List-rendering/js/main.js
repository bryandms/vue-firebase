const vm = new Vue({
    el: 'main',
    data: {
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        teams: [
            { name: 'France', score: 1726.41 },
            { name: 'Belgium', score: 1722.66 },
            { name: 'Brazil', score: 1656.84 },
            { name: 'Croatia', score: 1642.72 }
        ],
        novel: {
            name: 'Bajo la lluvia Dios no existe',
            author: 'Warren Ulloa',
            editorial: 'Uruk Ediciones'
        }
    }
});