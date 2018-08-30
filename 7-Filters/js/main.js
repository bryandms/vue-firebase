Vue.filter('toUpperCase', (value) => value.toUpperCase());

new Vue({
    el: 'main',
    data: {
        search: '',
        min: 0,
        teams: [
            {
                name: 'France',
                score: 1726.41
            },
            {
                name: 'Belgium',
                score: 1722.66
            },
            {
                name: 'Brazil',
                score: 1656.84
            },
            {
                name: 'Croatia',
                score: 1642.72
            }
        ]
    },
    computed: {
        bestTeams() {
            return this.teams.filter((team) => team.score >= this.min);
        },
        searchTeam() {
            return this.teams.filter((team) => team.name.includes(this.search));
        }
    }
});