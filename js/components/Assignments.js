import AssignmentList from "./AssignmentList.js";

export default {
    components: {
        'assignment-list' : AssignmentList,
    },

    template: `
        <section class="space-y-6">
            <assignment-list title="In Progress" :assignments="filters.inProgress"></assignment-list>
            <assignment-list title="Completed" :assignments="filters.completed"></assignment-list>
        </section>

    `,

    data() {
        return {
            assignments : [
                {id:1, name: 'Finish Project 1', completed: false},
                {id:2, name: 'Finish Project 2', completed: true},
                {id:3, name: 'Finish Project 3', completed: false},
                {id:4, name: 'Finish Project 4', completed: false},
            ]
        }
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(a => ! a.completed),
                completed: this.assignments.filter(a => a.completed),
            }
        }
    }
}