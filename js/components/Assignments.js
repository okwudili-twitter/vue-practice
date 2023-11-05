import AssignmentCreate from "./AssignmentCreate.js";
import AssignmentList from "./AssignmentList.js";

export default {
    components: {
        'assignment-list' : AssignmentList,
        'assignment-create' : AssignmentCreate,
    },

    template: `
        <section class="space-y-6">
            <assignment-list title="In Progress" :assignments="filters.inProgress"></assignment-list>
            <assignment-list title="Completed" :assignments="filters.completed"></assignment-list>

            <assignment-create @add="add" :error="error" ></assignment-create>

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
            error: '',
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
        add(name) {
            // Check if the new_assignment already exists in assignments
            const assignmentExists = this.assignments.some(
                (assignment) => assignment.name.toLowerCase() === name
            );

            if (assignmentExists) {
                this.error = 'Assignment already exists!';
            } else {
                this.assignments.push({
                    name: this.capitalizeString(name),
                    completed: false,
                    id: this.assignments.length + 1
                });

                this.error = '';
            }

        },
        capitalizeString(str) {
            return str.replace(/\b\w/g, function(match) {
              return match.toUpperCase();
            });
        }
    }
}