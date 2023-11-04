import AssignmentList from "./AssignmentList.js";

export default {
    components: {
        'assignment-list' : AssignmentList,
    },

    template: `
        <section class="space-y-6">
            <assignment-list title="In Progress" :assignments="filters.inProgress"></assignment-list>
            <assignment-list title="Completed" :assignments="filters.completed"></assignment-list>

            <form @submit.prevent="add()" >
                <div class="border border-gray-600 text-black">
                    <input v-model="new_assignment" required placeholder="New Assignment..." class="p-2" />
                    <button type="submit" class="bg-white p-2 border-l">Add</button>
                </div>
            </form>

        </section>

    `,

    data() {
        return {
            assignments : [
                {id:1, name: 'Finish Project 1', completed: false},
                {id:2, name: 'Finish Project 2', completed: true},
                {id:3, name: 'Finish Project 3', completed: false},
                {id:4, name: 'Finish Project 4', completed: false},
            ],
            new_assignment: ''
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(a => ! a.completed),
                completed: this.assignments.filter(a => a.completed),
            }
        }
    },

    methods: {
        add() {
            this.assignments.push({
                name: this.capitalizeString(this.new_assignment),
                completed: false,
                id: this.assignments.length + 1
            });

            this.new_assignment = ''
        },
        capitalizeString(str) {
            return str.replace(/\b\w/g, function(match) {
              return match.toUpperCase();
            });
        }
    }
}