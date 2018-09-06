Vue.component('choose-member', {
    props: ['band'],

    // Template located in the DOM
    // template: `#choose-member-template`,

    // Template with script tag
    // template: `
    //         <div>
    //             <h3 v-if="member">The elected is: {{ member }}</h3>
    //             <template v-else>
    //                 <h3>Greta Van Fleet</h3>
    //                 <ul>
    //                     <li v-for="elected in band">{{ elected }}</li>
    //                 </ul>
    //                 <button @click="chooseMember">Choose member</button>
    //             </template>
    //         </div>`,

    methods: {
        chooseMember() {
            let quantity = this.members.length;
            let index = Math.floor(Math.random() * quantity);
            this.member = this.members[index];
        },
    },
    data() {
        return {
            member: false,
            members: this.band
        }
    }
});

new Vue({
    el: 'main',
    data: {
        gretaVanFleet: [
            'Josh Kiszka', 'Jake Kiszka', 'Sam Kiszka', 'Danny Wagner'
        ]
    }
});